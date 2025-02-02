import { View, Text } from "react-native";
import React from "react";
import { Music2Icon } from "lucide-react-native";
import { Button } from "./ui/button";
import { useRouter } from "expo-router";

const EmptyLibrary = () => {
  const router = useRouter();
  return (
    <View className="flex flex-1 dark:bg-dark-background justify-center items-center gap-4 p-5 ">
      <Music2Icon className="animate-bounce w-10 h-10 " />

      <Text className="text-white text-base">
        Library songs will appeare here, login now !
      </Text>
      <Button
        onPress={() => router.navigate("/auth/Login")}
        variant="outline"
        size="xl"
        className="rounded-xl w-full p-3"
      >
        Login
      </Button>
    </View>
  );
};

export default EmptyLibrary;
