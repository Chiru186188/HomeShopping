import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
 import {COLORS, CONSTANTS, DEFAULTARRAYS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES} from '../../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../../common/responsiveFunction';

import { useEffect,useState } from 'react';
import GradientBackground from '../../../components/GradientBackground';
import HeaderWithBackButton from '../../../components/HeaderWithBackButton';
import EditTextWithLable from '../../../components/EditTextWithLable';
import CustomButtons from '../../../components/CustomButtons';
import EditTextBottomBorder from '../../../components/EditTextBottomBorder';
import CustomRadioButtons from '../../../components/CustomRadioButtons';
import CustomButtonsBAndS from '../../../components/CustomButtonsBAndS';
import { useRoute } from '@react-navigation/native';
import CustomHeader from '../../../components/CustomHeader';
// import CustomRadioButtons from '../../../components/CustomRadioButtons';

export default function ThankYouScreen({navigation}) {
 
useEffect(() => {
console.log("HIIII")
  return () => {
   
  };
}, []);

const handlePress = () => {
};
  return (
     <GradientBackground>
    <HeaderWithBackButton onPress={handlePress} title = "Thank You" />

    <View style={styles.container}>
    {/* <ScrollView> */}


    <Image source={IMAGES.Checkicon} style={{
    width: 150,
    height: 150,
    marginBottom:40
    
  }} />
    <Text  style={[styles.Heading]}> Thank You
</Text>
<Text  style={[styles.Left500BOLDText]}> Your application has been submitted successfully.
</Text>


     





          {/* </ScrollView> */}
        
    </View>
   
     </GradientBackground>

  );
}

const styles = StyleSheet.create({
  // containerSc: {
   
  //   width : wp('94'),
  //   alignContent:'center',
  //   backgroundColor :COLORS.white,
  //   margin:20,
  //   borderRadius : 15,
  //   alignSelf:'center',

  // },

  container: {
     width : wp('94'),
     alignSelf:'center',    
     backgroundColor :COLORS.white,
     margin:20,
    // borderRadius : 15,
    // padding:15,
    borderRadius : 15,
    alignContent:'center',
    justifyContent:'flex-start',
    alignItems:'center',
    padding:65
  },


  Heading: {
    fontFamily: FONTFAMILY.Bold,
    textAlign: 'center',
    fontSize:rf(2.4)
  },

   Left500BOLDText: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize:rf(1.8),
    textAlign: 'center',
  },
 
 

  


})

