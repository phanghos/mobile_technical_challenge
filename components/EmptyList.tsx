import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type EmptyListProps = {
  title: string;
  description: string;
};

export const EmptyList = ({ title, description }: EmptyListProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    fontWeight: 300,
    textAlign: 'center',
  },
});
