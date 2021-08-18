export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export interface RespToken {
    statusCode: number;
    token: string;
}