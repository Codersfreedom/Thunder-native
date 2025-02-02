import {
  View,
  TouchableOpacity,
  Image,
  ViewProps,
  StyleSheet,
} from "react-native";
import React from "react";
import {
  useActiveTrack,
  useIsPlaying,
  usePlaybackState,
} from "react-native-track-player";
import { PlayPauseButton, SkipToNextButton } from "./PlayerControls";
import { useRouter } from "expo-router";
import { MovingText } from "./useMovingText";
import { LinearGradient } from "expo-linear-gradient";
import { usePlayerBackground } from "@/hooks/usePlayerBackground";
import { getGradientColors } from "@/helpers/getGradientColors";

const FloatingPlayer = ({ style }: ViewProps) => {
  const unknownTrackImageUri = require("../../assets/images/unknown_track.png");
  const activeTrack = useActiveTrack();
  const { imageColors } = usePlayerBackground(
    activeTrack?.artwork ?? unknownTrackImageUri
  );
  const router = useRouter();
  if (!activeTrack) return null;

  return (
    <TouchableOpacity
      onPress={() => router.navigate("/player")}
      activeOpacity={0.9}
      style={[{}, style]}
    >
      <LinearGradient
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          padding: 8,
          borderRadius: 12,
          paddingVertical: 10,
        }}
        colors={getGradientColors(imageColors)}
      >
        <Image
          source={{ uri: activeTrack?.artwork ?? unknownTrackImageUri }}
          className="w-10 h-10 rounded-xl"
        />
        <View className="flex-1 overflow-hidden ml-2">
          <MovingText
            text={activeTrack?.title ?? ""}
            animationThreshold={25}
            style={styles.trackTitle}
          />
          <MovingText
            text={activeTrack?.artist ?? ""}
            animationThreshold={25}
            style={styles.trackArtist}
          />
        </View>
        <View className="flex flex-row items-center gap-5 mr-4 pl-4">
          <PlayPauseButton iconSize={24} />

          <SkipToNextButton iconSize={24} />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default FloatingPlayer;

const styles = StyleSheet.create({
  trackTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
    paddingLeft: 10,
  },
  trackArtist: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
    paddingLeft: 8,
  },
});
