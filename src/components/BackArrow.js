import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icons, {Icon} from './Icons';
import {COLORS} from '../constants/them';
import {
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import TouchableNativeFeedback from './TouchableNativeFeedback';
import {useNavigation} from '@react-navigation/native';
export default function BackArrow() {
  const navigation = useNavigation();
  return (
    <TouchableNativeFeedback
      style={styles.container}
      onPress={() => {
        navigation.goBack();
      }}>
      <Icons
        name={'left'}
        Type={Icon.AntDesign}
        size={rf(1.7)}
        color={COLORS.black}
        style={{}}
      />
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.halfpwhite,
    height: 42, //wp('10%'),
    width:42 , //wp('10%'),
    borderRadius: 21,//wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight: wp('2%'),
  },
});
