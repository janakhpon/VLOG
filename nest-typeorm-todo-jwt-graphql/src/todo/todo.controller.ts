import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateTodoDTO } from './dto/create-todo.dto';
import { RowCount, Status, Todo, SortType, SearchResponse } from './interfaces/todo.interface';
import { TodoService } from './todo.service'

@Controller('todos')
export class TodoController {
    constructor(private todoService: TodoService) { }

    @Post()
    async create(@Body() todo: CreateTodoDTO): Promise<Todo> {
        return await this.todoService.create(todo)
    }

    @Get()
    async find(@Query('page') page = 1, @Query('take') take = 5, @Query('sort') sort = "updated_at", @Query('order') order = SortType.D): Promise<Todo[]> {
        return await this.todoService.findAll(page, take, sort, order)
    }

    @Get("private")
    @UseGuards(AuthGuard('jwt'))
    async privatefind(@Query('page') page = 1, @Query('take') take = 5, @Query('sort') sort = "updated_at", @Query('order') order = SortType.D): Promise<Todo[]> {
        return await this.todoService.findAll(page, take, sort, order)
    }

    @Get("search")
    async search(@Query('page') page = 1, @Query('take') take = 5, @Query('title') title = null, @Query('text') text = null): Promise<SearchResponse> {
        return await this.todoService.search(page, take, title, text)
    }

    @Get("count")
    async count(): Promise<RowCount> {
        return await this.todoService.getCount()
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Todo> {
        return await this.todoService.findOne(+id)
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() toUpdate: CreateTodoDTO,
    ): Promise<Todo> {
        return await this.todoService.update(+id, toUpdate)
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Status> {
        return await this.todoService.delete(+id)
    }
}
