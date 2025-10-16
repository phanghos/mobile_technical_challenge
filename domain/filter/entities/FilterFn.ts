import type { City } from '@/domain/city/entities/City';

export type FilterFn<T> = (filters: T[]) => (city: City) => boolean;
