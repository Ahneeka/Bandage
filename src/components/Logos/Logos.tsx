import React from "react";
import fa1 from "../../assets/images/fa1.svg";
import fa2 from "../../assets/images/fa2.svg";
import fa3 from "../../assets/images/fa3.svg";
import fa4 from "../../assets/images/fa4.svg";
import fa5 from "../../assets/images/fa5.svg";
import fa6 from "../../assets/images/fa6.svg";

const Logos = () => {
  return (
    <div className="lg:w-[1440px] lg:h-[175px] flex items-center justify-center bg-[#FAFAFA]">
      <div className="lg:flex gap-7 mt-[5rem]">
        <img src={fa1} alt="fa1" className="mb-[4rem]" />
        <img src={fa2} alt="fa2" className="mb-[3rem]" />
        <img src={fa3} alt="fa3" className="mb-[4rem]" />
        <img src={fa4} alt="fa4" className="mb-[4rem]" />
        <img src={fa5} alt="fa5" className="mb-[4rem]" />
        <img src={fa6} alt="fa6" className="mb-[4rem]" />
      </div>
    </div>
  );
};

export default Logos;
