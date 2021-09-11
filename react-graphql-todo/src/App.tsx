import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import Pagination from './Components/Pagination'
import DisplayTasks from './Components/Tasks'
import InteractiveInputComponent from './Components/InputComponent'
import GQL_GETCOUNT from './graphql/getCount'
import GQL_GETLIST from './graphql/getList'
import GQL_GETSEARCHLIST from './graphql/getSearchedList'
import GQL_CREATETASK from './graphql/createTask'
import GQL_UPDATETASK from './graphql/updateTask'
import GQL_DELETETASK from './graphql/deleteTask'
import { TaskType, CreateTask, SortType } from './Types/task.type'
import { calculatePagination, days } from './utils/task.common'
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
  // const { loading: count_loading, data: count_data, error: count_error } = useQuery(GQL_GETCOUNT)
  const { data: count_data } = useQuery(GQL_GETCOUNT)
  const { data: list_data, refetch: refetchList } = useQuery(GQL_GETLIST, {
    fetchPolicy: 'network-only',
    variables: { page, take: 5, sort, order }
  })
  const { data: search_list_data } = useQuery(GQL_GETSEARCHLIST, {
    variables: {
      input: {
        page,
        take: 5,
        text: search
      }
    },
    skip: (search === "" || search.length <= 2)
  })

  // const [createTask, { loading, data, error }] = useMutation(GQL_CREATETASK, {
  //   onCompleted: refetchList
  // })
  const [createTask] = useMutation(GQL_CREATETASK, {
    onCompleted: refetchList
  })
  const [updateTask] = useMutation(GQL_UPDATETASK, {
    onCompleted: refetchList
  })
  const [deleteTask] = useMutation(GQL_DELETETASK, {
    onCompleted: refetchList
  })

  useEffect(() => {
    if (count_data) {
      setCount(count_data.count.count)
    }
  }, [count_data])

  useEffect(() => {
    if (list_data) {
      setTasks(list_data.list)
    }
  }, [list_data])

  useEffect(() => {
    if (search_list_data) {
      setSearchedTasks(search_list_data.searchList.data)
      setSearchCount(search_list_data.searchList.count)
    }
  }, [search_list_data])

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
    await createTask({ variables: { input: { title: task.title, text: task.text } } })
    setTask({
      title: "",
      text: ""
    })
  }

  const handleDelete = async (delid: number) => {
    await deleteTask({ variables: { id: delid } })
  }

  const handlePagination = async (cp: number) => {
    setPage(cp)
  }

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()
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
    await updateTask({
      variables: {
        id: task.id,
        input: {
          title: task.title,
          text: task.text,
          completed: checked
        }
      }
    })
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