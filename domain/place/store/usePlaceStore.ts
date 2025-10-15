import type { Place } from '@/domain/place/entities/Place';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type PlaceStoreState = {
  // places: Record<string, PlacesMap>;
  places: Place[];
};

export const usePlaceStore = create<PlaceStoreState>()(
  persist<PlaceStoreState>(
    () => ({
      // places: {},
      places: [],
    }),
    {
      name: 'place-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export type PlaceStore = typeof usePlaceStore;
