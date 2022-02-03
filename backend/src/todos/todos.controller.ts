import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Types as MongoTypes } from 'mongoose';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './schemas/todo.schema';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Post('clear')
  async clearAll(): Promise<object> {
    return this.todosService.clearAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Todo> {
    if (MongoTypes.ObjectId.isValid(id)) {
      return this.todosService.findOne(id);
    }

    throw new HttpException('Invalid id', HttpStatus.BAD_REQUEST);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.todosService.remove(id);
  }
}
