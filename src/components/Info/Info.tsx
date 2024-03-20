import React from "react";

const Info = () => {
  return (
    <div className="bg-[#252B42] Lg:w-[1440px] h-[272px]">
      <div>
        <div className="">
          <h5 className="font-bold text-[16px] text-[#FFFFFF]">Company Info</h5>
          <div className="flex-col">
            <a href="/" className="font-bold text-[14px] text-[#FFFFFF]">
              About Us
            </a>
            <a href="/" className="font-bold text-[14px] text-[#FFFFFF]">
              Carrier
            </a>
            <a href="/" className="font-bold text-[14px] text-[#FFFFFF]">
              We are hiring
            </a>
            <a href="/" className="font-bold text-[14px] text-[#FFFFFF]">
              Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
