import { Module } from '@nestjs/common';
import { ClientsReportController } from './clientsReport.controller';
import { ClientsReportService } from './clientsReport.service';

@Module({
  imports: [],
  controllers: [ClientsReportController],
  providers: [ClientsReportService],
  exports: [ClientsReportService],
})
export class ClientsReportModule {}
