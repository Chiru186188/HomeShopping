import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator, Share} from 'react-native';
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
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import EditTextWithLable from '../../components/EditTextWithLable';
import Icons, { Icon } from '../../components/Icons';
import CustomHeader from '../../components/CustomHeader';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import utills from '../../utills';
import { LogedInUserSlice, removeUserData, saveUserData } from '../../redux/slice/auth';
import useRedux from '../../components/useRedux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveIsLoading } from '../../redux/slice/categories';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import ReactNativeBlobUtil from 'react-native-blob-util';
export default function SideMenu({navigation}) {
  const [email, setemail] = useState('');
  const [pwd, setupwd] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const userData = useSelector(state => state.auth.userData);
  const [loading, setLoading] = useState(false); // State to manage loading status

useEffect(() => {
  
  return () => {
   
  };
}, []);
useFocusEffect(
  React.useCallback(() => {
    
    LoginDetailApi()

    
    
  }, [])
);
const {dispatch} = useRedux();

const LoginDetailApi = async () => {
  setLoading(true); // Set loading to true before making API call
  let data = {
        id: userData?.userID,

      };
     
      
      // navigation.navigate(SCREENS.DashBoard);
      // await utills.saveStringToAsyncStorage('LoginbyID', "yes")
      // await utills.saveStringToAsyncStorage('FromLogin', "Yes")

      dispatch(LogedInUserSlice(data))
        .unwrap()
        .then(res => {
          setLoading(false); // Set lo
          console.log('Login ressss==', res);
          saveAccessToken(res?.token)
          if (res?.success == true){
            console.log('Login res==', res.data);
            setLoading(false); // Set l
            dispatch(saveUserData(res.data))
          }
  // if (res.data.services == null){
  
  
  //   Alert.alert(
  //     'No Active Plan',
  //     `Please Buy Service Plan First`,
  //     [
  //       {
  //         text: 'OK',
  //         onPress: () => {
  //           gotoSubscription(res.data)
  //         },
  
  //         // onPress: (gotoSubscription(res.data)),
  //       },
  //     ],
  //     { cancelable: false }
  //   );
  
  // return
  
   
  // }
  
  // if(res.data.ispayment === true){
  //   navigation.navigate(SCREENS.DashBoard);
  
  // }else{
  //   navigation.navigate(SCREENS.CartValueScreen,{From :"Login",Service:'',userID:res?.data?.userID,LoginParams:res?.data})
  // }
  
  //         }else{
  //           utills.errorAlert('', res.message);
  
  //           return;
  //         }
        });
    };
 const saveAccessToken =  async (token) => {
  await AsyncStorage.setItem(CONSTANTS.AccessToken,token ?? "");

};


const menus = [
  {
    label: 'Home',
    imageSource: IMAGES.homeM,
    subMenuItems: [
    ],
  },
  userData?.services?.hsUserId !== null
      ? {
    
      label: 'Hs Package status & Invoice upload',
      imageSource:IMAGES.HSPSinvoiveicon, //IMAGES.HSServiceIcon,
      subMenuItems: [
      //  { label: 'Hs Package status & Invoice upload', imageSource: IMAGES.HSPSinvoiveicon },
        // { label: 'New Subscriptions', imageSource: IMAGES.HSPSinvoiveicon },
        //{ label: 'Account Summary', imageSource: IMAGES.AccountDetailsicon },
        // Add more submenu items as neededAccountSummary
      ],
    }
    : null,
    {
      label: 'Account Summary',
      imageSource: IMAGES.AccountDetailsicon,
      subMenuItems: [        // Add more submenu items as neededAccountSummary
      ],
    },
    {
      label: 'New Subscriptions',
      imageSource: IMAGES.HSPSinvoiveicon,
      subMenuItems: [        // Add more submenu items as neededAccountSummary
      ],
    },
    // userData?.services?.hsUserId !== null
   // ?
     {
      label: 'Payments',
      imageSource: IMAGES.EZPaymnticon,
      subMenuItems: [
        
        { label: 'Home Shopping Parcel & Subscriptions', imageSource: IMAGES.HSPSicon },
        { label: 'Home Shopping Deposit Payments', imageSource: IMAGES.HSPSicon },
        { label: 'Post Office Box', imageSource: IMAGES.postofficeicon },
        { label: 'EZone Payments', imageSource: IMAGES.EZPaymnticon },
        { label: 'Misc. Services Payments', imageSource: IMAGES.MiscServiceIcon },
        { label: 'POCDS Services', imageSource: IMAGES.POCDSServiceicon },
        { label: 'PBDS Services', imageSource: IMAGES.POCDSServiceicon },

    ],
      },
  // : {
  //   label: 'Payments',
  //   imageSource: IMAGES.EZPaymnticon,
  //   subMenuItems: [ 
  //     { label: 'Post Office Box', imageSource: IMAGES.postofficeicon },
  //     { label: 'EZone Payments', imageSource: IMAGES.EZPaymnticon },
  //     { label: 'Misc. Services Payments', imageSource: IMAGES.MiscServiceIcon },
  //     { label: 'POCDS Services', imageSource: IMAGES.POCDSServiceicon },
  //     { label: 'PBDS Services', imageSource: IMAGES.POCDSServiceicon },

  // ],
  //   },
    {
    
      label: 'Home Shopping',
      imageSource:IMAGES.HSServiceIcon,
      subMenuItems: [],
    },
    {
    
      label: 'eZone',
      imageSource:IMAGES.HSServiceIcon,
      subMenuItems: [],

    },
    {
    
      label: 'Private Post Office Box Rental',
      imageSource:IMAGES.POCDSServiceicon,
      subMenuItems: [],

    },
     {
    
      label: 'POCDS (Post Office Clearance and Delivery Service)',
      imageSource:IMAGES.POCDSServiceicon,
      subMenuItems: [],

    },
    {
    
      label: 'Private Bag Delivery Service',
      imageSource:IMAGES.POCDSServiceicon,
      subMenuItems: [],

    },
    {
    
      label: 'Credit Card Ordering Service',
      imageSource:IMAGES.HSServiceIcon,
      subMenuItems: [],

    },
    {
    
      label: 'GPO News',
      imageSource:IMAGES.HSServiceIcon,
      subMenuItems: [],

    },
      {
        label: 'Contact Us',
        imageSource: IMAGES.ContactUsIcon,
        subMenuItems: [
        ],
      },
      {
        label: 'Visit our website',
        imageSource: IMAGES.POCDSServiceicon,
        subMenuItems: [
        ],
      },
      {
        label: 'Profile',
        imageSource: IMAGES.ProfileIcon,
        subMenuItems: [
          { label: 'User Profile', imageSource: IMAGES.UserProfileIcon },
          { label: 'Change Password', imageSource: IMAGES.CPIcon },
        ],
      },
      {
        label: 'Logout',
        imageSource: IMAGES.LogutIcon,
        subMenuItems: [
         
        ],
      },
  
    // Add more menus as needed
  ].filter(Boolean);


  return (
   
    <View style={styles.container}>
 {/* {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      )} */}


        <View style={styles.subcontainer}>
       
{userData?.profilePath && userData.profilePath !== 'http://hsstrain.apis.gov.ai//Upload/ProfileImgApi/' ? (
    <Image source={{ uri: userData.profilePath }} style={styles.image} />
) : (
    <Image source={IMAGES.ProfileImage} style={styles.image} />
)} 
  <View>
  {/* <Text style={styles.txt}>{userData?.firstName + " " + userData?.lastName}</Text>
  <Text style={styles.txt1}>{userData?.email}</Text>
 */}
 <View style={{width:wp("50%")}}>
        <Text style={styles.txt} numberOfLines={2} ellipsizeMode='tail'>
            {userData?.firstName + " " + userData?.lastName}
        </Text>
        
        <Text style={styles.txt1} numberOfLines={2} ellipsizeMode="tail">
            {userData?.email}
        </Text>
        </View>
       
   

  </View>
  <View style={{alignSelf:'flex-start'}}>

  <TouchableOpacity        onPress={
          () => 
        navigation.goBack()}
        >

        <Icons
      name={'close-thick'}
      Type={Icon.MaterialCommunityIcons}
      size={rf(3.4)}
      color={COLORS.white}
    />
      </TouchableOpacity>

          </View>

        </View>


        <ScrollView>

        <View style={styles.containerM}>
      {menus.map((menu, index) => (
        <CustomMenu
          key={index}
          label={menu.label}
          imageSource={menu.imageSource}
          subMenuItems={menu.subMenuItems}
        />
      ))}
    </View>
    </ScrollView>

    </View>

  );


}
const currentDateTime = new Date();
   const fileName = `report_${currentDateTime.getTime()}`; // Example: report_1623117351368.pdf
  //  const downloadFile = () => {
  //   const source = "http://hsstrain.apis.gov.ai//Content/Pdf/OnlinePayReceipt_3431_202405310255198885.pdf";
  //   const currentDateTime = new Date();
  //   const fileName = `report_${currentDateTime.getTime()}.pdf`;
  //   let dirs = ReactNativeBlobUtil.fs.dirs;
  //   ReactNativeBlobUtil.config({
  //     fileCache: true,
  //     appendExt: 'pdf',
  //     path: `${dirs.DocumentDir}/${fileName}`,
  //     addAndroidDownloads: {
  //       useDownloadManager: true,
  //       notification: true,
  //       title: fileName,
  //       description: 'File downloaded by download manager.',
  //       mime: 'application/pdf',
  //     },
  //   })
  //     .fetch('GET', source)
  //     .then((res) => {
        
  //       if (Platform.OS === 'ios') {
  //         const filePath = res.path();
  //         let options = {
  //           type: 'application/pdf',
  //           url: filePath,
  //           saveToFiles: true,
  //         };
  //         Share.open(options)
  //           .then((resp) => console.log(resp))
  //           .catch((err) => console.log('Share error:', err));
  //       }
  //     })
  //     .catch((err) => console.log('Download error:', err));
  // };



 





