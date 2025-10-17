import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

type FilterButtonProps = {
  ctaText: string;
  onPress: () => void;
};

export const FilterButtonContainer = ({
  ctaText,
  onPress,
}: FilterButtonProps) => (
  <View style={styles.container}>
    <Button mode="contained" onPress={onPress} style={styles.button}>
      {ctaText}
    </Button>
  </View>
);

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
