export type PlaceRaw = {
  key: string;
  place: PlaceInfoRaw;
};

type PlaceInfoRaw = {
  type: string;
  name: string;
  coordinates: [number, number];
};
