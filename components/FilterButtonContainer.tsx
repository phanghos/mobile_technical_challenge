import { useCityStore } from '@/domain/city/store/useCityStore';
import { useFilterStore } from '@/domain/filter/store/useFilterStore';
import { getFiltersCount } from '@/domain/filter/utils/getFiltersCount';
import { useNavigation } from 'expo-router';
import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

export const FilterButtonContainer = () => {
  const filters = useFilterStore(s => s.selectedFilters);
  const cities = useCityStore(s => s.cities);
  const appliedFiltersCount = useMemo(
    () => getFiltersCount(filters),
    [filters],
  );
  const { navigate } = useNavigation();

  const navigateToFilter = () => navigate('filter');

  if (!cities.length) {
    return null;
  }

  const ctaTextCount = appliedFiltersCount ? `(${appliedFiltersCount})` : '';

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={navigateToFilter} style={styles.button}>
        {`Filter ${ctaTextCount}`}
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
    bottom: 36,
  },
});
