import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import Pagination from './Components/Pagination'
import DisplayTasks from './Components/Tasks'
import InteractiveInputComponent from './Components/InputComponent'
import { TaskType, CreateTask, SortType } from './Types/task.type'
import { calculatePagination, days } from './utils/task.common'
import { useQueryTasks, useQueryCount, useQuerySearch } from './Components/hooks/useQueryTasks'
import { useMutateTask } from './Components/hooks/useMutateTasks'
const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [searchedTasks, setSearchedTasks] = useState<TaskType[]>([])
  const [task, setTask] = useState<CreateTask>({
    title: "",
    text: ""
  })
  const [search, setSearch] = useState<string>("")
  const [searchval, setSearchVal] = useState<string>("")
  const [page, setPage] = useState<number>(1)
  const [count, setCount] = useState<number>(0)
  const [searchcount, setSearchCount] = useState<number>(0)
  const [topag, setTopag] = useState<number>(0)
  const [topagfs, setTopagfs] = useState<number>(0)
  const [sort, setSort] = useState<string>("updated_at")
  const [order, setOrder] = useState<SortType>(SortType.D)
  const [isrsearch, setIsrsearch] = useState<boolean>(false)
  const { status, data } = useQueryTasks(page, sort, order)
  const { data: datacount } = useQueryCount()
  const { data: searcheddata } = useQuerySearch(searchval)
  const { createTaskMutation, updateTaskMutation, deleteTaskMutation } = useMutateTask()

  useEffect(() => {
    setCount(datacount ? datacount.count : 0)
  }, [data, datacount])

  useEffect(() => {
    if (data) {
      setTasks(data)
    }
  }, [data])

  useEffect(() => {
    if (searcheddata) {
      setSearchedTasks(searcheddata.data)
      setSearchCount(searcheddata.count)
    }
  }, [searcheddata])


  useEffect(() => {
    setTopag(calculatePagination(count))
  }, [count])

  useEffect(() => {
    setTopagfs(calculatePagination(searchcount))
  }, [searchcount])


  useEffect(() => {
    if (search === "") {
      setIsrsearch(false)
    }
  }, [search])

  const handleChange = (e: ChangeEvent) => {
    e.preventDefault()
    const day = new Date().getDay()
    const { value } = e.target as HTMLInputElement;
    setTask({
      title: days[day],
      text: value
    })
  }

  const handleSave = async (e: FormEvent) => {
    e.preventDefault()
    createTaskMutation.mutate(task)
    setTask({
      title: "",
      text: ""
    })
  }

  const handleDelete = async (delid: number) => {
    deleteTaskMutation.mutate(delid)
  }

  const handlePagination = async (cp: number) => {
    setPage(cp)
  }

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()
    setSearchVal(search)
    setIsrsearch(true)
  }

  const handleOrder = async (val: string) => {
    switch (val) {
      case "ASC":
        setOrder(SortType.A)
        break;
      case "DESC":
        setOrder(SortType.D)
        break;
      default:
        break;
    }
  }

  const handleComplete = async (e: ChangeEvent, task: TaskType) => {
    const { checked } = e.target as HTMLInputElement;
    updateTaskMutation.mutate({ ...task, completed: checked })
  }

  if (status === "loading") {
    return (<div className="container mx-auto lg:my-32 md:my-30 sm:my-15 ">
      <h1> Loading ... </h1>
    </div>)
  }

  return (
    <div className="container mx-auto lg:my-32 md:my-30 sm:my-15 ">
      <InteractiveInputComponent handleSave={handleSave} handleChange={handleChange} task={task} search={search} setSearch={setSearch} setSort={setSort} handleSearch={handleSearch} handleOrder={handleOrder} />
      <DisplayTasks isrsearch={isrsearch} searchcount={searchcount} tasks={tasks} searchedTasks={searchedTasks} handleComplete={handleComplete} handleDelete={handleDelete} />
      <Pagination isrsearch={isrsearch} search={search} searchcount={searchcount} page={page} topag={topag} topagfs={topagfs} handlePagination={handlePagination} />
    </div>
  );
}

export default App;