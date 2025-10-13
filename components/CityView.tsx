import type { City } from '@/app/core/entities/City';
import React from 'react';
import { Text, View } from 'react-native';

type CityViewProps = {
  city: City;
};

export const CityView = ({ city }: CityViewProps) => {
  return (
    <View style={{ padding: 18, backgroundColor: '#fff', borderRadius: 8 }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          marginBottom: 8,
        }}>{`${city.name}`}</Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 300,
          marginBottom: 4,
        }}>{`🌍 Language: ${city.language}`}</Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 300,
        }}>{`💰 Currency: ${city.currency}`}</Text>
    </View>
  );
};
