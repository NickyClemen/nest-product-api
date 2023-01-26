import { Test, TestingModule, TestingModuleBuilder } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../../src/app.module';
import * as request from 'supertest';

export class TestClient {
  constructor(
    public readonly serverApplication: INestApplication,
    public readonly testingModule: TestingModule,
  ) {}

  public static async createTestClient(
    moduleBuilder: TestingModuleBuilder,
  ): Promise<TestClient> {
    const moduleFixture: TestingModule = await moduleBuilder.compile();
    const app: INestApplication = moduleFixture.createNestApplication();

    await app.init();

    return new TestClient(app, moduleFixture);
  }
}

let testClient: TestClient;

async function generateTestClient(): Promise<{
  testClient: TestClient;
}> {
  const moduleRef = await Test.createTestingModule({
    imports: [AppModule],
  });

  return { testClient: await TestClient.createTestClient(moduleRef) };
}

export function getTestClient(): request.SuperTest<request.Test> {
  return request(testClient.serverApplication.getHttpServer());
}

beforeAll(async (): Promise<void> => {
  ({ testClient } = await generateTestClient());
});

afterAll(async (): Promise<void> => {
  testClient.serverApplication.close();
});
