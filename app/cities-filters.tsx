import { Filters } from '@/components/Filters';
import { setSelectedCitiesFilters } from '@/domain/city/stores/actions/setSelectedCitiesFilters';
import { useCityFilterStore } from '@/domain/city/stores/useCityFilterStore';
import { useCityStore } from '@/domain/city/stores/useCityStore';
import React from 'react';

export default function CitiesFilters() {
  const cities = useCityStore(s => s.cities);
  const filtersFromStore = useCityFilterStore(s => s.selectedFilters);

  return (
    <Filters
      cities={cities}
      filters={filtersFromStore}
      onSelectFilters={setSelectedCitiesFilters}
    />
  );
}
