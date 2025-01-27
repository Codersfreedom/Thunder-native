import { View, Text, TouchableOpacity, Image, ViewProps } from "react-native";
import React from "react";
import { useActiveTrack } from "react-native-track-player";
import { PlayPauseButton, SkipToNextButton } from "./PlayerControls";

const FloatingPlayer = ({ style }: ViewProps) => {
  const activeTrack = useActiveTrack();

  //   if (!activeTrack) return null;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#166534",
          padding: 8,
          borderRadius: 12,
          paddingVertical: 10,
        },
        style,
      ]}
    >
      <>
        <Image
          source={{ uri: activeTrack?.artwork }}
          className="w-10 h-10 rounded-xl"
        />
        <View className="flex-1 overflow-hidden ml-3">
          <Text className="text-lg font-semibold pl-3 dark:text-zinc-200">
            {activeTrack?.title}
          </Text>
          <Text className="text-base font-medium pl-3 dark:text-zinc-200">
            {activeTrack?.artist}
          </Text>
        </View>
        <View className="flex flex-row items-center gap-5 mr-4 pl-4">
          <PlayPauseButton iconSize={24} />
          <SkipToNextButton iconSize={24} />
        </View>
      </>
    </TouchableOpacity>
  );
};

export default FloatingPlayer;
