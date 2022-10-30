import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { FeedbackService } from '../services/feedback.service';
import { CreateFeedbackDto } from '../dto/create-feedback.dto';
import { UpdateFeedbackDto } from '../dto/update-feedback.dto';

@ApiTags('Feedbacks')
@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  create(@Body() createFeedbackDto: CreateFeedbackDto) {
    return this.feedbackService.create(createFeedbackDto);
  }

  // @Get('tasks')
  // getTasks() {
  //   return this.feedbackService.getTasks();
  // }

  @Get()
  @ApiOperation({ summary: 'Fetch all feedbacks' })
  findAll() {
    return this.feedbackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.feedbackService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFeedbackDto: UpdateFeedbackDto,
  ) {
    return this.feedbackService.update(id, updateFeedbackDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.feedbackService.remove(id);
  }
}
