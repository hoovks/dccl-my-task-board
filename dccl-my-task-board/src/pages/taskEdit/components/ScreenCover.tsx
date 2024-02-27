interface ScreenCoverProps {
  children: React.ReactNode;
}

export const ScreenCover = ({ children }: ScreenCoverProps) => {
  return (
    <div className="h-full w-full bg-zinc-700 bg-opacity-20 absolute top-0 left-0 bottom-0 right-0 flex md:justify-end z-20">
      {children}
    </div>
  );
};
