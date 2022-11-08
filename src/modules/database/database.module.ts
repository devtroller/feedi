import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import config from 'src/config';
import { envs } from 'src/environments';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => ({
        type: 'postgres',
        host: configService.postgres.host,
        port: configService.postgres.port,
        username: configService.postgres.username,
        password: configService.postgres.password,
        database: configService.postgres.database,
        entities: ['dist/**/*.entity.js'],
        autoLoadEntities: true,
        migrationsRun: false,
        synchronize: envs[configService.env] === 'prod' ? false : true,
        logging: envs[configService.env] === 'prod' ? false : ['error'],
      }),

      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
