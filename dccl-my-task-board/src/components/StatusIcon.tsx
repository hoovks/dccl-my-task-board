import { Status } from "../data/statusList";

interface StatusIconProps {
  status?: Status | undefined;
}

export const StatusIcon = ({ status }: StatusIconProps) => {
  return (
    <>
      {status && (
        <div
          className={`bg-${status.iconColor} w-10 h-10 rounded-xl grid place-items-center`}
        >
          <img src={`./src/assets/images/${status.symbol}`} alt="" />
        </div>
      )}
    </>
  );
};
