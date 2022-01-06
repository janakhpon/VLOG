import PagItem from "./item";

const Pagination = ({
  isrsearch,
  search,
  searchcount,
  page,
  topagfs,
  topag,
  handlePagination,
}) => {
  return (
    <div className="flex justify-center mx-8 mt-10">
      <section className="flex justify-center w-10/12 max-w-2xl sm:w-10/11 lg:w-1/2">
        <nav aria-label="Page navigation">
          <ul className="inline-flex space-x-2">
            {isrsearch && search !== ""
              ? searchcount
                ? [...Array(topagfs)].map((val, i) => {
                    return (
                      <PagItem
                        i={i}
                        page={page}
                        handlePagination={handlePagination}
                        key={`${val} + ${i}`}
                      />
                    );
                  })
                : null
              : [...Array(topag)].map((val, i) => {
                  return (
                    <PagItem
                      i={i}
                      page={page}
                      handlePagination={handlePagination}
                      key={`${val} + ${i}`}
                    />
                  );
                })}
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Pagination;
