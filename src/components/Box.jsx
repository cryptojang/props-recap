const Box = ({ bgColor, isRounded, title }) => {
  return (
    <div
      className={`w-48 h-48 text-white ${bgColor} ${
        isRounded && "rounded-full"
      } flex justify-center items-center
      
      `}
    >
      {title}
    </div>
  );
};

export default Box;
