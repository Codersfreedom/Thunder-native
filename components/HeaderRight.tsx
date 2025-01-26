import React from "react";
import { BellIcon, SearchIcon } from "lucide-react-native";
import { HStack } from "./ui/hstack";
import { useRouter } from "expo-router";
import { Pressable } from "react-native-gesture-handler";

const HeaderRight = () => {
  const router = useRouter();
  return (
    <HStack space="md" className="mr-5">
      <Pressable
        onPress={() => {
          router.navigate("../search");
        }}
      >
        <SearchIcon className="rounded-full hover:bg-hover-background p-1 h-8 w-12" />
      </Pressable>
      <Pressable onPress={() => router.navigate("../notification")}>
        <BellIcon className="rounded-full hover:bg-hover-background p-1 h-8 w-12" />
      </Pressable>
    </HStack>
  );
};

export default HeaderRight;
