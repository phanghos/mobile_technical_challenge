import type { PlacesMap } from '@/app/core/entities/PlacesMap';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type PlaceStoreState = {
  places: Record<string, PlacesMap>;
};

export const usePlaceStore = create<PlaceStoreState>()(
  persist<PlaceStoreState>(
    () => ({
      places: {},
    }),
    {
      name: 'place-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export type PlaceStore = typeof usePlaceStore;
