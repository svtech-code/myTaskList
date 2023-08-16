const TaskBtnFilter = ({ text, changeFilter, action, filter }) => {
  return (
    <button
      className={`p-2  text-white  dark:text-black rounded-md w-28 
      ${
        filter === action
          ? "bg-sky-400 dark:bg-sky-500"
          : "bg-black dark:bg-white hover:bg-sky-400 dark:hover:bg-sky-400"
      }`}
      onClick={() => changeFilter(action)}
    >
      {text}
    </button>
  );
};

export default TaskBtnFilter;
