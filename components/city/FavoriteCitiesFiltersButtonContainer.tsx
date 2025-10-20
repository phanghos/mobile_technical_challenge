import { useFavoriteCitiesFilterStore } from '@/domain/city/stores/useFavoriteCitiesFilterStore';
import { useFavoriteCitiesStore } from '@/domain/city/stores/useFavoriteCitiesStore';
import { useNavigation } from 'expo-router';
import React from 'react';
import { FilterButton } from '../filter/FilterButton';

export const FavoriteCitiesFiltersButtonContainer = () => {
  const filters = useFavoriteCitiesFilterStore(s => s.selectedFilters);
  const cities = useFavoriteCitiesStore(s => s.cities);
  const { navigate } = useNavigation();

  if (!Object.values(cities).length) {
    return null;
  }

  const navigateToFilter = () => navigate('favorite-cities-filters');

  return <FilterButton filters={filters} onPress={navigateToFilter} />;
};
