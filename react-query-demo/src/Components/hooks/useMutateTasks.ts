import axios from 'axios'
import { useQueryClient, useMutation } from 'react-query'
import { CreateTask, TaskType } from '../../Types/task.type'

export const useMutateTask = () => {
  const queryClient = useQueryClient()

  const createTaskMutation = useMutation(
    (task: CreateTask) =>
      axios.post(`http://localhost:3001/api/v1/todos`, task),
    {
      onSuccess: (res) => {
        const preTasks = queryClient.getQueryData<TaskType[]>('todos?page=1&sort=updated_at&order=DESC')
        if (preTasks) {
          queryClient.setQueryData<TaskType[]>('todos?page=1&sort=updated_at&order=DESC', [
            ...preTasks,
            res.data,
          ])
        }
        queryClient.invalidateQueries()
      },
    }
  )
  const updateTaskMutation = useMutation(
    (task: TaskType) =>
      axios.put(`http://localhost:3001/api/v1/todos/${task.id}`, task),
    {
      onSuccess: async (res, variables) => {
        const preTasks = queryClient.getQueryData<TaskType[]>('todos?page=1&sort=updated_at&order=DESC')
        if (preTasks) {
          queryClient.setQueryData<TaskType[]>(
            'todos?page=1&sort=updated_at&order=DESC',
            preTasks.map((task) =>
              task.id === variables.id ? res.data : task
            )
          )
        }
        queryClient.invalidateQueries()
      },
    }
  )
  const deleteTaskMutation = useMutation(
    (id: number) =>
      axios.delete(`http://localhost:3001/api/v1/todos/${id}`),
    {
      onSuccess: (res, variables) => {
        const preTasks = queryClient.getQueryData<TaskType[]>('todos?page=1&sort=updated_at&order=DESC')
        console.log(variables, "HEHE")
        if (preTasks) {
          queryClient.setQueryData<TaskType[]>('todos?page=1&sort=updated_at&order=DESC', preTasks.filter((task) => task.id !== variables))
        }
        queryClient.invalidateQueries()
      },
    }
  )
  return { deleteTaskMutation, createTaskMutation, updateTaskMutation }
}