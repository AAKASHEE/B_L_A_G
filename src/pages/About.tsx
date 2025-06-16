import React, { useEffect, useState } from 'react';
import { Code, Coffee, Camera, MapPin, Mail, ExternalLink } from 'lucide-react';

const About = () => {
  type SpotifyData = {
    artist: string;
    song: string;
    image?: string;
    url?: string;
  } | null;

  const [spotifyData, setSpotifyData] = useState<SpotifyData>(null);
  const [loading, setLoading] = useState(true);

  const skills = [
    // Languages
    'Python', 'C++', 'Java', 'HTML5', 'CSS3', 'TypeScript', 'JavaScript', 'Golang',

    // Frameworks & Libraries
    'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'Electron',

    // Databases
    'MySQL', 'PostgreSQL', 'MongoDB',

    // Tools
    'Git', 'GitHub', 'Terminal', 'GitHub Actions',

    // Extras
    'Figma', 'Technical Writing'
  ];

  const PHOTOGRAPHY_SITE = 'https://snapxdart.vercel.app';
  const SPOTIFY_PROFILE = 'https://open.spotify.com/user/SIAAH';

  // Function to fetch actual Spotify data from your API
  async function fetchSpotifyData() {
    try {
      const response = await fetch('/api/spotify');
      
      if (!response.ok) {
        throw new Error('Failed to fetch Spotify data');
      }
      
      const tracks = await response.json();
      
      if (tracks && tracks.length > 0) {
        // Get a random track from the top 5
        const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
        
        return {
          artist: randomTrack.artists,
          song: randomTrack.name,
          image: randomTrack.image,
          url: randomTrack.url
        };
      }
      
      throw new Error('No tracks found');
    } catch (error) {
      console.error('Error fetching Spotify data:', error);
      
      // Fallback to mock data if API fails
      const mockData = [
        { artist: "Tame Impala", song: "The Less I Know The Better" },
        { artist: "Arctic Monkeys", song: "Do I Wanna Know?" },
        { artist: "Mac Miller", song: "Good News" },
        { artist: "The Weeknd", song: "Blinding Lights" },
        { artist: "Tyler, The Creator", song: "EARFQUAKE" }
      ];
      
      const randomData = mockData[Math.floor(Math.random() * mockData.length)];
      return randomData;
    }
  }

  // Enhanced 3D Code Icon
  const Code3D = ({ className }: { className?: string }) => (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 40 40" className="w-full h-full">
        <defs>
          <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <filter id="codeShadow">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>
        <rect x="6" y="8" width="28" height="20" rx="3" fill="url(#codeGrad)" filter="url(#codeShadow)"/>
        <rect x="4" y="6" width="28" height="20" rx="3" fill="#1e40af" opacity="0.8"/>
        <rect x="2" y="4" width="28" height="20" rx="3" fill="#3b82f6"/>
        <path d="M8 12 L12 16 L8 20" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="12" x2="22" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  );

  // Enhanced 3D Coffee Icon
  const Coffee3D = ({ className }: { className?: string }) => (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 40 40" className="w-full h-full">
        <defs>
          <linearGradient id="coffeeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <filter id="coffeeShadow">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>
        <ellipse cx="18" cy="32" rx="12" ry="3" fill="#92400e" opacity="0.6"/>
        <ellipse cx="16" cy="30" rx="12" ry="3" fill="#b45309" opacity="0.8"/>
        <rect x="6" y="12" width="20" height="18" rx="2" fill="url(#coffeeGrad)" filter="url(#coffeeShadow)"/>
        <rect x="8" y="14" width="16" height="14" rx="1" fill="#78350f"/>
        <path d="M26 16 Q30 16 30 20 Q30 24 26 24" stroke="#d97706" strokeWidth="2" fill="none"/>
        <path d="M12 8 Q12 6 14 6 Q16 6 16 8" stroke="#6b7280" strokeWidth="1.5" fill="none"/>
        <path d="M18 8 Q18 6 20 6 Q22 6 22 8" stroke="#6b7280" strokeWidth="1.5" fill="none"/>
      </svg>
    </div>
  );

  // Enhanced 3D Camera Icon
  const Camera3D = ({ className }: { className?: string }) => (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 40 40" className="w-full h-full">
        <defs>
          <linearGradient id="cameraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <filter id="cameraShadow">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>
        <rect x="6" y="14" width="28" height="18" rx="4" fill="url(#cameraGrad)" filter="url(#cameraShadow)"/>
        <rect x="4" y="12" width="28" height="18" rx="4" fill="#6d28d9" opacity="0.8"/>
        <rect x="2" y="10" width="28" height="18" rx="4" fill="#7c3aed"/>
        <rect x="14" y="6" width="8" height="4" rx="1" fill="#7c3aed"/>
        <circle cx="16" cy="19" r="6" fill="#1f2937" opacity="0.8"/>
        <circle cx="16" cy="19" r="4" fill="#374151"/>
        <circle cx="16" cy="19" r="2" fill="#4b5563"/>
        <rect x="26" y="14" width="2" height="2" rx="1" fill="#ef4444"/>
      </svg>
    </div>
  );

  // Enhanced 3D Spotify Icon
  const Spotify3D = ({ className }: { className?: string }) => (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 40 40" className="w-full h-full">
        <defs>
          <linearGradient id="spotifyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
          <filter id="spotifyShadow">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>
        <circle cx="22" cy="22" r="16" fill="#15803d" opacity="0.6"/>
        <circle cx="20" cy="20" r="16" fill="#16a34a" opacity="0.8" filter="url(#spotifyShadow)"/>
        <circle cx="20" cy="20" r="16" fill="url(#spotifyGrad)"/>
        <path d="M12 16 Q20 12 28 16" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M13 20 Q20 17 27 20" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M14 24 Q20 22 26 24" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    </div>
  );

  useEffect(() => {
    // Initial fetch
    fetchSpotifyData().then(data => {
      setSpotifyData(data);
      setLoading(false);
    }).catch(error => {
      console.error('Initial fetch failed:', error);
      setLoading(false);
    });

    // Fetch new data every 2 minutes (to respect API rate limits)
    const interval = setInterval(() => {
      fetchSpotifyData().then(data => {
        setSpotifyData(data);
      }).catch(error => {
        console.error('Interval fetch failed:', error);
      });
    }, 120000); // 2 minutes

    return () => clearInterval(interval);
  }, []);

  const beyondCodeCards = [
    {
      Icon: Code3D,
      label: 'Coding',
      desc: 'Building innovative web applications',
      onClick: null,
      bgColor: 'from-blue-500 to-blue-700',
    },
    {
      Icon: Coffee3D,
      label: 'Coffee',
      desc: 'Exploring different brewing methods',
      onClick: null,
      bgColor: 'from-amber-600 to-amber-800',
    },
    {
      Icon: Spotify3D,
      label: 'Spotify',
      desc: loading 
        ? 'Loading...' 
        : spotifyData 
          ? `${spotifyData.artist} • ${spotifyData.song}`
          : 'My current favorites',
      onClick: spotifyData?.url 
        ? () => window.open(spotifyData.url, '_blank')
        : () => window.open(SPOTIFY_PROFILE, '_blank'),
      bgColor: 'from-green-500 to-green-700',
      isSpotify: true,
    },
    {
      Icon: Camera3D,
      label: 'Photography',
      desc: 'Explore my photo gallery',
      onClick: () => window.open(PHOTOGRAPHY_SITE, '_blank'),
      bgColor: 'from-purple-500 to-purple-700',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .icon-container {
          perspective: 1000px;
        }
        
        .icon-3d {
          transform-style: preserve-3d;
          transition: all 0.3s ease;
        }
        
        .icon-3d:hover {
          transform: rotateY(15deg) rotateX(15deg) scale(1.1);
        }
      `}</style>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Hi, I'm AAKASHE
              </h1>
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                A passionate full-stack developer and technical writer based in Bengaluru. 
                I love creating beautiful, functional web applications and sharing knowledge 
                through writing and open-source contributions.
              </p>
              <div className="flex items-center text-indigo-200 mb-6">
                <MapPin className="w-5 h-5 mr-2" />
                Bengaluru, INDIA
              </div>
              <div className="flex space-x-4">
                <a
                  href="mailto:aakashpatra253@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-lime-400 text-gray-900 font-semibold rounded-xl hover:bg-lime-300 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </a>
                <a
                  href="src/public/img/IMG_2446.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-200"
                >
                  View Resume
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto animate-float">
                <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/10 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-lime-400 rounded-2xl flex items-center justify-center shadow-xl">
                  <Code className="w-12 h-12 text-gray-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
            My Story
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              My journey into technology began during college when I built my first website 
              for a local business. What started as a simple project turned into a passion 
              for creating digital experiences that solve real problems.
            </p>
            <p>
              Over the past 2 years, I've worked with my skills in competitive programming from established platforms,
              I believe in writing clean, maintainable code and creating user experiences
              that are both beautiful and functional.
            </p>
            <p>
              When I'm not coding, you'll find me exploring Bengaluru's coffee scene, 
              hiking in the Bay Area, or contributing to open-source projects. I'm also 
              passionate about capturing stories 📸 and sharing knowledge through 
              writing and speaking.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="bg-white p-4 rounded-xl text-center font-medium text-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 animate-fadeInUp border border-gray-100"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Code Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Beyond Code
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beyondCodeCards.map(({ Icon, label, desc, onClick, bgColor, isSpotify }, index) => (
              <div
                key={label}
                onClick={onClick || undefined}
                className={`text-center group animate-fadeInUp ${
                  onClick ? 'hover:cursor-pointer' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="icon-container mb-4">
                  <div className="w-20 h-20 mx-auto icon-3d">
                    <Icon className="w-full h-full" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {label}
                </h3>
                <p className={`text-gray-600 ${isSpotify && spotifyData ? 'text-sm' : ''}`}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, or just having 
            a chat about technology and ideas.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-lime-400 text-gray-900 font-semibold rounded-xl hover:bg-lime-300 transition-colors duration-200 transform hover:scale-105"
          >
            Start a Conversation
            <ExternalLink className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;