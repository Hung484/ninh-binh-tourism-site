import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { getPostBySlug, getPosts } from '../../api/services';
import type { Post } from '../../types';

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      setLoading(true);
      try {
        const response = await getPostBySlug(slug);
        
        if (response.error) {
          setError(response.error.message);
        } else {
          setPost(response.data);
          
          // Fetch related posts from the same category
          const allPostsResponse = await getPosts();
          if (!allPostsResponse.error) {
            const related = allPostsResponse.data
              .filter(p => p.slug !== slug && p.category.id === response.data.category.id)
              .slice(0, 3);
            setRelatedPosts(related);
          }
        }
      } catch (err) {
        setError('Failed to load post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // Format the date to a readable string
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
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

  if (error || !post) {
    return (
      <Layout>
        <div className="container-custom py-20 text-center">
          <h2 className="heading-lg text-red-500 mb-4">Error</h2>
          <p className="text-gray-600 mb-8">{error || 'Post not found'}</p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Featured Image Banner */}
      <div className="relative h-80 md:h-96 lg:h-[500px]">
        <img 
          src={`${post.featured_image_url}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80`}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="container-custom pb-12">
            <h1 className="heading-xl text-white">{post.title}</h1>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-8">
              {/* Post Metadata */}
              <div className="flex items-center text-gray-500 text-sm mb-8">
                <span>{formatDate(post.created_at)}</span>
                <span className="mx-2">•</span>
                <Link to={`/blog?category=${post.category.slug}`} className="text-primary hover:underline">
                  {post.category.name}
                </Link>
                <span className="mx-2">•</span>
                <span>By {post.author.username}</span>
              </div>
              
              {/* Post Content */}
              <div className="prose prose-lg max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {/* Post Tags */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  <Link to={`/blog?category=${post.category.slug}`} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
                    {post.category.name}
                  </Link>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    Ninh Binh
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    Vietnam
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    Travel
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Author Box */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="font-bold text-lg mb-4">About the Author</h3>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt={post.author.username}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">{post.author.username}</h4>
                  <p className="text-gray-600 text-sm">
                    Travel enthusiast and local expert in Ninh Binh tourism.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-4">Related Posts</h3>
                <div className="space-y-4">
                  {relatedPosts.map(relatedPost => (
                    <div key={relatedPost.id} className="flex gap-4">
                      <div className="w-20 h-20 flex-shrink-0 rounded overflow-hidden">
                        <img 
                          src={`${relatedPost.featured_image_url}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80`}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <Link 
                          to={`/blog/${relatedPost.slug}`}
                          className="font-medium hover:text-primary transition-colors line-clamp-2"
                        >
                          {relatedPost.title}
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">
                          {formatDate(relatedPost.created_at)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetailPage;