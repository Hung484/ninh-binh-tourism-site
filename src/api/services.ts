import type { 
  Tour, 
  Post, 
  Category, 
  Booking, 
  BookingFormData, 
  ApiResponse
} from '../types';

// Tours API
export const getTours = async (): Promise<ApiResponse<Tour[]>> => {
  // For the demo, we'll return mock data
  // In real implementation, this would be: return apiClient.get('/tours');
  return {
    data: MOCK_TOURS,
    error: null
  };
};

export const getTourById = async (id: number): Promise<ApiResponse<Tour>> => {
  // For the demo, we'll return mock data
  // In real implementation, this would be: return apiClient.get(`/tours/${id}`);
  const tour = MOCK_TOURS.find(t => t.id === id);
  if (!tour) {
    return {
      data: {} as Tour,
      error: {
        code: 'NOT_FOUND',
        message: 'Tour not found'
      }
    };
  }
  return {
    data: tour,
    error: null
  };
};

// Posts API
export const getPosts = async (): Promise<ApiResponse<Post[]>> => {
  // For the demo, we'll return mock data
  return {
    data: MOCK_POSTS,
    error: null
  };
};

export const getPostBySlug = async (slug: string): Promise<ApiResponse<Post>> => {
  const post = MOCK_POSTS.find(p => p.slug === slug);
  if (!post) {
    return {
      data: {} as Post,
      error: {
        code: 'NOT_FOUND',
        message: 'Post not found'
      }
    };
  }
  return {
    data: post,
    error: null
  };
};

// Categories API
export const getCategories = async (): Promise<ApiResponse<Category[]>> => {
  return {
    data: MOCK_CATEGORIES,
    error: null
  };
};

// Booking API
export const createBooking = async (bookingData: BookingFormData): Promise<ApiResponse<Booking>> => {
  // In real implementation: return apiClient.post('/bookings', bookingData);
  
  // Mock response for demo
  const newBooking: Booking = {
    id: 999,
    customer_name: bookingData.customer_name,
    customer_email: bookingData.customer_email,
    customer_phone: bookingData.customer_phone,
    number_of_guests: bookingData.number_of_guests,
    booking_date: bookingData.booking_date,
    tour_id: bookingData.tour_id,
    status: 'Pending',
    created_at: new Date().toISOString()
  };
  
  return {
    data: newBooking,
    error: null
  };
};

// Newsletter subscription
export const subscribeToNewsletter = async (email: string): Promise<ApiResponse<{id: number, email: string}>> => {
  // In real implementation: return apiClient.post('/subscribers', { email });
  
  return {
    data: {
      id: 123,
      email
    },
    error: null
  };
};

