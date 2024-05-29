import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {launchCamera} from 'react-native-image-picker';
import {COLORS, FONTFAMILY, SCREENS} from '../constants/them';
import Icons, {Icon} from '../componanat/Icons';
import Home from '../screens/BottomTabScreens/Home';
import {useFocusEffect, useNavigation, useRoute} from '@react-navigation/native';
import TouchableNativeFeedback from '../componanat/TouchableNativeFeedback';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import {BackHandler, Text, useWindowDimensions} from 'react-native';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import TopTabs from './TopTabNavigator';
import MyAdds from '../screens/BottomTabScreens/MyAdds';
import MyPosts from '../screens/Post/MyPosts';
import AllChats from '../screens/TopTabScreens/AllChats';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const Tab = createBottomTabNavigator();
function TabNavigation() {
  const navigation = useNavigation();
  const [navigatedFromLogin, setNavigatedFromLogin] = useState(false);
  const { width } = useWindowDimensions();
  const [count, setcount] = useState(0);

const isTablet = width >= 768; 
  useFocusEffect(
    React.useCallback(() => {
      
      connect()
      const unsubscribe = navigation.addListener('beforeRemove', (e) => {
       
        const originalString = e.target;
        const arrayOfSubstrings = originalString.split('-');
        if (e.data.action.type === 'NAVIGATE' && arrayOfSubstrings[0]=== 'TabNavigation') {
          setNavigatedFromLogin(true);
        }
        if (e.data.action.type === 'GO_BACK' && arrayOfSubstrings[0]=== 'TabNavigation') {

        if (Platform.OS === 'android') {
          if (!handleBackGesture()) {
            e.preventDefault();
          }
        }
      }

      if (e.data.action.type === 'POP' && arrayOfSubstrings[0]=== 'TabNavigation') {
        if (Platform.OS === 'ios') {
          if (!handleBackGesture()) {
            e.preventDefault();
          }
        }
      }
      });

      const navigateToFirstTab = () => {
        navigation.navigate(SCREENS.Home); // Navigate to the first tab (Home)
      };
      const handleBackGesture = () => {
        return false;
      };
      if (navigatedFromLogin) {
        navigateToFirstTab();
        setNavigatedFromLogin(false);
      }      
    }, [navigation, navigatedFromLogin])
  );

  const userData = useSelector(state => state.auth.userData);

  const connect = () => {
    const Stomp = require("stompjs");
    var SockJS = require("sockjs-client");
    SockJS = new SockJS("https://api.caribbargains.com/ws");

    stompClient = Stomp.over(SockJS);
    stompClient.connect({}, onConnected, onError);
  };
  const onConnected = () => {

    console.log("connected");
   
    stompClient.subscribe(
      "/user/" + userData?.sub + "/queue/messages",
      onMessageReceived
    );
  };

  const onError = (error) => {
    console.log('Error:', error);
  };
  const onMessageReceived = (msg) => {
   
    const message = JSON.parse(msg.body);
    setcount(count+1)

    // if (message.senderId != userData.sub){
    // }
    console.log(message)
    console.log("countttttt",count)

  };
  return (
    <Tab.Navigator
    initialRouteName={SCREENS.Home}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          height: hp('10%'),
        },
      }}>

      <Tab.Screen
        name={SCREENS.Home}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomIcons
              isFocused={focused}
              icon={Icon.MaterialCommunityIcons}
              name={focused ? 'home-minus' : 'home-minus-outline'}
              isTablet={isTablet} 
            />
          ),
          tabBarLabel: ({focused, color}) => (
            <CustomText isFocused={focused} label={'Home'} isTablet={isTablet}/>
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.Messages}
        component={TopTabs}
        options={{
          headerShown: true,
          tabBarIcon: ({focused}) => (
            <CustomIcons
              isFocused={focused}
              icon={Icon.Ionicons}
              name={
                focused ? 'ios-chatbubbles-sharp' : 'ios-chatbubbles-outline'
              }
              isTablet={isTablet} 
            />
          ),
          tabBarLabel: ({focused, color}) => (
            <CustomText isFocused={focused} label={'Messages'}  isTablet={isTablet}/>
          ),
          
        }}
      />
      <Tab.Screen
        name={SCREENS.MyPosts2}
        component={MyPosts}
        initialParams={{ fromwhere: 'yes' }} // Pass the 'fromwhere' parameter here
        options={{
          headerShown: true,
          tabBarIcon: ({focused}) => (
            <CustomIcons
              isFocused={focused}
              icon={Icon.FontAwesome}
              name={focused ? 'buysellads' : 'buysellads'}
              isTablet={isTablet} 
            />
          ),
          tabBarLabel: ({focused, color}) => (
            <CustomText isFocused={focused} label={'My Ads'} isTablet={isTablet} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.Profile}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomIcons
              isFocused={focused}
              icon={Icon.FontAwesome}
              name={focused ? 'user' : 'user-o'}
              isTablet={isTablet} 
            />
          ),
          tabBarLabel: ({focused, color}) => (
            <CustomText isFocused={focused} label={'Profile'} isTablet={isTablet} />
          ),
         
        }}
      />
    </Tab.Navigator>
  );
}
const CustomText = ({isFocused, label,isTablet}) => {
  return (
    <Text
      style={[
        {
          fontSize: rf(1.5),
          color: COLORS.white,
          marginVertical: isTablet ?  0: hp('0.5%'),
          fontFamily: isFocused ? FONTFAMILY.Bold : FONTFAMILY.Light,
          marginLeft : isTablet ? 25 : 0,
          marginTop : isTablet ? 8 : 0

        },
      ]}>
      {label}
    </Text>
  );
};
const CustomIcons = ({icon, isFocused, name,isTablet}) => {
  return (
    <Icons
      name={name}
      Type={icon}
      size={isTablet ?  rf(1.4) : rf(3)}
      color={isFocused ? COLORS.white : COLORS.white}
    />
  );
};
export default TabNavigation;
