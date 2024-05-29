import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icons, { Icon } from './Icons';
import {
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import { COLORS, FONTFAMILY } from '../constants/them';
export default function CheckboxListSingleSelected({ options, onSelectionChange, preselectedItem }) {

// export default function CheckboxListSingleSelected({ options, onSelectionChange }) {
  const [selectedItem, setSelectedItem] = useState(preselectedItem || null);

  const handleToggleSelection = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
    onSelectionChange(item === selectedItem ? null : [item]);
  };
  useEffect(() => {
    setSelectedItem(preselectedItem || null);
  }, [preselectedItem]);

  return (
    <View>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.checkboxItem,
           
          ]}
          onPress={() => handleToggleSelection(item)}
        >
          <Icons
            name={item === selectedItem ? 'checkbox-active' : 'checkbox-passive'}
            style={styles.icon}
            Type={Icon.Fontisto}
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
    alignSelf:'flex-start',
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
// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import Icons, { Icon } from './Icons';
// import {
//   widthPercentageToDP as wp,
//   responsiveFontSize as rf,
// } from '../common/responsiveFunction';
// import { COLORS, FONTFAMILY } from '../constants/them';

// export default function CheckboxListSingleSelected({ options, onSelectionChange, preselectedItem }) {
//   const [selectedItem, setSelectedItem] = useState(preselectedItem || null);

//   const handleToggleSelection = (item) => {
//     setSelectedItem(item === selectedItem ? null : item);
//     onSelectionChange(item === selectedItem ? null : [item]);
//   };

//   // Update selected item when the preselectedItem prop changes
//   useEffect(() => {
//     setSelectedItem(preselectedItem || null);
//   }, [preselectedItem]);

//   return (
//     <View>
//       {options.map((item, index) => (
//         <TouchableOpacity
//           key={index}
//           style={[
//             styles.checkboxItem,
//             item === selectedItem ? styles.selectedItem : null,
//           ]}
//           onPress={() => handleToggleSelection(item)}
//         >
//           <Icons
//             name={item === selectedItem ? 'checkbox-active' : 'checkbox-passive'}
//             style={styles.icon}
//             Type={Icon.Fontisto}
//             size={rf(2.8)}
//           />
//           <Text style={styles.checkboxText}>{item}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   checkboxItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     alignSelf: 'flex-start',
//     paddingHorizontal: 10,
//     margin: 10,
//   },
//   selectedItem: {
//     backgroundColor: '#4CAF50', // Background color for selected item
//     borderColor: '#45a049', // Border color for selected item
//   },
//   checkboxText: {
//     marginLeft: 10,
//     color: COLORS.black,
//     fontSize: rf(1.7),
//     fontFamily: FONTFAMILY.Regular,
//   },
// });
