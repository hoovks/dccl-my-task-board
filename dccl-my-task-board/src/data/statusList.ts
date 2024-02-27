export interface StatusList {
  [key: string]: Status;
}

export interface Status {
  symbol: string;
  iconColor?: "orange" | "green" | "red" | "";
  bgColor: "yellow" | "light-green" | "salmon" | "light-gray";
  label: string;
}

export const statusList: StatusList = {
  inProgress: {
    symbol: "time_atack_duotone.svg",
    iconColor: "orange",
    bgColor: "yellow",
    label: "In Progress",
  },
  completed: {
    symbol: "done_round_duotone.svg",
    iconColor: "green",
    bgColor: "light-green",
    label: "Completed",
  },
  wontDo: {
    symbol: "close_ring_duotone.svg",
    iconColor: "red",
    bgColor: "salmon",
    label: "Won't do",
  },
  toDo: {
    symbol: "",
    iconColor: "",
    bgColor: "light-gray",
    label: "",
  },
};
