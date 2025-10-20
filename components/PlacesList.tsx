import type { PlacesMap } from '@/domain/place/entities/PlacesMap';
import type { PlaceType } from '@/domain/place/entities/PlaceType';
import { PlacesUtils } from '@/domain/place/utils/places';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';

type PlacesListProps = {
  places: PlacesMap;
};

export const PlacesList = ({ places }: PlacesListProps) => {
  const nrOfTypesOfPlaces = PlacesUtils.getTypesOfPlacesCount(places);
  const placesCount = PlacesUtils.getAllPlaces(places).length;
  const [value, setValue] = useState<PlaceType>('restaurant');
  const shouldRender = !!nrOfTypesOfPlaces && !!placesCount && !!value;

  if (!shouldRender) {
    return null;
  }

  const shouldShowSegmentedButton = nrOfTypesOfPlaces > 1;

  return (
    <>
      {shouldShowSegmentedButton && (
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          buttons={[
            {
              value: 'restaurant',
              label: 'Restaurants',
            },
            {
              value: 'monument',
              label: 'Monuments',
            },
          ]}
        />
      )}

      <ScrollView style={styles.listContainer}>
        {places[value]?.map(it => {
          return (
            <Text key={it.name} style={styles.place}>
              {it.name}
            </Text>
          );
        })}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 16,
  },
  place: {
    fontSize: 16,
    fontWeight: 300,
  },
});
