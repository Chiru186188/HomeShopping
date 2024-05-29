import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import {COLORS, FONTFAMILY, IMAGES} from '../constants/them';
import Icons, { Icon } from './Icons';
// import Icons, {Icon} from './Icons';
// import {UsernameSvg, EmailSvg, Pwdsvg, PhoneSvg} from './Svg';
// const { width } = useWindowDimensions();
    // const isTablet = width >= 768; 
    const isIOS = Platform.OS === 'ios';

function EditTextWithLable(props) {
  const [chngedLabl, setchngedLabl] = useState(props.label);

  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const hasAsterisk = props.label.includes('*');
  useEffect(() => {
    if (hasAsterisk) {
      // console.log(props.label)
      const modifiedString = props.label.replace('*', "");
// console.log(modifiedString);
      props.label = modifiedString
      // console.log(props.label)
      setchngedLabl(modifiedString)
    }
  }, [props.label, hasAsterisk]);

  return (
    <View>
      {/* <Text style={styles.label}>{props.label}</Text> */}
      <Text style={styles.label}>
      {chngedLabl}
        {hasAsterisk && <Text style={styles.redAsterisk}>*</Text>}
       
      </Text>
    <View
      style={[
        styles.container,
        props.style,
        
        {
          borderColor: isFocused ? COLORS.primary : COLORS.Greyscale,

          // borderColor:
          //   isFocused || props.disable ?  COLORS.primary : COLORS.Greyscale,
           // marginTop:isIOS ? hp('1.8%') : hp('2.0%') ,
           backgroundColor: props.disable ? COLORS.lightGreySelection : 'white',

          },
      ]}>      
      <TextInput
        {...props}
        placeholder={props.placeholder}
        placeholderTextColor={COLORS.Greyscale}
        style={[styles.txtInput]}
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
          </View>

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
    paddingHorizontal: wp('1.5%'),
    marginTop: hp('1%'),
    flexDirection: 'row',
    height: hp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.Greyscale,borderRadius:10,
     width : wp("89%")
  },
  txtInput: {
    flex: 0.96,
    // height:'100%',
    color: COLORS.Content,
    fontFamily: FONTFAMILY.Bold,
    alignSelf: 'center',
    fontSize: rf(1.8),
  },
  icon: {
     left: 5,
    fontSize: rf(2.5),
    color: COLORS.Subheading,
  },
  svg: {
    position: 'absolute',
    left: 15,
    color: COLORS.Greyscale,
  },
  label: {
    marginTop: hp('1%'),
    fontSize: rf(1.8),
    color: COLORS.Lableheading,
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('1%')
  },
  redAsterisk: {
    color: 'red',
  },

});
export default memo(EditTextWithLable);
