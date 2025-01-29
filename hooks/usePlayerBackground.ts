import { colors } from "@/constants/tokens";
import { useEffect, useState } from "react";
import { getColors } from "react-native-image-colors";
import { IOSImageColors } from "react-native-image-colors/build/types";

export const usePlayerBackground = (imageUrl: string) => {
  const [imageColors, setImageColors] = useState<IOSImageColors | null>(null);

  useEffect(() => {
    console.log(imageUrl);
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
        if (colors && colors.platform === "ios") {
          setImageColors(colors as IOSImageColors);
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
