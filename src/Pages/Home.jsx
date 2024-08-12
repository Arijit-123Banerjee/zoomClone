import Banners from "../Component/Banners";
import Secion_Two from "../Component/Secion_Two";

const Home = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center flex-col p-8 md:p-20 lg:p-44">
        <div className="flex w-[20%] max-md:w-[40%] p-1 max-md:p-0 bg-[#dfe0e2] rounded-3xl gap-4 max-md:gap-2  md:h-[30px] items-center max-md:hidden">
          <div className="bg-[#007dfc] rounded-3xl w-[30%] max-md:w-[40%] text-center text-white text-sm">
            New
          </div>
          <a href="" className="flex-1 text-center md:text-left text-sm">
            <span className="lg:inline-block md:hidden">Logoipsum</span> V.1.0
          </a>
        </div>

        <h1 className="font-bold text-[36px] md:text-[48px] lg:text-[60px] text-slate-700 text-center">
          Easy scheduling <span className="text-[#007dfc]">ahead</span>
        </h1>
        <h2 className="text-base md:text-lg lg:text-xl mt-5 text-slate-500 text-center w-[90%] md:w-[80%] lg:w-[70%]">
          Scheduly is your scheduling automation platform for eliminating the
          back-and-forth emails to find the perfect time — and so much more.
        </h2>

        <a
          className="rounded-xl border-2 border-[#0069ff] px-6 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white hover:duration-200 mt-10"
          href="#"
        >
          Get Started
        </a>
      </div>
      <Banners />
      <Secion_Two />
    </>
  );
};

export default Home;
