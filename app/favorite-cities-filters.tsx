import { Filters } from '@/components/Filters';
import { setSelectedFavoriteCitiesFilters } from '@/domain/city/stores/actions/setSelectedFavoriteCitiesFilters';
import { useFavoriteCitiesFilterStore } from '@/domain/city/stores/useFavoriteCitiesFilterStore';
import { useFavoriteCitiesStore } from '@/domain/city/stores/useFavoriteCitiesStore';
import React from 'react';

export default function FavoriteCitiesFilters() {
  const cities = useFavoriteCitiesStore(s => Object.values(s.cities));
  const filtersFromStore = useFavoriteCitiesFilterStore(s => s.selectedFilters);

  return (
    <Filters
      cities={cities}
      filters={filtersFromStore}
      onSelectFilters={setSelectedFavoriteCitiesFilters}
    />
  );
}
