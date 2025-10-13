import { CityView } from '@/components/CityView';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { City } from '../core/entities/City';

import { useFetchCities } from '@/hooks/useFetchCities';

const renderItem: ListRenderItem<City> = ({ item }) => {
  return <CityView city={item} />;
};

const keyExtractor = (city: City) => `${city.id}`;

const ItemSeparator = () => <View style={{ marginVertical: 8 }} />;

export default function HomeScreen() {
  const { data, loading, error } = useFetchCities();

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      {data && (
        <FlatList
          data={data.allCities}
          renderItem={renderItem}
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
