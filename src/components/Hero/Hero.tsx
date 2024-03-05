import React from "react";
import Carousel from "react-bootstrap/Carousel";
import shophero from "../../assets/images/shophero.svg";
import { CCarousel, CCarouselCaption, CCarouselItem } from "@coreui/react";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div>
      <CCarousel controls indicators>
        <CCarouselItem>
          <img className="d-block w-100" src={shophero} alt="hero" />
          <CCarouselCaption className="">
            <h1 className=" md:font-bold lg:font-bold font-normal  md:text-5xl lg:text-6xl  lg:xl:text-7xl md:xl:text-7xl lg:2xl:text-8xl md:2xl:text-8xl md:leading-[80px] lg:leading-[80px] tracking-[0.2px]  lg:mt-[-25rem] md:mt-[-10rem]">
              GROCERIES DELIVERY
            </h1>
            <h4 className="font-normal text-base lg:text-lg xl:text-xl lg:leading-[30px] md:lg:leading-[30px] lg:w-6/12  lg:ml-[16rem] tracking-[0.2px] ">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h4>
            <Button />
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <img className="d-block w-100" src={shophero} alt="hero" />
          <CCarouselCaption className="">
            <h1 className=" md:font-bold lg:font-bold font-normal  md:text-5xl lg:text-6xl  lg:xl:text-7xl md:xl:text-7xl lg:2xl:text-8xl md:2xl:text-8xl md:leading-[80px] lg:leading-[80px] tracking-[0.2px]  lg:mt-[-25rem] md:mt-[-10rem]">
              GROCERIES DELIVERY
            </h1>
            <h4 className="font-normal text-base lg:text-lg xl:text-xl lg:leading-[30px] md:lg:leading-[30px] lg:w-6/12  lg:ml-[16rem] tracking-[0.2px] ">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h4>
            <Button />
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <img className="d-block w-100" src={shophero} alt="hero" />
          <CCarouselCaption className="">
            <h1 className=" md:font-bold lg:font-bold font-normal  md:text-5xl lg:text-6xl  lg:xl:text-7xl md:xl:text-7xl lg:2xl:text-8xl md:2xl:text-8xl md:leading-[80px] lg:leading-[80px] tracking-[0.2px]  lg:mt-[-25rem] md:mt-[-10rem]">
              GROCERIES DELIVERY
            </h1>
            <h4 className="font-normal text-base lg:text-lg xl:text-xl lg:leading-[30px] md:lg:leading-[30px] lg:w-6/12  lg:ml-[16rem] tracking-[0.2px] ">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h4>
            <Button />
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    </div>
  );
};

export default Hero;
