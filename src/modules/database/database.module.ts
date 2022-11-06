import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'src/config';
import { envs } from 'src/environments';
import { DataSource } from 'typeorm';
@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      /* Use useFactory, useClass, or useExisting
      to configure the DataSourceOptions.*/
      useFactory: (configService: ConfigType<typeof config>) => ({
        type: 'postgres',
        host: configService.postgres.host,
        port: configService.postgres.port,
        username: configService.postgres.username,
        password: configService.postgres.password,
        database: configService.postgres.database,
        logging: envs[configService.env] === 'dev' ? true : ['error'],
        entities: ['dist/**/*.entity.js'],
        migrations: ['dist/modules/database/migrations/*.js'],
        // synchronize: true,
      }),
      /* dataSource receives the configured DataSourceOptions
       and returns a Promise<DataSource> */
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
