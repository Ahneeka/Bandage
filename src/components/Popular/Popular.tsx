import React from "react";
import col from "../../assets/images/col.svg";
import meat from "../../assets/images/meat.svg";
import one from "../../assets/images/one.svg";
import two from "../../assets/images/two.svg";
import three from "../../assets/images/three.svg";
import four from "../../assets/images/four.svg";
import Frame from "../../assets/images/Frame.svg";
import Ellipse1 from "../../assets/images/Ellipse1.svg";
import Ellipse2 from "../../assets/images/Ellipse2.svg";
import Ellipse3 from "../../assets/images/Ellipse3.svg";
import Ellipse4 from "../../assets/images/Ellipse4.svg";

const Popular = () => {
  return (
    <div className="bg-[#FFFFFF] lg:w-[1440px] lg:h-[1100px] lg:pt-[5rem] ">
      <div className="lg:flex justify-center">
        <div className="md:ml-3">
          <img
            src={col}
            alt="col"
            className="lg:w-[720px] lg:h-[784px] md:w-[800px] md:h-[784px]"
          />
        </div>

        <div className="lg:bg-[#FAFAFA] w-[401px] h-[700px] md:ml-[12rem] lg:ml-0 mt-11">
          <div className="mt-[7rem] text-center ">
            <h3 className="font-bold text-[24px] text-[#252B42] mb-4">
              MOST POPULAR
            </h3>
            <p className="font-normal text-[14px] text-[#737373] w-7/12 ml-[5rem]">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>

            <div>
              <img src={meat} alt="meat" className="mt-[3rem] ml-6 mb-10" />
              <p className="text-[#252B42] font-bold text-[14px] mb-4">
                English Department
              </p>
              <div className="lg:hidden flex justify-center gap-2 mb-4">
                <img src={Frame} alt="Frame" className="w-[16px] h-[16px]" />
                <h6 className="font-bold text-[14px]">15 Sales</h6>
              </div>
              <h5 className="text-[#BDBDBD] font-bold  text-[16px] mb-3">
                $16.48 <span className="text-[#23856D]">$6.48</span>
              </h5>
              <div className=" lg:hidden flex justify-center gap-2">
                <img src={Ellipse1} alt="Ellipse1" />
                <img src={Ellipse2} alt="Ellipse2" />
                <img src={Ellipse3} alt="Ellipse3" />
                <img src={Ellipse4} alt="Ellipse4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex justify-center gap-3 ">
        <div className="md:ml-[18rem] ml-[8rem] lg:ml-0 lg:mt-11 flex flex-col lg:flex-row">
          <div className="mr-4 flex gap-3 mb-4">
            <img src={one} alt="1" className="w-[28px] h-[50px]" />
            <div className="flex-col">
              <h6 className="font-bold text-[14px] text-[#252B42]">
                Easy to use
              </h6>
              <p className="font-normal text-[12px] text-[#252B42] w-8/12">
                Things on a very small that you have any direct
              </p>
            </div>
          </div>

          <div className="mr-4 flex gap-3 mb-4">
            <img src={two} alt="1" className="w-[28px] h-[50px]" />
            <div className="flex-col">
              <h6 className="font-bold text-[14px] text-[#252B42]">
                Easy to use
              </h6>
              <p className="font-normal text-[12px] text-[#252B42] w-8/12">
                Things on a very small that you have any direct
              </p>
            </div>
          </div>

          <div className="mr-4 flex gap-3 mb-4">
            <img src={three} alt="1" className="w-[28px] h-[50px]" />
            <div className="flex-col">
              <h6 className="font-bold text-[14px] text-[#252B42]">
                Easy to use
              </h6>
              <p className="font-normal text-[12px] text-[#252B42] w-8/12">
                Things on a very small that you have any direct
              </p>
            </div>
          </div>

          <div className="mr-4 flex gap-3 ">
            <img src={four} alt="4" className="w-[28px] h-[50px]" />
            <div className="flex-col">
              <h6 className="font-bold text-[14px] text-[#252B42]">
                Easy to use
              </h6>
              <p className="font-normal text-[12px] text-[#252B42] w-8/12">
                Things on a very small that you have any direct
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
