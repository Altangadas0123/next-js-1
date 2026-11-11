import Link from "next/link";
import { notFound } from "next/navigation";
import data from "@/data/news.json";

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

  return (
    <div className="w-full flex flex-col pt-10">
      
    </div>
  );
};

export default ArticleDetailPage;