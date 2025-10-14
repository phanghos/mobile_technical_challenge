export type Place = {
  key: string;
  place: PlaceInfo;
};

export type PlaceInfo = {
  type: string;
  name: string;
  coordinates: [number, number];
};
