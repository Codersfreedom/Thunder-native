import { View, Text } from "react-native";
import React from "react";
import { Card } from "@/components/ui/card";
import { HStack } from "@/components/ui/hstack";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";

const JoinedRoom = () => {
  return (
    <Card
      variant="outline"
      className="w-full p-2 rounded-2xl mb-3 hover:bg-hover-background"
    >
      <Link href={"/"}>
        <HStack space="xl" className="items-center">
          <Avatar>
            <AvatarFallbackText>RM</AvatarFallbackText>
            <AvatarImage source={{ uri: "" }} />
          </Avatar>
          <ThemedText type="subtitle">Chill-time</ThemedText>
        </HStack>
      </Link>
    </Card>
  );
};

export default JoinedRoom;
