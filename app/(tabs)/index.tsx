import { CityView } from '@/components/CityView';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { AllCities } from '../core/entities/AllCities';
import type { City } from '../core/entities/City';

import { GET_CITIES } from '../graphql/queries';
import { useFetch } from '../useFetch';

const renderItem: ListRenderItem<City> = ({ item }) => {
  return <CityView city={item} />;
};

const keyExtractor = (city: City) => `${city.id}`;

const ItemSeparator = () => <View style={{ marginVertical: 8 }} />;

export default function HomeScreen() {
  const { data, loading, error } = useFetch<AllCities>(GET_CITIES);

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
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={ItemSeparator}
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
