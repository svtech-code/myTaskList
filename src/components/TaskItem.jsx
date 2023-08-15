import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";

const TaskItem = ({ taskItem, removeTask, updateTask }) => {
  const { id, task, state } = taskItem;

  return (
    // nota: separar boton de eliminar de la lista, pero manteniendo los formatos
    <li
      className={` rounded-lg text-black flex items-center gap-2 ${
        state ? "bg-red-300" : "bg-gray-300 dark:bg-gray-500"
      }`}
    >
      <button
        className="bg-white rounded-full border-2 w-5 h-5 flex-none flex justify-center items-center"
        onClick={() => updateTask(id)}
      >
        {state && <CheckCircleSharpIcon />}
      </button>
      <p
        className={`flex-grow text-lg ${
          state ? "line-through text-gray-500" : "text-black dark:text-white"
        }`}
      >
        {task}
      </p>
      <button
        className="flex-none dark:text-white"
        onClick={() => removeTask(id)}
      >
        <CloseSharpIcon />
      </button>
    </li>
  );
};

export default TaskItem;
