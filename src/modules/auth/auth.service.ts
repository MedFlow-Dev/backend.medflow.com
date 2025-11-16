import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dtos/register.dto';
import { RoleEnum } from 'src/common/enums/role.enum';
import { LoginDto } from './dtos/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: registerDto.email },
    });

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    // Find PATIENT role
    const patientRole = await this.prisma.role.findFirst({
      where: { name: RoleEnum.PATIENT },
    });

    if (!patientRole) {
      throw new Error('Patient role not found. Please seed the database.');
    }

    const user = await this.prisma.user.create({
      data: {
        firstname: registerDto.firstname,
        lastname: registerDto.lastname,
        email: registerDto.email,
        gender: registerDto.gender,
        password: hashedPassword,
        phone_number: registerDto.phone_number,
        picture: registerDto.picture,
        doctor_speciality: registerDto.doctor_speciality,
        access_token: '',
        role_id: patientRole.id,
      },
      select: {
        id: true,
        firstname: true,
        lastname: true,
        email: true,
        role: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    // Generate JWT token
    const token = this.jwtService.sign({
      sub: user.id,
      email: user.email,
      role: user.role.name,
    });

    return {
      user,
      access_token: token,
    };
  }

  async login(loginDto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: loginDto.email },
      include: {
        role: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate JWT token
    const token = this.jwtService.sign({
      sub: user.id,
      email: user.email,
      role: user.role.name,
    });

    return {
      user: {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        role: {
          id: user.role.id,
          name: user.role.name,
        },
      },
      access_token: token,
    };
  }

  async validateUser(userId: number) {
    return this.prisma.user.findUnique({
      where: { id: userId },
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
    });
  }

  async logout(userId: number) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { access_token: '' },
    });

    return { message: 'Logged out successfully' };
  }
}
