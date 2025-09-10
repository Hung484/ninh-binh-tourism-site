import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative h-80 md:h-96">
        <img 
          src="https://images.unsplash.com/photo-1563499153662-eb0a8e887e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Ninh Binh Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container-custom">
            <h1 className="heading-xl text-white mb-4">About Us</h1>
            <p className="text-xl text-white max-w-2xl">
              Passionate about sharing the beauty and culture of Ninh Binh with travelers from around the world.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="heading-lg mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Ninh Binh Tourism was founded in 2015 by a group of local guides who were passionate about sharing the natural beauty and rich cultural heritage of their homeland with travelers from around the world.
              </p>
              <p className="text-gray-600 mb-4">
                What began as a small operation offering boat tours in Tràng An has grown into a comprehensive tourism service, but our core mission remains the same: to provide authentic, sustainable, and memorable experiences that connect visitors with the true essence of Ninh Binh.
              </p>
              <p className="text-gray-600">
                We believe that responsible tourism can benefit both visitors and local communities, which is why we work closely with local families, support conservation efforts, and strive to minimize our environmental impact in all our operations.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1544550581-1bcabf842b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Local tour guides"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                Our team consists of local guides who have in-depth knowledge of Ninh Binh's history, culture, and hidden gems that you won't find in guidebooks.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Service</h3>
              <p className="text-gray-600">
                We tailor each tour to meet the interests and needs of our guests, ensuring you have a unique and personalized experience in Ninh Binh.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable Tourism</h3>
              <p className="text-gray-600">
                We're committed to preserving Ninh Binh's natural beauty and supporting local communities through responsible tourism practices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Small Group Tours</h3>
              <p className="text-gray-600">
                We keep our tour groups small to ensure a more intimate experience and minimize our impact on the natural environment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Excellent Reputation</h3>
              <p className="text-gray-600">
                We're proud of our consistently high ratings and positive reviews from travelers who have experienced our tours.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Value for Money</h3>
              <p className="text-gray-600">
                We offer competitive pricing without compromising on the quality of our services or the experiences we provide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-4">Meet Our Team</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our dedicated team of local guides and tourism professionals are passionate about creating unforgettable experiences in Ninh Binh.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden h-48 w-48 mx-auto">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Nguyen Van Minh"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Nguyen Van Minh</h3>
              <p className="text-primary">Founder & CEO</p>
              <p className="text-gray-600 mt-2">
                Born and raised in Ninh Binh, Minh started as a local guide before founding the company in 2015.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden h-48 w-48 mx-auto">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Tran Thi Huong"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Tran Thi Huong</h3>
              <p className="text-primary">Operations Manager</p>
              <p className="text-gray-600 mt-2">
                With 10+ years in tourism, Huong ensures all our tours run smoothly and exceed expectations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden h-48 w-48 mx-auto">
                <img 
                  src="https://randomuser.me/api/portraits/men/67.jpg" 
                  alt="Le Thanh Tung"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Le Thanh Tung</h3>
              <p className="text-primary">Senior Tour Guide</p>
              <p className="text-gray-600 mt-2">
                An expert in local history and culture, Tung specializes in creating immersive cultural experiences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden h-48 w-48 mx-auto">
                <img 
                  src="https://randomuser.me/api/portraits/women/33.jpg" 
                  alt="Pham Mai Anh"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Pham Mai Anh</h3>
              <p className="text-primary">Customer Relations</p>
              <p className="text-gray-600 mt-2">
                Mai Anh ensures every guest receives personalized attention and support before, during, and after their tour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Explore Ninh Binh?</h2>
          <p className="text-gray-200 max-w-3xl mx-auto mb-8">
            Join us for an unforgettable adventure through the stunning landscapes and rich cultural heritage of Ninh Binh. Our experienced guides are ready to show you the best this region has to offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tours" className="bg-white text-primary py-3 px-6 rounded-md hover:bg-gray-100 transition-colors font-medium">
              Explore Our Tours
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-md hover:bg-white/10 transition-colors font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;