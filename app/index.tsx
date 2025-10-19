import React, { useState } from 'react';

import { CitiesList } from '@/components/CitiesList';
import { ErrorView } from '@/components/ErrorView';
import { FullScreenSpinner } from '@/components/FullScreenSpinner';
import { isFavoriteCity } from '@/domain/city/stores/actions/isFavoriteCity';
import { toggleFavouriteCity } from '@/domain/city/stores/actions/toggleFavouriteCity';
import { useCityStore } from '@/domain/city/stores/useCityStore';
import { useFavoriteCitiesStore } from '@/domain/city/stores/useFavoriteCitiesStore';
import { useFetchCities } from '@/domain/city/useCases/useFetchCities';
import { useVisibleCities } from '@/domain/city/useCases/useVisibleCities';

export default function HomeScreen() {
  const { loading, error, refetch } = useFetchCities();
  const cities = useCityStore(s => s.cities);
  const [searchQuery, setSearchQuery] = useState('');
  const visibleCities = useVisibleCities(searchQuery);
  const favorites = useFavoriteCitiesStore(s => s.cities);
  const hasData = !!cities.length;
  const shouldShowError = !!error && !hasData;
  const shouldShowLoading = loading && !hasData;

  if (shouldShowError) {
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

  if (shouldShowLoading) {
    return <FullScreenSpinner />;
  }

  return (
    <CitiesList
      cities={visibleCities}
      onSearch={setSearchQuery}
      isFavoriteCityFn={isFavoriteCity}
      onFavoritePress={toggleFavouriteCity}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 32 }}
      scrollIndicatorInsets={{ top: 16 }}
      extraData={favorites}
    />
  );
}
