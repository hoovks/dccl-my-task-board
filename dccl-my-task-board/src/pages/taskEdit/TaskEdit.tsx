import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { StatusEdit } from "./components/StatusEdit";
import { ScreenCover } from "./components/ScreenCover";
import { Input } from "./components/Input";
import { useState } from "react";
import { IconEdit } from "./components/IconEdit";
import { Status, statusList } from "../../data/statusList";
import { Task } from "../../data/tasks";
import { Emoji } from "../../data/emojis";
import { SaveTaskProps } from "../defaultBoard/DefaultBoard";

interface TaskEditProps {
  onClose: () => void;
  onDelete: (taskId: number) => void;
  onSave: (props: SaveTaskProps) => void;
  selectedTask: Task | null;
}

export const TaskEdit = ({
  onClose,
  onDelete,
  onSave,
  selectedTask,
}: TaskEditProps) => {
  const [title, setTitle] = useState(selectedTask?.title || "");
  const [description, setDescription] = useState(
    selectedTask?.description || ""
  );
  const [selectedIcon, setSelectedIcon] = useState(selectedTask?.icon || null);
  const [newStatus, setNewStatus] = useState(
    selectedTask?.status || statusList.toDo
  );

  const handleDelete = () => {
    if (selectedTask) {
      onDelete(selectedTask.id);
      onClose();
    }
  };

  const handleSave = () => {
    if (selectedTask) {
      onSave({
        taskId: selectedTask.id,
        newTitle: title,
        newDescription: description,
        selectedIcon: selectedIcon,
        status: newStatus,
      });
    }
    onClose();
  };

  const handleIconClick = (selectedIcon: Emoji) => {
    setSelectedIcon(selectedIcon);
  };

  const handleStatusClick = (status: Status) => {
    setNewStatus(status);
  };

  return (
    <ScreenCover>
      <Card onClose={onClose}>
        <Input variant="name" value={title} setValue={setTitle} />
        <Input
          variant="description"
          value={description}
          setValue={setDescription}
        />
        <IconEdit onIconClick={handleIconClick} selectedIcon={selectedIcon} />
        <StatusEdit onStatusClick={handleStatusClick} status={newStatus} />

        <div className="flex self-end mt-auto gap-4">
          <Button onClick={handleDelete} variant="delete" />
          <Button onClick={handleSave} variant="save" />
        </div>
      </Card>
    </ScreenCover>
  );
};
