import type { PlaceType } from './PlaceType';

export type Place = {
  key: string;
  type: PlaceType;
  name: string;
  coordinates: [number, number];
};
