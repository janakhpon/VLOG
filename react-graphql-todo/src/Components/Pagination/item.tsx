type PagItemProps = {
    i: number;
    page: number;
    handlePagination: (i: number) => void
}

const PagItem = ({ i, page, handlePagination }: PagItemProps) => {
    return (
        <li>
            <button className={`w-10 h-10 ${i + 1 === page ? " text-white transition-colors duration-150 bg-gray-500 border border-r-0 border-gray-500 rounded-full focus:shadow-outline" : "transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-gray-100"} `} onClick={() => handlePagination(i + 1)}>{i + 1}</button>
        </li>
    )
}

export default PagItem