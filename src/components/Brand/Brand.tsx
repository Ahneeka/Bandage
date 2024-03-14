import React from "react";
import pro1 from "../../assets/images/pro1.svg";
import pro2 from "../../assets/images/pro2.svg";
import pro3 from "../../assets/images/pro3.svg";
import pro4 from "../../assets/images/pro4.svg";

const Brand = () => {
  return (
    <div className="bg-[#FAFAFA] lg:w-[1440px] lg:h-[620px]">
      <div>
        <div className="border-bottom-2 border-[#ECECEC] p-4 ">
          <h5 className="text-[#252B42] text-center font-bold lg:text-[16px] mb-4 text-[24px]">
            BESTSELLER PRODUCTS
          </h5>
        </div>

        <div>
          <img src={pro1} alt="pro1" />
          <img src={pro2} alt="pro2" />
          <img src={pro3} alt="pro3" />
          <img src={pro4} alt="pro4" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
