const TaskComputed = ({ numberTask }) => {
  return (
    <section>
      <span className="flex pb-4 text-black font-bold dark:text-white">
        {numberTask} tareas pendientes
      </span>
    </section>
  );
};

export default TaskComputed;
