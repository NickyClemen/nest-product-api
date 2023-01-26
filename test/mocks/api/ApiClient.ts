import { getTestClient } from './TestServer';

export class ApiClient {
  async getProductById(id: number) {
    return await getTestClient().get(`/products/${id}`);
  }

  async getProductByQuery({ page, size, query, currency }) {
    return await getTestClient().post(
      `/products?page=${page}&size=${size}&query=${query}&currency=${currency}`,
    );
  }
}
