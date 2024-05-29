import { StatusBar } from 'expo-status-bar';
import { Alert, BackHandler, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WelcomScreen from './src/screens/AuthScreens/WelcomeScreen';
import LoginScreen from './src/screens/AuthScreens/LoginScreen';
import SelectServices from './src/screens/AuthScreens/SelectServices';
import HomeShopIntroduction from './src/screens/AuthScreens/HomeShoppingSignUp/HomeShopIntroduction';
import EzoneIntroduction from './src/screens/EZOne/EzoneIntroduction';
import POCDSIntroduction from './src/screens/POCDS/POCDSIntroduction';
import RentalBoxIntroduction from './src/screens/RentalBox/RentalBoxIntroduction';
import PBDSIntroduction from './src/screens/PBDS/PBDSIntroduction';
import HomeShopIntroductionSecond from './src/screens/AuthScreens/HomeShoppingSignUp/HomeShopIntroductionSecond';
import EzonIntroductionSecond from './src/screens/EZOne/EzonIntroductionSecond';
import RentalBoxIntroductionSecond from './src/screens/RentalBox/RentalBoxIntroductionSecond';
import POCDSIntroductionSecond from './src/screens/POCDS/POCDSIntroductionSecond';
import EMSIntroduction from './src/screens/EMS/EMSIntroduction';
import HomeShopAccountDetails1 from './src/screens/AuthScreens/HomeShoppingSignUp/HomeShopAccountDetails1';
import HomeShopAccountDetails2 from './src/screens/AuthScreens/HomeShoppingSignUp/HomeShopAccountDetails2';
import HomeShopAccountDetailsFinal from './src/screens/AuthScreens/HomeShoppingSignUp/HomeShopAccountDetailsFinal';
import RentalBoxAccountDetails1 from './src/screens/RentalBox/RentalBoxAccountDetails1';
import PBDSAccountDetails1 from './src/screens/PBDS/PBDSAccountDetails1';
import POCDSAccountDetails1 from './src/screens/POCDS/POCDSAccountDetails1';
import POCDSAccountDetailsFinal from './src/screens/POCDS/POCDSAccountDetailsFinal';
import MainNavigation from './src/navigations';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS, FONTFAMILY, SCREENS } from './src/constants/them';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from './src/common/responsiveFunction';
import LogoLoader from './src/components/LogoLoader';
import { useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import * as Notifications from 'expo-notifications';

export default function App() {
  
  const Stack = createStackNavigator();




  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
      return true;
    } else {
      console.log("Permission not granted");
      return false;
    }
  };

  const firebaseConfig = {
    apiKey: "AIzaSyCguaeeNLhzYRxsLU0hsFaYKN01VpruTIs",
    authDomain: "homeshopping-ab263.firebaseapp.com",
    databaseURL: "https://homeshopping-ab263.firebaseio.com",
    projectId: "homeshopping-ab263",
    storageBucket: "homeshopping-ab263.appspot.com",
    messagingSenderId: "659819777868",
    appId: "1:659819777868:web:06d026dadd688efee9c9e9",
    measurementId: "G-C290P02RFK"
  };

const Firebase= () => {
  if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
  } else {
  firebase.app();
  }
};
  

  useEffect(() => {
    Firebase()
    const setupNotifications = async () => {
      const permissionGranted = await requestUserPermission();
      if (permissionGranted) {
        const token = await messaging().getToken();
        console.log("FCM Token:", token);
      }

      // Set up notification handler
      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: false,
        }),
      });

      // Handle user clicking on a notification
      const handleNotificationClick = (response) => {
        const screen = response?.notification?.request?.content?.data?.screen;
        if (screen) {
          navigation.navigate(screen);
        }
      };

      const notificationClickSubscription = Notifications.addNotificationResponseReceivedListener(
        handleNotificationClick
      );

      // Handle background notifications
      messaging().onNotificationOpenedApp((remoteMessage) => {
        const screen = remoteMessage?.data?.screen;
        if (screen) {
          navigation.navigate(screen);
        }
      });

      // Handle notifications that opened the app from a quit state
      const initialNotification = await messaging().getInitialNotification();
      if (initialNotification) {
        const screen = initialNotification?.data?.screen;
        if (screen) {
          navigation.navigate(screen);
        }
      }

      // Background message handler
      messaging().setBackgroundMessageHandler(async (remoteMessage) => {
        const notification = {
          title: remoteMessage.notification.title,
          body: remoteMessage.notification.body,
          data: remoteMessage.data,
        };
        await Notifications.scheduleNotificationAsync({
          content: notification,
          trigger: null,
        });
      });

      // Foreground message handler
      const handlePushNotification = async (remoteMessage) => {
        const notification = {
          title: remoteMessage.notification.title,
          body: remoteMessage.notification.body,
          data: remoteMessage.data,
        };
        await Notifications.scheduleNotificationAsync({
          content: notification,
          trigger: null,
        });
      };

      // Listen for foreground messages
      const unsubscribe = messaging().onMessage(handlePushNotification);

      // Clean up the event listeners
      return () => {
        unsubscribe();
        notificationClickSubscription.remove();
      };
    };

    setupNotifications();
  }, []);


  
  const toastConfig = {
    success: props => (
      <BaseToast
        {...props}
        text1Style={{
          color: COLORS.white,
          fontSize: rf(1.5),
          fontFamily: FONTFAMILY.Bold,
        }}
        text2Style={{
          color: COLORS.white,
          fontSize: rf(1.3),
          fontFamily: FONTFAMILY.SemiBold,
        }}
        style={{backgroundColor: COLORS.chatGreencolor ,width : wp('90%'),height:hp("8%")}}
        text2NumberOfLines={100}
        />
    ),
    error: props => (
      <ErrorToast
        {...props}
        text1Style={{
          color: COLORS.white,
          fontSize: rf(1.5),
          fontFamily: FONTFAMILY.Bold,
        }}
        text2Style={{
          color: COLORS.white,
          fontSize: rf(1.3),
          fontFamily: FONTFAMILY.SemiBold,
        }}
        style={{backgroundColor: COLORS.red ,width : wp('90%'),height:hp("10%")}}
        text2NumberOfLines = {100}
      />
    ),
  };



  const handleNetworkConnectivity = (state) => {
    if (!state.isConnected) {
     // Alert.alert('Network Error', 'Please connect to the internet.');

      Alert.alert(
        'Network Error',
        'Please connect to the internet and try again.',
        [
          {
            text: 'OK',
            onPress: () => {
              NetInfo.addEventListener(handleNetworkConnectivity);
            },
          },
        ],
      );
    }
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(handleNetworkConnectivity);

    return () => {
      unsubscribe();
    };
  }, []);


  return (
    // <View style={styles.container}>
    // <MainNavigation />
    //   <StatusBar style="auto" />
    // </View>
    // <SafeAreaView>
    <Provider store={store}>
    <MainNavigation />
    <Toast config={toastConfig} />
      <LogoLoader />

    </Provider>
  // </SafeAreaView>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName={SCREENS.WelcomScreen}>
    //   <Stack.Screen name={SCREENS.WelcomScreen} component={WelcomScreen} />

    //     <Stack.Screen name={SCREENS.LoginScreen} component={LoginScreen} />

    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
