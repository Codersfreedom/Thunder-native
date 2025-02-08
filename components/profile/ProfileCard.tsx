import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { ThemedText } from "../ThemedText";
import useUserStore from "@/store/useUserStore";

const ProfileCard = () => {
  const { currentUser } = useUserStore();
  return (
    <Card
      variant="elevated"
      size="sm"
      className="p-6 rounded-3xl max-w-[360px] m-3 bg-gray-600/20 "
    >
      <Box className="flex-row">
        <Avatar className="mr-4">
          <AvatarFallbackText>JD</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: `${currentUser?.image}`,
            }}
          />
        </Avatar>
        <VStack>
          <Heading size="md" className="mb-1">
            {currentUser?.name}
          </Heading>
          <ThemedText type="default">{currentUser?.email}</ThemedText>
        </VStack>
      </Box>
      <Box className="my-5 flex-row">
        <VStack className="items-center pb-2 flex-1 border-r border-outline-300">
          <Heading size="xs">81</Heading>
          <ThemedText type="defaultSemiBold">posts</ThemedText>
        </VStack>
        <Divider
          orientation="horizontal"
          className="w-[40%] self-center bg-background-300  hidden"
        />
        <VStack className="items-center flex-1 py-0 border-r border-outline-300">
          <Heading size="xs">{currentUser?.followers}</Heading>
          <ThemedText type="defaultSemiBold">followers</ThemedText>
        </VStack>
        <Divider
          orientation="horizontal"
          className="w-[40%] self-center bg-background-300 hidden"
        />
        <VStack className="items-center flex-1 pt-0">
          <Heading size="xs">{currentUser?.following}</Heading>
          <ThemedText type="defaultSemiBold">following</ThemedText>
        </VStack>
      </Box>

      <Button className="py-2 px-4 rounded-xl">
        <ButtonText size="sm">Edit profile</ButtonText>
      </Button>
    </Card>
  );
};

export default ProfileCard;
