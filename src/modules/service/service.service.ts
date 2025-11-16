import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateServiceDto } from './dtos/create-service.dto';
import { PaginationResponseDto } from '../../common/dtos/pagination-response.dto';
import { ClinicServices, Prisma, Service } from '@prisma/client';
import { UpdateServiceDto } from './dtos/update-service.dto';

@Injectable()
export class ServiceService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllServices(
    page: number,
    limit: number,
    sortBy: string,
    skip: number,
    search?: string,
  ): Promise<PaginationResponseDto<Service>> {
    const where: Prisma.ServiceWhereInput = {
      ...(search && {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } },
        ],
      }),
    };

    const total = await this.prisma.service.count({ where });
    const totalPages = Math.ceil(total / limit);
    const services: Service[] = await this.prisma.service.findMany({
      skip: skip,
      take: limit,
      where,
      orderBy: { [sortBy]: 'asc' },
    });

    return {
      data: services,
      meta: {
        total,
        totalPages,
        page,
      },
    };
  }

  async getServiceById(id: number): Promise<Service> {
    const service: Service | null = await this.prisma.service.findUnique({
      where: { id },
    });

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    return service;
  }

  async createService(
    body: CreateServiceDto,
  ): Promise<{ success: boolean; error?: string }> {
    const service = await this.prisma.service.create({
      data: {
        name: body.name,
        cost: body.cost,
        description: body.description,
      },
    });
    if (!service) {
      return { success: false, error: 'Service not found' };
    }
    return { success: true };
  }

  async updateService(
    id: number,
    updateService: UpdateServiceDto,
  ): Promise<Service> {
    const serviceToUpdate = await this.prisma.service.findUnique({
      where: { id },
    });

    if (!serviceToUpdate) {
      throw new NotFoundException('Service not found');
    }

    return this.prisma.service.update({
      where: { id },
      data: {
        name: updateService.name ?? serviceToUpdate.name,
        cost: updateService.cost ?? serviceToUpdate.cost,
        description: updateService.description ?? serviceToUpdate.description,
      },
    });
  }

  async deleteService(id: number) {
    const serviceToDelete = await this.prisma.service.findUnique({
      where: { id },
    });

    if (!serviceToDelete) {
      throw new NotFoundException('Service not found');
    }

    return await this.prisma.service.delete({
      where: { id },
    });
  }

  async getAllServicesByClinic(
    clinicId: number,
    page: number,
    limit: number,
    sortBy: string,
    skip: number,
    search?: string,
  ): Promise<PaginationResponseDto<ClinicServices>> {
    const clinic = await this.prisma.clinic.findUnique({
      where: { id: clinicId },
    });

    if (!clinic) {
      throw new NotFoundException('Clinic not found');
    }

    const where: Prisma.ClinicServicesWhereInput = {
      clinic_id: clinicId,
      ...(search && {
        OR: [
          {
            service: {
              name: {
                contains: search,
                mode: 'insensitive',
              },
            },
          },
          {
            service: {
              description: {
                contains: search,
                mode: 'insensitive',
              },
            },
          },
        ],
      }),
    };

    const [services, total] = await Promise.all([
      this.prisma.clinicServices.findMany({
        skip: skip,
        take: limit,
        where,
        orderBy: { [sortBy]: 'asc' },
        include: {
          service: true,
        },
      }),
      this.prisma.clinicServices.count({ where }),
    ]);
    const totalPages = Math.ceil(total / limit);

    return {
      data: services,
      meta: {
        total,
        totalPages,
        page,
      },
    };
  }
}
