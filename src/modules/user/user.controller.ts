import {
  BadRequestException,
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
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { Roles } from '../../common/decorators/roles.decorator';
import { RoleEnum } from '../../common/enums/role.enum';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

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
  @Roles(RoleEnum.ADMIN)
  async getAllUsers(
    @Query('page', new ParseIntPipe({ optional: true })) page: number = 1,
    @Query('limit', new ParseIntPipe({ optional: true })) limit: number = 10,
    @Query('sortBy') sortBy = 'id',
    @Query('search') search?: string,
    @Query('role_id', new ParseIntPipe({ optional: true })) roleId?: number,
  ) {
    const skip = (page - 1) * limit;

    return await this._userService.getAllUsers(
      page,
      limit,
      sortBy,
      skip,
      search,
      roleId,
    );
  }

  @Roles(RoleEnum.ADMIN)
  @Get(':id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    return await this._userService.getUserById(id);
  }

  @Delete(':id')
  @Roles(RoleEnum.ADMIN)
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return await this._userService.deleteUser(id);
  }

  @Put(':id')
  async editUser(
    @CurrentUser() currentUser: any,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    if (currentUser.id !== id) {
      throw new BadRequestException('You are not authorized to edit this user');
    }

    return this._userService.updateUser(id, updateUserDto);
  }
}
