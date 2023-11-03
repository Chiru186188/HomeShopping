import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import {COLORS, FONTFAMILY} from '../constants/them';
import TouchableNativeFeedback from './TouchableNativeFeedback';
function CustomCheckButtons({title, style, selected,onChangeSelected}) {

  const onPress = useCallback(() => {
    
    onChangeSelected(title); // Notify the parent component about the selected value
  }, [onChangeSelected, title]);

  const rStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withSpring(
        selected === title ? COLORS.BlueSelectionBorder : COLORS.transparent,
      ),
      transform: [{scale: withSpring(selected === title ? 1 : 0)}],
    };
  }, [selected]);
  return (
    <TouchableNativeFeedback
      style={[{flexDirection: 'row', alignItems: 'center'}, style]}
      onPress={onPress}>
      <View
        style={[
          {
            height: wp('6%'),
            width: wp('6%'),
            borderRadius: wp('1%'),
            borderWidth: 2,
            borderColor: selected === title ? COLORS.BlueSelectionBorder : COLORS.black,
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}>
        <Animated.View
          style={[
            {
              height: wp('4%'),
              width: wp('4%'),
              borderRadius: wp('1%'),
            },
            rStyle,
          ]}
        />
      </View>
      <Text style={[styles.txt, {marginStart: wp('1.5%'),marginEnd:wp('3.5%')}]}>{title}</Text>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  txt: {
    color: COLORS.black,
    fontSize: rf(1.7),
    marginTop: hp('0.5%'),
    fontFamily: FONTFAMILY.Regular,

    // width: wp('50%'),
  },
});
export default memo(CustomCheckButtons);
