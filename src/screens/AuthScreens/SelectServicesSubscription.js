// import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity} from 'react-native';
// import React from 'react';
// import {COLORS, CONSTANTS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES} from '../../constants/them';
// import {
//   heightPercentageToDP as hp,
//   responsiveFontSize as rf,
//   widthPercentageToDP as wp,
// } from '../../common/responsiveFunction';

// import { useEffect,useState } from 'react';
// import CustomBlueButton from '../../components/CustomBlueButton';
// import GradientBackground from '../../components/GradientBackground';
// import HeaderWithBackButton from '../../components/HeaderWithBackButton';
// import EditTextWithLable from '../../components/EditTextWithLable';
// import Icons, { Icon } from '../../components/Icons';
// import { ScrollView } from 'react-native-gesture-handler';
// import HeaderWithBackButtonAndNextButton from '../../components/HeaderWithBackButtonAndNextButton';
// import utills from '../../utills';
// import TouchableNativeFeedback from '../../components/TouchableNativeFeedback';
// import { useRoute } from '@react-navigation/native';
// import { useSelector } from 'react-redux';
// import useRedux from '../../components/useRedux';
// import { getSubscripedServiicesSlices, saveServiceDetails } from '../../redux/slice/categories';
// import HeaderWithBackButton2 from '../../components/HeaderWithBackButton2';

// export default function SelectServicesSubscription({navigation}) {
//   const [email, setemail] = useState('');
//   const [pwd, setupwd] = useState('');
//   const [isChecked, setIsChecked] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);
//   const route = useRoute();
//   const {Params1 ,from} = route.params;
  

//  const ServiceDetails  = useSelector(state => state.category.ServiceDetails);
// // 
// console.log("ServiceDetails",ServiceDetails)

// const USERDETAIL  = ServiceDetails?.plans
 
// const getAllServicesDetails = () => {
 
//    let data = {
//      id: Params1?.UserId ,
 
//    };
//    dispatch(getSubscripedServiicesSlices(data))
//      .unwrap()
//      .then(res => {
       
//      })
//      .catch(e => {
//      });
//  };

//   const services = [
//     'Home Shopping (ocean freight) Service',
//     'Post Office Clearance and Delivery Service',
//     'Post Office Box Rental Service',
//     'eZone Service',
//     'Private Bag Delivery Service',
//     'Express Mail Service',
//   ];
//   const Amount = [
//     '$100.00',
//     '',
//     '$100.00',
//     '$100.00',
//     '$100.00',    
//      '',
//       ];
//   const servicesIcons = [
//     IMAGES.HomeShopingImage2,
//     IMAGES.POCDSlogo,
//     IMAGES.HomeSimage,
//     IMAGES.Ezone1,
//     IMAGES.PBDSlogo,
//     IMAGES.EmsLogo,

//   ];
//   const handleServiceSelection = (service) => {
//     setSelectedService(service);
//   };
//   const {dispatch} = useRedux();

// useEffect(() => {
//   dispatch(saveServiceDetails(null))
//   console.log("CALLLL")
//   getAllServicesDetails()
//   return () => {
   
//   };
// }, []);

// const GoToNext = (service) => {
//   console.log("selectedService",selectedService)


//   if (utills.isEmptyOrSpaces(service)) {
//     console.log('value==33', service);

//     utills.errorAlert('', 'Please Select Service');
//     return;
//   }
 
//   if (service === "Home Shopping (ocean freight) Service"){

//     navigation.navigate(SCREENS.HomeShopIntroduction,{Params1 :Params1,from})
//   } else if(service === "eZone Service"){
//     navigation.navigate(SCREENS.EzoneIntroduction,{Params1 :Params1})

//   }
//   else if(service === "Post Office Box Rental Service"){
//     navigation.navigate(SCREENS.RentalBoxIntroduction,{Params1 :Params1})

//   }
//   else if(service === "Private Bag Delivery Service"){
//     navigation.navigate(SCREENS.PBDSIntroduction,{Params1 :Params1})

//   }
//   else if(service === 'Express Mail Service'){
//     navigation.navigate(SCREENS.EMSIntroduction)

