import React, {useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icons, { Icon } from './Icons';
import {
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import { COLORS, FONTFAMILY } from '../constants/them';
export default function CheckboxList({ options, onSelectionChange }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleToggleSelection = (item) => {
    const updatedSelection = [...selectedItems];
    if (updatedSelection.includes(item)) {
      // Item is already selected, remove it
      const index = updatedSelection.indexOf(item);
      updatedSelection.splice(index, 1);
    } else {
      // Item is not selected, add it
      updatedSelection.push(item);
    }
    setSelectedItems(updatedSelection);
    onSelectionChange(updatedSelection);
  };
  useEffect(() => {
    onSelectionChange(selectedItems);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <View>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.checkboxItem,
            //selectedItems.includes(item) ? styles.selectedItem : null,
          ]}
          onPress={() => handleToggleSelection(item)}
        >

<Icons
              name={selectedItems.includes(item) ? 'checkbox-active' : 'checkbox-passive'}
              style={styles.icon}
              Type={Icon.Fontisto}//
              size={rf(2.8)}
            />

          <Text style={styles.checkboxText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    margin: 10,
  },
  selectedItem: {
    backgroundColor: '#4CAF50', // Background color for selected item
    borderColor: '#45a049', // Border color for selected item
  },
  checkboxText: {
    marginLeft: 10,
    color: COLORS.black,
    fontSize: rf(1.7),
    fontFamily: FONTFAMILY.Regular,
  },
});
