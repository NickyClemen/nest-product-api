import { IsNumber } from 'class-validator';

export class ProductByIdDTO {
  @IsNumber()
  id!: number;
}
