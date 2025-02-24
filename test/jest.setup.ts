jest.setTimeout(60_000);

jest.mock('@nestjs/common/services/logger.service');

jest.mock('core/config/database.configuration', () => ({
  getDatabaseFactory: () => ({ uri: global.__MONGO_URL__ }),
}));
