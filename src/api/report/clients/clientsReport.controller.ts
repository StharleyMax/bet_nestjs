import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('clients-report')
@ApiTags('Clients Report')
export class ClientsReportController {
  @Get()
  @ApiOperation({ summary: 'Report ( Relatórios ) ' })
  @ApiResponse({ status: 200, description: 'Report All ' })
  async findAll(): Promise<any> {
    return 'Estou no controller Relatórios';
  }
}
