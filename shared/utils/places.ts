import { Place, PlaceInfo } from '@/domain/entities/Place';
import { PlacesMap } from '@/domain/entities/PlacesMap';
import { PlaceType } from '@/domain/entities/PlaceType';

const getPlacesForCityByType = (cityKey: string, places: Place[]): PlacesMap =>
  places.reduce((acc, cur) => {
    if (cur.key !== cityKey) {
      return acc;
    }

    return {
      ...acc,
      [cur.place.type]: [...(acc[cur.place.type] || []), cur.place],
    };
  }, {} as PlacesMap);

const getAllPlaces = (placesMap: PlacesMap): PlaceInfo[] =>
  Object.keys(placesMap).reduce(
    (acc, cur) => [...acc, ...placesMap[cur as PlaceType]],
    [] as PlaceInfo[],
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
