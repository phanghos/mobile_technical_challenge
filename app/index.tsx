import React from 'react';

import { CityList } from '@/components/CityList';
import { ErrorView } from '@/components/ErrorView';
import { FullScreenSpinner } from '@/components/FullScreenSpinner';
import { useFetchCities } from '@/hooks/useFetchCities';
import { useCityStore } from '@/stores/useCityStore';

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
