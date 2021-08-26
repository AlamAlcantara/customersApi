import { Controller, Get } from '@nestjs/common';
import { CustomersService } from './services/customers.service';

@Controller('customers')
export class CustomersController {

  constructor(private customersService: CustomersService) {
  }

  @Get()
  public async getCustomers() {
    return await this.customersService.getAll();
  }

}
