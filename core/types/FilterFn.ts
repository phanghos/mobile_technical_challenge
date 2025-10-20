export type FilterFn<TFilters, TEntity> = (
  filters: TFilters[],
) => (item: TEntity) => boolean;
