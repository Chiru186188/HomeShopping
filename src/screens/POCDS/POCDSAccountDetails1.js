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
import EditTextWithLable from '../../components/EditTextWithLable';
import CustomButtons from '../../components/CustomButtons';
// import CustomRadioButtons from '../../components/CustomRadioButtons';
import DropDownPicker from 'react-native-dropdown-picker';

export default function POCDSAccountDetails1({navigation}) {
 
useEffect(() => {
console.log("HIIII")
  return () => {
   
  };
}, []);

const [open, setOpen] = useState(false);
const [value, setValue] = useState(null);
const [items, setItems] = useState([
  {label: 'Indian', value: 'Indian'},
  {label: 'USA', value: 'USA'},
  {label: 'UK', value: 'UK'},

  {label: 'ENGLAND', value: 'ENGLAND'},
 
]);
const [selectedOption, setSelectedOption] = useState(null);
const [title, settitle] = useState('');

const [FirstName, setFirstName] = useState('');
const [lastName, setlastName] = useState('');

const [dob, setdob] = useState('');
const [Natinality, setNatinality] = useState('');
const [PhysicalAddress, setPhysicalAddress] = useState('');
const [Poboxnu, setPoboxnu] = useState('');
const [EmailAdd, setEmailAdd] = useState('');
const [fbId, setfbId] = useState('');
const [instaid, setinstaid] = useState('');
const [homePhone, sethomePhone] = useState('');
const [workphone, setworkphone] = useState('');
const [MobilePhone, setMobilePhone] = useState('');
//
                      

const handleBackPress = () => {
  // Add your logic for the "Back" button action here
  navigation.goBack()
};

const handleNextPress = () => {
  // Add your logic for the "Next" button action here
   navigation.navigate(SCREENS.POCDSAccountDetailsFinal)
};
const handlePress = () => {
};
  return (
     <GradientBackground>
    <HeaderWithBackButton onPress={handlePress} title = "Application Form" />

    <ScrollView style= {styles.containerSc}> 
    <View style={styles.container}>
    {/* <ScrollView> */}
    <View style={[styles.row,{justifyContent:'center',alignItems:'center',width:wp('85%'),gap:10}]}>
            <Image source={IMAGES.logoHS} style={styles.logo} />
            <Image source={IMAGES.POCDSlogo} style={styles.logo1} />

          </View>

          <View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left'}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Zone, Location, Delivery Customs Fee</Text>
                </View>
              </View>

              <EditTextWithLable
        label="Title"
        placeholder="Enter Title"
        value={title}
        onChangeText={settitle}
        keyboardType="default"
      />
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
       {/* <EditTextWithLable
        label="Nationality"
        placeholder="Enter Nationality"
        value={Natinality}
        onChangeText={setNatinality}
        keyboardType="default"
      /> */}
      <View style={{alignSelf:'flex-start'}}>
  <Text style={{
    marginTop: hp('1%'),
    fontSize: rf(1.8),
    color: COLORS.Lableheading,
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('3%'),
    textAlign:'left'
  }}>Nationality</Text>
</View>
<View style={{
           alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal:10,
      marginTop:10,
      marginBottom:15

    }}>
      <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder='Select Nationality'
      placeholderStyle ={{color:COLORS.Greyscale}}
      style={{ 
        borderColor: COLORS.Greyscale,borderRadius:10, borderWidth:2,height: hp('8%'),
    }}
      textStyle={{  
        color:  COLORS.Content,
        fontFamily: FONTFAMILY.Bold,
        alignSelf: 'center',
        fontSize: rf(1.8),}}
    />

    </View>

<View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left'}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Contact Informations</Text>
                </View>
                <View style={styles.col4}></View>
              </View>
      
       <EditTextWithLable
        label="P.O. Box Number"
        placeholder="Enter P.O. Box Number"
        value={Poboxnu}
        onChangeText={setPoboxnu}
        keyboardType="default"
      />
      <EditTextWithLable
        label="Email Address"
        placeholder="Enter Email Address"
        value={EmailAdd}
        onChangeText={setEmailAdd}
        keyboardType="default"
      />



<View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left'}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Social Media Handle

</Text>
                </View>
                <View style={styles.col4}></View>
              </View>

              <EditTextWithLable
        label="Facebook"
        placeholder="Enter Facebook Id"
        value={fbId}
        onChangeText={setfbId}
        keyboardType="default"
      />
       <EditTextWithLable
        label="Instagram"
        placeholder="Enter Instagram Id"
        value={instaid}
        onChangeText={setinstaid}
        keyboardType="default"
      />



<View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left'}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Tel#
</Text>
                </View>
                <View style={styles.col4}></View>
              </View>
       <EditTextWithLable
        label="Home"
        placeholder="Enter Home Telephone Number"
        value={homePhone}
        onChangeText={sethomePhone}
        keyboardType="numeric"
      />
       <EditTextWithLable
        label="Work"
        placeholder="Enter Work Telephone Number"
        value={workphone} 
        onChangeText={setworkphone}
        keyboardType="numeric"
      />
       <EditTextWithLable
        label="Mobile"
        placeholder="Enter Mobile Number"
        value={MobilePhone}
        onChangeText={setMobilePhone}
        keyboardType='numeric'
      />
      
        <View style = {{width:wp('90%')}}>
      
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




