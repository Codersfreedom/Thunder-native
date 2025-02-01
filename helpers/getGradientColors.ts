import { colors } from "@/constants/tokens";
import { Platform } from "react-native";
import { ImageColorsResult } from "react-native-image-colors";

export const getGradientColors = (imageColors: ImageColorsResult | null) => {
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
