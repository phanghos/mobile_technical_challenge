import { useFetchPlaces } from './useFetchPlaces';

export const useFetchPlacesByKey = (key: string) => {
  const result = useFetchPlaces();

  return {
    ...result,
    data: result.data?.filter(it => it.key === key),
  };
};
