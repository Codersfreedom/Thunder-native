import {
  View,
  Platform,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useActiveTrack } from "react-native-track-player";
import { usePlayerBackground } from "@/hooks/usePlayerBackground";
import { ImageColorsResult } from "react-native-image-colors";
import { colors, fontSize, screenPadding } from "@/constants/tokens";
import { LinearGradient } from "expo-linear-gradient";
import { defaultStyles } from "@/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { EllipsisVertical, HeartIcon, Shuffle } from "lucide-react-native";

import { ScrollView } from "react-native-gesture-handler";
import AlbumItem from "@/components/album/AlbumItem";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
import useMusicStore from "@/store/useMusicStore";

const AlbumScreen = () => {
  const { id }: { id: string } = useLocalSearchParams();

  const unknownTrackImageUri = require("../../assets/images/unknown_track.png");
  const activeTrack = useActiveTrack();

  const { bottom } = useSafeAreaInsets();
  const { isLoading, fetchAlbumById, currentAlbum } = useMusicStore();

  const getGradientColors = (imageColors: ImageColorsResult | null) => {
    if (!imageColors) {
      // Default colors if imageColors is not available
      return [
        colors.maximumTrackTintColor,
        colors.minimumTrackTintColor,
        colors.background,
      ] as const;
    }

    if (Platform.OS === "web" && "darkMuted" in imageColors) {
      return [
        imageColors.darkMuted ?? colors.maximumTrackTintColor,
        imageColors.darkVibrant ?? colors.minimumTrackTintColor,
        imageColors.lightMuted ?? colors.background,
      ] as const;
    }

    if (Platform.OS === "android" && "vibrant" in imageColors) {
      return [
        imageColors.vibrant ?? colors.minimumTrackTintColor,
        imageColors.muted ?? colors.maximumTrackTintColor,
      ] as const;
    }

    if (Platform.OS === "ios" && "primary" in imageColors) {
      return [
        imageColors.primary ?? colors.minimumTrackTintColor,
        imageColors.secondary ?? colors.maximumTrackTintColor,
      ] as const;
    }

    return [
      colors.maximumTrackTintColor,
      colors.minimumTrackTintColor,
      colors.background,
    ] as const; // Fallback
  };

  useEffect(() => {
    if (id) {
      useMusicStore.setState({ currentAlbum: null });
      fetchAlbumById(id);
    }
  }, [id, fetchAlbumById]);

  const { imageColors } = usePlayerBackground(
    currentAlbum?.imageUrl ?? unknownTrackImageUri
  );

  //   console.log("Current album: ", currentAlbum);
  return (
    <LinearGradient style={{ flex: 1 }} colors={getGradientColors(imageColors)}>
      <ScrollView style={styles.overlayContainer} className="mt-16">
        <View
          style={{
            flex: 1,

            display: "flex",
            flexDirection: "row",
            gap: 15,
            marginTop: 10,
            marginBottom: bottom,
          }}
        >
          <View style={styles.artworkImageContainer}>
            {isLoading ? (
              <Skeleton variant="sharp" />
            ) : (
              <Image
                source={{
                  uri: currentAlbum?.imageUrl ?? unknownTrackImageUri,
                }}
                resizeMode="cover"
                style={styles.artworkImage}
              />
            )}
          </View>
          {/* Track details */}
          <View style={styles.trackTitleContainer}>
            {isLoading ? (
              <SkeletonText _lines={1} className="w-20 h-4" />
            ) : (
              <ThemedText style={styles.trackTitleText}>
                {currentAlbum?.title ?? "Test title"}
              </ThemedText>
            )}
            {/* Track artists */}
            {isLoading ? (
              <SkeletonText className="w-16 h-4" />
            ) : (
              <ThemedText
                style={styles.trackArtistText}
                className="w-full max-h-12 truncate  "
              >
                {currentAlbum?.artists.primary
                  .map((artist) => artist.name)
                  .join(", ") ?? "Test title"}
              </ThemedText>
            )}
            {/* Songs count */}
            {isLoading ? (
              <SkeletonText className="w-12 h-4" />
            ) : (
              <ThemedText type="default">
                {currentAlbum?.songs.length ?? "50"} {"Songs"}
              </ThemedText>
            )}
            {/* 3dot menu */}
            <View className="flex flex-row gap-3 items-center   w-fit">
              <Pressable className="hover:bg-hover-background w-fit rounded-full p-2">
                <HeartIcon size={18} />
              </Pressable>
              <Pressable className="hover:bg-hover-background w-fit rounded-full p-2">
                <Shuffle size={18} />
              </Pressable>
              <Pressable className="hover:bg-hover-background w-fit rounded-full p-2 ">
                <EllipsisVertical size={18} />
              </Pressable>
            </View>
          </View>
        </View>
        {/* Song lists */}
        <View className="mt-10">
          {
            <FlatList
              key={currentAlbum?._id}
              data={currentAlbum?.songs}
              renderItem={({ item }) => (
                <AlbumItem isLoading={isLoading} song={item} />
              )}
            />
          }
        </View>
      </ScrollView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  overlayContainer: {
    ...defaultStyles.container,

    paddingHorizontal: screenPadding.horizontal,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  artworkImageContainer: {
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 11.0,
    flexDirection: "row",
    justifyContent: "center",
    height: "75%",
    width: "50%",
  },
  artworkImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 12,
  },
  trackTitleContainer: {
    marginTop: 15,
    flex: 1,
    overflow: "hidden",
    gap: 10,
    lineHeight: 15,
  },
  trackTitleText: {
    ...defaultStyles.text,
    fontSize: 22,
    fontWeight: "700",
  },
  trackArtistText: {
    ...defaultStyles.text,
    fontSize: fontSize.base,
    opacity: 0.8,
    maxWidth: "90%",
  },
});
export default AlbumScreen;
