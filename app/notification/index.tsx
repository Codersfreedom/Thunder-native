import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Notification from "@/components/notification/Notification";

const index = () => {
  return (
    <ScrollView className="h-screen dark:bg-dark-background p-3 mt-16">
      <Notification />
      <Notification />
      <Notification />
    </ScrollView>
  );
};

export default index;
