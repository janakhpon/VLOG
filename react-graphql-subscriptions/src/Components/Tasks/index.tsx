import { ChangeEvent } from 'react'
import Task from './item'
import { TaskType } from '../../Types/task.type'

type TasksProps = {
    isrsearch: boolean;
    searchcount: number;
    searchedTasks: TaskType[];
    tasks: TaskType[];
    handleComplete: (e: ChangeEvent, task: TaskType) => void;
    handleDelete: (i: number) => void
}

const DisplayTasks = ({ isrsearch, searchcount, tasks, searchedTasks, handleComplete, handleDelete }: TasksProps) => {
    return (
        <div className="grid grid-flow-row auto-rows-max lg:mt-5 sm:mt-2">
            {
                isrsearch ? searchcount ? (<>
                    <div className="flex justify-center mx-8">
                        <section className="w-10/12  sm:w-10/11 lg:w-1/2 max-w-2xl">
                            <p>Found {searchcount} tasks!</p>
                        </section>
                    </div>
                    {
                        !!searchedTasks.length && searchedTasks.map((t, i) => {
                            return <Task key={i} task={t} handleComplete={handleComplete} handleDelete={handleDelete} />
                        })
                    }
                </>) : (<div className="flex justify-center mx-8">
                    <section className="w-10/12  sm:w-10/11 lg:w-1/2 max-w-2xl">
                        <p>No tasks found with the current search term!</p>
                    </section>
                </div>) : (<>
                    {
                        !!tasks.length && tasks.map((t, i) => {
                            return <Task key={i} task={t} handleComplete={handleComplete} handleDelete={handleDelete} />
                        })
                    }
                </>)
            }
        </div>
    )
}

export default DisplayTasks