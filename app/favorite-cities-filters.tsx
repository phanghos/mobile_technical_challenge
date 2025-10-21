import { FiltersView } from '@/components/filter/FiltersView';
import { setSelectedFavoriteCitiesFilters } from '@/domain/city/stores/actions/setSelectedFavoriteCitiesFilters';
import { useFavoriteCitiesFilterStore } from '@/domain/city/stores/useFavoriteCitiesFilterStore';
import { useFavoriteCitiesStore } from '@/domain/city/stores/useFavoriteCitiesStore';
import React, { useMemo } from 'react';

export default function FavoriteCitiesFilters() {
  const citiesMap = useFavoriteCitiesStore(s => s.cities);
  const filtersFromStore = useFavoriteCitiesFilterStore(s => s.selectedFilters);
  const cities = useMemo(() => Object.values(citiesMap), [citiesMap]);

  return (
    <FiltersView
      cities={cities}
      filters={filtersFromStore}
      onSelectFilters={setSelectedFavoriteCitiesFilters}
    />
  );
}
