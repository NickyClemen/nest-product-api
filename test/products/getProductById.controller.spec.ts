import { ApiClient } from '../mocks/api/ApiClient';

describe('[GET] GetProductByIdController', () => {
  const client = new ApiClient();

  it('response status should be 404 when product not found', async () => {
    const response = await client.getProductById(96687);

    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({ message: 'product not found' });
  });

  it('response status should be 200 when product found', async () => {
    const response = await client.getProductById(34463);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      id: 34463,
      name: 'Licensed Granite Salad',
      image: 'https://loremflickr.com/640/480',
      price: 735,
      currency: 'LVL',
      quantity: 46686,
    });
  });
});
