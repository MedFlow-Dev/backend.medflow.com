import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PaginationResponseDto } from '../../common/dtos/pagination-response.dto';
import { Perscription, Prisma } from '@prisma/client';
import { CreatePrescriptionDto } from './dtos/create-prescription.dto';

@Injectable()
export class PrescriptionService {
  constructor(private prisma: PrismaService) {}

  async getAllPrescriptions(
    page: number,
    limit: number,
    sortBy: string,
    skip: number,
    search?: string,
  ): Promise<PaginationResponseDto<Perscription>> {
    const where: Prisma.PerscriptionWhereInput = {
      ...(search && {
        OR: [
          { title: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } },
        ],
      }),
    };

    const total = await this.prisma.perscription.count({ where });
    const prescriptions: Perscription[] =
      await this.prisma.perscription.findMany({
        skip: skip,
        take: limit,
        where,
        orderBy: { [sortBy]: 'asc' },
        include: {
          appointement: true,
        },
      });

    return {
      data: prescriptions,
      meta: {
        total,
        totalPages: Math.ceil(total / limit),
        page,
      },
    };
  }

  async getAllPrescriptionsByClinic(
    clinicId: number,
    page: number,
    limit: number,
    sortBy: string,
    skip: number,
    search?: string,
  ): Promise<PaginationResponseDto<Perscription>> {
    const clinic = await this.prisma.clinic.findUnique({
      where: { id: clinicId },
    });

    if (!clinic) {
      throw new NotFoundException('Clinic not found');
    }

    const where: Prisma.PerscriptionWhereInput = {
      ...(clinicId && { clinic_id: clinicId }),
      ...(search && {
        OR: [
          { title: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } },
        ],
      }),
    };

    const [prescriptions, total] = await Promise.all([
      this.prisma.perscription.findMany({
        skip: skip,
        take: limit,
        where,
        orderBy: { [sortBy]: 'asc' },
      }),
      this.prisma.perscription.count({ where }),
    ]);

    return {
      data: prescriptions,
      meta: {
        total,
        totalPages: Math.ceil(total / limit),
        page,
      },
    };
  }

  async getPrescriptionById(id: number): Promise<Perscription> {
    const prescription = await this.prisma.perscription.findUnique({
      where: { id },
      include: {
        appointement: true,
      },
    });
    if (!prescription) {
      throw new NotFoundException('Prescription not found');
    }
    return prescription;
  }

  async createPrescription(
    appointementId: number,
    createPrescriptionDto: CreatePrescriptionDto,
  ): Promise<Perscription> {
    const appointement = await this.prisma.appointement.findUnique({
      where: { id: appointementId },
    });

    if (!appointement) {
      throw new NotFoundException('Appointement not found');
    }

    return this.prisma.perscription.create({
      data: {
        title: createPrescriptionDto.title,
        description: createPrescriptionDto.description,
        appointement_id: appointementId,
      },
    });
  }

  async updatePrescription(id: number, data: Prisma.PerscriptionUpdateInput) {
    const prescription = await this.prisma.perscription.update({
      where: { id },
      data,
    });
    if (!prescription) {
      throw new NotFoundException('Prescription not found');
    }
    return prescription;
  }

  async deletePrescription(id: number) {
    const prescription = await this.prisma.perscription.delete({
      where: { id },
    });
    if (!prescription) {
      throw new NotFoundException('Prescription not found');
    }
    return { message: 'Prescription deleted successfully' };
  }
}
