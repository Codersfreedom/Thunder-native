import { View, Text } from "react-native";
import React from "react";
import { Input, InputField, InputIcon, InputSlot } from "../ui/input";
import { SearchIcon } from "lucide-react-native";

const SearchBar = () => {
  return (
    <View className=" pr-12 w-full">
      <Input size="lg" variant="rounded" className="bg-gray-400/10 rounded-2xl">
        <InputSlot className="pl-3">
          <InputIcon as={SearchIcon} />
        </InputSlot>
        <InputField placeholder="Search..." />
      </Input>
    </View>
  );
};

export default SearchBar;
