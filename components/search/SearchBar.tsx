import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Input, InputField, InputIcon, InputSlot } from "../ui/input";
import { SearchIcon } from "lucide-react-native";
import useMusicStore from "@/store/useMusicStore";
import useDebounceSearch from "@/hooks/useDebouceSearch";

const SearchBar = () => {
  const [value, setValue] = useState<string>("");
  const { searchSong } = useMusicStore();
  const debouncedValue = useDebounceSearch(value, 1000);

  useEffect(() => {
    if (debouncedValue?.length > 0) {
      searchSong(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <View className=" pr-12 w-full">
      <Input size="lg" variant="rounded" className="bg-gray-400/10 rounded-2xl">
        <InputSlot className="pl-3">
          <InputIcon as={SearchIcon} />
        </InputSlot>
        <InputField
          placeholder="Search..."
          onChange={(e: any) => setValue(e.target.value)}
        />
      </Input>
    </View>
  );
};

export default SearchBar;
