import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { Prisma, Role } from 'prisma/generated/prisma';

@Injectable()
export class RoleService {
  constructor(private _prismaService: PrismaService) {}

  async findFirstBy(args: Prisma.RoleFindFirstArgs) {
    return this._prismaService.role.findFirst(args);
  }

  async getRoleByUniqueInput(
    roleWhereUniqueInput: Prisma.RoleWhereUniqueInput,
  ): Promise<Role | null> {
    return this._prismaService.role.findUnique({
      where: roleWhereUniqueInput,
    });
  }

  async getRoles(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.RoleWhereUniqueInput;
    where?: Prisma.RoleWhereInput;
    orderBy?: Prisma.RoleOrderByWithRelationInput;
  }): Promise<Role[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this._prismaService.role.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createRole(data: Prisma.RoleCreateInput): Promise<Role> {
    return this._prismaService.role.create({
      data,
    });
  }

  async updateRole(params: {
    where: Prisma.RoleWhereUniqueInput;
    data: Prisma.RoleUpdateInput;
  }): Promise<Role> {
    const { where, data } = params;
    return this._prismaService.role.update({
      where,
      data,
    });
  }

  async deleteRole(where: Prisma.RoleWhereUniqueInput): Promise<Role> {
    return this._prismaService.role.delete({
      where,
    });
  }

  async createMany(createManyRoleDto: Prisma.RoleCreateManyArgs) {
    return this._prismaService.role.createMany(createManyRoleDto);
  }
}