//   }
//   else if(service === "Post Office Clearance and Delivery Service"){
//     navigation.navigate(SCREENS.POCDSIntroduction,{Params1 : Params1})

//   }

// };
// const handlePress = () => {
//   if (from === "Registration" ||from === "AddMore" ) {
//     navigation.replace(SCREENS.LoginScreen)
//   }else{
//     navigation.goBack()
//   }
// };
// return (
//   <GradientBackground>
//     <HeaderWithBackButton2 onPress={handlePress} title="Subscription" />
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.serviceText1}>Select Service</Text>
//       {USERDETAIL?.reduce((rows, key, index) => {
//         return (
//           (index % 2 === 0
//             ? rows.push([key])
//             : rows[rows.length - 1].push(key)) && rows
//         );
//       }, []).map((row, rowIndex) => (
//         <View key={rowIndex} style={styles.serviceRow}>
//           {row.map((service, colIndex) => (
//             <TouchableOpacity
//               key={`${rowIndex}-${colIndex}`}
//               style={[
//                 styles.serviceItem,
//                 selectedService === service?.name ? styles.selectedService : null,
//               ]}
//               onPress={() => handleServiceSelection(service?.name)}
//             >
//                 {service.isSelected == true ? (

// <Image style={styles.serviceSelectedImage} source={IMAGES.Checkicon} />

// ) : (
// null
// )}
//               <Image style={styles.serviceItemImage} source={servicesIcons[services.indexOf(service?.name)]} />
//               <Text style={styles.serviceText}>{service?.name}</Text>

// {service.id !== 3 && service.unitCostPerYear !== 0.0000 ? (
//   <Text style={styles.serviceText1}>
//     {service.unitCostPerYear.toFixed(2)}
//     <Text style={styles.serviceText2}>
//       /annually
//     </Text>
//   </Text>
// ) :  (
//   <>
  
//   {service.id === 3 && (
//       <View>
      
//         <Text style={styles.serviceText2}>
//           Large Post office Box $ 
//           <Text style={styles.serviceText1}>
//             {" " + ServiceDetails?.largeBoxAmount}
//           </Text>
//         </Text>
//         <Text style={styles.serviceText2}>
//           Medium Post office Box $ 
//           <Text style={styles.serviceText1}>
//             {" " + ServiceDetails?.mediumBoxAmount}
//           </Text>
//         </Text>
//       </View>
//     )}
//   </>
// )


// }



//                 <Text>
  
  
//   </Text>
//   {service.isSelected == false ? (

//               <TouchableOpacity
//               style={[
//                 styles.serviceIteminner,
//               ]}
//               onPress={() => GoToNext(service?.name)}
//               >
//               <Image style={{width : 24,height:24}} source={IMAGES.energyicon} />
//               <Text style={styles.selectserviceText}>Select</Text>


              
//             </TouchableOpacity>
//               ) : (
//               null
//               )}
//             </TouchableOpacity>
            
//           ))}
//         </View>
//       ))}
//     </ScrollView>
//   </GradientBackground>
// );
// }

// const styles = StyleSheet.create({

// container: {
//   paddingHorizontal: 20,
//   paddingVertical: 10,
// },
// serviceRow: {
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   marginBottom: 10,
// },
// serviceItem: {
//   width: '48%', 
//   alignItems: 'center',
//   padding: 12,
//   backgroundColor: COLORS.lightGreySelection,
//   borderWidth: 1,
//   borderColor: 'transparent',
//   borderRadius: 10,
// },
// serviceIteminner: {
//   width: '90%',
//   flexDirection: 'row',
//   alignItems: 'center',
//   padding: 12,
//   backgroundColor: 'orange',
//   borderWidth: 1,
//   borderRadius: 5,
//   borderColor: 'transparent',
// },
// selectedService: {
//  borderWidth: 7,
//   borderColor: COLORS.blueButton,

