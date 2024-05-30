import Table from "../table/Table";
import remainBg from '../../assets/bg-right.svg'
export default function FAQ() {
  return (
    <>
      <section className="min-h-screen flex-col bg-center bg-cover relative bg-[#F3F3F3]">
        <div className="flex flex-col items-center justify-center pt-[70px] lg:pt-[131px]">
          <h3 className=" lg:text-[54px] lg:leading-[54px] font-switzer font-bold">
            Frequently asked questions
          </h3>
          <div className="pt-[44px] lg:pt-[88px] w-full">
            <Table />
          </div>
        </div>
        <div className="pt-4 md:pt-0">
          <div className="bg-cover h-auto absolute bottom-0 left-0 right-0 bg-center">
            <img src={remainBg} alt="" className="relative" />
          </div>
        </div>
      </section>
    </>
  );
}
