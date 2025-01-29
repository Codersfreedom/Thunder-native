import { colors } from "@/constants/tokens";
import { useTrackPlayerVolume } from "@/hooks/useTrackPlayerVolume";
import { utilsStyles } from "@/styles";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import { View, ViewProps } from "react-native";
import { Slider } from "react-native-awesome-slider";
import { useSharedValue } from "react-native-reanimated";

export const PlayerVolumeBar = ({ style }: ViewProps) => {
  const { volume, updateVolume } = useTrackPlayerVolume();

  const progress = useSharedValue(0);
  const min = useSharedValue(0);
  const max = useSharedValue(1);

  useEffect(() => {
    progress.value = volume ?? 0;
  }, [volume]);

  return (
    <View style={style}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons
          name="volume-low"
          size={20}
          color={colors.icon}
          style={{ opacity: 0.8 }}
        />

        <View style={{ flex: 1, flexDirection: "row", paddingHorizontal: 10 }}>
          <Slider
            progress={progress}
            minimumValue={min}
            containerStyle={utilsStyles.slider}
            onValueChange={async (value) => {
              await updateVolume(value);
            }}
            renderBubble={() => null}
            theme={{
              maximumTrackTintColor: colors.maximumTrackTintColor,
              minimumTrackTintColor: colors.minimumTrackTintColor,
            }}
            thumbWidth={15}
            maximumValue={max}
          />
        </View>

        <Ionicons
          name="volume-high"
          size={20}
          color={colors.icon}
          style={{ opacity: 0.8 }}
        />
      </View>
    </View>
  );
};
