import { FullScreenSpinner } from '@/components/FullScreenSpinner';
import { useFetchPlacesByKey } from '@/hooks/useFetchPlacesByKey';
import { usePlaceStore } from '@/stores/usePlaceStore';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, SegmentedButtons } from 'react-native-paper';
import Animated, { FadeIn } from 'react-native-reanimated';
import { City } from './core/entities/City';
import { PlaceType } from './core/entities/PlaceType';
import { PlacesUtils } from './core/utils/places';

type CellProps = {
  title: string;
  value: string;
};

const Cell = ({ title, value }: CellProps) => (
  <View style={styles.cell}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const Row = ({ children }: PropsWithChildren<{}>) => (
  <View style={styles.container}>{children}</View>
);

type ScreenRouteProps = {
  ['city-details']: {
    city: City;
  };
};

export default function CityDetailsScreen() {
  const { setOptions, navigate } = useNavigation();
  const {
    params: { city },
  } = useRoute<RouteProp<ScreenRouteProps, 'city-details'>>();
  const { loading, error } = useFetchPlacesByKey(city.key);
  const places = usePlaceStore(s => s.places)[city.key];
  const [value, setValue] = useState<PlaceType>('restaurant');

  useEffect(() => {
    setOptions({
      headerTitle: city.name,
    });
  }, []);

  const showMap = () => {
    navigate('places-map-view', { places: PlacesUtils.getAllPlaces(places) });
  };

  if (error) {
    return null;
  }

  if (loading) {
    return <FullScreenSpinner />;
  }

  return (
    <Animated.View entering={FadeIn} style={{ padding: 16 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '700',
          marginBottom: 24,
        }}>{`${city.name}`}</Text>

      <Row>
        <Cell title="Language" value={city.fullLanguage} />
        <Cell title="Currency" value={city.currency} />
      </Row>

      <Row>
        <Cell title={`${places?.restaurant.length ?? 0}`} value="Restaurants" />
        <Cell title={`${places?.monument.length ?? 0}`} value="Monuments" />
      </Row>

      <Button
        mode="contained"
        onPress={showMap}
        style={{ marginTop: 8, marginBottom: 16 }}>
        Explore on map
      </Button>

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

      <ScrollView style={{ marginTop: 16 }}>
        {places[value].map(it => {
          return (
            <Text key={it.name} style={{ fontSize: 16, fontWeight: 300 }}>
              {it.name}
            </Text>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  cell: {
    flexDirection: 'column',
    width: Dimensions.get('screen').width / 2,
    height: Dimensions.get('screen').width / 6,
  },
  title: {
    fontSize: 16,
    color: '#888',
    marginBottom: 2,
  },
  value: {
    fontSize: 18,
  },
});
