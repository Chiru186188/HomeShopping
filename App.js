import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
import { SCREENS } from './src/constants/them';

export default function App() {
  const Stack = createStackNavigator();

  return (
    // <View style={styles.container}>
    // <MainNavigation />
    //   <StatusBar style="auto" />
    // </View>
    <MainNavigation />
      
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
