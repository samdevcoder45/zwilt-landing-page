import { useState } from "react";
import arrowIcon from "../../assets/arrow-yellow.svg";
import clsx from "clsx";
import { tableRows } from "../../utils/footerData";

export default function Table() {
  const [hoveredRowIndex, setHoveredRowIndex] = useState<null | number>(null);
  return (
    <div className="overflow-x-auto md:pb-[172px]">
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row, index) => (
            <tr
              key={row.id}
              className="relative group"
              onMouseEnter={() => setHoveredRowIndex(index)}
              onMouseLeave={() => setHoveredRowIndex(null)}
            >
              <td
                className={clsx(
                  "py-3 md:py-[22px] px-3 md:px-[70px] text-black border  border-grey-4 text-md font-[400] font-switzer md:text-[22px] md:leading-6 hover:bg-grey-5 ",
                  {
                    "bg-grey-5": index === 4,
                    "border-r-0 border-l-0": !row.category && !row.category2,
                  }
                )}
              >
                {row.category}
              </td>
              <td
                className={clsx(
                  "py-3 md:py-[22px] px-2 md:px-[66px] text-black border border-grey-4  text-nowrap text-md font-[400] font-switzer md:text-[22px] md:leading-6 hover:bg-grey-5 ",
                  { "border-r-0 border-l-0": !row.category && !row.category2 }
                )}
              >
                {row.category2}
              </td>
              <td
                className={clsx(
                  "py-3 md:py-[22px] px-2 text-black md:w-full  text-start text-nowrap md:pl-10 text-opacity-60 hover:text-opacity-100 border-t border-b border-grey-4 font-[400] font-switzer md:text-[22px] md:leading-6 hover:bg-grey-5 ",
                  { "border-r-0 border-l-0": !row.category && !row.category2 }
                )}
              >
                {row.question}{" "}
                {hoveredRowIndex === index && (
                  <td className="absolute right-10 inset-0 flex items-center justify-end  ">
                    <img src={arrowIcon} alt="" />
                  </td>
                )}
              </td>
              {hoveredRowIndex === index && (
                <td className="absolute right-10 inset-0 flex items-center justify-end  ">
                  <img src={arrowIcon} alt="" />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
