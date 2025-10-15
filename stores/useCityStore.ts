import type { City } from '@/domain/entities/City';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type CityStoreState = {
  cities: City[];
};

export const useCityStore = create<CityStoreState>()(
  persist<CityStoreState>(
    () => ({
      cities: [],
    }),
    {
      name: 'city-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export type CityStore = typeof useCityStore;
