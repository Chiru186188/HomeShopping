import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import {
    heightPercentageToDP as hp,
    responsiveFontSize as rf,
    widthPercentageToDP as wp,
  } from '../common/responsiveFunction';
import { COLORS, FONTFAMILY } from '../constants/them';
import Icons, { Icon } from './Icons';
  
const CustomBlueButton = ({ title, onPress, buttonStyle, textStyle,IconName }) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
    >
       <Icons
      name={IconName}
      Type={Icon.MaterialIcons}
      size={rf(3.0)}
      color={COLORS.white}
    />
      <Text style={[styles.buttonText,textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection:'row',
    width: wp("88%"),
    height: 60,
    borderRadius: 10,
    gap:10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blueButton, // Default button color
    alignContent:'center',
  },
  buttonText: {
    paddingTop:5,
    color: 'white',

  },
});

export default CustomBlueButton;
