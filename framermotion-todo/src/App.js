import { useState } from "react";
import { motion, Reorder, AnimatePresence, LayoutGroup } from "framer-motion";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description:
        "Your mouth is a revolver, firing bullets in the sky (Mh-mh-mh-mh)",
      date: "Sat Jan 14 2022",
    },
    {
      id: 2,
      description:
        "People like us, we dont Need that much, just some One that starts, starts the spark in our bonfire hearts",
      date: "Sat Jan 13 2022",
    },
    {
      id: 3,
      description:
        "This world is getting colder, strangers passing by (Mh-mh-mh-mh) No one offers you a shoulder, no one looks you in the eye, eye, eye (Mh-mh-mh-mh)",
      date: "Sat Jan 15 2022",
    },
    {
      id: 4,
      description:
        "Days like these lead to Nights like this lead to Love like ours You light the spark in my bonfire heart",
      date: "Sat Jan 12 2022",
    },
  ]);
  const [newTask, setNewTask] = useState({
    description: "",
    date: "",
  });
  const [lastkey, setLastkey] = useState(5);

  const handleChange = (e) => {
    e.preventDefault();
    const day = new Date();
    const { value } = e.target;
    setNewTask({
      date: day.toDateString(),
      description: value,
    });
  };

  const removeTask = (id) => {
    setTasks([...tasks.filter((t) => t.id !== id)]);
  };

  const handleEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      setTasks([{ ...newTask, id: lastkey + 1 }, ...tasks]);
      setLastkey(lastkey + 1);
      setNewTask({
        description: "",
        date: "",
      });
    }
  };

  return (
    <div className="h-screen bg-slate-300">
      <div className="px-10 py-10 md:container md:mx-auto">
        {/* Simple ul list */}
        {/* <LayoutGroup>
          <div className="max-w-3xl mx-auto my-6">
            <motion.form
              initial={{
                y: "-100",
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 0.2,
                  type: "spring",
                  bounce: 0.85,
                },
              }}
              whileTap={{
                scale: 0.95,
              }}
              whileHover={{
                y: -5,
                transition: {
                  type: "spring",
                  bounce: 0.85,
                },
              }}
              className="w-full"
            >
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
                value={newTask.description}
                onChange={handleChange}
                onKeyDown={handleEnterPress}
              ></textarea>
            </motion.form>
          </div>
          <motion.ul
            className="overflow-y-auto"
            style={{ maxHeight: "80vh" }}
          >
            <AnimatePresence>
              {tasks.map((task, i) => {
                return (
                  <motion.li
                    initial={{ x: -100, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 0.8,
                      transition: {
                        type: "spring",
                        stiffness: 150,
                        duration: 1,
                        delay: i / 4,
                      },
                    }}
                    exit={{
                      x: 50,
                      opacity: 0,
                      transition: {
                        ease: "easeInOut",
                        duration: 0.25,
                        delay: 0.15,
                      },
                    }}
                    whileHover={{
                      opacity: 1,
                      scale: 1.03,
                      transition: {
                        type: "spring",
                        bounce: 0.85,
                      },
                    }}
                    key={task.id}
                    className="max-w-3xl p-4 mx-auto my-4 rounded-lg shadow-lg bg-slate-200"
                  >
                    <h4 className="text-lg font-semibold text-gray-800">
                      {task.description}
                    </h4>
                    <p className="mt-2 text-sm font-semibold text-gray-600">
                      Created on {task.date}
                    </p>
                    <div className="flex justify-end space-x-2">
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
                        onClick={() => removeTask(task.id)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </div>
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </motion.ul>
        </LayoutGroup> */}

        {/* Reorder component */}

        <LayoutGroup>
          <div className="max-w-3xl mx-auto my-6">
            <motion.form
              initial={{
                y: "-100",
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 0.2,
                  type: "spring",
                  bounce: 0.85,
                },
              }}
              whileTap={{
                scale: 0.95,
              }}
              whileHover={{
                y: -5,
                transition: {
                  type: "spring",
                  bounce: 0.85,
                },
              }}
              className="w-full"
            >
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
                value={newTask.description}
                onChange={handleChange}
                onKeyDown={handleEnterPress}
              ></textarea>
            </motion.form>
          </div>
          <Reorder.Group
            axis="y"
            className="overflow-y-auto"
            style={{ maxHeight: "80vh" }}
            values={tasks}
            onReorder={setTasks}
          >
            <AnimatePresence>
              {tasks.map((task, i) => {
                return (
                  <Reorder.Item
                    initial={{ x: -100, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 0.8,
                      transition: {
                        type: "spring",
                        stiffness: 150,
                        duration: 1,
                        delay: i / 4,
                      },
                    }}
                    exit={{
                      x: 50,
                      opacity: 0,
                      transition: {
                        ease: "easeInOut",
                        duration: 0.25,
                        delay: 0.15,
                      },
                    }}
                    whileHover={{
                      opacity: 1,
                      scale: 1.03,
                      transition: {
                        type: "spring",
                        bounce: 0.85,
                      },
                    }}
                    key={task.id}
                    value={task}
                    className="max-w-3xl p-4 mx-auto my-4 rounded-lg shadow-lg bg-slate-200"
                  >
                    <h4 className="text-lg font-semibold text-gray-800">
                      {task.description}
                    </h4>
                    <p className="mt-2 text-sm font-semibold text-gray-600">
                      Created on {task.date}
                    </p>
                    <div className="flex justify-end space-x-2">
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
                        onClick={() => removeTask(task.id)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </div>
                  </Reorder.Item>
                );
              })}
            </AnimatePresence>
          </Reorder.Group>
        </LayoutGroup>
      </div>
    </div>
  );
}

export default App;
