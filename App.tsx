import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Provider as PaperProvider } from 'react-native-paper';

import { Routes } from './src/routes';
import themes from './src/themes';

import { ComicProvider } from '@hooks/comic';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={themes}>
      <StatusBar style='light' translucent backgroundColor='transparent' />

      <ComicProvider>
        <PaperProvider>
          <Routes />
        </PaperProvider>
      </ComicProvider>
    </ThemeProvider>
  );
}
