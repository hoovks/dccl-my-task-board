import { Emoji } from "../../../components/Emoji";
import { Emoji as EmojiProps } from "../../../data/emojis";

export const CardIcon = ({ label, symbol }: EmojiProps) => {
  return (
    <div className="bg-white w-10 h-10 rounded-xl grid place-items-center">
      <Emoji label={label} symbol={symbol} />
    </div>
  );
};

export const AddCardIcon = () => {
  return (
    <div className="bg-orange w-10 h-10 rounded-xl grid place-items-center">
      <img src="./assets/images/add_round_duotone.svg" alt="add" />
    </div>
  );
};
