import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      {/* Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
          backgroundPosition: "center 30%"
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-custom py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="heading-xl text-white mb-6">
            Discover the Hidden Gem of Vietnam
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8">
            Experience the breathtaking landscapes, ancient temples, and rich culture of Ninh Binh.
            Book your unforgettable journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/tours" className="btn-primary text-center">
              Explore Tours
            </Link>
            <Link to="/booking" className="bg-white text-primary py-2 px-4 rounded-md hover:bg-gray-100 transition-colors text-center">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;