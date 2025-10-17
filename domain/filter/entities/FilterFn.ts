export type FilterFn<TFilter, TEntity> = (
  filters: TFilter[],
) => (city: TEntity) => boolean;
