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
import Icons, { Icon } from '../../components/Icons';

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
                {/* <View style={styles.col8}>
               
                  <View style={styles.row}>
              <Image source={IMAGES.ZoneIcon} style={{width:18,height:18}} />

       <Text style={styles.myTextGreyBold}>Zone
</Text>
</View>
<View style={styles.row}>
<Icons
      name={'location'}
      Type={Icon.Entypo}
      size={rf(2.4)}
      color={COLORS.black}
    />
       <Text style={styles.myTextGreyBold}>Location
</Text>
</View>
<View style={styles.row}>
              <Image source={IMAGES.AmountIcon} style={{width:18,height:18}} />

       <Text style={styles.myTextGreyBold}>Customs Clearance & Delivery Fee
</Text>
</View>
               
                </View> */}
                <View style={styles.col4}></View>
              </View>
            
            <View style={styles.col12}>
           
              <View style={styles.col12}>
              <View style={styles.row}>
              {/* <Image source={IMAGES.ZoneIcon} style={{width:18,height:18}} /> */}
              <Text style={styles.myTextGreyBold}> ZONE -
</Text>
       <Text style={styles.myTextGreyBold}>0 Pick Up
</Text>
</View>
                
<View style={styles.row}>
<Icons
      name={'location'}
      Type={Icon.Entypo}
      size={rf(2.4)}
      color={COLORS.black}
    />
<Text style={styles.myTextGrey}>General Post Office


</Text>
</View>

<View style={styles.row}>
              <Image source={IMAGES.AmountIcon} style={{width:24,height:24}} />

              <Text style={styles.myTextGreyTBold}>EC$12.00 
              <Text style={styles.myTextGreyT}> per package
</Text>
</Text>
</View>


               
              </View>
              <View style={styles.hr}></View>
              <View style={styles.col12}>


              <View style={styles.row}>
              {/* <Image source={IMAGES.ZoneIcon} style={{width:18,height:18}} /> */}
              <Text style={styles.myTextGreyBold}> ZONE -
</Text>
              <Text style={styles.myTextGreyBold}>1

</Text>
</View>

               
<View style={styles.row}>
<Icons
      name={'location'}
      Type={Icon.Entypo}
      size={rf(2.4)}
      color={COLORS.black}
    />

    
                <Text style={styles.myTextGrey}>Valley central
</Text>
</View>


<View style={styles.row}>
              <Image source={IMAGES.AmountIcon} style={{width:24,height:24}} />

             

<View>

<Text style={styles.myTextGreyT}>1st package - 

<Text style={styles.myTextGreyTBold}> EC$ 20.00
</Text>
</Text>
<Text style={styles.myTextGreyT}>Each additional package - 

<Text style={styles.myTextGreyTBold}> EC$ 5.00
</Text>
</Text>

</View>


</View>






              </View>
              <View style={styles.hr}></View>
              <View style={styles.col12}>

              <View style={styles.row}>
              {/* <Image source={IMAGES.ZoneIcon} style={{width:18,height:18}} /> */}
              <Text style={styles.myTextGreyBold}> ZONE -
</Text>
              <Text style={styles.myTextGreyBold}>2 EAST

</Text>
</View>

               
<View style={styles.row}>
<Icons
      name={'location'}
      Type={Icon.Entypo}
      size={rf(2.4)}
      color={COLORS.black}
    />
        <Text style={styles.myTextGrey}>Albert Lake Dr. traffic light to Best Buy Supermarket/ Stoney Grounf to Little Dix Round About
</Text>
</View>
    

<View style={styles.row}>
              <Image source={IMAGES.AmountIcon} style={{width:24,height:24}} />

             

<View>

<Text style={styles.myTextGreyT}>1st package - 

<Text style={styles.myTextGreyTBold}> EC$ 25.00
</Text>
</Text>
<Text style={styles.myTextGreyT}>Each additional package - 

<Text style={styles.myTextGreyTBold}> EC$ 5.00
</Text>
</Text>

</View>


</View>
              </View>
              <View style={styles.hr}></View>
             
              <View style={styles.col12}>

              <View style={styles.row}>
              {/* <Image source={IMAGES.ZoneIcon} style={{width:18,height:18}} /> */}
              <Text style={styles.myTextGreyBold}> ZONE -
</Text>
              <Text style={styles.myTextGreyBold}>2 WEST</Text>
</View>

                <View style={styles.row}>
<Icons
      name={'location'}
      Type={Icon.Entypo}
      size={rf(2.4)}
      color={COLORS.black}
    />
        <Text style={styles.myTextGrey}>George Hill to traffic light in South Hill
</Text>
</View>
                
<View style={styles.row}>
              <Image source={IMAGES.AmountIcon} style={{width:24,height:24}} />

             

<View>

<Text style={styles.myTextGreyT}>1st package - 

<Text style={styles.myTextGreyTBold}> EC$ 25.00
</Text>
</Text>
<Text style={styles.myTextGreyT}>Each additional package - 

<Text style={styles.myTextGreyTBold}> EC$ 5.00
</Text>
</Text>

