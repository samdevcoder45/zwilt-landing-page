import { Link } from "react-router-dom";
import { herolinks } from "../../utils/nav-links";
import { Button } from "../button";
import HeaderCard from "./header-card";
import clsx from "clsx";

export default function DesignCard() {
  return (
    <HeaderCard className="bg-light-grey md:w-[920px] md:h-[230px] flex flex-col pt-[35px] justify-center md:pl-[65px] md:pr-[95px]">
      <div className="flex justify-center relative mx-3 md:mx-0 mb-[23px]">
        <Button className="rounded-15 bg-lemon  px-[30px] py-2.5 text-black text-sm md:text-md md:leading-6 font-semibold font-switzer">
          IT & Development
        </Button>
        <Button className="rounded-15 -ml-4 bg-grey-1 bg-opacity-15 px-[30px] py-2.5 text-black text-sm  md:text-md md:leading-6 font-medium font-switzer">
          Design and Creative
        </Button>
      </div>
      <div className="grid grid-cols-2 mx-3 md:grid-cols-3 justify-center mb-[30px]">
        {herolinks.map((link, index) => (
          <ul className="flex" key={link.id}>
            <li className="pb-[10px]">
              <Link
                to={link.url}
                className={clsx(
                  "text-sm md:text-md leading-4  font-switzer hover:opacity-70",
                  index === herolinks.length - 1 || index === 6
                    ? "font-bold text-black"
                    : "font-[400] text-grey-2"
                )}
              >
                {link.text}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </HeaderCard>
  );
}
