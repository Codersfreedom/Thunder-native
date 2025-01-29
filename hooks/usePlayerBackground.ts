import { colors } from "@/constants/tokens";
import { useEffect, useState } from "react";
import { getColors } from "react-native-image-colors";
import {
  AndroidImageColors,
  IOSImageColors,
  WebImageColors,
} from "react-native-image-colors/build/types";

export const usePlayerBackground = (imageUrl: string) => {
  const [imageColors, setImageColors] = useState<
    AndroidImageColors | WebImageColors | IOSImageColors | null
  >(null);

  useEffect(() => {
    if (!imageUrl) {
      console.warn("Invalid imageUrl provided");
      return;
    }
    getColors(imageUrl, {
      fallback: colors.background,
      cache: true,
      key: imageUrl,
    })
      .then((colors) => {
        if (colors && colors.platform === "android") {
          setImageColors(colors as AndroidImageColors);
        } else if (colors && colors.platform === "ios") {
          setImageColors(colors as IOSImageColors);
        } else if (colors && colors.platform === "web") {
          setImageColors(colors as WebImageColors);
        } else {
          console.warn("getColors did not return valid iOS colors");
        }
      })
      .catch((error) => {
        console.error("Failed to get image colors:", error);
      });
  }, [imageUrl]);

  return { imageColors };
};
