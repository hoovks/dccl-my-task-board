interface ButtonProps {
  variant: "delete" | "save";
  onClick: () => void;
}

export const Button = ({ onClick, variant }: ButtonProps) => {
  let label, icon, bgColor;

  switch (variant) {
    case "delete":
      bgColor = "dove";
      label = "Delete";
      icon = "trash.svg";
      onClick = onClick;
      break;
    case "save":
      bgColor = "blue";
      label = "Save";
      icon = "done_round.svg";
      onClick = onClick;
      break;
  }
  return (
    <div
      className={`bg-${bgColor} text-white flex py-2 px-8 gap-2 rounded-3xl cursor-pointer`}
      onClick={onClick}
    >
      <span>{label}</span>
      <img src={`./src/assets/images/${icon}`} alt="" />
    </div>
  );
};
