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
import { PrescriptionService } from './prescription.service';
import { Roles } from '../../common/decorators/roles.decorator';
import { RoleEnum } from '../../common/enums/role.enum';
import { CreatePrescriptionDto } from './dtos/create-prescription.dto';
import { UpdatePrescriptionDto } from './dtos/update-prescription.dto';

@Controller('prescription')
export class PrescriptionController {
  constructor(private readonly _prescriptionService: PrescriptionService) {}

  @Get()
  @Roles(RoleEnum.ADMIN)
  async getAllPrescriptions(
    @Query('page', new ParseIntPipe({ optional: true })) page: number = 1,
    @Query('limit', new ParseIntPipe({ optional: true })) limit: number = 10,
    @Query('sortBy') sortBy = 'id',
    @Query('search') search?: string,
  ) {
    const skip = (page - 1) * limit;
    return this._prescriptionService.getAllPrescriptions(
      page,
      limit,
      sortBy,
      skip,
      search,
    );
  }

  @Get('by-clinic/:clinic_id')
  @Roles(RoleEnum.ADMIN, RoleEnum.RECEPTIONIST)
  async getAllPrescriptionsByClinic(
    @Param('clinic_id', ParseIntPipe) clinicId: number,
    @Query('page', new ParseIntPipe({ optional: true })) page: number = 1,
    @Query('limit', new ParseIntPipe({ optional: true })) limit: number = 10,
    @Query('sortBy') sortBy = 'id',
    @Query('search') search?: string,
  ) {
    const skip = (page - 1) * limit;

    return this._prescriptionService.getAllPrescriptionsByClinic(
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
  async getPrescriptionById(@Param('id', ParseIntPipe) id: number) {
    return this._prescriptionService.getPrescriptionById(id);
  }

  @Post(':appointement_id')
  @Roles(RoleEnum.ADMIN)
  async createPrescription(
    @Param('appointement_id', ParseIntPipe) appointementId: number,
    @Body() body: CreatePrescriptionDto,
  ) {
    return this._prescriptionService.createPrescription(appointementId, body);
  }

  @Put(':id')
  @Roles(RoleEnum.DOCTOR, RoleEnum.RECEPTIONIST)
  async updatePrescription(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdatePrescriptionDto,
  ) {
    return this._prescriptionService.updatePrescription(id, body);
  }

  @Delete(':id')
  @Roles(RoleEnum.ADMIN, RoleEnum.DOCTOR, RoleEnum.RECEPTIONIST)
  async deletePrescription(@Param('id', ParseIntPipe) id: number) {
    return this._prescriptionService.deletePrescription(id);
  }
}
