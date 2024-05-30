import arrowIcon from "../assets/arrow-right-white.svg";
import Subtitle from "./titles/subtitle";

export default function Article({
  desc,
  title,
  icon,
  iconText,
}: {
  desc: string;
  title: string;
  iconText: string;
  icon: string;
}) {
  return (
    <div className="flex">
      <div className="md:pt-[24px] pt-3">
        <img src={icon} alt="" />
      </div>
      <div className="md:pl-[19px]">
        <Subtitle className="md:pb-5 max-w-[365px]" text={title} />
        <p className="md:max-w-[407px] md:text-md md:leading-6 text-xs font-[400] text-black  text-opacity-80 font-switzer">
          {desc}
        </p>
        <div className="md:pt-6 flex items-center gap-2">
          <div className="md:w-[50px] md:h-[50px] h-[30px] w-[30px] rounded-[10px] flex items-center justify-center md:rounded-20 bg-black">
            <img
              src={arrowIcon}
              alt="Arrow"
              className="md:w-[17px] w-4 h-4 md:h-2.5"
            />
          </div>
          <p className="font-switzer md:text-[14.8px] text-xs font-[500] text-nowrap md:leading-[12.11px]">
            {iconText}
          </p>
        </div>
      </div>
    </div>
  );
}
