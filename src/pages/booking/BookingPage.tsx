import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { getTours, createBooking } from '../../api/services';
import type { Tour, BookingFormData } from '../../types';

const BookingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tourIdParam = queryParams.get('tourId');

  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState<BookingFormData>({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    number_of_guests: 1,
    booking_date: '',
    tour_id: tourIdParam ? parseInt(tourIdParam, 10) : 0,
    message: ''
  });

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await getTours();
        if (response.error) {
          setError(response.error.message);
        } else {
          setTours(response.data);
          
          // If no tour is selected yet, default to the first one
          if (!tourIdParam && response.data.length > 0) {
            setFormData(prev => ({
              ...prev,
              tour_id: response.data[0].id
            }));
          }
        }
      } catch (err) {
        setError('Failed to load tours. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, [tourIdParam]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: name === 'number_of_guests' ? parseInt(value, 10) || 1 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.customer_name || !formData.customer_email || !formData.customer_phone || !formData.booking_date) {
      setError('Please fill in all required fields.');
      return;
    }
    
    setSubmitting(true);
    setError(null);
    
    try {
      const response = await createBooking(formData);
      
      if (response.error) {
        setError(response.error.message);
      } else {
        setSuccess(true);
        // Reset form
        setFormData({
          customer_name: '',
          customer_email: '',
          customer_phone: '',
          number_of_guests: 1,
          booking_date: '',
          tour_id: formData.tour_id,
          message: ''
        });
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (err) {
      setError('Failed to submit booking. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  // Get the selected tour details
  const selectedTour = tours.find(tour => tour.id === formData.tour_id);

  return (
    <Layout>
      <div className="bg-gray-100 py-12">
        <div className="container-custom">
          <h1 className="heading-lg mb-4">Book Your Tour</h1>
          <p className="text-gray-600 max-w-3xl">
            Fill out the form below to book your Ninh Binh adventure. Our team will get back to you within 24 hours to confirm your booking.
          </p>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-custom">
          {success ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center max-w-2xl mx-auto">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <h2 className="heading-md text-green-800 mb-4">Booking Submitted Successfully!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for booking with us. We've received your booking request and will contact you shortly to confirm the details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setSuccess(false)}
                  className="btn-primary"
                >
                  Book Another Tour
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Return to Home
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Booking Form */}
              <div className="lg:w-2/3">
                <div className="bg-white rounded-lg shadow-md p-8">
                  {error && (
                    <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
                      {error}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label htmlFor="tour_id" className="block text-gray-700 font-medium mb-2">
                        Select Tour*
                      </label>
                      {loading ? (
                        <div className="animate-pulse h-10 bg-gray-200 rounded-md"></div>
                      ) : (
                        <select
                          id="tour_id"
                          name="tour_id"
                          value={formData.tour_id}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        >
                          {tours.map(tour => (
                            <option key={tour.id} value={tour.id}>
                              {tour.name} - ${tour.price.toFixed(2)}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="customer_name" className="block text-gray-700 font-medium mb-2">
                          Full Name*
                        </label>
                        <input
                          type="text"
                          id="customer_name"
                          name="customer_name"
                          value={formData.customer_name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="customer_email" className="block text-gray-700 font-medium mb-2">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="customer_email"
                          name="customer_email"
                          value={formData.customer_email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="customer_phone" className="block text-gray-700 font-medium mb-2">
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          id="customer_phone"
                          name="customer_phone"
                          value={formData.customer_phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="number_of_guests" className="block text-gray-700 font-medium mb-2">
                          Number of Guests*
                        </label>
                        <input
                          type="number"
                          id="number_of_guests"
                          name="number_of_guests"
                          min="1"
                          max="20"
                          value={formData.number_of_guests}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="booking_date" className="block text-gray-700 font-medium mb-2">
                        Preferred Date*
                      </label>
                      <input
                        type="date"
                        id="booking_date"
                        name="booking_date"
                        value={formData.booking_date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]} // Set min date to today
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Any special requirements or questions?"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full btn-primary py-3 text-lg"
                      disabled={submitting}
                    >
                      {submitting ? 'Submitting...' : 'Complete Booking'}
                    </button>
                  </form>
                </div>
              </div>

              {/* Tour Summary */}
              <div className="lg:w-1/3">
                {selectedTour && (
                  <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                    <h3 className="heading-sm mb-4">Tour Summary</h3>
                    <div className="mb-4">
                      <img 
                        src={`${selectedTour.banner_image_url}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80`}
                        alt={selectedTour.name}
                        className="w-full h-48 object-cover rounded-md"
                      />
                    </div>
                    <h4 className="font-bold text-lg mb-2">{selectedTour.name}</h4>
                    <p className="text-gray-600 mb-4 line-clamp-3">{selectedTour.description}</p>
                    
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Price per person:</span>
                        <span className="font-bold">${selectedTour.price.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Number of guests:</span>
                        <span>{formData.number_of_guests}</span>
                      </div>
                      <div className="flex justify-between items-center font-bold text-lg mt-4 pt-4 border-t border-gray-200">
                        <span>Total:</span>
                        <span>${(selectedTour.price * formData.number_of_guests).toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gray-50 rounded-md">
                      <h4 className="font-bold mb-2">Booking Policy</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• No payment is required at this stage</li>
                        <li>• Free cancellation up to 24 hours before the tour</li>
                        <li>• Confirmation will be sent via email</li>
                        <li>• Payment can be made in cash or by card on the day</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BookingPage;