import { View } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <ScrollView>
      <View className="dark:bg-dark-background h-screen "></View>
    </ScrollView>
  );
}
