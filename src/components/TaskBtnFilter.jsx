const TaskBtnFilter = ({ text, changeFilter, action }) => {
  return (
    <button
      className="p-2 bg-black text-white dark:bg-white dark:text-black rounded-md w-28"
      onClick={() => changeFilter(action)}
    >
      {text}
    </button>
  );
};

export default TaskBtnFilter;
