import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import config from 'src/config';
@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  getHello() {
    const apiKey = this.configService.apiKey;
    return `This action returns all feedback ${apiKey}`;
  }
}
