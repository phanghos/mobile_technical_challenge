import type { City } from '@/app/core/entities/City';
import React from 'react';
import { Text, View } from 'react-native';

type CityViewProps = {
  city: City;
};

export const CityView = ({ city }: CityViewProps) => {
  return (
    <View>
      <Text>{`${city.name}`}</Text>
    </View>
  );
};
