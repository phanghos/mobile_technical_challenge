import { useQuery } from '@apollo/client/react';
import type { DocumentNode } from 'graphql';
import { useEffect } from 'react';

export type UseFetchReturn<T> = {
  data: T | undefined;
  loading: boolean;
  error: Error | undefined;
  refetch: () => Promise<void>;
};

export const useFetch = <T>(
  query: DocumentNode,
  onSucess: (data: T) => void,
): UseFetchReturn<T> => {
  const { data, loading, error, refetch } = useQuery<T>(query, {
    errorPolicy: 'all',
  });

  useEffect(() => {
    if (data) {
      onSucess(data);
    }
  }, [data]);

  return {
    data: data ?? undefined,
    loading,
    error: error ?? undefined,
    refetch: async () => {
      await refetch();
    },
  };
};
