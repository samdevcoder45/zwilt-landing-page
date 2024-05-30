import { iconLinks } from "../../utils/nav-links";
import HeaderCard from "./header-card";
import clsx from "clsx";

export default function DevelopmentCard({ text }: { text: string }) {
  return (
    <HeaderCard className="bg-white pl-[28px] pr-[26px] py-[18px] rounded-[7px]">
      <p className="mb-[15px] font-switzer font-medium lg:text-md lg:leading-6">
        {text}
      </p>
      <div className="grid grid-cols-2 gap-2 md:flex md:flex-row">
        {iconLinks.map((link, index) => (
          <div key={link.id} className="flex flex-col items-center">
            <div
              className={clsx(
                "flex items-center mx-2 justify-center  bg-grey-3 w-[76px] h-[76px] xl:w-[96px] xl:h-[96px]",
                index === iconLinks.length - 1 ? "rounded-30" : "rounded-full"
              )}
            >
              <img src={link.icon} alt="" width={39} height={40} className="" />
            </div>
            <div className="mt-3 max-w-[81px]">
              <h6 className="text-sm leading-[18px] text-center font-semibold font-switzer">
                {link.text}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </HeaderCard>
  );
}
