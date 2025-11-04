import { Module } from '@nestjs/common';
import { PerscriptionController } from './perscription/perscription.controller';
import { PerscriptionController } from './perscription.controller';
import { PerscriptionService } from './perscription.service';

@Module({
  controllers: [PerscriptionController],
  providers: [PerscriptionService]
})
export class PerscriptionModule {}
