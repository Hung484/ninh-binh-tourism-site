import { Link } from 'react-router-dom';
import type { Tour } from '../../types';

interface TourCardProps {
  tour: Tour;
}

const TourCard = ({ tour }: TourCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-56 overflow-hidden">
        <img 
          src={`${tour.banner_image_url}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80`}
          alt={tour.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="heading-sm mb-2">{tour.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {tour.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold">${tour.price.toFixed(2)}</span>
          <span className="text-gray-500">{tour.duration_days} day{tour.duration_days > 1 ? 's' : ''}</span>
        </div>
        <div className="mt-4 flex gap-2">
          <Link 
            to={`/tours/${tour.id}`} 
            className="flex-1 text-center py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            View Details
          </Link>
          <Link 
            to={`/booking?tourId=${tour.id}`} 
            className="flex-1 text-center py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;