import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CustomersService } from './services/customers.service';
import { Customer } from '../models/customer.entity';

@Controller('customers')
export class CustomersController {

  constructor(private customersService: CustomersService) {
  }

  @Get()
  public async getCustomers() {
    return await this.customersService.getAll();
  }

  @Post()
  public async createCustomer(@Body() customer: Customer) {
    return await this.customersService.saveCustomer(customer);
  }

  @Put(':id')
  public async updateCustomer(@Param('id') id: number,
                              @Body() customer: Customer) {
    return await this.customersService.updateCustomer(id, customer);
  }

  @Delete(':id')
  @HttpCode(204)
  public async deleteCustomer(@Param('id') id: number) {
    return await this.customersService.deleteCustomer(id);
  }

}
