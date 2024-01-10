import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, CONSTANTS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES} from '../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';

import { useEffect,useState } from 'react';
import CustomBlueButton from '../../components/CustomBlueButton';
import GradientBackground from '../../components/GradientBackground';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import EditTextWithLable from '../../components/EditTextWithLable';
import Icons, { Icon } from '../../components/Icons';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderWithBackButtonAndNextButton from '../../components/HeaderWithBackButtonAndNextButton';
import utills from '../../utills';

export default function SelectServices({navigation}) {
  const [email, setemail] = useState('');
  const [pwd, setupwd] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const services = [
    'Home Shopping (ocean freight) service',
    'eZone (AIR) service',
    'Private Post Office Box Rental',
    'Private Bag Delivery Service',
    'Express Mail Service',
    'Post Office Clearance and Delivery Service',
  ];
  const servicesIcons = [
    IMAGES.HomeShopingImage2,
    IMAGES.Ezone1,
    IMAGES.HomeSimage,
    IMAGES.PBDSlogo,
    IMAGES.EmsLogo,
    IMAGES.POCDSlogo,
  ];
  const handleServiceSelection = (service) => {
    setSelectedService(service);
  };
useEffect(() => {

  return () => {
   
  };
}, []);

const GoToNext = () => {
  console.log(selectedService)

  if (utills.isEmptyOrSpaces(selectedService)) {
    console.log('value==33', selectedService);

    utills.errorAlert('', 'Please Select Service');
    return;
  }
  if (selectedService === "Home Shopping (ocean freight) service"){

    navigation.navigate(SCREENS.HomeShopIntroduction)
  } else if(selectedService === "eZone (AIR) service"){
    navigation.navigate(SCREENS.EzoneIntroduction)

  }
  else if(selectedService === "Private Post Office Box Rental"){
    navigation.navigate(SCREENS.RentalBoxIntroduction)

  }
  else if(selectedService === "Private Bag Delivery Service"){
    navigation.navigate(SCREENS.PBDSIntroduction)

  }
  else if(selectedService === 'Express Mail Service'){
    navigation.navigate(SCREENS.EMSIntroduction)

  }
  else if(selectedService === "Post Office Clearance and Delivery Service"){
    navigation.navigate(SCREENS.POCDSIntroduction)

  }

};
const handlePress = () => {
};
  return (
     <GradientBackground>
    <HeaderWithBackButtonAndNextButton onPress={handlePress} title = "Select Service" onNextPress={GoToNext} />

    <ScrollView style={styles.container}>
    {/* <Text style={styles.serviceText1}>Select Service</Text> */}

    {services.map((service, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.serviceItem,
            selectedService === service ? styles.selectedService : null,
          ]}
          onPress={() => handleServiceSelection(service)}
        >

          <Image style={{height:wp('20%'),width:wp('80%'),resizeMode:'contain'}} source={servicesIcons[index]} />
          <Text style={styles.serviceText}>{service}</Text>
        </TouchableOpacity>
        )
    )}

   
{/* <CustomBlueButton
          title="Next"
          onPress={GoToNext}
          buttonStyle={{marginVertical:20}} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(2.0)}} // Custom text style
        />  */}
             <Text style={styles.serviceText}></Text>

   </ScrollView>
   
     </GradientBackground>

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
  backgroundColor: COLORS.lightGreySelection, // Default background color
  borderWidth: 1,
  borderColor: 'transparent', // Default border color (transparent)
  borderRadius : 20,
  alignItems:'center',
  marginVertical:10,
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
},
serviceText1: {
  fontFamily: FONTFAMILY.ExtraBold,
    fontSize: rf(2.0),
    color: COLORS.Content,
    marginLeft:5
},
});




