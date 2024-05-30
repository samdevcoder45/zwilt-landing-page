export default function Star({
  icon,
  text1,
  text2,
}: {
  icon: string;
  text1: string;
  text2: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-1">
        <p className="font-cabin text-[14px] font-semibold leading-[8px]">
          {text1}
        </p>
        <img src={icon} alt="Star Icon" />
        <p className="font-cabin text-[14px] font-semibold leading-[8px]">
          {text2}
        </p>
      </div>
    </div>
  );
}
