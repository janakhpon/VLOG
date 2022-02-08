const TaskList = ({ taskList }) => {
    return (
        <div data-testid="taskContainer">
            <ul data-testid="taskList">
                {taskList.map((task, i) => (
                    <li key={i} data-testid={`listItem${i}`}>
                        {task.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList;