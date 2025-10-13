import { City } from '@/app/core/entities/City';
import React from 'react';
import { FlatList, FlatListProps, ListRenderItem, View } from 'react-native';
import { CityView } from './CityView';

const renderItem: ListRenderItem<City> = ({ item }) => {
  return <CityView city={item} />;
};

const keyExtractor = (city: City) => `${city.id}`;

const ItemSeparator = () => <View style={{ marginVertical: 8 }} />;

type ExcludedFlatListProps =
  | 'data'
  | 'renderItem'
  | 'keyExtractor'
  | 'ItemSeparatorComponent';

type CityListProps = {
  cities: City[];
} & Omit<FlatListProps<City>, ExcludedFlatListProps>;

export const CityList = ({ cities, ...flatListProps }: CityListProps) => (
  <FlatList
    data={cities}
    renderItem={renderItem}
    keyExtractor={keyExtractor}
    ItemSeparatorComponent={ItemSeparator}
    {...flatListProps}
  />
);
