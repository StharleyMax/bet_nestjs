import { Module } from '@nestjs/common';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [RegisterModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiModule {}
