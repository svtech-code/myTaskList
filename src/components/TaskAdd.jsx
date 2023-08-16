import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import { useState } from "react";
import Swal from "sweetalert2";

const TaskAdd = ({ addNewTask }) => {
  const [inputTask, setInputTask] = useState("");

  const handleSendTask = (event) => {
    event.preventDefault();
    const positionAlert = window.innerWidth <= 768 ? "center" : "top-end";

    if (!inputTask.trim()) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ingresar tarea",
        allowOutsideClick: false,
      });
      return;
    }

    addNewTask(inputTask.trim());
    setInputTask("");

    Swal.fire({
      position: positionAlert,
      icon: "success",
      title: "Success",
      text: "Tarea registrada",
      showConfirmButton: false,
      toast: true,
      timer: 1500,
    });
  };

  return (
    <form
      onSubmit={handleSendTask}
      className="bg-cyan-700 dark:bg-gray-800 rounded-lg p-3 flex gap-2 text-black dark:text-white items-center h-14"
    >
      <span>
        <AddCircleOutlineSharpIcon />
      </span>
      <input
        type="text"
        placeholder="Add a new task..."
        className="w-full bg-gray-300 dark:bg-gray-400 text-black placeholder-gray-600 rounded-lg p-2 outline-none"
        value={inputTask}
        onChange={(input) => setInputTask(input.target.value)}
      />
    </form>
  );
};

export default TaskAdd;
