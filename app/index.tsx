import React from 'react';

import { CityList } from '@/components/CityList';
import { ErrorView } from '@/components/ErrorView';
import { FullScreenSpinner } from '@/components/FullScreenSpinner';
import { useFetchCities } from '@/hooks/useFetchCities';

export default function HomeScreen() {
  const { data, loading, error, refetch } = useFetchCities();

  if (error) {
    return (
      <ErrorView
        title="Oops!"
        description="Something went wrong..."
        ctaText="Retry"
        onPress={refetch}
      />
    );
  }

  if (loading) {
    return <FullScreenSpinner />;
  }

  return (
    <CityList
      cities={data || []}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 32 }}
      scrollIndicatorInsets={{ top: 16 }}
    />
  );
}
