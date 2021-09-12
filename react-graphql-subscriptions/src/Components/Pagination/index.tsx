import PagItem from './item'

type PaginationProps = {
    search: string;
    isrsearch: boolean;
    searchcount: number;
    page: number;
    topagfs: number;
    topag: number;
    handlePagination: (i: number) => void
}
const Pagination = ({ isrsearch, search, searchcount, page, topagfs, topag, handlePagination }: PaginationProps) => {
    return (
        <div className="flex justify-center mt-10 mx-8">
            <section className="w-10/12  sm:w-10/11 lg:w-1/2 max-w-2xl flex justify-center">
                <nav aria-label="Page navigation">
                    <ul className="inline-flex space-x-2">
                        {
                            isrsearch&&search !== "" ? searchcount ? ([...Array(topagfs)].map((val, i) => {
                                return <PagItem i={i} page={page} handlePagination={handlePagination} key={`${val} + ${i}`} />
                            })) : null : (
                                [...Array(topag)].map((val, i) => {
                                    return <PagItem i={i} page={page} handlePagination={handlePagination} key={`${val} + ${i}`} />
                                })
                            )
                        }
                    </ul>
                </nav>
            </section>
        </div>
    )
}


export default Pagination