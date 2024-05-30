import blackBg from "../assets/black-bg.png";
import questionMarkBg from "../assets/question-mark.png";

// import smallBlackBg from "../assets/cut-bg.png";
import manicon from "../assets/json.svg";
import grooveIcon from "../assets/groove.png";
import grooveWhiteIcon from "../assets/groove-white.svg";
import LearnMoreIcon from "./learn-more-icon";
import arrowLeft from "../assets/blue-left.svg";
import arrowRight from "../assets/blue-right.svg";

export default function OurWork() {
  return (
    <section
      style={{ backgroundImage: `url(${blackBg}` }}
      className="bg-cover bg-center min-h-screen relative bg-black pb-5 md:pb-[100px]"
    >
      <div>
        <div className="flex items-center justify-end">
          <img
            src={questionMarkBg}
            alt="Question Icon"
            className="w-14 h-14 md:w-[221px] md:h-[175px]"
          />
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-between px-3 md:px-[70px]">
          <div className="">
            <div className="max-w-[379px] relative">
              <h2 className="text-white md:text-[54px] text-[44px] leading-[54px] md:leading-[64px] font-bold font-switzer">
                How it worked for Jason{" "}
                <span className="inline-flex">
                  <img src={manicon} alt="Man Icon" className="" />
                </span>{" "}
                at
              </h2>
              <img
                src={grooveIcon}
                alt="Groove Icon"
                className="md:pb-[44px] pb-5 pt-2"
              />
            </div>
            <p className="max-w-[461px] text-white text-opacity-80 font-switzer font-[400] text-md md:text-[22px] md:leading-8">
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since.
            </p>
            <div className="flex py-5 md:py-0">
              <LearnMoreIcon className="bg-white" icon={arrowLeft} text="" />
              <LearnMoreIcon className="bg-white" icon={arrowRight} text="" />
            </div>
          </div>
          <div>
            <div className="flex gap-4">
              {/* icon */}
              <div className="md:w-[99px] w-[87px] h-[87px]  md:h-[99px] flex items-center justify-center rounded-[40.05px] bg-[#AF7CFF]">
                <img src={grooveWhiteIcon} alt="Groove Icon" />
              </div>
              <div>
                <h4 className="text-white font-switzer md:text-[34px] font-semibold md:leading-[44px]">
                  Jason Makki
                </h4>
                <p className="md:leading-[18px] md:text-md font-switzer font-medium text-white text-opacity-40">
                  Engineer at GROOVE
                </p>
                <p className="md:leading-[18px] pt-1 md:pt-2.5 md:text-md font-switzer font-medium text-white text-opacity-40">
                  San Francisco
                </p>
              </div>
            </div>
            <div className="md:pt-[56px] pt-10">
              <p className="max-w-[461px] text-white text-opacity-80 font-switzer text-md font-[400] md:text-[22px] md:leading-8">
                Zwilt enabled us to deliver on time and they’ve been heavy
                hitters in our corner since. Zwilt enabled us to deliver on time
                and they’ve been heavy hitters in our corner since.Zwilt enabled
                us to deliver on time and they’ve been heavy hitters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
