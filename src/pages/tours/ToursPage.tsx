import { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import { getTours } from '../../api/services';
import type { Tour } from '../../types';
import TourCard from '../../components/tours/TourCard';

const ToursPage = () => {
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
    <Layout>
      {/* Page Header */}
      <div className="bg-gray-100 py-12">
        <div className="container-custom">
          <h1 className="heading-lg mb-4">Explore Our Tours</h1>
          <p className="text-gray-600 max-w-3xl">
            Discover the best of Ninh Binh with our carefully curated tours. From iconic landscapes to hidden gems, we offer authentic experiences that showcase the region's natural beauty and cultural heritage.
          </p>
        </div>
      </div>

      {/* Tours List */}
      <div className="section-padding bg-white">
        <div className="container-custom">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-8">{error}</div>
          ) : (
            <>
              {tours.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No tours available at the moment. Please check back later.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tours.map((tour) => (
                    <TourCard key={tour.id} tour={tour} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 py-16">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We can create custom tours tailored to your preferences and schedule. Contact us to discuss your dream Ninh Binh experience.
          </p>
          <a 
            href="/contact" 
            className="btn-primary"
          >
            Contact Us
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default ToursPage;