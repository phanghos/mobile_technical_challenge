import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { EmptyList } from './EmptyList';

type ErrorViewProps = {
  ctaText?: string;
  onPress?: () => void;
  disabled?: boolean;
} & React.ComponentProps<typeof EmptyList>;

export const ErrorView = ({
  title,
  description,
  ctaText,
  onPress,
  disabled = false,
}: ErrorViewProps) => {
  const shouldRenderButton = Boolean(ctaText && onPress);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {shouldRenderButton && (
        <Button
          mode="outlined"
          onPress={onPress}
          style={{ marginTop: 16 }}
          disabled={disabled}>
          {ctaText}
        </Button>
      )}
    </View>
  );
};

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
