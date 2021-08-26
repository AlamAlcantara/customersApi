import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './customer.entity';

@Entity({name: 'address'})
export class Address {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  description: string;

  @Column()
  zip: string;

  @ManyToOne(() => Customer, customer => customer.addresses, {onDelete: 'CASCADE'})
  @JoinColumn({name: 'customerId'})
  customer: Customer;
}
