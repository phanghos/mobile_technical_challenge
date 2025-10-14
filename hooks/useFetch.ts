import { useQuery } from '@apollo/client/react';
import type { DocumentNode } from 'graphql';

export type UseFetchReturn<T> = {
  data: T | undefined;
  loading: boolean;
  error: Error | undefined;
  refetch: () => void;
};

export const useFetch = <T>(query: DocumentNode): UseFetchReturn<T> => {
  const { data, loading, error, refetch } = useQuery<T>(query);

  return {
    data: data ?? undefined,
    loading,
    error: error ?? undefined,
    refetch,
  };
};
