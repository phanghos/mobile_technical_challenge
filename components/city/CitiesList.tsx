import type { City } from '@/domain/city/entities/City';
import { useNavigation } from 'expo-router';
import React from 'react';
import { ListRenderItem, View } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { ReanimatedFlatList } from 'react-native-reanimated/lib/typescript/component/FlatList';
import { SearchBarContainer } from '../SearchBarContainer';
import { CityView } from './CityView';
import { EmptyCitiesList } from './EmptyCitiesList';

const renderItem =
  (
    onPress: (city: City) => void,
    onFavoritePres: (city: City) => void,
    isFavoriteCityFn: (cityId: number) => boolean,
  ): ListRenderItem<City> =>
  ({ item }) =>
    (
      <CityView
        city={item}
        isFavourite={isFavoriteCityFn(item.id)}
        onPress={onPress}
        onFavoritePress={onFavoritePres}
      />
    );

const keyExtractor = (city: City) => `${city.key}`;

const ItemSeparator = () => <View style={{ marginVertical: 8 }} />;

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
} & Omit<ReanimatedFlatList<City>, ExcludedFlatListProps>;

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

      <Animated.FlatList
        data={cities}
        renderItem={renderItem(
          navigateToCityDetails,
          onFavoritePress,
          isFavoriteCityFn,
        )}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={EmptyCitiesList}
        // to avoid tapping twice on the card when the keyboard is open
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        itemLayoutAnimation={LinearTransition}
        {...flatListProps}
      />
    </View>
  );
};
