import React, { useMemo } from 'react';

import { CityList } from '@/components/CityList';
import { ErrorView } from '@/components/ErrorView';
import { FullScreenSpinner } from '@/components/FullScreenSpinner';
import { useCityStore } from '@/domain/city/store/useCityStore';
import { useFetchCities } from '@/domain/city/useCases/useFetchCities';
import { useFilterStore } from '@/domain/filter/store/useFilterStore';
import { applyFiltersToCities } from '@/domain/filter/utils/applyFiltersToCities';
import { hasFiltersApplied } from '@/domain/filter/utils/hasFiltersApplied';

export default function HomeScreen() {
  const { loading, error, refetch } = useFetchCities();
  const cities = useCityStore(s => s.cities);
  const selectedFilters = useFilterStore(s => s.selectedFilters);
  const filteredCities = useMemo(() => {
    return applyFiltersToCities(selectedFilters, cities);
  }, [cities, selectedFilters]);

  if (error && !cities.length) {
    return (
      <ErrorView
        title="Oops!"
        description="Something went wrong..."
        ctaText="Retry"
        onPress={refetch}
        disabled={loading}
      />
    );
  }

  if (loading) {
    return <FullScreenSpinner />;
  }

  return (
    <CityList
      cities={filteredCities}
      hasFiltersApplied={hasFiltersApplied(selectedFilters)}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 32 }}
      scrollIndicatorInsets={{ top: 16 }}
    />
  );
}
