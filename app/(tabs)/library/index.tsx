import AlbumCard from "@/components/AlbumCard";
import { ThemedText } from "@/components/ThemedText";
import { VStack } from "@/components/ui/vstack";

import { ScrollView } from "react-native-gesture-handler";

const index = () => {
  return (
    <ScrollView className="dark:bg-dark-background mt-16 ">
      {/* Favorites section */}
      <VStack space="md" className="mt-10 p-2">
        <ThemedText type="subtitle" className="px-3">
          Favorites
        </ThemedText>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
        </ScrollView>
      </VStack>
      {/* Albums section */}
      <VStack space="md" className="mt-2 p-2">
        <ThemedText type="subtitle" className="px-3">
          Saved albums
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
          Saved playlists
        </ThemedText>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
        </ScrollView>
      </VStack>
    </ScrollView>
  );
};

export default index;
