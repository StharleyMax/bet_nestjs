import { ApiProperty } from '@nestjs/swagger';

export class ClientsDTO {
  @ApiProperty({ description: 'name', example: 'Marcio' })
  name: string;

  @ApiProperty({ description: 'email', example: 'email@email.com.br' })
  email: string;
}
