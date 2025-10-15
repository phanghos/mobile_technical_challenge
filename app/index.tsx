import React from 'react';

import { CityList } from '@/components/CityList';
import { ErrorView } from '@/components/ErrorView';
import { FullScreenSpinner } from '@/components/FullScreenSpinner';
import { useCityStore } from '@/domain/city/store/useCityStore';
import { useFetchCities } from '@/domain/city/useCases/useFetchCities';

export default function HomeScreen() {
  const { loading, error, refetch } = useFetchCities();
  const cities = useCityStore(s => s.cities);

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
      cities={cities}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 32 }}
      scrollIndicatorInsets={{ top: 16 }}
    />
  );
}
