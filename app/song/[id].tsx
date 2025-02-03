import { View, StyleSheet, Image, Pressable } from "react-native";

import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import TrackPlayer from "react-native-track-player";
import { usePlayerBackground } from "@/hooks/usePlayerBackground";
import { fontSize, screenPadding } from "@/constants/tokens";
import { LinearGradient } from "expo-linear-gradient";
import { defaultStyles } from "@/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import {
  EllipsisVertical,
  HeartIcon,
  PlayCircleIcon,
} from "lucide-react-native";
import { ScrollView } from "react-native-gesture-handler";
import { getGradientColors } from "@/helpers/getGradientColors";
import useMusicStore from "@/store/useMusicStore";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
import AlbumItem from "@/components/album/AlbumItem";
import { songToTrack } from "@/helpers/SongToTrack";
import { Song } from "@/types";
import useUserStore from "@/store/useUserStore";

const SongScreen = () => {
  const { fetchSingle, isLoading, single } = useMusicStore();
  const { favoriteSongs, addToFavorite } = useUserStore();
  const unknownTrackImageUri = require("../../assets/images/unknown_track.png");
  const { bottom } = useSafeAreaInsets();
  const { id }: { id: string } = useLocalSearchParams();

  useEffect(() => {
    fetchSingle(id);
  }, [id, fetchSingle]);

  const { imageColors } = usePlayerBackground(
    single?.imageUrl ?? unknownTrackImageUri
  );
  const handleTrackChange = async (selectedTrack: Song) => {
    const trackToAdd = songToTrack(selectedTrack);

    await TrackPlayer.reset();

    // construct new queue
    await TrackPlayer.add(trackToAdd);

    await TrackPlayer.play();
  };
  const handlePlay = async () => {
    if (!single) return;
    const tracks = songToTrack(single);
    await TrackPlayer.reset();
    await TrackPlayer.add(tracks);
    await TrackPlayer.play();
  };

  const handleAddToFavorite = () => {
    if (!single) return;
    addToFavorite(
      single.artists.primary,
      single.imageUrl,
      single.audioUrl,
      single.albumId,
      single.artistId,
      single.duration,
      single.releaseYear,
      single._id,
      single.songId,
      single.title,
      "Favorites"
    );
  };

  let isAlreadyfavorite: boolean = false;

  favoriteSongs.map((song) => {
    if (song?.songId == id) {
      isAlreadyfavorite = true;
    }
  });
  return (
    <LinearGradient style={{ flex: 1 }} colors={getGradientColors(imageColors)}>
      <ScrollView style={styles.overlayContainer} className="my-16">
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
                  uri: single?.imageUrl ?? unknownTrackImageUri,
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
                {single?.title ?? "Test title"}
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
                {single?.artists.primary
                  .map((artist) => artist.name)
                  .join(", ") ?? "Test title"}
              </ThemedText>
            )}
            {/* Release year */}
            {isLoading ? (
              <SkeletonText className="w-12 h-4" />
            ) : (
              <ThemedText type="default">{single?.releaseYear}</ThemedText>
            )}
            {/* 3dot menu */}
            <View className="flex flex-row gap-1 items-center   w-fit">
              <Pressable
                onPress={handleAddToFavorite}
                className="hover:bg-hover-background w-fit rounded-full p-2"
              >
                <HeartIcon
                  size={18}
                  color={isAlreadyfavorite ? "green" : "white"}
                  fill={isAlreadyfavorite ? "green" : ""}
                />
              </Pressable>
              <Pressable
                onPress={handlePlay}
                className="hover:bg-hover-background w-fit rounded-full p-2"
              >
                <PlayCircleIcon size={18} />
              </Pressable>

              <Pressable className="hover:bg-hover-background w-fit rounded-full p-2 ">
                <EllipsisVertical size={18} />
              </Pressable>
            </View>
          </View>
        </View>
        {/* Song lists */}
        <View className="mt-5">
          {single && (
            <AlbumItem
              isLoading={isLoading}
              song={single}
              handleTrackChange={handleTrackChange}
            />
          )}
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
    height: "90%",
    width: "55%",
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
  trackPlayingIconIndicator: {
    position: "absolute",
    top: 18,
    left: 16,
    width: 16,
    height: 16,
  },
  trackPausedIndicator: {
    position: "absolute",
    top: 14,
    left: 14,
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
export default SongScreen;
