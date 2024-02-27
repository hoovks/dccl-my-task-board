import { useState } from "react";

export const Header = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [title, setTitle] = useState("My Task Board");

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
    if (!title.trim()) {
      setTitle("New Task");
    }
  };

  return (
    <div className="grid grid-cols-[auto,auto,1fr] gap-x-4 gap-y-2 py-2">
      <img
        src="./src/assets/images/logo.svg"
        alt="logo"
        className="min-w-min"
      />
      {isEditMode ? (
        <>
          <input
            type="text"
            value={title}
            placeholder="Task Name"
            onChange={(e) => setTitle(e.target.value)}
            className="text-4xl font-outfit px-2 max-w-72 sm:max-w-96 border-doveoutline-dove"
          />
          <button onClick={handleSaveClick} className="text-base ml-auto px-6">
            Save
          </button>
        </>
      ) : (
        <>
          <span className="pl-2 text-4xl font-outfit" onClick={handleEditClick}>
            {title}
          </span>
          <img
            src="./src/assets/images/edit_duotone.svg"
            className="self-center min-w-min "
          />
        </>
      )}
      <span className="pl-2 col-start-2 text-base">
        Tasks to keep organised
      </span>
    </div>
  );
};
