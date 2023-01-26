import { Injectable } from '@nestjs/common';

import { Product } from '../models/Product.model';
import { ProductRepository } from '../interfaces/ProductRepository.interface';

import { populateProducts } from '../../../shared/features/products';

@Injectable()
export class ProductMemoryRepository implements ProductRepository {
  private products: Product[];

  constructor() {
    this.products = populateProducts().map((product) => {
      return Product.fromPrimitives({
        id: product.id,
        name: product.name,
        image: product.image,
        price: Number(product.price),
        currency: product.currency,
        quantity: product.quantity,
      });
    });
  }

  findById({ id }: { id: number }): Product {
    return this.products.find(
      (product: Product) => product.toPrimitives().id === id,
    );
  }

  getPaginatedProduct({ page, size, query, currency }): Product[] {
    return this.products
      .filter((product: Product) => product.toPrimitives().name.includes(query))
      .filter(
        (product: Product) => product.toPrimitives().currency === currency,
      )
      .slice((page - 1) * size, page * size);
  }
}
