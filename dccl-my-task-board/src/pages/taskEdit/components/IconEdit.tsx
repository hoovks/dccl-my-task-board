import { Emoji } from "../../../components/Emoji";
import { Emoji as EmojiProps, emojis } from "../../../data/emojis";

interface IconEditProps {
  onIconClick: (icon: EmojiProps) => void;
  selectedIcon: null | EmojiProps;
}

export const IconEdit = ({ onIconClick, selectedIcon }: IconEditProps) => {
  return (
    <div className="grid gap-2">
      <span>Icon</span>
      <div className="flex gap-3">
        {Object.entries(emojis).map(([key, icon]) => (
          <div
            key={key}
            className={`bg-light-gray w-12 h-12 rounded-xl grid place-items-center cursor-pointer" ${
              selectedIcon === icon && "bg-yellow"
            }`}
            onClick={() => onIconClick(icon)}
          >
            <Emoji label={icon.label} symbol={icon.symbol} />
          </div>
        ))}
      </div>
    </div>
  );
};
