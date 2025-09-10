import { useState } from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { subscribeToNewsletter } from '../../api/services';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setSubscriptionStatus({
        success: false,
        message: 'Please enter a valid email address'
      });
      return;
    }
    
    setIsSubscribing(true);
    
    try {
      await subscribeToNewsletter(email);
      setSubscriptionStatus({
        success: true,
        message: 'Thank you for subscribing to our newsletter!'
      });
      setEmail('');
    } catch (error) {
      setSubscriptionStatus({
        success: false,
        message: 'Failed to subscribe. Please try again later.'
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ninh Binh Tourism</h3>
            <p className="text-gray-300 mb-4">
              Discover the hidden gems of Ninh Binh with our expertly guided tours and authentic experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white transition-colors">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors">
                <TwitterIcon />
              </a>
              <a href="https://youtube.com" className="text-gray-300 hover:text-white transition-colors">
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-gray-300 hover:text-white transition-colors">
                  Tours
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Tourism Street</p>
              <p>Ninh Binh, Vietnam</p>
              <p>Phone: +84 123 456 789</p>
              <p>Email: info@ninhbinhtourism.com</p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and travel tips.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full btn-secondary"
                disabled={isSubscribing}
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
              {subscriptionStatus && (
                <p className={`text-sm ${subscriptionStatus.success ? 'text-green-400' : 'text-red-400'}`}>
                  {subscriptionStatus.message}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ninh Binh Tourism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;