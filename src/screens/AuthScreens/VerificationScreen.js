import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
/// React from 'react';
import React, {useCallback, useState} from 'react';

import {COLORS, FONTFAMILY, SCREENS, SIZES, STYLES} from '../../constants/them';

import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';

import { ForgotPwdSlice, VerifyOtpSlice } from '../../redux/slice/auth';
import utills from '../../utills';
import useRedux from '../../components/useRedux';
import { useRoute } from '@react-navigation/native';
import GradientBackground from '../../components/GradientBackground';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import CustomBlueButton from '../../components/CustomBlueButton';

export default function VerificationScreen({navigation}) {
  const [email, setemail] = useState('');
  const [pwd, setupwd] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const route = useRoute();
  const { EmailValue } = route.params;
  const {dispatch} = useRedux();
  const handlePress = () => {};

  const [code, setCode] = useState('');

  const handleOtpChange = useCallback(
    code => {
      setCode(code);
    },
    [code],
  );
  const VerifyOtp = async () => {

    if (utills.isEmptyOrSpaces(code)) {
      utills.errorAlert('', 'Please Enter Code');
      return;
    }
   
    if (code.length < 6) {
      // utills.errorAlert('', 'Please Enter Valid Code');
      Alert.alert('Error', 'Please Enter Valid Code');
  return
     
    }

    let data = {
      email: EmailValue,
      otp:  parseInt(code)

    };
console.log('data',data)
    // if (!utills.isEmptyOrSpaces(code)) {
    //   utills.errorAlert('', 'Please Enter Code');
    //   return;
    // }
    
    dispatch(VerifyOtpSlice(data))
      .unwrap()
      .then(res => {
        console.log('VerifyOtp res==', res);
        if (res.status == true){
          navigation.navigate(SCREENS.CreatePassword, { EmailValue: EmailValue });
        }else{
          utills.errorAlert('', res.error);
          return;
        }
      });
  };

  const ForgotApi = async () => {
      
    let data = {
      email: EmailValue,
  
    };
    dispatch(ForgotPwdSlice(data))
      .unwrap()
      .then(res => {
        console.log('Forgot res==', res);
        if (res.status == true){
          
          utills.successAlert('',res.message)
          // navigation.navigate(SCREENS.VerificationScreen, { EmailValue: email });

        }else{
          utills.errorAlert('', res.error);
          return;
        }
      });
  };
  return (
    <GradientBackground>
    <HeaderWithBackButton onPress={handlePress} title = "Verificaion" />

    
    <View style={{
     flex: 1,
     width : wp('94'),
     backgroundColor :COLORS.white,
     margin:20,
     borderRadius : 15,
     padding:10,
     alignSelf:'center'
  }}>     
  
   {/* <View style={styles.subContainer}> */}
        <Text style={styles.txt}>Verification!</Text>
        <Text style={styles.txt1}>
          Enter the verification code we just sent you on your email address.
        </Text>
        {/* <OTPInput
         style={{
          //flex: 0.1,
          marginTop: hp('4%'),
          height : 50
        }}
          pinCount={6}
          code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged={setCode}
          autoFocusOnLoad={false}
           codeInputFieldStyle={styles.underlineStyleBase}
         codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            // console.log(`Code is ${code}, you are good to go!`);
          }}
        /> */}
        <View style={styles.subContainer2}>
          <Text style={styles.txt1}>If you didn't received a code? </Text>
          <TouchableOpacity
            // activeOpacity={0.8}
            onPress={ForgotApi}>
            <Text
              style={{
                fontFamily: FONTFAMILY.SemiBold,
                color: COLORS.primary,
                fontSize: rf(1.6),
              }}>
              Resend
            </Text>
          </TouchableOpacity>
        </View>
        <Spacer size={30} />

        {/* <CustomButtonwithBC
          title="Verify OTP"
          onPress={VerifyOtp}
        /> */}
         <CustomBlueButton
          title="Verify OTP"
          onPress={() => {
            navigation.navigate(SCREENS.CreatePassword, { EmailValue: EmailValue });

          //  VerifyOtp()
          }}          buttonStyle={styles.loginButton} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(2.0)}}         />
      </View>
    {/* </View> */}
    </GradientBackground>
  );
}

const Spacer = ({size}) => {
  return <View style={{width: size, height: size}} />;
};
const styles = StyleSheet.create({
  subContainer: {
    flex: 0.9,
    marginVertical: 15,
  },
  subContainer1: {
    marginVertical: 7,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subContainer2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('6%'),
  },
  inputTextContainer: {
    flex: 0.85,
    justifyContent: 'space-between',
    marginTop: hp('4%'),
    paddingHorizontal: SIZES.PaddingHorizontal,
  },
  txt: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: rf(2.2),
    color: COLORS.black,
    textAlign: 'left',
    marginTop: hp('1.8%'),
  },
  txt1: {
    fontFamily: FONTFAMILY.Light,
    fontSize: rf(1.6),
    color: COLORS.tabBarLabel,
    textAlign: 'left',
    // marginTop: hp('0.4%'),
    // marginBottom: 30,

  },
  svg: {
    position: 'absolute',
  },
  icon: {
    fontSize: rf(2.5),
    color: COLORS.checkboxBlue,
    marginHorizontal: 10,
  },
  underlineStyleBase: {
    // borderBottomWidth: 2,
    height: hp('8%'),
    borderColor: COLORS.black,
    // borderBottomColor: COLORS.black,
    fontSize: SIZES.twentyFive,
    color: COLORS.black,
    fontFamily: FONTFAMILY.Light,
  },
  underlineStyleHighLighted: {
    height: hp('8%'),
    // borderBottomWidth: 2,
    borderColor: COLORS.primary,
    // borderBottomColor: COLORS.primary,
    fontSize: SIZES.twentyFive,
    fontFamily: FONTFAMILY.Light,
  },
});
