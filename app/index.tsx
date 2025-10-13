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
          contentContainerStyle={{ padding: 16, paddingBottom: 48 }}
          scrollIndicatorInsets={{ top: 16 }}
        />
      )}
      {loading && <FullScreenSpinner />}
    </View>
  );
}
