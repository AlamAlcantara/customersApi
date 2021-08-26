import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from '../../models/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService {

  constructor(@InjectRepository(Customer) private readonly customerRepository: Repository<Customer>) {
  }

  public async getAll(): Promise<Customer[]> {
    return await this.customerRepository.find();
  }

}
