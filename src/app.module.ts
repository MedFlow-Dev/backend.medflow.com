import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ClinicModule } from './modules/clinic/clinic.module';
import { InvoiceModule } from './modules/invoice/invoice.module';
import { ServiceModule } from './modules/service/service.module';
import { AppointmentModule } from './modules/appointment/appointement.module';
import { PrescriptionModule } from './modules/perscription/prescription.module';
import { RoleModule } from './modules/role/role.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ClinicModule,
    AppointmentModule,
    InvoiceModule,
    ServiceModule,
    PrescriptionModule,
    RoleModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
