import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { AllCities } from '../core/entities/AllCities';
import type { City } from '../core/entities/City';

import { GET_CITIES } from '../graphql/queries';
import { useFetch } from '../useFetch';

export default function HomeScreen() {
  const { data, error, loading } = useFetch<AllCities>(GET_CITIES);

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
          keyExtractor={(city: City) => `${city.id}`}
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
