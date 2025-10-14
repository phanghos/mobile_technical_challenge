import { useFetchPlacesByKey } from '@/hooks/useFetchPlacesByKey';
import { useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import Animated, { FadeIn } from 'react-native-reanimated';

type CellProps = {
  title: string;
  value: string;
};

const Cell = ({ title, value }: CellProps) => (
  <View style={styles.cell}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default function CityDetailsScreen() {
  const navigation = useNavigation();
  const { data } = useFetchPlacesByKey('amsterdam');
  const [value, setValue] = useState('restaurant');

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Lisbon',
    });
  }, []);

  return (
    <Animated.View entering={FadeIn} style={{ padding: 16 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '700',
          marginBottom: 24,
        }}>{`Lisbon`}</Text>
      <View style={styles.container}>
        <Cell title="Language" value="Portuguese" />
        <Cell title="Currency" value="Eur" />
      </View>

      <View style={styles.container}>
        <Cell title="24" value="Restaurants" />
        <Cell title="12" value="Monuments" />
      </View>

      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'restaurant',
            label: 'Restaurants',
          },
          {
            value: 'monument',
            label: 'Monuments',
          },
        ]}
      />

      <ScrollView style={{ marginTop: 16 }}>
        {!!value &&
          data
            ?.filter(it => it.place.type === value)
            .map(it => {
              return (
                <Text
                  key={it.place.name}
                  style={{ fontSize: 16, fontWeight: 300 }}>
                  {it.place.name}
                </Text>
              );
            })}
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'space-between', // Push cells to opposite ends
    // paddingHorizontal: 20,
    // paddingVertical: 10,
  },
  cell: {
    flexDirection: 'column',
    width: Dimensions.get('screen').width / 2,
    height: Dimensions.get('screen').width / 6,

    // backgroundColor: 'red',
    // borderWidth: 1,
  },
  rightAlignedCell: {
    // alignItems: 'flex-end', // Align text to the right inside this cell
  },
  title: {
    fontSize: 16,
    color: '#888',
    marginBottom: 2,
  },
  value: {
    fontSize: 18,
  },
});
