import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import AboutSection from '../components/AboutSection';
import MenuSection from '../components/MenuSection';

const FeaturedDishes = () => {
  const featured = [
    { name: "Butter Chicken", price: "€15.95" },
    { name: "Palak Paneer", price: "€12.95" },
    { name: "Chicken Biryani", price: "€14.95" },
    { name: "Dal Makhani", price: "€11.95" }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Our Signature Dishes
        </h2>
        <MenuSection items={featured} title="Featured Dishes" />
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Authentic Flavors",
      description: "Traditional Punjabi recipes passed down through generations"
    },
    {
      title: "Fresh Ingredients",
      description: "Quality ingredients sourced daily for the best taste"
    },
    {
      title: "Expert Chefs",
      description: "Skilled chefs with years of experience in Indian cuisine"
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-black/50">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <AboutSection />
      <FeaturedDishes />
      <Gallery />
      <WhyChooseUs />
    </div>
  );
};

export default Home;