import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, ScrollView} from 'react-native';
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
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import utills from '../../utills';

export default function SideMenu({navigation}) {
  const [email, setemail] = useState('');
  const [pwd, setupwd] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const userData = useSelector(state => state.auth.userData);

useEffect(() => {

  return () => {
   
  };
}, []);


const handlePress = () => {
};


const menus = [
  {
    label: 'Home',
    imageSource: IMAGES.homeM,
    subMenuItems: [
    ],
  },
    {
      label: 'Home Shopping Service',
      imageSource: IMAGES.HSServiceIcon,
      subMenuItems: [
        { label: 'Hs Package status & Invoice upload', imageSource: IMAGES.HSPSinvoiveicon },
        { label: 'New Subscriptions', imageSource: IMAGES.HSPSinvoiveicon },
        { label: 'Account Summary', imageSource: IMAGES.AccountDetailsicon },
        // Add more submenu items as neededAccountSummary
      ],
    },
    {
      label: 'Payments',
      imageSource: IMAGES.EZPaymnticon,
      subMenuItems: [
        { label: 'Home Shopping parcel & Subscriptions', imageSource: IMAGES.HSPSicon },
        { label: 'Post Office Box', imageSource: IMAGES.postofficeicon },
        { label: 'EZone Payments', imageSource: IMAGES.EZPaymnticon },
        { label: 'Misc. Services Payments', imageSource: IMAGES.MiscServiceIcon },
        { label: 'POCDS Services', imageSource: IMAGES.POCDSServiceicon },
        
    ],
      },
      {
        label: 'Contact Us',
        imageSource: IMAGES.ContactUsIcon,
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
  ];


  return (
   
    <View style={styles.container}>
        <View style={styles.subcontainer}>
        <Image source={IMAGES.ProfileImage} style={{
    width: 100,
    height: 100,
  }} />

  <View>
  <Text style={styles.txt}>{userData?.firstName + " " + userData?.lastName}</Text>
  <Text style={styles.txt1}>{userData?.email}</Text>

{/* <Text style={styles.txt}>Marcia & Alwyn</Text>
  <Text style={styles.txt1}>marciar@caribcable.com</Text> */}

  </View>
  <View style={{alignSelf:'flex-start'}}>

  <TouchableOpacity        onPress={
          () => 
        navigation.goBack()}
        >
        {/* <Svg /> */}

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


const CustomMenu = ({ label, imageSource, subMenuItems }) => {
const navigation = useNavigation()
const userData = useSelector(state => state.auth.userData);

  const TapSubMenu= (ItemName) => {

    if(ItemName==="Home Shopping parcel & Subscriptions"){
      navigation.replace(SCREENS.ParcelSubscriptionpayment);
    } else  if(ItemName==="Post Office Box"){
      navigation.replace(SCREENS.PostOfficeBox);
    }
    else  if(ItemName==="EZone Payments"){
      navigation.replace(SCREENS.EZonepayment);
    }
    else  if(ItemName==="Misc. Services Payments"){
      navigation.replace(SCREENS.MiscPayments);
    }
    else  if(ItemName==="POCDS Services"){
      navigation.replace(SCREENS.POCDSPayments);
    }
    else  if(ItemName==="User Profile"){
      navigation.replace(SCREENS.Userprofile);
    }
    else  if(ItemName==="Account Summary"){
      navigation.replace(SCREENS.AccountSummary);
    }
    else  if(ItemName==="Logout"){
      navigation.replace(SCREENS.WelcomScreen);
    }
    else  if(ItemName==="Change Password"){
      navigation.replace(SCREENS.ChangePassword);
    }
    else  if(ItemName==="Hs Package status & Invoice upload"){
      navigation.replace(SCREENS.HSInvoiceUplaodpackages);

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
      navigation.replace(SCREENS.SelectServicesSubscription,{Params1 : Getdata});
    }
  };
  const TapbMenu= (ItemName) => {

    if(ItemName==="Home"){
      navigation.replace(SCREENS.DashBoard);
    } else  if(ItemName==="Contact Us"){
      navigation.replace(SCREENS.ContactUs);
    }
    else  if(ItemName==="Logout"){
      navigation.replace(SCREENS.WelcomScreen);
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
paddingVertical:30
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




