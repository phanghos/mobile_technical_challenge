import { useCityFilterStore } from '@/domain/city/stores/useCityFilterStore';
import { useCityStore } from '@/domain/city/stores/useCityStore';
import { getFiltersCount } from '@/domain/filter/utils/getFiltersCount';
import { useNavigation } from 'expo-router';
import React, { useMemo } from 'react';
import { FilterButtonContainer } from './FilterButtonContainer';

export const CityFilterButtonContainer = () => {
  const filters = useCityFilterStore(s => s.selectedFilters);
  const cities = useCityStore(s => s.cities);
  const appliedFiltersCount = useMemo(
    () => getFiltersCount(filters),
    [filters],
  );
  const { navigate } = useNavigation();

  if (!cities.length) {
    return null;
  }

  const navigateToFilter = () => navigate('city-filters');

  const ctaTextCount = appliedFiltersCount ? `(${appliedFiltersCount})` : '';
  const ctaText = `Filter ${ctaTextCount}`;

  return <FilterButtonContainer ctaText={ctaText} onPress={navigateToFilter} />;
};
