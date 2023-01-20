import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('clients')
@ApiTags('Clients')
export class ClientsController {
  @Get()
  async findAll(): Promise<any> {
    return 'Estou no controller';
  }
}
