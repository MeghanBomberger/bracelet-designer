import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useFonts as useFontsRowdies, Rowdies_300Light, Rowdies_400Regular, Rowdies_700Bold } from '@expo-google-fonts/rowdies';
import { Montserrat_300Light, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold, useFonts as useFontsMontserrat } from '@expo-google-fonts/montserrat';

export default function RootLayout() {
  let [rowdieFontsLoaded] = useFontsRowdies({
    Rowdies_300Light,
    Rowdies_400Regular,
    Rowdies_700Bold,
  });
  let [montserratFontsLoaded] = useFontsMontserrat({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  if (!rowdieFontsLoaded || !montserratFontsLoaded) {
    return null;
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
