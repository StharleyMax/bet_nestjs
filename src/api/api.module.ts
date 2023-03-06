import { Module } from '@nestjs/common';
import { ClientsModule } from './register/clients/clients.module';

@Module({
  imports: [ClientsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiModule {}
