import { Tabs } from "expo-router";
import React from "react";
import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { AlbumIcon, HomeIcon, PersonIcon, RoomsIcon } from "@/constants/Icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          backgroundColor:
            Colors[colorScheme === "light" ? "light" : "dark"].background,
          borderWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          headerTitle: "Thunder",
          headerShown: true,
          headerTransparent: true,
          headerTitleStyle: { marginLeft: 40 },
        }}
      />
      <Tabs.Screen
        name="albums/index"
        options={{
          title: "Albums",
          tabBarIcon: ({ color }) => <AlbumIcon color={color} />,
          headerTitle: "Albums",
          headerShown: true,
          headerTransparent: true,
          headerTitleStyle: { marginLeft: 40 },
        }}
      />
      <Tabs.Screen
        name="rooms/index"
        options={{
          title: "Rooms",
          tabBarIcon: ({ color }) => <RoomsIcon color={color} />,
          headerTitle: "Rooms",
          headerShown: true,
          headerTransparent: true,
          headerTitleStyle: { marginLeft: 40 },
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <PersonIcon color={color} />,
          headerTitle: "Profile",
          headerShown: true,
          headerTransparent: true,
          headerTitleStyle: { marginLeft: 40 },
        }}
      />
    </Tabs>
  );
}
