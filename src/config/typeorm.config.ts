import { ConfigType, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

import config from '../config';

config();
const configService = new ConfigService();

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  inject: [config.KEY],
  useFactory: async (
    configService: ConfigType<typeof config>,
  ): Promise<TypeOrmModuleOptions> => {
    const { database, username, password, port, host } = configService.postgres;
    return {
      type: 'postgres',
      host,
      port,
      username,
      password,
      database,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/../migrations/*{.ts,.js}'],
      synchronize: true,
      logging: true,
    };
  },
};

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  port: configService.get('POSTGRES_PORT'),
  host: configService.get('POSTGRES_HOST'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  synchronize: true,
  logging: true,
};
