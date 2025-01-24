import { Image, View } from "react-native";
import React from "react";
import { Card } from "./ui/card";
import { Heading } from "./ui/heading";
import { VStack } from "./ui/vstack";
import { ThemedText } from "./ThemedText";

const AlbumCard = () => {
  return (
    <Card size="sm" variant="ghost" className="p-2 rounded-lg !max-w-xs  m-0">
      <View>
        <Image
          source={{
            uri: "https://gluestack.github.io/public-blog-video-assets/yoga.png",
          }}
          className="mb-1  w-36  rounded-md aspect-[263/240]"
          alt="image"
        />
      </View>

      <VStack className="truncate w-32 ">
        <View className="w-32 h-14 truncate">
          <Heading>The Power of Positive Thinking</Heading>
        </View>
        <View className="w-full h-6">
          <ThemedText
            type="subtitle"
            className="text-sm font-normal mb-2 text-typography-700"
          >
            May 15, 2023
          </ThemedText>
        </View>
      </VStack>
    </Card>
  );
};

export default AlbumCard;