//    const downloadFile = () => {
//     const source = "http://hsstrain.apis.gov.ai//Content/Pdf/OnlinePayReceipt_3431_202405310255198885.pdf";
//     let dirs = ReactNativeBlobUtil.fs.exists;
//     ReactNativeBlobUtil.config({
//       fileCache: true,
//       appendExt: 'pdf',
//       path: `${dirs.DocumentDir}/${fileName}`,
//       addAndroidDownloads: {
//         useDownloadManager: true,
//         notification: true,
//         title: fileName,
//         description: 'File downloaded by download manager.',
//         mime: 'application/pdf',
//       },
//     })
//       .fetch('GET', source)
//       .then((res) => {

// console.log("res",res)

//         if (Platform.OS === 'ios') {
//           const filePath = res.path();
//           let options = {
//             type: 'application/pdf',
//             url: filePath,
//             saveToFiles: true,
//           };
//           Share.open(options)
//             .then((resp) => console.log(resp))
//             .catch((err) => console.log('Share error:', err));
//         }
//       })
//       .catch((err) => console.log('Download error:', err)); // Log detailed error
//   };
  

const CustomMenu = ({ label, imageSource, subMenuItems }) => {
const userData = useSelector(state => state.auth.userData);
const navigation = useNavigation()
const showAlert = (From) => {
  Alert.alert(
    'New Subscription',
    'You are not subscribed to this service. If interested, please register here.',
    [
      {
        text: 'New Subscription',
        onPress: () =>{ console.log('New Subscription pressed')
      
        //
         NewSub(From)
     
       }, style: 'default',
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel pressed'),
        style: 'cancel',
      },
    ],
    { cancelable: false }
  );
};


const NewSub = (From) =>{

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
  if(From === "HS"){
    navigation.navigate(SCREENS.HomeShopIntroduction,{Params1 :Getdata})

  }
  else if(From === "eZone"){
    navigation.navigate(SCREENS.EzoneIntroduction,{Params1 :Getdata})

  }
  else if(From === "RentalBox"){
    navigation.navigate(SCREENS.RentalBoxIntroduction,{Params1 :Getdata})

  }
  else if(From === "POCDS"){
    navigation.navigate(SCREENS.POCDSIntroduction,{Params1 : Getdata})

  }
  else if(From === "PBDS"){
    navigation.navigate(SCREENS.PBDSIntroduction,{Params1 :Getdata})

  }
  else if(From === "Credit"){
    
  }
}

  const TapSubMenu= (ItemName) => {

 

      if(ItemName==="Post Office Box"){

      if( userData?.services?.ltbUserId !== null){
        navigation.replace(SCREENS.PostOfficeBox);
  
       }
  else{
    utills.errorAlert("Error","Post Office Box customer detail not found!")
    return
  }


    }

    if(ItemName==="Home Shopping Parcel & Subscriptions"){

      if( userData?.services?.hsUserId !== null){
       navigation.replace(SCREENS.ParcelSubscriptionpayment);
 
      }
 else{
   utills.errorAlert("Error","Home shopping customer detail not found!")
   return
 }
     } 


    else  if(ItemName==="Home Shopping Deposit Payments"){
      //

      if( userData?.services?.hsUserId !== null){
        navigation.replace(SCREENS.HSpayment);
  
       }
  else{
    utills.errorAlert("Error","Home shopping customer detail not found!")
    return
  }
    }



    
    else  if(ItemName==="EZone Payments"){


      if( userData?.services?.ezUserId !== null){
        navigation.replace(SCREENS.EZonepayment);
  
       }
  else{
    utills.errorAlert("Error","Ezone customer detail not found!")
    return
  }
    }
    else  if(ItemName==="Misc. Services Payments"){
      navigation.replace(SCREENS.MiscPayments);
    }
    else  if(ItemName==="POCDS Services"){


      if( userData?.services?.pocdsUserId === true){
        navigation.replace(SCREENS.POCDSPayments);
  
       }
  else{
    utills.errorAlert("Error","POCDS customer detail not found!")
    return
  }
    }
    else  if(ItemName==="PBDS Services"){

      if( userData?.services?.pbdsUserId !== null){
        navigation.replace(SCREENS.PBDSPayments);
  
       }
  else{
    utills.errorAlert("Error","PBDS customer detail not found!")
    return
  }
    }
    else  if(ItemName==="User Profile"){
      navigation.replace(SCREENS.Userprofile);
    }
   
    else  if(ItemName==="Logout"){
      
      navigation.replace(SCREENS.WelcomScreen);
    }
    else  if(ItemName==="Change Password"){
      navigation.replace(SCREENS.ChangePassword);
    }
    
   
  };
  const dispatcher = useDispatch();

  const TapbMenu= (ItemName) => {

    if(ItemName==="Home"){

     // downloadFile()
      navigation.replace(SCREENS.DashBoard);
    } else  if(ItemName==="Contact Us"){
      navigation.replace(SCREENS.ContactUs);
    }
    else  if(ItemName==="Logout"){

      
      
      Alert.alert(
        'Warning',
        'Do You want to logout?',
        [
          {
            text: 'Yes',
            onPress: () =>{ console.log('New Subscription pressed')
          
            //
            
            dispatcher(removeUserData(userData));
            navigation.reset({
              index: 0,
              routes: [{ name: SCREENS.WelcomScreen }], // Replace 'InitialScreen' with the name of your initial screen
            });   
            
         
           }, style: 'default',
          },
          {
            text: 'No',
            onPress: () => console.log('Cancel pressed'),
            style: 'cancel',
          },
        ],
        { cancelable: false }
      );

    }

   
 
     else  if(ItemName==="Hs Package status & Invoice upload"){
      navigation.replace(SCREENS.HSInvoiceUplaodpackages);

    } else  if(ItemName==="Account Summary"){
      navigation.replace(SCREENS.AccountSummary);
    }
   else  if(ItemName==="Home Shopping"){
       if( userData?.services?.hsUserId !== null){
        navigation.replace(SCREENS.HSAccountDetail);
       }
  else{
    // utills.errorAlert("Error","Home shopping customer detail not found!")
    showAlert("HS")
    return
  } } 
 
 
  else  if(ItemName==="eZone"){
   if( userData?.services?.ezUserId !== null){
    navigation.replace(SCREENS.EZAccountDetail);
   }
 else{
  // showAlert()
  //
  showAlert("eZone")

//  utills.errorAlert("Error","eZone customer detail not found!")
 return
 } } 
 else   if(ItemName==="Private Post Office Box Rental"){
   if( userData?.services?.ltbUserId !== null){
    navigation.replace(SCREENS.RentalBoxAccountDetail);
   }
 else{
  showAlert("RentalBox")

//  utills.errorAlert("Error","Post Office Box customer detail not found!")
 return
 } }  
     
 else   if(ItemName==="POCDS (Post Office Clearance and Delivery Service)"){
   if( userData?.services?.pocdsUserId === true){
    navigation.replace(SCREENS.POCDSAccountDetail);
   }
 else{
  showAlert("POCDS")

//  utills.errorAlert("Error","POCDS customer detail not found!")
 return
 } }  
 
 else  if(ItemName==="Private Bag Delivery Service"){
   if( userData?.services?.pbdsUserId !== null){
    navigation.replace(SCREENS.PBDSAccountDetail);
   }
 else{
  showAlert("PBDS")
 return
 } } 
 
 else  if(ItemName==="Credit Card Ordering Service"){
 //   if( userData?.services?.pbdsUserId === true){
 //   
        // navigation.replace(SCREENS.CreditCardOrdereningServiceList);
 //   }
 // else{
 // utills.errorAlert("Error","PBDS customer detail not found!")
 // return
 // }
// 
 utills.confirmMessageAlert("Under Development")
//  utills.errorAlert("Error","PBDS customer detail not found!")
//  showAlert("Credit")
 return
 } 
 else  if(ItemName==="GPO News"){
   //   if( userData?.services?.pbdsUserId === true){
   //    navigation.replace(SCREENS.PBDSAccountDetail);
   //   }
   // else{
   // utills.errorAlert("Error","PBDS customer detail not found!")
   // return
   // }
   
   utills.confirmMessageAlert("Under Development")
   return
   } 
   else  if(ItemName==="Visit our website"){
     Linking.openURL("https://www.aps.ai/");
     } 
 



    else  if(ItemName==="New Subscriptions"){
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
      // navigation.navigate(SCREENS.SelectServicesSubscription,{Params1 : Getdata})
      navigation.replace(SCREENS.SelectServicesSubscription,{Params1 : Getdata,from:"Side"});
    }
   else{
      setIsExpanded(!isExpanded)

    }
  };
  
    const [isExpanded, setIsExpanded] = useState(false);
  
    return (
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => 
          
          TapbMenu(label)
          
          }>
          <View style={styles.menuHeader}>
            <View style={{flexDirection:'row',alignItems:'center'}}>

              
            <Image source={imageSource} style={styles.menuImage} />
            <Text style={styles.menuText}>{label}</Text>
            {subMenuItems.length > 0 && (

            <Icons
      name={isExpanded ?  'keyboard-arrow-up' : 'keyboard-arrow-down'}
      Type={Icon.MaterialIcons}
      size={rf(3.4)}
      color={COLORS.black}
    />)}
            </View>
           
          
          </View>
        </TouchableOpacity>
        {isExpanded && (
          <View style={styles.subMenu}>
            {subMenuItems.map((item, index) => (
              <TouchableOpacity key={index}
              onPress={() => TapSubMenu(item.label)}
              >
                <View style={styles.subMenuItem}>
                  <Image source={item.imageSource} style={styles.subMenuImage} />
                  <Text style={styles.subMenuText}>{item.label}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  };
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width : wp('100%'),
    justifyContent:'flex-start',
    //alignItems:"center",
    backgroundColor :COLORS.white,
    alignSelf:'center'
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject, // Position the loader absolute to cover the entire screen
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background to dim the screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerM: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal:10,
    marginTop:20,
    gap:15,
    marginBottom:20
  },
  subcontainer: {
  
    width : wp('100%'),    
    alignItems:"center",
    justifyContent:'space-between',
    backgroundColor :COLORS.primary,
flexDirection:'row',
paddingHorizontal:10,
paddingTop:40,
paddingBottom:30,
gap:10
  },
  
  buttonContainer: {
   gap :10,
   alignItems: 'center',
  },
  txt: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: rf(2.0),
    color: COLORS.Heading,
    textAlign: 'left',
    marginTop: hp('1.8%'),
    color:COLORS.white
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
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: rf(1.8),
    color: COLORS.white,
    textAlign: 'left',
  },
  rememberme: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: rf(1.7),
    color: COLORS.Lableheading,
    textAlign: 'left',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 60,
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

 scrollContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom:20
},
 menuContainer: {
    flexDirection: 'column',
  },
  menuHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  menuImage: {
    width: wp('5%'),
    height: wp('5%'),
    resizeMode:'contain',
    marginRight: 10,
  },
  menuText: {
    fontSize: rf(2.0),
    fontFamily:FONTFAMILY.SemiBold,
    flex: 1,
    color:'black'
  },
  arrowIcon: {
    width: 24,
    height: 24,
  },
  subMenu: {
    marginLeft: 30,
    gap:10,
    
  },
  subMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop:7

  },
  subMenuImage: {
    width: wp('5%'),
    height: wp('5%'),
    marginRight: 10,
    resizeMode:'contain',

  },
  subMenuText: {
    fontSize: rf(1.8),
    fontFamily:FONTFAMILY.Medium,
    flex: 1,
    color:'black'
  },

});




