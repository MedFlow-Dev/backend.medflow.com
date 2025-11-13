import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import type { User } from '@prisma/client';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Public } from '../../common/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private _authService: AuthService) {}

  @Public()
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this._authService.register(registerDto);
  }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this._authService.login(loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('logout')
  async logout(@CurrentUser() user: User) {
    return this._authService.logout(user.id);
  }
}
