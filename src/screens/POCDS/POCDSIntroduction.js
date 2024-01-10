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
import { useRoute } from '@react-navigation/native';

export default function POCDSIntroduction({navigation}) {
  const route = useRoute();

  const {Params1 } = route.params;

useEffect(() => {

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
    <View style={[styles.row,{justifyContent:'space-between'}]}>
            <Image source={IMAGES.logoHS} style={styles.logo} />
            <Image source={IMAGES.POCDSlogo} style={styles.logo1} />

          </View>

          <View style={styles.col12}>
            <Text style={styles.Heading}>
            POST OFFICE CLEARANCE AND DELIVERY SERVICE (POCDS) AGREEMENT EZONE, HOME SHOPPING AND POSTAL PACKAGES
            </Text>
          </View>
          
          
            <View style={styles.col13}>
            <View style={styles.row1}>

            <Text style={[styles.Left500Text]}>Clearance of Home Shopping or eZone, and or postal packages on customers' behalf.</Text>
            </View>
            <View style={styles.factsList}>
              <View style={styles.row1}>
              <Image source={IMAGES.Checkicon1} style={styles.logoCheck} />

                <Text style={styles.Left500Text}>Quicker clearance of packages</Text>
              </View>
              <View style={styles.row1}>
              <Image source={IMAGES.Checkicon1} style={styles.logoCheck} />

                <Text style={styles.Left500Text}>Professional and efficient service</Text>
              </View>
              <View style={styles.row1}>
              <Image source={IMAGES.Checkicon1} style={styles.logoCheck} />

                <Text style={styles.Left500Text}>Affordable rates</Text>
              </View>
              <View style={styles.row1}>
              <Image source={IMAGES.Checkicon1} style={styles.logoCheck} />

                <Text style={styles.Left500Text}>Delivery of Packages to Customers’ Homes, Place of Work or Pick up at the General Post Office</Text>
              </View>

            </View>
          </View>
   

          <View style={styles.col11}>
          
            <View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginTop:10,alignContent:'left'}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Zone, Location, Delivery Customs Fee</Text>
                </View>
                <View style={styles.col4}></View>
              </View>
            
            <View style={styles.col12}>
           
              <View style={styles.col12}>
                <Text style={styles.myTextGrey}>0 Pick Up
</Text>
<Text style={styles.myTextGrey}>General Post Office


</Text>
<Text style={styles.myTextGreyT}>EC$12.00 per package
</Text>
               
              </View>
              <View style={styles.hr}></View>
              <View style={styles.col12}>
                <Text style={styles.myTextGrey}>1

</Text>
                <Text style={styles.myTextGrey}>Valley central
</Text>
<Text style={styles.myTextGreyT}>1st package - EC$20.00
</Text>
<Text style={styles.myTextGreyT}>Each additional package - EC$5.00
</Text>
              </View>
              <View style={styles.hr}></View>
              <View style={styles.col12}>
                <Text style={styles.myTextGrey}>2 EAST

</Text>
    <Text style={styles.myTextGrey}>Albert Lake Dr. traffic light to Best Buy Supermarket/ Stoney Grounf to Little Dix Round About
</Text>
<Text style={styles.myTextGreyT}>1st package - EC$25.00
</Text>
<Text style={styles.myTextGreyT}>Each additional package - EC$5.00


</Text>
              </View>
              <View style={styles.hr}></View>
             
              <View style={styles.col12}>
                <Text style={styles.myTextGrey}>2 WEST</Text>
                <Text style={styles.myTextGrey}>George Hill to traffic light in south hill
</Text>
<Text style={styles.myTextGreyT}>1st package - EC$25.00
</Text>
<Text style={styles.myTextGreyT}>Each additional package - EC$5.00
</Text>
              </View>
              <View style={styles.hr}></View>
             

              <View style={styles.col12}>
                <Text style={styles.myTextGrey}>3 EAST</Text>
                <Text style={styles.myTextGrey}>After Best Buy Supermarket/ After Little dix rouad About to tip of East End
</Text>
<Text style={styles.myTextGreyT}>1st package - EC$30.00
</Text>
<Text style={styles.myTextGreyT}>Each additional package - EC$5.00
</Text>
              </View>
              <View style={styles.hr}></View>



             


                       
            </View>
         
           

              
          </View>

          
          {/* <View style={[styles.col12,{}]}>
          <Text style={styles.Left500BOLDText}>POCDS Delivery Zone Map
                </Text>
                   </View> */}
          <View style={[styles.col12,{marginTop:10}]}>
                
              
                
                <Image source={IMAGES.POCDSMap} style={styles.imagemap} />
                
                
                              </View>
      
          {/* </ScrollView> */}
          <CustomBlueButton
          title="Sign up"
          onPress={() => navigation.navigate(SCREENS.POCDSIntroductionSecond,{Params1:Params1})}
         
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
  row1: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal:20
   
  },
  col12: {
    // flex: 1,
    marginVertical: 10,
    paddingHorizontal:10
    
  },col14: {
    // flex: 1,
    marginVertical: 10,
    paddingHorizontal:10
    
  },
  col11: {
     flex: 1,
    marginVertical: 10,
    
  },
  col15: {
    flex: 1,
    paddingHorizontal:10
  //  marginVertical: 10,
   
 },
  col13: {
    marginVertical: 10,
    paddingHorizontal:20
    
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode:'contain',

  },
  logoCheck: {
    width: 30,
    height: 30,
    resizeMode:'contain',

  },
  logo1: {
    height: 120,
    resizeMode:'contain',
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
  textDanger: {
    color: COLORS.CancelRED,
    fontSize:rf(2.0),
    fontFamily: FONTFAMILY.Bold,
  },
  image: {
    width: wp('80%'),
    height: 100,
    resizeMode:'contain',
marginBottom:25
  },
  imagemap: {
    width: wp('85%'),
    height: 350,
    resizeMode:'stretch',
    
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
    color: COLORS.Content,
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
  


});




