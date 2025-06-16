import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function getSpotifyTracks() {
  const token = process.env.SPOTIFY_ACCESS_TOKEN;

  if (!token) {
    console.error('SPOTIFY_ACCESS_TOKEN not found in environment variables');
    return;
  }

  try {
    console.log('Fetching Spotify tracks...');
    
    const response = await axios.get('https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=5', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const topTracks = response.data.items.map(track => ({
      name: track.name,
      artists: track.artists.map(a => a.name).join(', '),
      image: track.albumP.images[0]?.url || '',
      url: track.external_urls.spotify,
    }));

    console.log('Top Tracks:', JSON.stringify(topTracks, null, 2));
  } catch (err) {
    console.error('Error fetching Spotify tracks:', err.response?.data || err.message);
  }
}

// Run the function
getSpotifyTracks();