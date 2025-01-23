import { View, Image } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <SafeAreaProvider>
      <View className="flex w-full justify-start items-center mt-28 ">
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
    </SafeAreaProvider>
  );
};

export default _layout;
