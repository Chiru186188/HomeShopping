import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatPage from '../screens/ChatScreens/ChatPage';
import EditProfile from '../screens/Profile/EditProfile';
import {COLORS, FONTFAMILY} from '../constants/them';
import AllChats from '../screens/TopTabScreens/AllChats';
import SellingChats from '../screens/TopTabScreens/SellingChats';
import BuyingChats from '../screens/TopTabScreens/BuyingChats';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
  return (
    
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: FONTFAMILY.Medium,
          fontSize: rf(1.6),
          textTransform: 'none',
          color: COLORS.black,
        },
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.primary,
        },
        tabBarStyle: {
          backgroundColor: COLORS.white,
        },
      }}>
      <Tab.Screen name="ALL" component={AllChats} />
      <Tab.Screen name="Buying" component={BuyingChats} />
      <Tab.Screen name="Selling" component={SellingChats} />
    </Tab.Navigator>
  );
}
