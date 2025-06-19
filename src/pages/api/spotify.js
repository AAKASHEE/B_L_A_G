import getSpotifyTracks from '../../spotify';

export default async function handler(req, res) {
  try {
    const tracks = await getSpotifyTracks();
    res.status(200).json(tracks);
  } catch (error) {
    console.error('API route error:', error);
    res.status(500).json({ error: 'Failed to fetch Spotify data' });
  }
}