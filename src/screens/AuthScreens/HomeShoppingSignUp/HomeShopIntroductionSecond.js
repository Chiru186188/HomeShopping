import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
 import {COLORS, CONSTANTS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES} from '../../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../../common/responsiveFunction';

import { useEffect,useState } from 'react';
import GradientBackground from '../../../components/GradientBackground';
import HeaderWithBackButton from '../../../components/HeaderWithBackButton';
import CustomRadioButtons from '../../../components/CustomRadioButtons';
import CustomButtons from '../../../components/CustomButtons';
import utills from '../../../utills';
// import CustomRadioButtons from '../../../components/CustomRadioButtons';

export default function HomeShopIntroductionSecond({navigation}) {
 
useEffect(() => {
console.log("HIIII")
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
    if (utills.isEmptyOrSpaces(selectedOption)) {
      console.log('value==33', selectedOption);
  
      utills.errorAlert('', 'Please Accept/Reject the terms of Agreements');
      return;
    }



    navigation.navigate(SCREENS.HomeShopAccountDetails1,{From:"HS"})
  };
const handlePress = () => {
};
  return (
     <GradientBackground>
    <HeaderWithBackButton onPress={handlePress} title = "Home Shopping" />

    <ScrollView style= {styles.containerSc}> 
    <View style={styles.container}>
    {/* <ScrollView> */}
    <View style={[styles.row,{justifyContent:'center',alignItems:'center',width:wp('85%'),gap:10}]}>
            <Image source={IMAGES.logoHS} style={styles.logo} />
            <Image source={IMAGES.HomeShopingImage} style={styles.logo1} />

          </View>

          <View style ={{width:wp('88%'),gap:10,marginVertical:20}}> 
        <Text style={styles.Left500Text} >This service is recommended for the shipment of large and or bulky items...</Text>
        <Text style={styles.Left500Text} >It is agreed that:</Text>

        <View style= {styles.MarginFromLeft}>
        <Text style={styles.Left500Text}>1. 

        <Text style={styles.Left500BOLDText} > The General Post Office </Text>
        <Text style={styles.Left500Text}>will: 
</Text>
        </Text>
        <View style= {styles.MarginFromLeft1}>
          <Text style={styles.Left500Text} >a. Rent its ocean freight US address, as stated on the application form, to the Customer and is renewable annually.</Text>
          <Text style={styles.Left500Text} >b. Advise Customers by email of packages received, amounts due, and credit balance on account.</Text>
          <Text style={styles.Left500Text} >c. Grant subscribed Customers access to the General Post Office Online System to view account information, upload invoices, and remit payment for packages received.</Text>
        </View>
       






        </View>



        <View style= {styles.MarginFromLeft}>
        <Text style={styles.Left500Text}>2. 

        <Text style={styles.Left500BOLDText} > The Customer </Text>
        <Text style={styles.Left500Text}>is required: 
</Text>
        </Text>
        <View style= {styles.MarginFromLeft1}>
          <Text style={styles.Left500Text} >a. Pay to the General Post Office an annual subscription fee for the use of its ocean freight US Address. This fee is payable pro ratio on the opening of the account. Subscriptions becomes renewable on 1 st March of each year. By remitting payment for annual subscriptions fees, the Customer accepts the terms and conditions of the existing agreement.</Text>
          <Text style={styles.Left500Text} >b. Collect packages within 9 days of receipt of notifications to avoid suspension of accounts. All uncollected packages should be collected at the same time. Fragile and or hazardous merchandise, plants/seeds/bulbs and perishable food items should be collected immediately.</Text>
          <Text style={styles.Left500Text} >c. Upload invoices to the General Post Office Online System BEFORE packages leave the USA. Uploading of invoices is required for local and USA Customs import and export requirements and for insurance purposes. The General Post Office management and or employees will not be held liable for erroneous information being provided by customers whether intentionally or unintentionally.</Text>
          <Text style={styles.Left500Text} >c. Inform the General Post Office in writing or by completing the Amendment to Home Shopping account form of their intent to close their account. All outstanding balances must be settled, inclusive of charges on uncollected are unclaimed packages, before an account can be closed.Failure to inform the General Post Office will result in annual subscriptions fees being automatically deducted from the account.</Text>

        </View>
        </View>



        <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>3. </Text>


        <Text style={styles.Left500Text}>Customer’s account will be debited with the relevant freight charges for each ecommerce package imported
        </Text>
      
       






        </View>
  <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>4. </Text>
        <Text style={styles.Left500Text}>The Customer agrees not to use this medium to import into Anguilla: <Text style={styles.Left500BOLDText} >Pornography, controlled drugs, alcohol, firearms, radioactive material, material related to the practice of witchcraft and other like items, or other items prohibited under the laws of Anguilla.</Text>
        </Text>
       </View>


       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>5. </Text>
        <Text style={styles.Left500BOLDText}>A daily storage <Text style={styles.Left500Text} >fee per cubic foot, as per EX MEM</Text> <Text style={styles.Left500BOLDText}>11/394</Text> <Text style={styles.Left500Text}>will be charged on packages remaining in the Post Office storage facility. The fee will commence on the tenth day after the notification of arrival of packages have been emailed to customer.</Text>
        </Text>
       </View>

       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>6. </Text>
        <Text style={styles.Left500BOLDText}>A maximum of two (2) persons <Text style={styles.Left500Text} >are allowed to one account; a primary account holder and a secondary user.</Text>
        </Text>
       </View>

       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>7. </Text>


        <Text style={styles.Left500Text}>The primary account holder is allowed to authorize <Text style={styles.Left500BOLDText}>ONE</Text> person in addition to the secondary user listed on the account to collect packages on their behalf.
        </Text>
       </View>



       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>8. </Text>


        <Text style={styles.Left500Text}>A valid photo identification is required of each person visiting the General Post Office to collect packages
        </Text>
       </View>


       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>9. </Text>


        <Text style={styles.Left500Text}>Packages remaining uncollected after 10 weeks will be turned over to the Anguilla Customs Department, for auction.
        </Text>
       </View>

       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>10. </Text>


        <Text style={styles.Left500Text}>The General Post Office reserves the right to suspend or terminate an account if the same is not in good standing and is suspected of fraudulent and or illegal activity.


        </Text>
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
    width: 90,
    height: 90,
  },
  logo1: {
    height: 90,
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
  MarginFromLeft:{paddingHorizontal:10,gap:10},
  MarginFromLeft1:{paddingLeft:15,gap:10},
  MarginFromLeft2:{paddingHorizontal:10,flexDirection:'row'},


});




