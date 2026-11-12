import Link from "next/link";
import { notFound } from "next/navigation";
import data from "@/data/news.json";
import { ArticleCard } from "@/components/ArticleCard";
import { categoryColors } from "@/lib/category-colors";

type ArticleDetailPageType = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () => {
  return data.map((article) => ({ slug: article.slug }));
};


const ArticleDetailPage = async ({ params }: ArticleDetailPageType) => {
  const { slug } = await params;

  const article = data.find((item) => item.slug === slug);

  if (!article) notFound();


const related = data.filter(
  (item) => item.category === article.category && item.slug !== article.slug
);

  const initials = article.author
  .split(" ")
  .map((name) => name[0])
  .join("");

const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});


  return (
    <div className="w-full flex flex-col">
      <nav className="w-34.75 h-15.25 pt-6 pb-5 flex gap-3">
        <Link href="/">
          <p className="w-19.25 h-4.25 font-bold text-xs leading-[145%] text-[#22241F]">← All stories</p>
        </Link>
        <p className="w-1.25 h-4.25 font-normal text-xs leading-[145%] text-[#65675F]">/</p>
        <p className="w-8.25 h-4.25 font-normal text-xs leading-[145%] text-[#65675F]">{article.category}</p>
      </nav>

      <div className="w-full h-px bg-[#E2E2DA]"></div>

      <div className="w-full h-fit pt-10 pb-8 flex flex-col gap-5">
        <div className="w-fit flex items-center gap-3">
          <p className={`w-fit h-6.75 flex justify-center items-center rounded-[100px] py-1.5 px-3 font-bold text-[10px] leading-[145%] uppercase ring-1 z-1 ${categoryColors[article.category] ?? "bg-stone-50 text-stone-800 ring-stone-200"}`}>{article.category}</p>
          <p className="w-19.25 h-4 font-normal text-[11px] leading-[145%] text-[#65675F]">— THE DAILY</p>
        </div>
        <h1 className="w-full h-fit font-bold text-4xl leading-[112%] text-[#0C0A09] sm:text-5xl">	{article.title}</h1>
        <h3 className="w-full h-fit font-normal text-lg leading-[168%] text-[#57534E] sm:text-xl">{article.description}</h3>
        <div className="w-full h-px bg-[#E2E2DA]"></div>
        <div className="w-full h-27.25 flex flex-col gap-5">
          <div className="w-53 flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl py-3 bg-[#ECFDF5] flex justify-center items-center font-bold text-sm leading-[145%] text-[#065F46]">{initials}</div>
            <div className="w-37.5 h-9.75 flex flex-col gap-1">
              <p className="w-fit h-3.75 font-bold text-[10px] leading-[145%] text-[#65675F] ">WRITTEN BY</p>
              <p className="w-fit h-5 font-bold text-sm leading-[145%] text-[#22241F]">{article.author}</p>
            </div>
          </div>
          <div className="w-62.25 flex gap-6">
            <div className="w-28.75 h-10.25 flex flex-col gap-1.5">
              <p className="h-3.75 font-bold text-[10px] leading-[145%] text-[#65675F]">PUBLISHED</p>
              <p className="h-5 font-normal text-sm leading-[145%] text-[#22241F]">{formattedDate}</p>
            </div>
            <div>
              <p className="h-3.75 font-bold text-[10px] leading-[145%] text-[#65675F]">READING TIME</p>
              <p className="h-5 font-normal text-sm leading-[145%] text-[#22241F]">1 min read</p>
            </div>
          </div>
        </div>
      </div>

      <img className="w-full h-[262.5px] rounded-2xl inset-0 object-cover z-0" src={article.image} 	alt={article.imageAlt} />
      
      <div className="w-full h-fit pt-3 flex flex-col gap-1 sm:flex-row">
        <p className="w-fit h-3.75 font-normal text-[10px] leading-[145%] text-[#65675F] sm:inline">{article.imageAlt}</p>
        <p className="w-fit h-3.75 font-normal text-[10px] leading-[145%] text-[#65675F] sm:inline">Illustrative photography · Unsplash</p>
      </div>

      <div className="w-full h-fit py-10 flex flex-col gap-4">
        <div className="w-full rounded-2xl border border-[#E2E2DA] p-6 flex flex-col gap-6 bg-[#FFFFFF]">
          <p className="w-21.25 h-3.75 font-bold text-[10px] leading-[145%] text-[#C44724]">━━   THE STORY</p>
          <p className="font-serif h-fit font-normal text-lg leading-[190%] text-[#44403C]">{article.content[0]}</p>
          <p className="font-serif h-fit font-normal text-lg leading-[190%] text-[#44403C]">{article.content[1]}</p>
          <p className="font-serif h-fit font-normal text-lg leading-[190%] text-[#44403C]">{article.content[2]}</p>
          <p className="w-full h-5.75 font-bold text-base leading-[145%] flex justify-center text-[#C44724]">•  •  •</p>
        </div>
        <p className="w-full h-4 font-normal text-[11px] leading-[145%] flex justify-center text-[#65675F]">Fictional sample story · The Daily learning edition</p>
        <div className="w-full h-43.75 rounded-3xl flex flex-col gap-5 p-5 bg-[#FFF7ED]">
          <div className="w-full flex flex-col gap-1">
            <p className="w-full h-6.5 font-semibold text-lg leading-[145%] text-[#22241F]">A little more curiosity?</p>
            <p className="w-full h-10 font-normal text-sm leading-[145%] text-[#65675F]">Your next good read is just around the corner.</p>
          </div>
          <Link href="/"><button className="flex justify-center items-center py-2.5 px-3 rounded-[100px] bg-[#22241F] font-normal text-xs leading-[145%] text-[#FFFFFF]">All stories  ↗</button></Link>
        </div>
      </div>
      
      <div className="w-full h-px bg-[#E2E2DA]"></div>

      <div className="w-full h-fit pt-10 pb-16 flex flex-col gap-7">
        <div className="w-full h-16.75 flex flex-col gap-2">
          <p className="w-fit h-3.75 font-bold text-[10px] leading-[145%] text-[#C44724]">KEEP YOUR CURIOSITY GOING</p>
          <h2 className="w-full h-11 font-bold text-3xl leading-[145%] text-[#22241F]">More to discover.</h2>
        </div>
        <div className="h-fit flex flex-col gap-7 sm:flex-row">{related.map((item) => (
      <ArticleCard key={item.id} {...item} />
    ))}</div>
      </div>
      
      <div className="w-full h-px bg-[#E2E2DA]"></div>
    </div>
  );
};

export default ArticleDetailPage;

