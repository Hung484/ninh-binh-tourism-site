import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1530968464165-7a1861a71e81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Ninh Binh Landscape" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content Column */}
          <div>
            <h2 className="heading-lg mb-6">About Ninh Binh</h2>
            <p className="text-gray-600 mb-4">
              Located in the Red River Delta region of northern Vietnam, Ninh Binh is often referred to as "Halong Bay on Land" due to its stunning limestone karsts that rise dramatically from the flat rice paddies.
            </p>
            <p className="text-gray-600 mb-6">
              With its rich history as Vietnam's first capital, breathtaking natural landscapes, and vibrant local culture, Ninh Binh offers travelers an authentic Vietnamese experience away from the crowded tourist destinations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-primary">UNESCO Heritage</h3>
                <p className="text-gray-600">
                  Home to the Tràng An Landscape Complex, recognized as a UNESCO World Heritage site.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-primary">Rich History</h3>
                <p className="text-gray-600">
                  Explore Hoa Lu, Vietnam's ancient capital during the 10th and 11th centuries.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-primary">Natural Beauty</h3>
                <p className="text-gray-600">
                  Discover limestone caves, lush rice fields, and serene river landscapes.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-primary">Local Culture</h3>
                <p className="text-gray-600">
                  Experience authentic Vietnamese hospitality and traditional cuisine.
                </p>
              </div>
            </div>
            
            <Link to="/about" className="btn-primary">
              Learn More About Ninh Binh
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;