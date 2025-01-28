import { Image, View } from "react-native";
import React from "react";
import { Card } from "./ui/card";
import { Heading } from "./ui/heading";
import { VStack } from "./ui/vstack";
import { Fab, FabIcon } from "./ui/fab";
import { PauseIcon, PlayIcon } from "lucide-react-native";
import { ThemedText } from "./ThemedText";
import { Song } from "../types/index";
import TrackPlayer, {
  Track,
  useActiveTrack,
  useIsPlaying,
} from "react-native-track-player";
import PlayButton from "./songs/PlayButton";

const SongCard = ({ song }: { song: Song }) => {
  const isPlaying = useIsPlaying();

  return (
    <Card size="sm" variant="ghost" className="p-2 rounded-lg !max-w-xs  m-0">
      <View>
        <Image
          source={{
            uri: song.imageUrl,
          }}
          className="mb-1  w-36  rounded-md aspect-[263/240]"
          alt="image"
        />
        <PlayButton song={song} />
      </View>

      <VStack className=" w-36 ">
        <View className="w-full h-7 truncate">
          <Heading size="sm">{song.title}</Heading>
        </View>
        <View className="w-full h-6 truncate">
          <ThemedText
            type="subtitle"
            className="text-sm font-normal mb-2 text-typography-700"
          >
            {song.artists.primary.map((artist) => artist.name).join(" ,")}
          </ThemedText>
        </View>
      </VStack>
    </Card>
  );
};

export default SongCard;
