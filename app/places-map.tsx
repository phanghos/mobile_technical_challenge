import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { RootStackParamList } from '@/infra/navigation/types';
import { useNavigation } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';
import { StringUtils } from '../shared/utils/strings';

export default function PlacesMapView() {
  const { setOptions } = useNavigation();
  const {
    params: { places },
  } = useRoute<RouteProp<RootStackParamList, 'places-map'>>();
  const [lat, lng] = places[0].coordinates;

  useEffect(() => {
    setOptions({
      headerTitle: '',
    });
  }, [setOptions]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}>
        {places.map(it => (
          <Marker
            key={it.name}
            coordinate={{
              latitude: it.coordinates[0],
              longitude: it.coordinates[1],
            }}
            title={it.name}
            description={StringUtils.capitalize(it.type)}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
