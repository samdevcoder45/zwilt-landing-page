import Input from "./input";
import arrowVec from "../../assets/arrow-vec.svg";
import { Button } from "../button";
import { useState } from "react";

export default function HeroForm() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);
  return (
    <form>
      <div className="relative flex items-center">
        <Input
          type="text"
          value={inputValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder=""
          className="w-[285px] h-[40px] lg:w-[570px] lg:h-full text-black border-[1.5px] pl-[27px] py-[15px] cursor-pointer rounded-15 border-grey focus:ring-2  outline-none"
        />
        {!isFocused && !inputValue && (
          <span className="absolute top-0 left-0 pl-[27px] pt-[9px] md:pt-[15px] text-md font-semibold font-switzer">
            <span className="text-black">Looking for</span>
            <span className="text-grey-2"> design |</span>
          </span>
        )}
        <Button
          aria-label="search button"
          className=" h-[40px] md:w-[74px] md:h-full absolute top-0 right-0 py-[15px] bg-yellow hover:opacity-80 transition-colors rounded-15 flex items-center justify-center"
        >
          <img src={arrowVec} alt="Search Icon" />
        </Button>
      </div>
    </form>
  );
}
