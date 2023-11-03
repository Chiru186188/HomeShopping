import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { COLORS, FONTFAMILY } from '../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../common/responsiveFunction';
function CustomButtonsBAndP({ onBackPress, onNextPress }) {
  return (
    <View style={styles.container}>
      {/* <Button
        title="Back"
        onPress={onBackPress}
        style={styles.button}
        color={COLORS.CancelRED} // Customize the color
      />
      <Button
        title="Next"
        onPress={onNextPress}
        style={styles.button}
        color={COLORS.blueButton} // Customize the color
      /> */}

<TouchableOpacity
      style={[styles.buttonL]}
      onPress={onBackPress}
    >
      <Text style={[styles.buttonText]}>{'Cancel'}</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={[styles.buttonR]}
      onPress={onNextPress}
    >
      <Text style={[styles.buttonText]}>{'Proceed to Pay'}</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 16, // Adjust the padding as needed
    backgroundColor: 'white', // Change the background color as needed
    borderRadius: 12, // Adjust the border radius as needed
  },
  buttonL: {
    width: wp("45%"),
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.CancelRED, 

  },
  buttonR: {
    width: wp("40%"),
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blueButton, 

  },
  buttonText: {
    color: 'white',
fontFamily:FONTFAMILY.SemiBold,
fontSize:rf(1.8)
  },
});

export default CustomButtonsBAndP;
