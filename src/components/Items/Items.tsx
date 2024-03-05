import React from "react";
import col1 from "../../assets/images/col1.svg";
import col2 from "../../assets/images/col2.svg";
import col3 from "../../assets/images/col3.svg";

const Items = () => {
  return (
    <div className="lg:w-[1440px] lg:h-[392px] bg-[#FAFAFA] lg:flex md:flex-row sm:flex-row  justify-center items-center gap-8">
      <img
        src={col1}
        alt="col1"
        className="mb-4 pt-4 ml-[2.5rem] lg:ml-0 md:w-[555px] md:ml-[7rem] lg:w-[333px]"
      />
      <img
        src={col2}
        alt="col2"
        className="mb-4  ml-[2.5rem] lg:ml-0 md:w-[555px] md:ml-[7rem] lg:w-[333px]"
      />
      <img
        src={col3}
        alt="col3"
        className="mb-4 ml-[2.5rem] lg:ml-0 md:w-[555px] md:ml-[7rem] lg:w-[333px]"
      />
    </div>
  );
};

export default Items;
