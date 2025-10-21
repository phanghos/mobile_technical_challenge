import { City } from '@/domain/city/entities/City';
import { CityFilters } from '@/domain/city/entities/CityFilters';
import { applyFiltersToCities } from '@/domain/city/utils/applyFiltersToCities';
import { useNavigation } from 'expo-router';
import React, { useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Checkbox } from 'react-native-paper';

type FiltersProps = {
  cities: City[];
  filters: CityFilters;
  onSelectFilters: (filters: CityFilters) => void;
};

export const FiltersView = ({
  cities,
  filters: filtersFromProps,
  onSelectFilters,
}: FiltersProps) => {
  const { goBack, setOptions } = useNavigation();
  const languages = useMemo(() => {
    const uniqueLanguages = new Set<string>([]);

    cities.forEach(it => {
      uniqueLanguages.add(it.fullLanguage);
    });

    return uniqueLanguages;
  }, [cities]);
  const currencies = useMemo(() => {
    const uniqueCurrencies = new Set<string>([]);

    cities.forEach(it => {
      uniqueCurrencies.add(it.currency);
    });

    return uniqueCurrencies;
  }, [cities]);

  useEffect(() => {
    setOptions({
      headerRight: () => (
        <Button
          mode="text"
          onPress={() => {
            const initialState: CityFilters = {
              language: [],
              currency: [],
            };
            setFilters(initialState);
            onSelectFilters(initialState);
          }}>
          Reset filters
        </Button>
      ),
    });
  }, [setOptions, onSelectFilters]);

  const [filters, setFilters] = useState<CityFilters>(filtersFromProps);
  const filteredResultsCount = useMemo(
    () => applyFiltersToCities(filters, cities).length,
    [filters, cities],
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
            testID={`filter-checkbox-language-${it}-${
              filters.language.includes(it) ? 'checked' : 'unchecked'
            }`}
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
            testID={`filter-checkbox-currency-${it}-${
              filters.currency.includes(it) ? 'checked' : 'unchecked'
            }`}
          />
        ))}
      </ScrollView>

      <Button
        mode="contained"
        onPress={() => {
          onSelectFilters(filters);
          goBack();
        }}
        style={{ margin: 32 }}
        disabled={!filteredResultsCount}
        testID="filters-cta">
        {`Show Results (${filteredResultsCount})`}
      </Button>
    </View>
  );
};

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
