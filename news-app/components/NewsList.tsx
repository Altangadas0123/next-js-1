"use client";

import { useState } from "react";
import data from "@/data/news.json";
import { ArticleCard } from "@/components/ArticleCard";

const categories = ["All stories", "World", "Technology", "Culture", "Travel", "Design", "Science", "Business"];

export const NewsList = () => {
  const [selected, setSelected] = useState("All stories");

  const filtered = selected === "All stories" ? data : data.filter((article) => article.category === selected);

  return (
    <>
      <nav className="w-full pt-6 flex flex-col gap-1">
        <div className="w-full h-px bg-[#E2E2DA]"></div>

        <div className="w-full h-fit py-3 flex flex-wrap gap-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelected(category)}
              className={`w-fit h-9.25 rounded-sm py-2.5 px-3 flex justify-center items-center font-normal text-xs leading-[145%] cursor-pointer ${
                selected === category ? "bg-[#22241F] text-[#FFFFFF]" : "text-[#65675F] hover:bg-[#9CAF8820]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="w-full h-px bg-[#E2E2DA]"></div>
      </nav>

      <div className="w-full h-fit py-5">
        <p className="font-normal text-xs leading-[145%] text-[#65675F]">{filtered.length} stories to explore</p>
      </div>

      <div className="w-full h-fit gap-10 grid sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </>
  );
};
