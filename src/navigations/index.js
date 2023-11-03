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

const Stack = createStackNavigator();

function MainNavigation() {
  const ref = useRef()

React.useEffect(() => {
console.log("HIII")
 }, []);

  return (

      <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.WelcomScreen}>
      <Stack.Screen name={SCREENS.WelcomScreen} component={WelcomScreen} options={{headerShown: false}}/>
      <Stack.Screen name={SCREENS.HSAccountDetail} component={HSAccountDetail} options={{headerShown: false}}/>
      <Stack.Screen name={SCREENS.PBDSIntroductionSecond} component={PBDSIntroductionSecond} options={{headerShown: false}}/>
      <Stack.Screen name={SCREENS.CartValueScreen} component={CartValueScreen} options={{headerShown: false}}/>

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

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
