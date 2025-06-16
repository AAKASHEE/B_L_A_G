import React from 'react';
import { Twitter, Instagram, Linkedin, Github, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
  { icon: Twitter, href: 'https://x.com/AAKASHEEX', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/aakaas.he', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/aakashee/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/AAKASHEE', label: 'GitHub' },
  { icon: Mail, href: 'mailto:aakashpatra253@gmail.com', label: 'Email' },
];


  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">CODEX</h3>
            <p className="text-gray-400 leading-relaxed">
              Sharing thoughts, experiences, and insights on technology, life, and everything in between.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors duration-200">Latest Posts</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About Me</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200"></a></li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </a>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-3">Subscribe for updates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-indigo-600 text-white"
                />
                <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-r-lg transition-colors duration-200 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 CODEX. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;