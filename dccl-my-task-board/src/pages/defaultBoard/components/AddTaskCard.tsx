import { AddCardIcon } from "./CardIcon";

interface AddTaskCardProps {
  onClick: () => void;
}

export const AddTaskCard = ({ onClick }: AddTaskCardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-ecru p-4 flex gap-6 rounded-2xl cursor-pointer"
    >
      <AddCardIcon />
      <span className="grow grid self-center">Add new task</span>
    </div>
  );
};
