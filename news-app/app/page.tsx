import data from "@/data/news.json";

import { ArticleCard } from "@/components/ArticleCard";
// rafce
const Home = () => {
  return (
    <div className="w-87.5 h-fit pt-10 flex flex-col">

      <header className="w-full h-16.75 flex flex-col gap-2">
        <h4 className="w-18.75 h-3.75 font-bold text-[10px] leading-[145%] text-[#C44724]">STAY CURIOUS</h4>
        <h1 className="w-66.25 h-11 font-bold text-3xl leading-[145%] text-[#22241F]">The latest stories.</h1>
      </header>

      <nav className="w-full h-40 pt-6 flex flex-col gap-1">
        <div className="w-full h-px bg-[#E2E2DA]"></div>
          
        <div className="w-76.25 h-fit py-3 flex gap-1">
          <button className="w-fit h-9.25 rounded-sm py-2.5 px-3 flex justify-center items-center font-normal text-xs leading-[145%] text-[#65675F] ">All stories</button>
          <button className="w-fit h-9.25 rounded-sm py-2.5 px-3 flex justify-center items-center font-normal text-xs leading-[145%] text-[#65675F] ">World</button>
          <button className="w-fit h-9.25 rounded-sm py-2.5 px-3 flex justify-center items-center font-normal text-xs leading-[145%] text-[#65675F] ">Technology</button>
          <button className="w-fit h-9.25 rounded-sm py-2.5 px-3 flex justify-center items-center font-normal text-xs leading-[145%] text-[#65675F] ">Culture</button>
        </div>

        <div className="w-69.75 h-fit py-3 flex gap-1">
          <button className="w-fit h-9.25 rounded-sm py-2.5 px-3 flex justify-center items-center font-normal text-xs leading-[145%] text-[#65675F] ">Travel</button>
          <button className="w-fit h-9.25 rounded-sm py-2.5 px-3 flex justify-center items-center font-normal text-xs leading-[145%] text-[#65675F] ">Design</button>
          <button className="w-fit h-9.25 rounded-sm py-2.5 px-3 flex justify-center items-center font-normal text-xs leading-[145%] text-[#65675F] ">Science</button>
          <button className="w-fit h-9.25 rounded-sm py-2.5 px-3 flex justify-center items-center font-normal text-xs leading-[145%] text-[#65675F] ">Business</button>
        </div>

        <div className="w-full h-px bg-[#E2E2DA]"></div>
      </nav>

      <div className="w-full h-14.25 py-5 ">
        <p className="w-29.25 h-4.25 font-normal text-xs leading-[145%] text-[#65675F]">20 stories to explore</p>
      </div>

      <div className="w-full h-fit flex flex-col gap-10">
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
      <footer className="mt-16 w-75 h-33.25 flex items-center justify-between py-9">
        <div className="w-55 h-fit">
          <p className="w-39.5 h-11 font-bold text-3xl leading-[145%] text-[#22241F]">the daily ▧</p>
          <p className="w-44.25 h-4.25 font-normal text-xs leading-[145%] text-[#65675F]">A fresh perspective. Every day.</p>
        </div>
        <p className="w-20 h-4.25 font-normal text-xs leading-[145%] text-[#22241F]">Back to top ↑</p>
      </footer>
    </div>
  );
};

export default Home;


// class="columns-1 sm:columns-2 lg:columns-3 gap-[22px]"