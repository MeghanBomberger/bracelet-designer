import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useFonts as useFontsRowdies, Rowdies_300Light, Rowdies_400Regular, Rowdies_700Bold } from '@expo-google-fonts/rowdies';
import { Montserrat_300Light, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold, useFonts as useFontsMontserrat } from '@expo-google-fonts/montserrat';
import { useFonts as useFontDatatype, Datatype_400Regular } from '@expo-google-fonts/datatype';

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
  let [datatypeFontsLoaded] = useFontDatatype({
    Datatype_400Regular,
  });

  if (!rowdieFontsLoaded || !montserratFontsLoaded || !datatypeFontsLoaded ) {
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
