import CloseSharpIcon from "@mui/icons-material/CloseSharp";

const TaskItem = ({ task }) => {
  return (
    <li className="bg-white dark:bg-gray-500 rounded-lg text-black flex items-center gap-2">
      <button className="bg-white rounded-full border-2 w-5 h-5 flex-none"></button>
      <p className="flex-grow text-lg">{task.task}</p>
      <button className="flex-none">
        <CloseSharpIcon />
      </button>
    </li>
  );
};

export default TaskItem;
