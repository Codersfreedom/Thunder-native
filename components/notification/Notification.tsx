import { View, Text } from "react-native";
import React from "react";
import { Card } from "../ui/card";
import { HStack } from "../ui/hstack";
import { Avatar, AvatarFallbackText, AvatarImage } from "../ui/avatar";
import { ThemedText } from "../ThemedText";
import { VStack } from "../ui/vstack";
import { Button, ButtonIcon } from "../ui/button";
import { CheckIcon, XIcon } from "lucide-react-native";

const Notification = () => {
  return (
    <Card size="sm" variant="outline" className="rounded-2xl mb-2 ">
      <HStack space="sm" className="h-full">
        <HStack space="sm" style={{ alignItems: "center" }}>
          <Avatar size="sm">
            <AvatarFallbackText>RM</AvatarFallbackText>
            <AvatarImage source={{ uri: "" }} />
          </Avatar>
          <VStack className="">
            <Text className="text-lg dark:text-zinc-200 font-bold truncate">
              Rakesh Manna
            </Text>
            <ThemedText type="defaultSemiBold" className="truncate">
              Bedardeya
            </ThemedText>
          </VStack>
        </HStack>

        <HStack space="sm" className="h-full" style={{ alignItems: "center" }}>
          <Button
            variant="outline"
            size="sm"
            className="rounded-xl bg-gray-200/10 data-[]:active:bg-hover-background "
          >
            <ButtonIcon as={CheckIcon} color="green" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-xl  bg-gray-200/10 data-[]:active:bg-hover-background  "
          >
            <ButtonIcon as={XIcon} color="red" />
          </Button>
        </HStack>
      </HStack>
    </Card>
  );
};

export default Notification;
