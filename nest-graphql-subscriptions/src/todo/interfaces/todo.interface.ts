export interface Todo {
    id: number;
    title: string;
    text: string;
    completed: boolean;
}

export interface SearchResponse {
    data: Todo[];
    count: number;
}

export interface Status {
    message: string;
}
export interface RowCount {
    count: number;
}
export enum SortType {
    A = "ASC",
    D = "DESC"
}
