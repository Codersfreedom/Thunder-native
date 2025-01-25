import React from "react";
import { BellIcon, SearchIcon } from "lucide-react-native";
import { HStack } from "./ui/hstack";

const HeaderRight = () => {
  return (
    <HStack space="md" className="mr-5">
      <SearchIcon className="rounded-full hover:bg-gray-400/50 p-1 h-8 w-12" />
      <BellIcon className="rounded-full hover:bg-gray-400/50 p-1 h-8 w-12" />
    </HStack>
  );
};

export default HeaderRight;
