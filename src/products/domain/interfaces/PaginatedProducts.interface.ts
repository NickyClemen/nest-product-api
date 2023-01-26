import { ProductPrimitives } from '../models/Product.model';

interface Metadata {
  page: number;
  totalRecords: number;
}

export interface PaginatedResponse {
  metadata: Metadata;
  products: ProductPrimitives[];
}
