import { Emoji, emojis } from "./emojis";
import { Status, statusList } from "./statusList";

export interface Task {
  id: number;
  title: string;
  description?: string;
  status: Status;
  icon: Emoji | null;
}

export const tasks: Task[] = [
  {
    id: 1,
    title: "Task in Progress",
    description: " ",
    status: statusList.inProgress,
    icon: emojis.clock,
  },
  {
    id: 2,
    title: "Task Completed",
    description: " ",
    status: statusList.completed,
    icon: emojis.workout,
  },
  {
    id: 3,
    title: "Won’t do",
    description: " ",
    status: statusList.wontDo,
    icon: emojis.coffee,
  },
  {
    id: 4,
    title: "Task To Do",
    description: " ",
    status: statusList.toDo,
    icon: emojis.study,
  },
];
