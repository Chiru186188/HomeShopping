import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, ScrollView, Button} from 'react-native';
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
import EditTextWithLableAndIcon from '../../../components/EditTextWithLableAndIcon';
import CustomButtons from '../../../components/CustomButtons';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import utills from '../../../utills';
import EditTextWithLable from '../../../components/EditTextWithLable';
import CustomBlueButton from '../../../components/CustomBlueButton';
// import CustomRadioButtons from '../../../components/CustomRadioButtons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Calender_Icon6Svg } from '../../../components/Svg';
import TouchableNativeFeedback from '../../../components/TouchableNativeFeedback';
import { RegisterSlice } from '../../../redux/slice/auth';
import useRedux from '../../../components/useRedux';

export default function RegistrationPage({navigation}) {
  // const route = useRoute();
  // const { From } = route.params;
useEffect(() => {
// /console.log("From",From)
setdob('1995-10-19')
  return () => {
   
  };
}, []);
useFocusEffect(
  React.useCallback(() => {
    
    setFirstName("")
    setEmailAdd("")
    setIRD("")
    setMobilePhone("")
    setNewpwd("")
    setupwd("")
    setPhysicalAddress("")
    setPoboxnu("")
    setlastName("")
  }, [])
);

const [open, setOpen] = useState(false);
const [value, setValue] = useState(null);
const [items, setItems] = useState([
  {label: 'Indian', value: 'Indian'},
  {label: 'USA', value: 'USA'},
  {label: 'UK', value: 'UK'},

  {label: 'ENGLAND', value: 'ENGLAND'},
 
]);
const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
const [selectedDate, setSelectedDate] = useState(new Date()); // Set initial date here if available

const [openG, setOpenG] = useState(false);
const [valueG, setValueG] = useState("M");
const [itemsG, setItemsG] = useState([
  {label: 'Male', value: 'M'},
  {label: 'Female', value: 'F'},
  {label: 'Others', value: 'O'}, 
]);

const [selectedOption, setSelectedOption] = useState(null);
const [title, settitle] = useState('');
const [FirstName, setFirstName] = useState('');
const [lastName, setlastName] = useState('');
const [Natinality, setNatinality] = useState('');
const [PhysicalAddress, setPhysicalAddress] = useState('');
const [Poboxnu, setPoboxnu] = useState('');
const [EmailAdd, setEmailAdd] = useState('');
const [IRD, setIRD] = useState('');

const [fbId, setfbId] = useState('');
const [instaid, setinstaid] = useState('');
const [homePhone, sethomePhone] = useState('');
const [workphone, setworkphone] = useState('');
const [MobilePhone, setMobilePhone] = useState('');

const [pwd, setupwd] = useState('');
  const [Npwd, setNewpwd] = useState('');
const handleBackPress = () => {
  // Add your logic for the "Back" button action here
  navigation.goBack()
};
const [dob, setdob] = useState('Date of Birth');
const showDatePicker = () => {
  setDatePickerVisibility(true);
};

const hideDatePicker = () => {
  setDatePickerVisibility(false);
};

const handleConfirm = (date) => {
  // console.warn("A date has been picked: ", date.toString());
  const dateObject = new Date(date.toString());
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Adding 1 because getMonth() returns zero-based months
  const day = String(dateObject.getDate()).padStart(2, '0');
  
  const formattedDate = `${year}-${month}-${day}`;
  console.log(formattedDate); // Output: 2023-12-13
  setSelectedDate(date);

  setdob(formattedDate)
  hideDatePicker();

};
const currentDate = new Date();
  // Set the maximum selectable date to the current date
  const maximumDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

// const handleNextPress = () => {
//   // Add your logic for the "Next" button action here
//   navigation.navigate(SCREENS.HomeShopAccountDetails2,{From:From})
// };
const handlePress = () => {
};
const {dispatch} = useRedux();

const handleNextPress = async () => {
   
    
    if (utills.isEmptyOrSpaces(FirstName)) {
      utills.errorAlert('', 'Please Enter First Name');
      return;
    }

    if (utills.isEmptyOrSpaces(lastName)) {
      utills.errorAlert('', 'Please Enter Last Name');
      return;
    }
   
    if ((dob === "Date of Birth")) {
      utills.errorAlert('', 'Please Enter Dob');
      return;
    } 
     if (utills.isEmptyOrSpaces(valueG)) {
      utills.errorAlert('', 'Please Select Gender');
      return;
    }
    if (utills.isEmptyOrSpaces(PhysicalAddress)) {
      utills.errorAlert('', 'Please Enter Physical Address');
      return;
    }
    // if (utills.isEmptyOrSpaces(Poboxnu)) {
    //   utills.errorAlert('', 'Please Enter P.O. Box Number');
    //   return;
    // }
    // if (utills.isEmptyOrSpaces(IRD)) {
    //   utills.errorAlert('', 'Please Enter IRD');
    //   return;
    // }
    if (utills.isEmptyOrSpaces(EmailAdd)) {
      utills.errorAlert('', 'Please Enter Email Address');
      return;
    }

    if (!utills.validateEmail(EmailAdd)) {
      utills.errorAlert('', 'Please Enter valid Email-id');
      return;
    }
    if (utills.isEmptyOrSpaces(MobilePhone)) {
      utills.errorAlert('', 'Please Enter Mobile Number');
      return;
    }
    if (utills.isEmptyOrSpaces(pwd)) {
      utills.errorAlert('', 'Please Enter Password');
      return;
    }
    const isValidPassword = validatePassword(pwd);
if( isValidPassword == false ){
  utills.confirmMessageAlert('Error', 'Password should contain  minimum 6 character and min 1 uppercase letter and 1 lowercase letter and 1 special character.');
  return;
}
    if (utills.isEmptyOrSpaces(Npwd)) {
      utills.errorAlert('', 'Please Enter New Password');
      return;
    }

    if(pwd != Npwd){
      utills.errorAlert('', 'Confirm Password And New Password should be same');
      return;
    }
     // navigation.navigate(SCREENS.SelectServicesSubscription,{Params1 : data})
    let data = {
      FirstName:FirstName,
      LastName:lastName,
      DOB:dob,
      Gender:valueG,
      Address:PhysicalAddress,
      POBox:Poboxnu,
      Email:EmailAdd,
      IRD:IRD,
      Password:pwd,
      ConfirmPassword:Npwd,
      PhoneNumber:MobilePhone,
    };

    console.log('data res==', data);

    dispatch(RegisterSlice(data))
    .unwrap()
    .then(res => {
  
      console.log('Register res==', res);
  
      if (res.statusCode == 200){ 
        let Getdata = {
      FirstName:res?.data?.firstName,
      LastName:res?.data?.lastName,
      DOB:utills.getDateBeforeT(res?.data?.dob),
      Gender:res?.data?.gender,
      Address:res?.data?.address,
      POBox:res?.data?.poBox,
      Email:res?.data?.email,
      IRD:res?.data?.ird,
      Password:pwd,
      ConfirmPassword:Npwd,
      PhoneNumber:res?.data?.phoneNumber,
      UserId:res?.data?.userId,
    };
    navigation.navigate(SCREENS.SelectServicesSubscription,{Params1 : Getdata,from:"Registration"})
  }
  else{
    utills.errorAlert('', res.message);
    return;
  }

  });
  
};



const validatePassword = (password) => {
  // Regular expressions for password criteria
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

  // Check if password length is at least 6 characters
  if (password.length < 6) {
    return false;
  }

  // Check if password contains at least one uppercase letter
  if (!uppercaseRegex.test(password)) {
    return false;
  }

  // Check if password contains at least one lowercase letter
  if (!lowercaseRegex.test(password)) {
    return false;
  }

  // Check if password contains at least one special character
  if (!specialCharRegex.test(password)) {
    return false;
  }

  // Password meets all criteria
  return true;
};

  return (
     <GradientBackground>
    <HeaderWithBackButton onPress={handlePress} title = "Create Account" />
    <ScrollView style= {styles.containerSc}> 
    <View style={styles.container}>
    {/* <ScrollView> */}
    <View style={[styles.row,{justifyContent:'center',alignItems:'center',width:wp('85%'),gap:10}]}>
            

          </View>
          

      
       <EditTextWithLableAndIcon
        label="First Name *"
        placeholder="Enter First Name"
        value={FirstName}
        onChangeText={setFirstName}
        keyboardType="default"
      />
         <EditTextWithLableAndIcon
        label="Last Name *"
        placeholder="Enter Last Name"
        value={lastName}
        onChangeText={setlastName}
        keyboardType="default"
      />
      <View style={{alignSelf:'flex-start'}}>
  <Text style={{
    marginTop: hp('1%'),
    fontSize: rf(1.8),
    color: COLORS.Lableheading,
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('3.5%'),
    textAlign:'left'
  }}>Gender  
   <Text style={{
    marginTop: hp('1%'),
    fontSize: rf(1.8),
    color: COLORS.red,
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('3.5%'),
    textAlign:'left'
  }}> *  
  </Text>
  </Text>
</View>
<View style={{
           alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal:10,
      marginTop:10,
      marginBottom:15,
      //zIndex: 1, // Add zIndex to ensure the dropdown appears above other elements
      position: 'relative'

    }}>
      <DropDownPicker
      open={openG}
      value={valueG}
      items={itemsG}
      setOpen={setOpenG}
      setValue={setValueG}
      setItems={setItemsG}
      listMode='SCROLLVIEW'
      placeholder='Select Gender'
      placeholderStyle ={{color:COLORS.Greyscale}}
      style={{ 
        borderColor: COLORS.Greyscale,borderRadius:10, borderWidth:2,height: hp('8%'),
        width : wp('89%'),zIndex:1
}}
      textStyle={{  
        color:  COLORS.Content,
        fontFamily: FONTFAMILY.Bold,
        alignSelf: 'center',
        fontSize: rf(1.8),
      }}
    />

    </View>
       
<View style={{alignSelf:'flex-start'}}>
  <Text style={{
    marginTop: hp('1%'),
    fontSize: rf(1.8),
    color: COLORS.Lableheading,
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('3.5%'),
    textAlign:'left'
  }}>Date Of Birth  
   <Text style={{
    marginTop: hp('1%'),
    fontSize: rf(1.8),
    color: COLORS.red,
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('3.5%'),
    textAlign:'left'
  }}> *  
  </Text>
  </Text>
</View>
<View style={{
      alignItems: 'center',
      marginTop:10,
      marginBottom:15,
      borderColor: COLORS.Greyscale,borderRadius:10, borderWidth:2,height: hp('8%'),
      width : wp('89%'),
      justifyContent :'space-between',
      alignContent:'center',
      flexDirection:'row',
      paddingHorizontal:10
    }}>

<Text style={{
    marginTop: hp('1%'),
    fontSize: rf(1.8),
    color:  dob === "Date of Birth" ?  COLORS.Greyscale : COLORS.Content,
      textAlign:'left',
     paddingVertical:5,
  
     fontFamily: FONTFAMILY.Bold,
    fontSize: rf(1.8),
  }}>{dob} 
  </Text>
  <TouchableNativeFeedback
      onPress={showDatePicker}>
<Image source={IMAGES.Cal_icon1} style={{width:32,height:32,resizeMode:'contain'}}
 />
 </TouchableNativeFeedback>
  <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={selectedDate}
        maximumDate={maximumDate}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

    </View>
   
    <EditTextWithLableAndIcon
        label="Email Address *"
        placeholder="Enter Email Address"
        value={EmailAdd}
        onChangeText={setEmailAdd}
        keyboardType="default"
      />


<EditTextWithLableAndIcon
        label="Phone Number *"
        placeholder="Enter Phone Number"
        value={MobilePhone}
        onChangeText={setMobilePhone}
        keyboardType='numeric'
        maxlength={10}
      />
       <EditTextWithLableAndIcon
        label="Physical Address *"
        placeholder="Enter Physical Address"
        value={PhysicalAddress}
        onChangeText={setPhysicalAddress}
        keyboardType="default"
      />
       <EditTextWithLableAndIcon
        label="P.O. Box Number"
        placeholder="Enter P.O. Box Number"
        value={Poboxnu}
        onChangeText={setPoboxnu}
        keyboardType="default"
      />
       <EditTextWithLableAndIcon
        label="IRD#"
        placeholder="Enter IRD"
        value={IRD}
        onChangeText={setIRD}
        keyboardType="default"
      />
   <EditTextWithLable
      label="New Password *"
        placeholder="Enter New Password"
        value={pwd}
        onChangeText={setupwd}
        keyboardType="default"
        icon
        password
      />

<EditTextWithLable
      label="Confirm Password *"
        placeholder="Enter Confirm Password"
        value={Npwd}
        onChangeText={setNewpwd}
        keyboardType="default"
        password
        icon
      />



<CustomBlueButton
          title="Create Account"
          onPress={() => {
               //navigation.navigate(SCREENS.DashBoard);
            handleNextPress()
          }}      
          IconName={"input"}

          buttonStyle={styles.loginButton} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(2.0)}}         />



<View style={styles.SignUpContainer}>
          <Text style={styles.txt1}>Already have an account ? </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate(SCREENS.LoginScreen);
            }}>
            <Text
              style={[
                styles.txt1,
                {color: COLORS.primary, fontFamily: FONTFAMILY.Bold},
              ]}>
              login
            </Text>
          </TouchableOpacity>
        </View>

{/* 

        <View style = {{width:wp('90%')}}>
      





<CustomButtons
        onBackPress={handleBackPress}
        onNextPress={handleNextPress}
      />
        </View> */}




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
  SignUpContainer: {
   
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:10,
    marginBottom:25
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




