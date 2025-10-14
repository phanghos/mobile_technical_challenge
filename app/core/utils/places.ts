import { Place, PlaceInfo } from '../entities/Place';
import { PlacesMap } from '../entities/PlacesMap';
import { PlaceType } from '../entities/PlaceType';

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

export const PlacesUtils = {
  getPlacesForCityByType,
  getAllPlaces,
};
