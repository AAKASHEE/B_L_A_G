import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function getSpotifyTracks() {
  const token = process.env.SPOTIFY_ACCESS_TOKEN;

  if (!token) {
    console.error('SPOTIFY_ACCESS_TOKEN not found in environment variables');
    return [];
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
      image: track.album.images[0]?.url || '', // Fixed typo: albumP -> album
      url: track.external_urls.spotify,
    }));

    console.log('Successfully fetched top tracks');
    return topTracks;
  } catch (err) {
    console.error('Error fetching Spotify tracks:', err.response?.data || err.message);
    return [];
  }
}

// Export the function for use in your API route
export default getSpotifyTracks;