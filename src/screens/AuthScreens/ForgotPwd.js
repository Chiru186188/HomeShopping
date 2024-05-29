import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
/// React from 'react';
import React, {useState} from 'react';

import {COLORS, FONTFAMILY, SCREENS, SIZES, STYLES} from '../../constants/them';
import useRedux from '../../components/useRedux';
import utills from '../../utills';

import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';
import { ForgotPwdSlice } from '../../redux/slice/auth';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import GradientBackground from '../../components/GradientBackground';
import EditTextWithLable from '../../components/EditTextWithLable';
import CustomBlueButton from '../../components/CustomBlueButton';

export default function ForgotPwd({navigation}) {
  
  const [email, setemail] = useState('');
  const handlePress = () => {};
  const [isChecked, setIsChecked] = useState(false);
  const {dispatch} = useRedux();
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleEmailChange = (text) => {
    // Remove spaces from the input and update the state
    const sanitizedText = text.replace(/\s/g, ''); // This regex replaces all spaces with an empty string
    setemail(sanitizedText);
  };

  const ForgotApi = async () => {  
    if (utills.isEmptyOrSpaces(email)) {
      utills.errorAlert('', 'Please Enter Email');
      return;
    }
    if (!utills.validateEmail(email)) {
      utills.errorAlert('', 'Invalid Email');
      return;
    }
      
      let data = {
        email: email,
    
      };
      dispatch(ForgotPwdSlice(data))
        .unwrap()
        .then(res => {
          console.log('Forgot res==', res);
          if (res.success == true){
            utills.successAlert('', res.message);
            navigation.navigate(SCREENS.CreatePassword, { EmailValue: email });
          }else{
            utills.errorAlert('', res.message);
            return;
          }
        });
    };
  return (
    <GradientBackground>
    <HeaderWithBackButton onPress={handlePress} title = "Forgot Password" />

    
    <View style={{
     flex: 1,
     width : wp('94'),
     //alignItems:"center",
     backgroundColor :COLORS.white,
     margin:20,
     borderRadius : 15,
     padding:10,
     alignSelf:'center'
  }}>

   {/* / <View style={[STYLES.container, {justifyContent: 'flex-start'}]}> */}
      {/* <View style={styles.subContainer}> */}
        <Text style={styles.txt1}>
          Provide your accounts email for which you want to reset password. We
          will send verification OTP on your mail.
        </Text>
        <Spacer size={10} />

        <View>
        <EditTextWithLable
        label="Email"
        placeholder="Email"
        value={email}
        onChangeText={setemail}
        keyboardType="default"
      />
        </View>

        <Spacer size={80} />
        <CustomBlueButton
          title="Send password reset email"
          onPress={() => {
            // 
            ForgotApi()
           // navigation.navigate(SCREENS.VerificationScreen, { EmailValue: email });
         
          }}
          IconName={"send"}

          buttonStyle={styles.loginButton} // Custom button style
          texStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(2.0)}}         />

      
      {/* </View> */}
    </View>
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
    justifyContent: 'flex-end',
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
    marginTop: hp('0.4%'),
  },

  icon: {
    fontSize: rf(2.5),
    color: COLORS.checkboxBlue,
    marginHorizontal: 10,
  },
});
