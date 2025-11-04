import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ClinicModule } from './modules/clinic/clinic.module';
import { AppointementModule } from './modules/appointment/appointement.module';
import { InvoiceModule } from './modules/invoice/invoice.module';
import { ServiceModule } from './modules/service/service.module';
import { PerscriptionModule } from './modules/perscription/perscription.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ClinicModule,
    AppointementModule,
    InvoiceModule,
    ServiceModule,
    PerscriptionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
