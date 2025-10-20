import React, { useState } from 'react';

import { CitiesList } from '@/components/CitiesList';
import { CityFiltersButtonContainer } from '@/components/CityFiltersButtonContainer';
import { ErrorView } from '@/components/ErrorView';
import { FullScreenSpinner } from '@/components/FullScreenSpinner';
import { isFavoriteCity } from '@/domain/city/stores/actions/isFavoriteCity';
import { toggleFavouriteCity } from '@/domain/city/stores/actions/toggleFavouriteCity';
import { useCityStore } from '@/domain/city/stores/useCityStore';
import { useFavoriteCitiesStore } from '@/domain/city/stores/useFavoriteCitiesStore';
import { useFetchCities } from '@/domain/city/useCases/useFetchCities';
import { useVisibleCities } from '@/domain/city/useCases/useVisibleCities';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const cities = useCityStore(s => s.cities);
  const favorites = useFavoriteCitiesStore(s => s.cities);
  const visibleCities = useVisibleCities(searchQuery);
  const { loading, error, refetch } = useFetchCities();
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
    <SafeAreaView style={{ flex: 1 }}>
      <CitiesList
        cities={visibleCities}
        onSearch={setSearchQuery}
        isFavoriteCityFn={isFavoriteCity}
        onFavoritePress={toggleFavouriteCity}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        scrollIndicatorInsets={{ top: 16 }}
        extraData={favorites}
      />
      <CityFiltersButtonContainer />
    </SafeAreaView>
  );
}
