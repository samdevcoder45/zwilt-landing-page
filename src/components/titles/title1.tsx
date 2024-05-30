import clsx from "clsx";

const H1 = ({ text, className }: { text: string; className: string }) => {
  return (
    <h2
      className={clsx(
        "md:text-[54px]  text-black md:leading-[64px] font-bold font-switzer",
        className
      )}
    >
      {text}
    </h2>
  );
};

export default H1;
