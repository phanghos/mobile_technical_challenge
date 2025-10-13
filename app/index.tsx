import React from 'react';
import { View } from 'react-native';

import { CityList } from '@/components/CityList';
import { FullScreenSpinner } from '@/components/FullScreenSpinner';
import { useFetchCities } from '@/hooks/useFetchCities';

export default function HomeScreen() {
  const { data, loading, error } = useFetchCities();

  return (
    <View style={{ flex: 1 }}>
      {data && (
        <CityList
          cities={data}
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 32 }}
          scrollIndicatorInsets={{ top: 16 }}
        />
      )}
      {loading && <FullScreenSpinner />}
    </View>
  );
}
