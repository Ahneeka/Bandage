import React from "react";
import media from "../../assets/images/media.svg";
import button1 from "../../assets/images/button1.svg";
import button2 from "../../assets/images/button2.svg";
import product1 from "../../assets/images/product1.svg";
import product2 from "../../assets/images/product2.svg";
import product3 from "../../assets/images/product3.svg";

const Products = () => {
  return (
    <div className="bg-[#FFFFFF] lg:w-[1440px] lg:h-[895px] h-[3111px] md:h-[3111px]">
      <div className="lg:flex justify-center">
        <div className=" pt-5  style={{ position: 'relative' }}">
          <div>
            <img
              src={media}
              alt="media"
              className="w-[389px] ml-3 h-[796px] lg:w-[389px] lg:h-[796px] md:w-[800px] md:h-[796px]"
              // style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>
          <div
            className="absolute  top-[140%] left-[23%] lg:top-[158%] lg:left-[18%] md:top-[184%] md:left-[38%] transform -translate-x-1/2 -translate-y-1/2 "
            // style={{
            //   position: "absolute",
            //   top: "158%",
            //   left: "17%",
            //   transform: "translate(-50%, -50%)",
            //   textAlign: "center",
            //   color: "white",
            // }}
          >
            <h3
              className="font-bold text-[#252B42] text-[14px] mb-2"
              style={{ margin: 0 }}
            >
              FURNITURE
            </h3>
            <h6
              className="text-[#737373] font-bold text-[14px]"
              style={{ margin: 0 }}
            >
              5 Items
            </h6>
          </div>
        </div>

        <div className="lg:ml-10 lg:mt-[4rem] mt-[3rem]">
          <div className="lg:flex  gap-7 border-bottom-2 border-[#ECECEC] p-4 ">
            <h5 className="text-[#252B42] text-center font-bold lg:text-[16px] mb-4 text-[24px]">
              BESTSELLER PRODUCTS
            </h5>
            <div className="flex gap-10 justify-center mb-4">
              <h6 className="text-[#23A6F0] font-bold text-[14px]">Men</h6>
              <h6 className="text-[#737373] font-bold text-[14px]">Women</h6>
              <h6 className="text-[#737373] font-bold text-[14px]">
                Accessories
              </h6>
            </div>

            <div className="flex gap-10 mb-1 justify-center">
              <img src={button1} alt="button" className="mt-[-1rem]" />
              <img src={button2} alt="button" className="mt-[-1rem]" />
            </div>
          </div>

          <div>
            <div className="lg:flex  gap-5 mt-6">
              <div className="duration-300 hover:scale-105 ">
                <img
                  src={product1}
                  alt="product"
                  className=" lg:ml-0 ml-[2rem]  md:ml-[10rem] w-[348px] h-[427px] md:w-[448px] md:h-[427px] lg:w-[183px] lg:h-[162px]"
                />
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

              <div className="duration-300 hover:scale-105">
                <img
                  src={product2}
                  alt="product"
                  className=" lg:ml-0 ml-[2rem] md:ml-[10rem] md:mt-10 lg:mt-0  w-[348px] h-[427px] md:w-[448px] md:h-[427px] lg:w-[183px] lg:h-[162px]"
                />
                <div className="lg:text-center lg:mt-8  md:mt-8 text-center">
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

              <div className="duration-300 hover:scale-105">
                <img
                  src={product3}
                  alt="product"
                  className=" lg:ml-0 ml-[2rem] md:mt-10 lg:mt-0 md:ml-[10rem] w-[348px] h-[427px]  md:w-[448px] md:h-[427px] lg:w-[183px] lg:h-[162px]"
                />
                <div className="lg:text-center lg:mt-8 md:mt-8  text-center">
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

            <div className="lg:flex gap-5 mt-8 md:hidden hidden">
              <div className="duration-300 hover:scale-105">
                <img src={product1} alt="product" />
                <div className="text-center mt-8">
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

              <div className="duration-300 hover:scale-105">
                <img src={product2} alt="product" />
                <div className="text-center mt-8">
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

              <div className="duration-300 hover:scale-105">
                <img src={product3} alt="product" />
                <div className="text-center mt-8">
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
      </div>
    </div>
  );
};

export default Products;
