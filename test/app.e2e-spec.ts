import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './../src/app.module';
import { MongoMemoryReplSet } from 'mongodb-memory-server';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';

describe('A-Board (e2e)', () => {
  let app: INestApplication;
  let mongod: MongoMemoryReplSet;

  beforeAll(async () => {
    mongod = await MongoMemoryReplSet.create({ replSet: { count: 3 } });
    await mongod.waitUntilRunning();
    global.__MONGO_URL__ = mongod.getUri();
    global.__MONGO__ = mongod;

    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication<NestExpressApplication>(
      new ExpressAdapter(),
    );
    global.__NEST_APP__ = app;

    await app.init();
    await app.getHttpAdapter().getInstance().ready();
    // await initializeData();
  });

  afterAll(async () => {
    try {
      console.log('closing app...');
      await app.close();
      await app.getHttpAdapter().getInstance().c;
      await mongod.stop();
      console.log('all closed');
    } catch (error) {
      console.error('Test Error: ', error);
    }
  });
});
