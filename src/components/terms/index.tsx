export default function TermsAndService() {
  return (
    <div className="bg-black gradient-border lg:px-[2.5rem]">
      <div className="flex flex-col p-2 items-center lg:flex-row justify-between">
        <p className="text-white opacity-80 text-xs lg:text-[16px]  lg:leading-[31px] font-medium font-switzer">
          All rights reserved by Zwilt
        </p>
        <div className="flex gap-3">
          <a
            href=""
            className="text-white opacity-80 text-xs lg:text-[16px] hover:underline  lg:leading-[31px] font-medium font-switzer"
          >
            Privacy Policy
          </a>
          <a
            href=""
            className="text-white opacity-80 text-xs lg:text-[16px] hover:underline  lg:leading-[31px] font-medium font-switzer"
          >
            Terms and Conditions
          </a>
        </div>
      </div>
    </div>
  );
}
