import TaskAdd from "./components/TaskAdd";
import Header from "./components/Header";
import TaskComputed from "./components/TaskComputed";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";

const initialTaskList = JSON.parse(localStorage.getItem("taskList")) || [];

const App = () => {
  const [taskList, setTaskList] = useState(initialTaskList);
  const completeTask = taskList.filter((task) => task.state).length;
  const pendingTask = taskList.filter((task) => !task.state).length;

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  const addNewTask = (task) => {
    const newTask = {
      id: Date.now(),
      task: task,
      state: false,
    };

    setTaskList([...taskList, newTask]);
  };

  const updateTask = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, state: !task.state } : task
      )
    );
  };

  const removeTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div
      className="h-screen w-screen max-h-screen p-4 gap-3 bg-cover flex flex-grow flex-col
    bg-[url('./assets/img-mobile-light.jpeg')] dark:bg-[url('./assets/img-mobile-dark.jpeg')]"
    >
      <Header />

      <TaskAdd addNewTask={addNewTask} />

      <main className="rounded-lg overflow-hidden flex gap-2 flex-col flex-grow">
        <div className="bg-blue-400 dark:bg-gray-800 px-2 py-4 rounded-lg">
          <TaskList
            taskList={taskList}
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
