import { Filters } from '@/core/filters/Filters';
import { getFiltersCount } from '@/domain/filter/utils/getFiltersCount';
import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

type FilterButtonProps = {
  filters: Filters;
  onPress: () => void;
};

export const FilterButton = ({ filters, onPress }: FilterButtonProps) => {
  const appliedFiltersCount = useMemo(
    () => getFiltersCount(filters),
    [filters],
  );

  const ctaTextCount = appliedFiltersCount ? `(${appliedFiltersCount})` : '';
  const ctaText = `Filter ${ctaTextCount}`;

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={onPress} style={styles.button}>
        {ctaText}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
  },
});
