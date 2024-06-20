import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import React from 'react';
 import {COLORS, CONSTANTS, DEFAULTARRAYS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES} from '../../../constants/them';
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
import EditTextBottomBorder from '../../../components/EditTextBottomBorder';
import CustomRadioButtons from '../../../components/CustomRadioButtons';
import CustomButtonsBAndS from '../../../components/CustomButtonsBAndS';
import { useRoute } from '@react-navigation/native';
import CustomHeader from '../../../components/CustomHeader';
import { ChangePasswordSlice, removeUserData } from '../../../redux/slice/auth';
import useRedux from '../../../components/useRedux';
import utills from '../../../utills';
import { useDispatch, useSelector } from 'react-redux';
// import CustomRadioButtons from '../../../components/CustomRadioButtons';

export default function ChangePassword({navigation}) {
 
useEffect(() => {

  return () => {
   
  };
}, []);
const [selectedOption, setSelectedOption] = useState(null);

 const [Cpwd, setCpwd] = useState('');
 const route = useRoute();
//  const { From } = route.params;
const [Npwd, setNpwd] = useState('');
const [NCpwd, setNCpwd] = useState('');
const userData = useSelector(state => state.auth.userData);


  const handleBackPress = () => {
    // Add your logic for the "Back" button action here
    navigation.goBack()
  };

  const handleNextPress = () => {
    // Add your logic for the "Next" button action here
   Changepwd()
  };
  const {dispatch} = useRedux();
  const dispatcher = useDispatch();

  const Changepwd = async () => {

    // if (utills.isEmptyOrSpaces(code)) {
    //   utills.errorAlert('', 'Please Enter Code');
    //   return;
    // }
    // if (code.length < 6) {
    //   utills.errorAlert('', 'Invalid Code');
    //   return;
    // }
    if (utills.isEmptyOrSpaces(Cpwd)) {
      utills.errorAlert('', 'Please Enter Current Password');
      return;
    }
    if (utills.isEmptyOrSpaces(Npwd)) {
      utills.errorAlert('', 'Please Enter New Password');
      return;
    }
    const isValidPassword = validatePassword(Npwd);
    if( isValidPassword == false ){
      utills.confirmMessageAlert('Error', 'Password should contain  minimum 6 character and min 1 uppercase letter and 1 lowercase letter and 1 special character.');
      return;
    }
    
    // if(!utills.validatePassword(Npwd)){
    //   utills.errorAlert('Invalid Password! ', 'Password should contain min 6 character,1 upper case and 1 lower case and 1 special character');
    //   return;
    // // }
    
    // if (Cpwd.length < 6) {
    //   utills.errorAlert('Invalid Password! ', 'It should be minimum 6 Digit');
    //   return;
    // }
    
    // if (Npwd.length < 6) {
    //   utills.errorAlert('Invalid Password! ', 'It should be minimum 6 Digit');
    //   return;
    // }
    console.log(NCpwd)
    console.log(Npwd)

    if (NCpwd != Npwd) {
      utills.errorAlert('', 'Confirm Password Should be Same as New Password');
      return;
    }
    let data = {
      email: userData?.email,
      oldPassword: Cpwd,
      newPassword: Npwd,
      confirmPassword: NCpwd,
      userId: userData?.userID
 };

   console.log(data)    
    dispatch(ChangePasswordSlice(data))
      .unwrap()
      .then(res => {
        console.log('ChangePasswordSlice res==', res);
        if (res.success == true){
          //utills.successAlert('','Password Reset Succesfully')
          Alert.alert(
            'Message',
            "Password Changed Successfully.Please Login Again",
            [
              {
                text: 'OK',
                onPress: () => {
                  dispatcher(removeUserData(userData));
                  navigation.reset({
                    index: 0,
                    routes: [{ name: SCREENS.LoginScreen }], // Replace 'InitialScreen' with the name of your initial screen
                  });  
                },
              },
            ],
          );
        }else{
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


const handlePress = () => {
};
  return (
     <GradientBackground>
    <CustomHeader onPress={handlePress} title = "Change Password" />

    <ScrollView style= {styles.containerSc}> 
    <View style={styles.container}>
    {/* <ScrollView> */}
    


    <Text  style={[styles.Left500Text,{padding:10}]}>Password must contain at least- one special character, one digit, one uppercase & one lower case alphabet and have more than 6 characters...i.e:-Example@123. Allowed Special Characters are ? @ # $ % &
</Text>


      <EditTextWithLable
      label="Current Password *"
        placeholder="Enter Current Password"
        value={Cpwd}
        onChangeText={setCpwd}
        keyboardType="default"
      />

<EditTextWithLable
      label="New Password *"
        placeholder="Enter New Password"
        value={Npwd}
        onChangeText={setNpwd}
        keyboardType="default"
        password
        icon
      />

<EditTextWithLable
      label="Confirm Password *"
        placeholder="Enter Confirm Password"
        value={NCpwd}
        onChangeText={setNCpwd}
        keyboardType="default"
        password
        icon
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

  containerSub: {
    flex: 1,
    width : wp('88'),
    alignContent:'flex-start',
    backgroundColor :COLORS.lightBlueSelection,
    margin:20,
    borderRadius : 15,
    paddingVertical:20
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
    fontFamily: FONTFAMILY.Medium,
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
    fontSize:rf(1.8),
    fontFamily: FONTFAMILY.Medium,
  },
  textblue: {
    color: COLORS.brightBLUE,
    fontSize:rf(1.8),
    fontFamily: FONTFAMILY.Medium,

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




