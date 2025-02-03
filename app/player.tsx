import { PlayerControls } from "@/components/songs/PlayerControls";
import { PlayerProgressBar } from "@/components/songs/PlayerProgressbar";
import { PlayerRepeatToggle } from "@/components/songs/PlayerRepeatToggle";
import { PlayerVolumeBar } from "@/components/songs/PlayerVolumeBar";
import { MovingText } from "@/components/songs/useMovingText";

import { colors, fontSize, screenPadding } from "@/constants/tokens";
import { getGradientColors } from "@/helpers/getGradientColors";
import { usePlayerBackground } from "@/hooks/usePlayerBackground";
import useUserStore from "@/store/useUserStore";

import { defaultStyles, utilsStyles } from "@/styles";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useActiveTrack } from "react-native-track-player";

const PlayerScreen = () => {
  const { addToFavorite, favoriteSongs } = useUserStore();
  const unknownTrackImageUri = require("../assets/images/unknown_track.png");
  const activeTrack = useActiveTrack();
  const { imageColors } = usePlayerBackground(
    activeTrack?.artwork ?? unknownTrackImageUri
  );

  const { top, bottom } = useSafeAreaInsets();

  // const { isFavorite, toggleFavorite } = useTrackPlayerFavorite()
  const handleAddToFavorite = () => {
    if (!activeTrack) return;
    addToFavorite(
      [""],
      activeTrack.artwork ?? "",
      activeTrack.url,
      activeTrack.album ?? "",
      activeTrack.artist ?? "",
      activeTrack.duration ?? 0,
      activeTrack.date ?? "",
      activeTrack.id,
      activeTrack.songId,
      activeTrack.title ?? "",
      "Favorites"
    );
  };

  let isFavorite: boolean = false;

  favoriteSongs.map((song) => {
    if (song?.songId == activeTrack?.songId) {
      isFavorite = true;
    }
  });
  console.log(isFavorite);
  if (!activeTrack) {
    return (
      <View style={[defaultStyles.container, { justifyContent: "center" }]}>
        <ActivityIndicator color={colors.icon} />
      </View>
    );
  }

  return (
    <LinearGradient style={{ flex: 1 }} colors={getGradientColors(imageColors)}>
      <View style={styles.overlayContainer}>
        <DismissPlayerSymbol />

        <View style={{ flex: 1, marginTop: top + 70, marginBottom: bottom }}>
          <View style={styles.artworkImageContainer}>
            <Image
              source={{
                uri: activeTrack.artwork ?? unknownTrackImageUri,
              }}
              resizeMode="cover"
              style={styles.artworkImage}
            />
          </View>

          <View style={{ flex: 1 }}>
            <View style={{ marginTop: "auto" }}>
              <View style={{ height: 60 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {/* Track title */}
                  <View style={styles.trackTitleContainer}>
                    <MovingText
                      text={activeTrack.title ?? ""}
                      animationThreshold={30}
                      style={styles.trackTitleText}
                    />
                  </View>

                  {/* Favorite button icon */}
                  <FontAwesome
                    name={isFavorite ? "heart" : "heart-o"}
                    size={20}
                    color={isFavorite ? colors.primary : colors.icon}
                    style={{ marginHorizontal: 14 }}
                    onPress={handleAddToFavorite}
                  />
                </View>

                {/* Track artist */}
                {activeTrack.artist && (
                  <Text
                    numberOfLines={1}
                    style={[styles.trackArtistText, { marginTop: 6 }]}
                  >
                    {activeTrack.artist}
                  </Text>
                )}
              </View>

              <PlayerProgressBar style={{ marginTop: 32 }} />

              <PlayerControls style={{ marginTop: 40 }} />
            </View>

            <PlayerVolumeBar style={{ marginTop: "auto", marginBottom: 30 }} />

            <View style={utilsStyles.centeredRow}>
              <PlayerRepeatToggle size={30} style={{ marginBottom: 6 }} />
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const DismissPlayerSymbol = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={{
        position: "absolute",
        top: top + 8,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <View
        accessible={false}
        style={{
          width: 50,
          height: 8,
          borderRadius: 8,
          backgroundColor: "#fff",
          opacity: 0.7,
        }}
      />
    </View>
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
    height: "45%",
  },
  artworkImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 12,
  },
  trackTitleContainer: {
    flex: 1,
    overflow: "hidden",
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

export default PlayerScreen;
