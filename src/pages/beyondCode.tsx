import React, { useEffect, useState } from 'react';
import { Code, Coffee, Camera } from 'lucide-react';

const PHOTOGRAPHY_SITE = 'https://your-photography-website.com';
const SPOTIFY_PROFILE = 'https://open.spotify.com/user/your-spotify-username';

type SpotifyTrack = {
  name: string;
  artists: string;
  image: string;
  url: string;
};

type SpotifyData = {
  artist: string;
  song: string;
  image?: string;
  url?: string;
};

// Function to fetch actual Spotify data from your API
async function fetchSpotifyData(): Promise<SpotifyData> {
  try {
    const response = await fetch('/api/spotify');
    
    if (!response.ok) {
      throw new Error('Failed to fetch Spotify data');
    }
    
    const tracks: SpotifyTrack[] = await response.json();
    
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

// Spotify logo SVG component
const SpotifyLogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const BeyondCode = () => {
  const [spotifyData, setSpotifyData] = useState<SpotifyData | null>(null);
  const [loading, setLoading] = useState(true);

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

  const cards = [
    {
      Icon: Code,
      label: 'Coding',
      desc: 'Building innovative web applications',
      onClick: null,
      bgColor: 'from-blue-500 to-blue-700',
    },
    {
      Icon: Coffee,
      label: 'Coffee',
      desc: 'Exploring different brewing methods',
      onClick: null,
      bgColor: 'from-amber-600 to-amber-800',
    },
    {
      Icon: SpotifyLogo,
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
      Icon: Camera,
      label: 'Photography',
      desc: 'Explore my photo gallery',
      onClick: () => window.open(PHOTOGRAPHY_SITE, '_blank'),
      bgColor: 'from-purple-500 to-purple-700',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
          Beyond Code
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map(({ Icon, label, desc, onClick, bgColor, isSpotify }) => (
            <div
              key={label}
              onClick={onClick || undefined}
              className={`group bg-white p-6 rounded-2xl flex items-center space-x-4 shadow-md hover:shadow-xl transition-all duration-300 ${
                onClick ? 'hover:cursor-pointer hover:scale-105' : ''
              }`}
            >
              <div className="flex-shrink-0">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${
                    bgColor || 'from-indigo-600 to-purple-600'
                  } rounded-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{label}</h3>
                <p className={`text-gray-600 ${isSpotify && spotifyData ? 'text-sm' : ''}`}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondCode;