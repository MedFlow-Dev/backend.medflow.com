import { Controller, Get } from '@nestjs/common';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
  constructor(private readonly _roleService: RoleService) {}

  @Get()
  async getRoles() {
    return this._roleService.getRoles();
  }
}
