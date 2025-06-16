import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight} from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

const Home = () => {
  const featuredPosts = blogPosts.slice(0, 3);
  const recentPosts = blogPosts.slice(3, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-lime-400 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-20 -left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              SHARE THE
              <span className="block bg-gradient-to-r from-lime-400 to-yellow-400 bg-clip-text text-transparent">
                SPOTLIGHT
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Welcome to my personal blog where I share insights on technology, life experiences, 
              and thoughts that matter. Join me on this journey of discovery and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="inline-flex items-center px-8 py-4 bg-lime-400 text-gray-900 font-semibold rounded-xl hover:bg-lime-300 transition-all duration-200 transform hover:scale-105 group"
              >
                Explore Articles
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-200 transform hover:scale-105"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>

        {/* Geometric Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{
          clipPath: 'polygon(0 100%, 100% 0, 100% 100%)'
        }}></div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover my latest thoughts and insights on various topics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <BlogCard 
                key={post.id} 
                post={post} 
                featured={true}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Recent Posts
              </h2>
              <p className="text-lg text-gray-600">
                Stay updated with my latest writings
              </p>
            </div>
            <Link
              to="/blog"
              className="hidden sm:inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold group"
            >
              View All Posts
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <BlogCard 
                key={post.id} 
                post={post}
                delay={index * 100}
              />
            ))}
          </div>

          <div className="text-center mt-12 sm:hidden">
            <Link
              to="/blog"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold group"
            >
              View All Posts
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Stay in the Loop
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Get notified when I publish new articles and share exclusive insights
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-l-xl sm:rounded-r-none rounded-r-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            />
            <button className="px-8 py-4 bg-lime-400 text-gray-900 font-semibold rounded-r-xl sm:rounded-l-none rounded-l-xl hover:bg-lime-300 transition-colors duration-200 mt-4 sm:mt-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;