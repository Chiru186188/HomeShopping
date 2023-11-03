import {StyleSheet, View, Text, Image} from 'react-native';
import {widthPercentageToDP as wp} from '../common/responsiveFunction';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';

/* *************** Colors ********** */

export const COLORS = {
  blueButton: '#283B91',
  primary: '#3E7DC4',
  Heading : "#212731",
  Content:"#353535",
   Subheading : '#888D91',
   Lableheading : '#828282',

  lightBlueSelection: '#CDE9FF',
  BlueSelectionBorder :'#88B3DF',
  lightGreySelection: '#f5f5f5',
  CancelRED: '#E01F20',
  SaveBlue:  '#3E7DC4',

  secondry: '#EBAD1E',
  navy: '#001e3e',
  cherry: '#dd003e',
  black: '#121826',
  blackWitOpacity: 'rgba(0, 0, 0, 0.1)',
  red: '#F75555',
  yellow: '#F0CA21',
  lightyellow: '#FFE097',
  lightgrey: '#ECECEC',
  white: '#FFFFFF',
  charcoalGrey: '#676767',
  brownGrey: '#949494',
  brightBLUE: '#2972FF',
  golden: '#F39C0F',
  veryLightPink: '#D3D3D3',
  halfpwhite: '#EFEFEF',
  halfpwhite1: '#F5F5F5',
  transparent: 'transparent',
  naviWithOpacity: 'rgba(0,30,62,0.4)',
  trueGreen: '#1eaf08',
  cranBerry: '#ab0030',
  greenishBlack: '#2b2b2b',
  skyBlue: '#72bacf',
  Greyscale: '#ADADAD',
  placeHolderColor: '#94A3B8',
  tabBarLabel: '#64748B',
  skyBlueLight: '#E0EEFF',
  skyBlueDark: '#E5EBF3',
  lightBlue: '#01478F',
  socialBg: '#F8FAFC',
  tabFillColor: '#2972FF',
  Config: '#8696B4',
  seperator: '#e4e4e4',
  pink: '#fa66dd',
  card: '#FFFF',
  shadow: '#000000',
  checkboxBlue: '#7AA8FF',
  linecolor: '#E7E7E7',
  chatlightbluecolor: '#F1F5F9',
  chatGreencolor: '#22C55E',
  bordercolor: '#C2C2C2',
  shadowwColor: '#DDDDDD',
  lightblueColor: '#59A7CF',
  lightGreyclor: '#F9F9F9',

};

const appTheme = {COLORS};

export default appTheme;



export const DEFAULTARRAYS = {
  ApplyList: [
   { label: 'Radio advertisement', value: 'Radio advertisement' },
   { label: 'Email', value: 'Email' },
   { label: 'Family member', value: 'Family member' },
   { label: 'Newspaper', value: 'Newspaper' },
   { label: 'Advertisement', value: 'Advertisement' },
   { label: 'Instagram', value: 'Instagram' },
   { label: 'Friend', value: 'Friend' },
   { label: 'Postal employee', value: 'Postal employee' },
   { label: 'Flyers/posters', value: 'Flyers/posters' },
   { label: 'Government of Anguilla', value: 'Government of Anguilla' },
   { label: 'Promotional event', value: 'Promotional event' },
   { label: 'Other (state)', value: 'Other (state)' },
   

 ],
 SizeList: [
  { label: 'Medium', value: 'Medium' },
  { label: 'Large (12 inches x 6 inches)', value: 'Large (12 inches x 6 inches)' },
 


],
LocationList: [
   { label: 'General Post Office', value: 'General Post Office' },
  { label: 'Welches Polyclinic', value: 'Welches Polyclinic' },
  { label: 'Western Polyclinic', value: 'Western Polyclinic' },
  { label: 'West End Clinic', value: 'West End Clinic' },
  { label: 'Rainbow Isles (Best Buy Supermarket – East)', value: 'Rainbow Isles (Best Buy Supermarket – East)' },
  

],
SubscribedServices: [
  { label: 'Ezone Packages (AXA____________)', value: 'Ezone Packages (AXA____________))' },
 { label: 'Home Shopping packages (HS____________)', value: 'Home Shopping packages (HS____________)' },
 

],
RequirmentServices: [
  { label: 'Customs Clearance and delivery on ALL packages received', value: 'Customs Clearance and delivery on ALL packages received' },
 { label: 'Customs Clearance and delivery on request', value: 'Customs Clearance and delivery on request' },
 { label: 'Customs Clearance ONLY on ALL packages receive with collection/pick up at the General Post Office ', value: 'Customs Clearance ONLY on ALL packages receive with collection/pick up at the General Post Office ' },
 { label: 'Customs Clearance ONLY on request with collection/pick up at the General Post Office', value: 'Customs Clearance ONLY on request with collection/pick up at the General Post Office' },
 
]
}


