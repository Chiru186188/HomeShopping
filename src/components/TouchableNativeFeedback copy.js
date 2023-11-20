import {
    Platform,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
  } from 'react-native';
  
  import React, {memo} from 'react';
  
  const TouchableFeedback = ({onPress, style, children}) => {
    const TouchableComponent =
      Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return (
      <TouchableComponent onPress={onPress}>
        <View style={[styles.button, style]}>{children}</View>
      </TouchableComponent>
    );
  };
  
  const styles = StyleSheet.create({});
  export default memo(TouchableFeedback);
  