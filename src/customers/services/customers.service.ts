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

  public async getCustomerById(id: number): Promise<Customer> {
    return await this.customerRepository.findOne(id);
  }

  public async saveCustomer(customer: Customer): Promise<Customer> {
    return await this.customerRepository.save(customer);
  }

  public async deleteCustomer(id: number) {
    return await this.customerRepository.delete(id);
  }

  public async updateCustomer(id: number, customer: Customer) {
    const customerToUpdate: Customer = await this.customerRepository.findOne(id);
    Object.assign(customerToUpdate, customer);

    return await this.customerRepository.save(customerToUpdate);
  }

}
