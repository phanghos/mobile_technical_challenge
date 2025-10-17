import type { Place } from '../../entities/Place';
import { PlaceStore, usePlaceStore } from '../usePlaceStore';

export const setPlaces = (
  places: Place[],
  store: PlaceStore = usePlaceStore,
): void => {
  store.setState({ places });
};
