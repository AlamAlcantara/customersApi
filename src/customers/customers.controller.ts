import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
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

  @Get(':id')
  public async getCustomer(@Param('id') id: number) {
    const customer: Customer = await this.customersService.getCustomerById(id);

    if (!customer) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Cliente no existe',
      }, HttpStatus.NOT_FOUND);
    }

    return customer;
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
