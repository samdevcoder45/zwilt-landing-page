import H2 from "../titles/title2";
import HeaderCard from "./header-card";
import listIcon from "../../assets/list-icon.svg";
import LearnMoreIcon from "../learn-more-icon";
import arrowIcon from "../../assets/arrow-right-white.svg";
import SmallCard from "./small-card.tsx";
import VideoCard from "./video-card.tsx";
import UXCard from "./ux-cards.tsx";
const unorderedLists = [
  {
    id: 1,
    text: "We pick the best for you to select.",
    icon: listIcon,
  },
  {
    id: 2,
    text: "Thousands of vetted candidates in dozens of categories.",
    icon: listIcon,
  },
  {
    id: 3,
    text: "Risk-free resource swapping for the best fit.",
    icon: listIcon,
  },
];
export default function OnBoardCard() {
  return (
    <HeaderCard className="overflow-hidden px-3 py-3 mb-10 md:rounded-20 bg-white shadow-grey-1 md:pr-[20px] md:pl-[58px]">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:pt-[133px]">
          <H2 className="max-w-[464px]" text="Onboard without the risk." />
          <div className="md:pt-[37px] pt-5">
            <ul className="">
              {unorderedLists.map((item) => (
                <div className="flex items-center">
                  <img src={item.icon} alt="" className="md:pr-[17px]" />
                  <li className="max-w-[591px] text-md md:text-[18px] text-black text-nowrap text-opacity-80  md:leading-8 font-[400] font-switzer">
                    {item.text}
                  </li>
                </div>
              ))}
            </ul>
            <div className="md:pb-[140px] pb-2 mt-3">
              <LearnMoreIcon className="w-8 rounded-[10px] h-8" icon={arrowIcon} text="Learn More" />
            </div>
          </div>
        </div>
        <div className="flex flex-col relative">
          {/* videocard */}
          <div className="pt-10">
            <VideoCard />
          </div>
          {/* videocard */}
          {/* smallcard */}
          <div className="flex justify-center items-center absolute top-24 left-24">
            <SmallCard />
          </div>
          {/* smallcard */}
          {/* ux card */}
          <div className="md:mt-[100px] py-4 my-4 md:pt-[100px]">
            <UXCard/>
          </div>
          {/* ux card */}
        </div>
      </div>
    </HeaderCard>
  );
}
