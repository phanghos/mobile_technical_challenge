import type { PlaceRaw } from '@/data/dtos/PlaceRaw';
import { PlaceStore, usePlaceStore } from '@/domain/place/store/usePlaceStore';
import { placeAdapter, PlaceAdapter } from '../../adapters/placeAdapter';

export const setPlaces = (
  places: PlaceRaw[],
  adaptPlaces: PlaceAdapter = placeAdapter,
  store: PlaceStore = usePlaceStore,
) => {
  store.setState({ places: adaptPlaces(places) });
};
