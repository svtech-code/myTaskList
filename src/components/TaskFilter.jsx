import TaskBtnFilter from "./TaskBtnFilter";

const TaskFilter = ({ changeFilter, filter }) => {
  return (
    <section className="bg-cyan-700 dark:bg-gray-800 rounded-lg p-2 mb-2 flex gap-3 justify-center">
      <TaskBtnFilter text="Todas" changeFilter={changeFilter} action="all" />
      <TaskBtnFilter
        text="Completas"
        changeFilter={changeFilter}
        action="complete"
      />
      <TaskBtnFilter
        text="Pendientes"
        changeFilter={changeFilter}
        action="pending"
      />
    </section>
  );
};

export default TaskFilter;
