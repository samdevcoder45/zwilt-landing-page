import DevelopmentCard from "./cards/development-card";
import DevelopmentText from "./cards/development-text";
import arrowRightIcon from "../assets/arrow-right-white.svg";
import { Link } from "react-router-dom";
import purpleBg from "../assets/light-purple.png";
import CreativeCard from "./cards/creative-card";
export default function MarketPlace() {
  return (
    <section
      style={{ backgroundImage: `url(${purpleBg})` }}
      className="flex flex-col items-center relative bg-[#EDEFFF] lg:items-center min-h-screen px-3 lg:px-[70px] lg:pb-[100px]"
    >
      <div className="pt-16 lg:pt-[219px] md:max-w-[977px] mb-5 lg:mb-[90px]">
        <h3 className="text-[34px] leading-[44px] lg:text-[54px] lg:leading-[64px] lg:text-center font-bold font-switzer">
          Your one-stop marketplace for finding the talent your business needs.
        </h3>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mt-5 lg:gap-20 lg:mt-[30px]">
          <DevelopmentText text="Find Dev and IT professionals to scale your business." />
          <DevelopmentCard text=" IT & Development" />
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4 mt-5 lg:gap-20 lg:mt-[30px]">
          <DevelopmentText text="Explore Creative individuals with a keen eye for detail." />
          <CreativeCard text="Design & Creative" />
        </div>
        <div className="flex flex-col md:flex-row  md:items-center gap-4 mt-5 lg:gap-20 items-center">
          <div className="flex items-center gap-2 mt-[14px] pb-5 pr-40">
            <div className="md:w-[54px] md:h-[54px] w-[44px] h-[44px] rounded-15 xl:w-[74px] xl:h-[74px] flex items-center justify-center md:rounded-30 bg-black">
              <img
                src={arrowRightIcon}
                alt="Arrow Right Icon"
                className="text-white w-4 h-4 md:w-[25px] md:h-[15px]"
              />
            </div>
            <Link
              to="#"
              className="font-switzer font-medium text-sm lg:text-[22px] lg:leading-[18px] text-black hover:underline"
            >
              Explore More
            </Link>
          </div>
          <div className="flex items-center gap-3 -mt-2 ">
            <Link
              to="#"
              className="md:text-[22px] text-sm md:leading-[32px] font-bold font-switzer cursor-pointer hover:underline"
            >
              30 more
            </Link>
            <p className="md:text-[22px] md:leading-[32px] text-sm font-medium font-switzer">
              to explore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
