import smImg from "../assets/sm-img.png";
import DesignCard from "./cards/design-card";
import HeroForm from "./forms/hero-form";
// import slantGradient from "../assets/slant-gradient.svg";
import slantGradient from "../assets/gradient.png";
export default function Hero() {
  return (
    <div className="mt-6 md:mt-[114px] flex relative flex-col items-center justify-center">
      <div className="max-w-[90%] md:max-w-[671px]">
        <h1 className="text-[27px] leading-8 md:text-[54px] text-center md:leading-[64px] font-bold font-switzer">
          Finding the right fit
          <img src={smImg} alt="" className="inline-flex items-center" />
          has never been easier.
        </h1>
      </div>
      <div className="max-w-[70%] md:max-w-[582px] mt-2">
        <p className="text-sm md:text-[22px] text-center opacity-80 md:leading-[32px] font-[400] font-switzer">
          With our rigorous pre-vetting process, you'll never have to worry
          about finding the ideal candidate ever again.
        </p>
      </div>
      <div className="mt-[30px]">
        <HeroForm />
      </div>
      <div className="mt-10">
        <DesignCard />
      </div>
      <div className="md:mt-[78px] w-full">
        <img
          src={slantGradient}
          alt=""
          className="w-full relative -bottom-12 md:-bottom-8"
        />
      </div>
    </div>
  );
}
