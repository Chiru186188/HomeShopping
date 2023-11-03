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
// import CustomRadioButtons from '../../components/CustomRadioButtons';

export default function PBDSIntroductionSecond({navigation}) {
 
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
     navigation.navigate(SCREENS.PBDSAccountDetails1)
  };
const handlePress = () => {
};
  return (
     <GradientBackground>
    <HeaderWithBackButton onPress={handlePress} title = "Bag Delivery" />

    <ScrollView style= {styles.containerSc}> 
    <View style={styles.container}>
    {/* <ScrollView> */}
    <View style={styles.col12}>
    <Image source={IMAGES.logoHS} style={styles.logo} />

          </View>
          
 <Text style={styles.Heading} >Private Bag Delivery Service – Rental Agreement</Text>

 <Image source={IMAGES.PBDSlogo} style={styles.image} />


          <View style ={{width:wp('88%'),gap:10,marginVertical:20}}> 
       
        <View style= {styles.MarginFromLeft}>
        <Text style={styles.Left500Text} >This agreement made on the ________________________________________________ day of ___________ 20__________ between the Postmaster General and____________________(company name) _______________________________________(hereinafter called the customer) is for Private Bag Delivery service for the delivery of Letter Mail to the customer at the address shown below: -</Text>

       
        <View style= {styles.MarginFromLeft1}>

        <View style= {[styles.MarginFromLeft2,{marginTop:15}]}>
        <Text style={styles.Left500Text}>1. </Text>

          <Text style={styles.Left500Text} >The customer will provide two bags or containers with a lock and two keys for each. The bags or containers should be clearly marked with the customer’s name and be large enough to contain the volume of mail anticipated. One key for each bag or container should be labeled with the customer’s name and be left with the registered mail office at the General Post Office (GPO).</Text>
</View>
<View style= {styles.MarginFromLeft2}>
<Text style={styles.Left500Text}>2. </Text>

          <Text style={styles.Left500Text} >On payment of the charge provided for at paragraph 7 below, the Postmaster General will allocate a Private Bay Number to the bag or container and all mail arriving at the GPO addressed to the customer at that bag number, or at any GPO box rented by the customer, will be placed in the bag or container which shall be locked at the GPO and conveyed to the address shown above. Registered mail will be included in the bag or container and the officer conveying the bag will require a signature from the customer on the official receipt. Parcels on which no charges are due will also be delivered.</Text>

          </View>

          <View style= {styles.MarginFromLeft2}>
          <Text style={styles.Left500Text}>3. </Text>

          <Text style={styles.Left500Text} >The Private Bag Delivery should normally be made between 11:00 a.m – 12:00 noon, Mondays to Fridays excluding any Public Holidays.
</Text>
          </View>

          <View style= {styles.MarginFromLeft2}>
          <Text style={styles.Left500Text}>4. </Text>

          <Text style={styles.Left500Text} > 
          On delivery of the first private Bag the GPO will collect the second private bag and return it to the GPO and will convey any contents for posting at the GPO to ensure dispatch with the next outgoing mail. All mail to be posted must be fully paid either by postage stamps or a postage meter. The customer may place a requisition for stamps in an envelope addressed to the “STAMP CLERK” with cash or cheque enclosed. The postage stamps will be returned on the next delivery of the private bag.</Text>
</View>

<View style= {styles.MarginFromLeft2}>
          <Text style={styles.Left500Text}>5. </Text>

<Text style={styles.Left500Text} >
This agreement will run for 12 months from the date of signature and a reminder for renewal will be sent one month before the expiry date. The service will cease automatically on the expiration 12 month period unless, at least seven days before the agreement comes to an end, written notice of intent to renew the agreement is served, the service shall continue uninterrupted but the customer shall be required to execute a new agreement within seven days of this agreement ending and the charge for any service provided during the period before the new agreement is executed shall be a debt owed by the customer to the GPO. Failure to pay the charge provided for this agreement within fourteen days after the date will result in the agreement being terminated without further notice.</Text>
</View>

<View style= {styles.MarginFromLeft2}>
          <Text style={styles.Left500Text}>6. </Text>

<Text style={styles.Left500Text} >
The customer may terminate the agreement by giving not less than one month’s notice to the Postmaster General and mail will be redirected, as the customer requires. Any monies paid in advance by the customer under paragraph 7 of this agreement shall then be refunded less deductions for any service provided up to the date of receipt by the Postmaster General of the notice of termination.</Text>
</View>
   
       
<View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>7. </Text>


        <Text style={styles.Left500Text}>The cost for this service will be <Text style={styles.Left500BOLDText}>EC $1226.49 </Text> which sum is calculated by reference to the distance from the GPO to the customer’s address and the distance required to travel on unmade roads, if relevant. The charge will be payable by the customer in two parts; the first payment being due on the signing of this agreement pro payment rata to the end of the year, the second being due on the first working day of January next following. No redirection charges will be made for transferring mail from an existing rented GPO box to the private bag or container until the current rental on the GPO expiries following which normal redirection charges will apply.


</Text>

       </View>
       

       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>8. </Text>


        <Text style={styles.Left500Text}>The customer will ensure that a responsible person shall be available to take receipt of the delivered bag or container at a predetermined hand-over point, normally a reception area. The Postmaster General may require an unsuitable hand-over point to be changed. The GPO can accept no responsibility for mail once it has been delivered to the nominated hand-over point


        </Text>
       </View>
     
       <View style= {styles.MarginFromLeft2}>
        <Text style={styles.Left500Text}>9. </Text>
        <Text style={styles.Left500Text}>The customer is requested to inform his/it’s clients and customers of his/it’s correct address. In this case this should be:


        </Text>
       </View>
       <Text style={styles.Left500Text}>
        </Text>
       <Text style={styles.Left500Text}>NAME
        </Text>
        <Text style={styles.Left500Text}>(Company Name)
        </Text>
        <Text style={styles.Left500Text}>PRIVATE DELIVERY BAG # __________
        </Text>
        <Text style={styles.Left500Text}>
        </Text>
       <Text style={styles.Left500Text}>NAME OF BUISNESS
        </Text>
        <Text style={styles.Left500Text}>(Company Name)
        </Text>
        <Text style={styles.Left500Text}>LOCATION
        </Text>
        <Text style={styles.Left500Text}>____________________________
        </Text>

        <Text style={styles.Left500Text}>ANGUILLA
        </Text>
        <Text style={styles.Left500Text}>BRITISH WEST INDIES
 </Text>

 <Text style={styles.Left500Text}>
        </Text>
 <Text style={styles.Left500Text}>IN WITNESS WHEREOF this Agreement has been duly executed by the parties hereto on the date first above written
 </Text>


 <Text style={styles.Left500Text}>SIGNED by the POSTMASTER- GENERAL
 </Text>

 <Text style={styles.Left500Text}>____________________________
        </Text>
        <Text style={styles.Left500Text}>In the presence of


 </Text>

        <Text style={styles.Left500Text}>Name
 </Text>

 <Text style={styles.Left500Text}>____________________________
        </Text>
        <Text style={styles.Left500Text}>Address
 </Text>

 <Text style={styles.Left500Text}>General Post Office
 </Text>

        <Text style={styles.Left500Text}>Occupation
 </Text>

 <Text style={styles.Left500Text}>Postal employee
 </Text>

        </View>
        <Text style={styles.Left500Text}>THE COMMON SEAL OF </Text>

 <Text style={styles.Left500Text}>(Company name) </Text>

 <Text style={styles.Left500Text}>was affixed in the presence of </Text>
 <Text style={styles.Left500Text}></Text>


 <Text style={styles.Left500Text}>General Manager (signature)
</Text>

<Text style={styles.Left500Text}>____________________________
       </Text>

       <Text style={styles.Left500Text}>Witness _________________   
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




