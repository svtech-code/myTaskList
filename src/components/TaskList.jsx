import TaskItem from "./TaskItem";

const TaskList = ({ taskList }) => {
  const { id } = taskList;

  return (
    <section className=" overflow-auto rounded-lg">
      <ul className="flex flex-col gap-1 [&>li]:p-2">
        {taskList.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