/* * Fonts * */
export const FONTFAMILY = {
  Light: 'Poppins-Light',
  Medium: 'Poppins-Medium',
  Regular: 'Poppins-Regular',
  Bold: 'Poppins-Bold',
  ExtraBold: 'Poppins-ExtraBold',
  SemiBold: 'Poppins-SemiBold',
};

export const SPACER = ({size}) => {
  return <View style={{width: size, height: size}} />;
};
/* * Images * */
export const IMAGES = {
  //src/assets/Images/ImageNotFound.png
  Anguilla: require('../assets/Images/anguilla.png'),
  AtmCard: require('../assets/Images/atm-card.png'),

  Battery: require('../assets/Images/battery.png'),
  BGimage: require('../assets/Images/bg.png'),
  Charticon: require('../assets/Images/chart.png'),//src/assets/Images/ProfileImage.png
  Checkicon: require('../assets/Images/check.png'),
  Cruiseicon: require('../assets/Images/cruise.png'),
  Checkicon1: require('../assets/Images/CheckR.png'),

  EmsLogo: require('../assets/Images/Ems-Logo.png'),
  EmsLogo2: require('../assets/Images/Ems-Logo2.png'),
  Ezone: require('../assets/Images/ezone.png'),
  Ezone1: require('../assets/Images/ezone1.png'),
  Ezone2: require('../assets/Images/ezone2.png'),
  Fileicon: require('../assets/Images/file.png'),
  Homeicon: require('../assets/Images/home.png'),
  HomeShopingImage: require('../assets/Images/homeShopingImage.png'),
  HomeShopingImage1: require('../assets/Images/homeshopingimage1.png'),
  HomeSimage: require('../assets/Images/homesImages.png'),
  HomeShopingImage2: require('../assets/Images/homeshopping.png'),

  POCDSlogo: require('../assets/Images/pocds.png'),
  POCDSMap: require('../assets/Images/pcds.jpg'),
  PBDSlogo: require('../assets/Images/pbds.png'),

  ProfileImage:require('../assets/Images/ProfileImage.png'),
  // loading:require('../assets/Images/loading.gif'),
  // logoGliston:require('../assets/Images/logoGliston.png'),
  logoHS:require('../assets/Images/logo.png'),
  logoBg:require('../assets/Images/logo2.png'),
  
  
  //src/assets/Images/SideMenuIcons/homeM.png
  homeM:require('../assets/Images/SideMenuIcons/homeM.png'),
  HSServiceIcon:require('../assets/Images/SideMenuIcons/HSServiceIcon.png'),
  ContactUsIcon:require('../assets/Images/SideMenuIcons/ContactUsIcon.png'),
  CPIcon:require('../assets/Images/SideMenuIcons/CPIcon.png'),
  HSDepositeIcon:require('../assets/Images/SideMenuIcons/HSDepositeIcon.png'),
  HSPSinvoiveicon:require('../assets/Images/SideMenuIcons/HSPSinvoiveicon.png'),
  UserProfileIcon:require('../assets/Images/SideMenuIcons/UserProfileIcon.png'),
  ProfileIcon:require('../assets/Images/SideMenuIcons/ProfileIcon.png'),
  POCDSServiceicon:require('../assets/Images/SideMenuIcons/POCDSServiceicon.png'),
  MiscServiceIcon:require('../assets/Images/SideMenuIcons/MiscServiceIcon.png'),
  LogutIcon:require('../assets/Images/SideMenuIcons/LogutIcon.png'),
  
  AccountDetailsicon:require('../assets/Images/SideMenuIcons/AccountDetailsicon.png'),
  EZPaymnticon:require('../assets/Images/SideMenuIcons/EZPaymnticon.png'),
  postofficeicon:require('../assets/Images/SideMenuIcons/postofficeicon.png'),
  HSPSicon:require('../assets/Images/SideMenuIcons/HSPSicon.png'),
  PrintrICON:require('../assets/Images/printer.png'),
  EDITICON:require('../assets/Images/printer.png'),
  HISTORYICON:require('../assets/Images/printer.png'),

  EditReport:require('../assets/Images/EditReport.png'),
  HistoryReport:require('../assets/Images/HistoryReport.png'),
  PrintReport:require('../assets/Images/PrintReport.png'),

  receptionist_icon7:require('../assets/Images/receptionist_icon7.png'),
  Wallet_icon6:require('../assets/Images/Wallet_icon6.png'),
  user_icon3:require('../assets/Images/user_icon3.png'),
  Cal_icon1:require('../assets/Images/Cal_icon1.png'),
  cod_icon2:require('../assets/Images/cod_icon2.png'),
  Doc_icon5:require('../assets/Images/Doc_icon5.png'),
  Parcel_icon4:require('../assets/Images/Parcel_icon4.png'),
  profit_icon8:require('../assets/Images/profit_icon8.png'),



  
  // RefferalCode:require('../assets/Images/Reffercode.png'),
  // FST:require('../assets/Images/IstImage.png'),
  // SND:require('../assets/Images/ScdImages.png'),
  // THIRD:require('../assets/Images/3rdImage.png'),
  // FORTH:require('../assets/Images/forthImage.png'),
  // CODE:require('../assets/Images/CODE.png'),
  // NOChat:require('../assets/Images/nochat.png'),
  // REFERCODE:require('../assets/Images/REFERCODE.png'),

  // NOADD:require('../assets/Images/Noad.png'),

//src/assets/Images/Addblock.pngsrc/assets/Images/Reffercode.png
};


