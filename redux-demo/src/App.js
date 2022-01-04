import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Pagination from "./Components/Pagination";
import DisplayTasks from "./Components/Tasks";
import InteractiveInputComponent from "./Components/InputComponent";
import { calculatePagination, URL, days } from "./utils/task.common";
import * as actions from "./redux/actions";

const App = () => {
  const { task } = useSelector((obj) => obj);
  const dispatch = useDispatch();
  const [newtask, setnewtask] = useState({
    title: "",
    text: "",
  });
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [topag, setTopag] = useState(0);
  const [topagfs, setTopagfs] = useState(0);
  const [sort, setSort] = useState("updated_at");
  const [order, setOrder] = useState("DESC");
  const [isrsearch, setIsrsearch] = useState(false);

  useEffect(() => {
    dispatch(actions.getTasksCount());
  }, [newtask, dispatch]);

  useEffect(() => {
    dispatch(actions.listTasks(page, sort, order));
  }, [newtask, page, sort, order, dispatch]);

  useEffect(() => {
    setTopag(calculatePagination(task.count));
  }, [task, newtask]);

  useEffect(() => {
    setTopagfs(calculatePagination(task.searchCount));
  }, [task, search]);

  useEffect(() => {
    if (search === "") {
      setIsrsearch(false);
    }
  }, [search]);

  const handleChange = (e) => {
    e.preventDefault();
    const day = new Date().getDay();
    const { value } = e.target;
    setnewtask({
      title: days[day],
      text: value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await axios.post(URL, newtask);
    setnewtask({
      title: "",
      text: "",
    });
  };

  const handleDelete = async (delid) => {
    dispatch(actions.removeTask(delid));
    dispatch(actions.listTasks(page, sort, order));
  };

  const handlePagination = async (cp) => {
    setPage(cp);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    dispatch(actions.searchTasks(search));
    setIsrsearch(true);
  };

  const handleOrder = async (val) => {
    setOrder(val);
  };

  const handleComplete = async (e, newtask) => {
    const { checked } = e.target;
    dispatch(actions.updateTask(checked, newtask.id));
  };

  return (
    <div className="container mx-auto lg:my-32 md:my-30 sm:my-15 ">
      <InteractiveInputComponent
        handleSave={handleSave}
        handleChange={handleChange}
        task={newtask}
        search={search}
        setSearch={setSearch}
        setSort={setSort}
        handleSearch={handleSearch}
        handleOrder={handleOrder}
      />
      <DisplayTasks
        isrsearch={isrsearch}
        searchcount={task.searchCount}
        tasks={task.taskList}
        searchedTasks={task.searchList}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
      <Pagination
        isrsearch={isrsearch}
        search={search}
        searchcount={task.searchCount}
        page={page}
        topag={topag}
        topagfs={topagfs}
        handlePagination={handlePagination}
      />
    </div>
  );
};

export default App;
