import { ChangeEvent, FormEvent } from 'react'
import { CreateTask } from '../../Types/task.type'

type InputProps = {
    search: string;
    task: CreateTask;
    handleSave: (v: FormEvent) => void;
    handleChange: (v: ChangeEvent) => void;
    setSearch: (v: string) => void;
    handleSearch: (e: FormEvent) => void;
    setSort: (v: string) => void;
    handleOrder: (v: string) => void;
}

const InteractiveInputComponent = ({ task, handleSave, handleChange, search, setSearch, handleSearch, setSort, handleOrder }: InputProps) => {
    return (
        <>
            <div className="flex justify-center m-5">
                <section className="w-10/12  sm:w-10/11 lg:w-1/2 max-w-2xl flex flex-col items-center">
                    <form className="flex justify-between w-full" onSubmit={handleSave}>
                        <input type="text" placeholder={`write things down here ...`} value={task.text} onChange={handleChange} />
                    </form>
                </section>
            </div>
            <div className="flex justify-center m-5">
                <section className="w-10/12  sm:w-10/11 lg:w-1/2 max-w-2xl flex flex-col items-center">
                    <form className="flex justify-between w-full" onSubmit={handleSearch}>
                        <div className=" w-full relative text-gray-700">
                            <input className="w-full h-10 pl-8 pr-3" type="text" placeholder="search here .." value={search} onChange={(e) => setSearch(e.target.value)} />
                            <div className="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                                </svg>
                            </div>
                        </div>
                        <select onChange={(e) => setSort(e.target.value)}>
                            <option className="p-1">updated_at</option>
                            <option className="p-1">created_at</option>
                            <option className="p-1">id</option>
                            <option className="p-1">title</option>
                        </select>
                        <select onChange={(e) => handleOrder(e.target.value)}>
                            <option className="p-1">ASC</option>
                            <option className="p-1">DESC</option>
                        </select>
                    </form>
                </section>
            </div>
        </>
    )
}

export default InteractiveInputComponent;