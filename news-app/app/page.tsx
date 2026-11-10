import data from "@/data/news.json";

import { ArticleCard } from "@/components/ArticleCard";
// rafce
const Home = () => {
  return (
    <div className="w-296 h-fit pt-10 pb-6">
      <header></header>
      <div className="grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3">
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
      <header></header>
    </div>
  );
};

export default Home;
