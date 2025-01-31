import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import { EllipsisVerticalIcon } from "lucide-react-native";
import { Skeleton, SkeletonText } from "../ui/skeleton";
import { Song } from "@/types";
import { formatDuration } from "@/helpers";

const AlbumItem = ({ isLoading, song }: { isLoading: boolean; song: Song }) => {
  return (
    <TouchableOpacity className="flex flex-row gap-5 justify-between items-center p-2 rounded-xl  mb-1 ">
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
              width: 50,
              height: 40,
              objectFit: "cover",
              borderRadius: 10,
            }}
          />
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
                {song.artists.primary.map((artist) => artist.name).join(", ")}
              </ThemedText>
              {"●"}
              <ThemedText className="text-xs">
                {formatDuration(song.duration)}
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
