import { Injectable, Inject } from '@nestjs/common';

import { Product } from '../../domain/models/Product.model';
import {
  PRODUCT_REPOSITORY,
  ProductRepository,
} from '../../domain/interfaces/ProductRepository.interface';
import { BaseProductService } from '../../domain/interfaces/BaseProductService.interface';

@Injectable()
export class ProductService implements BaseProductService {
  constructor(
    @Inject(PRODUCT_REPOSITORY) private productRepository: ProductRepository,
  ) {}

  findById({ id }: { id: number }): Product {
    return this.productRepository.findById({ id });
  }

  getPaginatedProduct({ page, size, query, currency }): Product[] {
    return this.productRepository.getPaginatedProduct({
      page,
      size,
      query,
      currency,
    });
  }
}
