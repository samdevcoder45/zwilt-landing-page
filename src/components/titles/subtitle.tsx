import clsx from "clsx";

export default function Subtitle({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  return (
    <h2
      className={clsx(
        "md:text-[34px]  text-black md:leading-[44px] font-semibold font-switzer",
        className
      )}
    >
      {text}
    </h2>
  );
}
