import { useFavoriteCitiesFilterStore } from '@/domain/city/stores/useFavoriteCitiesFilterStore';
import { useFavoriteCitiesStore } from '@/domain/city/stores/useFavoriteCitiesStore';
import { useNavigation } from 'expo-router';
import React from 'react';
import { FilterButton } from './FilterButton';

export const FavoriteCitiesFiltersButtonContainer = () => {
  const filters = useFavoriteCitiesFilterStore(s => s.selectedFilters);
  const cities = useFavoriteCitiesStore(s => Object.values(s.cities));
  const { navigate } = useNavigation();

  if (!cities.length) {
    return null;
  }

  const navigateToFilter = () => navigate('favorite-cities-filters');

  return <FilterButton filters={filters} onPress={navigateToFilter} />;
};
