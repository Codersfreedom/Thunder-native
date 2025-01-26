import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Card } from "@/components/ui/card";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { ThemedText } from "@/components/ThemedText";
import { VStack } from "@/components/ui/vstack";
import { Button, ButtonText } from "@/components/ui/button";

const PublicRoom = () => {
  return (
    <Card size="md" variant="outline" className="rounded-2xl mr-2  ">
      <VStack space="xs" className="items-center !h-28 ">
        <Avatar size="md">
          <AvatarFallbackText>RM</AvatarFallbackText>
          <AvatarImage source={{ uri: "" }} />
        </Avatar>
        <ThemedText type="defaultSemiBold">Lofi-time</ThemedText>
        <Button
          size="xs"
          variant="outline"
          className="rounded-lg mt-2 hover:bg-hover-background "
        >
          <ButtonText>Join</ButtonText>
        </Button>
      </VStack>
    </Card>
  );
};

export default PublicRoom;
