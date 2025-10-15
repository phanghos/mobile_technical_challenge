import type { Place } from '@/domain/place/entities/Place';
import type { PlacesMap } from '@/domain/place/entities/PlacesMap';
import type { PlaceType } from '@/domain/place/entities/PlaceType';

const getPlacesForCityByType = (cityKey: string, places: Place[]): PlacesMap =>
  places.reduce((acc, cur) => {
    if (cur.key !== cityKey) {
      return acc;
    }

    return {
      ...acc,
      [cur.type]: [...(acc[cur.type] || []), cur],
    };
  }, {} as PlacesMap);

const getAllPlaces = (placesMap: PlacesMap): Place[] =>
  Object.keys(placesMap).reduce(
    (acc, cur) => [...acc, ...placesMap[cur as PlaceType]],
    [] as Place[],
  );

const getTypeOfFirstPlace = (placesMap: PlacesMap): PlaceType | undefined =>
  Object.keys(placesMap)[0] as PlaceType | undefined;

const getTypesOfPlacesCount = (placesMap: PlacesMap): number =>
  Object.keys(placesMap).length;

export const PlacesUtils = {
  getPlacesForCityByType,
  getAllPlaces,
  getTypeOfFirstPlace,
  getTypesOfPlacesCount,
};
