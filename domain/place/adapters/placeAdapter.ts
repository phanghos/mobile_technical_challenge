import type { PlaceRaw } from '@/data/dtos/PlaceRaw';
import type { Place } from '@/domain/place/entities/Place';
import type { PlaceType } from '@/domain/place/entities/PlaceType';

export const placeAdapter = (places: PlaceRaw[]): Place[] =>
  places.map<Place>(it => ({
    key: it.key,
    ...it.place,
    type: it.place.type as PlaceType,
  }));

export type PlaceAdapter = typeof placeAdapter;
