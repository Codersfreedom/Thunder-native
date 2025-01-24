import { View, Text } from "react-native";
import React from "react";

import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { Link, useRouter } from "expo-router";
import { User } from "lucide-react-native";
import { ThemedText } from "@/components/ThemedText";
import { VStack } from "@/components/ui/vstack";

const index = () => {
  const router = useRouter();
  return (
    <View className="p-10 flex flex-1 justify-between gap-5 max-w-md mx-auto">
      <View>
        <ThemedText type="title" className="text-center font-bold">
          Let you in
        </ThemedText>
      </View>
      <VStack space="xl" className="mt-48">
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
          <Button
            onPress={() => router.navigate("/auth/Login")}
            className=" bg-green-500 p-4 rounded-3xl text-center font-semibold text-lg"
          >
            <ButtonText className="text-gray-900">
              Sign in with password
            </ButtonText>
          </Button>
          <Text className="text-zinc-200 text-center mt-4">
            Don't have account?{" "}
            <Link
              className="text-green-500 font-semibold"
              href={"/auth/Signup"}
            >
              Singup
            </Link>{" "}
          </Text>
        </View>
      </VStack>
    </View>
  );
};

export default index;
