import { useQuery } from '@apollo/client/react';
import { DocumentNode } from 'graphql';

export type UseFetchReturn<T> = {
  data: T | undefined;
  loading: boolean;
  error: Error | undefined;
};

export const useFetch = <T>(query: DocumentNode): UseFetchReturn<T> => {
  const { data, loading, error } = useQuery<T>(query);

  return {
    data: data ?? undefined,
    loading,
    error: error ?? undefined,
  };
};
