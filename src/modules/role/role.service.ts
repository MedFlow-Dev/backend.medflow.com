import { Injectable } from '@nestjs/common';
import { RoleDto } from './dtos/role.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RoleService {
  constructor(private prismaService$: PrismaService) {}

  async getRoles(): Promise<RoleDto[]> {
    return this.prismaService$.role.findMany();
  }

  async findFirstBy(
    args: Prisma.RoleFindFirstArgs) {
    return this.prismaService$.role.findFirst(args
    )
  }
}
