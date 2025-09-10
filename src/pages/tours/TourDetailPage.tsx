import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { getTourById } from '../../api/services';
import type { Tour } from '../../types';

const TourDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTour = async () => {
      if (!id) return;
      
      try {
        const tourId = parseInt(id, 10);
        const response = await getTourById(tourId);
        
        if (response.error) {
          setError(response.error.message);
        } else {
          setTour(response.data);
        }
      } catch (err) {
        setError('Failed to load tour details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTour();
  }, [id]);

  // Convert itinerary string to array of steps
  const formatItinerary = (itinerary: string) => {
    return itinerary.split('\\n').map(line => line.trim()).filter(Boolean);
  };

  if (loading) {
    return (
      <Layout>
        <div className="container-custom py-20 flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  if (error || !tour) {
    return (
      <Layout>
        <div className="container-custom py-20 text-center">
          <h2 className="heading-lg text-red-500 mb-4">Error</h2>
          <p className="text-gray-600 mb-8">{error || 'Tour not found'}</p>
          <Link to="/tours" className="btn-primary">
            Back to Tours
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative h-80 md:h-96 lg:h-[500px]">
        <img 
          src={`${tour.banner_image_url}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80`}
          alt={tour.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="container-custom pb-12">
            <h1 className="heading-xl text-white">{tour.name}</h1>
          </div>
        </div>
      </div>

      {/* Tour Details */}
      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="heading-md mb-4">Tour Overview</h2>
              <p className="text-gray-600 mb-8 whitespace-pre-line">
                {tour.description}
              </p>

              <h2 className="heading-md mb-4">Itinerary</h2>
              <div className="border-l-4 border-primary pl-4 mb-8">
                {formatItinerary(tour.itinerary).map((item, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <h2 className="heading-md mb-4">What's Included</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Professional English-speaking guide</li>
                <li>Transportation in air-conditioned vehicle</li>
                <li>Entrance fees to attractions listed in the itinerary</li>
                <li>Boat rides where specified</li>
                <li>Bottled water during the tour</li>
                <li>Lunch at a local restaurant</li>
              </ul>

              <h2 className="heading-md mb-4">What's Not Included</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Personal expenses</li>
                <li>Travel insurance</li>
                <li>Additional food and drinks not specified</li>
                <li>Hotel pickup outside of city center (surcharge may apply)</li>
                <li>Gratuities (optional)</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-24">
              <div className="mb-6 pb-6 border-b">
                <h3 className="text-2xl font-bold text-primary">${tour.price.toFixed(2)}</h3>
                <p className="text-gray-500">per person</p>
              </div>

              <div className="mb-6 pb-6 border-b">
                <h3 className="font-bold text-lg mb-2">Tour Details</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{tour.duration_days} day{tour.duration_days > 1 ? 's' : ''}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Group Size:</span>
                    <span className="font-medium">Up to 15 people</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Languages:</span>
                    <span className="font-medium">English, Vietnamese</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Cancellation:</span>
                    <span className="font-medium">Free up to 24 hours</span>
                  </li>
                </ul>
              </div>

              <Link 
                to={`/booking?tourId=${tour.id}`}
                className="block w-full btn-primary text-center py-3"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TourDetailPage;