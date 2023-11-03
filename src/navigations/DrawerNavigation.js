import { createDrawerNavigator} from '@react-navigation/drawer';
import Login from '../screens/Auth/WelcomScreen';
import TabNavigation from './TabNavigator';
import CustomButton from '../componanat/CustomButton';
import {COLORS, SCREENS} from '../constants/them';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import DrawerContentComponant from './DrawerContent';
import LoginPageScreen from '../screens/Auth/LoginPageScreen';
import SignUp from '../screens/Auth/SignUp';
import BackArrow from '../componanat/BackArrow';
import { BackHandler } from 'react-native';
import { useEffect } from 'react';

const Drawer = createDrawerNavigator();

function DrawerNavigation({navigation}) {
  
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        headerTitle: '',
        headerShadowVisible: false,

        headerRight: () => {
          return (
            <CustomButton
              title="Post Ad"
              style={{
                backgroundColor: COLORS.secondry,
                height: hp('4%'),
                marginRight: wp('3%'),
                paddingHorizontal: wp('4%'),
                borderWidth: 0,
              }}
              titleStyle={{color: COLORS.white, fontSize: rf(1.5)}}
              onPress={() => {
                navigation.navigate(SCREENS.Post);
              }}
            />
          );
        },
      }}
      drawerContent={props => <DrawerContentComponant  {...props} />}>
      <Drawer.Screen name={SCREENS.TabNavigation} component={TabNavigation} />
      {/* <Drawer.Screen
          name={SCREENS.Login}
          component={LoginPageScreen}
          options={{
            headerShown: true,
            headerTitle: '',
            headerShadowVisible: false,
            headerLeft: () => {
              return <BackArrow />;
            },
          }}
        /> */}
        {/* <Drawer.Screen
          name={SCREENS.SignUp}
          component={SignUp}
          options={{
            headerShown: true,
            headerTitle: '',
            headerShadowVisible: false,
            headerLeft: () => {
              return <BackArrow />;
            },
          }}
        />  */}
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
