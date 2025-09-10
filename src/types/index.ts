export interface Tour {
  id: number;
  name: string;
  description: string;
  itinerary: string;
  price: number;
  duration_days: number;
  banner_image_url: string;
}

export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  featured_image_url: string;
  category: Category;
  author: {
    id: number;
    username: string;
  };
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
}

export interface Booking {
  id: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  number_of_guests: number;
  booking_date: string;
  tour_id: number;
  status: 'Pending' | 'Confirmed' | 'Cancelled';
  created_at: string;
}

export interface BookingFormData {
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  number_of_guests: number;
  booking_date: string;
  tour_id: number;
  message?: string;
}

export interface ApiResponse<T> {
  data: T;
  error: {
    code: string;
    message: string;
    details?: string;
  } | null;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}