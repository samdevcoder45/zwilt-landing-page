import { Link } from "react-router-dom";
import { exploreLinks } from "../../utils/nav-links";

export default function DevelopmentText({ text }: { text: string }) {
  return (
    <div className="">
      <div className="pb-3 lg:pb-[20px] max-w-[380px] md:min-w-[380px]">
        <h4 className="text-black lg:text-[24px] lg:leading-[34px] font-medium font-switzer-variable">
          {text}
        </h4>
      </div>
      <div className="md:grid md:grid-cols-2 items-center">
        {exploreLinks.map((link) => (
          <ul>
            <li className="flex items-center">
              <img src={link.icon} alt="" className="w-4 h-[21px] mr-2" />
              <Link
                to="#"
                className="text-black opacity-80 text-sm text-nowrap lg:text-md leading-8 font-[400] font-switzer"
              >
                {link.text}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
