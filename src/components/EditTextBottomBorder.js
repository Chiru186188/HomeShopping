import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { memo, useState } from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import { COLORS, FONTFAMILY, IMAGES } from '../constants/them';
import Icons, { Icon } from './Icons';

function EditTextBottomBorder(props) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  

  return (
    <View style={[
      styles.container,
      props.style,
      
      {
        borderColor:
          isFocused || props.disable ? COLORS.primary : COLORS.Greyscale,
         // marginTop:isIOS ? hp('1.8%') : hp('2.0%') ,
      },
    ]}>
   
      <TextInput
        {...props}
        placeholder={props.placeholder}
        placeholderTextColor={COLORS.Greyscale}
        style={[styles.txtInput, { borderBottomColor: isFocused ? COLORS.primary : COLORS.Greyscale }]}
        keyboardAppearance="light"
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        multiline={props.description ? true : false}
        showSoftInputOnFocus
        secureTextEntry={props.password ? showPassword : false}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        editable={props.disable ? false : true}
      />
      {props.icon ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setShowPassword(!showPassword);
          }}>
          <Icons
            name={showPassword ? 'eye-off' : 'eye'}
            style={styles.icon}
            Type={Icon.Ionicons}
          />
        </TouchableOpacity>
      ) : null}
      <Text
        style={{
          fontSize: rf(1.3),
          color: 'red',
          fontFamily: FONTFAMILY.Medium,
        }}>
        {props.error && props.value !== '' ? props.errorMessage : ''}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: wp('2%'),
    marginTop: hp('2%'),
    flexDirection: 'row',
    height: hp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1, // Add a bottom border
    borderColor: COLORS.Greyscale, // Set the initial border color
    width:wp("90%")
  },
  txtInput: {
    flex: 1,
    color: COLORS.black,
    fontFamily: FONTFAMILY.Regular,
    alignSelf: 'center',
    fontSize: rf(1.6),
    borderBottomWidth: 1, // Add a bottom border
    borderColor: 'transparent', // Set the initial border color to transparent
  },
  icon: {
    left: 25,
    fontSize: rf(2.5),
    color: COLORS.Greyscale,
  },
  // The rest of your styles remain the same
});

export default memo(EditTextBottomBorder);
