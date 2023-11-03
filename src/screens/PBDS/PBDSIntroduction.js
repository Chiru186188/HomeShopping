import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
 import {COLORS, CONSTANTS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES} from '../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';

import { useEffect,useState } from 'react';
import GradientBackground from '../../components/GradientBackground';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import CustomBlueButton from '../../components/CustomBlueButton';
import Icons, { Icon } from '../../components/Icons';

export default function PBDSIntroduction({navigation}) {
  
useEffect(() => {
console.log("HIIII")
  return () => {
   
  };
}, []);
const handlePress = () => {
};
  return (
     <GradientBackground>
    <HeaderWithBackButton onPress={handlePress} title = "Bag Delivery" />

    <ScrollView style= {styles.containerSc}> 
    <View style={styles.container}>
    {/* <ScrollView> */}
    <View style={styles.col12}>
          </View>
          <Image source={IMAGES.logoHS} style={styles.logo} />

          <View style={styles.col11}>
            <Text style={styles.Heading}>
            Private Bag Delivery Service Please {' '}
              <Text style={styles.textDanger}>click</Text> here to sign up
            </Text>
          </View>
          

         

            <Image source={IMAGES.PBDSlogo} style={styles.image} />
            <Text style={[styles.Left500Text,{margin:16}]}>This service is targeted specifically to our business clientele who require on time delivery and collection of their important mail.

</Text>


          
             
            <View>
           


           
            <View style={[{width:wp('85%'),paddingRight:20,gap:10,paddingBottom:20 }]}>

            <View style={styles.row1}>
            <Image source={IMAGES.Checkicon1} style={styles.logoCheck} />

                <Text style={styles.Left500Text}>Daily delivery and pick up of 
                mail to and from your place of business</Text>
              </View>
              <View style={styles.row1}>
              <Image source={IMAGES.Checkicon1} style={styles.logoCheck} />

                <Text style={styles.Left500Text}>Eliminates use of Officer/Messenger</Text>
              </View>
              <View style={styles.row1}>
              <Image source={IMAGES.Checkicon1} style={styles.logoCheck} />

                <Text style={styles.Left500Text}>Attractive rates
</Text>
              </View>
              <View style={styles.row1}>
              <Image source={IMAGES.Checkicon1} style={styles.logoCheck} />

                <Text style={styles.Left500Text}>High level security</Text>
              </View>
              <View style={styles.row1}>
              <Image source={IMAGES.Checkicon1} style={styles.logoCheck} />

                <Text style={styles.Left500Text}>Rates paid annually</Text>
              </View>
           
              </View>
              </View>
          {/* </ScrollView> */}
          <CustomBlueButton
          title="Sign up"
          onPress={() => navigation.navigate(SCREENS.PBDSAccountDetails1)}
         
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(2.0)}} // Custom text style
        />
    </View>
   
    </ScrollView>
     </GradientBackground>

  );
}

const styles = StyleSheet.create({
  containerSc: {
    flex: 1,
    width : wp('94'),
    alignContent:'center',
    backgroundColor :COLORS.white,
    margin:20,
    borderRadius : 15,
    alignSelf:'center'

  },

  container: {
    flex: 1,
    // width : wp('94'),
    alignContent:'center',
    backgroundColor :COLORS.white,
    // margin:20,
    // borderRadius : 15,
    // padding:15,
    borderRadius : 15,

    justifyContent:'flex-start',
    alignItems:'center',
    paddingVertical:15
  },
 
 
  col4: {
    flex: 1,
  },
  col8: {
    flex: 2,
  },


 

  row: {
    flexDirection: 'row',
  },
  col12: {
    // flex: 1,
    marginVertical: 10,
    alignSelf:'flex-start',
    paddingHorizontal:10,

    
  },col14: {
    // flex: 1,
    marginVertical: 10,
    paddingHorizontal:10
    
  },
  col11: {
     flex: 1,
    marginVertical: 10,
    paddingHorizontal:10

  },
  col15: {
    flex: 1,
    paddingHorizontal:10
  //  marginVertical: 10,
   
 },
  col13: {
    // flex: 1,
    marginVertical: 10,
    paddingHorizontal:20
    
  },
  logo: {
    width: 120,
    height: 120,
  },
  fw500Text: {
    fontWeight: '500',
    textAlign: 'center',
  },
  Heading: {
    fontFamily: FONTFAMILY.Bold,
    textAlign: 'center',
    fontSize:rf(2.0)
  },
  Left500Text: {
    fontFamily: FONTFAMILY.Regular,
    fontSize:rf(1.8),
    textAlign: 'left',
  },
   Left500BOLDText: {
    fontFamily: FONTFAMILY.Bold,
    fontSize:rf(1.8),
    textAlign: 'left',
  },
  logoCheck: {
    width: 24,
    height: 24,
    resizeMode:'contain',

  },
  textDanger: {
    color: COLORS.CancelRED,
    fontSize:rf(2.0),
    fontFamily: FONTFAMILY.Bold,
  },
  image: {
    width: wp('80%'),
    height: 300,
    resizeMode:'contain',
marginBottom:25
  },
  factsList: {
    marginVertical: 10,
  },
  factsItem: {
    // marginVertical: 5,
  },
  fw800Text: {
    fontFamily: FONTFAMILY.Bold,
    textAlign: 'left',
    fontSize:rf(2.0)
  },
  myTextGrey: {
    fontFamily: FONTFAMILY.Regular,
    fontSize:rf(1.8),
    color: COLORS.Lableheading,
  },
  myTextGreyT: {
    fontFamily: FONTFAMILY.Medium,
    fontSize:rf(1.8),
    color: COLORS.Content,
  },
  myTextGreyBold: {
    fontFamily: FONTFAMILY.Bold,
    fontSize:rf(1.8),
    color: COLORS.CancelRED,
  },
  hr: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  signUpBtn: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  
  row1: {
    flexDirection: 'row',
    gap: 10,
   
  },

});




