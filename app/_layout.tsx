import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import Constants from 'expo-constants';
import { PaperProvider } from 'react-native-paper';

export function getGraphqlUrl(port = 4000) {
  const debuggerHost =
    Constants.expoConfig?.hostUri ||
    Constants.manifest2?.extra?.expoGo?.debuggerHost;
  const host = debuggerHost?.split(':')[0];
  return `http://${host}:${port}/graphql`;
}

const client = new ApolloClient({
  link: new HttpLink({ uri: getGraphqlUrl() }),
  cache: new InMemoryCache(),
});

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ApolloProvider client={client}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <PaperProvider>
          <Stack>
            <Stack.Screen
              name="index"
              options={{
                title: 'Cities',
              }}
            />
            <Stack.Screen
              name="city-details"
              options={{
                headerTitle: 'City Details',
              }}
            />
            <Stack.Screen
              name="places-map"
              options={{
                headerTitle: 'Map View',
              }}
            />
            <Stack.Screen
              name="filter"
              options={{
                headerTitle: 'Filter',
                presentation: 'modal',
              }}
            />
          </Stack>
          <StatusBar style="auto" />
        </PaperProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
