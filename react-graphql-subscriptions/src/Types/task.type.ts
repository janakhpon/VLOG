export type TaskType = {
    id: number,
    title: string,
    text: string,
    completed: boolean,
    created_at: string,
    updated_at: string
}

export type SearchResponse = {
    data: TaskType[],
    count: number
}

export type CreateTask = {
    title: string,
    text: string
}

export type CountType = {
    count: number
}

export enum SortType {
    A = "ASC",
    D = "DESC"
}