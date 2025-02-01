import AlbumCard from "@/components/AlbumCard";
import SongCard from "@/components/SongCard";
import { ThemedText } from "@/components/ThemedText";
import { VStack } from "@/components/ui/vstack";
import { FlatList, ScrollView, View } from "react-native";

import { Album, Song } from "@/types";
import useMusicStore from "@/store/useMusicStore";
import { useEffect } from "react";

export default function HomeScreen() {
  const {
    isLoading,
    madeForYouAlbums,
    trending,
    featured,
    fetchMadeForYouAlbums,
    fetchTrendingSongs,
    fetchFeaturedSongs,
  } = useMusicStore();

  useEffect(() => {
    if (madeForYouAlbums.length <= 0 || trending.length <= 0) {
      fetchMadeForYouAlbums();
      fetchTrendingSongs();
      fetchFeaturedSongs();
    }
  }, [fetchMadeForYouAlbums, fetchTrendingSongs]);

  return (
    <ScrollView className="dark:bg-dark-background mt-16 ">
      {/* Recently played section */}
      <VStack space="md" className=" p-2">
        <View className="w-full flex flex-row justify-between items-center pr-2">
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

        <ScrollView>
          {/* Song card component */}
          {
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item: Song) => item._id.toString()}
              data={featured}
              renderItem={({ item: Song }) => (
                <SongCard song={Song} isLoading={isLoading} />
              )}
            />
          }
        </ScrollView>
      </VStack>
      {/* Trending section */}
      <VStack space="md" className="mt-2 p-2">
        <View className="w-full flex flex-row justify-between items-center pr-2">
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
        <ScrollView>
          {
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item: Song) => item._id.toString()}
              data={trending}
              renderItem={({ item: Song }) => (
                <SongCard song={Song} isLoading={isLoading} />
              )}
            />
          }
        </ScrollView>
      </VStack>
      {/* Albums section */}
      <VStack space="md" className="mt-2 p-2">
        <View className="w-full flex flex-row justify-between items-center pr-2">
          <ThemedText type="subtitle" className="px-3">
            Albums
          </ThemedText>
          <ThemedText
            type="link"
            className="hover:bg-hover-background p-2 rounded-3xl"
          >
            See all
          </ThemedText>
        </View>
        <ScrollView>
          {
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item: Album) => item._id.toString()}
              data={madeForYouAlbums}
              renderItem={({ item: Album }) => (
                <AlbumCard album={Album} isLoading={isLoading} />
              )}
            />
          }
        </ScrollView>
      </VStack>
    </ScrollView>
  );
}
