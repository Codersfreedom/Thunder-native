export interface Song {
  _id: string;
  songId: string;
  title: string;
  artists: {
    primary: Artist[];
  };
  artistId: string;
  imageUrl: string;
  audioUrl: string;
  releaseYear: string;
  duration: number;
  albumId: string;
}

export interface Artist {
  id: string;
  name: string;
  role: string;
  image: { quality: string; url: string }[];
}
export interface Album {
  _id: string;
  albumId: string;
  title: string;
  imageUrl: string;
  artists: {
    primary: [
      {
        id: string;
        name: string;
      }
    ];
    all: any[];
    featured: any[];
  };
  releaseYear: string;
  songs: Song[];
}
export interface SearchedSong {
  albums: {
    results: [
      {
        id: string;
        title: string;
        image: [{ quality: string; url: string }];
        artist: string;
      }
    ];
  };
  artists: {
    results: [
      {
        id: string;
        title: string;
        image: [{ quality: string; url: string }];
        type: string;
        description: string;
      }
    ];
  };
  playlists: {
    results: [
      {
        id: string;
        title: string;
        type: string;
        image: [{ quality: string; url: string }];
      }
    ];
  };
  songs: {
    results: [
      {
        id: string;
        title: string;
        singers: string;
        image: [{ quality: string; url: string }];
      }
    ];
  };
  topQuery: {
    results: [
      {
        id: string;
        title: string;
        image: [{ quality: string; url: string }];
        type: string;
      }
    ];
  };
}
