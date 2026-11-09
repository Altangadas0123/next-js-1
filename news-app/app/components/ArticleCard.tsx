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

export const ArticleCard = (props: ArticleCardType) => {
  const { id, slug, title, description, category, image, imageAlt, author, date, content } = props;

  return (
    <div className="w-[376px] h-[500px] flex flex-col rounded-2xl border border-[#E7E5E4] bg-[#FFFFFF] overflow-hidden">
      <div className="w-full h-[235px] flex flex-col justify-between p-4 bg-amber-500"></div>

      <div className="w-full h-[263px] flex flex-col justify-between p-6 bg-amber-100">
        <div className="w-full h-[114px] flex flex-col gap-3">
          <h2 className="w-full h-14 font-bold text-xl leading-[138%] text-[#1C1917]">{slug}</h2>
          <p>{description}</p>
        </div>

        <div>
          <div>--</div>

          <div>
            <div>AM</div>
            <div>
              <p>{author}</p>
              <p>{date}</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
