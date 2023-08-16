import TaskAdd from "./components/TaskAdd";
import Header from "./components/Header";
import TaskComputed from "./components/TaskComputed";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import TaskFilter from "./components/TaskFilter";

const initialTaskList = JSON.parse(localStorage.getItem("taskList")) || [];

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

  return (
    <div
      className="bg-center h-screen w-screen max-h-screen p-4 gap-3 bg-cover flex flex-grow flex-col
    bg-[url('./assets/img-ligth.jpg')] dark:bg-[url('./assets/img-dark.jpg')]"
    >
      <Header />

      <TaskAdd addNewTask={addNewTask} />

      <main className="rounded-lg overflow-hidden flex gap-2 flex-col flex-grow opacity-90">
        <div className="bg-cyan-700 dark:bg-gray-800 p-2 rounded-lg">
          <TaskFilter changeFilter={changeFilter} filter={filter} />

          <TaskList
            taskList={taskFilter()}
            removeTask={removeTask}
            updateTask={updateTask}
          />
          <TaskComputed completeTask={completeTask} pendingTask={pendingTask} />
        </div>
      </main>
    </div>
  );
};
export default App;
