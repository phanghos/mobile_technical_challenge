import type { City } from '@/domain/city/entities/City';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';

type CityViewProps = {
  city: City;
  isFavourite: boolean;
  onFavouritePress: (city: City) => void;
  onPress: (city: City) => void;
};

export const CityView = ({
  city,
  isFavourite,
  onFavouritePress,
  onPress,
}: CityViewProps) => (
  <View style={{ backgroundColor: '#fff' }}>
    <TouchableOpacity
      onPress={() => onPress(city)}
      style={{ padding: 18, backgroundColor: '#fff', borderRadius: 8 }}>
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
        }}>{`🌍 Language: ${city.fullLanguage}`}</Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 300,
        }}>{`💰 Currency: ${city.currency}`}</Text>
    </TouchableOpacity>
    <Button
      mode="text"
      onPress={() => onFavouritePress(city)}
      style={{ marginBottom: 8, marginHorizontal: 8 }}>
      {isFavourite ? 'Favorite' : 'Add to favorites'}
    </Button>
  </View>
);
