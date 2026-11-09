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

  const initials = author.split(" ").map((name) => name[0]).join("");

  return (
    <div className="w-[376px] h-[500px] flex flex-col rounded-2xl border border-[#E7E5E4] bg-[#FFFFFF] overflow-hidden">
      <div className="w-full h-[235px] flex flex-col justify-between p-4 relative ">
        <img src={image} alt={imageAlt} className="w-full h-[235px] absolute inset-0 object-cover z-0" />
        <div className="w-[62px] h-[27px] flex justify-center items-center rounded-[100px] py-[6px] px-3 bg-[#ECFDF5] font-bold text-[10px] leading-[145%] text-[#065F46] z-1">{category}</div>
        <div className="w-[79px] h-[17px] flex gap-1.5 z-1">
          <svg className="z-2" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.25 7C12.25 9.8995 9.8995 12.25 7 12.25C4.1005 12.25 1.75 9.8995 1.75 7C1.75 4.1005 4.1005 1.75 7 1.75C9.8995 1.75 12.25 4.1005 12.25 7Z" strokeWidth="1.05" stroke="white"/>
            <path d="M7 4.08325V6.99992L8.75 8.16658" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round" stroke="white"/>
          </svg>

          <p className="w-[59px] h-[17px] flex items-center font-normal text-xs leading-[145%] text-[#FFFFFF]">1 min read</p>
        </div>
      </div>

      <div className="w-full h-[263px] flex flex-col p-6 justify-between">
        <div className="w-full h-[114px] flex flex-col gap-[12px]">
          <p className="w-full h-[56px] font-bold text-xl leading-[138%] text-[#1C1917]">{title}</p>
          <p className="w-full h-[46px] font-normal text-sm leading-[163%] text-[#57534E]">{description}</p>
        </div>

        <div className="w-full h-[57px] flex flex-col gap-4">
          <div className="w-[326px] h-[1px] bg-[#E2E2DA]"></div>

          <div className="w-full h-[40px] flex gap-[12px]">
            <div className="w-[40px] h-[40px] bg-[#ECFDF5] rounded-[100px] flex justify-center items-center font-bold text-xs leading-[145%] text-[#065F46]">{initials}</div>
            <div className="w-full h-fit flex flex-col gap-1">
              <p className="w-[74px] h-[17px] font-bold text-xs leading-[145%] text-[#292524]">{author}</p>
              <p className="w-16 h-4 font-normal text-[11px] leading-[145%] text-[#78716C]">{date}</p>
            </div>
            <div className="w-[36px] h-[36px] rounded-[100px] bg-[#FFF7ED] flex justify-center items-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.25 12.75L12.75 5.25M12.75 12.75V5.25H5.25" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" stroke="#C44724"/>
              </svg>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
