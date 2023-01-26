import { ApiClient } from '../mocks/api/ApiClient';

describe('[POST] GetProductByQuery', () => {
  const client = new ApiClient();

  it('response status should be 200 when return records', async () => {
    const response = await client.getProductByQuery({
      page: 1,
      size: 10,
      query: 'Sleek',
      currency: 'CAD',
    });

    expect(response.status).toBe(200);
    expect(response.body.products).toHaveLength(
      response.body.metadata.totalRecords,
    );
  });

  it('response status should be 404 when not return records', async () => {
    const response = await client.getProductByQuery({
      page: 1,
      size: 10,
      query: 'Sleek',
      currency: 'USD',
    });

    expect(response.status).toBe(404);
    expect(response.body.products).toHaveLength(
      response.body.metadata.totalRecords,
    );
  });
});
