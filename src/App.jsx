import TaskAdd from "./components/TaskAdd";
import Header from "./components/Header";
import TaskComputed from "./components/TaskComputed";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";

const initialTaskList = JSON.parse(localStorage.getItem("taskList")) || [];

const App = () => {
  const [taskList, setTaskList] = useState(initialTaskList);
  const numberTask = taskList.length;

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
    console.log(taskList);
  }, [taskList]);

  const addNewTask = (task) => {
    const newTask = {
      id: Date.now(),
      task: task,
      state: false,
    };

    setTaskList([...taskList, newTask]);
  };

  return (
    <div className="h-screen w-screen max-h-screen bg-[url('./assets/img-mobile-light.jpeg')] p-4 gap-4 bg-cover flex flex-grow flex-col">
      <Header />

      <main className="rounded-lg overflow-hidden flex gap-2 flex-col flex-grow">
        <div className="bg-gray-400 dark:bg-gray-900 px-2 py-4 rounded-lg">
          <TaskComputed numberTask={numberTask} />

          <TaskList taskList={taskList} />
        </div>
      </main>

      <TaskAdd addNewTask={addNewTask} />
    </div>
  );
};
export default App;
