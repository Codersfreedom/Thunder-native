import React from "react";
import { VStack } from "@/components/ui/vstack";
import { ScrollView } from "react-native-gesture-handler";
import JoinedRoom from "../../../components/rooms/JoinedRoom";
import PublicRoom from "../../../components/rooms/PublicRoom";
import { ThemedText } from "@/components/ThemedText";

const index = () => {
  return (
    <VStack space="xl" className="mt-16 dark:bg-dark-background h-screen">
      <ThemedText type="subtitle" className="pl-4">
        Public rooms
      </ThemedText>
      {/* Public rooms section */}
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        className=" px-3 "
      >
        <PublicRoom />
        <PublicRoom />
        <PublicRoom />
        <PublicRoom />
        <PublicRoom />
        <PublicRoom />
      </ScrollView>
      {/* Joined rooms section */}
      <ThemedText type="subtitle" className="pl-4">
        Joined rooms
      </ThemedText>
      <ScrollView className="p-3 ">
        <JoinedRoom />
        <JoinedRoom />
        <JoinedRoom />
        <JoinedRoom />
        <JoinedRoom />
        <JoinedRoom />
        <JoinedRoom />
        <JoinedRoom />
      </ScrollView>
    </VStack>
  );
};

export default index;
