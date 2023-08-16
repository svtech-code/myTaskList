import TaskBtnFilter from "./TaskBtnFilter";

const TaskFilter = ({ changeFilter, filter }) => {
  return (
    <section className="bg-cyan-700 dark:bg-gray-800 rounded-lg flex gap-3 justify-center">
      <TaskBtnFilter
        text="Todas"
        changeFilter={changeFilter}
        action="all"
        filter={filter}
      />
      <TaskBtnFilter
        text="Completas"
        changeFilter={changeFilter}
        filter={filter}
        action="complete"
      />
      <TaskBtnFilter
        text="Pendientes"
        changeFilter={changeFilter}
        action="pending"
        filter={filter}
      />
    </section>
  );
};

export default TaskFilter;
