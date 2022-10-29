import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { FeedbackModule } from 'src/feedback/feedback.module';
@Module({
  imports: [FeedbackModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
