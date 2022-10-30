import { User } from './user.entity';
import { Feedback } from '../../feedback/entities/feedback.entity';
export class Process {
  date: Date;
  user: User;
  feedback: Feedback;
}
