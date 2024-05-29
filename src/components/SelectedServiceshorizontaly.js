import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity,FlatList} from 'react-native';
import React from 'react';
import {COLORS, CONSTANTS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES} from '../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../common/responsiveFunction';

import { useEffect,useState } from 'react';
import utills from '../utills';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function SelectedServiceshorizontaly({
  selectedService,
  setSelectedService,
})
{  
 const [ServiceList, setServiceList] = useState([]);
 const [ServiceIconList, setServiceIconList] = useState([]);
 const [ServiceIdList, setServiceIdList] = useState([]);
  const userData = useSelector(state => state.auth.userData);
  const navigation = useNavigation()
  // const services = [
  //   'Home Shopping (ocean freight) service',
  //   'eZone (AIR) service',
  //   'Private Post Office Box Rental',
  //   'Private Bag Delivery Service',
  //   'Express Mail Service',
  //   'Post Office Clearance and Delivery Service',
  // ];
  // const servicesIcons = [
  //   IMAGES.HomeShopingImage2,
  //   IMAGES.Ezone1,
  //   IMAGES.HomeSimage,
  //   IMAGES.PBDSlogo,
  //   IMAGES.EmsLogo,
  //   IMAGES.POCDSlogo,
  // ];
  const handleServiceSelection =  async (service,index) => {
   

    // const id =  ServiceIdList[index]
    // navigation.replace(SCREENS.HSAccountDetail,{From:service,FromID:id});
//eZone (AIR) service
if (service === "Home Shopping (ocean freight) service"){
  navigation.navigate(SCREENS.HSAccountDetail);

}else if (service === "eZone (AIR) service"){
  navigation.navigate(SCREENS.EZAccountDetail);

}

else if (service === "Private Post Office Box Rental"){
  navigation.navigate(SCREENS.RentalBoxAccountDetail);
}
else if (service === "Post Office Clearance and Delivery Service"){
  navigation.navigate(SCREENS.POCDSAccountDetail);
}
else if (service === "Private Bag Delivery Service"){
  navigation.navigate(SCREENS.PBDSAccountDetail);
}
}
useEffect(() => {

// console.log("selectedService",selectedService)
 console.log("userData",userData?.services)
const nameArr = []
const iconArr = []
const idArr = []

if(userData?.services?.hsUserId != null){
  nameArr.push('Home Shopping (ocean freight) service')
  iconArr.push(IMAGES.HomeShopingImage2)
  idArr.push(userData?.services?.hsUserId)
  setSelectedService('Home Shopping (ocean freight) service');

}
 if(userData?.services?.ezUserId != null){
  nameArr.push('eZone (AIR) service')
  iconArr.push(IMAGES.Ezone1)
  idArr.push(userData?.services?.ezUserId)

}

 if(userData?.services?.ltbUserId != null){
  nameArr.push('Private Post Office Box Rental')
  iconArr.push(IMAGES.HomeSimage)
  idArr.push(userData?.services?.ltbUserId)

}
 if(userData?.services?.pbdsUserId != null){
  nameArr.push('Private Bag Delivery Service')
  iconArr.push(IMAGES.PBDSlogo)
  idArr.push(userData?.services?.pbdsUserId)


}
 if(userData?.services?.pocdsUserId != false){
  nameArr.push('Post Office Clearance and Delivery Service')
  iconArr.push(IMAGES.POCDSlogo)
  idArr.push(userData?.services?.pocdsUserId)




}


// console.log("ServiceList",nameArr)
// console.log("ServiceLisICont",iconArr)



setServiceList(nameArr)
setServiceIconList(iconArr)
setServiceIdList(idArr)
  return () => {
   
  };
}, []);

// const GoToNext = () => {
//   console.log(selectedService)
//   if (selectedService === "Home Shopping (ocean freight) service"){

//     navigation.navigate(SCREENS.HomeShopIntroduction)
//   } else if(selectedService === "eZone (AIR) service"){
//     navigation.navigate(SCREENS.EzoneIntroduction)

//   }
//   else if(selectedService === "Private Post Office Box Rental"){
//     navigation.navigate(SCREENS.RentalBoxIntroduction)

//   }
//   else if(selectedService === "Private Bag Delivery Service"){
//     navigation.navigate(SCREENS.PBDSIntroduction)

//   }
//   else if(selectedService === 'Express Mail Service'){
//     navigation.navigate(SCREENS.EMSIntroduction)

//   }
//   else if(selectedService === "Post Office Clearance and Delivery Service"){
//     navigation.navigate(SCREENS.POCDSIntroduction)

//   }

// };
// const handlePress = () => {
// };
  return (
    <View>
    <FlatList
    // horizontal
    data={ServiceList}
    keyExtractor={(item, index) => index.toString()}
    
    style={{marginHorizontal:10}}
    renderItem={({ item, index }) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.serviceItem,
          selectedService === item ? styles.selectedService : null,
        ]}
        onPress={() => handleServiceSelection(item,index)}
      >
        {/* <Image
          style={{ height: wp('20%'), width: wp('50%'), resizeMode: 'contain' }}
          source={ServiceIconList[index]}
        /> */}
        <Text style={styles.serviceText}>{item}</Text>
      </TouchableOpacity>
    )}
    contentContainerStyle={styles.serviceListContainer}
  />
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width : wp('94'),
    // justifyContent:'space-between',
    alignSelf:"center",
    backgroundColor :COLORS.white,
    margin:20,
    borderRadius : 15,
    padding:15,
    gap:20,
    paddingBottom:30
  },

  

 serviceItem: {
  padding: 12,
  width:wp('90'),
  backgroundColor: COLORS.lightGreySelection, // Default background color
  borderWidth: 1,
  borderColor: 'transparent', // Default border color (transparent)
  borderRadius : 20,
  alignItems:'center',
  margin:10,
  gap:10
},
selectedService: {
  backgroundColor: COLORS.lightBlueSelection, // Background color for selected item
  borderColor: COLORS.BlueSelectionBorder, // Border color for selected item
},
serviceText: {
  fontFamily: FONTFAMILY.Bold,
    fontSize: rf(1.8),
    color: COLORS.Content,
    textAlign:"center"
},
serviceText1: {
  fontFamily: FONTFAMILY.ExtraBold,
    fontSize: rf(2.0),
    color: COLORS.Content,
    marginLeft:5
},
});




