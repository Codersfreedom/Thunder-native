import AlbumCard from "@/components/AlbumCard";
import EmptyLibrary from "@/components/EmptyLibrary";
import { ThemedText } from "@/components/ThemedText";
import { VStack } from "@/components/ui/vstack";
import useUserStore from "@/store/useUserStore";

import { ScrollView } from "react-native-gesture-handler";

const index = () => {
  const { currentUser } = useUserStore();
  if (!currentUser) return <EmptyLibrary />;
  return (
    <ScrollView className="dark:bg-dark-background mt-16 ">
      {/* Favorites section */}
      <VStack space="md" className="mt-10 p-2">
        <ThemedText type="subtitle" className="px-3">
          Favorites
        </ThemedText>
        <ScrollView>
          {/* <AlbumCard />
          <AlbumCard />
          <AlbumCard /> */}
        </ScrollView>
      </VStack>
      {/* Albums section */}
      <VStack space="md" className="mt-2 p-2">
        <ThemedText type="subtitle" className="px-3">
          Saved albums
        </ThemedText>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {/* <AlbumCard />
          <AlbumCard />
          <AlbumCard /> */}
        </ScrollView>
      </VStack>
      {/* Playlists section */}
      <VStack space="md" className="mt-2 p-2">
        <ThemedText type="subtitle" className="px-3">
          Saved playlists
        </ThemedText>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {/* <AlbumCard />
          <AlbumCard />
          <AlbumCard /> */}
        </ScrollView>
      </VStack>
    </ScrollView>
  );
};

export default index;
