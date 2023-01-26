import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class ProductByIdDTO {
  @ApiProperty({ example: 1, description: 'product id' })
  @IsNumber()
  id: number;
}
