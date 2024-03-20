import React from "react";
import fixedheight from "../../assets/images/fixedheight.svg";
import fixedheight2 from "../../assets/images/fixedheight2.svg";
import fixedheight3 from "../../assets/images/fixedheight3.svg";
import vector2 from "../../assets/images/vector2.svg";
import Vector1 from "../../assets/images/Vector1.svg";
import { ChevronRight } from "lucide-react";

const Posts = () => {
  return (
    <div className="lg:w-[1440px] lg:h-[994px] bg-[#FFFFFF]">
      <div className="mt-[10rem]">
        <div className="grid justify-center">
          <h6 className="font-bold text-[14px] text-[#23A6F0] ml-[5rem] mb-6">
            Practice Advice
          </h6>
          <h2 className="text-[#252B42] font-bold text-[40px] mb-[5rem]">
            Featured Posts
          </h2>
        </div>

        <div className="lg:flex  gap-4 justify-center ">
          <div className=" mb-5 md:ml-[14rem]  lg:ml-0 ml-[2rem]">
            <img src={fixedheight} alt="fixedheight" />
            <div className="bg-[#FFFFFF] w-[348px] shadow-md h-[306px] ">
              <div className="flex gap-4 mt-[2rem] px-[2rem] mb-3">
                <h6 className="font-normal text-[12px] text-[#8EC2F2]">
                  Google
                </h6>
                <h6 className="font-normal text-[12px] text-[#737373]">
                  Trending
                </h6>
                <h6 className="font-normal text-[12px] text-[#737373]">New</h6>
              </div>

              <div>
                <h4 className="font-normal text-[20px] px-[2rem] w-10/12 text-[#252B42]">
                  Loudest à la Madison #1 (L&apos;integral)
                </h4>
                <p className="font-normal mb-4 px-[2rem] text-[14px] w-10/12 text-[#737373]">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
              </div>

              <div className="flex gap-10 px-[2rem]">
                <div className="flex ">
                  <img
                    src={vector2}
                    alt="vector2"
                    className="w-[16px] h-[16px] "
                  />
                  <h6 className="font-normal text-[12px] ml-[0.4rem] text-[#737373]">
                    22 April 2021
                  </h6>
                </div>
                <div className="flex">
                  <img
                    src={Vector1}
                    alt="Vector1"
                    className="w-[16px] h-[16px] "
                  />
                  <h6 className="font-normal text-[12px] ml-[0.4rem] mb-4 text-[#737373]">
                    10 comments
                  </h6>
                </div>
              </div>

              <div className="flex gap-2 px-[2rem]">
                <h6 className="font-bold text-[14px] ml-[0.4rem] text-[#737373] mt-1">
                  Learn More
                </h6>
                <ChevronRight className="text-[#23A6F0] " />
              </div>
            </div>
          </div>

          <div className=" mb-5 md:ml-[14rem]  lg:ml-0 ml-[2rem]">
            <img src={fixedheight2} alt="fixedheight2" />
            <div className="bg-[#FFFFFF] w-[348px] shadow-md h-[306px]">
              <div className="flex gap-4 mt-[2rem] px-[2rem] mb-3">
                <h6 className="font-normal text-[12px] text-[#8EC2F2]">
                  Google
                </h6>
                <h6 className="font-normal text-[12px] text-[#737373]">
                  Trending
                </h6>
                <h6 className="font-normal text-[12px] text-[#737373]">New</h6>
              </div>

              <div>
                <h4 className="font-normal text-[20px] px-[2rem] w-10/12 text-[#252B42]">
                  Loudest à la Madison #1 (L&apos;integral)
                </h4>
                <p className="font-normal mb-4 px-[2rem] text-[14px] w-10/12 text-[#737373]">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
              </div>

              <div className="flex gap-10 px-[2rem]">
                <div className="flex ">
                  <img
                    src={vector2}
                    alt="vector2"
                    className="w-[16px] h-[16px] "
                  />
                  <h6 className="font-normal text-[12px] ml-[0.4rem] text-[#737373]">
                    22 April 2021
                  </h6>
                </div>
                <div className="flex">
                  <img
                    src={Vector1}
                    alt="Vector1"
                    className="w-[16px] h-[16px] "
                  />
                  <h6 className="font-normal text-[12px] ml-[0.4rem] mb-4 text-[#737373]">
                    10 comments
                  </h6>
                </div>
              </div>

              <div className="flex gap-2 px-[2rem]">
                <h6 className="font-bold text-[14px] ml-[0.4rem] text-[#737373] mt-1">
                  Learn More
                </h6>
                <ChevronRight className="text-[#23A6F0] " />
              </div>
            </div>
          </div>

          <div className=" mb-5 md:ml-[14rem]  lg:ml-0 ml-[2rem]">
            <img src={fixedheight3} alt="fixedheight3" />
            <div className="bg-[#FFFFFF] w-[348px] shadow-md h-[306px]">
              <div className="flex gap-4 mt-[2rem] px-[2rem] mb-3">
                <h6 className="font-normal text-[12px] text-[#8EC2F2]">
                  Google
                </h6>
                <h6 className="font-normal text-[12px] text-[#737373]">
                  Trending
                </h6>
                <h6 className="font-normal text-[12px] text-[#737373]">New</h6>
              </div>

              <div>
                <h4 className="font-normal text-[20px] px-[2rem] w-10/12 text-[#252B42]">
                  Loudest à la Madison #1 (L&apos;integral)
                </h4>
                <p className="font-normal mb-4 px-[2rem] text-[14px] w-10/12 text-[#737373]">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
              </div>

              <div className="flex gap-10 px-[2rem]">
                <div className="flex ">
                  <img
                    src={vector2}
                    alt="vector2"
                    className="w-[16px] h-[16px] "
                  />
                  <h6 className="font-normal text-[12px] ml-[0.4rem] text-[#737373]">
                    22 April 2021
                  </h6>
                </div>
                <div className="flex">
                  <img
                    src={Vector1}
                    alt="Vector1"
                    className="w-[16px] h-[16px] "
                  />
                  <h6 className="font-normal text-[12px] ml-[0.4rem] mb-4 text-[#737373]">
                    10 comments
                  </h6>
                </div>
              </div>

              <div className="flex gap-2 px-[2rem]">
                <h6 className="font-bold text-[14px] ml-[0.4rem] text-[#737373] mt-1">
                  Learn More
                </h6>
                <ChevronRight className="text-[#23A6F0] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
