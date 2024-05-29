import {Platform, StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native';
import React, {memo} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,

  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import {COLORS, FONTFAMILY} from '../constants/them';
// import {Backiconsvg} from './Svg';
import Icons, {Icon} from './Icons';

import {useNavigation} from '@react-navigation/native';
// AddItem.js
import PropTypes from 'prop-types';

const AddButtonAndTextfeild = ({ onPress, text ,text1}) => {
  return (
   


<View style={styles.container}>
<View style={styles.textContainer2}>
  <Text style={styles.text}>{text1}</Text>
</View>

<View style={styles.textContainer}>
  <Text style={styles.text}>{text}</Text>
  <View style={styles.underline} />
</View>
<TouchableOpacity onPress={onPress} style={styles.addButton}>
  {/* You can replace 'plusIcon.png' with your image source */}
  <Icons
      name={'plus'}
      Type={Icon.FontAwesome5}
      size={rf(2.4)}
      color={COLORS.white}
    /></TouchableOpacity>
</View>

  );
};

AddButtonAndTextfeild.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal:10,
    paddingVertical:5,
    gap:10
  },
  addButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  textContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.Greyscale,
  },
  textContainer2: {
   
    backgroundColor: COLORS.Greyscale,
    paddingHorizontal:10,
    alignItems:'center',
    paddingTop:10
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
  },
  underline: {
    height: 0.6,
    backgroundColor: COLORS.Greyscale,
  },
});

export default AddButtonAndTextfeild;
