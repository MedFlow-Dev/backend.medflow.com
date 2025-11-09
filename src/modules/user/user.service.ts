import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { RoleService } from '../role/role.service';
import * as bcrypt from 'bcrypt';
import { PaginationResponseDto } from '../../common/dtos/pagination-response.dto';
import { Prisma, User } from '../../../prisma/generated/prisma';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly _roleService: RoleService,
  ) {}

  async getAllUsers(
    page: number,
    limit: number,
    sortBy: string,
    skip: number,
    search?: string,
    roleId?: number,
  ): Promise<PaginationResponseDto<User>> {
    const where: Prisma.UserWhereInput = {
      ...(roleId && { roleId }),
      ...(search && {
        OR: [
          { email: { contains: search, mode: 'insensitive' } },
          { firstname: { contains: search, mode: 'insensitive' } },
          { lastname: { contains: search, mode: 'insensitive' } },
        ],
      }),
    };

    const total = await this.prisma.user.count({ where });
    const totalPages = Math.ceil(total / limit);
    const users: User[] = await this.prisma.user.findMany({
      skip: skip,
      take: limit,
      where,
      orderBy: { [sortBy]: 'asc' },
      include: {
        role: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return {
      data: users,
      meta: {
        total,
        totalPages,
        page,
      },
    };
  }

  async createUser(
    createUser: CreateUserDto,
  ): Promise<{ success: boolean; user?: any; error?: string }> {
    const role = await this._roleService.findFirstBy({
      where: {
        name: createUser.role,
      },
    });

    if (!role) {
      return { success: false, error: 'Role not found' };
    }

    createUser.password = await bcrypt.hash(createUser.password, 10);
    const user = await this.prisma.user.create({
      data: {
        firstname: createUser.firstname,
        lastname: createUser.lastname,
        email: createUser.email,
        gender: createUser.gender,
        doctor_speciality: createUser.doctor_speciality,
        role: { connect: { id: role.id } },
        password: createUser.password,
        picture: createUser.picture,
        phone_number: createUser.phone_number,
        access_token: '',
      },
    });
    return { success: true, user: user };
  }

  async getUserById(id: number): Promise<User> {
    const user: User | null = await this.prisma.user.findUnique({
      where: { id },
      include: {
        role: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async updateUser(id: number, updateUser: UpdateUserDto): Promise<User> {
    const userToUpdate = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!userToUpdate) {
      throw new NotFoundException('User not found');
    }

    if (updateUser.email && updateUser.email !== userToUpdate.email) {
      const emailExists = await this.prisma.user.findUnique({
        where: {
          email: updateUser.email,
        },
      });

      if (emailExists) {
        throw new ConflictException('Email already exists');
      }
    }

    let hashedPassword: string | undefined;
    if (updateUser.password) {
      hashedPassword = await bcrypt.hash(updateUser.password, 10);
    }

    return (await this.prisma.user.update({
      where: { id },
      data: {
        ...updateUser,
        ...(hashedPassword && { password: hashedPassword }),
      },
      include: {
        role: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })) as User;
  }

  async deleteUser(id: number): Promise<any> {
    const userToDelete = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!userToDelete) {
      throw new NotFoundException('User not found');
    }

    return this.prisma.user.delete({
      where: { id },
    });
  }
}
