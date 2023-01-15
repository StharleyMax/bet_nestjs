import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: 5432,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      entities: [],
      migrations: [],
      synchronize: false,
    }),
  ],
})
export class DatabaseModule {}
