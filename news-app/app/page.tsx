import { NewsList } from "@/components/NewsList";


// rafce
const Home = () => {
  return (
    <div className="w-87.5 h-fit pt-10 flex flex-col sm:w-176 lg:w-296">
      <header className="w-full h-16.75 flex justify-between items-end sm:h-17.75  lg:h-18.75">
        <div className="w-87.5 h-16.75 flex flex-col justify-between sm:w-100 sm:h-18.75 ">
          <h4 className="w-18.75 h-3.75 font-bold text-[10px] leading-[145%] text-[#C44724]">STAY CURIOUS</h4>
          <h1 className="w-66.25 h-11 font-bold text-3xl leading-[145%] text-[#22241F] sm:w-79.5 sm:h-13 sm:text-4xl">The latest stories.</h1>
        </div>
        <h4 className="hidden font-normal text-xs leading-[145%] text-[#65675F] sm:block lg:block">Big ideas. Fresh voices. Worth your time.</h4>
      </header>

      <NewsList />

    </div>
  );
};

export default Home;