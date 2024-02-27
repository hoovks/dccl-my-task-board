import { Status, statusList } from "../../../data/statusList";

interface StatusEditProps {
  onStatusClick: (status: Status) => void;
  status: Status;
}
export const StatusEdit = ({ onStatusClick, status }: StatusEditProps) => {
  const handleStatusClick = (status: Status) => {
    onStatusClick(status);
  };

  return (
    <div className="grid grid-cols-2 gap-2 ">
      <span className="col-span-2">Status</span>

      {Object.keys(statusList)
        .filter((key) => ["inProgress", "completed", "wontDo"].includes(key))
        .map((key) => {
          const { symbol, bgColor, iconColor, label } =
            statusList[key as keyof typeof statusList];

          const isSelected = status.label === label;
          const selectedClass = isSelected ? "border-blue" : "";

          return (
            <div
              key={label}
              className={`border-2 rounded-3xl flex items-center gap-2 cursor-pointer ${selectedClass}`}
              onClick={() =>
                handleStatusClick({ symbol, bgColor, iconColor, label })
              }
            >
              <div className={`bg-${iconColor} flex gap-2 p-4 rounded-2xl m-1`}>
                <img src={`./src/assets/images/${symbol}`} alt="" />
              </div>
              <span className="text-black">{label}</span>
            </div>
          );
        })}
    </div>
  );
};
