import { ChangeEvent } from 'react'
import { TaskType } from '../../Types/task.type'

type TaskProps = {
    task: TaskType;
    handleComplete: (e: ChangeEvent, task: TaskType) => void;
    handleDelete: (i: number) => void
}

const Task = ({ task, handleComplete, handleDelete }: TaskProps) => {
    return (
        <div className="flex justify-center mt-10 mx-8">
            <section className={`w-10/12  sm:w-10/11 lg:w-1/2 max-w-2xl p-2 ${task.completed ? "bg-gray-200 bg-opacity-25" : "bg-gray-200"}`}>
                <h2 className="font-bold ml-2">{task.title}, <span className="font-light text-sm">{task.created_at}</span></h2>
                <input type="checkbox" checked={task.completed} onChange={(e) => handleComplete(e, task)} />
                <span className={`text-left text-sm leading-3 tracking-wider px-1 ${task.completed ? " text-gray-600 line-through" : "text-gray-700"}`}>{task.text} |&nbsp;<span className="cursor-pointer hover:uppercase hover:font-bolder hover:text-red-500" onClick={() => handleDelete(task.id)}> remove?</span></span>
            </section>
        </div>
    )
}

export default Task