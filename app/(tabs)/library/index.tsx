import EmptyLibrary from "@/components/EmptyLibrary";
import PlaylistCard from "@/components/PlaylistCard";
import SongCard from "@/components/SongCard";
import { ThemedText } from "@/components/ThemedText";
import { VStack } from "@/components/ui/vstack";
import useUserStore from "@/store/useUserStore";
import { Playlist, Song } from "@/types";
import { Loader, View } from "lucide-react-native";
import { useEffect } from "react";

import { FlatList, ScrollView } from "react-native-gesture-handler";

const index = () => {
  const {
    isLoading,
    currentUser,
    fetchPlaylists,
    favoriteSongs,
    getFavoriteSongs,
    playlists,
    fetchingPlaylist,
  } = useUserStore();

  useEffect(() => {
    if (currentUser && !isLoading) {
      fetchPlaylists();
      getFavoriteSongs();
    }
  }, []);

  if (isLoading)
    return (
      <View className="flex flex-1 justify-center items-center dark:bg-dark-background">
        <Loader className="animate-spin h-4 w-4 text-white " />
      </View>
    );

  if (!currentUser) return <EmptyLibrary />;
  return (
    <ScrollView className="dark:bg-dark-background mt-7">
      {/* Favorites section */}
      <VStack space="md" className="mt-10 p-2">
        <ThemedText type="subtitle" className="px-3">
          Favorites
        </ThemedText>
        <ScrollView>
          {
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={favoriteSongs}
              keyExtractor={(item: Song) => item._id.toString()}
              renderItem={({ item: Song }) => (
                <SongCard song={Song} isLoading={fetchingPlaylist} />
              )}
            />
          }
        </ScrollView>
      </VStack>
      {/* Albums section */}
      <VStack space="md" className="mt-2 p-2">
        <ThemedText type="subtitle" className="px-3">
          Saved albums
        </ThemedText>
        <ScrollView>
          {
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={playlists.filter((playlist) => playlist.albumId != null)}
              keyExtractor={(item: Playlist) => item._id.toString()}
              renderItem={({ item: playlist }) => (
                <PlaylistCard
                  playlist={playlist}
                  isLoading={fetchingPlaylist}
                />
              )}
            />
          }
        </ScrollView>
      </VStack>
      {/* Playlists section */}
      <VStack space="md" className="mt-2 p-2 mb-16">
        <ThemedText type="subtitle" className="px-3">
          Saved playlists
        </ThemedText>
        <ScrollView>
          {
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={playlists.filter((playlist) => playlist.albumId == null)}
              keyExtractor={(item: Playlist) => item._id.toString()}
              renderItem={({ item: playlist }) => (
                <PlaylistCard
                  playlist={playlist}
                  isLoading={fetchingPlaylist}
                />
              )}
            />
          }
        </ScrollView>
      </VStack>
    </ScrollView>
  );
};

export default index;
