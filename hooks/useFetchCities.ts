import type { AllCities } from '@/app/core/entities/AllCities';
import { GET_CITIES } from '@/app/graphql/queries';
import { useFetch } from './useFetch';

export const useFetchCities = () => useFetch<AllCities>(GET_CITIES);
