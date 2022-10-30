import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import config from 'src/config';

@Global()
@Module({
  imports: [],
  providers: [
    {
      provide: 'DATA_SOURCE',
      inject: [config.KEY],
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { database, username, password, port, host } =
          configService.postgres;
        const dataSource = new DataSource({
          type: 'postgres',
          host,
          port,
          username,
          password,
          database,
          synchronize: false,
          logging: true,
          entities: ['src/**/*.entity.ts'], // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          migrations: ['src/database/migrations/*.ts'],
        });

        return dataSource.initialize();
      },
    },
  ],
  exports: [TypeOrmModule, 'DATA_SOURCE'],
})
export class DatabaseModule {}
