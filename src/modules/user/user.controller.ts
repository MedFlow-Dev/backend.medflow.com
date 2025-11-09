import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

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

  @Get()
  async getAllUsers(
    @Query('page') page = '1',
    @Query('limit') limit = '10',
    @Query('sortBy') sortBy = 'id',
    @Query() search?: string,
    @Query() roleId?: number,
  ) {
    const parsedPage = parseInt(page, 10);
    const parsedLimit = parseInt(limit, 10);
    const skip = (parsedPage - 1) * parsedLimit;

    return await this._userService.getAllUsers(
      parsedPage,
      parsedLimit,
      sortBy,
      skip,
      search,
      roleId,
    );
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return await this._userService.getUserById(id);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<any> {
    return await this._userService.deleteUser(id);
  }

  @Put(':id')
  EditeUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this._userService.updateUser(id, updateUserDto);
  }
}
