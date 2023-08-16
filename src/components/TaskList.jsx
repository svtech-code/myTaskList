import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import TaskItem from "./TaskItem";

const TaskList = ({ taskList, removeTask, updateTask, handleDragEnd }) => {
  return (
    <section className="w-full rounded-lg overflow-hidden overflow-y-auto">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks">
          {(droppableProvider) => (
            <ul
              className="flex flex-col gap-1 [&>li]:p-2"
              ref={droppableProvider.innerRef}
              {...droppableProvider.droppableProps}
            >
              {taskList.map((taskItem, index) => (
                <Draggable
                  index={index}
                  key={taskItem.id}
                  draggableId={`${taskItem.id}`}
                >
                  {(draggableProvider) => (
                    <TaskItem
                      taskItem={taskItem}
                      removeTask={removeTask}
                      updateTask={updateTask}
                      ref={draggableProvider.innerRef}
                      {...draggableProvider.dragHandleProps}
                      {...draggableProvider.draggableProps}
                    />
                  )}
                </Draggable>
              ))}
              {droppableProvider.placeholder}
              {taskList.length === 0 && (
                <li className="rounded-lg bg-gray-300 dark:bg-gray-500 text-center">
                  Lista sin tareas...
                </li>
              )}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
};

export default TaskList;
