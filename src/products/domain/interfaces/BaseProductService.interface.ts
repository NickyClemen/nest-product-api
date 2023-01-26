import { Product } from '../models/Product.model';

export const PRODUCT_SERVICE = 'PRODUCT SERVICE';

export interface BaseProductService {
  findById({ id }: { id: number }): Product;
  getPaginatedProduct({ page, size, query, currency }): Product[];
}
