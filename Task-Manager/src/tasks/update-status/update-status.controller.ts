import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { UpdateTaskStatusDto } from '../dto/update-task-status.dto';
import { Task } from '../schemas/task.schema';
import { UpdateStatusService } from './update-status.service';

@Controller('tasks/status')
export class UpdateStatusController {
  constructor(private readonly updateStatusService: UpdateStatusService) {}

  @Patch(':id')
  async updateStatus(
    @Body() updateTaskStatusDto: UpdateTaskStatusDto,
    @Param('id') id: ObjectId,
  ): Promise<Task> {
    return await this.updateStatusService.updateStatus(
      id,
      updateTaskStatusDto.newStatus,
    );
  }

  @Get(':id')
  async getStatus(@Param('id') id: ObjectId): Promise<string> {
    return this.updateStatusService.getStatus(id);
  }
}
