import Task from "./item";

const DisplayTasks = ({
  isrsearch,
  searchcount,
  tasks,
  searchedTasks,
  handleComplete,
  handleDelete,
}) => {
  return (
    <div className="grid grid-flow-row auto-rows-max lg:mt-5 sm:mt-2">
      {isrsearch ? (
        searchcount ? (
          <>
            <div className="flex justify-center mx-8">
              <section className="w-10/12 max-w-2xl sm:w-10/11 lg:w-1/2">
                <p>Found {searchcount} tasks!</p>
              </section>
            </div>
            {!!searchedTasks.length &&
              searchedTasks.map((t, i) => {
                return (
                  <Task
                    key={i}
                    task={t}
                    handleComplete={handleComplete}
                    handleDelete={handleDelete}
                  />
                );
              })}
          </>
        ) : (
          <div className="flex justify-center mx-8">
            <section className="w-10/12 max-w-2xl sm:w-10/11 lg:w-1/2">
              <p>No tasks found with the current search term!</p>
            </section>
          </div>
        )
      ) : (
        <>
          {!!tasks.length &&
            tasks.map((t, i) => {
              return (
                <Task
                  key={i}
                  task={t}
                  handleComplete={handleComplete}
                  handleDelete={handleDelete}
                />
              );
            })}
        </>
      )}
    </div>
  );
};

export default DisplayTasks;
