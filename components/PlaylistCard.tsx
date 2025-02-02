import { Image, View } from "react-native";
import React from "react";
import { Card } from "./ui/card";
import { Heading } from "./ui/heading";
import { VStack } from "./ui/vstack";
import { ThemedText } from "./ThemedText";
import { Link } from "expo-router";
import { Playlist } from "@/types";

type SectionGridProps = {
  playlist: Playlist;
  isLoading: boolean;
};
const PlaylistCard = ({ playlist, isLoading }: SectionGridProps) => {
  return (
    <Card size="sm" variant="ghost" className="p-2 rounded-lg !max-w-xs  m-0">
      <Link
        href={`../${playlist.albumId == null ? "playlist" : "album"}/${
          playlist.albumId == null ? playlist.playlistId : playlist.albumId
        }`}
      >
        <View>
          <Image
            source={{
              uri: `${playlist.imageUrl}`,
            }}
            className="mb-1  w-36  rounded-md aspect-[263/240]"
            alt={playlist.playlistName}
          />
        </View>

        <VStack className="truncate w-32 ">
          <View className="w-32 h-14 truncate">
            <Heading>{playlist.playlistName}</Heading>
          </View>
          <View className="w-full h-6">
            <ThemedText
              type="subtitle"
              className="text-sm font-normal mb-2 text-typography-700"
            >
              {playlist.artist.map((artist) => artist.name).join(", ")}
            </ThemedText>
          </View>
        </VStack>
      </Link>
    </Card>
  );
};

export default PlaylistCard;
