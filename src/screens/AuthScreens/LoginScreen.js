import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {COLORS, CONSTANTS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES} from '../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';

import { useEffect,useState } from 'react';
import CustomBlueButton from '../../components/CustomBlueButton';
import GradientBackground from '../../components/GradientBackground';
import HeaderWithBackButton2 from '../../components/HeaderWithBackButton2';
import EditTextWithLable from '../../components/EditTextWithLable';
import Icons, { Icon } from '../../components/Icons';
import CustomHeader from '../../components/CustomHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import utills from '../../utills';
import useRedux from '../../components/useRedux';
import { LoginSlice } from '../../redux/slice/auth';

export default function LoginScreen({navigation}) {
  const [email, setemail] = useState('');
  const [pwd, setupwd] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const {dispatch} = useRedux();

useEffect(() => {

  return () => {
   
  };
}, []);
const handlePress = () => {
  navigation.navigate(SCREENS.WelcomScreen)
};
const gotoSubscription = (userData) =>{
  let Getdata = {
    FirstName:userData?.firstName,
    LastName:userData?.lastName,
    DOB:utills.getDateBeforeT(userData?.dob),
    Gender:userData?.gender,
    Address:userData?.address,
    POBox:userData?.poBox,
    Email:userData?.email,
    IRD:userData?.ird,
    Password:"",
    ConfirmPassword:"",
    PhoneNumber:userData?.phoneNumber,
    UserId:userData?.userID,
  };
   navigation.navigate(SCREENS.SelectServicesSubscription,{Params1 : Getdata,from:"Login"})
}

const LoginApi = async () => {
//   let Getdata = {
//     FirstName:"",
//     LastName:"",
//     DOB:"", 
//     Gender:"",
//     Address:"",
//     POBox:"",
//     Email:"",
//     IRD:"",
//     Password:"",
//     ConfirmPassword:"",
//     PhoneNumber:"",
//     UserId:"",
//   };
//   navigation.navigate(SCREENS.RentalBoxAccountDetails1,{Params1:Getdata})

// return;
      let data = {
      username: email,
      email: email,
      Password: pwd,
      RememberMe : isChecked 
    };
    console.log('Login data==',data);

    if (utills.isEmptyOrSpaces(email)) {
      utills.errorAlert('', 'Please Enter Email');
      return;
    }
    if (!utills.validateEmail(email)) {
      utills.errorAlert('', 'Invalid Email');
      return;
    }
    if (utills.isEmptyOrSpaces(pwd)) {
      utills.errorAlert('', 'Please Enter Password');
      return;
    }
    
    // navigation.navigate(SCREENS.DashBoard);
    await utills.saveStringToAsyncStorage('LoginbyID', "yes")

    dispatch(LoginSlice(data))
      .unwrap()
      .then(res => {
        if (res.success == true){
          console.log('Login res==', res.data);

if (res?.data?.services == null){


  Alert.alert(
    'No Active Plan',
    `Please Buy Service Plan First`,
    [
      {
        text: 'OK',
        onPress: () => {
          gotoSubscription(res.data)
        },

        // onPress: (gotoSubscription(res.data)),
      },
    ],
    { cancelable: false }
  );

return

 
}




const services = res?.data?.services


if(res.data.ispayment === true){




  const countNonNullOrTrueValues = Object.values(services).filter(value => value !== null && value !== false).length;

  if (countNonNullOrTrueValues === 1) {
    console.log('Exactly one value is not null or true.');

    if  (services?.hsUserId !== null){
      navigation.replace(SCREENS.HSAccountDetail);
    } else if  (services?.ezUserId !== null){
      navigation.replace(SCREENS.EZAccountDetail);
     } else if  (services?.ltbUserId !== null){
      navigation.replace(SCREENS.RentalBoxAccountDetail);
    }else if  (services?.pbdsUserId !== null){
      navigation.replace(SCREENS.PBDSAccountDetail);
    }else if  (services?.pocdsUserId == true){
      navigation.replace(SCREENS.POCDSAccountDetail);
    }
  } else {
navigation.replace(SCREENS.DashBoard); 
  
 AsyncStorage.setItem(CONSTANTS.ISLOGGEDIN,"Yes");
}


  //

}else{


 
  // Check if any value is not null or true
 



  navigation.navigate(SCREENS.CartValueScreen,{From :"Login",Service:'',userID:res?.data?.userID,LoginParams:res?.data})
}

        }else{
          utills.errorAlert('', res.message);

          return;
        }
      });
  };

  return (
     <GradientBackground>
    <HeaderWithBackButton2  onPress={() => {
              navigation.navigate(SCREENS.WelcomScreen);
            }} title = "Customer Login" />

    <View style={styles.container}>
      <View style={{}}>
        {/* <Logoimage style={{alignSelf: 'center'}} /> */}
        <Text style={styles.txt}>
        Registered Customers  {' '}
        </Text>
        <Text style={styles.txt1}>
        If you have an Account, Sign in with your e-mail address</Text>
       
      </View>
  
      <View>
      <EditTextWithLable
        label="Username"
        placeholder="Username"
        value={email}
        onChangeText={setemail}
        keyboardType="default"
      />
      <EditTextWithLable
        label="Password"
        placeholder="Password"
        value={pwd}
        onChangeText={setupwd}
        keyboardType="default"
        password // This will show a password toggle icon
        icon
      />

<View style={styles.subContainer2}>
          <TouchableOpacity
            // activeOpacity={0.8}
            onPress={() => {
              setIsChecked(!isChecked);
            }}>
            <Icons
              name={isChecked ? 'checkbox-active' : 'checkbox-passive'}
              style={styles.icon}
              Type={Icon.Fontisto}//
              size={rf(2.0)}
            />
          </TouchableOpacity>
          <Text style={styles.rememberme}>
          Remember me?{' '}
          
          </Text>
        </View>
    </View>
<View style={styles.buttonContainer}>
        
<View style={styles.SignUpContainer}>
          <Text style={styles.txt1}>Do not have an account ? </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate(SCREENS.RegistrationPage);
            }}>
            <Text
              style={[
                styles.txt1,
                {color: COLORS.primary, fontFamily: FONTFAMILY.Bold},
              ]}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>

        <CustomBlueButton
          title="Login"
          onPress={() => {
               //navigation.navigate(SCREENS.DashBoard);
            LoginApi()
          }}    
          IconName={"login"}

          buttonStyle={styles.loginButton} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(2.0)}}         />

