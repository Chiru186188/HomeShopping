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

export default function EzoneIntroduction({navigation}) {
  const [email, setemail] = useState('');
  const [pwd, setupwd] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

useEffect(() => {
console.log("HIIII")
  return () => {
   
  };
}, []);
const handlePress = () => {
};
  return (
     <GradientBackground>
    <HeaderWithBackButton onPress={handlePress} title = "E-Zone" />

    <ScrollView style= {styles.containerSc}> 
    <View style={styles.container}>
    {/* <ScrollView> */}
    <View style={styles.col12}>
            <Image source={IMAGES.logoHS} style={styles.logo} />
          </View>

          <View style={styles.col12}>
            <Text style={styles.Heading}>
            eZone (AIR) service{' '}
              <Text style={styles.textDanger}>click</Text> here to sign up
            </Text>
          </View>
          
            <Image source={IMAGES.Ezone} style={styles.image} />
            
            <Text style={[styles.Left500Text,{margin:16}]}>This option is intended for the shipment of small packages from the United States of America by air to Anguilla. Packages can also be shipped to eZone's shipping addresses (eZ Hubs) in Canada and London for final forwarding to Anguilla. For further information on eZone's eZ Hubs, please visit</Text>

            <View style={styles.col13}>
            <Text style={styles.fw800Text}>Facts:</Text>
            <View style={styles.factsList}>
              <View style={styles.factsItem}>
                
                <Text style={styles.Left500Text}>Two to Three shipments weekly into Anguilla Recommended for light and urgently required items</Text>
              </View>
              <View style={styles.factsItem}>
                <Text style={styles.Left500Text}>Rates from Miami, USA to Anguilla calculated on actual weight 
                </Text>
              </View>
              <View style={styles.factsItem}>
                <Text style={styles.Left500Text}>Rates from London and Canada calculated on actual or chargeable weight of packages (whichever is greater)</Text>
              </View>
              <View style={styles.factsItem}>
                <Text style={styles.Left500Text}>Fast, Easy, Affordable</Text>
              </View>
            </View>
          </View>
   

          <View style={styles.col11}>
            <View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,alignContent:'left',width : wp('94')}]}>
              <View style={styles.col8}>
                <Text style={styles.Left500BOLDText}>Annual Subscription Fee</Text>
              </View>
              {/* <View style={styles.col4}>
                <Text style={[styles.Left500BOLDText,{textAlign:'right'}]}>XCD $100.00</Text>
              </View> */}
            </View>
            <View style={styles.col15}>
            <View style={styles.col12}>
            <Text style={styles.myTextGreyT}>XCD $100.00 (eZone account only) or</Text>
            </View>
            <View style={styles.col12}>

            <Text style={styles.myTextGreyT}>
            XCD $50.00 if customer also {' '}
              <Text style={styles.myTextGreyBold}>actively</Text> subscribes to the General
            </Text>
            </View>
            <View style={styles.col12}>
            <Text style={styles.myTextGreyT}>
            Post Office {' '}
              <Text style={styles.myTextGreyBold}>Home Shopping</Text> service
            </Text>
            </View>

            </View>
            <View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginTop:10,alignContent:'left',width : wp('94')}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Rates</Text>
                </View>
                <View style={styles.col4}></View>
              </View>
            
            <View style={styles.col12}>
           
              <View style={styles.col12}>
                <Text style={styles.myTextGrey}>0 – 4 lbs

</Text>
                <Text style={styles.myTextGreyT}>$14.60 USD base rate

</Text>
              </View>
              <View style={styles.hr}></View>
              <View style={styles.col12}>
                <Text style={styles.myTextGrey}>5+ lbs

</Text>
                <Text style={styles.myTextGreyT}>$3.50 USD per additional lb

</Text>
              </View>
              <View style={styles.hr}></View>
             
          
              <View style={styles.hr}></View>
              <View style={styles.col12}>
                <Text style={styles.Left500Text}>Rates shown do not include the AASPA fee, insurance and other relevant charges</Text>
                <Text style={styles.Left500Text}>Rates are subject to change in accordance with transportation and other direct costs.</Text>
              </View>
             
            </View>
         
              <View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginTop:10,alignContent:'left',width : wp('94')}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>FLIGHT SCHEDULE</Text>
                </View>
                <View style={styles.col4}></View>
              </View>

              <View style={styles.col12}>
            <View style={styles.col12}>
              <Text style={styles.myTextGrey}>FLIGHTS</Text>
              <Text style={styles.myTextGreyT}>Daily</Text>
            </View>
            <View style={styles.hr}></View>
            <View style={styles.col12}>
              <Text style={styles.myTextGrey}>CUT OFF DAY AND TIME</Text>
              <Text style={styles.myTextGreyT}>12 NOON</Text>
            </View>
            <View style={styles.hr}></View>
            <View style={styles.col12}>
              <Text style={styles.myTextGrey}>PACKAGES AVAILABLE FOR COLLECTION</Text>
              <Text style={styles.myTextGreyT}>3 – 4 working days (excludes weekends)

</Text>
            </View>
            <View style={styles.hr}></View>
            <View style={styles.col12}>
              <Text style={[styles.textDanger,{fontFamily:FONTFAMILY.Medium}]}>*Dependent on the arrival time of Cargo vessels into Anguilla, volume, weather, Acts of God, and other circumstances outside of the Post Office’s control.</Text>
            </View>
           
           
          </View>
          </View>

      




          {/* </ScrollView> */}
          <CustomBlueButton
          title="Sign up"
          onPress={() => navigation.navigate(SCREENS.EzonIntroductionSecond)}
         
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




