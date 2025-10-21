import { CitiesList } from '@/components/city/CitiesList';
import { EmptyFavoriteCitiesList } from '@/components/city/EmptyFavoriteCitiesList';
import { FavoriteCitiesFiltersButtonContainer } from '@/components/city/FavoriteCitiesFiltersButtonContainer';
import { isFavoriteCity } from '@/domain/city/stores/actions/isFavoriteCity';
import { setSelectedFavoriteCitiesFilters } from '@/domain/city/stores/actions/setSelectedFavoriteCitiesFilters';
import { toggleFavouriteCity } from '@/domain/city/stores/actions/toggleFavouriteCity';
import { useFavoriteCitiesStore } from '@/domain/city/stores/useFavoriteCitiesStore';
import { useVisibleFavoriteCities } from '@/domain/city/useCases/useVisibleFavoriteCities';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FavoriteCities() {
  const [searchQuery, setSearchQuery] = useState('');
  const favorites = useFavoriteCitiesStore(s => s.cities);
  const visibleCities = useVisibleFavoriteCities(searchQuery);
  const areThereFavorites = !!Object.keys(favorites).length;

  useEffect(() => {
    if (!areThereFavorites) {
      setSearchQuery('');
      setSelectedFavoriteCitiesFilters({
        language: [],
        currency: [],
      });
    }
  }, [areThereFavorites]);

  if (!areThereFavorites) {
    return <EmptyFavoriteCitiesList />;
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
      />
      <FavoriteCitiesFiltersButtonContainer />
    </SafeAreaView>
  );
}
