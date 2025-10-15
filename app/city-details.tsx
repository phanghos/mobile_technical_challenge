import { FullScreenSpinner } from '@/components/FullScreenSpinner';
import { PlacesList } from '@/components/PlacesList';
import { City } from '@/domain/city/entities/City';
import { selectPlacesForCity } from '@/domain/place/store/selectors/selectPlacesForCity';
import { usePlaceStore } from '@/domain/place/store/usePlaceStore';
import { useFetchPlaces } from '@/domain/place/useCases/useFetchPlaces';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React, { PropsWithChildren, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Animated, { FadeIn } from 'react-native-reanimated';
import { PlacesUtils } from '../shared/utils/places';

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
  const { loading, error } = useFetchPlaces();
  const places = usePlaceStore(selectPlacesForCity(city.key));

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

      <PlacesList places={places} />
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
