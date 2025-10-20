import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
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
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export type FavoriteCitiesStore = typeof useFavoriteCitiesStore;
