import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, ILike } from 'typeorm'
import { RowCount, SearchResponse, SortType, Status, Todo } from './interfaces/todo.interface'
import { TodoEntity } from './entities/todo.entity'
import { CreateTodoDTO } from './dto/create-todo.dto'

@Injectable()
export class TodoService {
    constructor(@InjectRepository(TodoEntity)
    private readonly TodoRepository: Repository<TodoEntity>,) { }

    async create(todo: CreateTodoDTO): Promise<Todo> {
        const resp = await this.TodoRepository.save({
            title: todo.title,
            text: todo.text,
            completed: todo.completed
        })
        return resp
    }

    async findAll(page: number, take: number, sort: string, order: SortType): Promise<Todo[]> {
        let squery = {}
        switch (sort) {
            case 'updated_at':
                squery = { updated_at: order }
                break;
            case 'created_at':
                squery = { created_at: order }
                break;
            case 'title':
                squery = { title: order }
                break;
            case 'id':
                squery = { id: order }
                break;
            default:
                squery = { updated_at: SortType.D }
                break;
        }
        return await this.TodoRepository.find({ take, skip: take * (page - 1), order: squery })
    }

    async getCount(): Promise<RowCount> {
        const resp = await this.TodoRepository.count()
        return { count: resp }
    }

    async findOne(id: number): Promise<Todo> {
        const resp = await this.TodoRepository.findOne(id)
        if (!resp) {
            throw new NotFoundException('Could not find the task with the provided id!')
        }
        return resp
    }

    async search(page: number, take: number, title: string, text: string): Promise<SearchResponse> {
        let query = {}
        if (title) {
            query = { ...query, title: ILike(`%${title}%`) }
        }
        if (text) {
            query = { ...query, text: ILike(`%${text}%`) }
        }
        const count = await this.TodoRepository.count({ where: [query] })
        const resp = await this.TodoRepository.find({ take, skip: take * (page - 1), where: [query] })
        return { data: resp, count }
    }

    async update(id: number, toUpdate: CreateTodoDTO): Promise<Todo> {
        const resp = await this.TodoRepository.update(id, toUpdate)
        if (resp.affected === 0) {
            throw new NotFoundException('Could not find the task with the provided id!')
        }
        return await this.TodoRepository.findOne(id)
    }

    async delete(id: number): Promise<Status> {
        const resp = await this.TodoRepository.delete(id)
        if (resp.affected === 0) {
            throw new NotFoundException('Could not find the task with the provided id!')
        }
        return { message: `successfully removed task with id: ${id}` }
    }
}
