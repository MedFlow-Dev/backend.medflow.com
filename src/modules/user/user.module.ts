import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from '../prisma/prisma.module';
import { RoleModule } from '../role/role.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaModule, RoleModule],
})
export class UserModule {}
