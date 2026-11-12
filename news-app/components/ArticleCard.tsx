// import { Link } from "next/legacy/";
import Link from "next/link";
import { Clock } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

type ArticleCardType = {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  author: string;
  date: string;
  content: string[];
};
// rafc
export const ArticleCard = (props: ArticleCardType) => {
  const { id, slug, title, description, category, image, imageAlt, author, date, content } = props;

  const initials = author
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <Link href={`/news/${slug}`}>
      <div className="w-87.5 h-125 flex flex-col rounded-2xl border border-[#E7E5E4] bg-[#FFFFFF] overflow-hidden sm:w-84.5 sm:h-128.75 lg:w-94 lg:h-125">
        <div className="w-full h-58.75 flex flex-col justify-between p-4 relative ">
          <img src={image} alt={imageAlt} className="w-full h-full absolute inset-0 object-cover z-0" />
          <div className="w-fit h-6.75 flex justify-center items-center rounded-[100px] py-1.5 px-3 bg-[#ECFDF5] font-bold text-[10px] leading-[145%] text-[#065F46] z-1">{category}</div>
          <div className="w-19.75 h-4.25 flex gap-1.5 z-1">
            <Clock className="w-3.5 h-3.5 text-[#FFFFFF]" />

            <p className="w-14.75 h-4.25 flex items-center font-normal text-xs leading-[145%] text-[#FFFFFF]">1 min read</p>
          </div>
        </div>

        <div className="w-full h-65.75 flex flex-col p-6 justify-between sm:h-69.5 lg:h-65.75">
          <div className="w-full h-28.5 flex flex-col gap-3">
            <p className="w-full h-14 font-bold text-xl leading-[138%] text-[#1C1917]">{title}</p>
            <p className="w-full h-11.5 font-normal text-sm leading-[163%] text-[#57534E]">{description}</p>
          </div>

          <div className="w-full h-14.25 flex flex-col gap-4">
            <div className="w-full h-px bg-[#E2E2DA]"></div>

            <div className="w-full h-10 flex gap-3">
              <div className="w-10 h-10 bg-[#ECFDF5] rounded-[100%] flex justify-center items-center font-bold text-xs leading-[145%] text-[#065F46]">{initials}</div>
              <div className="w-50 h-fit flex flex-col gap-1">
                <p className="w-fit h-4.25 flex  font-bold text-xs leading-[145%] text-[#292524]">{author}</p>
                <p className="w-fit h-4 font-normal text-[11px] leading-[145%] text-[#78716C]">{date}</p>
              </div>
              <div className="w-9 h-9 flex rounded-[100%] bg-[#FFF7ED] justify-center items-center">
                <ArrowUpRight className="w-4.5 h-4.5 text-[#C44724]"/>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

// class="columns-1 sm:columns-2 lg:columns-3 gap-[22px]"
