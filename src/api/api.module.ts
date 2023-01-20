import { Module } from '@nestjs/common';
import { RegisterModule } from './register/register.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [RegisterModule, ReportModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiModule {}
