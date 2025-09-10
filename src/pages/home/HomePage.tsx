import Layout from '../../components/layout/Layout';
import HeroSection from '../../components/home/HeroSection';
import FeaturedTours from '../../components/home/FeaturedTours';
import AboutSection from '../../components/home/AboutSection';
import BlogSection from '../../components/home/BlogSection';
import TestimonialsSection from '../../components/home/TestimonialsSection';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedTours />
      <AboutSection />
      <TestimonialsSection />
      <BlogSection />
    </Layout>
  );
};

export default HomePage;