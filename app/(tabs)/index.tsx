import AlbumCard from "@/components/AlbumCard";
import SongCard from "@/components/SongCard";
import { ThemedText } from "@/components/ThemedText";
import { VStack } from "@/components/ui/vstack";

import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <ScrollView className="dark:bg-dark-background mt-16 ">
      {/* Recently played section */}
      <VStack space="md" className="mt-20 p-2">
        <ThemedText type="subtitle" className="px-3">
          Recently Played
        </ThemedText>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <SongCard />
          <SongCard />
          <SongCard />
        </ScrollView>
      </VStack>
      {/* Trending section */}
      <VStack space="md" className="mt-2 p-2">
        <ThemedText type="subtitle" className="px-3">
          Trending
        </ThemedText>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
        </ScrollView>
      </VStack>
      {/* Playlists section */}
      <VStack space="md" className="mt-2 p-2">
        <ThemedText type="subtitle" className="px-3">
          Playlists
        </ThemedText>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
        </ScrollView>
      </VStack>
    </ScrollView>
  );
}
