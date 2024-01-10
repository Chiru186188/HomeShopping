import React, {useEffect, useRef} from 'react';
import {COLORS, CONSTANTS, FONTFAMILY, SCREENS} from '../constants/them';
import {responsiveFontSize as rf} from '../common/responsiveFunction';
import WelcomScreen from '../screens/AuthScreens/WelcomeScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';

import SelectServices from '../screens/AuthScreens/SelectServices';
import HomeShopIntroduction from '../screens/AuthScreens/HomeShoppingSignUp/HomeShopIntroduction';
import EzoneIntroduction from '../screens/EZOne/EzoneIntroduction';
import POCDSIntroduction from '../screens/POCDS/POCDSIntroduction';
import RentalBoxIntroduction from '../screens/RentalBox/RentalBoxIntroduction';
import PBDSIntroduction from '../screens/PBDS/PBDSIntroduction';
import HomeShopIntroductionSecond from '../screens/AuthScreens/HomeShoppingSignUp/HomeShopIntroductionSecond';
import EzonIntroductionSecond from '../screens/EZOne/EzonIntroductionSecond';
import RentalBoxIntroductionSecond from '../screens/RentalBox/RentalBoxIntroductionSecond';
import POCDSIntroductionSecond from '../screens/POCDS/POCDSIntroductionSecond';
import EMSIntroduction from '../screens/EMS/EMSIntroduction';
import HomeShopAccountDetails1 from '../screens/AuthScreens/HomeShoppingSignUp/HomeShopAccountDetails1';
import HomeShopAccountDetails2 from '../screens/AuthScreens/HomeShoppingSignUp/HomeShopAccountDetails2';
import HomeShopAccountDetailsFinal from '../screens/AuthScreens/HomeShoppingSignUp/HomeShopAccountDetailsFinal';
import RentalBoxAccountDetails1 from '../screens/RentalBox/RentalBoxAccountDetails1';
import PBDSAccountDetails1 from '../screens/PBDS/PBDSAccountDetails1';
import POCDSAccountDetails1 from '../screens/POCDS/POCDSAccountDetails1';
import POCDSAccountDetailsFinal from '../screens/POCDS/POCDSAccountDetailsFinal';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EMSIntroductionSecond from '../screens/EMS/EMSIntroductionSecond';
import DashBoard from '../screens/SideMenuScrees/DashBoard';
import SideMenu from '../screens/SideMenuScrees/SideMenu';
import ParcelSubscriptionpayment from '../screens/SideMenuScrees/ParcelSubscriptionpayment';
import Depositepayment from '../screens/SideMenuScrees/Depositepayment';
import PostOfficeBox from '../screens/SideMenuScrees/PostOfficeBox';
import MiscPayments from '../screens/SideMenuScrees/MiscPayments';
import EZonepayment from '../screens/SideMenuScrees/EZonepayment';
import POCDSPayments from '../screens/SideMenuScrees/POCDSPayments';
import PaymentGatwayScreen from '../screens/SideMenuScrees/PaymentGatwayScreen.js/PaymentGatwayScreen';
import Userprofile from '../screens/SideMenuScrees/ProfileScreen/Userprofile';
import ChangePassword from '../screens/SideMenuScrees/ProfileScreen/ChnagePassword';
import ThankYouScreen from '../screens/SideMenuScrees/ProfileScreen/ThankYouScreen';
import HSAccountDetail from '../screens/AuthScreens/HomeShoppingSignUp/HSAccountDetail';
import PBDSIntroductionSecond from '../screens/PBDS/PBDSIntroductionSecond';
import CartValueScreen from '../screens/SideMenuScrees/CartValueScreen';
import SelectedServices from '../screens/AuthScreens/SelectedServices';
import ForgotPwd from '../screens/AuthScreens/ForgotPwd';
import VerificationScreen from '../screens/AuthScreens/VerificationScreen';
import CreatePassword from '../screens/AuthScreens/CreatePassword';
import PaymentGatwayScreenNew from '../screens/SideMenuScrees/PaymentGatwayScreen.js/PaymentGatwayScreenNew';
import RegistrationPage from '../screens/AuthScreens/HomeShoppingSignUp/RegistrationPage';
import SelectServicesSubscription from '../screens/AuthScreens/SelectServicesSubscription';
import LinkOpenScreen from '../screens/SideMenuScrees/LinkOpenScreen';
import ReportLinkOpenScreen from '../screens/SideMenuScrees/ReportLinkOpenScreen';
import EZAccountDetail from '../screens/AuthScreens/HomeShoppingSignUp/EZAccountDetail';
import RentalBoxAccountDetail from '../screens/AuthScreens/HomeShoppingSignUp/RentalBoxAccountDetail';
import POCDSAccountDetail from '../screens/AuthScreens/HomeShoppingSignUp/POCDSAccountDetail';
import PBDSAccountDetail from '../screens/AuthScreens/HomeShoppingSignUp/PBDSAccountDetail';
import PDFViewer from '../screens/SideMenuScrees/PDFViewer';
import AccountTransactionHistoryDetails from '../screens/AuthScreens/HomeShoppingSignUp/AccountTransactionHistoryDetails';
import AccountSummary from '../screens/AuthScreens/HomeShoppingSignUp/AccountSummary';
import HSInvoiceUplaodpackages from '../screens/SideMenuScrees/HSInvoiceUplaodpackages';
import ContactUs from '../screens/AuthScreens/ContactUs';

