import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from './Components/Pagination'
import DisplayTasks from './Components/Tasks'
import InteractiveInputComponent from './Components/InputComponent'
import { TaskType, SearchResponse, CreateTask, CountType, SortType } from './Types/task.type'
import { calculatePagination, URL, days } from './utils/task.common'
const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [searchedTasks, setSearchedTasks] = useState<TaskType[]>([])
  const [task, setTask] = useState<CreateTask>({
    title: "",
    text: ""
  })
  const [search, setSearch] = useState<string>("")
  const [page, setPage] = useState<number>(1)
  const [count, setCount] = useState<number>(0)
  const [searchcount, setSearchCount] = useState<number>(0)
  const [topag, setTopag] = useState<number>(0)
  const [topagfs, setTopagfs] = useState<number>(0)
  const [sort, setSort] = useState<string>("updated_at")
  const [order, setOrder] = useState<SortType>(SortType.D)
  const [isrsearch, setIsrsearch] = useState<boolean>(false)

  const getCount = async () => {
    let data = await axios.request<CountType>({
      method: 'get',
      url: `${URL}/count`
    })
    setCount(data.data.count)
  }

  const getData = async () => {
    let data = await axios.request<TaskType[]>({
      method: 'get',
      url: `http://localhost:3001/api/v1/todos?page=${page}&sort=${sort}&order=${order}`
    })
    setTasks(data.data)
  }

  const searchData = async () => {
    let data = await axios.request<SearchResponse>({
      method: 'get',
      url: `${URL}/search?text=${search}`
    })
    setSearchedTasks(data.data.data)
    setSearchCount(data.data.count)
  }

  useEffect(() => {
    try {
      getCount()
    } catch (err) { }
  }, [task])

  useEffect(() => {
    try {
      getData()
    } catch (err) { }
  }, [task, page, sort, order])


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
    await axios.post(URL, task);
    setTask({
      title: "",
      text: ""
    })
  }

  const handleDelete = async (delid: number) => {
    await axios.delete(`${URL}/${delid}`);
    await getCount()
    await getData()
  }

  const handlePagination = async (cp: number) => {
    setPage(cp)
  }

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()
    await searchData()
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
    await axios.put(`${URL}/${task.id}`, { ...task, completed: checked });
    await getData()
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