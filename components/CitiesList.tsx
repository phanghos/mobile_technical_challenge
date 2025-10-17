import type { City } from '@/domain/city/entities/City';
import { useNavigation } from 'expo-router';
import React from 'react';
import { FlatList, FlatListProps, ListRenderItem, View } from 'react-native';
import Animated, { SlideInLeft } from 'react-native-reanimated';
import { CityFilterButtonContainer } from './CityFilterButtonContainer';
import { CityView } from './CityView';
import { EmptyList } from './EmptyList';
import { SearchBarContainer } from './SearchBarContainer';

const ANIMATION_DELAY = 50;

const renderItem =
  (onPress: (city: City) => void): ListRenderItem<City> =>
  ({ item, index }) =>
    (
      <Animated.View entering={SlideInLeft.delay(index * ANIMATION_DELAY)}>
        <CityView city={item} onPress={onPress} />
      </Animated.View>
    );

const keyExtractor = (city: City) => `${city.key}`;

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
  onSearch: (searchQuery: string) => void;
} & Omit<FlatListProps<City>, ExcludedFlatListProps>;

export const CitiesList = ({
  cities,
  onSearch,
  ...flatListProps
}: CityListProps) => {
  const { navigate } = useNavigation();

  const navigateToCityDetails = (city: City) =>
    navigate('city-details', { city });

  return (
    <View style={{ flex: 1 }}>
      <SearchBarContainer placeholder="Search cities..." onSearch={onSearch} />

      <FlatList
        data={cities}
        renderItem={renderItem(navigateToCityDetails)}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={EmptyListComponent}
        // to avoid tapping twice on the card when the keyboard is open
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        {...flatListProps}
      />
      <CityFilterButtonContainer />
    </View>
  );
};
