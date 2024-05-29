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
import CustomButtons from '../../components/CustomButtons';
import CustomButtonsBAndP from '../../components/CustomButtonsBAndP';

export default function EZonepayment({navigation}) {
  const [account, setaccount] = useState('');
  const [RefNo, setRefNo] = useState('');
  const [isChecked, setIsChecked] = useState(false);

useEffect(() => {

  return () => {
   
  };
}, []);

const handlePress = () => {
};

const handleBackPress = () => {
  // Add your logic for the "Back" button action here
  navigation.goBack()
};

const handleNextPress = () => {
  // Add your logic for the "Next" button action here
  navigation.navigate(SCREENS.PaymentGatwayScreen)
};
const GoToNext = () => {
}
  return (
     <GradientBackground>
    <CustomHeader onPress={handlePress} title = "EZone Payments" />
<ScrollView>
    <View>
    <View style={styles.container}>
    <View style={styles.containerTop}>
    <Text  style={styles.Left500Text}>EZone Payments
</Text>
    </View>
    {/* //Please enter your EZone Account # and EZone Password. */}

    <View style={{alignSelf:'flex-start',marginLeft:10}}>
            <Text style={styles.txt1}>
            Please enter your{' '}
              <Text style={styles.textDanger}>EZone</Text> Account # and 
              <Text style={styles.textDanger}> EZone</Text> Password.
            </Text>
          </View>
<View style={{alignSelf:'center'}}>
    <EditTextWithLable
        label="Account # *"
        placeholder="Enter Account No."
        value={account}
        onChangeText={setaccount}
        keyboardType="default"
      />
       <EditTextWithLable
        label="Password *"
        placeholder="Enter Reference No/Note Description"
        value={RefNo}
        onChangeText={setRefNo}
        keyboardType="default"
      />

<CustomButtonsBAndP
        onBackPress={handleBackPress}
        onNextPress={handleNextPress}
        Buttontext={"Submit"}
      />
     </View>

  
    </View>

    <View style={styles.container}>
    <View style={styles.containerTop}>
    <Text  style={styles.Left500Text}>Cart Total (EC$66.67)</Text>
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
              <View style={{height:50}}></View>
        <CustomBlueButton
          title="Proceed To Pay (US$66.67)"
          onPress={GoToNext}
          IconName={"payment"}

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
  textDanger: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: rf(1.8),
    color: COLORS.CancelRED,
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




