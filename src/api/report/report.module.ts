import { Module } from '@nestjs/common';
import { ClientsReportModule } from './clients/clientsReport.module';

@Module({
  imports: [ClientsReportModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class ReportModule {}
