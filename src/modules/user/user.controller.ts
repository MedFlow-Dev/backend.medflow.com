import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const result = await this._userService.createUser(createUserDto);

    if (!result.success) {
      throw new BadRequestException(result.error);
    }
    return {
      message: 'User registered successfully.',
    };
  }
}
