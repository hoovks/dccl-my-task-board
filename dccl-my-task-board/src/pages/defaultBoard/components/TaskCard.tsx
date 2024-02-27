import { StatusIcon } from "../../../components/StatusIcon";
import { Task } from "../../../data/tasks";
import { AddCardIcon, CardIcon } from "./CardIcon";

interface TaskCardProps extends Task {
  onClick: () => void;
}

export const TaskCard = ({
  title,
  description,
  status,
  icon,
  onClick,
}: TaskCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`bg-${
        status ? status.bgColor : "ecru"
      } p-4 flex  gap-6 rounded-2xl cursor-pointer`}
    >
      {status ? (
        icon && <CardIcon symbol={icon.symbol} label={icon.label} />
      ) : (
        <AddCardIcon />
      )}

      <div className="grow grid self-center">
        <span className="font-medium">{title}</span>
        <span className="font-light">{description}</span>
      </div>

      {status && <StatusIcon status={status} />}
    </div>
  );
};