// },
// serviceItemImage: {
//   height: wp('20%'),
//   width: wp('20%'),
//   resizeMode: 'contain',
//   marginRight: 10,
// },
// serviceSelectedImage: {
//   height:50,
//   width: 50,
//   resizeMode: 'contain',
//   alignSelf:'flex-start'
// },
// serviceText: {
//   flex: 1,
//   fontFamily: FONTFAMILY.Bold,
//   fontSize: rf(1.8),
//   color: COLORS.brightBLUE,
//   textAlign:'center'
// },

// selectserviceText: {
//   flex: 1,
//   fontFamily: FONTFAMILY.Bold,
//   fontSize: rf(1.6),
//   color: COLORS.white,
//   textAlign:'center'
// },
// serviceText1: {
//   fontFamily: FONTFAMILY.Bold,
//   fontSize: rf(2.0),
//   color: COLORS.Content,
//   marginLeft: 5,
// },

// serviceText2: {
//   fontFamily: FONTFAMILY.Medium,
//   fontSize: rf(1.8),
//   color: COLORS.Content,
//   marginLeft: 5,
// },

// });

import {
  StyleSheet,
  Text,
  View,
  Platform,
  Linking,
  NativeModules,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  COLORS,
  CONSTANTS,
  FONTFAMILY,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
} from '../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';
import CustomBlueButton from '../../components/CustomBlueButton';
import GradientBackground from '../../components/GradientBackground';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import EditTextWithLable from '../../components/EditTextWithLable';
import Icons, { Icon } from '../../components/Icons';
import HeaderWithBackButtonAndNextButton from '../../components/HeaderWithBackButtonAndNextButton';
import utills from '../../utills';
import TouchableNativeFeedback from '../../components/TouchableNativeFeedback';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import useRedux from '../../components/useRedux';
import {
  getSubscripedServiicesSlices,
  saveIsLoading,
  saveServiceDetails,
} from '../../redux/slice/categories';
import HeaderWithBackButton2 from '../../components/HeaderWithBackButton2';
import { LogedInUserSlice, removeUserData, saveAccessToken, saveUserData } from '../../redux/slice/auth';

