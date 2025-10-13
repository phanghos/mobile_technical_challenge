import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GET_CITIES } from '../graphql/queries';
import { useFetch } from '../useFetch';

type QueryType = {
  allCities: [
    {
      id: number;
      name: string;
    },
  ];
};

export default function HomeScreen() {
  const { data, error, loading } = useFetch<QueryType>(GET_CITIES);

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      {data && (
        <FlatList
          data={data.allCities}
          renderItem={({ item }) => (
            <View>
              <Text>{`${item.name}`}</Text>
            </View>
          )}
          keyExtractor={(city: any) => `${city.id}`}
          ItemSeparatorComponent={() => <View style={{ marginVertical: 8 }} />}
        />
      )}
      {loading && (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
    </SafeAreaView>
  );
}
