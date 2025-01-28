export interface Song {
  _id: string;
  songId: string;
  title: string;
  artists: {
    primary: Artist[];
  };
  // artistId: string;
  imageUrl: string;
  audioUrl: string;
  // releaseYear: string;
  duration: number;
  // albumId: string;
}

export interface Artist {
  id: string;
  name: string;
  role: string;
  image: { quality: string; url: string }[];
}
