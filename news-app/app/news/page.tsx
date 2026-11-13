import data from "@/data/news.json";

type ArticleDetailPageType = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () => {
  return data.map((article) => ({slug: article.slug })) 
}

const ArticleDetailPage = async ({ params }: ArticleDetailPageType) => {
  const { slug } = await params;

  return (
    <div>
      <div className="w-5 h-5 bg-amber-200">{ slug }</div>
    </div>
  );
};

export default ArticleDetailPage;