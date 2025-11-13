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
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import { RolesGuard } from './common/guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
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
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
