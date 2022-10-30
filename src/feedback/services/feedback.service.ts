import {  Injectable } from '@nestjs/common';
//import { Client } from 'pg';
//import { ConfigType } from '@nestjs/config';

import { CreateFeedbackDto } from '../dto/create-feedback.dto';
import { UpdateFeedbackDto } from '../dto/update-feedback.dto';
//import config from 'src/config';
@Injectable()
export class FeedbackService {
  //constructor(@Inject('PG') private clientPg: Client) {}

  create(createFeedbackDto: CreateFeedbackDto) {
    console.log(createFeedbackDto);
    return {
      createFeedbackDto,
    };
  }

  // getTasks() {
  //   return new Promise((resolve, reject) => {
  //     this.clientPg.query('SELECT * FROM tasks', (err, res) => {
  //       if (err) {
  //         reject(err);
  //       }
  //       resolve(res.rows);
  //     });
  //   });
  // }

  findAll() {
    //const apiKey = this.configService.apiKey;
    return `This action returns all feedback`;
  }

  findOne(id: number) {
    return `This action returns a #${id} feedback`;
  }

  update(id: number, updateFeedbackDto: UpdateFeedbackDto) {
    return {
      updateFeedbackDto,
    };
  }

  remove(id: number) {
    return `This action removes a #${id} feedback`;
  }
}
