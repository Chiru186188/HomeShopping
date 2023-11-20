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
function CustomRadioButtons({title, style, selected,onChangeSelected}) {

  const onPress = useCallback(() => {
    
    onChangeSelected(title); // Notify the parent component about the selected value
  }, [onChangeSelected, title]);

  // const onPress = useCallback(() => {
  //   console.log(title)
  //   setSelected(title);
    
  // }, [selected]);
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
            height:  Platform.OS === 'web' ? wp('3%') : wp('5%'),            //wp('6%'),
            width: Platform.OS === 'web' ? wp('3%') : wp('5%'), 
            borderRadius: Platform.OS === 'web' ? wp('1.5%') : wp('2.5%'), 
            borderWidth: 2,
            borderColor: selected === title ? COLORS.BlueSelectionBorder : COLORS.black,
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}>
        <Animated.View
          style={[
            {
              height: Platform.OS === 'web' ? wp('1.5%') : wp('3%'),   
              width:  Platform.OS === 'web' ? wp('1.5%') : wp('3%'),   
              borderRadius: Platform.OS === 'web' ? wp('0.75%') : wp('1.5%'), 
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
export default memo(CustomRadioButtons);