// Mock data for demo
export const MOCK_TOURS: Tour[] = [
  {
    id: 1,
    name: "Tràng An Scenic Landscape Tour",
    description: "Discover the breathtaking beauty of Tràng An, a UNESCO World Heritage site featuring limestone karsts, valleys, and historic temples.",
    itinerary: "08:00 - Pickup from hotel\n09:30 - Arrive at Tràng An\n10:00 - Begin boat tour\n12:30 - Lunch at local restaurant\n14:00 - Visit ancient temples\n16:30 - Return to hotel",
    price: 59.99,
    duration_days: 1,
    banner_image_url: "https://images.unsplash.com/photo-1528127269322-539801943592"
  },
  {
    id: 2,
    name: "Bái Đính Temple and Hoa Lư Ancient Capital",
    description: "Explore the largest Buddhist temple complex in Vietnam and visit the ancient capital of Vietnam dating back to the 10th century.",
    itinerary: "07:30 - Pickup from hotel\n09:00 - Visit Bái Đính Temple\n12:00 - Lunch\n13:30 - Explore Hoa Lư Ancient Capital\n15:30 - Return to hotel",
    price: 69.99,
    duration_days: 1,
    banner_image_url: "https://images.unsplash.com/photo-1470004914212-05527e49370b"
  },
  {
    id: 3,
    name: "Cúc Phương National Park Expedition",
    description: "Journey through Vietnam's oldest national park, home to diverse flora and fauna, ancient trees, and fascinating caves.",
    itinerary: "07:00 - Pickup from hotel\n09:30 - Arrive at Cúc Phương\n10:00 - Guided forest trek\n12:30 - Picnic lunch\n14:00 - Visit Endangered Primate Rescue Center\n16:00 - Return to hotel",
    price: 79.99,
    duration_days: 1,
    banner_image_url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  {
    id: 4,
    name: "Tam Cốc - Bích Động River Tour",
    description: "Often referred to as 'Halong Bay on land', this tour takes you through stunning rice fields, limestone mountains via traditional sampan boats.",
    itinerary: "08:30 - Pickup from hotel\n10:00 - Boat ride through Tam Cốc\n12:30 - Lunch\n14:00 - Cycling to local villages\n15:30 - Visit Bích Động Pagoda\n17:00 - Return to hotel",
    price: 54.99,
    duration_days: 1,
    banner_image_url: "https://images.unsplash.com/photo-1528181304800-259b08848526"
  }
];

export const MOCK_CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Destinations",
    slug: "destinations",
    description: "Explore the beautiful destinations in Ninh Binh province"
  },
  {
    id: 2,
    name: "Travel Tips",
    slug: "travel-tips",
    description: "Useful tips for traveling in Ninh Binh"
  },
  {
    id: 3,
    name: "Food & Cuisine",
    slug: "food-cuisine",
    description: "Discover the local food and cuisine of Ninh Binh"
  },
  {
    id: 4,
    name: "Culture & History",
    slug: "culture-history",
    description: "Learn about the rich culture and history of Ninh Binh"
  }
];

