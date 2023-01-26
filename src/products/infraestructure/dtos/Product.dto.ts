import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class ProductDTO {
  @ApiProperty({ example: 1, description: 'product id' })
  @IsNumber()
  id: number;

  @ApiProperty({ example: 'printer', description: 'product name' })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'https://fakeurl.com',
    description: 'product image url',
  })
  @IsUrl()
  image: string;

  @ApiProperty({ example: 100, description: 'product price' })
  @IsNumber()
  price: number;

  @ApiProperty({ example: 'ARS', description: 'product currency' })
  @IsString()
  currency: string;

  @ApiProperty({ example: 1, description: 'product quantity' })
  @IsNumber()
  quantity: number;
}
