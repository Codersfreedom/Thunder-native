import React from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import NotFound from "@/components/search/NotFound";
import DefaultScreen from "@/components/search/DefaultScreen";
import useMusicStore from "@/store/useMusicStore";
import { View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import TopResultCard from "@/components/search/TopResultCard";
import SongResultCard from "@/components/search/SongResultCard";
import AlbumResultCard from "@/components/search/AlbumResultCard";
import PlaylistResultCard from "@/components/search/PlaylistResultCard";
import ArtistResultCard from "@/components/search/ArtistResultCard";

const index = () => {
  const { searchedSongs, searchLoading } = useMusicStore();
  console.log(searchedSongs);
  return (
    <ScrollView className="h-screen  dark:bg-dark-background mt-16  items-center ">
      {/* Search result section */}
      <View className="w-screen p-4 ">
        {!searchLoading && searchedSongs && (
          <>
            <ThemedText type="subtitle" className="pl-4  mb-2">
              Top result:{" "}
            </ThemedText>
            <FlatList
              data={searchedSongs.topQuery.results}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TopResultCard result={item} isLoading={searchLoading} />
              )}
            />
          </>
        )}
      </View>

      {/* Song results */}

      <View className="w-screen p-4 ">
        {!searchLoading && searchedSongs && (
          <>
            <ThemedText type="subtitle" className="pl-4 mb-2">
              Songs:{" "}
            </ThemedText>
            <FlatList
              data={searchedSongs.songs.results}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <SongResultCard result={item} isLoading={searchLoading} />
              )}
            />
          </>
        )}
      </View>

      {/* Album results */}
      <View className="w-screen p-4 ">
        {!searchLoading && searchedSongs && (
          <>
            <ThemedText type="subtitle" className="pl-4 mb-2">
              Albums:{" "}
            </ThemedText>
            <FlatList
              data={searchedSongs.albums.results}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <AlbumResultCard result={item} isLoading={searchLoading} />
              )}
            />
          </>
        )}
      </View>

      {/* Playlist result */}

      <View className="w-screen p-4 ">
        {!searchLoading && searchedSongs && (
          <>
            <ThemedText type="subtitle" className="pl-4 mb-2">
              Playlists:{" "}
            </ThemedText>
            <FlatList
              data={searchedSongs.playlists.results}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <PlaylistResultCard result={item} isLoading={searchLoading} />
              )}
            />
          </>
        )}
      </View>

      {/* Artist results */}

      <View className="w-screen p-4 ">
        {!searchLoading && searchedSongs && (
          <>
            <ThemedText type="subtitle" className="pl-4 mb-2">
              Artists:{" "}
            </ThemedText>
            <FlatList
              data={searchedSongs.artists.results}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <ArtistResultCard result={item} isLoading={searchLoading} />
              )}
            />
          </>
        )}
      </View>

      {/* Not found screen */}
      {/* {!searchLoading && !searchedSongs && <NotFound />} */}

      {/* Default screen */}
      {!searchLoading && !searchedSongs && <DefaultScreen />}
    </ScrollView>
  );
};

export default index;
