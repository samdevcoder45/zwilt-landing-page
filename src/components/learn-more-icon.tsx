import clsx from "clsx";

export default function LearnMoreIcon({
  icon,
  text,
  className,
}: {
  icon: string;
  text: string;
  className?: string;
}) {
  return (
    <div className="md:pt-6 flex items-center gap-2">
      <div
        className={clsx(
          "w-[50px] h-[50px] flex items-center justify-center rounded-20 bg-black",
          className
        )}
      >
        <img src={icon} alt="" className="w-[17px] h-2.5" />
      </div>
      <p className="font-switzer text-[14.8px] font-[500] leading-[12.11px]">
        {text}
      </p>
    </div>
  );
}
