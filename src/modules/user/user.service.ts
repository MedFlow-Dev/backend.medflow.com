import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { RoleService } from '../role/role.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService$: PrismaService,
    private readonly _roleService: RoleService,
  ) {}

  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<{ success: boolean; user?: any; error?: string }> {
    const role = await this._roleService.findFirstBy({
      where: {
        name: createUserDto.role,
      },
    });

    if (!role) {
      return { success: false, error: 'Role not found' };
    }

    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    const user = await this.prismaService$.user.create({
      data: {
        firstname: createUserDto.firstname,
        lastname: createUserDto.lastname,
        email: createUserDto.email,
        gender: createUserDto.gender,
        doctor_speciality: createUserDto.doctor_speciality,
        role: { connect: { id: role.id } },
        password: createUserDto.password,
        picture: createUserDto.picture,
        phone_number: createUserDto.phone_number,
        access_token: '',
      },
    });
    return { success: true, user: user };
  }
}
