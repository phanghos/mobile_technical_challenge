import type { PlaceType } from './PlaceType';

export type Place = {
  key: string;
  place: PlaceInfo;
};

export type PlaceInfo = {
  type: PlaceType;
  name: string;
  coordinates: [number, number];
};
