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

export default function EzonIntroductionSecond({navigation}) {
 
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
    navigation.navigate(SCREENS.HomeShopAccountDetails1,{From:"EZ",Params1:Params1})
  };
const handlePress = () => {
};
  return (
     <GradientBackground>
    <HeaderWithBackButton onPress={handlePress} title = "E-Zone" />

    <ScrollView style= {styles.containerSc}> 
    <View style={styles.container}>
    {/* <ScrollView> */}
    <View style={[styles.row,{justifyContent:'space-evenly',paddingHorizontal:10}]}>
            <Image source={IMAGES.logoHS} style={styles.logo} />
            <Image source={IMAGES.Ezone2} style={styles.logo1} />

          </View>

          <Text style={styles.Heading} >Customer Agreement Form</Text>


          <View style ={{width:wp('88%'),gap:10,marginVertical:20}}> 
        <Text style={styles.Left500Text} >This agreement is made between the applicant hereinafter referred to as Customer and the General Post Office and shall be governed by the following terms and conditions to which the above parties do agree:

</Text>
        <Text style={styles.Left500Text} >IT IS AGREED that:</Text>

        <View style= {styles.MarginFromLeft}>
        {/* <Text style={styles.Left500Text}>1.  */}

        {/* <Text style={styles.Left500BOLDText} > The Customer is required to:

</Text> */}
        <Text style={styles.Left500Text}>The Customer is required to: 
</Text>
        {/* </Text> */}
        <View style= {styles.MarginFromLeft1}>

        <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>a. </Text>

          <Text style={styles.Left500Text} >Pay to the General Post Office an annual subscription fee. This fee is payable pro ratio on the signing of this agreement. Subscriptions becomes renewable on <Text style={styles.Left500BOLDText} >1st March of each year.</Text> By remitting payment for annual subscriptions fees, customer accepts the terms and conditions of the existing agreement.
        
</Text>
</View>
<View style= {styles.MarginFromLeft2}>
<Text style={styles.Left500Text}>b. </Text>

          <Text style={styles.Left500Text} ><Text style={styles.Left500BOLDText} >Collect packages within 9 days of receipt of notifications </Text>to avoid suspension of accounts. All uncollected packages should be collected at the same time.<Text style={styles.Left500BOLDText} > Fragile and or hazardous merchandise, plants/seeds/bulbs and perishable food items should be collected immediately.</Text></Text>

          </View>

          <View style= {styles.MarginFromLeft2}>
          <Text style={styles.Left500Text}>c. </Text>

          <Text style={styles.Left500Text} >Upload invoices to their online eZone accounts <Text  style={styles.Left500BOLDText}>BEFORE</Text> packages leave the USA. Uploading of invoices is required for local and USA Customs import and export requirements and for insurance purposes.<Text style={styles.Left500BOLDText} >The General Post Office management and or employees will not be held liable for erroneous information being provided by customers whether intentionally or unintentionally.</Text> </Text>
          </View>

          <View style= {styles.MarginFromLeft2}>
          <Text style={styles.Left500Text}>d. </Text>

          <Text style={styles.Left500Text} > 
Inform the General Post Office in writing or by completing the <Text  style={styles.Left500BOLDText}>Amendment to eZone account form </Text> of their intent to close their account. All outstanding balances must be settled,<Text style={styles.Left500BOLDText} >inclusive of charges on uncollected are unclaimed packages,</Text>before an account can be closed. Failure to inform the General Post Office will result in the annual subscriptions fees being automatically deducted from the account.</Text>
</View>
<View style= {styles.MarginFromLeft2}>
          <Text style={styles.Left500Text}>e. </Text>

<Text style={styles.Left500Text} >
The customer agrees not to use this medium to import into Anguilla: <Text  style={styles.Left500BOLDText}>Amendment to eZone account form </Text> of their intent to close their account. All outstanding balances must be settled,<Text style={styles.Left500BOLDText} >inclusive of charges on uncollected are unclaimed packages,</Text>before an account can be closed. Failure to inform the General Post Office will result in the annual subscriptions fees being automatically deducted from the account.</Text>
</View>
   
       
<View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>f. </Text>


        <Text style={styles.Left500Text}>Freight charges are subject to change in accordance with transportation and other direct costs.


        </Text>
       </View>
       

       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>g. </Text>


        <Text style={styles.Left500Text}>The Customer may choose to decline insurance on packages shipped and received via the eZone service. Once the customer has declined insurance coverage he/she cannot claim for any partial or complete loss of or damage to packages. Excluded from insurance are: items of unusual intrinsic value such as cash, negotiable securities, fine jewelry and animal skins, weapons, firearms, explosives, aerosol cans, perishables, seeds, plants, catalogs, magazines, personal mail, bank statements drugs and controlled substances.


        </Text>
       </View>
       <View>
       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>h. </Text>


        <Text style={styles.Left500Text}>In no circumstances shall eZone or the General Post Office be liable in contract, tort (including negligence or breach of statutory duty) or otherwise howsoever, and whatever the cause thereof for any:


        </Text>
       </View>

       <View style= {styles.MarginFromLeft3}>
        <Text style={styles.Left500Text}>i. </Text>
<Text style={styles.Left500Text}>increased costs or expenses;</Text>
       </View>
       <View style= {styles.MarginFromLeft3}>
        <Text style={styles.Left500Text}>ii. </Text>
<Text style={styles.Left500Text}>loss of profit, business, contracts, revenues or anticipated savings, or</Text>
       </View>
       <View style= {styles.MarginFromLeft3}>
        <Text style={styles.Left500Text}>iii. </Text>
<Text style={styles.Left500Text}>special indirect or consequential damage of any nature whatsoever, including, but not limited to, loss of use, loss of business or loss of profits,</Text>
       </View>
       </View>

     
       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>i. </Text>
        <Text style={styles.Left500BOLDText}>A daily storage <Text style={styles.Left500Text} >fee per cubic foot, as per EX MEM</Text> <Text style={styles.Left500BOLDText}>11/394</Text> <Text style={styles.Left500Text}>will be charged on packages remaining in the Post Office storage facility. The fee will commence on the tenth day after the notification of arrival of packages have been emailed to customer.</Text>
        </Text>
       </View>

       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>j. </Text>
        <Text style={styles.Left500BOLDText}>A maximum of two (2) persons <Text style={styles.Left500Text} >are allowed to one account; a primary account holder and a secondary user.</Text>
        </Text>
       </View>

       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>k. </Text>


        <Text style={styles.Left500Text}>The primary account holder is allowed to authorize <Text style={styles.Left500BOLDText}>ONE</Text> person in addition to the secondary user listed on the account to collect packages on their behalf.
        </Text>
       </View>



       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>l. </Text>


        <Text style={styles.Left500Text}>A valid photo identification is required of each person visiting the General Post Office to collect packages
        </Text>
       </View>


       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>m. </Text>


        <Text style={styles.Left500Text}>Packages remaining uncollected after 10 weeks will be turned over to the Anguilla Customs Department, for auction.
        </Text>
       </View>

       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>n. </Text>


        <Text style={styles.Left500Text}>The General Post Office reserves the right to suspend or terminate an account if the same is not in good standing and is suspected of fraudulent and or illegal activity.


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
    width: 100,
    height: 100,
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
  MarginFromLeft2:{paddingHorizontal:0,flexDirection:'row'},
  MarginFromLeft3:{paddingHorizontal:50,flexDirection:'row'},


});




