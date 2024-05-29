import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image} from 'react-native';
import React from 'react';
// import {COLORS, CONSTANTS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES} from '../../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';

import { useEffect,useState } from 'react';
import CustomBlueButton from '../../components/CustomBlueButton';
import GradientBackground from '../../components/GradientBackground';
import { COLORS, CONSTANTS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES } from '../../constants/them';
import { useFocusEffect } from '@react-navigation/native';

export default function WelcomScreen({navigation}) {
   
useEffect(() => {

  return () => {
   
  };
}, []);


useFocusEffect(
  React.useCallback(() => {
    
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      console.log("beforeRemove",e)
      const originalString = e.target;
      const arrayOfSubstrings = originalString.split('-');
      
      if (e.data.action.type === 'GO_BACK' && arrayOfSubstrings[0]=== 'WelcomScreen') {

     if (Platform.OS === 'android') {
        if (!handleBackGesture()) {
          e.preventDefault();
        }
      }
    }
  
    });

    
    const handleBackGesture = () => {
      console.log('ooooooo')
      return false;
    };
       
  }, [navigation])
);



  return (
     <GradientBackground>

    <View style={styles.container}>
    <Image source={IMAGES.logoHS} style={{
    width: 150,
    height: 150,
    resizeMode: 'contain'
  }} 
  />

      <View>
        {/* <Logoimage style={{alignSelf: 'center'}} /> */}
        <Text style={styles.txt}>
          WELCOME {' '}
        </Text>
        <Text style={styles.txt1}>
        General Post Office - Anguilla
                </Text>
               
       
      </View>
      <View>
      <Image source={IMAGES.logoBg} style={{
    width: wp("90%"),
    height: 250,
    // position: 'relative'
    resizeMode:"contain"
  }} />
  </View>

<View style={styles.buttonContainer}>
        <CustomBlueButton
          title="Sign up"
          onPress={() => navigation.navigate(SCREENS.RegistrationPage)}
          IconName={"input"}

          buttonStyle={styles.signUpButton} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(2.0)}} // Custom text style
        />
        <CustomBlueButton
          title="Login"
          onPress={() => navigation.navigate(SCREENS.LoginScreen)}
          IconName={"login"}

          buttonStyle={styles.loginButton} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(2.0)}}         />
      </View>
    </View>
     </GradientBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.white,
    // paddingHorizontal: wp('3%'),
justifyContent:'space-evenly',
alignContent:'center',
alignItems:'center',
padding: 20
  },
  subContainer: {
    flex: 0.9,
  },
  buttonContainer: {
   gap :20
  },
  txt: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: rf(3.0),
    color: COLORS.Heading,
    textAlign: 'center',
    marginTop: hp('1.8%'),
  },
  button: {
    marginTop: 20, 
  },
  txt1: {
    fontFamily: FONTFAMILY.Regular,
    fontSize: rf(2.4),
    color: COLORS.Heading,
    textAlign: 'center',
  },
});




