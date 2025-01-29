import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import SearchBar from "@/components/search/SearchBar";
import { useSetupTrackPlayer } from "@/hooks/useSetupTrackPlayer";
import { useLogTrackPlayerState } from "@/hooks/useLogTrackPlayerState";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const handleTrackPlayerLoaded = useCallback(() => {
    SplashScreen.hideAsync();
  }, []);

  useSetupTrackPlayer({
    onLoad: handleTrackPlayerLoaded,
  });

  useLogTrackPlayerState();
  return (
    <GluestackUIProvider mode={colorScheme === "light" ? "light" : "dark"}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="auth"
              options={{
                headerShown: true,
                headerTitle: "",
                headerTransparent: true,
              }}
            />
            <Stack.Screen
              name="search/index"
              options={{
                headerShown: true,
                headerTitle: "",
                headerTransparent: true,
                headerStyle: {
                  backgroundColor:
                    Colors[colorScheme === "light" ? "light" : "dark"]
                      .background,
                },
                headerRight: () => <SearchBar />,
              }}
            />
            <Stack.Screen
              name="notification/index"
              options={{
                headerShown: true,
                headerTitle: "",
                headerTransparent: true,
                headerStyle: {
                  backgroundColor:
                    Colors[colorScheme === "light" ? "light" : "dark"]
                      .background,
                },
              }}
            />
            <Stack.Screen
              name="player"
              options={{
                headerShown: false,
                presentation: "card",
                gestureEnabled: true,
                gestureDirection: "vertical",
                animationDuration: 400,
              }}
            />

            <Stack.Screen name="+not-found" />
          </Stack>
        </GestureHandlerRootView>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
