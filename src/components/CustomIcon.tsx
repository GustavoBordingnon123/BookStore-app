import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CustomIconProps {
    name: string;
    size: number;
    color?: string;
    icon?: any;
}

const CustomIcon = ({ icon, name, size, color }: CustomIconProps) => {
  return (
    <View style={[styles.iconContainer]}>
      <Text style={styles.iconText}>{icon}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 18,
  },
});

// Exporte o componente CustomIcon
export default CustomIcon;