</View>


</View>
              </View>
              <View style={styles.hr}></View>
             
              <View style={styles.col12}>

<View style={styles.row}>
{/* <Image source={IMAGES.ZoneIcon} style={{width:18,height:18}} /> */}
<Text style={styles.myTextGreyBold}> ZONE -
</Text>
<Text style={styles.myTextGreyBold}>3 EAST</Text>
</View>

 
  <View style={styles.row}>
<Icons
name={'location'}
Type={Icon.Entypo}
size={rf(2.4)}
color={COLORS.black}
/>
<Text style={styles.myTextGrey}>After Best Buy Supermarket/ After Little Dix Round About to tip of East End
</Text>
</View>

  
<View style={styles.row}>
<Image source={IMAGES.AmountIcon} style={{width:24,height:24}} />



<View>

<Text style={styles.myTextGreyT}>1st package - 

<Text style={styles.myTextGreyTBold}> EC$ 30.00
</Text>
</Text>
<Text style={styles.myTextGreyT}>Each additional package - 

<Text style={styles.myTextGreyTBold}> EC$ 5.00
</Text>
</Text>

</View>


</View>
</View>
<View style={styles.hr}></View>
              <View style={styles.col12}>

              <View style={styles.row}>
              {/* <Image source={IMAGES.ZoneIcon} style={{width:18,height:18}} /> */}
              <Text style={styles.myTextGreyBold}> ZONE -
</Text>
              <Text style={styles.myTextGreyBold}>3 WEST</Text>
</View>

               
                <View style={styles.row}>
<Icons
      name={'location'}
      Type={Icon.Entypo}
      size={rf(2.4)}
      color={COLORS.black}
    />
        <Text style={styles.myTextGrey}>West of South Hill traffic light to the tip of West End
</Text>
</View>

                
<View style={styles.row}>
              <Image source={IMAGES.AmountIcon} style={{width:24,height:24}} />

             

<View>

<Text style={styles.myTextGreyT}>1st package - 

<Text style={styles.myTextGreyTBold}> EC$ 30.00
</Text>
</Text>
<Text style={styles.myTextGreyT}>Each additional package - 

<Text style={styles.myTextGreyTBold}> EC$ 5.00
</Text>
</Text>

</View>


</View>
              </View>
              <View style={styles.hr}></View>



             


                       
            </View>
         
           

              
          </View>

          
          <View style = {{alignItems:'center',gap:10,marginBottom:10,paddingHorizontal:5}}>
          <Text style={[styles.Left500BOLDText,{color:'red',textAlign:'center'}]}>13% GST will be added to delivery fees
                </Text>
                <View style={{backgroundColor:COLORS.BlueSelectionBorder}}>
                <Text style={[styles.Left500SEMIBOLDText,{paddingHorizontal:10,textAlign:'center'}]}>Overweight charge of EC$1.00 per each additional pound over 40 lbs

                </Text>
                </View>

                <View style={{backgroundColor:COLORS.lightyellow}}>
                <Text style={[styles.Left500BOLDText,{paddingHorizontal:10,textAlign:'center'}]}>The Anguilla Post Office reserves the right to change its delivery rates as necessary


                </Text>
                </View>
                </View>
          <View style={[styles.col12,{marginTop:10}]}>
                
          <Text style={[styles.Heading,{color:'black',textAlign:'left'}]}>POCDS Delivery Zone Map
          </Text>
                
                <Image source={IMAGES.POCDSMap} style={styles.imagemap} />
                
                
                              </View>
      
          {/* </ScrollView> */}
          <CustomBlueButton
          title="Next"
          onPress={() => navigation.navigate(SCREENS.POCDSAccountDetails1,{Params1:Params1})}
          IconName={"input"}

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
    paddingHorizontal:10,
    flex: 2,
  },


 

  row: {
    flexDirection: 'row',
    gap: 10,
    alignContent:'center',
    alignItems:'center'
  },
  row1: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal:30
   
  },
  col12: {
    //
     flex: 1,
    marginVertical: 10,
    paddingHorizontal:20,
    gap:7
    // paddingRight:20
    
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
    width: wp("25%"),
    height: wp("25%"),
    resizeMode:'contain',
  },
  logo1: {
    height: wp("30%"),
    resizeMode:'contain',
    width : wp("55%")
    
  },
  logoCheck: {
    width: 30,
    height: 30,
    resizeMode:'contain',

  },
  // logo1: {
  //   height: 120,
  //   resizeMode:'contain',
  // },
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
  Left500SEMIBOLDText: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize:rf(1.6),
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
  myTextGreyBold: {
    fontFamily: FONTFAMILY.Bold,
    fontSize:rf(2.0),
    color: COLORS.Lableheading,
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
  myTextGreyTBold: {
    fontFamily: FONTFAMILY.Bold,
    fontSize:rf(1.8),
    color: COLORS.Content,
  },
  myTextGreyBold: {
    fontFamily: FONTFAMILY.Bold,
    fontSize:rf(2.0),
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




