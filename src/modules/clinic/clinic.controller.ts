import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { Roles } from '../../common/decorators/roles.decorator';
import { RoleEnum } from '../../common/enums/role.enum';
import { CreateClinicDto } from './dtos/create-clinic.dto';
import { UpdateClinicDto } from './dtos/update-clinic.dto';

@Controller('clinic')
export class ClinicController {
  constructor(private readonly _clinicService: ClinicService) {}

  @Post()
  @Roles(RoleEnum.ADMIN)
  async createClinic(@Body() createClinicDto: CreateClinicDto) {
    await this._clinicService.createClinic(createClinicDto);
  }

  @Get()
  @Roles(RoleEnum.ADMIN)
  async getAllClinics(
    @Query('page') page = '1',
    @Query('limit') limit = '10',
    @Query('sortBy') sortBy = 'id',
    @Query() search?: string,
  ) {
    const parsedPage = parseInt(page, 10);
    const parsedLimit = parseInt(limit, 10);
    const skip = (parsedPage - 1) * parsedLimit;

    return await this._clinicService.getAllClinics(
      parsedPage,
      parsedLimit,
      sortBy,
      skip,
      search,
    );
  }

  @Put(':id')
  @Roles(RoleEnum.ADMIN)
  async updateClinic(
    @Param() id: number,
    @Body() updateClinicDto: UpdateClinicDto,
  ) {
    return this._clinicService.updateClinic(id, updateClinicDto);
  }
}
