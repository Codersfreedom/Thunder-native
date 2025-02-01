import { Song } from "@/types";
import { Track } from "react-native-track-player";

export function songToTrack(song: Song): Track {
  return {
    id: song.songId,
    url: song.audioUrl,
    title: song.title,
    artist: song.artists.primary.map((a) => a.name).join(", "),
    artwork: song.imageUrl,
  };
}
