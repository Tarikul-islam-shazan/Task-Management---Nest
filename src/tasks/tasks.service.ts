import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [];

  getTaskList() {
    return this.tasks;
  }
}
