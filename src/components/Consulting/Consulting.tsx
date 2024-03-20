import React from "react";
import Button from "../Button/Button";

const Consulting = () => {
  return (
    <div className="bg-[#252B42] lg:w-[1440px]  h-[142px]">
      <div className="lg:flex justify-center gap-[305px] pt-8">
        <div className="">
          <h3 className="font-bold text-[24px] text-[#FFFFFF]">
            Consulting Agency For Your Business
          </h3>
          <p className="font-normal text-[14px] text-[#FFFFFF]">
            The quick fox jumps over the lazy dog
          </p>
        </div>

        <div>
          <Button text="Contact us" />
        </div>
      </div>
    </div>
  );
};

export default Consulting;
