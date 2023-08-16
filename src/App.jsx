import TaskAdd from "./components/TaskAdd";
import Header from "./components/Header";
import TaskComputed from "./components/TaskComputed";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import TaskFilter from "./components/TaskFilter";
import { DragDropContext } from "@hello-pangea/dnd";

const initialTaskList = JSON.parse(localStorage.getItem("taskList")) || [];

// const orderTask = (list, startIndex, endIndex) => {
//   const result = [...list];
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);

//   return result;
// };

const App = () => {
  const [taskList, setTaskList] = useState(initialTaskList);
  const [filter, setFilter] = useState("all");
  const completeTask = taskList.filter((task) => task.state).length;
  const pendingTask = taskList.filter((task) => !task.state).length;

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  // Add a new task
  const addNewTask = (task) => {
    const newTask = {
      id: Date.now(),
      task: task,
      state: false,
    };

    setTaskList([...taskList, newTask]);
  };

  // Update the state of a task
  const updateTask = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, state: !task.state } : task
      )
    );
  };

  // Remove of a task
  const removeTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  // Returns the values according to the state of the filter
  // Devuelve los valores según el estado del filtro
  const taskFilter = () => {
    switch (filter) {
      case "all":
        return taskList;
      case "complete":
        return taskList.filter((task) => task.state);
      case "pending":
        return taskList.filter((task) => !task.state);
    }
  };

  // Allows you to modify the filter according to the passed parameter
  // Permite modificar el filtro según el parametro pasado
  const changeFilter = (filter) => setFilter(filter);

  // const handleDragEnd = (result) => {
  //   const { destination, source } = result;
  //   if (!destination) return;
  //   if (
  //     source.index === destination.index &&
  //     source.droppableId === destination.droppableId
  //   )
  //     return;

  //   setTaskList((prevTask) =>
  //     orderTask(prevTask, source.index, destination.index)
  //   );
  // };

  return (
    <div
      className="bg-[url('./assets/img-ligth.jpg')] dark:bg-[url('./assets/img-dark.jpg')]
    // bg-center h-screen w-screen p-3 gap-3 relative flex flex-col bg-cover"
    >
      <header className="flex flex-col gap-2 opacity-90">
        <Header />
        <TaskAdd addNewTask={addNewTask} />
      </header>

      <main className="bg-cyan-700 dark:bg-gray-800 rounded-lg w-full h-auto p-3 flex flex-col gap-2 max-h-[75%] opacity-90">
        <TaskFilter changeFilter={changeFilter} filter={filter} />

        <TaskList
          taskList={taskFilter()}
          removeTask={removeTask}
          updateTask={updateTask}
        />

        <TaskComputed completeTask={completeTask} pendingTask={pendingTask} />
      </main>
    </div>
  );
};
export default App;
