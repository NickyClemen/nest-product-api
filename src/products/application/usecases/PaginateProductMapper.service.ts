import { Inject, Injectable } from '@nestjs/common';

import { ProductFinder } from './ProductFinder.service';
import { ProductPrimitives } from '../../domain/models/Product.model';
import { PaginatedResponse } from '../../domain/interfaces/PaginatedProducts.interface';

@Injectable()
export class PaginateProductMapper {
  constructor(
    @Inject(ProductFinder)
    private productFinder: ProductFinder,
  ) {}

  public execute({ page, size, query, currency }): PaginatedResponse {
    const products: ProductPrimitives[] =
      this.productFinder.getPaginatedProduct({
        page,
        size,
        query,
        currency,
      });

    return {
      metadata: {
        page,
        totalRecords: products.length,
      },
      products,
    };
  }
}
