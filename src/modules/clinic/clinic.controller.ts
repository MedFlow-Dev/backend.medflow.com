import {
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
    return this._clinicService.createClinic(createClinicDto);
  }

  @Get()
  @Roles(RoleEnum.ADMIN)
  async getAllClinics(
    @Query('page', new ParseIntPipe({ optional: true })) page = 1,
    @Query('limit', new ParseIntPipe({ optional: true })) limit = 10,
    @Query('sortBy') sortBy = 'id',
    @Query('search') search?: string,
  ) {
    const skip = (page - 1) * limit;

    return await this._clinicService.getAllClinics(
      page,
      limit,
      sortBy,
      skip,
      search,
    );
  }

  @Put(':id')
  @Roles(RoleEnum.ADMIN)
  async updateClinic(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateClinicDto: UpdateClinicDto,
  ) {
    return this._clinicService.updateClinic(id, updateClinicDto);
  }

  @Get(':id')
  async getClinicById(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return this._clinicService.getClinicById(id);
  }

  @Roles(RoleEnum.ADMIN)
  @Put(':clinicId/assign-doctor/:doctorId')
  async assignDoctorToAClinic(
    @Param('clinicId', ParseIntPipe) clinicId: number,
    @Param('doctorId', ParseIntPipe) doctorId: number,
  ) {
    return this._clinicService.assignDoctorToAClinic(clinicId, doctorId);
  }

  @Roles(RoleEnum.ADMIN)
  @Put(':clinicId/assign-service/:serviceId')
  async assignServiceToAClinic(
    @Param('clinicId', ParseIntPipe) clinicId: number,
    @Param('serviceId', ParseIntPipe) serviceId: number,
  ) {
    return this._clinicService.assignServiceToAClinic(clinicId, serviceId);
  }

  @Roles(RoleEnum.ADMIN)
  @Put(':clinicId/assign-receptionist/:receptionId')
  async assignReceptionistToAClinic(
    @Param('clinicId', ParseIntPipe) clinicId: number,
    @Param('receptionId', ParseIntPipe) receptionId: number,
  ) {
    return this._clinicService.assignReceptionistToAClinic(
      clinicId,
      receptionId,
    );
  }

  @Roles(RoleEnum.ADMIN)
  @Delete(':id')
  async deleteClinic(@Param('id', ParseIntPipe) id: number) {
    return this._clinicService.deleteClinic(id);
  }
}
