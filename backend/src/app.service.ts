import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/db.service';
import { User } from 'prisma/client';

@Injectable()
export class AppService {
  constructor(private databaseService: DatabaseService) {}

  getUsers(): Promise<User[]> {
    return this.databaseService.user.findMany();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
