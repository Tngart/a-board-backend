import { IsEnum } from 'class-validator';

export enum Environment {
  DEVELOPMENT = 'development',
  LOCAL = 'local',
  PRODUCTION = 'production',
  QA = 'qa',
  TEST = 'test',
  UAT = 'uat',
  ON_PREMISE = 'on-premise',
}

export class AppEnv {
  @IsEnum(Environment)
  NODE_ENV: Environment;
}
