import { View, Image } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Redirect, Stack } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import useUserStore from "@/store/useUserStore";

const _layout = () => {
  const { currentUser } = useUserStore();

  if (currentUser) return <Redirect href={"/"} />;

  return (
    <SafeAreaProvider>
      <ScrollView className="dark:bg-dark-background">
        <View className="flex w-full justify-start items-center mt-20">
          <View className="flex justify-center items-center">
            <Image
              source={require("../../assets/images/Thunder_logo.png")}
              style={{
                width: 70,
                height: 70,
              }}
            />
          </View>
        </View>

        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Signup"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default _layout;
