import React from "react";
import pro1 from "../../assets/images/pro1.svg";
import pro2 from "../../assets/images/pro2.svg";
import pro3 from "../../assets/images/pro3.svg";
import pro4 from "../../assets/images/pro4.svg";

const Brand = () => {
  return (
    <div className="bg-[#FAFAFA] lg:w-[1440px] lg:h-[620px] flex items-center justify-center pt-10">
      <div className="">
        <div className="border-bottom-2 border-[#ECECEC] p-4 ">
          <h5 className="text-[#252B42] font-bold lg:text-[16px] text-[24px]">
            BESTSELLER PRODUCTS
          </h5>
        </div>

        <div className="lg:flex md:flex gap-4 justify-center pt-5 ">
          <div>
            <img src={pro1} alt="pro1" className="ml-10 mb-4" />
            <div className=" lg:text-center lg:mt-8 md:mt-8 text-center">
              <h5 className="text-[#252B42] font-bold text-[16px] mb-3">
                Graphic Design
              </h5>
              <p className="text-[#737373] font-bold text-[14px] mb-3">
                English Department
              </p>
              <h5 className="text-[#BDBDBD] font-bold text-[16px] mb-3">
                $16.48 <span className="text-[#23856D]">$6.48</span>
              </h5>
            </div>
          </div>

          <div>
            <img src={pro2} alt="pro2" className="ml-10 mb-4" />
            <div className=" lg:text-center lg:mt-8 md:mt-8 text-center">
              <h5 className="text-[#252B42] font-bold text-[16px] mb-3">
                Graphic Design
              </h5>
              <p className="text-[#737373] font-bold text-[14px] mb-3">
                English Department
              </p>
              <h5 className="text-[#BDBDBD] font-bold text-[16px] mb-3">
                $16.48 <span className="text-[#23856D]">$6.48</span>
              </h5>
            </div>
          </div>

          <div>
            <img src={pro3} alt="pro3" className="ml-10 mb-4" />
            <div className=" lg:text-center lg:mt-8 md:mt-8 text-center">
              <h5 className="text-[#252B42] font-bold text-[16px] mb-3">
                Graphic Design
              </h5>
              <p className="text-[#737373] font-bold text-[14px] mb-3">
                English Department
              </p>
              <h5 className="text-[#BDBDBD] font-bold text-[16px] mb-3">
                $16.48 <span className="text-[#23856D]">$6.48</span>
              </h5>
            </div>
          </div>

          <div>
            <img src={pro4} alt="pro4" className="ml-10 mb-4" />
            <div className=" lg:text-center lg:mt-8 md:mt-8 text-center">
              <h5 className="text-[#252B42] font-bold text-[16px] mb-3">
                Graphic Design
              </h5>
              <p className="text-[#737373] font-bold text-[14px] mb-3">
                English Department
              </p>
              <h5 className="text-[#BDBDBD] font-bold text-[16px] mb-3">
                $16.48 <span className="text-[#23856D]">$6.48</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
