import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { City } from '../entities/City';

type CityId = number;

type FavoriteCitiesStoreState = {
  cities: Record<CityId, City>;
};

export const useFavoriteCitiesStore = create<FavoriteCitiesStoreState>()(
  persist<FavoriteCitiesStoreState>(
    () => ({
      cities: {},
    }),
    {
      name: 'favorite-cities-store',
    },
  ),
);

export type FavoriteCitiesStore = typeof useFavoriteCitiesStore;
