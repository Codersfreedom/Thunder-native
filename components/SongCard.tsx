import { Image, View } from "react-native";
import React from "react";
import { Card } from "./ui/card";
import { Heading } from "./ui/heading";
import { VStack } from "./ui/vstack";
import { Fab, FabIcon } from "./ui/fab";
import { PlayIcon } from "lucide-react-native";
import { ThemedText } from "./ThemedText";

const SongCard = () => {
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
        <Fab
          size="md"
          placement="bottom right"
          className="bg-green-500 hover:bg-green-700 active:bg-green-800"
        >
          <FabIcon as={PlayIcon} color="black" />
        </Fab>
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

export default SongCard;
