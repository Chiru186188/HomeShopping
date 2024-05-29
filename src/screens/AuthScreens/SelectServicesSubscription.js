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
import TouchableNativeFeedback from '../../components/TouchableNativeFeedback';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import useRedux from '../../components/useRedux';
import { getSubscripedServiicesSlices, saveServiceDetails } from '../../redux/slice/categories';
import HeaderWithBackButton2 from '../../components/HeaderWithBackButton2';

export default function SelectServicesSubscription({navigation}) {
  const [email, setemail] = useState('');
  const [pwd, setupwd] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const route = useRoute();
  const {Params1 ,from} = route.params;
  

 const ServiceDetails  = useSelector(state => state.category.ServiceDetails);
// 
console.log("ServiceDetails",ServiceDetails)

const USERDETAIL  = ServiceDetails?.plans
 //
// console.log("USERDETAIL",USERDETAIL)
 const getAllServicesDetails = () => {
 
   let data = {
     id: Params1.UserId ,
 
   };
   dispatch(getSubscripedServiicesSlices(data))
     .unwrap()
     .then(res => {
       //console.log("res",res)
 
 
     })
     .catch(e => {
       //  setLoading(false);
     });
 };

  const services = [
    'Home Shopping (ocean freight) Service',
    'Post Office Clearance and Delivery Service',
    'Post Office Box Rental Service',
    'eZone Service',
    'Private Bag Delivery Service',
    'Express Mail Service',
   
  ];
  const Amount = [
    '$100.00',
    '',
    '$100.00',
    '$100.00',
    '$100.00',    
     '',
      ];
  const servicesIcons = [
    IMAGES.HomeShopingImage2,
    IMAGES.POCDSlogo,
    IMAGES.HomeSimage,
    IMAGES.Ezone1,
    IMAGES.PBDSlogo,
    IMAGES.EmsLogo,

  ];
  const handleServiceSelection = (service) => {
    setSelectedService(service);
  };
  const {dispatch} = useRedux();

useEffect(() => {
  dispatch(saveServiceDetails(null))
  console.log("CALLLL")
  getAllServicesDetails()
  return () => {
   
  };
}, []);

const GoToNext = (service) => {
  console.log("selectedService",selectedService)


  if (utills.isEmptyOrSpaces(service)) {
    console.log('value==33', service);

    utills.errorAlert('', 'Please Select Service');
    return;
  }
 
  if (service === "Home Shopping (ocean freight) Service"){

    navigation.navigate(SCREENS.HomeShopIntroduction,{Params1 :Params1,from})
  } else if(service === "eZone Service"){
    navigation.navigate(SCREENS.EzoneIntroduction,{Params1 :Params1})

  }
  else if(service === "Post Office Box Rental Service"){
    navigation.navigate(SCREENS.RentalBoxIntroduction,{Params1 :Params1})

  }
  else if(service === "Private Bag Delivery Service"){
    navigation.navigate(SCREENS.PBDSIntroduction,{Params1 :Params1})

  }
  else if(service === 'Express Mail Service'){
    navigation.navigate(SCREENS.EMSIntroduction)

  }
  else if(service === "Post Office Clearance and Delivery Service"){
    navigation.navigate(SCREENS.POCDSIntroduction,{Params1 : Params1})

  }

};
const handlePress = () => {
  if (from === "Registration" ||from === "AddMore" ) {
    navigation.replace(SCREENS.LoginScreen)
  }else{
    navigation.goBack()
  }
};
//   return (
//      <GradientBackground>
//     <HeaderWithBackButton onPress={handlePress} title = "Subscription" />

//     <ScrollView style={styles.container}>
//     <Text style={styles.serviceText1}>Select Service</Text>

//     {services.map((service, index) => (
//         <TouchableOpacity
//           key={index}
//           style={[
//             styles.serviceItem,
//             selectedService === service ? styles.selectedService : null,
//           ]}
//           onPress={() => handleServiceSelection(service)}
//         >

//           <Image style={{height:wp('20%'),width:wp('80%'),resizeMode:'contain'}} source={servicesIcons[index]} />
//           <Text style={styles.serviceText}>{service}</Text>
//         </TouchableOpacity>
//         )
//     )}

   
// {/* <CustomBlueButton
//           title="Next"
//           onPress={GoToNext}
//           buttonStyle={{marginVertical:20}} // Custom button style
//           textStyle={{fontFamily :FONTFAMILY.Bold,
//             fontSize: rf(2.0)}} // Custom text style
//         />  */}
//              <Text style={styles.serviceText}></Text>

//    </ScrollView>
   
//      </GradientBackground>

//   );
return (
  <GradientBackground>
    <HeaderWithBackButton2 onPress={handlePress} title="Subscription" />

    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.serviceText1}>Select Service</Text>

      {/* Grouping services to create two in a row */}
      {USERDETAIL?.reduce((rows, key, index) => {
        return (
          (index % 2 === 0
            ? rows.push([key])
            : rows[rows.length - 1].push(key)) && rows
        );
      }, []).map((row, rowIndex) => (
        <View key={rowIndex} style={styles.serviceRow}>
          {row.map((service, colIndex) => (
            <TouchableOpacity
              key={`${rowIndex}-${colIndex}`}
              style={[
                styles.serviceItem,
                selectedService === service?.name ? styles.selectedService : null,
              ]}
              onPress={() => handleServiceSelection(service?.name)}
            >
                {service.isSelected == true ? (

<Image style={styles.serviceSelectedImage} source={IMAGES.Checkicon} />

) : (
null
)}
              <Image style={styles.serviceItemImage} source={servicesIcons[services.indexOf(service?.name)]} />
              <Text style={styles.serviceText}>{service?.name}</Text>

              {/* {service.unitCostPerYear != 0.0000 ? (

              <Text style={styles.serviceText1}>{service.unitCostPerYear+'.00'}
             
              <Text  style={styles.serviceText2}>
                /annually
              </Text>
              
              </Text>

) : (
  <Text>
  
  
</Text>
)} */}

{service.id !== 3 && service.unitCostPerYear !== 0.0000 ? (
  <Text style={styles.serviceText1}>
    {service.unitCostPerYear.toFixed(2)}
    <Text style={styles.serviceText2}>
      /annually
    </Text>
  </Text>
) :  (
  <>
  
  {service.id === 3 && (
      <View>
      
        <Text style={styles.serviceText2}>
          Large Post office Box $ 
          <Text style={styles.serviceText1}>
            {" " + ServiceDetails?.largeBoxAmount}
          </Text>
        </Text>
        <Text style={styles.serviceText2}>
          Medium Post office Box $ 
          <Text style={styles.serviceText1}>
            {" " + ServiceDetails?.mediumBoxAmount}
          </Text>
        </Text>
      </View>
    )}
  </>
)


}



                <Text>
  
  
  </Text>
  {service.isSelected == false ? (

              <TouchableOpacity
              style={[
                styles.serviceIteminner,
              ]}
              onPress={() => GoToNext(service?.name)}
              >
              <Image style={{width : 24,height:24}} source={IMAGES.energyicon} />
              <Text style={styles.selectserviceText}>Select</Text>


              
            </TouchableOpacity>
              ) : (
              null
              )}
            </TouchableOpacity>
            
          ))}
        </View>
      ))}
    </ScrollView>
  </GradientBackground>
);
}

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width : wp('94'),
//     // justifyContent:'space-between',
//     alignSelf:"center",
//     backgroundColor :COLORS.white,
//     margin:20,
//     borderRadius : 15,
//     padding:15,
//     gap:20,
//     paddingBottom:30
//   },

  

  

