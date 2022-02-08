import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    text: "",
  });
  useEffect(() => {
    let isApiSubscribed = true;
    axios.get("http://localhost:3001/api/v1/todos").then((res) => {
      if (isApiSubscribed) setTasks(res.data);
    });
    return () => {
      isApiSubscribed = false;
    };
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const day = new Date();
    const { value } = e.target;
    setNewTask({
      title: day.toDateString(),
      text: value,
    });
  };

  const handleEnterPress = async (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      const res = await axios.post(
        "http://localhost:3001/api/v1/todos",
        newTask
      );
      setTasks([res.data, ...tasks]);
      setNewTask({
        title: "",
        text: "",
      });
    }
  };

  const handleComplete = async (task) => {
    const resp = await axios.put(
      `http://localhost:3001/api/v1/todos/${task.id}`,
      { ...task, completed: true }
    );
    setTasks([...tasks.map((t) => (t.id === task.id ? resp.data : t))]);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/api/v1/todos/${id}`);
    setTasks([...tasks.filter((t) => t.id !== id)]);
  };

  return (
    <div className="h-screen bg-slate-300">
      <div className="px-2 py-2 md:px-10 md:py-10 md:container md:mx-auto">
        <div className="max-w-3xl mx-auto my-0 md:my-6">
          <form className="w-full">
            <textarea
              className="
                    form-control
                    block
                    w-full
                    px-2
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlTextarea1"
              rows="4"
              placeholder="Your new task"
              value={newTask.text}
              onChange={handleChange}
              onKeyDown={handleEnterPress}
            ></textarea>
          </form>
        </div>
        <ul
          className="overflow-y-auto"
          style={{ maxHeight: "80vh" }}
          data-testid="taskList"
        >
          {tasks?.map((task, i) => {
            return (
              <li
                key={i}
                className="max-w-3xl p-4 mx-auto my-4 rounded-lg shadow-lg bg-slate-200"
                data-testid={`listItem${i}`}
              >
                <h4 className="text-lg font-semibold text-gray-800">
                  {task.text}
                </h4>
                <p
                  className="mt-2 text-sm font-semibold text-gray-600"
                  label={task.completed ? "Completed" : "Not Completed"}
                  data-testid={`listItemCompleted${i}`}
                >
                  {task.completed ? "Completed" : "Not Completed"}
                </p>
                <div className="flex justify-end space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-testid={`completeButton${i}`}
                    onClick={() => handleComplete(task)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-testid={`deleteButton${i}`}
                    onClick={() => handleDelete(task.id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
