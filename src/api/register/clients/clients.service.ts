import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Clients } from 'src/database/entities/clients.entities';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Clients)
    private readonly clientRepository: Repository<Clients>,
  ) {}

  async ClientAll(): Promise<Clients[]> {
    return await this.clientRepository.find();
  }
}
