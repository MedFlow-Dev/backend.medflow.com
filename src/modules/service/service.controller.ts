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
  UseGuards,
} from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dtos/create-service.dto';
import { UpdateServiceDto } from './dtos/update-service.dto';
import { Roles } from '../../common/decorators/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RoleEnum } from '../../common/enums/role.enum';

@Controller('service')
@UseGuards(AuthGuard('jwt'))
export class ServiceController {
  constructor(private readonly _serviceService: ServiceService) {}

  @Post()
  @Roles(RoleEnum.ADMIN )
  async createService(@Body() body: CreateServiceDto) {
    const result = await this._serviceService.createService(body);

    if (!result.success) {
      throw new BadRequestException(result.error);
    }

    return {
      message: 'Service created successfully.',
    };
  }

  @Get()
  async getAllServices(
    @Query('page') page = '1',
    @Query('limit') limit = '10',
    @Query('sortBy') sortBy = 'id',
    @Query() search?: string,
  ) {
    const parsedPage = parseInt(page, 10);
    const parsedLimit = parseInt(limit, 10);
    const skip = (parsedPage - 1) * parsedLimit;

    return await this._serviceService.getAllServices(
      parsedPage,
      parsedLimit,
      sortBy,
      skip,
      search,
    );
  }

  @Get(':id')
  async getServiceById(@Param('id') id: number) {
    return await this._serviceService.getServiceById(id);
  }

  @Put(':id')
  async updateService(@Param('id') id: number, @Body() body: UpdateServiceDto) {
    return this._serviceService.updateService(id, body);
  }

  @Delete(':id')
  async deleteService(@Param() id: number) {
    return await this._serviceService.deleteService(id);
  }
}
