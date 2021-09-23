import { useQuery } from 'react-query'
import axios from 'axios'
import { TaskType, SortType, CountType, SearchResponse } from '../../Types/task.type'

export const useQueryTasks = (page: number, sort: string, order: SortType) => {
    const getTasks = async () => {
        const { data } = await axios.get<TaskType[]>(
            `http://localhost:3001/api/v1/todos?page=${page}&sort=${sort}&order=${order}`
        )
        return data
    }
    return useQuery<TaskType[], Error>({
        queryKey: `todos?page=${page}&sort=${sort}&order=${order}`,
        queryFn: getTasks,
        staleTime: 0,
        refetchOnWindowFocus: true,
        // cacheTime: 5000,
        refetchInterval: 5000,
    })
}

export const useQueryCount = () => {
    const getCount = async () => {
        const { data } = await axios.request<CountType>({
            method: 'get',
            url: `http://localhost:3001/api/v1/todos/count`
        })
        return data
    }
    return useQuery<CountType, Error>({
        queryKey: `count`,
        queryFn: getCount,
        staleTime: 0,
        refetchOnWindowFocus: true,
        // cacheTime: 5000,
        refetchInterval: 5000,
    })
}

export const useQuerySearch = (text: string) => {
    const searchContent = async () => {
        const { data } = await axios.request<SearchResponse>({
            method: 'get',
            url: `http://localhost:3001/api/v1/todos/search?text=${text}`
        })
        return data
    }
    return useQuery<SearchResponse, Error>({
        queryKey: `search?=text=${text}`,
        queryFn: searchContent
    })
}