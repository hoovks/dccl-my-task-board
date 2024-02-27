interface CardProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const Card = ({ children, onClose }: CardProps) => {
  return (
    <div className="bg-white text-dove rounded-md m-4 p-6 w-full md:w-1/2 z-40 flex flex-col gap-8">
      <div className=" flex justify-between">
        <span className="text-xl text-black">Task details</span>
        <div
          onClick={onClose}
          className="w-8 h-8 grid place-items-center border-2 rounded-md cursor-pointer	"
        >
          <img
            src="./assets/images/close_ring_duotone-1.svg"
            alt="close icon"
          />
        </div>
      </div>
      {children}
    </div>
  );
};
