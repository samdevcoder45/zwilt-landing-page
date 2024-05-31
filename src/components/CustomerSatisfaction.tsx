import Accordion from "./accordion/Accordion";
// import JourneyCard from "./cards/journey-card";
import H2 from "./titles/title2";
import journeyBg from "../assets/journey-rec.svg";
import yellowBg from "../assets/yellow-rectangle.svg";
import greyBg from "../assets/grey-rectangle.svg";
import Article from "./Article";
import icon1 from "../assets/light-purple-bg.svg";
import icon2 from "../assets/light-yellow-bg.svg";
import icon3 from "../assets/light-grey-bg.svg";
import teamBg from "../assets/team-svg.svg";
import evalBg from "../assets/content.png";
import performerBg from "../assets/perfomer.png";

export default function CustomerSatisfaction() {
  return (
    <section className="bg-white flex flex-col items-center py-[4rem] px-4 min-h-screen md:px-[70px] md:pt-[148px]">
      <div>
        <H2
          className="max-w-[570px]"
          text="How we ensure you’re in good hands."
        />
        <p className="max-w-[646px] pt-5 md:pt-[30px] md:text-[22px] text-black-2 text-opacity-80 md:leading-[32px] font-[400] font-switzer">
          With our comprehensive screening process, we hand-pick highly skilled
          candidates so you can onboard them in a matter of days.
        </p>
        <div className="md:pt-[30px] pt-5">
          <Accordion />
        </div>
        <div className="flex flex-col items-center py-[1rem] md:pb-10 md:mb-10 md:pt-[136px]">
          <H2 className="max-w-[618px] " text="Start your journey today." />
          <div
            className="bg-cover flex justify-between bg-center relative w-full  px-3 md:h-[387.5px] md:pl-[25px] md:pr-[37px]"
            style={{ backgroundImage: `url(${journeyBg})` }}
          >
            <div className="max-w-[445px] pt-[1rem] md:pt-[90px]">
              <Article
                title="Find your next star performer."
                desc="  Explore the vast Zwilt marketplace to find the candidate that meets
                your needs."
                iconText="Join Now"
                icon={icon1}
              />
            </div>
            <div className="">
              <img
                src={performerBg}
                alt="Find your next star performer"
                className="md:h-[352px] -rotate-1 clip-path-30-degrees"
              />
            </div>
          </div>
          <div
            className="bg-cover bg-center w-full md:h-[387.5px] md:pl-[25px] md:pr-[37px]"
            style={{ backgroundImage: `url(${yellowBg})` }}
          >
            <div className="flex justify-between">
              <div className="max-w-[445px] pt-4 md:pt-[60px]">
                <Article
                  title="Evaluate to your heart’s content."
                  desc="Assess the candidate through work history, transparent tests and video interviews."
                  iconText="Browse More"
                  icon={icon2}
                />
              </div>
              <div className="">
                <img
                  src={evalBg}
                  alt="Evaluate your hearts content"
                  className="md:h-[352px] -rotate-1 clip-path-30-degrees"
                />
              </div>
            </div>
          </div>

          <div
            className="bg-cover flex justify-between  pt-2  pl-3 bg-center w-full  md:h-[387.5px] md:pl-[25px]"
            style={{ backgroundImage: `url(${greyBg})` }}
          >
            <div className="max-w-[445px] pt-[35px] md:pt-[90px]">
              <Article
                title="Start building your team."
                desc="Onboard your candidate right away and start creating the next big thing."
                iconText="Join Now"
                icon={icon3}
              />
            </div>
            <div className="">
              <img
                src={teamBg}
                alt="Team Background Image"
                className="md:h-[352px] -rotate-1 clip-path-30-degrees"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
