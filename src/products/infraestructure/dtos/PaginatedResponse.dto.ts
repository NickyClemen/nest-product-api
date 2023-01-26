import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsArray } from 'class-validator';

import { populateProducts } from '../../../shared/features/products';

import { ProductDTO } from './Product.dto';

interface Metadata {
  page: number;
  totalRecords: number;
}

export class PaginatedResponseDTO {
  @ApiProperty({
    example: { page: 1, totalRecords: 10 },
    description: 'paginated metadata',
  })
  @IsObject()
  metadata: Metadata;

  @ApiProperty({ example: populateProducts(), description: 'product list' })
  @IsArray()
  products: ProductDTO[];
}
