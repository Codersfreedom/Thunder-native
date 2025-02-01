import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
  useRoute,
} from "@react-navigation/native";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts } from "expo-font";
import {
  Stack,
  useNavigation,
  useRootNavigationState,
  useRouter,
} from "expo-router";
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
import HeaderRight from "@/components/HeaderRight";
import FloatingPlayer from "@/components/songs/FloatingPlayer";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRootNavigationState();
  const currentPath = router.routes[router.routes.length - 1].name;
  const showFloatingPlayBackScreens = ["album/[id]", "playlist/[id]"];

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
            <Stack.Screen
              name="album/[id]"
              options={{
                headerShown: true,
                headerTitle: "",
                headerTransparent: true,
                headerRight: () => <HeaderRight />,
              }}
            />

            <Stack.Screen name="+not-found" />
          </Stack>
          <FloatingPlayer
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: 0,
              display: showFloatingPlayBackScreens.includes(currentPath)
                ? "flex"
                : "none",
            }}
          />
        </GestureHandlerRootView>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
