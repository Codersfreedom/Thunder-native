import AlbumCard from "@/components/AlbumCard";
import SongCard from "@/components/SongCard";
import { ThemedText } from "@/components/ThemedText";
import { VStack } from "@/components/ui/vstack";
import { View } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <ScrollView className="dark:bg-dark-background mt-16 ">
      {/* Recently played section */}
      <VStack space="md" className="mt-20 p-2">
        <View className="w-full flex flex-row justify-between pr-2">
          <ThemedText type="subtitle" className="px-3">
            Recently Played
          </ThemedText>
          <ThemedText
            type="link"
            className="hover:bg-hover-background p-2 rounded-3xl"
          >
            See all
          </ThemedText>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <SongCard />
          <SongCard />
          <SongCard />
        </ScrollView>
      </VStack>
      {/* Trending section */}
      <VStack space="md" className="mt-2 p-2">
        <View className="w-full flex flex-row justify-between pr-2">
          <ThemedText type="subtitle" className="px-3">
            Trending
          </ThemedText>
          <ThemedText
            type="link"
            className="hover:bg-hover-background p-2 rounded-3xl"
          >
            See all
          </ThemedText>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
        </ScrollView>
      </VStack>
      {/* Playlists section */}
      <VStack space="md" className="mt-2 p-2">
        <View className="w-full flex flex-row justify-between pr-2">
          <ThemedText type="subtitle" className="px-3">
            Playlists
          </ThemedText>
          <ThemedText
            type="link"
            className="hover:bg-hover-background p-2 rounded-3xl"
          >
            See all
          </ThemedText>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
        </ScrollView>
      </VStack>
    </ScrollView>
  );
}
