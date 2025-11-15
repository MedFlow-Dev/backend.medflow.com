import { Injectable } from '@nestjs/common';
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
    const clinic = await this.prisma.clinic.create({
      data: {
        name: createClinicDto.name,
        rooms_number: createClinicDto.rooms_number,
        users: {
          connect: createClinicDto.users.map((userId) => ({ id: userId })),
        },
        services: {
          connect: createClinicDto.services.map((serviceId) => ({
            id: serviceId,
          })),
        },
        appointements: {
          connect: createClinicDto.appointements.map((appointmentId) => ({
            id: appointmentId,
          })),
        },
      },
    });
    if (!clinic) {
      return { success: false, error: 'Clinic not found' };
    }
    return { success: true };
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
    const totalPages = Math.ceil(total / limit);
    const clinics: Clinic[] = await this.prisma.clinic.findMany({
      skip: skip,
      take: limit,
      where,
      orderBy: { [sortBy]: 'asc' },
    });

    return {
      data: clinics,
      meta: {
        total,
        totalPages,
        page,
      },
    };
  }

  async getClinicById(id: number): Promise<Clinic> {
    const clinic = await this.prisma.clinic.findUnique({
      where: {
        id: id,
      },
    });

    if (!clinic) {
      throw new Error('Clinic not found');
    }

    return clinic;
  }

  async updateClinic(id: number, updateClinicDto: UpdateClinicDto) {
    const clinicToUpdate = await this.prisma.clinic.findUnique({
      where: { id },
    });

    if (!clinicToUpdate) {
      throw new Error('Clinic not found');
    }

    return this.prisma.clinic.update({
      where: { id },
      data: {
        name: updateClinicDto.name,
        rooms_number: updateClinicDto.rooms_number,
        users: {
          connect: updateClinicDto.users.map((userId) => ({ id: userId })),
        },
        services: {
          connect: updateClinicDto.services.map((serviceId) => ({
            id: serviceId,
          })),
        },
        appointements: {
          connect: updateClinicDto.appointements.map((appointmentId) => ({
            id: appointmentId,
          })),
        },
      },
    });
  }

  async deleteClinic(id: number) {
    const clinicToDelete = await this.prisma.clinic.findUnique({
      where: { id },
    });

    if (!clinicToDelete) {
      throw new Error('Clinic not found');
    }

    return this.prisma.clinic.delete({ where: { id } });
  }

  async assignDoctorToAClinic(clinicId: number, doctorId: number) {
    const doctor = await this.prisma.user.findUnique({
      where: { id: doctorId, role: { name: RoleEnum.DOCTOR } },
    });

    if (!doctor) {
      throw new Error('Doctor not found');
    }

    const clinic = await this.prisma.clinic.findUnique({
      where: { id: clinicId },
    });

    if (!clinic) {
      throw new Error('Clinic not found');
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
      throw new Error('Service not found');
    }

    const clinic = await this.prisma.clinic.findUnique({
      where: { id: clinicId },
    });

    if (!clinic) {
      throw new Error('Clinic not found');
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

  async assignReceptionToAClinic(clinicId: number, receptionId: number) {
    const receptionist = await this.prisma.user.findUnique({
      where: { id: receptionId, role: { name: RoleEnum.RECEPTIONIST } },
    });

    if (!receptionist) {
      throw new Error('Receptionist not found');
    }

    const clinic = await this.prisma.clinic.findUnique({
      where: { id: clinicId },
    });

    if (!clinic) {
      throw new Error('Clinic not found');
    }

    return this.prisma.clinic.update({
      where: { id: clinicId },
      data: {
        users: {
          connect: { id: receptionId },
        },
      },
    });
  }
}
