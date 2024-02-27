import { useState } from "react";
import { TaskCard } from "./components/TaskCard";
import { Header } from "./components/Header";
import { TaskEdit } from "../taskEdit/TaskEdit";
import { AddTaskCard } from "./components/AddTaskCard";
import { Status, statusList } from "../../data/statusList";
import { Emoji, emojis } from "../../data/emojis";
import { Task, tasks } from "../../data/tasks";

export interface SaveTaskProps {
  taskId: number;
  newTitle: string;
  newDescription: string;
  selectedIcon: Emoji | null;
  status: Status;
}

export const DefaultBoard = () => {
  const [taskList, setTaskList] = useState<Task[]>(tasks);

  const [isTaskEditOpen, setIsTaskEditOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleCardClick = (task: Task) => {
    setSelectedTask(task);
    setIsTaskEditOpen(true);
  };

  const handleCloseTaskEdit = () => {
    setIsTaskEditOpen(false);
  };

  const handleDeleteTask = (taskId: number) => {
    const updatedTaskList = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedTaskList);
  };

  const handleSave = ({
    taskId,
    newTitle,
    newDescription,
    selectedIcon,
    status,
  }: SaveTaskProps) => {
    const titleToSave = newTitle === "" ? "New Task" : newTitle;

    const updatedTaskList = taskList.map((task) =>
      task.id === taskId
        ? {
            ...task,
            title: titleToSave,
            description: newDescription,
            icon: selectedIcon,
            status: status,
          }
        : task
    );
    setTaskList(updatedTaskList);
    setIsTaskEditOpen(false);
  };

  const handleAddNewTask = () => {
    const newTask: Task = {
      id: taskList.length + 1,
      title: "New Task",
      description: "",
      status: statusList.toDo,
      icon: emojis.work,
    };
    setTaskList([...taskList, newTask]);
    handleCardClick(newTask);
  };

  return (
    <>
      {isTaskEditOpen && (
        <TaskEdit
          onClose={handleCloseTaskEdit}
          onDelete={handleDeleteTask}
          onSave={handleSave}
          selectedTask={selectedTask}
        />
      )}
      <div className="m-auto px-8 sm:px-0 mt-12 sm:max-w-2xl w-full">
        <Header />
        <div className="pt-8 grid gap-4">
          {taskList.map((task, index) => (
            <TaskCard
              key={index}
              id={task.id}
              title={task.title}
              description={task.description}
              status={task.status}
              icon={task.icon}
              onClick={() => handleCardClick(task)}
            />
          ))}
          <AddTaskCard onClick={handleAddNewTask} />
        </div>
      </div>
    </>
  );
};
