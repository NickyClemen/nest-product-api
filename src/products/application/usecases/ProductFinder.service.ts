import { Inject, Injectable } from '@nestjs/common';

import { ProductNotFoundException } from '../../domain/exceptions/ProductNotFoundException';
import { Product, ProductPrimitives } from '../../domain/models/Product.model';
import { ProductStatusMessage } from '../../domain/ProductStatusMessage.enum';

import {
  PRODUCT_SERVICE,
  BaseProductService,
} from '../../domain/interfaces/BaseProductService.interface';

@Injectable()
export class ProductFinder {
  constructor(
    @Inject(PRODUCT_SERVICE)
    private productService: BaseProductService,
  ) {}

  public getProductById({
    id,
  }: {
    id: number;
  }): ProductPrimitives | ProductNotFoundException {
    const product: Product = this.productService.findById({ id });

    if (!product) {
      return new ProductNotFoundException(ProductStatusMessage.NOT_FOUND);
    }

    return product.toPrimitives();
  }

  public getPaginatedProduct({
    page,
    size,
    query,
    currency,
  }): ProductPrimitives[] {
    const products: Product[] = this.productService.getPaginatedProduct({
      page,
      size,
      query,
      currency,
    });

    return products.map((product: Product) => product.toPrimitives());
  }
}
