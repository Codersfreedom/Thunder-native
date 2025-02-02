import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import {
  AudioLines,
  EllipsisVerticalIcon,
  PlayIcon,
} from "lucide-react-native";
import { Skeleton, SkeletonText } from "../ui/skeleton";
import { Artist, Song } from "@/types";
import { formatDuration } from "@/helpers";
import { useActiveTrack, useIsPlaying } from "react-native-track-player";

const AlbumItem = ({
  isLoading,
  song,
  handleTrackChange,
}: {
  isLoading: boolean;
  song: Song;

  handleTrackChange: (track: Song) => void;
}) => {
  const isActive = useActiveTrack()?.url == song.audioUrl;
  const { playing } = useIsPlaying();
  return (
    <TouchableOpacity
      onPress={() => handleTrackChange(song)}
      className="flex flex-row gap-5 justify-between items-center p-2 rounded-xl  mb-1 "
    >
      <View>
        {isLoading ? (
          <Skeleton variant="rounded" className="w-12 h-10" />
        ) : (
          <Image
            source={{
              uri: `${song.imageUrl}`,
            }}
            alt=""
            style={{
              width: 56,
              height: 40,
              objectFit: "cover",
              borderRadius: 10,
            }}
          />
        )}
        {isActive && (
          <View
            className="absolute top-0 left-0 h-10 w-14 rounded-lg flex flex-row items-center justify-center 
             bg-gray-600/80"
          >
            {playing ? (
              <AudioLines size={25} className=" animate-pulse  " />
            ) : (
              <PlayIcon size={25} />
            )}
          </View>
        )}
      </View>
      <View className="flex flex-1 gap-1 ">
        {isLoading ? (
          <SkeletonText className="w-28 h-4" />
        ) : (
          <ThemedText className="text-sm text-white font-semibold line-clamp-1 truncate">
            {song.title}
          </ThemedText>
        )}
        <View className="flex flex-row items-center gap-2">
          {isLoading ? (
            <SkeletonText className="w-24 h-4" />
          ) : (
            <>
              <ThemedText className="text-xs truncate">
                {song.artists.primary
                  .map((artist: Artist) => artist.name)
                  .join(", ")}
              </ThemedText>
              {"●"}
              <ThemedText className="text-xs">
                {formatDuration(song.duration ?? 0)}
              </ThemedText>
            </>
          )}
        </View>
      </View>
      <Pressable
        onPressIn={(e) => e.stopPropagation()}
        className="w-fit p-2 rounded-full hover:bg-hover-background"
      >
        <EllipsisVerticalIcon size={18} />
      </Pressable>
    </TouchableOpacity>
  );
};

export default AlbumItem;