//  serviceItem: {
//   padding: 12,
//   backgroundColor: COLORS.lightGreySelection, // Default background color
//   borderWidth: 1,
//   borderColor: 'transparent', // Default border color (transparent)
//   borderRadius : 20,
//   alignItems:'center',
//   marginVertical:10,
//   gap:10
// },
// selectedService: {
//   backgroundColor: COLORS.lightBlueSelection, // Background color for selected item
//   borderColor: COLORS.BlueSelectionBorder, // Border color for selected item
// },
// serviceText: {
//   fontFamily: FONTFAMILY.Bold,
//     fontSize: rf(1.8),
//     color: COLORS.Content,
// },
// serviceText1: {
//   fontFamily: FONTFAMILY.ExtraBold,
//     fontSize: rf(2.0),
//     color: COLORS.Content,
//     marginLeft:5
// },


container: {
  paddingHorizontal: 20,
  paddingVertical: 10,
},
serviceRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 10,
},
serviceItem: {
  width: '48%', // Adjust as needed to accommodate spacing and margins
  //flexDirection: 'row',
  alignItems: 'center',
  padding: 12,
  backgroundColor: COLORS.lightGreySelection,
  borderWidth: 1,
  borderColor: 'transparent',
  borderRadius: 10,
},
serviceIteminner: {
  width: '90%', // Adjust as needed to accommodate spacing and margins
  flexDirection: 'row',
  alignItems: 'center',
  padding: 12,
  backgroundColor: 'orange',
  borderWidth: 1,
  borderRadius: 5,
  borderColor: 'transparent',
},
selectedService: {
 // backgroundColor: COLORS.lightBlueSelection,
 borderWidth: 7,

  borderColor: COLORS.blueButton,

},
serviceItemImage: {
  height: wp('20%'),
  width: wp('20%'),
  resizeMode: 'contain',
  marginRight: 10,
},
serviceSelectedImage: {
  height:50,
  width: 50,
  resizeMode: 'contain',
  alignSelf:'flex-start'
},
serviceText: {
  flex: 1,
  fontFamily: FONTFAMILY.Bold,
  fontSize: rf(1.8),
  color: COLORS.brightBLUE,
  textAlign:'center'
},

selectserviceText: {
  flex: 1,
  fontFamily: FONTFAMILY.Bold,
  fontSize: rf(1.6),
  color: COLORS.white,
  textAlign:'center'
},
serviceText1: {
  fontFamily: FONTFAMILY.Bold,
  fontSize: rf(2.0),
  color: COLORS.Content,
  marginLeft: 5,
},

serviceText2: {
  fontFamily: FONTFAMILY.Medium,
  fontSize: rf(1.8),
  color: COLORS.Content,
  marginLeft: 5,
},

});




