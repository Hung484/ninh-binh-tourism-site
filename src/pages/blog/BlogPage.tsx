import { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import { getPosts, getCategories } from '../../api/services';
import type { Post, Category } from '../../types';
import BlogCard from '../../components/blog/BlogCard';

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch posts
        const postsResponse = await getPosts();
        if (postsResponse.error) {
          setError(postsResponse.error.message);
        } else {
          setPosts(postsResponse.data);
        }
        
        // Fetch categories
        const categoriesResponse = await getCategories();
        if (categoriesResponse.error) {
          console.error(categoriesResponse.error.message);
        } else {
          setCategories(categoriesResponse.data);
        }
      } catch (err) {
        setError('Failed to load blog data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter posts by selected category
  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category.slug === selectedCategory);

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-gray-100 py-12">
        <div className="container-custom">
          <h1 className="heading-lg mb-4">Ninh Binh Travel Blog</h1>
          <p className="text-gray-600 max-w-3xl">
            Discover travel tips, local insights, and stories about Ninh Binh's culture, history, and attractions through our collection of blog posts.
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="mb-10 overflow-x-auto pb-4">
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Categories
              </button>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    selectedCategory === category.slug
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts */}
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-8">{error}</div>
          ) : (
            <>
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No posts found in this category. Please try another category.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map(post => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8">
            Stay updated with our latest blog posts, travel tips, and special offers. Join our community of Ninh Binh enthusiasts.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-l-md focus:outline-none text-gray-800"
              required
            />
            <button
              type="submit"
              className="bg-secondary text-white px-4 py-2 rounded-r-md hover:bg-secondary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;