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
import CustomRadioButtons from '../../components/CustomRadioButtons';
import CustomButtons from '../../components/CustomButtons';
import { useRoute } from '@react-navigation/native';
// import CustomRadioButtons from '../../components/CustomRadioButtons';

export default function RentalBoxIntroductionSecond({navigation}) {
  const route = useRoute();

  const {Params1 } = route.params;
useEffect(() => {

  return () => {
   
  };
}, []);
const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: 'I accept the agreement', value: 'accept' },
    { label: 'I do not accept the agreement', value: 'do-not-accept' },
  ];
  const handleOptionSelect = (option) => {
    setSelectedOption(option.value);
  };

  const handleBackPress = () => {
    // Add your logic for the "Back" button action here
    navigation.goBack()
  };
  
  const handleNextPress = () => {
    // Add your logic for the "Next" button action here
     navigation.navigate(SCREENS.RentalBoxAccountDetails1,{Params1:Params1})
  };
const handlePress = () => {
};
  return (
     <GradientBackground>
    <HeaderWithBackButton onPress={handlePress} title = "Rental Box" />

    <ScrollView style= {styles.containerSc}> 
    <View style={styles.container}>
    {/* <ScrollView> */}
    <View style={styles.col12}>
    <Image source={IMAGES.logoHS} style={styles.logo} />

          </View>

   

          <Text style={styles.Heading} >Private Post Office Box – Rental Agreement</Text>


          <View style ={{width:wp('88%'),gap:10,marginVertical:20}}> 
       
        <View style= {styles.MarginFromLeft}>
     
       
        <View style= {styles.MarginFromLeft1}>

        <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>1. </Text>

          <Text style={styles.Left500Text} >A Private Post Office Box (P.O. Box) may be rented to a person, firm or company, designated as the primary renter, (hereinafter referred to as the “renter”) upon completion of the required application form</Text>
</View>
<View style= {styles.MarginFromLeft2}>
<Text style={styles.Left500Text}>2. </Text>

          <Text style={styles.Left500Text} >If applicable, up to three (3) additional persons residing within the renter’s household may receive mail and or notices at the renter’s P.O. Box.</Text>

          </View>

          <View style= {styles.MarginFromLeft2}>
          <Text style={styles.Left500Text}>3. </Text>

          <Text style={styles.Left500Text} >It is the sole responsibility of the renter to inform correspondents of the renter’s P. O. Box address.
</Text>
          </View>

          <View style= {styles.MarginFromLeft2}>
          <Text style={styles.Left500Text}>4. </Text>

          <Text style={styles.Left500Text} > 
          The renter is also responsible for ensuring that P.O. Box is cleared regularly. The renter agrees to collect all mail and or notices at least twice per month and shall not use the P.O. Box for storage of miscellaneous items.</Text>
</View>
<View style= {styles.MarginFromLeft2}>
          <Text style={styles.Left500Text}>6. </Text>

<Text style={styles.Left500Text} >
The renter acknowledges that once the General Post Office places the renter’s or addressee’s mail and notices in the assigned P.O. Box, such mail and such notices shall be deemed to have been delivered.</Text>
</View>
   
       
<View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>7. </Text>


        <Text style={styles.Left500Text}>Postal officers are prohibited from retrieving mail or notices that have been delivered to a P.O. Box.


        </Text>
       </View>
       

       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>8. </Text>


        <Text style={styles.Left500Text}>The renter must return to the General Delivery counter or Inland Mail Letterbox any mail or notices not belonging to him/ her and mark “NOT” next to the P.O. Box number or address.


        </Text>
       </View>
     
       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>9. </Text>
        <Text style={styles.Left500Text}><Text style={styles.Left500BOLDText}>The annual rental charge</Text> for a P.O. Box is payable in advance on January 1 each year and is for one year or less from the date of renting the box.


        </Text>
       </View>

     
       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>10. </Text>
        <Text style={styles.Left500Text}>Failure to pay the annual rental charge by January 31 will result in the locking of that P.O. Box and a <Text style={styles.Left500BOLDText}>late fee</Text> <Text style={styles.Left500Text}>levied</Text>
        </Text>
       </View>

       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>11. </Text>
        <Text style={styles.LeftText}>Failure to pay annual rental charge by March 31 will result in the General Post Office terminating the renter’s rental of that P.O. Box. That P.O. Box may be made available for rental to another prospective renter.
        </Text>
       </View>

       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>12. </Text>


        <Text style={styles.Left500Text}>The key for each P.O. Box shall remain the property of the General Post Office. On the rental of a P.O. Box, a <Text style={styles.Left500BOLDText}>deposit</Text> for each key issued shall be paid to the General Post Office by the renter for the safe return of each key on termination of the rental. The deposit is refundable upon return of the key to the General Post Office provided that the key is in working condition.
        </Text>
       </View>



       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>13. </Text>


        <Text style={styles.Left500Text}>All P.O. Box keys must be returned to the General Post Office immediately upon termination of rental. Failure to return keys will result in forfeiture of deposit.
        </Text>
       </View>


       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>14. </Text>


        <Text style={styles.Left500Text}>Where the key to a P.O. Box is lost, the renter of that P.O. Box shall pay to the General Post Office the 
       <Text style={styles.Left500BOLDText}> prescribed replacement fee </Text> in order to obtain a replacement.</Text>
       </View>

       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>15. </Text>


        <Text style={styles.Left500Text}>Where it is necessary to replace or alter the lock, the renter shall pay the 
       <Text style={styles.Left500BOLDText}> prescribed replacement fee </Text>to the General Post Office.</Text>
       </View>

       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>16. </Text>


        <Text style={styles.Left500Text}>Misuse of an assigned P.O. Box will result in immediate termination of rental. The renter is liable for all damage to that P.O. Box or to the lock or key thereof if that damage is caused by him or by his agents or is due to his negligence or that of his agents.


        </Text>
       </View>
       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>17. </Text>


        <Text style={styles.Left500Text}>At any time, the General Post Office may terminate the rental of a P.O. Box by sending the renter a notice of intention to discontinue that privilege.


        </Text>
       </View>
       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>18. </Text>


        <Text style={styles.Left500Text}>It is the responsibility of the renter to inform the General Post Office of any changes in contact details including address and telephone number.


        </Text>
       </View>
      
        </View>
       






        </View>



     




      


        </View>

        <View style = {{width:wp('90%')}}>
        <View style={[styles.hr,{marginVertical:20}]}></View>

        {options.map((item1) => {
            return (
              <CustomRadioButtons
                title={item1.label}
                setSelected={setSelectedOption}
                onChangeSelected={(data, item1) => {
                  console.log(data)
                  setSelectedOption(data);
                 

                }}
                 selected={selectedOption}
                 style={{ marginStart: 10 ,marginBottom : 7 }}
                 />
            );
          })}

<CustomButtons
        onBackPress={handleBackPress}
        onNextPress={handleNextPress}
      />
        </View>




          {/* </ScrollView> */}
        
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
  dashboardText: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  bellIcon: {
    alignItems: 'flex-end',
    marginTop: 3,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  container2: {
    padding: 10,
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
  col13: {
    // flex: 1,
    marginVertical: 10,
    paddingHorizontal:20
    
  },
  logo: {
    width: 120,
    height: 120,
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
  MarginFromLeft:{paddingRight:10,gap:10},
  MarginFromLeft1:{gap:10},
  MarginFromLeft2:{paddingHorizontal:0,paddingRight:10,flexDirection:'row'},
  MarginFromLeft3:{paddingHorizontal:50,flexDirection:'row'},


});




