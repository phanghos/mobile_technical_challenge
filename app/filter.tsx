import { useCityStore } from '@/domain/city/store/useCityStore';
import type { Filter as FilterModel } from '@/domain/filter/entities/Filter';
import { setSelectedFilters } from '@/domain/filter/store/actions/setSelectedFilters';
import { useFilterStore } from '@/domain/filter/store/useFilterStore';
import { applyFiltersToCities } from '@/domain/filter/utils/applyFiltersToCities';
import { useNavigation } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Checkbox } from 'react-native-paper';

export default function Filter() {
  const cities = useCityStore(s => s.cities);
  const filtersFromStore = useFilterStore(s => s.selectedFilters);
  const { goBack } = useNavigation();
  const languages = useMemo(() => {
    const uniqueLanguages = new Set<string>([]);

    cities.forEach(it => {
      uniqueLanguages.add(it.fullLanguage);
    });

    return uniqueLanguages;
  }, []);
  const currencies = useMemo(() => {
    const uniqueCurrencies = new Set<string>([]);

    cities.forEach(it => {
      uniqueCurrencies.add(it.currency);
    });

    return uniqueCurrencies;
  }, []);

  const [filters, setFilters] = useState<FilterModel>(filtersFromStore);
  const filteredResultsCount = useMemo(
    () => applyFiltersToCities(filters, cities).length,
    [filters],
  );

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Language</Text>
        {[...languages].map(it => (
          <Checkbox.Item
            key={it}
            label={it}
            status={filters.language.includes(it) ? 'checked' : 'unchecked'}
            onPress={() => {
              setFilters(prevState => ({
                ...prevState,
                language: prevState.language.some(itt => it === itt)
                  ? prevState.language.filter(itt => it !== itt)
                  : [...prevState.language, it],
              }));
            }}
          />
        ))}
        <Text style={styles.sectionTitle}>Currency</Text>
        {[...currencies].map(it => (
          <Checkbox.Item
            key={it}
            label={it}
            status={filters.currency.includes(it) ? 'checked' : 'unchecked'}
            onPress={() => {
              setFilters(prevState => ({
                ...prevState,
                currency: prevState.currency.some(itt => it === itt)
                  ? prevState.currency.filter(itt => it !== itt)
                  : [...prevState.currency, it],
              }));
            }}
          />
        ))}
      </ScrollView>

      <Button
        mode="contained"
        onPress={() => {
          setSelectedFilters(filters);
          goBack();
        }}
        style={{ margin: 32 }}
        disabled={!filteredResultsCount}>
        {`Show Results (${filteredResultsCount})`}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 600,
    marginVertical: 8,
  },
});
