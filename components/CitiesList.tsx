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
  (
    onPress: (city: City) => void,
    onFavoritePres: (city: City) => void,
    isFavoriteCityFn: (cityId: number) => boolean,
  ): ListRenderItem<City> =>
  ({ item, index }) =>
    (
      <Animated.View entering={SlideInLeft.delay(index * ANIMATION_DELAY)}>
        <CityView
          city={item}
          isFavourite={isFavoriteCityFn(item.id)}
          onPress={onPress}
          onFavouritePress={onFavoritePres}
        />
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
  isFavoriteCityFn: (cityId: number) => boolean;
  onSearch: (searchQuery: string) => void;
  onFavoritePress: (city: City) => void;
} & Omit<FlatListProps<City>, ExcludedFlatListProps>;

export const CitiesList = ({
  cities,
  isFavoriteCityFn,
  onSearch,
  onFavoritePress,
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
        renderItem={renderItem(
          navigateToCityDetails,
          onFavoritePress,
          isFavoriteCityFn,
        )}
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
