import type { Place } from '@/domain/place/entities/Place';
import { PlaceStore, usePlaceStore } from '@/domain/place/store/usePlaceStore';

export const setPlaces = (
  places: Place[],
  store: PlaceStore = usePlaceStore,
) => {
  store.setState({ places });
};
