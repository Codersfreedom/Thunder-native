import { View } from "react-native";
import React from "react";
import { Pressable, ScrollView } from "react-native-gesture-handler";
import { VStack } from "@/components/ui/vstack";
import ProfileCard from "@/components/profile/ProfileCard";
import {
  ChevronRight,
  GlobeIcon,
  LogOutIcon,
  PaletteIcon,
} from "lucide-react-native";
import { ThemedText } from "@/components/ThemedText";
import ThemeSheet from "@/components/rooms/ThemeSheet";

const index = () => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(false);
  return (
    <ScrollView className="flex-1 dark:bg-dark-background p-2">
      <VStack space="2xl" className="mt-16">
        <ProfileCard />

        <VStack space="md">
          {/* Posts */}
          <Pressable className="flex flex-1 flex-row justify-between items-center p-3 hover:bg-hover-background rounded-2xl ">
            <View className="flex flex-row items-center gap-5">
              <GlobeIcon />
              <ThemedText type="subtitle">Posts</ThemedText>
            </View>
            <ChevronRight />
          </Pressable>

          {/* Change theme */}

          <Pressable
            onPress={() => setShowActionsheet(true)}
            className="flex flex-1 flex-row justify-between items-center p-3 hover:bg-hover-background rounded-2xl "
          >
            <View className="flex flex-row items-center gap-5">
              <PaletteIcon />
              <ThemedText type="subtitle">Theme mode</ThemedText>
            </View>
            <ChevronRight />
          </Pressable>

          {/* Logout */}
          <Pressable className="flex flex-1 flex-row justify-between items-center p-3 hover:bg-hover-background rounded-2xl ">
            <View className="flex flex-row items-center gap-5 text-green-500">
              <LogOutIcon />
              <ThemedText
                type="subtitle"
                lightColor="#22c55e"
                darkColor="#22c55e"
              >
                Log out
              </ThemedText>
            </View>
          </Pressable>
        </VStack>
      </VStack>
      <ThemeSheet showActionsheet={showActionsheet} handleClose={handleClose} />
    </ScrollView>
  );
};

export default index;
