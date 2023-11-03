import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
// import FontAwesome5Pro from '@expo/vector-icons/FontAwesome5Pro';
import Fontisto from '@expo/vector-icons/Fontisto';
import Foundation from '@expo/vector-icons/Foundation';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Zocial from '@expo/vector-icons/Zocial';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const Icon = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  // FontAwesome5Pro,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
  MaterialIcons,
};

export default function Icons({Type, name, size, color, style}) {
  return <Type name={name} size={size} color={color} style={style} />;
}

const styles = StyleSheet.create({});
