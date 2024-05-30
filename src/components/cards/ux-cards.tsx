import Star from "../stars/Stars";
import Badges from "./badges";
import HeaderCard from "./header-card";
import starIcon from '../../assets/yellow-star.svg'
export default function UXCard() {
  return (
    <HeaderCard className="md:w-[347px] bg-white shadow-md p-3 md:shadow-grey-3 rounded-20 md:h-[174px] md:pl-[19px] md:pt-[24px]">
      <div className="flex items-center gap-2">
        <p className="font-switzer uppercase text-md text-[#181818] font-[400] leading-5">
          ui/ux designer
        </p>
        <Star text1={"5.0"} text2="15" icon={starIcon} />
      </div>
      <div>
        <div className="flex gap-2 md:pt-2">
          <Badges text="3d Modeling" />
          <Badges text="Character Rigging" />
        </div>
        <div className="max-w-[310px] md:pt-[30px]">
          <p className="font-switzer text-[#181818] text-md font-[400] md:leading-5">
            I am working in design industry from 3+ years as a design lead
          </p>
        </div>
      </div>
    </HeaderCard>
  );
}