const Stack = createStackNavigator();

function MainNavigation() {
  const ref = useRef()

React.useEffect(() => {

 }, []);

  return (

      <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.WelcomScreen}>
      <Stack.Screen name={SCREENS.WelcomScreen} component={WelcomScreen} options={{headerShown: false}}/>
      <Stack.Screen name={SCREENS.HSAccountDetail} component={HSAccountDetail} options={{headerShown: false}}/>
      <Stack.Screen name={SCREENS.PBDSIntroductionSecond} component={PBDSIntroductionSecond} options={{headerShown: false}}/>
      <Stack.Screen name={SCREENS.CartValueScreen} component={CartValueScreen} options={{headerShown: false}}/>
      <Stack.Screen name={SCREENS.SelectedServices} component={SelectedServices} options={{headerShown: false}}/>
        <Stack.Screen name={SCREENS.LoginScreen} component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS.HomeShopIntroduction} component={HomeShopIntroduction} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS.HomeShopAccountDetails1} component={HomeShopAccountDetails1} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS.HomeShopAccountDetails2} component={HomeShopAccountDetails2} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS.HomeShopAccountDetailsFinal} component={HomeShopAccountDetailsFinal} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS.HomeShopIntroductionSecond} component={HomeShopIntroductionSecond} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS.SelectServices} component={SelectServices} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS.EMSIntroduction} component={EMSIntroduction} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS.EMSIntroductionSecond} component={EMSIntroductionSecond} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS.EzoneIntroduction} component={EzoneIntroduction} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS.EzonIntroductionSecond} component={EzonIntroductionSecond} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS.PBDSIntroduction} component={PBDSIntroduction} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS.PBDSAccountDetails1} component={PBDSAccountDetails1} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS.POCDSIntroduction} component={POCDSIntroduction} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS.POCDSIntroductionSecond} component={POCDSIntroductionSecond} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS.POCDSAccountDetails1} component={POCDSAccountDetails1} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS.POCDSAccountDetailsFinal} component={POCDSAccountDetailsFinal} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS.RentalBoxIntroduction} component={RentalBoxIntroduction} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS.RentalBoxIntroductionSecond} component={RentalBoxIntroductionSecond} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS.RentalBoxAccountDetails1} component={RentalBoxAccountDetails1} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS.DashBoard} component={DashBoard} options={{headerShown: false,gestureEnabled:false}} />
        <Stack.Screen name={SCREENS.SideMenu} component={SideMenu} options={{headerShown: false,gestureEnabled:false}} />
        <Stack.Screen name={SCREENS.ParcelSubscriptionpayment} component={ParcelSubscriptionpayment} options={{headerShown: false,gestureEnabled:false}} />
        <Stack.Screen name={SCREENS.Depositepayment} component={Depositepayment} options={{headerShown: false,gestureEnabled:false}} />
        <Stack.Screen name={SCREENS.PostOfficeBox} component={PostOfficeBox} options={{headerShown: false,gestureEnabled:false}} />
        <Stack.Screen name={SCREENS.MiscPayments} component={MiscPayments} options={{headerShown: false,gestureEnabled:false}} />
        <Stack.Screen name={SCREENS.EZonepayment} component={EZonepayment} options={{headerShown: false,gestureEnabled:false}} />
        <Stack.Screen name={SCREENS.POCDSPayments} component={POCDSPayments} options={{headerShown: false,gestureEnabled:false}} />
        <Stack.Screen name={SCREENS.PaymentGatwayScreen} component={PaymentGatwayScreen} options={{headerShown: false,gestureEnabled:false}} />
        <Stack.Screen name={SCREENS.Userprofile} component={Userprofile} options={{headerShown: false,gestureEnabled:false}} />
        <Stack.Screen name={SCREENS.ChangePassword} component={ChangePassword} options={{headerShown: false,gestureEnabled:false}} />
        <Stack.Screen name={SCREENS.ThankYouScreen} component={ThankYouScreen} options={{headerShown: false,gestureEnabled:false}} />
        <Stack.Screen name={SCREENS.ForgotPwd} component={ForgotPwd} options={{headerShown: false,gestureEnabled:false}} />
        <Stack.Screen name={SCREENS.VerificationScreen} component={VerificationScreen} options={{headerShown: false,gestureEnabled:false}} />
        <Stack.Screen name={SCREENS.CreatePassword} component={CreatePassword} options={{headerShown: false,gestureEnabled:false}} />
        <Stack.Screen name={SCREENS.PaymentGatwayScreenNew} component={PaymentGatwayScreenNew} options={{headerShown: false,gestureEnabled:false}} />
        <Stack.Screen name={SCREENS.RegistrationPage} component={RegistrationPage} options={{headerShown: false,gestureEnabled:false}} />
        <Stack.Screen name={SCREENS.SelectServicesSubscription} component={SelectServicesSubscription} options={{headerShown: false,gestureEnabled:false}} />
        <Stack.Screen name={SCREENS.LinkOpenScreen} component={LinkOpenScreen} options={{headerShown: false,gestureEnabled:false}} />
        <Stack.Screen name={SCREENS.ReportLinkOpenScreen} component={ReportLinkOpenScreen} options={{headerShown: false}}/>
        <Stack.Screen name={SCREENS.EZAccountDetail} component={EZAccountDetail} options={{headerShown: false}}/>
        <Stack.Screen name={SCREENS.RentalBoxAccountDetail} component={RentalBoxAccountDetail} options={{headerShown: false}}/>
        <Stack.Screen name={SCREENS.POCDSAccountDetail} component={POCDSAccountDetail} options={{headerShown: false}}/>
        <Stack.Screen name={SCREENS.PBDSAccountDetail} component={PBDSAccountDetail} options={{headerShown: false}}/>
        <Stack.Screen name={SCREENS.PDFViewer} component={PDFViewer} options={{headerShown: false}}/>
        <Stack.Screen name={SCREENS.AccountTransactionHistoryDetails} component={AccountTransactionHistoryDetails} options={{headerShown: false}}/>
        <Stack.Screen name={SCREENS.AccountSummary} component={AccountSummary} options={{headerShown: false}}/>
        <Stack.Screen name={SCREENS.HSInvoiceUplaodpackages} component={HSInvoiceUplaodpackages} options={{headerShown: false}}/>
        <Stack.Screen name={SCREENS.ContactUs} component={ContactUs} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
