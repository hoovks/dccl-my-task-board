import { useRef } from "react";

interface InputProps {
  variant: "name" | "description";
  value: string;
  setValue: (newValue: string) => void;
}

export const Input = ({ variant, value, setValue }: InputProps) => {
  let label, placeholder, rows;

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleValueChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  switch (variant) {
    case "name":
      label = "Task name";
      placeholder = "Enter a task name";
      rows = 1;
      break;
    case "description":
      label = "Description";
      placeholder = "Enter a short description";
      rows = 8;
      break;
  }
  return (
    <div className="grid gap-2">
      <label className="">{label}</label>
      <textarea
        ref={inputRef}
        rows={rows}
        className={`p-2 border-2 rounded-md  focus:border-blue outline-none resize-none text-black`}
        placeholder={placeholder}
        value={value}
        onChange={handleValueChange}
      />
    </div>
  );
};
