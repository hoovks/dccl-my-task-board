export interface Emoji {
  symbol: string;
  label: string;
}

export interface Emojis {
  [key: string]: Emoji;
}

export const emojis = {
  work: { symbol: "🧑🏻‍💻", label: "technologist" },
  speech: { symbol: "💬", label: "speech balloon" },
  coffee: { symbol: "☕", label: "coffee" },
  workout: { symbol: "🏋🏻‍♀️", label: "person lifting weights" },
  study: { symbol: "📚", label: "books" },
  clock: { symbol: "⏰", label: "alarm clock" },
};
