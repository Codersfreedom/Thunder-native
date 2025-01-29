import { Pause, Play, SkipForwardIcon } from "lucide-react-native";
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import TrackPlayer, { useIsPlaying } from "react-native-track-player";

type PlayerControlsProps = {
  style?: ViewStyle;
};

type PlayerButtonProps = {
  style?: ViewStyle;
  iconSize?: number;
};

export const PlayerControls = ({ style }: PlayerControlsProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        <SkipToPreviousButton />

        <PlayPauseButton />

        <SkipToNextButton />
      </View>
    </View>
  );
};

export const PlayPauseButton = ({ style, iconSize }: PlayerButtonProps) => {
  const { playing } = useIsPlaying();

  return (
    <View style={[{ height: iconSize }, style]}>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={playing ? TrackPlayer.pause : TrackPlayer.play}
      >
        {playing ? <Pause size={iconSize} /> : <Play size={iconSize} />}
      </TouchableOpacity>
    </View>
  );
};

export const SkipToNextButton = ({ iconSize = 30 }: PlayerButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => TrackPlayer.skipToNext()}
    >
      <SkipForwardIcon size={iconSize} />
    </TouchableOpacity>
  );
};
export const SkipToPreviousButton = ({ iconSize = 30 }: PlayerButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => TrackPlayer.skipToPrevious()}
    >
      <SkipForwardIcon size={iconSize} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
