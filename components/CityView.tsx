import type { City } from '@/domain/city/entities/City';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';

type CityViewProps = {
  city: City;
  isFavourite: boolean;
  onFavoritePress: (city: City) => void;
  onPress: (city: City) => void;
};

export const CityView = ({
  city,
  isFavourite,
  onFavoritePress,
  onPress,
}: CityViewProps) => (
  <View style={{ backgroundColor: '#fff' }}>
    <TouchableOpacity
      onPress={() => onPress(city)}
      style={{ padding: 18, backgroundColor: '#fff', borderRadius: 8 }}>
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{
            flex: 1,
            fontSize: 16,
            fontWeight: '700',
            marginBottom: 8,
          }}>{`${city.name}`}</Text>
        <Pressable onPress={() => onFavoritePress(city)} hitSlop={16}>
          <MaterialIcons
            name={isFavourite ? 'favorite' : 'favorite-outline'}
            size={24}
            color="red"
          />
        </Pressable>
      </View>
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
  </View>
);
