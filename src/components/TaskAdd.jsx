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
      className="bg-gray-400 dark:bg-gray-900 rounded-lg overflow-hidden p-3 flex gap-2 text-black dark:text-white items-center"
    >
      <span>
        <AddCircleOutlineSharpIcon />
      </span>
      <input
        type="text"
        placeholder="Add a new task..."
        className="w-full bg-white dark:bg-gray-400 text-black dark:placeholder-black rounded-lg p-2 outline-none"
        value={inputTask}
        onChange={(input) => setInputTask(input.target.value)}
      />
    </form>
  );
};

export default TaskAdd;
