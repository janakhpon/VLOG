import { rest } from "msw";

export const handlers = [
    rest.post("http://localhost:3001/api/v1/todos", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                title: "Hitoribochi",
                text: req.body.text,
                completed: false,
                id: 3,
                created_at: "2022-02-07T17:57:18.950Z",
                updated_at: "2022-02-07T17:57:18.950Z",
            })
        );
    }),
    rest.get("http://localhost:3001/api/v1/todos", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    id: 1,
                    title: "Friday",
                    text: "mock testing text 1",
                    completed: false,
                    created_at: "2022-02-03T22:50:51.570Z",
                    updated_at: "2022-02-03T22:50:51.570Z",
                },
                {
                    id: 2,
                    title: "Friday",
                    text: "mock testing test 1",
                    completed: false,
                    created_at: "2022-02-03T22:03:31.858Z",
                    updated_at: "2022-02-03T22:03:31.858Z",
                },
            ])
        );
    }),
    rest.put("http://localhost:3001/api/v1/todos/1", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                "id": 1,
                "title": "Hitoribochi",
                "text": "Hitoribochi Text",
                "completed": true,
                "created_at": "2022-02-08T07:16:39.686Z",
                "updated_at": "2022-02-08T07:17:07.556Z"
            })
        );
    }),
    rest.delete("http://localhost:3001/api/v1/todos/1", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                message: "successfully removed task with id: 1",
            })
        );
    }),
];
