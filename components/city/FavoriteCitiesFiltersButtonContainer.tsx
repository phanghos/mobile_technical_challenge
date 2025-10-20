import { useFavoriteCitiesFilterStore } from '@/domain/city/stores/useFavoriteCitiesFilterStore';
import { useFavoriteCitiesStore } from '@/domain/city/stores/useFavoriteCitiesStore';
import { RootStackParamList } from '@/infra/navigation/types';
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React from 'react';
import { FilterButton } from '../filter/FilterButton';

export const FavoriteCitiesFiltersButtonContainer = () => {
  const filters = useFavoriteCitiesFilterStore(s => s.selectedFilters);
  const cities = useFavoriteCitiesStore(s => s.cities);
  const { navigate } =
    useNavigation<
      NavigationProp<RootStackParamList, 'favorite-cities-filters'>
    >();

  if (!Object.values(cities).length) {
    return null;
  }

  const navigateToFilter = () => navigate('favorite-cities-filters');

  return <FilterButton filters={filters} onPress={navigateToFilter} />;
};
