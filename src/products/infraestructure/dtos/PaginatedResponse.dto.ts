import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsArray } from 'class-validator';

import { ProductDTO } from './Product.dto';

interface Metadata {
  page: number;
  totalRecords: number;
}

export class PaginatedResponseDTO {
  @ApiProperty({
    example: { page: 1, totalRecords: 4 },
    description: 'paginated metadata',
  })
  @IsObject()
  metadata: Metadata;

  @ApiProperty({
    example: [
      {
        id: 34463,
        name: 'Licensed Granite Salad',
        image: 'https://loremflickr.com/640/480',
        price: 735,
        currency: 'LVL',
        quantity: 46686,
      },
      {
        id: 52588,
        name: 'Awesome Bronze Shoes',
        image: 'https://loremflickr.com/640/480',
        price: 420,
        currency: 'GMD',
        quantity: 43358,
      },
      {
        id: 50478,
        name: 'Luxurious Wooden Ball',
        image: 'https://loremflickr.com/640/480',
        price: 872,
        currency: 'UAH',
        quantity: 11871,
      },
      {
        id: 7627,
        name: 'Recycled Fresh Sausages',
        image: 'https://loremflickr.com/640/480',
        price: 487,
        currency: 'NIO',
        quantity: 83416,
      },
    ],
    description: 'product list',
  })
  @IsArray()
  products: ProductDTO[];
}
