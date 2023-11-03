import {
  ActivityIndicator,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import React, {memo, useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import {COLORS, FONTFAMILY, SCREENS, STYLES} from '../constants/them';
import {useNavigation} from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import CustomButton from '../componanat/CustomButton';
import {
  UserSvg,
  PaymentSvg,
  DealSvg,
  DiscountPremiumSvg,
  CartSvg,
  LocationSvg,
  DownloadSvg,
  MyAddSvg,
  HelpSvg,Wallet,FavoriteAds,AdsSvg
} from '../componanat/Svg';
import {useDispatch, useSelector} from 'react-redux';
import TouchableNativeFeedback from '../componanat/TouchableNativeFeedback';
import CustomCategorySelector from '../componanat/CustomCategorySelector';
import CustomButtonForrSideMenu from '../componanat/CustomButtonForrSideMenu';
export default function DrawerContentComponant({navigation}) {
  const scale = useSharedValue(0);
  const AllCategory = useSelector(state => state.category.AllCategries);
  const AllMenus = useSelector(state => state.category.sitenavList);

  const Svg = title => {
    switch (title) {
      case 'Login/Register':
        return <UserSvg />;
      case 'Order & Payment':
        return <PaymentSvg />;
      case 'Deals':
        return <DealSvg />;
      case 'Discount on Premium Ads':
        return <DiscountPremiumSvg width={24} height={24} />;
      case 'Cart':
        return <CartSvg width={24} height={24} />;
      case 'All India':
        return <LocationSvg width={24} height={24} />;
      case 'Download The App':
        return <DownloadSvg  width={24} height={24}/>;
        case 'My Ads':
        return <AdsSvg  width={24} height={24}/>;
        case 'My Favorite Ads':
          return <FavoriteAds width={24} height={24} />;
          case 'Wallet':
            return <Wallet width={24} height={24} />;
    }
  };
  const NavOption = ({title, onPress, iconPress}) => {
    return (
      <TouchableNativeFeedback
        style={styles.naveOptionContainer}
        onPress={onPress}>
        {Svg(title)}
        <Text style={[styles.txtnavTitle]}>{title}</Text>
      </TouchableNativeFeedback>
    );
  };
  return (
    <>
      <FlatList
        style={{paddingHorizontal: wp('3%'), backgroundColor: COLORS.white}}
        contentContainerStyle={{
          paddingBottom: hp('3%'),
        }}
        data={null}
        renderItem={null}
        ListHeaderComponent={() => {
          return (
            <View style={{marginTop: hp('2%')}}>
              {/* <BackArrow /> */}
              {/* <NavOption
                title="Login/Register"
                onPress={() => {
                  navigation.navigate(SCREENS.SignUp);
                }}
              /> */}
              <NavOption
                title="My Ads"
                onPress={() => {
                  navigation.navigate(SCREENS.MyPosts , {fromHome :'No'});
                }}
              />
                              <Text style={styles.txt4}>Ads posted by me</Text>
                              <View style={[STYLES.line, {marginTop: hp('2%')}]} />

                              <NavOption
                title="My Favorite Ads"
                onPress={() => {
                  navigation.navigate(SCREENS.MyfavoritePosts);
                }}
              />
                              <Text style={styles.txt4}>Ads liked by me</Text>
                              <View style={[STYLES.line, {marginTop: hp('2%')}]} />

                              <NavOption
                title="Wallet"
                onPress={() => {
                  navigation.navigate(SCREENS.WalletHistory);
                }}
              />
 <View style={[STYLES.line, {marginTop: hp('2%')}]} />

              <View style={{marginTop: hp('2%')}}>
                <Text style={styles.txt1}>CATEGORIES</Text>
                <View style={[{marginTop: hp('1%')}]} />

                <FlatList data={AllCategory.data} renderItem={renderItem} />
                <View style={[{marginTop: hp('2%')}]} />

                <Text style={styles.txt1}>OTHERS</Text>
              </View>
              {/* <NavOption
                title="Deals"
                onPress={() => {
                  navigation.navigate(SCREENS.Deals);
                }}
              />
              <View style={[STYLES.line, {marginTop: hp('0.5%')}]} />
              <NavOption
                title="Discount on Premium Ads"
                onPress={() => {
                  navigation.navigate(SCREENS.DiscountsonPremiumAds);
                }}
              />
              <View style={[STYLES.line, {marginTop: hp('0.5%')}]} />

              <NavOption
                title="Cart"
                onPress={() => {
                  navigation.navigate(SCREENS.YourCart);
                }}
              />
              <View style={[STYLES.line, {marginTop: hp('0.5%')}]} />

              <View style={STYLES.row}>
                <NavOption title="All India" />
                <TouchableNativeFeedback>
                  <Text
                    style={[
                      {
                        color: COLORS.primary,
                        fontSize: rf(1.2),
                        fontFamily: FONTFAMILY.Medium,
                      },
                    ]}>
                    Change
                  </Text>
                </TouchableNativeFeedback>
              </View>
              <View style={[STYLES.line, {marginTop: hp('0.5%')}]} />

              <NavOption title="Download The App" /> */}
                              <FlatList data={AllMenus.data} renderItem={renderItemmenus} />

            </View>
          );
        }}
      />
    </>
  );
}

const renderItem = ({item, index}) => {
  return (
    
    <>
      <CustomCategorySelector title={'Cars & Bikes'} drawer Allitem={item}/>
      <View style={[STYLES.line, {marginTop: hp('0.1%')}]} />

    </>
  );
};
const renderItemmenus = ({item, index}) => {
  const isLastItem = index === 0;

  return (
    <>
    
    {!isLastItem && <View style={[STYLES.line, { marginTop: hp('0.1%') }]} />}
      <CustomButtonForrSideMenu item={item}
      
      />
            

    </>
  );
};
// const ShowLogoutModal = memo(({isVisible, setShowLogoutModal, scale, item}) => {
//   const navigation = useNavigation();
//   const rStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{scale: scale.value}],
//     };
//   }, []);
//   return (
//     <Modal visible={isVisible} transparent={true}>
//       <TouchableWithoutFeedback
//         style={{flex: 1}}
//         onPress={() => {
//           scale.value = withTiming(0, {duration: 1000});
//           setTimeout(() => {
//             setShowLogoutModal(false);
//           }, 1000);
//         }}>
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <Animated.View
//             style={[
//               rStyle,
//               {
//                 width: wp('70%'),
//                 backgroundColor: COLORS.white,
//                 borderRadius: wp(3),
//                 overflow: 'hidden',
//               },
//             ]}>
//             <Text
//               style={[
//                 styles.txt1,
//                 {
//                   fontFamily: FONTFAMILY.Bold,
//                   fontSize: rf(2),
//                   color: COLORS.black,
//                   marginTop: hp('2%'),
//                   textAlign: 'center',
//                 },
//               ]}>
//               Are You Sure ?
//             </Text>
//             <Text
//               style={[
//                 styles.txt1,
//                 {
//                   fontFamily: FONTFAMILY.Bold,
//                   fontSize: rf(1.8),
//                   color: COLORS.black,
//                   textAlign: 'center',
//                   marginTop: hp('1%'),
//                 },
//               ]}>
//               Do you want to logout
//             </Text>
//             <View
//               style={[
//                 STYLES.row,
//                 {paddingHorizontal: wp('3%'), paddingVertical: hp('2%')},
//               ]}>
//               <CustomButton
//                 title={'Yes'}
//                 style={{width: wp('25%'), height: hp('6.5%')}}
//                 onPress={() => {
//                   navigation.navigate(SCREENS.SignIn);
//                 }}
//               />
//               <CustomButton
//                 title={'No'}
//                 style={{width: wp('25%'), height: hp('6.5%')}}
//                 onPress={() => {
//                   scale.value = withTiming(0, {duration: 1000});
//                   setTimeout(() => {
//                     setShowLogoutModal(false);
//                   }, 1000);
//                 }}
//               />
//             </View>
//           </Animated.View>
//         </View>
//       </TouchableWithoutFeedback>
//     </Modal>
//   );
// });
const styles = StyleSheet.create({
  image: {
    height: wp('30%'),
    width: wp('30%'),
    borderRadius: wp('30%'),
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 2,
    right: 5,
  },
  imageContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTitle: {
    color: COLORS.black,
    fontSize: rf(2),
    fontFamily: FONTFAMILY.Bold,
    alignSelf: 'center',
    marginRight: wp('1%'),
  },
  txtnavTitle: {
    color: COLORS.black,
    fontSize: rf(1.4),
    fontFamily: FONTFAMILY.SemiBold,
    alignSelf: 'center',
    marginStart: wp('2%'),
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt2: {
    color: COLORS.placeHolderColor,
    fontSize: rf(1.5),
    fontFamily: FONTFAMILY.Medium,
    textAlign: 'center',
  },
  txt1: {
    color: COLORS.placeHolderColor,
    fontSize: rf(1.5),
    fontFamily: FONTFAMILY.Medium,
  },
  txt3: {
    color: COLORS.placeHolderColor,
    fontSize: rf(1.5),
    fontFamily: FONTFAMILY.Medium,
    paddingHorizontal : 20
  },
  txt4: {
    color: COLORS.placeHolderColor,
    fontSize: rf(1.2),
    fontFamily: FONTFAMILY.Regular,
    paddingHorizontal : 32
  },
  naveOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  ScreenContainer: {
    paddingLeft: wp('2%'),
  },
  txtAccount: {
    color: COLORS.placeHolderColor,
    fontSize: rf(1.7),
    fontFamily: FONTFAMILY.SemiBold,
    marginTop: hp('3%'),
  },
  icon: {
    fontSize: rf(2.3),
    color: COLORS.Greyscale,
  },
});
