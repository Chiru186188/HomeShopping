import {
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
import {COLORS, FONTFAMILY} from '../constants/them';
import Icons, { Icon } from './Icons';

function EditText_WithBackgroundColor(props) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  
  return (
    <View style={[
      styles.container
    ]} >
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
          numberOfLines={100}
          ellipsizeMode="tail"
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
    backgroundColor: COLORS.lightGreySelection,
    paddingHorizontal: wp('2%'),
    marginTop: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    height: hp('8%'),
    justifyContent: 'center',
    borderRadius:10
  },
  txtInput: {
   
    flex: 0.90,
    color: COLORS.Content,
    fontFamily: FONTFAMILY.Bold,
        fontSize: rf(1.8),
    color: COLORS.black,
    alignSelf: 'center',
  },
  icon: {
    left: 5,
    fontSize: rf(2.5),
    color: COLORS.Greyscale,
  },
  svg: {
    position: 'absolute',
    left: 15,
    color: COLORS.Greyscale
  },
});
export default memo(EditText_WithBackgroundColor);
