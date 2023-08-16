const TaskComputed = ({ completeTask, pendingTask }) => {
  return (
    <footer className="flex justify-between">
      <span className="flex text-black font-bold dark:text-white">
        {pendingTask} Pendientes
      </span>
      <span className="flex text-black font-bold dark:text-white">
        {completeTask} Completadas
      </span>
    </footer>
  );
};

export default TaskComputed;
