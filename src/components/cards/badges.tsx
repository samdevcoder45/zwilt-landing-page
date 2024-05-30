export default function Badges({ text }: { text: string }) {
  return (
    <div className="">
      <div className="md:min-w-[58px] bg-grey-7 flex items-center justify-center md:h-[18px] pt-[3px] pr-[7px] pb-[3px] pl-[7px] rounded-[25px]">
        <p className="font-cabin text-[8.28px] text-nowrap font-bold leading-[10.43px]">
          {text}
        </p>
      </div>
    </div>
  );
}
