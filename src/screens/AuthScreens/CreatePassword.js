import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
/// React from 'react';
import React, {useState} from 'react';

import {COLORS, FONTFAMILY, SCREENS, SIZES, STYLES} from '../../constants/them';
import Icons, {Icon} from '../../components/Icons';
import utills from '../../utills';
import useRedux from '../../components/useRedux';

import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';
import EditText from '../../components/EditText';
import { useRoute } from '@react-navigation/native';
import { ResetPasswordSlice } from '../../redux/slice/auth';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import EditTextWithLable from '../../components/EditTextWithLable';
import CustomBlueButton from '../../components/CustomBlueButton';
import GradientBackground from '../../components/GradientBackground';

export default function CreatePassword({navigation}) {
  const [pwd, setupwd] = useState('');
  const [Npwd, setNewpwd] = useState('');
  const [code, setcode] = useState('');

  const route = useRoute();
  const { EmailValue } = route.params;
  const {dispatch} = useRedux();

  
  const handlePress = () => {};
  const Resetpwd = async () => {

    if (utills.isEmptyOrSpaces(code)) {
      utills.errorAlert('', 'Please Enter Code');
      return;
    }
    if (code.length < 6) {
      utills.errorAlert('', 'Invalid Code');
      return;
    }
    if (utills.isEmptyOrSpaces(pwd)) {
      utills.errorAlert('', 'Please Enter Password');
      return;
    }
    if (utills.isEmptyOrSpaces(Npwd)) {
      utills.errorAlert('', 'Please Enter New Password');
      return;
    }
    if (pwd.length < 6) {
      utills.errorAlert('Invalid Password! ', 'It should be minimum 6 Digit');
      return;
    }
    if (Npwd.length < 6) {
      utills.errorAlert('Invalid Password! ', 'It should be minimum 6 Digit');
      return;
    }
    if (pwd != Npwd) {
      utills.errorAlert('', 'Password Should be Same as New Password');
      return;
    }



    let data = {
      email: EmailValue,
      password: pwd,
      confirmPassword: Npwd,
      code: code,
      id: 0


    };

   
    
    dispatch(ResetPasswordSlice(data))
      .unwrap()
      .then(res => {
        console.log('ResetPasswordSlice res==', res);
        if (res.status == true){
          utills.successAlert('','Password Reset Succesfully')
          navigation.navigate(SCREENS.Login);
        }else{
          utills.errorAlert('', res.message);
          return;
        }
      });
  };

  return (
    <GradientBackground>
            <HeaderWithBackButton onPress={handlePress} title = "Create Password" />

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


<EditTextWithLable
      label="Code *"
        placeholder="Enter Code"
        value={code}
        onChangeText={setcode}
        keyboardType="numeric"
        />
        
<EditTextWithLable
      label="New Password *"
        placeholder="Enter New Password"
        value={pwd}
        onChangeText={setupwd}
        keyboardType="default"
        password
        icon
      />

<EditTextWithLable
      label="Confirm Password *"
        placeholder="Enter Confirm Password"
        value={Npwd}
        onChangeText={setNewpwd}
        keyboardType="default"
        password
        icon
      />

        <Spacer size={30} />
{/* 
        <CustomButtonwithBC
          title="Save"
          onPress={Resetpwd}
        /> */}
          <CustomBlueButton
          title="Save"
          onPress={() => {
               navigation.navigate(SCREENS.LoginScreen);
            //  Resetpwd()
          }}         
          buttonStyle={styles.loginButton} // Custom button style
          IconName={"save"}
          textStyle={{fontFamily :FONTFAMILY.Bold,
          fontSize: rf(2.0)}}         
          />
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
    marginVertical: hp('5%'),
  },
  subContainer1: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputTextContainer: {
    flex: 0.85,
    justifyContent: 'space-between',
    marginTop: hp('4%'),
    paddingHorizontal: SIZES.PaddingHorizontal,
  },
  txt: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: rf(2.4),
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
  svg: {
    position: 'absolute',
  },
  icon: {
    fontSize: rf(2.5),
    color: COLORS.checkboxBlue,
    marginHorizontal: 10,
  },
});
