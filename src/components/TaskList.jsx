import TaskItem from "./TaskItem";

const TaskList = ({ taskList, removeTask, updateTask }) => {
  return (
    <section className=" overflow-auto rounded-lg">
      <ul className="flex flex-col gap-1 [&>li]:p-2">
        {taskList.map((taskItem) => (
          <TaskItem
            key={taskItem.id}
            taskItem={taskItem}
            removeTask={removeTask}
            updateTask={updateTask}
          />
        ))}
        {taskList.length === 0 && (
          <li className="rounded-lg bg-gray-300 dark:bg-gray-500 text-center">
            Lista sin tareas...
          </li>
        )}
      </ul>
    </section>
  );
};

export default TaskList;
