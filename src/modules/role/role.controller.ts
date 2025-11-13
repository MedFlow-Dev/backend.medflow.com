import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dtos/create-role.dto';
import { Prisma } from '@prisma/client';
import { UpdateRoleDto } from './dtos/update-role.dto';
import { Roles } from '../../common/decorators/roles.decorator';
import { RoleEnum } from '../../common/enums/role.enum';

@Controller('role')
export class RoleController {
  constructor(private readonly _roleService: RoleService) {}

  @Post()
  @Roles(RoleEnum.ADMIN)
  async createRole(@Body() createRoleDto: CreateRoleDto) {
    return await this._roleService.createRole(
      createRoleDto as Prisma.RoleCreateInput,
    );
  }

  @Get(':id')
  async getRoleById(@Param('id', ParseIntPipe) id: number) {
    return await this._roleService.getRoleByUniqueInput({ id });
  }

  @Get()
  @Roles(RoleEnum.ADMIN)
  async getRoles(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,
    @Query('where') where?: string,
    @Query('orderBy') orderBy?: string,
  ) {
    return await this._roleService.getRoles({
      skip: skip ? parseInt(skip) : undefined,
      take: take ? parseInt(take) : undefined,
      cursor: cursor
        ? (JSON.parse(cursor) as Prisma.RoleWhereUniqueInput)
        : undefined,
      where: where ? (JSON.parse(where) as Prisma.RoleWhereInput) : undefined,
      orderBy: orderBy
        ? (JSON.parse(orderBy) as Prisma.RoleOrderByWithRelationInput)
        : undefined,
    });
  }

  @Put(':id')
  @Roles(RoleEnum.ADMIN)
  async updateRole(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRoleDto: UpdateRoleDto,
  ) {
    return await this._roleService.updateRole({
      where: { id },
      data: updateRoleDto as Prisma.RoleUpdateInput,
    });
  }

  @Delete(':id')
  @Roles(RoleEnum.ADMIN)
  async deleteRole(@Param('id', ParseIntPipe) id: number) {
    return await this._roleService.deleteRole({ id });
  }
}
