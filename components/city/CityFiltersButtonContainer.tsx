import { useCityFilterStore } from '@/domain/city/stores/useCityFilterStore';
import { useCityStore } from '@/domain/city/stores/useCityStore';
import { useNavigation } from 'expo-router';
import React from 'react';
import { FilterButton } from '../filter/FilterButton';

export const CityFiltersButtonContainer = () => {
  const filters = useCityFilterStore(s => s.selectedFilters);
  const cities = useCityStore(s => s.cities);
  const { navigate } = useNavigation();

  if (!cities.length) {
    return null;
  }

  const navigateToFilter = () => navigate('cities-filters');

  return <FilterButton filters={filters} onPress={navigateToFilter} />;
};