export const MOCK_POSTS: Post[] = [
  {
    id: 1,
    title: "Top 5 Must-Visit Places in Ninh Binh",
    slug: "top-5-must-visit-places-ninh-binh",
    content: "Ninh Binh is home to some of Vietnam's most spectacular landscapes. Here are the top 5 places you must visit...\n\n1. **Tràng An Scenic Landscape Complex**: A UNESCO World Heritage site featuring stunning boat tours through limestone karsts, caves, and valleys.\n\n2. **Tam Cốc-Bích Động**: Often called 'Halong Bay on land', this area offers beautiful boat rides through rice paddies and limestone mountains.\n\n3. **Bái Đính Temple**: The largest Buddhist temple complex in Vietnam with hundreds of statues and beautiful architecture.\n\n4. **Hoa Lư Ancient Capital**: Vietnam's capital during the 10th and 11th centuries, featuring historic temples dedicated to emperors.\n\n5. **Cúc Phương National Park**: Vietnam's first national park, home to diverse wildlife, ancient trees, and beautiful caves.",
    featured_image_url: "https://images.unsplash.com/photo-1528127269322-539801943592",
    category: MOCK_CATEGORIES[0],
    author: {
      id: 1,
      username: "admin"
    },
    created_at: "2023-08-15T09:00:00Z",
    updated_at: "2023-08-15T09:00:00Z"
  },
  {
    id: 2,
    title: "Ninh Binh Cuisine: What to Eat During Your Visit",
    slug: "ninh-binh-cuisine-what-to-eat",
    content: "Ninh Binh offers a variety of delicious local dishes that you shouldn't miss during your visit...\n\n1. **Cơm Cháy Ninh Bình (Crispy Rice)**: A specialty of Ninh Binh, this dish features crispy rice topped with a savory meat sauce.\n\n2. **Thịt Dê (Goat Meat)**: Ninh Binh is famous for its goat meat, prepared in various ways - grilled, stir-fried, or in soup.\n\n3. **Ốc Núi (Mountain Snails)**: A local delicacy, these snails are collected from limestone mountains and prepared with lemongrass and chili.\n\n4. **Nem Yên Mạc (Yen Mac Spring Rolls)**: Special spring rolls from Yen Mac village known for their crispy texture and flavorful filling.\n\n5. **Rượu Kim Sơn (Kim Son Wine)**: A traditional rice wine from the Kim Son district, often enjoyed with local meals.",
    featured_image_url: "https://images.unsplash.com/photo-1529563021893-ea8a0413435b",
    category: MOCK_CATEGORIES[2],
    author: {
      id: 1,
      username: "admin"
    },
    created_at: "2023-09-10T14:30:00Z",
    updated_at: "2023-09-10T14:30:00Z"
  },
  {
    id: 3,
    title: "Best Time to Visit Ninh Binh: Seasonal Guide",
    slug: "best-time-visit-ninh-binh-seasonal-guide",
    content: "Planning a trip to Ninh Binh? Here's what you need to know about the best seasons to visit...\n\n**Spring (February to April)**\nThis is widely considered the best time to visit Ninh Binh. The weather is mild, and the rice fields turn a vibrant green. If you visit during late April, you'll see the rice paddies at their most beautiful stage before harvest.\n\n**Summer (May to August)**\nSummer brings hot and humid weather with occasional heavy rainfall. While the landscapes remain lush and green, be prepared for temperatures that can reach 35°C (95°F) and sudden downpours.\n\n**Autumn (September to November)**\nAnother excellent time to visit Ninh Binh. The weather becomes more pleasant with cooler temperatures and less rainfall. The rice fields turn golden during the harvest season in early autumn, creating stunning photo opportunities.\n\n**Winter (December to January)**\nWinters in Ninh Binh are cool and dry, with temperatures that can drop to around 15°C (59°F). While not as picturesque as spring or autumn, the clear skies and fewer tourists make it a good time for those who prefer a quieter experience.",
    featured_image_url: "https://images.unsplash.com/photo-1470004914212-05527e49370b",
    category: MOCK_CATEGORIES[1],
    author: {
      id: 1,
      username: "admin"
    },
    created_at: "2023-10-05T11:15:00Z",
    updated_at: "2023-10-05T11:15:00Z"
  },
  {
    id: 4,
    title: "The Ancient Capitals of Vietnam: Hoa Lu's Historical Significance",
    slug: "ancient-capitals-vietnam-hoa-lu-historical-significance",
    content: "Discover the rich history of Hoa Lu, Vietnam's first capital city located in Ninh Binh province...\n\nHoa Lu served as the capital of Vietnam from 968 to 1009 CE, during the Dinh and early Le dynasties. Nestled among limestone mountains, the site was chosen for its natural defenses against invaders.\n\n**The Dinh Dynasty (968-980)**\nEmperor Dinh Bo Linh (also known as Dinh Tien Hoang) established the Dinh dynasty after reunifying the country following years of civil war. He declared independence from China and named the country Dai Co Viet (Great Viet).\n\n**The Early Le Dynasty (980-1009)**\nAfter Emperor Dinh Bo Linh's assassination in 979, General Le Hoan took the throne and established the Early Le Dynasty. He successfully repelled an invasion from the Song Dynasty of China, further solidifying Vietnam's independence.\n\n**Historical Landmarks in Hoa Lu**\nToday, visitors to Hoa Lu can explore two main temples:\n\n1. **Dinh Tien Hoang Temple**: Dedicated to Emperor Dinh Bo Linh, featuring traditional architecture and intricate carvings.\n\n2. **Le Dai Hanh Temple**: Honoring Emperor Le Hoan, located just a short walk from the Dinh Temple.\n\nWhile the original palaces and structures of the ancient capital no longer exist, these temples built in the 17th century preserve the memory of Vietnam's early kings and offer insights into the country's feudal past.",
    featured_image_url: "https://images.unsplash.com/photo-1606994772854-a5fc1bdcf160",
    category: MOCK_CATEGORIES[3],
    author: {
      id: 1,
      username: "admin"
    },
    created_at: "2023-11-20T16:45:00Z",
    updated_at: "2023-11-20T16:45:00Z"
  }
];