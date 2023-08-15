const TaskComputed = ({ completeTask, pendingTask }) => {
  return (
    <section className="flex justify-between">
      <span className="flex pt-4 text-black font-bold dark:text-white">
        {pendingTask} Pendientes
      </span>
      <span className="flex pt-4 text-black font-bold dark:text-white">
        {completeTask} Completadas
      </span>
    </section>
  );
};

export default TaskComputed;
