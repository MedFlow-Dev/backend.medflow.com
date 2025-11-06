import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService$: PrismaService) {}

  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<{ success: boolean; error?: string }> {
    console.log(createUserDto);
    const result = await this.prismaService$.user.create({
      data: {

      },
    });
    return { success: true };
  }
}
