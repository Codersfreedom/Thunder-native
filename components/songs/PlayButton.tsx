import React from "react";
import { Fab, FabIcon } from "../ui/fab";
import { Song } from "@/types";
import TrackPlayer, {
  Track,
  useActiveTrack,
  useIsPlaying,
} from "react-native-track-player";
import { PauseIcon, PlayIcon } from "lucide-react-native";

const PlayButton = ({ song }: { song: Song }) => {
  const { playing } = useIsPlaying();

  const currentTrack = useActiveTrack()?.title === song.title;

  const handlePlaySong = async (song: Song) => {
    if (!song) return;

    if (currentTrack) {
      return await TrackPlayer.play();
    }
    const track: Track = {
      id: song._id,
      url: song.audioUrl,
      title: song.title,
      artist: song.artists.primary.map((artist) => artist.name).join(", "),
      artwork: song.imageUrl,
    };

    await TrackPlayer.load(track);
    await TrackPlayer.play();
  };
  const handlePauseSong = async (song: Song) => {
    if (!song || !playing) return;

    await TrackPlayer.pause();
  };
  return (
    <>
      {currentTrack && playing ? (
        <Fab
          onPress={() => handlePauseSong(song)}
          size="md"
          placement="bottom right"
          className="bg-green-500 hover:bg-green-700 active:bg-green-800"
        >
          <FabIcon as={PauseIcon} color="black" />
        </Fab>
      ) : (
        <Fab
          onPress={() => handlePlaySong(song)}
          size="md"
          placement="bottom right"
          className="bg-green-500 hover:bg-green-700 active:bg-green-800"
        >
          <FabIcon as={PlayIcon} color="black" />
        </Fab>
      )}
    </>
  );
};

export default PlayButton;
