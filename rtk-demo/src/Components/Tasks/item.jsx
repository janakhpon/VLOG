const Task = ({ task, handleComplete, handleDelete }) => {
  return (
    <div className="flex justify-center mx-8 mt-10">
      <section
        className={`w-10/12  sm:w-10/11 lg:w-1/2 max-w-2xl p-2 ${
          task.completed ? "bg-gray-200 bg-opacity-25" : "bg-gray-200"
        }`}
      >
        <h2 className="ml-2 font-bold">
          {task.title},{" "}
          <span className="text-sm font-light">{task.created_at}</span>
        </h2>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={(e) => handleComplete(e, task)}
        />
        <span
          className={`text-left text-sm leading-3 tracking-wider px-1 ${
            task.completed ? " text-gray-600 line-through" : "text-gray-700"
          }`}
        >
          {task.text} |&nbsp;
          <span
            className="cursor-pointer hover:uppercase hover:font-bolder hover:text-red-500"
            onClick={() => handleDelete(task.id)}
          >
            {" "}
            remove?
          </span>
        </span>
      </section>
    </div>
  );
};

export default Task;