<View style={styles.SignUpContainer}>
          <TouchableOpacity
            onPress={
              () => {
                navigation.navigate(SCREENS.ForgotPwd);
            }
            }>
            <Text
              style={
               [ styles.txt1,{color: "blue"}]
}>            Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
     </GradientBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width : wp('94'),
    justifyContent:'space-between',
    //alignItems:"center",
    backgroundColor :COLORS.white,
    margin:20,
    borderRadius : 15,
    padding:10,
    alignSelf:'center'
  },
  subcontainer: {
  
    width : wp('94'),
    alignItems:"center",
  
  },
  
  buttonContainer: {
   gap :10,
   alignItems: 'center',
  },
  txt: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: rf(3.0),
    color: COLORS.Heading,
    textAlign: 'left',
    marginTop: hp('1.8%'),
  },
  button: {
    marginTop: 20, 
  },
  icon: {
    fontSize: rf(2.5),
    color: COLORS.Subheading,
    marginRight: 10,
  },
  txt1: {
    fontFamily: FONTFAMILY.Regular,
    fontSize: rf(1.7),
    color: COLORS.Subheading,
    textAlign: 'left',
  },
  rememberme: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: rf(1.7),
    color: COLORS.Lableheading,
    textAlign: 'left',
  },
  SignUpContainer: {
   
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subContainer2: {
    marginVertical: 10,
  
   flexDirection: 'row',
   justifyContent: 'flex-start',
   alignItems: 'center',
 },
});




