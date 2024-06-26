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
import { useRoute } from '@react-navigation/native';

export default function RentalBoxIntroduction({navigation}) {
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
    <HeaderWithBackButton onPress={handlePress} title = "Rental Box" />

    <ScrollView style= {styles.containerSc}> 
    <View style={styles.container}>
    {/* <ScrollView> */}
    <View style={styles.col12}>
          </View>
          <Image source={IMAGES.logoHS} style={styles.logo} />

          <View style={styles.col11}>
            <Text style={styles.Heading}>
            Private Post Office Box Rental{' '}
              {/* <Text style={styles.textDanger}>click</Text> here to sign up */}
            </Text>
          </View>
          

          <View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,alignContent:'left',width : wp('94')}]}>
              <View style={styles.col8}>
                <Text style={styles.Left500BOLDText}>Available at the following Location:</Text>
              </View>
             
            </View>

            <Image source={IMAGES.HomeSimage} style={styles.image} />
            

            <View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,alignContent:'left',width : wp('94')}]}>
              <View style={styles.col8}>
                <Text style={styles.Left500BOLDText}>Rental Fees</Text>
              </View>
            </View>
           
           
            <View style={styles.col12}>
            <Text style={[styles.myTextGreyT,{paddingHorizontal:10}]}>Medium Boxes <Text style={styles.myTextGreyBold}>EC$100.00 </Text>annually</Text>
            </View>
           
            <View style={styles.col12}>
            <Text style={[styles.myTextGreyT,{paddingHorizontal:10}]}>Large Boxes <Text style={styles.myTextGreyBold}>EC$140.00 </Text>annually</Text>
            </View>
           
            <View style={styles.col12}>
            <Text style={[styles.myTextGreyT,{paddingHorizontal:10}]}>Key Deposit<Text style={styles.myTextGreyBold}>EC$15.00 </Text>(par key)</Text>
         

            </View>
         
         
            
           
        
          {/* </View> */}
   <View style={styles.hr}></View>
      
   <View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginTop:10,alignContent:'left',width : wp('94')}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Contact Information

</Text>






                </View>

                
              
              </View>
           
         
              <View style={[{marginVertical:10,gap:10}]}>
              <View style={styles.row1}>
             
        <Icons
      name={'phone'}
      Type={Icon.Feather}
      size={rf(2.4)}
      color={COLORS.black}
    />

                <Text style={styles.Left500Text}>+1-264-497-2528</Text>
              </View>
              <View style={styles.row1}>
              <Icons
      name={'mail'}
      Type={Icon.Octicons}
      size={rf(2.4)}
      color={COLORS.black}
    />
                <Text style={styles.Left500Text}>postofficegov.ai or angtamp@gov.ai</Text>
              </View>
              <View style={styles.row1}>
              <Icons
      name={'facebook'}
      Type={Icon.Zocial}
      size={rf(2.4)}
      color={COLORS.black}
    />
                <Text style={styles.Left500Text}>anguillapostalservice</Text>
              </View>
            


            </View>  

            <View>
            <View style={styles.hr}></View>


            <View style={styles.col12}>
              
            <Text style={[styles.myTextGreyT,{paddingHorizontal:10}]}>Benefits of renting your own Private Post Office box:</Text>
            </View>

            <View style={[{marginHorizontal:20,marginVertical:10,gap:10 }]}>

            <View style={styles.row1}>
            <Image source={IMAGES.Checkicon1} style={styles.logoCheck} />

                <Text style={styles.Left500Text}>24 hour access - Collect mail at your convenience</Text>
              </View>
              <View style={styles.row1}>
              <Image source={IMAGES.Checkicon1} style={styles.logoCheck} />

                <Text style={styles.Left500Text}>Privacy</Text>
              </View>
              </View>
              </View>
          {/* </ScrollView> */}
          <CustomBlueButton
          title="Next"
          onPress={() => navigation.navigate(SCREENS.RentalBoxAccountDetails1,{Params1:Params1})}
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




