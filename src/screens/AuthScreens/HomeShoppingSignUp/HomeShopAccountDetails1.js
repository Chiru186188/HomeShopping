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
import EditTextWithLable from '../../../components/EditTextWithLable';
import CustomButtons from '../../../components/CustomButtons';
import { useRoute } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import utills from '../../../utills';
// import CustomRadioButtons from '../../../components/CustomRadioButtons';

export default function HomeShopAccountDetails1({navigation}) {
  const route = useRoute();
  const { From } = route.params;
useEffect(() => {
console.log("From",From)
  return () => {
   
  };
}, []);


const [open, setOpen] = useState(false);
const [value, setValue] = useState('Indian');
const [items, setItems] = useState([
  {label: 'Indian', value: 'Indian'},
  {label: 'USA', value: 'USA'},
  {label: 'UK', value: 'UK'},

  {label: 'ENGLAND', value: 'ENGLAND'},
 
]);


const [selectedOption, setSelectedOption] = useState(null);
const [title, settitle] = useState('Mr');
const [FirstName, setFirstName] = useState('Chirag');
const [lastName, setlastName] = useState('Wadhwa');
const [dob, setdob] = useState('10/10/1994');
const [Natinality, setNatinality] = useState('');
const [PhysicalAddress, setPhysicalAddress] = useState('Noida Metro');
const [Poboxnu, setPoboxnu] = useState('ABC123');
const [EmailAdd, setEmailAdd] = useState('chirag@gmail.com');
const [fbId, setfbId] = useState('chirag@gmail.com');
const [instaid, setinstaid] = useState('chirag@gmail.com');
const [homePhone, sethomePhone] = useState('98098321312');
const [workphone, setworkphone] = useState('31211231233');
const [MobilePhone, setMobilePhone] = useState('43242342334');


const handleBackPress = () => {
  // Add your logic for the "Back" button action here
  navigation.goBack()
};
// const handleNextPress = () => {
//   // Add your logic for the "Next" button action here
//   navigation.navigate(SCREENS.HomeShopAccountDetails2,{From:From})
// };
const handlePress = () => {
};

const handleNextPress = async () => {
   
    if (utills.isEmptyOrSpaces(title)) {

      utills.errorAlert('', 'Please Enter Title');
      return;
    }
  
    if (utills.isEmptyOrSpaces(FirstName)) {
      utills.errorAlert('', 'Please Enter First Name');
      return;
    }

    if (utills.isEmptyOrSpaces(lastName)) {
      utills.errorAlert('', 'Please Enter Last Name');
      return;
    }
   
    if (utills.isEmptyOrSpaces(dob)) {
      utills.errorAlert('', 'Please Enter Dob');
      return;
    } 
     if (utills.isEmptyOrSpaces(value)) {
      utills.errorAlert('', 'Please Select Natinality');
      return;
    }
    if (utills.isEmptyOrSpaces(PhysicalAddress)) {
      utills.errorAlert('', 'Please Enter  Physical Address');
      return;
    }
    if (utills.isEmptyOrSpaces(Poboxnu)) {
      utills.errorAlert('', 'Please Enter P.O. Box Number');
      return;
    }
    if (utills.isEmptyOrSpaces(EmailAdd)) {
      utills.errorAlert('', 'Please Enter Email Address');
      return;
    }
    if (utills.isEmptyOrSpaces(MobilePhone)) {
      utills.errorAlert('', 'Please Enter Mobile Number');
      return;
    }

    let data = {
      title: title,
      firstName:FirstName,
      lastName:lastName,
      dob:dob,
      nationality:value,
      physicalAddress:PhysicalAddress,
      poBox:Poboxnu,
      email:EmailAdd,
      facebookId:fbId,
      instaId:instaid,
      homeMobile:homePhone,
      workMobile:workphone,
      phoneNumber:MobilePhone,

    };
console.log('data',data)
    navigation.navigate(SCREENS.HomeShopAccountDetails2,{From:From,params1:data})
  };



  return (
     <GradientBackground>
    <HeaderWithBackButton onPress={handlePress} title = "Application Form" />
    <ScrollView style= {styles.containerSc}> 
    <View style={styles.container}>
    {/* <ScrollView> */}
    <View style={[styles.row,{justifyContent:'center',alignItems:'center',width:wp('85%'),gap:10}]}>
            <Image source={IMAGES.logoHS} style={styles.logo} />
            {From === 'HS' ? (
  <Image source={IMAGES.HomeShopingImage} style={styles.logo1} />
) :             <Image source={IMAGES.Ezone1} style={styles.logo1} />
}

          </View>

          <View style={[styles.row,{backgroundColor : COLORS.primary,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDTextWhite}>Primary Account Holder</Text>
                </View>
                <View style={styles.col4}></View>
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
    marginLeft:wp('3.5%'),
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
        width : wp('89%')
    }}
      textStyle={{  
        color:  COLORS.Content,
        fontFamily: FONTFAMILY.Bold,
        alignSelf: 'center',
        fontSize: rf(1.8),
        marginLeft:wp('2.5%'),

      }}
    />

    </View>
       <EditTextWithLable
        label="Physical Address"
        placeholder="Enter Physical Address"
        value={PhysicalAddress}
        onChangeText={setPhysicalAddress}
        keyboardType="default"
      />
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



<View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
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



<View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
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




