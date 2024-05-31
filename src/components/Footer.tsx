import TermsAndService from "./terms";
import ZwitLogo from "./zwift-logo";
import { footerData } from "../utils/footerData";
import pinkBg from "../assets/rec-bg.png";
import arrowDown from "../assets/arrow-down.svg";

export default function Footer() {
  return (
    <>
      <footer className="bg-black-gradient pb-5 lg:pb-[148px]  min-h-screen w-full px-[2.5rem] flex flex-col items-center justify-center md:justify-start">
        <div
          style={{ backgroundImage: `url(${pinkBg})` }}
          className="bg-center  bg-cover lg:h-[481px] w-[70%] lg:w-full bg-no-repeat mt-[54px] lg:mt-[64px] flex flex-col items-center justify-center"
        >
          <p className="text-white font-switzer text-md lg:text-[54px] text-center lg:mt-[35px] font-semibold lg:leading-[64px] lg:w-[683px]">
            Need a job done, and done well? Get started
          </p>
          <div className="w-[44px] h-[44px] lg:w-[74px] lg:h-[74px] rounded-15 bg-black flex items-center justify-center">
            <img
              src={arrowDown}
              width={25}
              height={15}
              alt=""
              className="w-4 h-3 lg:w-[25px] lg:h-[15px]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row pt-2 lg:pt-[141px]">
          <div className="">
            <div className="w-[120px] h-[30px]">
              <ZwitLogo />
            </div>
            <p className="mt-5 lg:mt-3 text-white opacity-80 text-[14px] leading-[22px] font-[400] font-switzer max-w-[284px]">
              We take complex hiring processes - and simplify them. Connecting
              you to the world’s highly qualified talent pool.
            </p>
            <p className="mt-8 uppercase text-white opacity-40 text-[14px] font-semibold leading-[32px] font-switzer">
              Links and redirect
            </p>
            <div className="flex gap-2 mt-3">
              <button className="text-white bg-light-black h-[40px] w-[130px] md:h-50 md:w-[162px] outline-none rounded-20 hover:border-white hover:border">
                Hire now
              </button>
              <button className="text-white bg-light-black h-[40px] w-[130px] md:h-50 md:w-[162px] outline-none rounded-20 hover:border-white hover:border">
                Apply now
              </button>
            </div>
          </div>
          <div className=" mt-4 md:mt-0 md:pl-24">
            <p className="text-[32px] leading-[44px] md:mt-0 md:leading-[64px]  md:text-[54px] font-semibold text-white max-w-[779px] font-switzer">
              Connecting the right people to the right businesses.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              {footerData.map((links) => (
                <div key={links.header}>
                  <h6 className="text-[14px] leading-[32px] uppercase text-white opacity-40 font-semibold font-switzer">
                    {links.header}
                  </h6>
                  <ul>
                    {links.links.map((link) => (
                      <li key={link.text} className="mt-3">
                        <a
                          href={link.url}
                          className="text-white text-[18px] leading-[24px] font-[400] opacity-80 font-switzer hover:opacity-100"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
      <TermsAndService />
    </>
  );
}
