import { useState } from "react";
import { stepsData } from "../../utils/nav-links";


export default function Accordion() {
  const [isOpen, setOpen] = useState<null | number>(null);
  const handleToggle = (index: number) => {
    setOpen(isOpen === index ? null : index);
  };
  return (
    <div>
      {stepsData.map((item, index) => (
        <div
          onClick={() => handleToggle(index)}
          className="flex flex-col md:w-[635px] cursor-pointer"
        >
          <div className="flex pl-3 md:pl-[20px] md:h-[80px] border border-grey-6 my-1 pt-[11px] pb-[12px] rounded-[7px]">
            <div className="flex items-center  justify-center bg-grey-3 rounded-full md:w-[57px]">
              <img src={item.icon} alt="video icon" />
            </div>
            <div className="flex items-center pl-3 md:pl-[23px]">
              <div className="text-black text-sm md:text-md md:leading-[18px] font-switzer font-semibold">
                {item.step}:
              </div>
              <div className="text-black text-sm md:text-md md:leading-[18px] font-switzer font-[400] ml-1">
                {item.title}
              </div>
            </div>
          </div>
          {isOpen === index && (
            <div className="bg-white pl-2 py-4 md:pl-5 md:pt-[19px] shadow-extralight border border-grey-6 md:h-[163px] rounded-[7px]">
              {item.inner.map((it) => (
                <>
                  <div className="flex">
                    <div className="flex items-center  justify-center bg-dark-purple rounded-full md:h-[57px] md:w-[57px]">
                      <img src={it.icon2} alt="video icon white" />
                    </div>
                    <div className="flex items-center ml-3 md:ml-[23px]">
                      <div className="text-black text-md leading-[18px] font-switzer font-semibold">
                        {it.step}:
                      </div>
                      <div className="text-black text-md leading-[18px] font-switzer font-[400] ml-1">
                        {it.title}
                      </div>
                    </div>
                  </div>
                  <p className="max-w-[531px] text-sm pt-2 md:mt-4 md:text-md font-switzer font-[400] md:leading-[26px] text-left">
                    {it.details}
                  </p>
                </>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
