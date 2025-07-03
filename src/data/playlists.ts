export interface Track {
  number: number;
  title: string;
  artist: string;
  duration: string;
}

export interface Playlist {
  id: string;
  name: string;
  description?: string;
  image: string;
  spotifyUrl: string;
  tracks: Track[];
}

export const playlists: Playlist[] = [
  {
    id: 'playlist-1',
    name: 'Chill Vibes',
    description: 'Laid back tunes for focused work.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
    spotifyUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1E35jNF0oJLl0K?si=DbgU7blBRC2bDpjo4X6udw',
    tracks: [
      { number: 1, title: 'Night Owl', artist: 'Galimatias', duration: '3:40' },
      { number: 2, title: 'Weightless', artist: 'Marconi Union', duration: '8:00' },
      { number: 3, title: 'Early Morning', artist: 'Odesza', duration: '4:20' }
    ]
  },
  {
    id: 'playlist-2',
    name: 'Coding Beats',
    description: 'My go-to mix for coding and chill vibes.',
    image: 'https://images.unsplash.com/photo-1464375117522-1311f9e43ad1?auto=format&fit=crop&w=400&q=80',
    spotifyUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1E375Te0Pn6m1F?si=xzaEe3BiRYCWZPmQtCd3OQ',
    tracks: [
      { number: 1, title: 'Sunset Lover', artist: 'Petit Biscuit', duration: '3:55' },
      { number: 2, title: 'Clouds', artist: 'Elderbrook', duration: '3:47' },
      { number: 3, title: 'Numb', artist: 'Elderbrook', duration: '3:58' }
    ]
  },
  {
    id: 'playlist-3',
    name: 'Lo-Fi Focus',
    description: 'Beats to relax/study to.',
    image: 'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=400&q=80',
    spotifyUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1E36AbCEJr5vgF?si=op46Yf-HRO2rxMX7gYGq-A',
    tracks: [
      { number: 1, title: 'Snowman', artist: 'WYS', duration: '2:34' },
      { number: 2, title: 'Dreams', artist: 'Joakim Karud', duration: '3:45' },
      { number: 3, title: 'By The Window', artist: 'Sworn', duration: '2:51' }
    ]
  },
  {
    id: 'playlist-4',
    name: 'Deep Concentration',
    description: 'Ambient textures for deep work.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    spotifyUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1E38Z5EtlUOGk3?si=eQv45GPdTkupo5CqDdX-nQ',
    tracks: [
      { number: 1, title: 'Atoms', artist: 'Nils Frahm', duration: '4:49' },
      { number: 2, title: 'Open Eye Signal', artist: 'Jon Hopkins', duration: '7:35' },
      { number: 3, title: 'Pieces', artist: 'Olafur Arnalds', duration: '3:45' }
    ]
  },
  {
    id: 'playlist-5',
    name: 'Upbeat Energy',
    description: 'Keep the momentum going.',
    image: 'https://images.unsplash.com/photo-1518972559570-0b436aa68d0a?auto=format&fit=crop&w=400&q=80',
    spotifyUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1E39KJaSXRGBG1?si=HqiEhcdSQ3G6rcOcII8mjg',
    tracks: [
      { number: 1, title: 'Firestone', artist: 'Kygo', duration: '4:33' },
      { number: 2, title: 'Titanium', artist: 'David Guetta', duration: '4:05' },
      { number: 3, title: 'Runaway', artist: 'Galantis', duration: '3:47' }
    ]
  },
  {
    id: 'playlist-6',
    name: 'Weekend Grooves',
    description: 'Feel-good tracks for the weekend.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
    spotifyUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1E37YxSmLZQDW1?si=QpLQWtBdQrCshca1ytwh0g',
    tracks: [
      { number: 1, title: 'Treasure', artist: 'Bruno Mars', duration: '2:58' },
      { number: 2, title: 'Get Lucky', artist: 'Daft Punk', duration: '4:08' },
      { number: 3, title: 'Uptown Funk', artist: 'Mark Ronson', duration: '4:30' }
    ]
  }
];
