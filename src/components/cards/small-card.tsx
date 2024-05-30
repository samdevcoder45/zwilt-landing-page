import HeaderCard from "./header-card";
import icon from "../../assets/ariana.svg";
import Badges from "./badges";
import Star from "../stars/Stars";
import starIcon from "../../assets/yellow-star.svg";
import { Link } from "react-router-dom";
export default function SmallCard() {
  return (
    <HeaderCard className="md:w-[281px] flex flex-col p-3 md:pt-[37px] md:pb-4 items-center justify-center shadow-grey-2 bg-white rounded-[16.57px]">
      <div className="md:w-[121px] md:h-[121px]">
        <img src={icon} alt="" />
      </div>
      <div className="md:pt-[17px] pt-2">
        <p className="font-switzer md:text-[26px] font-semibold md:leading-[12.97px] text-gradient">
          Ariana Marie
        </p>
      </div>
      <div className="flex justify-center gap-2 pt-3 md:pt-[24px]">
        <Badges text="3d Modeling" />
        <Badges text="Character Rigging" />
        <Badges text="Environment Design" />
      </div>
      <div className="flex items-center gap-2 pt-3 md:justify-between w-full md:pl-[26px] md:pt-[17px]">
        <Star text1={"5.0"} text2="15" icon={starIcon} />
        <div className="md:w-[110px] md:h-[31px] p-1 flex items-center justify-center rounded-[8px] bg-black">
          <Link
            to="#"
            className="font-cabin leading-[21px] text-[11.6px] text-white font-semibold"
          >
            Take Interview
          </Link>
        </div>
      </div>
    </HeaderCard>
  );
}
