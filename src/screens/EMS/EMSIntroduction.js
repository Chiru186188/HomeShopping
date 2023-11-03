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

export default function EMSIntroduction({navigation}) {
  
useEffect(() => {
console.log("HIIII")
  return () => {
   
  };
}, []);
const handlePress = () => {
};
  return (
     <GradientBackground>
    <HeaderWithBackButton onPress={handlePress} title = "EMS" />

    <ScrollView style= {styles.containerSc}> 
    <View style={styles.container}>
    {/* <ScrollView> */}
    <View style={styles.col12}>
          </View>
          <Image source={IMAGES.EmsLogo} style={styles.logo} />

          <View style={styles.col11}>
            <Text style={styles.Heading}>
            EXPRESS MAIL SERVICE{' '}
              <Text style={styles.textDanger}>click</Text> here to sign up
            </Text>
          </View>
          <View style={styles.col11}>
            <Text style={styles.SubHeading}>
            Send time sensitive letters/packets via our Express Mail Service.
            </Text>
          </View>
         
          <View style={[{marginHorizontal:20,marginVertical:10,gap:10 ,alignSelf:'flex-start'}]}>

<View style={styles.row1}>
<Image source={IMAGES.Checkicon1} style={styles.logoCheck} />

    <Text style={styles.Left500Text}>Lowest courier service rates</Text>
  </View>
  <View style={styles.row1}>
  <Image source={IMAGES.Checkicon1} style={styles.logoCheck} />

    <Text style={styles.Left500Text}>Regional and International delivery</Text>
  </View>
 
  <View style={styles.row1}>
<Image source={IMAGES.Checkicon1} style={styles.logoCheck} />

    <Text style={styles.Left500Text}>Large postal network</Text>
  </View>
  <View style={styles.row1}>
<Image source={IMAGES.Checkicon1} style={styles.logoCheck} />

    <Text style={styles.Left500Text}>End to end tracking
</Text>
  </View>
  </View>


  <View style={styles.col13}>
            <Text style={styles.Left500BOLDText}>
            Please inquire about delivery times with our sales officers at the time of receiving service.

</Text>
          </View>


          <View style={styles.col12}>
           
           <View style={styles.col16}>
             <Text style={styles.myTextGreyT}>Zone 1 </Text>
             <Text style={styles.myTextGrey}>Up to 500 gms</Text>

             <Text style={styles.myTextGrey}>$28.50</Text>
           </View>
           <View style={styles.col16}>
             <Text style={styles.myTextGreyT}>Zone 2 </Text>
             <Text style={styles.myTextGrey}>1 Kg</Text>

             <Text style={styles.myTextGrey}>$31.50</Text>
           </View>

           <View style={styles.col16}>
             <Text style={styles.myTextGreyT}>Zone 3 </Text>
             <Text style={styles.myTextGrey}>1 ½ kg

</Text>

             <Text style={styles.myTextGrey}>$34.50</Text>
           </View>
           <View style={styles.col16}>
             <Text style={styles.myTextGreyT}>Zone 1 </Text>
             <Text style={styles.myTextGrey}>2 kg

</Text>

             <Text style={styles.myTextGrey}>$37.50</Text>
           </View>
           <View style={styles.col16}>
             <Text style={styles.myTextGreyT}>Zone 4 </Text>
             <Text style={styles.myTextGrey}>For Each additional 500 gms or 1/2 kg
</Text>
             <Text style={styles.myTextGrey}>$3.00</Text>
           </View>
         </View>


            

            
           
           
         
           
           
           
           
         
            
           
        
       
      
  
           
         
        

           
          <CustomBlueButton
          title="Sign up"
          onPress={() => navigation.navigate(SCREENS.EMSIntroductionSecond)}
         
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

    
  },
  col16: {
    // flex: 1,
    marginVertical: 5,
    alignSelf:'flex-start',
    paddingHorizontal:10,
    backgroundColor:COLORS.lightGreySelection,
    width:wp('90%')

    
  }
  ,col14: {
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
    width: wp('80%'),
    height: 120,
    resizeMode:'contain'
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
  SubHeading: {
    fontFamily: FONTFAMILY.Bold,
    textAlign: 'center',
    fontSize:rf(1.8)
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
    color: COLORS.Content,
  },
  myTextGreyT: {
    fontFamily: FONTFAMILY.SemiBold,
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




