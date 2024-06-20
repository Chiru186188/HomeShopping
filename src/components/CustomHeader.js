import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,

  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import {COLORS, FONTFAMILY, IMAGES, SCREENS} from '../constants/them';
// import {Backiconsvg} from './Svg';
import Icons, {Icon} from './Icons';

import {useNavigation} from '@react-navigation/native';
import utills from '../utills';

const CustomHeader = ({onPress, title}) => {
  const navigation = useNavigation();
  // const Svg = () => {
  //   return <Backiconsvg />;
  // };
  return (
    <View style={styles.containerWithBorder}>

    <View style={styles.subContainer1}>
      <TouchableOpacity
        style={styles.container}
        onPress={
          () => 
        navigation.navigate(SCREENS.SideMenu)}
        >
        {/* <Svg /> */}

        <Icons
      name={'menu'}
      Type={Icon.Feather}
      size={rf(3.4)}
      color={COLORS.black}
    />
      </TouchableOpacity>
{/* <View style={styles.titleContainer}>

      <Image
            source={IMAGES.logoHS}
            style={{width: 70, height: 70}}
            resizeMode='contain'
          />

      <Text
      numberOfLines={2}
      ellipsizeMode='tail'
      style={styles.text1}>{title}</Text>
</View> */}
 <View style = {{flexDirection:'row',alignItems:'center',gap:10,flexShrink:1}}>
      <Image
            source={IMAGES.logoHS}
            style={{width: 70, height: 70}}
            resizeMode='contain'
          />
      <Text style={styles.text1}>{title}</Text>
      </View>
      <TouchableOpacity
        style={styles.container}
        onPress={
          () => 
       // navigation.goBack()
       utills.confirmMessageAlert("Under Development")
      }
        >

        <Icons
      name={'bell'}
      Type={Icon.Feather}
      size={rf(3.4)}
      color={COLORS.black}
    />
      </TouchableOpacity>


    </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('7%'),
    height: wp('7%'),
  },
  subContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    padding:20
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flexGrow: 1,
    flexShrink: 1,
  },
  text1: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: rf(2.0),
    color: COLORS.black,
    textAlign: 'center',
   // flexGrow: 1,
    flexShrink: 1,
  },

  containerWithBorder: {
    borderBottomWidth: 0.5, // Adjust the width as needed
    borderColor: COLORS.Greyscale, // Change the color as needed
  },
});

export default memo(CustomHeader);
