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
import { ScrollView } from 'react-native-gesture-handler';

export default function ParcelSubscriptionpayment({navigation}) {
  const [email, setemail] = useState('');
  const [pwd, setupwd] = useState('');
  const [isChecked, setIsChecked] = useState(false);

useEffect(() => {
console.log("HIIII")
  return () => {
   
  };
}, []);
const GoToNext = () => {
  navigation.navigate(SCREENS.PaymentGatwayScreen)

}
const handlePress = () => {
};
  return (
     <GradientBackground>
    <CustomHeader onPress={handlePress} title = "Transaction" />
<ScrollView>
    <View>
    <View style={styles.container}>
    <View style={styles.containerTop}>
    <Text  style={styles.Left500Text}>Parcel/Subscription Transaction
</Text>
    </View>



    <View style={styles.row}>
            
    <Text  style={styles.Left500Text}>My parcels (0)
</Text>

              <Text  style={styles.Left500Text}>Membership Dues (1)

</Text>
              </View>



              <View style={styles.subcontainer}>
               
                <View style={{flexDirection:'row',gap:20}}>


              
<View style={styles.circle}> 
<Icons
      name={'dollar-sign'}
      Type={Icon.Feather}
      size={rf(2.7)}
      color={COLORS.Greyscale}
    />
</View>
<View>
<Text style={styles.txt1}>HS Registration fee
</Text>
<Text style={styles.txt2}>04 jUL 2023 06:05 PM

</Text>


</View>
</View>
<Text style={styles.txt3}>-$66.67</Text>

</View>
     
    </View>

    <View style={styles.container}>
    <View style={styles.containerTop}>
    <Text  style={styles.Left500Text}>Parcels Total (EC$66.67)</Text>
    </View>



    <View style={styles.row}>
            
    <Text  style={styles.Left500Text}>HS Registartion fee
    </Text>
 
    <Text  style={styles.Left500BOLDText}>$66.67
    </Text>

    </View>

    <View style={styles.row}>
            
            <Text  style={styles.Left500Text}>Freight Charges (Subtotal)
            </Text>
         
            <Text  style={styles.Left500BOLDText}>$66.67
            </Text>
        
            </View>

            <View style={styles.row}>
            
            <Text  style={styles.Left500Text}>AASAP Fee
            </Text>
         
            <Text  style={styles.Left500BOLDText}>$0.00
            </Text>
        
            </View>  

               <View style={styles.row}>
            
            <Text  style={styles.Left500Text}>AASAP Fee
            </Text>
         
            <Text  style={styles.Left500BOLDText}>$0.00
            </Text>
        
            </View> 

               <View style={styles.row}>
            
            <Text  style={styles.Left500Text}>Insured Amount
            </Text>
         
            <Text  style={styles.Left500BOLDText}>$0.00
            </Text>
        
            </View> 

               <View style={styles.row}>
            
            <Text  style={styles.Left500Text}>Service Charge
            </Text>
         
            <Text  style={styles.Left500BOLDText}>$0.00
            </Text>
        
            </View> 

               <View style={styles.row}>
            
            <Text  style={styles.Left500Text}>OverWt.Charge
            </Text>
         
            <Text  style={styles.Left500BOLDText}>$0.00
            </Text>
        
            </View>     

             <View style={styles.row}>
            
            <Text  style={styles.Left500Text}>Customs Charges
            </Text>
         
            <Text  style={styles.Left500BOLDText}>$0.00
            </Text>
        
            </View>      

             <View style={styles.row}>
            
            <Text  style={styles.Left500BOLDTextT}>Total Amount
            </Text>
         
            <Text  style={styles.Left500BOLDTextT}>$66.67
            </Text>
        
            </View>   
            <View style={{alignSelf:'center'}}>
        <CustomBlueButton
          title="Proceed To Pay (US$66.67)"
          onPress={GoToNext}
          buttonStyle={styles.signUpButton} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(1.8)}} // Custom text style
        />       
                    </View>   
   
    </View>
    </View>
    </ScrollView>
     </GradientBackground>

  );
}

const styles = StyleSheet.create({
  container: {
   
    width : wp('94'),
    justifyContent:'space-between',
    //alignItems:"center",
    backgroundColor :COLORS.white,
    margin:20,
    borderRadius : 15,
    gap:10,
    // paddingHorizontal:10,
    alignSelf:'center',
    paddingBottom:15
  },
  subcontainer: 
  
    {
    flexDirection:'row',
    backgroundColor : COLORS.lightGreySelection,
    paddingVertical:10,
    paddingHorizontal:10,
    margin:10,
    alignItems:'center',
    justifyContent:'space-between',
    borderRadius:10
},
  
  row:
  {paddingHorizontal:10, justifyContent:'space-between',flexDirection:'row'},
  
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
    fontFamily: FONTFAMILY.Medium,
    fontSize: rf(1.8),
    color: COLORS.Content,
    textAlign: 'left',
  },
  txt2: {
    fontFamily: FONTFAMILY.Regular,
    fontSize: rf(1.6),
    color: COLORS.Lableheading,
    textAlign: 'left',
  },
  txt3: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: rf(2.0),
    color: COLORS.Heading,
    textAlign: 'left',
  },
  circle: {
    paddingTop:wp('1.5%'),
    backgroundColor:COLORS.white,
    width:wp('9%'),
    height:wp('9%'),
    alignItems:'center',
    alignContent:'center',
    alignSelf:'center',
borderRadius:wp('4.5%')

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
containerTop:
 {backgroundColor : COLORS.lightGreySelection,alignContent:'left',justifyContent:'space-evenly',padding:15,borderTopLeftRadius: 10, // Set the top left border radius
    borderTopRightRadius: 10},
   
   
    Left500Text: {
        fontFamily: FONTFAMILY.Regular,
        fontSize:rf(1.8),
        textAlign: 'left',
      },
       Left500BOLDText: {
        fontFamily: FONTFAMILY.Medium,
        fontSize:rf(1.8),
        textAlign: 'left',
      },
      Left500BOLDTextT: {
        fontFamily: FONTFAMILY.Bold,
        fontSize:rf(1.8),
        textAlign: 'left',
      },
});




