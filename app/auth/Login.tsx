import { View } from "react-native";
import React from "react";
import { VStack } from "@/components/ui/vstack/index.web";
import { Heading } from "@/components/ui/heading";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";

import { FormControl } from "@/components/ui/form-control";
import {
  EyeIcon,
  EyeOffIcon,
  LockKeyholeIcon,
  Mail,
} from "lucide-react-native";
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { useRouter } from "expo-router";
import useAuthStore from "@/store/useAuthStore";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const { login } = useAuthStore();

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  const router = useRouter();

  return (
    <Center className="mt-10">
      <Heading className=" text-2xl text-center">Login</Heading>
      <FormControl className="p-4 mt-24">
        <VStack space="4xl">
          <VStack space="xs">
            <Input className="min-w-[250px] group rounded-xl">
              <InputIcon
                as={Mail}
                className="ml-2 group-focus-within:text-green-400"
              />
              <InputField
                type="text"
                placeholder="Email"
                onChange={(e: any) => setEmail(e.target.value)}
              />
            </Input>
          </VStack>
          <VStack space="xs">
            <Input className="text-center group rounded-xl  ">
              <InputIcon
                as={LockKeyholeIcon}
                className="ml-2 group-focus-within:text-green-400"
              />
              <InputField
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={(e: any) => setPassword(e.target.value)}
              />
              <InputSlot className="pr-3" onPress={handleState}>
                <InputIcon
                  as={showPassword ? EyeIcon : EyeOffIcon}
                  className="group-focus-within:text-green-400"
                />
              </InputSlot>
            </Input>
          </VStack>
          <Button
            onPress={() => login({ email, password })}
            className="ml-auto w-full rounded-3xl bg-green-500 hover:!bg-green-800"
          >
            <ButtonText className="text-typography-0 ">Login</ButtonText>
          </Button>
          {/* Divider section */}
          <View className="flex flex-row items-center justify-center gap-3">
            <Divider className="w-24" />
            <span className="text-zinc-200 font-medium">Or</span>
            <Divider className="w-24" />
          </View>

          <Button
            variant="outline"
            className="ml-auto w-full rounded-3xl hover:!bg-green-800"
            onPress={() => router.navigate("/auth/Signup")}
          >
            <ButtonText className=" text-zinc-300 ">Sign Up</ButtonText>
          </Button>
        </VStack>
      </FormControl>
    </Center>
  );
};

export default Login;
