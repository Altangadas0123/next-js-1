import Link from "next/link";
import { notFound } from "next/navigation";
import data from "@/data/news.json";

type ArticleDetailPageType = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () => {
  return data.map((article) => ({ slug: article.slug }));
};

const turZurag = "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85"

const ArticleDetailPage = async ({ params }: ArticleDetailPageType) => {
  const { slug } = await params;

  const article = data.find((item) => item.slug === slug);

  if (!article) notFound();

  return (
    <div className="w-full flex flex-col">
      <nav className="w-34.75 h-15.25 pt-6 pb-5 flex gap-3">
        <Link href="/">
          <p className="w-19.25 h-4.25 font-bold text-xs leading-[145%] text-[#22241F]">← All stories</p>
        </Link>
        <p className="w-1.25 h-4.25 font-normal text-xs leading-[145%] text-[#65675F]">/</p>
        <p className="w-8.25 h-4.25 font-normal text-xs leading-[145%] text-[#65675F]">World</p>
      </nav>

      <div className="w-full h-px bg-[#E2E2DA]"></div>

      <div className="w-full h-fit pt-10 pb-8 flex flex-col gap-5">
        <div className="w-37.75 flex items-center gap-3">
          <p className="w-fit h-6.75 flex justify-center items-center rounded-[100px] py-1.5 px-3 bg-[#ECFDF5] font-bold text-[10px] leading-[145%] text-[#065F46] z-1">WORLD</p>
          <p className="w-19.25 h-4 font-normal text-[11px] leading-[145%] text-[#65675F]">— THE DAILY</p>
        </div>
        <h1 className="w-full h-30 font-bold text-4xl leading-[112%] text-[#0C0A09]">The future of cities is greener than you think</h1>
        <h3 className="w-full h-14.5 font-normal text-lg leading-[168%] text-[#57534E]">From rooftop gardens to car-free streets, a quieter urban revolution is taking root.</h3>
        <div className="w-full h-px bg-[#E2E2DA]"></div>
        <div className="w-full h-27.25 flex flex-col gap-5">
          <div className="w-53 flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl py-3 bg-[#ECFDF5] flex justify-center items-center font-bold text-sm leading-[145%] text-[#065F46]">AM</div>
            <div className="w-37.5 h-9.75 flex flex-col gap-1">
              <p className="w-15.75 h-3.75 font-bold text-[10px] leading-[145%] text-[#65675F] ">WRITTEN BY</p>
              <p className="w-21.75 h-5 font-bold text-sm leading-[145%] text-[#22241F]">Alex Morgan</p>
            </div>
          </div>
          <div className="w-62.25 flex gap-6">
            <div className="w-28.75 h-10.25 flex flex-col gap-1.5">
              <p className="h-3.75 font-bold text-[10px] leading-[145%] text-[#65675F]">PUBLISHED</p>
              <p className="h-5 font-normal text-sm leading-[145%] text-[#22241F]">Nov 4, 2026</p>
            </div>
            <div>
              <p className="h-3.75 font-bold text-[10px] leading-[145%] text-[#65675F]">READING TIME</p>
              <p className="h-5 font-normal text-sm leading-[145%] text-[#22241F]">1 min read</p>
            </div>
          </div>
        </div>
      </div>

      <img className="w-full h-[262.5px] rounded-2xl inset-0 object-cover z-0" src={turZurag} alt="" />
      
      <div className="w-full h-fit pt-3 flex flex-col gap-1">
        <p className="w-full h-3.75 font-normal text-[10px] leading-[145%] text-[#65675F]">Modern architecture surrounded by greenery</p>
        <p className="w-full h-3.75 font-normal text-[10px] leading-[145%] text-[#65675F]">Illustrative photography · Unsplash</p>
      </div>

      <div className="w-full h-fit py-10 flex flex-col gap-4">
        <div className="w-full rounded-2xl border border-[#E2E2DA] p-6 flex flex-col gap-6 bg-[#FFFFFF]">
          <p className="w-21.25 h-3.75 font-bold text-[10px] leading-[145%] text-[#C44724]">━━   THE STORY</p>
          <p className="h-fit font-normal text-lg leading-[190%] text-[#44403C]">Cities are beginning to treat shade, clean air, and shared outdoor space as essential infrastructure. In this imagined neighborhood, former parking lanes have become planted walkways connecting homes to shops and schools.</p>
          <p className="h-fit font-normal text-lg leading-[190%] text-[#44403C]">The design puts everyday journeys first. Benches give older residents somewhere to rest, while rain gardens absorb water that would otherwise flow straight into drains.</p>
          <p className="h-fit font-normal text-lg leading-[190%] text-[#44403C]">The difficult part is keeping improvements accessible. Affordable housing, maintenance budgets, and input from local residents belong in the plan from the beginning.</p>
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
        <div className="h-257 bg-amber-50">{/* comps orj irne */}</div>
      </div>
      
      <div className="w-full h-px bg-[#E2E2DA]"></div>
    </div>
  );
};

export default ArticleDetailPage;

{
  /* <Link href="/">All Stories</Link> */
}
