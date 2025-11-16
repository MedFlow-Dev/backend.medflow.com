import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClinicDto } from './dtos/create-clinic.dto';
import { PaginationResponseDto } from '../../common/dtos/pagination-response.dto';
import { Clinic, Prisma } from '@prisma/client';
import { UpdateClinicDto } from './dtos/update-clinic.dto';
import { RoleEnum } from '../../common/enums/role.enum';

@Injectable()
export class ClinicService {
  constructor(private prisma: PrismaService) {}

  async createClinic(createClinicDto: CreateClinicDto) {
    console.log(createClinicDto);
    const clinic = await this.prisma.clinic.create({
      data: {
        name: createClinicDto.name,
        rooms_number: createClinicDto.rooms_number,
        users: {
          connect:
            createClinicDto.users?.map((userId) => ({ id: userId })) || [],
        },
        services: {
          create:
            createClinicDto.services?.map((serviceId) => ({
              service: {
                connect: { id: serviceId },
              },
            })) || [],
        },
        appointements: {
          connect:
            createClinicDto.appointements?.map((appointmentId) => ({
              id: appointmentId,
            })) || [],
        },
      },
    });
    if (!clinic) {
      return { success: false, error: 'Clinic not found' };
    }
    return { success: true, clinic: clinic };
  }

  async getAllClinics(
    page: number,
    limit: number,
    sortBy: string,
    skip: number,
    search?: string,
  ): Promise<PaginationResponseDto<Clinic>> {
    const where: Prisma.ClinicWhereInput = {
      ...(search && {
        OR: [{ name: { contains: search, mode: 'insensitive' } }],
      }),
    };

    const total = await this.prisma.clinic.count({ where });
    const clinics: Clinic[] = await this.prisma.clinic.findMany({
      skip: skip,
      take: limit,
      where,
      orderBy: { [sortBy]: 'asc' },
      include: {
        services: true,
      },
    });

    return {
      data: clinics,
      meta: {
        total,
        totalPages: Math.ceil(total / limit),
        page,
      },
    };
  }

  async getClinicById(id: number): Promise<any> {
    const clinic = await this.prisma.clinic.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        rooms_number: true,
        receptionist_id: true,
        services: {
          select: {
            service: true,
          },
        },
        users: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
            picture: true,
            role: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    if (!clinic) {
      throw new NotFoundException('Clinic not found');
    }

    return {
      ...clinic,
      services: clinic.services.map((cs) => cs.service),
    };
  }

  async updateClinic(id: number, updateClinicDto: UpdateClinicDto) {
    const clinicToUpdate = await this.prisma.clinic.findUnique({
      where: { id },
    });

    if (!clinicToUpdate) {
      throw new NotFoundException(`Clinic with id: ${id} not found`);
    }

    return this.prisma.clinic.update({
      where: { id },
      data: {
        ...(updateClinicDto.name && { name: updateClinicDto.name }),
        ...(updateClinicDto.rooms_number && {
          rooms_number: updateClinicDto.rooms_number,
        }),
        ...(updateClinicDto.users?.length > 0 && {
          users: {
            connect: updateClinicDto.users.map((userId) => ({ id: userId })),
          },
        }),
        ...(updateClinicDto.services?.length > 0 && {
          services: {
            connect: updateClinicDto.services.map((serviceId) => ({
              id: serviceId,
            })),
          },
        }),
        ...(updateClinicDto.appointements?.length > 0 && {
          appointements: {
            connect: updateClinicDto.appointements.map((appointmentId) => ({
              id: appointmentId,
            })),
          },
        }),
      },
    });
  }

  async deleteClinic(id: number) {
    const clinicToDelete = await this.prisma.clinic.findUnique({
      where: { id },
    });

    if (!clinicToDelete) {
      throw new NotFoundException('Clinic not found');
    }

    return this.prisma.clinic.delete({ where: { id } });
  }

  async assignDoctorToAClinic(clinicId: number, doctorId: number) {
    const doctor = await this.prisma.user.findUnique({
      where: { id: doctorId, role: { name: RoleEnum.DOCTOR } },
    });

    if (!doctor) {
      throw new NotFoundException(`Doctor with id: ${doctorId} not found`);
    }

    const clinic = await this.prisma.clinic.findUnique({
      where: { id: clinicId },
    });

    if (!clinic) {
      throw new NotFoundException(`Clinic with id: ${clinicId} not found`);
    }

    return this.prisma.clinic.update({
      where: { id: clinicId },
      data: {
        users: {
          connect: { id: doctorId },
        },
      },
    });
  }

  async assignServiceToAClinic(clinicId: number, serviceId: number) {
    const service = await this.prisma.service.findUnique({
      where: { id: serviceId },
    });

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    const clinic = await this.prisma.clinic.findUnique({
      where: { id: clinicId },
    });

    if (!clinic) {
      throw new NotFoundException(`Clinic with id: ${clinicId} not found`);
    }

    return this.prisma.clinic.update({
      where: { id: clinicId },
      data: {
        services: {
          connect: { id: serviceId },
        },
      },
    });
  }

  async assignReceptionistToAClinic(clinicId: number, receptionId: number) {
    const receptionist = await this.prisma.user.findUnique({
      where: { id: receptionId, role: { name: RoleEnum.RECEPTIONIST } },
    });

    if (!receptionist) {
      console.log('wiw');
      throw new NotFoundException('Receptionist not found');
    }

    if (receptionist.clinic_id) {
      throw new BadRequestException(
        'Receptionist already assigned to a clinic',
      );
    }

    const clinic = await this.prisma.clinic.findUnique({
      where: { id: clinicId },
    });

    if (!clinic) {
      throw new NotFoundException('Clinic not found');
    }

    return this.prisma.clinic.update({
      where: { id: clinicId },
      data: {
        receptionist_id: receptionId,
      },
    });
  }
}