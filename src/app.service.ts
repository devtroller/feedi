import { Injectable } from '@nestjs/common';
// import { ConfigType } from '@nestjs/config';
// import { Client } from 'pg';

//import config from 'src/config';
@Injectable()
export class AppService {
  //constructor() {}

  getHello() {
    //onst apiKey = this.configService.apiKey;
    return `This action returns all feedback `;
  }

  // getTasks() {
  //   // Para librerias donde la respuesta sea un Callback
  //   return new Promise((resolve, reject) => {
  //     this.clientPg.query('SELECT * FROM tasks', (err, res) => {
  //       if (err) {
  //         reject(err);
  //       }
  //       resolve(res.rows);
  //     });
  //   });
  // }
}
