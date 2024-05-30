import clsx from "clsx";
import { journeyCardsData } from "../../utils/nav-links";
import HeaderCard from "./header-card";

export default function JourneyCard() {
  return (
    <div className="grid grid-cols-2 md:gap-[25px] clip-path-45-degrees mt-[6px]">
      {journeyCardsData.map((item, index) => (
        <HeaderCard
          className={clsx(
            "md:h-[248px] md:w-[221px] bg-white bg-opacity-65 rounded-corner shadow-grey",
            {
              "md:h-[180px]": index === 1,
            }
          )}
          key={item.id}
        >
          <div
            className={clsx("rounded-corner ", {
              "bg-hot-pink": index === 0,
              "bg-lemon-1": index === 1,
              "bg-light-purple": index === 2,
              "bg-light-yellow md:h-[130px] -mt-[75px]": index === 3,
            })}
          >
            <img src={item.icon} alt="" />
          </div>
          <div className="md:pl-6">
            <h4 className="text-black md:pt-[13px] font-switzer font-[400] leading-[18px] -tracking-[0.02em] md:text-[18px]">
              {item.title}
            </h4>
            <p className="text-black md:pt-7 md:text-[12px] font-switzer font-[400] leading-[14px] -tracking-[0.02em] ">
              {item.description}
            </p>
          </div>
        </HeaderCard>
      ))}
    </div>
  );
}
