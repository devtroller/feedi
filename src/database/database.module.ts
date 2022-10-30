import { Client } from 'pg';
import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import config from 'src/config';

@Global()
@Module({
  providers: [
    {
      provide: 'PG',
      useFactory: (configService: ConfigType<typeof config>) => {
        const { database, user, password, port, host } = configService.postgres;
        const client = new Client({
          database,
          user,
          password,
          port,
          host,
        });
        client.connect();
        return client;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['PG'],
})
export class DatabaseModule {}
