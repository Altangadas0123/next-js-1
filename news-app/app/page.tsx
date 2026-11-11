import data from "@/data/news.json";

import { ArticleCard } from "@/components/ArticleCard";
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

      <nav className="w-full h-40 pt-6 flex flex-col gap-1 sm:h-23.75">
        <div className="w-full h-px bg-[#E2E2DA]"></div>

        <div className="w-76.25 h-fit py-3 flex gap-1 sm:w-147">
          <button className="w-fit h-9.25 rounded-sm py-2.5 px-3 flex justify-center items-center font-normal text-xs leading-[145%] text-[#65675F] ">All stories</button>
          <button className="w-fit h-9.25 rounded-sm py-2.5 px-3 flex justify-center items-center font-normal text-xs leading-[145%] text-[#65675F] ">World</button>
          <button className="w-fit h-9.25 rounded-sm py-2.5 px-3 flex justify-center items-center font-normal text-xs leading-[145%] text-[#65675F] ">Technology</button>
          <button className="w-fit h-9.25 rounded-sm py-2.5 px-3 flex justify-center items-center font-normal text-xs leading-[145%] text-[#65675F] ">Culture</button>

          <button className="hidden w-fit h-9.25 rounded-sm py-2.5 px-3 justify-center items-center font-normal text-xs leading-[145%] text-[#65675F] sm:flex">Travel</button>
          <button className="hidden w-fit h-9.25 rounded-sm py-2.5 px-3 justify-center items-center font-normal text-xs leading-[145%] text-[#65675F] sm:flex">Design</button>
          <button className="hidden w-fit h-9.25 rounded-sm py-2.5 px-3 justify-center items-center font-normal text-xs leading-[145%] text-[#65675F] sm:flex">Science</button>
          <button className="hidden w-fit h-9.25 rounded-sm py-2.5 px-3 justify-center items-center font-normal text-xs leading-[145%] text-[#65675F] sm:flex">Business</button>
        </div>

        <div className="w-69.75 h-fit py-3 flex gap-1 sm:hidden">
          <button className="w-fit h-9.25 rounded-sm py-2.5 px-3 flex justify-center items-center font-normal text-xs leading-[145%] text-[#65675F] ">Travel</button>
          <button className="w-fit h-9.25 rounded-sm py-2.5 px-3 flex justify-center items-center font-normal text-xs leading-[145%] text-[#65675F] ">Design</button>
          <button className="w-fit h-9.25 rounded-sm py-2.5 px-3 flex justify-center items-center font-normal text-xs leading-[145%] text-[#65675F] ">Science</button>
          <button className="w-fit h-9.25 rounded-sm py-2.5 px-3 flex justify-center items-center font-normal text-xs leading-[145%] text-[#65675F] ">Business</button>
        </div>

        <div className="w-full h-px bg-[#E2E2DA]"></div>
      </nav>

      <div className="w-full h-fit py-5 ">
        <p className="w-29.25 h-4.25 font-normal text-xs leading-[145%] text-[#65675F]">20 stories to explore</p>
      </div>

      <div className="w-full h-fit gap-10 grid sm:grid-cols-2 lg:grid-cols-3">
        {data.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            slug={article.slug}
            title={article.title}
            description={article.description}
            category={article.category}
            image={article.image}
            imageAlt={article.imageAlt}
            author={article.author}
            date={article.date}
            content={article.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
