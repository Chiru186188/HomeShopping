import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
 import {COLORS, CONSTANTS, DEFAULTARRAYS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES} from '../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';

import { useEffect,useState } from 'react';
import GradientBackground from '../../components/GradientBackground';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import EditTextWithLable from '../../components/EditTextWithLable';
import CustomButtons from '../../components/CustomButtons';
import EditTextBottomBorder from '../../components/EditTextBottomBorder';
import CustomButtonsBAndS from '../../components/CustomButtonsBAndS';
// import CustomRadioButtons from '../../components/CustomRadioButtons';

export default function PBDSAccountDetails1({navigation}) {
 
useEffect(() => {
console.log("HIIII")
  return () => {
   
  };
}, []);

const [title, settitle] = useState('');

const [FirstName, setFirstName] = useState('');
const [lastName, setlastName] = useState('');
const [CompName, setCompName] = useState('');

const [dob, setdob] = useState('');
const [PhysicalAddress, setPhysicalAddress] = useState('');
const [EmailAdd, setEmailAdd] = useState('');
const [TelePhone, setTelePhone] = useState('');

const [MobilePhone, setMobilePhone] = useState('');


const [ApplicantSign, setApplicantSign] = useState('');

const [ApplicantName, setApplicantName] = useState('');
const [AppliDate, setAppliDate] = useState('');

const handleBackPress = () => {
  // Add your logic for the "Back" button action here
  navigation.goBack()
};

const handleNextPress = () => {
  // Add your logic for the "Next" button action here
  navigation.navigate(SCREENS.CartValueScreen,{From :"PBDS",Service:'Private Bag Delivery Service'})

};
const handlePress = () => {
};
  return (
     <GradientBackground>
    <HeaderWithBackButton onPress={handlePress} title = "Application Form" />

    <ScrollView style= {styles.containerSc}> 
    <View style={styles.container}>
    {/* <ScrollView> */}
    
    <Image source={IMAGES.logoHS} style={styles.logo} />

    <View style={styles.col12}>
            <Text style={styles.Heading}>
            Private Bag Delivery Service Please {' '}
              <Text style={styles.textDanger}>click</Text> here to sign up
            </Text>
          </View>

    <Image source={IMAGES.PBDSlogo} style={styles.image} />


    
          <View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left'}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Primary Renter</Text>
                </View>
                <View style={styles.col4}></View>
              </View>

          
       <EditTextWithLable
        label="First Name"
        placeholder="Enter First Name"
        value={FirstName}
        onChangeText={setFirstName}
        keyboardType="default"
      />
        <EditTextWithLable
        label="Last Name"
        placeholder="Enter Last Name"
        value={lastName}
        onChangeText={setlastName}
        keyboardType="default"
      />
    
       <EditTextWithLable
        label="Date of Birth"
        placeholder="Enter Date of Birth"
        value={dob}
        onChangeText={setdob}
        keyboardType="default"
      />
      
      <EditTextWithLable
        label="Comapany Name"
        placeholder="Enter Comapany Name"
        value={CompName}
        onChangeText={setCompName}
        keyboardType="default"
      />

<View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left'}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Address</Text>
                </View>
              </View>
       <EditTextWithLable
        label="Address"
        placeholder="Enter Address"
        value={PhysicalAddress}
        onChangeText={setPhysicalAddress}
        keyboardType="default"
      />
       <EditTextWithLable
        label="Email Address"
        placeholder="Enter Email Address"
        value={EmailAdd}
        onChangeText={setEmailAdd}
        keyboardType="default"
      />

        <EditTextWithLable
        label="Phone No"
        placeholder="Enter Phone No"
        value={TelePhone}
        onChangeText={setTelePhone}
        keyboardType='numeric'
      />
     
     <EditTextWithLable
        label="Mobile No"
        placeholder="Enter Mobile No"
        value={MobilePhone}
        onChangeText={setMobilePhone}
        keyboardType='numeric'
      />
     



<View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left'}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Acknowledgement
</Text>
                </View>
              </View>
       
              <View style={{paddingHorizontal:20, alignSelf:'flex-start'}}>
              <Text  style={styles.textDanger}>By signing below the customer acknowledges having read all the terms and conditions and agrees to abide by these operational regulations and is in full agreement to their enforcement for the efficient processing of their Home Shopping packages.</Text>
              </View>

           <EditTextBottomBorder
        placeholder="Applicant's Name"
        value={ApplicantName}
        onChangeText={setApplicantName}
        keyboardType="default"
      />     

      <EditTextBottomBorder
        placeholder="Applicant's signature"
        value={ApplicantSign}
        onChangeText={setApplicantSign}
        keyboardType="default"
      />

<EditTextBottomBorder
        placeholder="Date"
        value={AppliDate}
        onChangeText={setAppliDate}
        keyboardType="default"
      />
     



        <View style = {{width:wp('90%')}}>
      
<CustomButtonsBAndS
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

    justifyContent:'flex-start',
    alignItems:'center',
    paddingVertical:15,
    borderRadius : 15,

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
  Left500BOLDTextWhite: {
    fontFamily: FONTFAMILY.Bold,
    fontSize:rf(1.8),
    textAlign: 'left',
    color:COLORS.white
  },
  textDanger: {
    color: COLORS.CancelRED,
    fontSize:rf(2.0),
    fontFamily: FONTFAMILY.Medium,
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
  MarginFromLeft:{paddingHorizontal:10,gap:10},
  MarginFromLeft1:{paddingLeft:15,gap:10},
  MarginFromLeft2:{paddingHorizontal:10,flexDirection:'row'},


});




