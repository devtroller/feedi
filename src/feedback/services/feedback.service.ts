import { Injectable } from '@nestjs/common';
//import { ConfigType } from '@nestjs/config';

import { CreateFeedbackDto } from '../dto/create-feedback.dto';
import { UpdateFeedbackDto } from '../dto/update-feedback.dto';
//import config from 'src/config';
@Injectable()
export class FeedbackService {
  create(createFeedbackDto: CreateFeedbackDto) {
    console.log(createFeedbackDto);
    return {
      createFeedbackDto,
    };
  }

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