export const FORMATTIMEAMPM = (timestamp) => {
  const parsedDate = new Date(timestamp);
  const hours = parsedDate.getHours();
  const minutes = parsedDate.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

export const NAMETOIMAGE = ({ name, profilePicture }) => {

  if (profilePicture) {
    return (
      <Image
        source={{ uri: profilePicture }}
        style={{ width: 50, height: 50, borderRadius: 25 }}
      />
    );
  }
  const initials = name
    .split(' ')
    .map(part => part.charAt(0))
    .join('');

  return (
    <View
      style={{
        width: 50,
        height: 50,
        backgroundColor: COLORS.Greyscale,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: FONTFAMILY.Medium,
          color: 'black',
          fontSize: rf(2.5),
        }}>
        {initials}
      </Text>
    </View>
  );
};

/* * Screens * */
export const SCREENS = {
  // SplashScreen:'SplashScreen',
  // SplashScreencopy:'SplashScreencopy',

  // DrawerNavigation: 'DrawerNavigation',
  // TabNavigation: 'TabNavigation',

  /* * Auth Screen  * */

  WelcomScreen: 'WelcomScreen',
  LoginScreen: 'LoginScreen',
  SelectServices : 'SelectServices',
 HomeShopIntroduction : 'HomeShopIntroduction',
 EzoneIntroduction :'EzoneIntroduction',
 POCDSIntroduction:'POCDSIntroduction',
 RentalBoxIntroduction:'RentalBoxIntroduction',
 PBDSIntroduction:'PBDSIntroduction',
 HomeShopIntroductionSecond:'HomeShopIntroductionSecond',
 EzonIntroductionSecond:'EzonIntroductionSecond',
 RentalBoxIntroductionSecond:'RentalBoxIntroductionSecond',
 POCDSIntroductionSecond:'POCDSIntroductionSecond',
 EMSIntroduction:'EMSIntroduction',
 HomeShopAccountDetails1:'HomeShopAccountDetails1',
 HomeShopAccountDetails2:'HomeShopAccountDetails2',
 HomeShopAccountDetailsFinal:'HomeShopAccountDetailsFinal',
 RentalBoxAccountDetails1:'RentalBoxAccountDetails1',
 PBDSAccountDetails1:'PBDSAccountDetails1',
 POCDSAccountDetails1:'POCDSAccountDetails1',
 POCDSAccountDetailsFinal:'POCDSAccountDetailsFinal',
 EMSIntroductionSecond:'EMSIntroductionSecond',
 HSAccountDetail:'HSAccountDetail',
 PBDSIntroductionSecond:'PBDSIntroductionSecond',

 
  /* * After Login Screen  * */


 DashBoard:'DashBoard',
 SideMenu:'SideMenu',

   /* * Payments Screen  * */

   ParcelSubscriptionpayment:'ParcelSubscriptionpayment',
 Depositepayment:'Depositepayment',
 PostOfficeBox:'PostOfficeBox',
 MiscPayments:'MiscPayments',

 EZonepayment:'EZonepayment',
 POCDSPayments:'POCDSPayments',
 PaymentGatwayScreen:'PaymentGatwayScreen',
 CartValueScreen:'CartValueScreen',



 Userprofile:'Userprofile',
 ChangePassword:'ChangePassword',
 ThankYouScreen:'ThankYouScreen',

};

export const API_URL = {
  /** Auth  */
  SIGNUP: 'auth/signup',
  LOGIN: 'auth/login',
  Userupdate: 'user/update',
  UserPicupdate: 'user/uploadimage',
  Usershowmobile: 'user/showmobile?',
  LOGOUT: 'auth/logout',
  APPLE_Login: 'auth/apple/login',
  DELETEUSER: 'user/account/delete',
USERDETAIL : 'user/',
  FORGOTPWD: 'user/forgotpassword',
  VERIFYOTP: 'user/verify',
  RESETPASSWORD: 'user/resetpassword',
  Viewrelatedadds: 'product/post/related?productId=',
  CHANGEPASSWORD: 'user/changepassword',

  /** Category */
  CATEGORY_ALL: 'category/subcategory',
  CATEGORY_PRODUCT: 'product/post/all/category/test',

  //CATEGORY_PRODUCT: 'product/post/all/category?',
  DYNAMIC_CATEGORYDATA: 'master/post/category/',
  PRODUCT_viewall: 'product/viewall?',
  CATEGORY_getrecommendations: 'product/getrecommendations/',


  
  PRODUCT_POSTADD: 'product/postad',
  PRODUCT_MYPOST: 'product/post/all/user/',
  PRODUCT_MYFAVPOST: 'product/wishlist',
  PRODUCT_Like: 'product/like?',
  PRODUCT_STATUS: 'product/setstatus?',
  SITENAV: 'site-nav/getall',
  COUNTRY_mycountrylist: 'api/location/mycountrylist',
  CHATLISTMEMBERS: 'users/summaries-with-messages',
  CHATLISTMEMBERSBUY: 'users/buy/summaries-with-messages',
  CHATLISTMEMBERSSELL: 'users/sell/summaries-with-messages',
  //CHATLISTMEMBERS: 'users/summaries',
  CHATMESSAGES: 'messages/test/',
    ADMINCHATMESSAGES: 'messages/',
    ADMINDETAILS: 'support/chat',

  CHATDELETE: 'chats/',
  // SENDOTP: 'user/sendotp?mobileNumber=',
  SENDOTP: 'user/sendotp/token?mobileNumber=',
  VERIFYMOBILEOTP: 'user/verify/mobile/otp/token?',
  SENDOTP1: 'product/sendotp/token?mobileNumber=',
  VERIFYMOBILEOTP1: 'product/verify/mobile/otp/token?',
//token
  STATEMENT: 'user/statement',
  PRICE_SUMMARY: 'product/price/summary?',
  STATELIST: 'api/location/state/',
  COUPONCHECK: 'coupon/check?',
  SAVEORDER: 'api/save/order/new',
  SAVEsubscription: 'subscription/topup',
  PRODUCTREPORT: 'product/report',
  USERREPORT: 'user/report',
  BLOCKUSER: 'chat/block',

//http://62.171.153.83:8080/carib-bargains-api/messages/70/80

};
export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: wp('3%'),
  },
  containerchat: {
    flex: 1,
    backgroundColor: COLORS.white,
    // paddingHorizontal: wp('3%'),
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  line: {
    height: 1,
    backgroundColor: COLORS.veryLightPink,
    width: '100%',
    marginVertical: hp('1%'),
  },
});

/* * SIZES * */
export const SIZES = {
  PaddingHorizontal: wp('3%'),
};
/* * Api Path * */
export const CONSTANTS = {
  UserData:'UserData',
  Fcmtoken: 'Fcmtoken',
  AccessToken: 'AccessToken',
  ShowMobile: 'ShowMobile',
  ShowNotification: 'ShowNotification',
  ShowRecommNotification: 'ShowRecommNotification',
  ShowOffersNotification: 'ShowOffersNotification',

};
