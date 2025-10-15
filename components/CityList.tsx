import { City } from '@/domain/entities/City';
import { useNavigation } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { FlatList, FlatListProps, ListRenderItem, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Animated, { SlideInLeft } from 'react-native-reanimated';
import { CityView } from './CityView';
import { EmptyList } from './EmptyList';

const ANIMATION_DELAY = 50;

const renderItem =
  (onPress: (city: City) => void): ListRenderItem<City> =>
  ({ item, index }) =>
    (
      <Animated.View entering={SlideInLeft.delay(index * ANIMATION_DELAY)}>
        <CityView city={item} onPress={onPress} />
      </Animated.View>
    );

const keyExtractor = (city: City) => `${city.id}`;

const ItemSeparator = () => <View style={{ marginVertical: 8 }} />;

const EmptyListComponent = () => (
  <EmptyList
    title="Oops!"
    description="Looks like there are no cities matching your search"
  />
);

type ExcludedFlatListProps =
  | 'data'
  | 'renderItem'
  | 'keyExtractor'
  | 'ItemSeparatorComponent';

type CityListProps = {
  cities: City[];
} & Omit<FlatListProps<City>, ExcludedFlatListProps>;

export const CityList = ({ cities, ...flatListProps }: CityListProps) => {
  const { navigate } = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const filteredCities = useMemo(() => {
    if (!searchQuery) {
      return cities;
    }
    return cities.filter(it =>
      it.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [cities, searchQuery]);

  const onChangeText = (text: string) => setSearchQuery(text.trimStart());

  const navigateToCityDetails = (city: City) =>
    navigate('city-details', { city });

  return (
    <View style={{ flex: 1 }}>
      <Searchbar
        placeholder="Search cities..."
        onChangeText={onChangeText}
        value={searchQuery}
        style={{ margin: 16, backgroundColor: '#fff' }}
      />
      <FlatList
        data={filteredCities}
        renderItem={renderItem(navigateToCityDetails)}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={EmptyListComponent}
        // to avoid tapping twice on the card when the keyboard is open
        keyboardShouldPersistTaps="always"
        {...flatListProps}
      />
    </View>
  );
};
