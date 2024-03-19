import React from "react";
import col8 from "../../assets/images/col8.svg";
import fixed from "../../assets/images/fixed.svg";
import Frame from "../../assets/images/Frame.svg";
import Ellipse1 from "../../assets/images/Ellipse1.svg";
import Ellipse2 from "../../assets/images/Ellipse2.svg";
import Ellipse3 from "../../assets/images/Ellipse3.svg";
import Ellipse4 from "../../assets/images/Ellipse4.svg";

const Popular2 = () => {
  return (
    <div className="bg-[#FFFFFF] lg:w-[1440px] lg:h-[880px]  lg:pt-[5rem]  ">
      <div className="lg:flex justify-center">
        <div className="lg:bg-[#FAFAFA] w-[401px] h-[784px] md:ml-[12rem] lg:ml-0 ">
          <div className="mt-[7rem] text-center ">
            <h3 className="font-bold text-[24px] text-[#252B42] mb-4">
              MOST POPULAR
            </h3>
            <p className="font-normal text-[14px] text-[#737373] w-7/12 ml-[5rem]">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>

            <div>
              <img src={fixed} alt="fixed" className="mt-[3rem] ml-6 mb-10" />
              <p className="text-[#252B42] font-bold text-[14px] mb-4">
                English Department
              </p>
              <div className=" flex justify-center gap-2 mb-4">
                <img src={Frame} alt="Frame" className="w-[16px] h-[16px]" />
                <h6 className="font-bold text-[14px]">15 Sales</h6>
              </div>
              <h5 className="text-[#BDBDBD] font-bold  text-[16px] mb-3">
                $16.48 <span className="text-[#23856D]">$6.48</span>
              </h5>
              <div className=" flex justify-center gap-2">
                <img src={Ellipse1} alt="Ellipse1" />
                <img src={Ellipse2} alt="Ellipse2" />
                <img src={Ellipse3} alt="Ellipse3" />
                <img src={Ellipse4} alt="Ellipse4" />
              </div>
            </div>
          </div>
        </div>

        <div className="md:ml-3">
          <img
            src={col8}
            alt="col8"
            className="lg:w-[720px] lg:h-[784px] md:w-[800px] md:h-[784px]"
          />
        </div>
      </div>
    </div>
  );
};
export default Popular2;
