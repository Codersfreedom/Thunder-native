import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { Link } from "expo-router";
import { User } from "lucide-react-native";

const index = () => {
  return (
    <SafeAreaProvider>
      <View className="flex flex-1 w-full justify-start items-center mt-28 ">
        <View className="flex justify-center items-center">
          <Image
            source={require("../../assets/images/Thunder_logo.png")}
            style={{
              width: 70,
              height: 70,
            }}
          />
          <ThemedText className="text-2xl font-bold mt-4">
            Let you in
          </ThemedText>
        </View>
      </View>

      <View className="p-10 flex gap-5 max-w-md mx-auto">
        <Button
          variant="outline"
          className="p-4 rounded-3xl text-center font-semibold text-lg"
        >
          <ButtonIcon as={User} className="text-zinc-300" />
          <ButtonText className="text-zinc-300">
            Continue with Guest account
          </ButtonText>
        </Button>
        {/* Guest account section */}
        <View className="flex flex-row items-center justify-center gap-3">
          <Divider className="w-24" />
          <span className="text-zinc-200 font-medium">Or</span>
          <Divider className="w-24" />
        </View>
        {/* Sign in with password section */}
        <View>
          <Button className="text-zinc-300 bg-green-500 p-4 rounded-3xl text-center font-semibold text-lg">
            Sign in with password
          </Button>
          <Text className="text-zinc-200 text-center mt-4">
            Don't have account?{" "}
            <Link
              className="text-green-500 font-semibold"
              href={"/(tabs)/explore"}
            >
              Singup
            </Link>{" "}
          </Text>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default index;
