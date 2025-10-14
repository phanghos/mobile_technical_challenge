import type { Place } from '@/app/core/entities/Place';
import { PlaceStore, usePlaceStore } from '@/stores/usePlaceStore';
import { placeAdapter, PlaceAdapter } from '../adapters/placeAdapter';

export const setPlacesForCity = (
  places: Place[],
  cityKey: string,
  adaptPlaces: PlaceAdapter = placeAdapter,
  store: PlaceStore = usePlaceStore,
) => {
  store.setState(prevState => ({
    places: {
      ...prevState.places,
      [cityKey]: adaptPlaces(places, cityKey),
    },
  }));
};
