import { Entity, Property } from '@mikro-orm/core';
import { IsNumber, IsString, IsDecimal, IsUrl } from 'class-validator';

@Entity()
export class Product {
  @Property({ nullable: false })
  @IsNumber()
  id!: number;

  @Property({ nullable: false })
  @IsString()
  name: string;

  @Property({ nullable: false })
  @IsUrl()
  image!: string;

  @Property({ nullable: false })
  @IsDecimal()
  price: number;

  @Property({ nullable: false })
  @IsString()
  currency!: string;

  @Property({ nullable: false })
  @IsNumber()
  quantity: number;
}
