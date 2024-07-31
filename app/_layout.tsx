import { useFonts } from "expo-font";
import { Stack } from "expo-router";


export default function RootLayout() {

  useFonts({
    'inconsolata': require('../assets/fonts/Inconsolata_Condensed-Medium.ttf'),
    'inconsolata-bold': require('../assets/fonts/Inconsolata_Condensed-Bold.ttf'),
    'inconsolata-extra-bold': require('../assets/fonts/Inconsolata_Condensed-ExtraBold.ttf'),
  });

  return (
    <Stack screenOptions= {{
        headerShown: false
    }}>
      {/* <Stack.Screen name="index" options={{
        headerShown: false
      }} /> */}

      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
