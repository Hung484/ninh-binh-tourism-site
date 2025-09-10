import { useState } from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Australia",
    quote: "Our tour of Ninh Binh was absolutely breathtaking! The boat ride through Trang An was serene and magical. Our guide was knowledgeable and made the history come alive. I'd recommend this tour to anyone visiting Vietnam.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "United States",
    quote: "Cycling through the rice fields and visiting Bai Dinh temple were highlights of our Vietnam trip. The local food recommended by our guide was delicious, and the whole experience felt authentic and off the beaten path.",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "United Kingdom",
    quote: "The landscapes of Ninh Binh are just stunning - like something from a movie! Our day trip from Hanoi was well organized, comfortable, and gave us plenty of time to explore and take photos. Worth every penny!",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    id: 4,
    name: "Thomas Weber",
    location: "Germany",
    quote: "As a photography enthusiast, Ninh Binh was a dream destination. The karst mountains, peaceful rivers, and rural scenes were perfect. Our guide knew exactly where to take us for the best shots at the right time of day.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">What Our Travelers Say</h2>
          <p className="text-gray-200 max-w-3xl mx-auto">
            Read genuine reviews from travelers who have experienced our tours in Ninh Binh.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial card */}
          <div className="bg-white text-gray-800 rounded-xl p-8 shadow-xl">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow text-center md:text-left">
                <FormatQuoteIcon fontSize="large" className="text-primary/20 mb-2" />
                <p className="text-lg mb-4 italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <h4 className="text-lg font-bold">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-500">{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={goToPrevious}
              className="bg-white text-primary p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowBackIosNewIcon />
            </button>
            <button
              onClick={goToNext}
              className="bg-white text-primary p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowForwardIosIcon />
            </button>
          </div>
          
          {/* Pagination indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;