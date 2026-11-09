import { ArticleCard } from "./components/ArticleCard";

const Home = () => {
  return (
    <div className="">
      <ArticleCard
        id={1}
        slug="the-future-of-cities-is-greener-than-you-think"
        title="The future of cities is greener than you think"
        description="From rooftop gardens to car-free streets, a quieter urban revolution is taking root."
        category="World"
        image="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85"
        imageAlt="Modern architecture surrounded by greenery"
        author="Alex Morgan"
        date="2026-11-04"
        content={["Cities are beginning to treat shade, clean air, and shared outdoor space as essential infrastructure. In this imagined neighborhood, former parking lanes have become planted walkways connecting homes to shops and schools.",
      "The design puts everyday journeys first. Benches give older residents somewhere to rest, while rain gardens absorb water that would otherwise flow straight into drains.",
      "The difficult part is keeping improvements accessible. Affordable housing, maintenance budgets, and input from local residents belong in the plan from the beginning."]}
      />
    </div>
  );
};

export default Home;
