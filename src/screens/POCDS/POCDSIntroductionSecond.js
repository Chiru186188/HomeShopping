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
import utills from '../../utills';
// import CustomRadioButtons from '../../components/CustomRadioButtons';

export default function POCDSIntroductionSecond({navigation}) {
 
useEffect(() => {

  return () => {
   
  };
}, []);
const route = useRoute();

  const {Params1 } = route.params;
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
    console.log("selectedOption",selectedOption)
    if (selectedOption == null || selectedOption === "I do not accept the agreement"){
    
      utills.errorAlert("Please accept the agreement!")
      return
    }
     navigation.navigate(SCREENS.POCDSAccountDetails1,{Params1:Params1})
  };
const handlePress = () => {
};
  return (
     <GradientBackground>
    <HeaderWithBackButton onPress={handlePress} title = "POCDS" />

    <ScrollView style= {styles.containerSc}> 
    <View style={styles.container}>
    {/* <ScrollView> */}
    <View style={[styles.row,{justifyContent:'space-evenly',paddingHorizontal:10}]}>
            <Image source={IMAGES.logoHS} style={styles.logo} />
            <Image source={IMAGES.POCDSlogo} style={styles.logo1} />

          </View>

          <Text style={styles.Heading} >EZONE, HOME SHOPPING AND POSTAL PACKAGES</Text>


          <View style ={{width:wp('88%'),gap:10,marginVertical:20}}> 
        <Text style={styles.Left500Text} >This agreement is made between the applicant hereinafter referred to as Customer and the General Post Office and shall be governed by the following terms and conditions to which the above parties do agree:

</Text>
        <Text style={styles.Left500Text} >IT IS AGREED that:</Text>
        <Text style={styles.Left500Text} >The General Post Office is authorized, as per the service requirement selected, to clear Ezone and or Home Shopping or postal packages received and addressed to the fore-mentioned named customer through Customs and deliver the same to the customer as per the address provided, if delivery is required.

</Text>
<View style= {{paddingHorizontal:20,backgroundColor:COLORS.primary,paddingVertical:5,width:wp('65%')}}>
<Text style={styles.Left500BOLDText} >TERMS AND CONDITIONS:</Text>
</View>
        <View style= {styles.MarginFromLeft}>
      
        <View style= {styles.MarginFromLeft1}>

        <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>1. </Text>

          <Text style={styles.Left500Text} >The customer is required to ensure that all invoices are uploaded to the Home Shopping and eZone system before the packages leave the USA and prior to requesting the clearance of packages. <Text style={styles.Left500BOLDText} >Correctly formatted invoices must be uploaded.</Text> Non-submission of invoices or incorrectly formatted invoices will result in packages not being cleared.
        
</Text>
</View>
<View style= {styles.MarginFromLeft2}>
<Text style={styles.Left500Text}>2. </Text>

          <Text style={styles.Left500Text} >The General Post Office personnel along with Customs officials will inspect and verify that all items listed on submitted invoices are enclosed in relevant packages and merchandise was not received in damaged condition. Short shipment and or damage to merchandise will be recorded on the delivery document. Damaged merchandise will not be delivered. The customer will be required to visit the General Post Office to examine the contents.</Text>

          </View>

          <View style= {styles.MarginFromLeft2}>
          <Text style={styles.Left500Text}>3. </Text>

          <Text style={styles.Left500Text} >The customer is required to verify and inspect the contents enclosed in each package against relevant invoices at the time of delivery.<Text style={styles.Left500BOLDText} > The General Post Office will not be held liable for loss or damage to the contents of a package(s) after delivery to the customer.</Text> </Text>
          </View>

          <View style= {styles.MarginFromLeft2}>
          <Text style={styles.Left500Text}>4. </Text>

          <Text style={styles.Left500Text} > 
          The customer agrees to remit payment for all associated freight charges, delivery fees, customs charges, and any other associated costs connected with a package(s) in advance of receiving the items.</Text>
</View>
<View style= {styles.MarginFromLeft2}>
          <Text style={styles.Left500Text}>5. </Text>
<View>
<Text style={styles.Left500Text} >
<Text  style={styles.Left500BOLDText} >Payment: </Text>Credit/Debit card </Text>
<Text style={styles.Left500Text} >

Customers are required to complete, sign and submit the General Post Office’s Credit Card Authorization form along with a copy of a valid photo Identification. All clearance charges, including Customs charges, will be debited from the card submitted.
</Text>
</View>
</View>
   



   <View style= {styles.MarginFromLeft2}>
          <Text style={styles.Left500Text}>6. </Text>
<View>
<Text style={styles.Left500BOLDText}>Delivery Times:</Text>
<View style= {styles.MarginFromLeft3}>
        <Text style={styles.Left500Text}>a. </Text>
<Text style={styles.Left500Text}>All requests and relevant documents must reach the General Post Office before 11:00 am to ensure delivery before 4:00 pm daily.</Text>
       </View>
       <View style= {styles.MarginFromLeft3}>
        <Text style={styles.Left500Text}>b. </Text>
<Text style={styles.Left500Text}>Requests received after 11:00 am would result in the delivery of packages on the next working day.</Text>
       </View>
</View>
</View>    



<View style= {styles.MarginFromLeft2}>
          <Text style={styles.Left500Text}>7. </Text>
<View>
<Text style={styles.Left500BOLDText}>Liability:

</Text>
<Text style={styles.Left500Text}>The General Post Office will not be held liable for:-
</Text>
<View style= {styles.MarginFromLeft3}>
        <Text style={styles.Left500Text}>a. </Text>
<Text style={styles.Left500Text}>Any missing or damaged merchandise. However, if the customer has elected to have all Ezone and Home Shopping packages insured prior to leaving the USA, the respective insurance agreements will be taken into consideration and a claim submitted to the relevant agency where applicable.</Text>
       </View>
       <View style= {styles.MarginFromLeft3}>
        <Text style={styles.Left500Text}>b. </Text>
<Text style={styles.Left500Text}>The confiscation of goods deemed illegal by HM Customs.
</Text>
       </View>
</View>
</View>  



<View style= {styles.MarginFromLeft2}>
          <Text style={styles.Left500Text}>8. </Text>
<View>
<Text style={styles.Left500BOLDText}>Exceptions – packages not cleared via this service:-

</Text>
<View style= {styles.MarginFromLeft3}>
        <Text style={styles.Left500Text}>a. </Text>
<Text style={styles.textDanger}>Package containing merchandise with an invoice value of US $1,500.00 or greater. The customer is required to obtain the services of a private brokerage company to prepare a customs declaration.</Text>
       </View>
       <View style= {styles.MarginFromLeft3}>
        <Text style={styles.Left500Text}>b. </Text>
<Text style={styles.textDanger}>Consolidated packages or packages not shipped from an established business.

</Text>
       </View>
</View>
</View>  

<View style= {styles.MarginFromLeft2}>
          <Text style={styles.Left500Text}>9. </Text>
<View>
<Text style={styles.Left500BOLDText}>Termination:

</Text>
<Text style={styles.Left500Text}>The customer is required to give the Anguilla Post Office at least 24 hours’ notice before this agreement can be terminated.
</Text>
<Text style={styles.Left500Text}>The Anguilla Post Office has the right to terminate this agreement if it is found that the customer

</Text>
<View style= {styles.MarginFromLeft3}>
        <Text style={styles.Left500Text}>a. </Text>
<Text style={styles.Left500Text}>is using this service for illegal activities
</Text>
       </View>
<View style= {styles.MarginFromLeft3}>
        <Text style={styles.Left500Text}>b. </Text>
<Text style={styles.Left500Text}>has refused to remit payment for services rendere
</Text>
       </View>
       <View style= {styles.MarginFromLeft3}>
        <Text style={styles.Left500Text}>a. </Text>
<Text style={styles.Left500Text}>has verbally or physically abused a Postal Officer during the provision of this service
</Text>
       </View>
</View>
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
    width: wp("25%"),
    height: wp("25%"),
    resizeMode:'contain',
  },
  logo1: {
    height: wp("30%"),
    resizeMode:'contain',
    width : wp("55%")
    
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
    fontFamily: FONTFAMILY.Regular,
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
  MarginFromLeft2:{paddingLeft:0,flexDirection:'row',paddingRight:15},
  MarginFromLeft3:{paddingLeft:15,flexDirection:'row',paddingRight:25},


});




