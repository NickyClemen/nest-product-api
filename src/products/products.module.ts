import { Module } from '@nestjs/common';

import { PRODUCT_REPOSITORY } from './domain/interfaces/ProductRepository.interface';
import { PRODUCT_SERVICE } from './domain/interfaces/BaseProductService.interface';
import { ProductMemoryRepository } from './domain/repositories/ProductMemoryRepository';

import { ProductService } from './application/usecases/Product.service';
import { ProductFinder } from './application/usecases/ProductFinder.service';
import { PaginateProductMapper } from './application/usecases/PaginateProductMapper.service';

import { GetProductById } from './infraestructure/controllers/GetProductById.controller';
import { GetProductByQuery } from './infraestructure/controllers/GetProductByQuery.controller';

@Module({
  imports: [],
  controllers: [GetProductById, GetProductByQuery],
  providers: [
    {
      useClass: ProductService,
      provide: PRODUCT_SERVICE,
    },
    {
      useClass: ProductMemoryRepository,
      provide: PRODUCT_REPOSITORY,
    },
    ProductFinder,
    PaginateProductMapper,
  ],
})
export class ProductModule {}
