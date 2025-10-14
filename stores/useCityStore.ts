import type { City } from '@/app/core/entities/City';
import { create } from 'zustand';

type CityStoreState = {
  cities: City[];
};

export const useCityStore = create<CityStoreState>(() => ({
  cities: [],
}));

export type CityStore = typeof useCityStore;
