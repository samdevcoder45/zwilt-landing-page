import OnBoardCard from "./cards/onboard-card";
import H2 from "./titles/title2";
import bg from '../assets/faded-pink-bg.svg'

export default function Onboard() {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-center bg-cover overflow-hidden w-full min-h-screen pb-4 px-3 md:pl-[70px] md:pb-[100px]"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:pt-[10rem]">
          <div className="min-w-[380px]">
            <H2 className="" text="Why choose Zwilt?" />
          </div>
          <p className="max-w-[326px] md:pt-[37px] pb-4 md:pb-0 font-switzer text-md text-black text-opacity-80 md:text-[22px] font-[400] md:leading-8">
            We take complex hiring processes - and simplify them. Connecting you
            to the world’s highly qualified talent pool.
          </p>
        </div>
        <div className="">
          <OnBoardCard />
        </div>
      </div>
    </section>
  );
}
