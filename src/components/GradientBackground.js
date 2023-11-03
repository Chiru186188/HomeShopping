import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientBackground = ({ children }) => {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#6BBDFE']} // Define your gradient colors
      style={{ flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
