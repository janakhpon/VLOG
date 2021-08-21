import { Query, Resolver, Args, ID, Mutation } from '@nestjs/graphql';
import { RowCount, SearchResponse, SortType, Status, Todo } from '../interfaces/todo.interface'
import { CreateInput, SearchInput } from '../types/todo.gql'
import { TodoService } from '../todo.service';
import { UseGuards } from '@nestjs/common';
import { GraphqlJwtAuthGuard } from 'src/user/auth/guard/gql.guard';
import { GqlCurrentUser } from 'src/user/auth/guard/gql.user';
import { User } from 'src/user/interfaces/user.interface';

@Resolver('Todo')
export class TodoResolver {
    constructor(private todoService: TodoService) { }

    @Query()
    @UseGuards(GraphqlJwtAuthGuard)
    async me(@GqlCurrentUser() user: User,): Promise<User> {
        return user
    }

    @Query()
    async list(
        @Args('page') page = 1,
        @Args('take') take = 5,
        @Args('sort') sort = "updated_at",
        @Args('order') order = SortType.D
    ): Promise<Todo[]> {
        return await this.todoService.findAll(page, take, sort, order);
    }

    @Query()
    async searchList(@Args('input') input: SearchInput): Promise<SearchResponse> {
        const { page, take, title, text } = input
        return await this.todoService.search(page, take, title, text)
    }

    @Query()
    async todo(@Args('id', { type: () => ID }) id: number): Promise<Todo> {
        return await this.todoService.findOne(id);
    }

    @Query()
    @UseGuards(GraphqlJwtAuthGuard)
    async count(@GqlCurrentUser() user: any,): Promise<RowCount> {
        console.log("user", user)
        return await this.todoService.getCount()
    }

    @Mutation()
    async create(@Args('input') input: CreateInput): Promise<Todo> {
        return await this.todoService.create(input)
    }

    @Mutation()
    async update(@Args('id', { type: () => ID }) id: number, @Args('input') input: CreateInput): Promise<Todo> {
        return await this.todoService.update(id, input)
    }

    @Mutation()
    async delete(@Args('id', { type: () => ID }) id: number): Promise<Status> {
        return await this.todoService.delete(id);
    }
}