export default function SelectServicesSubscription({ navigation }) {
  const [email, setemail] = useState('');
  const [pwd, setupwd] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const route = useRoute();
  const { Params1, from } = route.params;

  const ServiceDetails = useSelector((state) => state.category.ServiceDetails);
  const USERDETAIL = ServiceDetails?.plans;
  const userData = useSelector(state => state.auth.userData);

  const getAllServicesDetails = () => {
    let data = {
      id: Params1?.UserId,
    };
    dispatch(getSubscripedServiicesSlices(data))
      .unwrap()
      .then((res) => {})
      .catch((e) => {});
  };

  const services = [
    'Home Shopping (ocean freight) Service',
    'Post Office Clearance and Delivery Service',
    'Post Office Box Rental Service',
    'eZone Service',
    'Private Bag Delivery Service',
    'Express Mail Service',
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

  const { dispatch } = useRedux();

  useEffect(() => {
    dispatch(saveServiceDetails(null));
    console.log('CALLLL');
    getAllServicesDetails();
    return () => {};
  }, []);

  const hasRequiredServices = () => {
    const requiredServices = ['Home Shopping (ocean freight) Service', 'eZone Service'];
    return USERDETAIL?.some(
      (service) => requiredServices.includes(service.name) && service.isSelected
    );
  };

  const GoToNext = (service) => {
    console.log('selectedService', selectedService);

    if (utills.isEmptyOrSpaces(service)) {
      console.log('value==33', service);

      utills.errorAlert('', 'Please Select Service');
      return;
    }

    if (
      service === 'Post Office Clearance and Delivery Service' &&
      !hasRequiredServices()
    ) {
      utills.confirmMessageAlert(
        '',
        'You need to have either Home Shopping or eZone Service to proceed.'
      );
      return;
    }

    if (service === 'Home Shopping (ocean freight) Service') {
      navigation.navigate(SCREENS.HomeShopIntroduction, {
        Params1: Params1,
        from,
      });
    } else if (service === 'eZone Service') {
      navigation.navigate(SCREENS.EzoneIntroduction, { Params1: Params1 });
    } else if (service === 'Post Office Box Rental Service') {
      navigation.navigate(SCREENS.RentalBoxIntroduction, { Params1: Params1 });
    } else if (service === 'Private Bag Delivery Service') {
      navigation.navigate(SCREENS.PBDSIntroduction, { Params1: Params1 });
    } else if (service === 'Express Mail Service') {
      navigation.navigate(SCREENS.EMSIntroduction);
    } else if (service === 'Post Office Clearance and Delivery Service') {
      navigation.navigate(SCREENS.POCDSIntroduction, { Params1: Params1 });
    }
  };
  const [loading, setLoading] = useState(false); // State to manage loading status
  const dispatcher = useDispatch();

  const handlePress = () => {
    console.log("from",from)
    if (from === 'AddMore') {
     // navigation.replace(SCREENS.LoginScreen);

     handleGoToHome()
    }
   else if (from === 'Registration') {
      navigation.replace(SCREENS.LoginScreen);
    }

    else if (from === "Login") {
 Alert.alert(
        'Warning',
        'Do You want to logout?',
        [
          {
            text: 'Yes',
            onPress: () =>{ console.log('New Subscription pressed')
          
            dispatcher(removeUserData(userData));
            navigation.reset({
              index: 0,
              routes: [{ name: SCREENS.WelcomScreen }], // Replace 'InitialScreen' with the name of your initial screen
            }); 
         
           }, style: 'default',
          },
          {
            text: 'No',
            onPress: () => console.log('Cancel pressed'),
            style: 'cancel',
          },
        ],
        { cancelable: false }
      );
      


    }
    else {
      navigation.goBack();
    }
  };
console.log("from",from)
  const iconName = from === 'Login' ? 'logout' : 'keyboard-backspace';
  // const iconType = from === 'login' ? 'MaterialCommunityIcons' : 'MaterialCommunityIcons';

  const handleGoToHome = async () => {
    const userId =  Params1?.UserId ?? userData?.userID ?? userData?.userId  ?? "";
    setLoading(true); // Se
    let data = {
    id: userId,
  
  };

  console.log('Go to Login');
  console.log('data',data);
  
  dispatch(saveIsLoading(true))
  dispatch(LogedInUserSlice(data))
    .unwrap()
    .then(res => {
      dispatch(saveIsLoading(false))
      setLoading(false); // Se
      console.log('Login ressss==', res);
      saveAccessToken(res?.token)
      if (res?.success == true){
        console.log('Login res==', res.data);
  
  
        if (res?.data?.services == null) {
          Alert.alert(
            'No Active Plan',
            `Please Buy Service Plan First`,
            [
              {
                text: 'OK',
                onPress: () => {
                  gotoSubscription(res.data)
                },
              },
            ],
            { cancelable: false }
          );
  
          return
        }
  
  
        dispatch(saveUserData(res.data))
        navigation.replace(SCREENS.DashBoard); 
        
    }
  });
  };
   const gotoSubscription = (userData) => {
      let Getdata = {
        FirstName: userData?.firstName,
        LastName: userData?.lastName,
        DOB: utills.getDateBeforeT(userData?.dob),
        Gender: userData?.gender,
        Address: userData?.address,
        POBox: userData?.poBox,
        Email: userData?.email,
        IRD: userData?.ird,
        Password: "",
        ConfirmPassword: "",
        PhoneNumber: userData?.phoneNumber,
        UserId: userData?.userID || userData?.userId,  // Handle both userID and userId
      };
      navigation.navigate(SCREENS.SelectServicesSubscription, { Params1: Getdata, from: "Login" })
    };
   
  return (
    <GradientBackground>
      {/* <HeaderWithBackButton2 onPress={handlePress} title="Subscription" /> */}

      <View style={styles1.containerWithBorder}>

<View style={styles1.subContainer1}>
  <TouchableOpacity
    style={styles1.container}
    onPress={handlePress}
    >
    {/* <Svg /> */}

    <Icons
  name={iconName}
  Type={Icon.MaterialCommunityIcons}
  size={rf(2.4)}
  color={COLORS.white}
/>
  </TouchableOpacity>
  <View style = {{flexDirection:'row',alignItems:'center',gap:10}}>
  <Image
        source={IMAGES.logoHS}
        style={{width: 70, height: 70}}
        resizeMode='contain'
      />
  <Text style={styles1.text1}>Subscription</Text>
  </View>
  {/* <Text style={styles.text1}>{title}</Text> */}
  <View style={styles1.container1}></View>
</View>
</View>



      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.serviceText1}>Select Service</Text>
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
                  (selectedService === service?.name || service.isSelected) 
                    ? styles.selectedService
                    : null,
                ]}
                onPress={() => handleServiceSelection(service?.name)}
              >
                {service.isSelected === true ? (
                  <Image
                    style={styles.serviceSelectedImage}
                    source={IMAGES.Checkicon}
                  />
                ) : null}
                <Image
                  style={styles.serviceItemImage}
                  source={servicesIcons[services.indexOf(service?.name)]}
                />
                <Text style={styles.serviceText}>{service?.name}</Text>

                {service.id !== 3 && service.unitCostPerYear !== 0.0 ? (
                  <Text style={styles.serviceText1}>
                    {service.unitCostPerYear.toFixed(2)}
                    <Text style={styles.serviceText2}>/annually</Text>
                  </Text>
                ) : service.id === 3 ? (
                  <View>
                    <Text style={styles.serviceText2}>
                      Large Post office Box $
                      <Text style={styles.serviceText1}>
                        {' ' + ServiceDetails?.largeBoxAmount}
                      </Text>
                    </Text>
                    <Text style={styles.serviceText2}>
                      Medium Post office Box $
                      <Text style={styles.serviceText1}>
                        {' ' + ServiceDetails?.mediumBoxAmount}
                      </Text>
                    </Text>
                  </View>
                ) : null}

                {service.isSelected === false ? (
                  <TouchableOpacity
                    style={[styles.serviceIteminner]}
                    onPress={() => GoToNext(service?.name)}
                  >
                    <Image
                      style={{ width: 24, height: 24 }}
                      source={IMAGES.energyicon}
                    />
                    <Text style={styles.selectserviceText}>Select</Text>
                  </TouchableOpacity>
                ) : null}
              </TouchableOpacity>
            ))}
          </View>
        ))}

        
      </ScrollView>
      {loading && (
                    <View style={styles.loaderContainer}>
                        {/* Your loader component */}
                        <ActivityIndicator size="large" color={COLORS.primary} />
                    </View>
                )}
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
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
    width: '48%',
    alignItems: 'center',
    padding: 12,
    backgroundColor: COLORS.lightGreySelection,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 10,
  },
  serviceIteminner: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'orange',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'transparent',
  },
  selectedService: {
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
    height: 50,
    width: 50,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
  },
  serviceText: {
    flex: 1,
    fontFamily: FONTFAMILY.Bold,
    fontSize: rf(1.8),
    color: COLORS.bluetext,
    marginVertical: 10,
    textAlign: 'center',
  },
  selectserviceText: {
    flex: 1,
    fontFamily: FONTFAMILY.Bold,
    fontSize: rf(1.6),
    color: COLORS.white,
    textAlign: 'center',
  },
  serviceText1: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: rf(2.2),
    color: COLORS.bluetext,
    textAlign: 'center',
  },
  serviceText2: {
    fontFamily: FONTFAMILY.Regular,
    fontSize: rf(2),
    color: COLORS.bluetext,
    textAlign: 'center',
  },
});


const styles1 = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blueButton,
    alignItems: 'center',
    justifyContent: 'center',
    width: Platform.OS ==='web' ? wp('4%') : wp('7%'),
    height: Platform.OS ==='web' ? wp('4%') : wp('7%'),
    borderRadius: Platform.OS ==='web' ? wp('1%') : wp('2%'),
  },
  subContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    padding:20
  },
  text1: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: rf(2.0),
    color: COLORS.black,
    textAlign: 'center',
  },
  container1: {
    marginRight: 15,
    width: 38,
    height: 38,
    borderRadius: 19,
  },
  containerWithBorder: {
    borderBottomWidth: 0.5, // Adjust the width as needed
    borderColor: COLORS.Greyscale, // Change the color as needed
  },
});
