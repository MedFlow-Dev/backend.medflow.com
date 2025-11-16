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
  @Roles(RoleEnum.ADMIN)
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
  @Roles(RoleEnum.ADMIN)
  async getAllServices(
    @Query('page', new ParseIntPipe({ optional: true })) page = 1,
    @Query('limit', new ParseIntPipe({ optional: true })) limit = 10,
    @Query('sortBy') sortBy = 'id',
    @Query('search') search?: string,
  ) {
    const skip = (page - 1) * limit;

    return await this._serviceService.getAllServices(
      page,
      limit,
      sortBy,
      skip,
      search,
    );
  }

  @Get('by-clinic/:clinic_id')
  async getAllServicesByClinic(
    @Param('clinic_id', ParseIntPipe) clinicId: number,
    @Query('page', new ParseIntPipe({ optional: true })) page = 1,
    @Query('limit', new ParseIntPipe({ optional: true })) limit = 10,
    @Query('sortBy') sortBy = 'id',
    @Query('search') search?: string,
  ) {
    const skip = (page - 1) * limit;

    return this._serviceService.getAllServicesByClinic(
      clinicId,
      page,
      limit,
      sortBy,
      skip,
      search,
    );
  }

  @Get(':id')
  @Roles(RoleEnum.ADMIN)
  async getServiceById(@Param('id', ParseIntPipe) id: number) {
    return await this._serviceService.getServiceById(id);
  }

  @Put(':id')
  @Roles(RoleEnum.ADMIN)
  async updateService(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateServiceDto,
  ) {
    return this._serviceService.updateService(id, body);
  }

  @Delete(':id')
  @Roles(RoleEnum.ADMIN)
  async deleteService(@Param('id', ParseIntPipe) id: number) {
    return await this._serviceService.deleteService(id);
  }

  // TODO: Assign service to a clinic
  // TODO: Get all services assigned to a clinic
  // TODO: Get all services assigned to a doctor
}
