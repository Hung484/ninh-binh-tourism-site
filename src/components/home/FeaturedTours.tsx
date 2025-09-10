import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTours } from '../../api/services';
import type { Tour } from '../../types';

const FeaturedTours = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await getTours();
        if (response.error) {
          setError(response.error.message);
        } else {
          setTours(response.data);
        }
      } catch (err) {
        setError('Failed to load tours. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Our Featured Tours</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover the most popular tours in Ninh Binh, carefully curated to showcase the region's natural beauty, cultural heritage, and unique experiences.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-8">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.slice(0, 3).map((tour) => (
              <div key={tour.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`${tour.banner_image_url}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80`} 
                    alt={tour.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="heading-sm mb-2">{tour.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {tour.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">${tour.price.toFixed(2)}</span>
                    <span className="text-gray-500">{tour.duration_days} day{tour.duration_days > 1 ? 's' : ''}</span>
                  </div>
                  <Link 
                    to={`/tours/${tour.id}`} 
                    className="block mt-4 text-center py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link to="/tours" className="btn-primary">
            View All Tours
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;