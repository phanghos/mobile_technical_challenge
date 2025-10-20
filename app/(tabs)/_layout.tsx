import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6200ee',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Cities',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorite-cities"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
