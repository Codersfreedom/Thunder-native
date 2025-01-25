import { Tabs } from "expo-router";
import React from "react";
import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  AlbumIcon,
  HomeIcon,
  LogoIcon,
  PersonIcon,
  RoomsIcon,
} from "@/constants/Icons";
import HeaderRight from "@/components/HeaderRight";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        headerTransparent: true,
        headerLeft: () => <LogoIcon />,
        headerRight: () => <HeaderRight />,
        headerStyle: {
          backgroundColor:
            Colors[colorScheme === "light" ? "light" : "dark"].background,
        },
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
          headerTitleStyle: { marginLeft: 10 },
        }}
      />
      <Tabs.Screen
        name="library/index"
        options={{
          title: "Library",
          tabBarIcon: ({ color }) => <AlbumIcon color={color} />,
          headerTitle: "Library",
          headerShown: true,
          headerTransparent: true,
          headerTitleStyle: { marginLeft: 10 },
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
          headerTitleStyle: { marginLeft: 10 },
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
          headerTitleStyle: { marginLeft: 10 },
        }}
      />
    </Tabs>
  );
}
