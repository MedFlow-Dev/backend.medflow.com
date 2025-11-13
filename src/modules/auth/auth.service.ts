import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { RoleService } from '../role/role.service'; // Adjust path
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dtos/register.dto';
import { User } from '../../../prisma/generated/prisma';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private roleService: RoleService,
  ) {}

  async register(registerDto: RegisterDto): Promise<User> {
    const existingUser: User | null = await this.prisma.user.findUnique({
      where: { email: registerDto.email },
    });

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const role = await this.roleService.findFirstBy({
      where: { name: 'PATIENT' },
    });

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    return (await this.prisma.user.create({
      data: {
        firstname: registerDto.firstname,
        lastname: registerDto.lastname,
        email: registerDto.email,
        gender: registerDto.gender,
        password: hashedPassword,
        phone_number: registerDto.phone_number,
        picture: registerDto.picture,
        doctor_speciality: registerDto.doctor_speciality,
        access_token: '', // Will be updated on login
        role: {
          connect: { id: role.id },
        },
      },
      select: {
        id: true,
        firstname: true,
        lastname: true,
        email: true,
        gender: true,
        phone_number: true,
        picture: true,
        doctor_speciality: true,
        role: {
          select: {
            id: true,
            name: true,
          },
        },
        created_at: true,
      },
    })) as User;
  }

  async login(email: string, password: string) {
    const user: User | null = await this.prisma.user.findUnique({
      where: { email },
      include: {
        role: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      sub: user.id,
      email: user.email,
      roleId: user.role_id,
    };

    const access_token = await this.jwtService.signAsync(payload);

    // Update access_token in database
    await this.prisma.user.update({
      where: { id: user.id },
      data: { access_token },
    });

    return {
      access_token,
      user: {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        gender: user.gender,
        phone_number: user.phone_number,
        picture: user.picture,
        doctor_speciality: user.doctor_speciality,
        roleId: user.role_id,
      },
    };
  }

  async validateUser(userId: number): Promise<User | null> {
    return (await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        role: true,
      },
      select: {
        id: true,
        firstname: true,
        lastname: true,
        email: true,
        gender: true,
        phone_number: true,
        picture: true,
        doctor_speciality: true,
        role: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })) as User | null;
  }

  async logout(userId: number) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { access_token: '' },
    });

    return { message: 'Logged out successfully' };
  }
}
