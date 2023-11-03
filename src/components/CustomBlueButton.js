import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import {
    heightPercentageToDP as hp,
    responsiveFontSize as rf,
    widthPercentageToDP as wp,
  } from '../common/responsiveFunction';
import { COLORS, FONTFAMILY } from '../constants/them';
  
const CustomBlueButton = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText,textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: wp("88%"),
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blueButton, // Default button color
  },
  buttonText: {
    color: 'white',

  },
});

export default CustomBlueButton;
