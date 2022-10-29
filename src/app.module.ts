import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedbackModule } from './feedback/feedback.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [FeedbackModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
