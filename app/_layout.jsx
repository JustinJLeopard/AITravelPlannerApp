import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { CreateTripContext } from "../context/CreateTripContext";
import React, { useState } from "react";


export default function RootLayout() {

  useFonts({
    'inconsolata': require('../assets/fonts/Inconsolata_Condensed-Medium.ttf'),
    'inconsolata-bold': require('../assets/fonts/Inconsolata_Condensed-Bold.ttf'),
    'inconsolata-extra-bold': require('../assets/fonts/Inconsolata_Condensed-ExtraBold.ttf'),
  });

  const [tripData, setTripData] = useState([]);
  return (
    <CreateTripContext.Provider value={{tripData, setTripData}}>
    <Stack screenOptions= {{
        headerShown: false
    }}>
      {/* <Stack.Screen name="index" options={{
        headerShown: false
      }} /> */}

      <Stack.Screen name="(tabs)" />
    </Stack>
    </CreateTripContext.Provider>
  );
}
