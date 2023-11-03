import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,

  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import {COLORS, FONTFAMILY} from '../constants/them';
// import {Backiconsvg} from './Svg';
import Icons, {Icon} from './Icons';

import {useNavigation} from '@react-navigation/native';

const HeaderWithBackButton = ({onPress, title}) => {
  const navigation = useNavigation();
  // const Svg = () => {
  //   return <Backiconsvg />;
  // };
  return (
    <View style={styles.containerWithBorder}>

    <View style={styles.subContainer1}>
      <TouchableOpacity
        style={styles.container}
        onPress={
          () => 
        navigation.goBack()}
        >
        {/* <Svg /> */}

        <Icons
      name={'keyboard-backspace'}
      Type={Icon.MaterialCommunityIcons}
      size={rf(2.4)}
      color={COLORS.white}
    />
      </TouchableOpacity>

      <Text style={styles.text1}>{title}</Text>
      <View style={styles.container1}></View>
    </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blueButton,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('7%'),
    height: wp('7%'),
    borderRadius: wp('2%'),
  },
  subContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    padding:20
  },
  text1: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: rf(2.0),
    color: COLORS.black,
    textAlign: 'center',
  },
  container1: {
    marginRight: 15,
    width: 38,
    height: 38,
    borderRadius: 19,
  },
  containerWithBorder: {
    borderBottomWidth: 0.5, // Adjust the width as needed
    borderColor: COLORS.Greyscale, // Change the color as needed
  },
});

export default memo(HeaderWithBackButton);
