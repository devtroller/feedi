import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

config();

export const typeOrmModuleOptions = (
  configService: ConfigService = new ConfigService(),
): DataSourceOptions => ({
  type: 'postgres',

  host: configService.get<string>('postgres.host', process.env.POSTGRES_HOST),

  port: configService.get<number>(
    'postgres.port',
    parseInt(process.env.POSTGRES_PORT, 10),
  ),

  username: configService.get<string>(
    'postgres.username',
    process.env.POSTGRES_USER,
  ),

  password: configService.get<string>(
    'postgres.password',
    process.env.POSTGRES_PASSWORD,
  ),

  database: configService.get<string>(
    'postgres.database',
    process.env.POSTGRES_DB,
  ),

  entities: ['dist/**/*.entity.js'],
});

export default new DataSource({
  ...typeOrmModuleOptions(),
  migrations: ['dist/modules/database/migrations/*.js'],
});
