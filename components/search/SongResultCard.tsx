import { Image } from "react-native";
import React from "react";
import { Card } from "../ui/card";
import { HStack } from "../ui/hstack";
import { VStack } from "../ui/vstack";
import { ThemedText } from "../ThemedText";
import { Link } from "expo-router";
import { SongResult } from "@/types";
import { Skeleton, SkeletonText } from "../ui/skeleton";

const SongResultCard = ({
  result,
  isLoading,
}: {
  result: SongResult;
  isLoading: boolean;
}) => {
  return (
    <Card size="sm" variant="outline" className="rounded-2xl mb-3 w-full">
      <Link href={`../../song/${result.id}`}>
        <HStack space="md" className="items-center">
          {isLoading ? (
            <Skeleton className="w-16 h-20 rounded-xl" />
          ) : (
            <Image
              source={{
                uri: `${result.image[result.image.length - 1].url}`,
              }}
              className="w-16 h-20 rounded-xl"
            />
          )}
          <VStack space="md" className="items-start h-full">
            {isLoading ? (
              <SkeletonText className="w-20 h-4" />
            ) : (
              <ThemedText type="subtitle">{result.title}</ThemedText>
            )}
            {isLoading ? (
              <SkeletonText className="w-16 h-4" />
            ) : (
              <ThemedText type="default">{result.singers}</ThemedText>
            )}
          </VStack>
        </HStack>
      </Link>
    </Card>
  );
};

export default SongResultCard;
