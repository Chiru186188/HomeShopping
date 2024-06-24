import React, {memo, useEffect} from 'react';
import {StyleSheet, View, Image, Modal, ImageBackground} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import Animated, {
  useSharedValue,
  withTiming,
  runOnJS,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../common/responsiveFunction';
import {COLORS, IMAGES, SCREENS} from '../constants/them';
import { getAllCategorySlice, getAllCountrySlice } from '../redux/slice/categories';
import useRedux from './useRedux';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function SplashScreen({navigation}) {
  const {dispatch} = useRedux();

  const getAllCountry = async () => {
    let data = {
      iSortingCols:3,
      iDisplayStart:0,
      iDisplayLength:250
  };
    dispatch(getAllCountrySlice(data))
      .unwrap()
      .then(res => {
        //
        //  console.log("resCountry",res)
      
      })
      .catch(e => {

        // console.log("",e)
 
      
          // setcount(count+1)
      });
  };


  useEffect(() => {
    getAllCountry()
  }, []);
  return (
   
    <ImageBackground
      source={IMAGES.BGimage}
      style={styles.container}
    >
      <View style={styles.animationContainer}>
        <Image
          source={IMAGES.logoHS}
         style={[styles.logo]}
    resizeMode={'contain'}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animationContainer: {
    borderRadius:wp('90%'),
    width: wp('90%'),
    height: wp('90%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 150,
position:'absolute'
  },
});
