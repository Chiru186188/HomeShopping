import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, CONSTANTS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES} from '../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';

import { useEffect,useState } from 'react';
import CustomBlueButton from '../../components/CustomBlueButton';
import GradientBackground from '../../components/GradientBackground';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import EditTextWithLable from '../../components/EditTextWithLable';
import Icons, { Icon } from '../../components/Icons';
import CustomHeader from '../../components/CustomHeader';

export default function LoginScreen({navigation}) {
  const [email, setemail] = useState('');
  const [pwd, setupwd] = useState('');
  const [isChecked, setIsChecked] = useState(false);

useEffect(() => {
console.log("HIIII")
  return () => {
   
  };
}, []);
const handlePress = () => {
};
  return (
     <GradientBackground>
    <HeaderWithBackButton onPress={handlePress} title = "Customer Login" />

    <View style={styles.container}>


      <View style={{}}>
        {/* <Logoimage style={{alignSelf: 'center'}} /> */}
        <Text style={styles.txt}>
        Registered Customers  {' '}
        </Text>
        <Text style={styles.txt1}>
        If you have an Account, Sign in with your e-mail address</Text>
               
       
      </View>
  
      <View>
      <EditTextWithLable
        label="Username"
        placeholder="Username"
        value={email}
        onChangeText={setemail}
        keyboardType="default"
      />
      <EditTextWithLable
        label="Password"
        placeholder="Password"
        value={pwd}
        onChangeText={setupwd}
        keyboardType="default"
        password // This will show a password toggle icon
        icon
      />

<View style={styles.subContainer2}>
          <TouchableOpacity
            // activeOpacity={0.8}
            onPress={() => {
              setIsChecked(!isChecked);
            }}>
            <Icons
              name={isChecked ? 'checkbox-active' : 'checkbox-passive'}
              style={styles.icon}
              Type={Icon.Fontisto}//
              size={rf(2.0)}
            />
          </TouchableOpacity>
          <Text style={styles.rememberme}>
          Remember me?{' '}
          
          </Text>
        </View>
    </View>
<View style={styles.buttonContainer}>
        
<View style={styles.SignUpContainer}>
          <Text style={styles.txt1}>Do not have an account ? </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate(SCREENS.SelectServices);
            }}>
            <Text
              style={[
                styles.txt1,
                {color: COLORS.primary, fontFamily: FONTFAMILY.Bold},
              ]}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>


        <CustomBlueButton
          title="Login"
          onPress={() => {
            navigation.navigate(SCREENS.DashBoard);
          }}          buttonStyle={styles.loginButton} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(2.0)}}         />

<View style={styles.SignUpContainer}>
          <TouchableOpacity
            // activeOpacity={0.8}
            onPress={
              () => {
              //  navigation.navigate(SCREENS.ForgotPwd);
            }
            }>
            <Text
              style={
                styles.txt1
}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
     </GradientBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width : wp('94'),
    justifyContent:'space-between',
    //alignItems:"center",
    backgroundColor :COLORS.white,
    margin:20,
    borderRadius : 15,
    padding:10,
    alignSelf:'center'
  },
  subcontainer: {
  
    width : wp('94'),
    alignItems:"center",
  
  },
  
  buttonContainer: {
   gap :10,
   alignItems: 'center',
  },
  txt: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: rf(3.0),
    color: COLORS.Heading,
    textAlign: 'left',
    marginTop: hp('1.8%'),
  },
  button: {
    marginTop: 20, 
  },
  icon: {
    fontSize: rf(2.5),
    color: COLORS.Subheading,
    marginRight: 10,
  },
  txt1: {
    fontFamily: FONTFAMILY.Regular,
    fontSize: rf(1.7),
    color: COLORS.Subheading,
    textAlign: 'left',
  },
  rememberme: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: rf(1.7),
    color: COLORS.Lableheading,
    textAlign: 'left',
  },
  SignUpContainer: {
   
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subContainer2: {
    marginVertical: 10,
  
   flexDirection: 'row',
   justifyContent: 'flex-start',
   alignItems: 'center',
 },
});



