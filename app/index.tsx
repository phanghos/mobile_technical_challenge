import { CityView } from '@/components/CityView';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  View,
} from 'react-native';

import { useFetchCities } from '@/hooks/useFetchCities';
import type { City } from './core/entities/City';

const renderItem: ListRenderItem<City> = ({ item }) => {
  return <CityView city={item} />;
};

const keyExtractor = (city: City) => `${city.id}`;

const ItemSeparator = () => <View style={{ marginVertical: 8 }} />;

export default function HomeScreen() {
  const { data, loading, error } = useFetchCities();

  return (
    <View style={{ flex: 1 }}>
      {data && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={ItemSeparator}
          contentContainerStyle={{ padding: 16, paddingBottom: 48 }}
          scrollIndicatorInsets={{ top: 16 }}
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
    </View>
  );
}
