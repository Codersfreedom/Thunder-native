import { Image } from "react-native";
import React from "react";
import { Card } from "../ui/card";
import { HStack } from "../ui/hstack";
import { VStack } from "../ui/vstack";
import { ThemedText } from "../ThemedText";
import { Link } from "expo-router";

const SearchResultCard = () => {
  return (
    <Card size="sm" variant="outline" className="rounded-2xl mt-5">
      <Link href={"/auth"}>
        <HStack space="md" className="items-center">
          <Image
            source={{
              uri: "https://gluestack.github.io/public-blog-video-assets/yoga.png",
            }}
            className="w-24 h-28 rounded-xl"
          />
          <VStack space="md" className="items-start h-full">
            <ThemedText type="subtitle">Enna sona</ThemedText>
            <ThemedText type="default">Arijit singh</ThemedText>
          </VStack>
        </HStack>
      </Link>
    </Card>
  );
};

export default SearchResultCard;
