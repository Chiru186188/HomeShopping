import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import {COLORS, FONTFAMILY, IMAGES} from '../constants/them';
import Icons, {Icon} from './Icons';
import {UsernameSvg, EmailSvg, Pwdsvg, PhoneSvg} from './Svg';

function EditText(props) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const Svg = () => {
    switch (props.placeholder) {
      case 'Username':
        return <UsernameSvg style={styles.svg} />;
        break;
        case 'Name':
          return <UsernameSvg style={styles.svg} />;
          break;
      case 'Password':
        return <Pwdsvg style={styles.svg} />;
        break;
      case 'New Password':
        return <Pwdsvg style={styles.svg} />;
        break;
      case 'Old Password':
        return <Pwdsvg style={styles.svg} />;
        break;
      case 'Confirm Password':
        return <Pwdsvg style={styles.svg} />;
        break;
      case 'Email':
        return <EmailSvg style={styles.svg} />;
        break;
      case 'Phone Number':
        return <PhoneSvg style={styles.svg} />;
        break;

        case 'Referral Code(optional)':
          return <Image
          style={[styles.svg,{width :22,height:22}]}
          source={IMAGES.RefferalCode} />;
          break;
        break;
    }
  };

  return (
    <View style={[styles.container,props.style]}>
      
      <Svg />

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

    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  txtInput: {
    flex: 0.75,

    // height:'100%',
    color: COLORS.black,
    fontFamily: FONTFAMILY.Regular,
    alignSelf: 'center',
    fontSize: rf(1.6),
  },
  icon: {
    left: 25,
    fontSize: rf(2.5),
    color: COLORS.Greyscale,
  },
  svg: {
    position: 'absolute',
    left: 15,
    color: COLORS.Greyscale,
  },
});
export default memo(EditText);
