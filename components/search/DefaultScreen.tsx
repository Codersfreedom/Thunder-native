import React from "react";
import { VStack } from "@/components/ui/vstack";
import { ThemedText } from "@/components/ThemedText";
import { SearchIcon } from "lucide-react-native";
import { View } from "react-native";

const DefaultScreen = () => {
  return (
    <VStack space="lg" className="relative items-center">
      <View className="filter drop-shadow-glow rounded-s-full rounded-t-full rounded-br-3xl  animate-pulse ">
        <SearchIcon className="w-24 h-24 text-emerald-400 " />
      </View>

      <VStack space="md" className="items-center">
        <ThemedText type="title">Search now</ThemedText>
        <ThemedText type="defaultSemiBold" className="text-center">
          Type something to search from millions of songs, albums & artists.
        </ThemedText>
      </VStack>
    </VStack>
  );
};

export default DefaultScreen;
