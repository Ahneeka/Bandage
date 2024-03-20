import React from "react";
interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div className="flex rounded-[5px] mx-auto items-center justify-center h-6  lg:h-[62px]  md:h-[62px] bg-[#23A6F0] text-white px-4 sm:w-30  lg:w-[204px]  md:w-[204px]">
      {text}
    </div>
  );
};

export default Button;
