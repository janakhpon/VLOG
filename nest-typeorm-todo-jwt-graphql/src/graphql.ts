
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum SortType {
    ASC = "ASC",
    DESC = "DESC"
}

export interface SearchInput {
    page?: Nullable<number>;
    take?: Nullable<number>;
    title?: Nullable<string>;
    text?: Nullable<string>;
}

export interface CreateInput {
    title?: Nullable<string>;
    text?: Nullable<string>;
    completed?: Nullable<boolean>;
}

export interface Todo {
    id: string;
    title?: Nullable<string>;
    text?: Nullable<string>;
    completed?: Nullable<boolean>;
}

export interface SearchResponse {
    data?: Nullable<Nullable<Todo>[]>;
    count?: Nullable<number>;
}

export interface Status {
    message?: Nullable<string>;
}

export interface User {
    userId?: Nullable<number>;
    email?: Nullable<string>;
}

export interface RowCount {
    count?: Nullable<number>;
}

export interface IQuery {
    list(page?: Nullable<number>, take?: Nullable<number>, sort?: Nullable<string>, order?: Nullable<SortType>): Nullable<Nullable<Todo>[]> | Promise<Nullable<Nullable<Todo>[]>>;
    searchList(input?: Nullable<SearchInput>): Nullable<SearchResponse> | Promise<Nullable<SearchResponse>>;
    todo(id: string): Todo | Promise<Todo>;
    me(): Nullable<User> | Promise<Nullable<User>>;
    count(): Nullable<RowCount> | Promise<Nullable<RowCount>>;
}

export interface IMutation {
    create(input: CreateInput): Nullable<Todo> | Promise<Nullable<Todo>>;
    update(id: string, input: CreateInput): Nullable<Todo> | Promise<Nullable<Todo>>;
    delete(id: string): Nullable<Status> | Promise<Nullable<Status>>;
}

type Nullable<T> = T | null;
