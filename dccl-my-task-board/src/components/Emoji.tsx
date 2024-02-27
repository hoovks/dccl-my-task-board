import { Emoji as EmojiProps } from "../data/emojis";

export const Emoji = ({ symbol, label }: EmojiProps) => (
  <span
    className=""
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </span>
);
