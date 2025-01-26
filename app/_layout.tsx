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
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { LogoIcon } from "@/constants/Icons";
import HeaderRight from "@/components/HeaderRight";
import { Colors } from "@/constants/Colors";
import SearchBar from "@/components/search/SearchBar";

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

  return (
    <GluestackUIProvider mode={colorScheme === "light" ? "light" : "dark"}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
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
                  Colors[colorScheme === "light" ? "light" : "dark"].background,
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
                  Colors[colorScheme === "light" ? "light" : "dark"].background,
              },
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
