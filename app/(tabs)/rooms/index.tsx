import React from "react";
import { VStack } from "@/components/ui/vstack";
import { ScrollView } from "react-native-gesture-handler";
import JoinedRoom from "../../../components/rooms/JoinedRoom";
import PublicRoom from "../../../components/rooms/PublicRoom";

const index = () => {
  return (
    <VStack space="xl" className="mt-16 dark:bg-dark-background h-screen">
      {/* Public rooms section */}
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        className="min-h-36 px-3 "
      >
        <PublicRoom />
        <PublicRoom />
        <PublicRoom />
        <PublicRoom />
        <PublicRoom />
        <PublicRoom />
      </ScrollView>
      {/* Joined rooms section */}
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
