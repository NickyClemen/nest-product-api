import { Product } from '../models/Product.model';

export const PRODUCT_REPOSITORY = 'PRODUCT REPOSITORY';

export interface ProductRepository {
  findById({ id }: { id: number }): Product;
  getPaginatedProduct({ page, size, query, currency }): Product[];
}
