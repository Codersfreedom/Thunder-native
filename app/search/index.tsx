import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import SearchResultCard from "@/components/search/SearchResultCard";
import NotFound from "./NotFound";
import DefaultScreen from "./DefaultScreen";

const index = () => {
  return (
    <ScrollView className="h-screen dark:bg-dark-background mt-16 p-3 items-center justify-center ">
      {/* Search result section */}

      {/* <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard /> */}

      {/* Not found screen */}
      <NotFound />

      {/* Default screen */}
      {/* <DefaultScreen /> */}
    </ScrollView>
  );
};

export default index;
