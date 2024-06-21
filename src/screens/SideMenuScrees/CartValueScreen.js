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
// import CustomHeader from '../../components/CustomHeader';
// import { ScrollView } from 'react-native-gesture-handler';
// import { useRoute } from '@react-navigation/native';

// export default function CartValueScreen({navigation}) {
//   const route = useRoute();
//   const { From ,Service} = route.params;

// useEffect(() => {
// 
//   return () => {
   
//   };
// }, []);
// const GoToNext = () => {

//   navigation.navigate(SCREENS.PaymentGatwayScreenNew)
// }
// const handlePress = () => {
// };
//   return (
//      <GradientBackground>
//     <HeaderWithBackButton onPress={handlePress} title = "Cart" />
// <ScrollView>
//     <View>
//     <View style={styles.container}>
//     <View style={styles.containerTop}>
//     <Text  style={styles.Left500Text}>Cart Details
// </Text>
//     </View>


// {/* 
//     <View style={styles.row}>
            
//     <Text  style={styles.Left500Text}>My parcels (0)
// </Text>

//               <Text  style={styles.Left500Text}>Membership Dues (1)

// </Text>
//               </View> */}



//               <View style={styles.subcontainer}>
               
//                 <View style={{flexDirection:'row',gap:10,alignItems:'center',flex:1}}>


              
//                 <Image source={IMAGES.logoHS} style={{height : 36 ,width : 36}} />

{/* <View style={{flex:1}}>
<Text style={styles.txt1}>{Service}
</Text>
<Text style={styles.txt2}>From Nov-2023 To Dec-2023

</Text>


</View> */}
// </View>
// <Text style={styles.txt3}>$33.33</Text>

// </View>

// <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:10 }}>
// <Text style={styles.txt1}>{"Total Amount"}</Text>
// <Text style={styles.txt3}>${'33.33'}</Text>

              
            
//             </View>
// <View style={{alignSelf:'center'}}>
//         <CustomBlueButton
//           title="Proceed To Pay (US$17.67)"
//           onPress={GoToNext}
//           buttonStyle={styles.signUpButton} // Custom button style
//           textStyle={{fontFamily :FONTFAMILY.Bold,
//             fontSize: rf(1.8)}} // Custom text style
//         />       
//                     </View>   
//     </View>
// {/* 
//     <View style={styles.container}>
//     <View style={styles.containerTop}>
//     <Text  style={styles.Left500Text}>Cart Total (EC$81.67)</Text>
//     </View>



//     <View style={styles.row}>
            
//     <Text  style={styles.Left500Text}>{From} Registration fee
//     </Text>
 
//     <Text  style={styles.Left500BOLDText}>$66.67
//     </Text>

//     </View>

//     <View style={styles.row}>
            
//             <Text  style={styles.Left500Text}>Key Deposite
//             </Text>
         
//             <Text  style={styles.Left500BOLDText}>$15.00
//             </Text>
        
//             </View>

         
           
   
//     </View> */}
//     </View>
//     </ScrollView>
//      </GradientBackground>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
   
//     width : wp('94'),
//     justifyContent:'space-between',
//     //alignItems:"center",
//     backgroundColor :COLORS.white,
//     margin:20,
//     borderRadius : 15,
//     gap:10,
//     // paddingHorizontal:10,
//     alignSelf:'center',
//     paddingBottom:15
//   },
//   subcontainer: 
  
//     {
//       flex:1,
//     flexDirection:'row',
//     backgroundColor : COLORS.lightGreySelection,
//     paddingVertical:10,
//     paddingHorizontal:10,
//     margin:10,
//     alignItems:'center',
//     justifyContent:'space-between',
//     borderRadius:10
// },
  
//   row:
//   {paddingHorizontal:10, justifyContent:'space-between',flexDirection:'row'},
  
//   buttonContainer: {
//    gap :10,
//    alignItems: 'center',
//   },
//   txt: {
//     fontFamily: FONTFAMILY.Bold,
//     fontSize: rf(3.0),
//     color: COLORS.Heading,
//     textAlign: 'left',
//     marginTop: hp('1.8%'),
//   },
//   button: {
//     marginTop: 20, 
//   },
//   icon: {
//     fontSize: rf(2.5),
//     color: COLORS.Subheading,
//     marginRight: 10,
//   },
//   txt1: {
//     fontFamily: FONTFAMILY.Medium,
//     fontSize: rf(1.8),
//     color: COLORS.Content,
//     textAlign: 'left',
//   },
//   txt2: {
//     fontFamily: FONTFAMILY.Regular,
//     fontSize: rf(1.6),
//     color: COLORS.Lableheading,
//     textAlign: 'left',
//   },
//   txt3: {
//     fontFamily: FONTFAMILY.Bold,
//     fontSize: rf(2.0),
//     color: COLORS.Heading,
//     textAlign: 'left',
//   },
//   circle: {
//     paddingTop:wp('1.5%'),
//     backgroundColor:COLORS.white,
//     width:wp('9%'),
//     height:wp('9%'),
//     alignItems:'center',
//     alignContent:'center',
//     alignSelf:'center',
// borderRadius:wp('4.5%')

//   },
//   SignUpContainer: {
   
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   subContainer2: {
//     marginVertical: 10,
  
//    flexDirection: 'row',
//    justifyContent: 'flex-start',
//    alignItems: 'center',
//  },
// containerTop:
//  {backgroundColor : COLORS.lightGreySelection,alignContent:'left',justifyContent:'space-evenly',padding:15,borderTopLeftRadius: 10, // Set the top left border radius
//     borderTopRightRadius: 10},
   
   
//     Left500Text: {
//         fontFamily: FONTFAMILY.Regular,
//         fontSize:rf(1.8),
//         textAlign: 'left',
//       },
//        Left500BOLDText: {
//         fontFamily: FONTFAMILY.Medium,
//         fontSize:rf(1.8),
//         textAlign: 'left',
//       },
//       Left500BOLDTextT: {
//         fontFamily: FONTFAMILY.Bold,
//         fontSize:rf(1.8),
//         textAlign: 'left',
//       },
// });




import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, FlatList, Alert} from 'react-native';
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
import CustomHeader from '../../components/CustomHeader';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { SubscriptionValueSlice, saveAllSubscriptions } from '../../redux/slice/categories';
import useRedux from '../../components/useRedux';
import { ProceedToPaySlice } from '../../redux/slice/auth';
import utills from '../../utills';
import HeaderWithBackButton2 from '../../components/HeaderWithBackButton2';

export default function CartValueScreen({navigation}) {
  const route = useRoute();
 const { From ,Service,userID,LoginParams} = route.params;
  const {dispatch} = useRedux();
  const [plansID, setPlans] = useState([]);

  const MySubscriptionsList  = useSelector(state => state.category.MySubscriptionsList);
  // console.log("MyCoinsList", MySubscriptionsList);
  const subscription = MySubscriptionsList?.data?.selectedPlans;
  // console.log("subscriptions", subscription);
  const [isChecked, setChecked] = useState(true);

  // useEffect(() => {
    
  //   dispatch(saveAllSubscriptions(null))


  //    console.log(LoginParams)
  //   return () => {
  //     dispatch(saveAllSubscriptions(null))

  //   };
  // }, []);


  useFocusEffect(
    React.useCallback(() => {
      
       //dispatch(saveAllSubscriptions(null))
    
       getAllCoinsPurchaselist();

      
     
    }, [navigation])
  );




  const processResponse = (response) => {
    if (response && response.data && response.data.redirectUrl) {
      // Extract the redirect URL from the response
      const redirectUrl = response.Data.redirectUrl;
  
      // Open the URL using Linking module
      Linking.openURL(redirectUrl)
        .then((supported) => {
          if (!supported) {
            console.log(`Cannot open URL: ${redirectUrl}`);
          }
        })
        .catch((err) => console.error('An error occurred: ', err));
    } else {
      console.log('Redirect URL not found in the response');
    }
  };

  // const response = {
  //   "data": {
  //     "redirectUrl": "https://epay.gov.ai/devpay?paymentid=h58d366B748n"
  //   },
  //   "message": "Saved Successfully",
  //   "recordId": 0,
  //   "status": true,
  //   "transactionType": 0
  // };
  useEffect(() => {
    // deepLinkEventListener = handleDeepLink;
  
    // const focusListener = navigation.addListener('focus', () => {
    //   Linking.addEventListener('url', deepLinkEventListener);
    // });
  
    // return () => {
    //   focusListener();
    //   Linking.removeEventListener('url', deepLinkEventListener);
    // };
  
    
  }, []);
  let deepLinkEventListener = null;

  const handleDeepLink = async (event) => {
    //
    // await utills.saveStringToAsyncStorage('LoginbyID', "no")
  console.log("event.url",event.url)
  //   if (event.url && event.url.includes('caribbargainsapp://oauth2/redirect')) {
  
    
  //     const data = queryString.parse(event.url.split('?')[1]);
  //     const token = data.token;
  //     const decodedToken = jwtDecode(token);
  //     SaveDataToLocal(decodedToken,token)
  // }
  };
  const ProceedToPay = async () => {  
   
   
    const subscription = MySubscriptionsList?.data?.selectedPlans;
const idArray = [];

for (let i = 0; i < subscription.length; i++) {
  const id = subscription[i].id;
  idArray.push(id);
 // setPlans.push(id)
}

console.log(idArray); // This will log an array containing the extracted id values

console.log(plansID); // This will log an array containing the extracted id values

    
      let data = {
        planIds: idArray,
        userId: userID,
        IsInsured:isChecked

      };
      console.log(data); // This will log an array containing the extracted id values

      dispatch(ProceedToPaySlice(data))
        .unwrap()
        .then(res => {
          console.log('Forgot res==', res);
          if (res.Status == true){
           // utills.successAlert('', res.Message);
         //   processResponse(res)  
         const redirectUrl = res.Data.redirectUrl;
       navigation.navigate(SCREENS.LinkOpenScreen,{From:From,item:redirectUrl,LoginParams:LoginParams})
           }else{
            utills.errorAlert('', res.Message);
            return;
          }
        });
    };
const getAllCoinsPurchaselist = () => {

  let data = {
    id: userID,
};
 console.log("data",data)
  dispatch(SubscriptionValueSlice(data))
    .unwrap()
    .then(res => {
      //  setLoading(false);
      console.log("AllSubsMemberssss", res.data);
      if (res?.data?.StatusCode == 400) {
        Alert.alert(
          'Error',
          "You have not any subscription plan.You have to register or subscribe a plan.",
          [
            {
              text: 'OK',
              onPress: () => {
                navigation.replace(SCREENS.LoginScreen);
              },
            },
          ],
        );
        
      }

      // setChecked()


    })
    .catch(e => {
      //  setLoading(false);
    });
};
const GoToNext = () => {

  processResponse(response);

}

const getFullName = (params) => {
  // Check if either firstName or FirstName exists in the params object
  console.log("params",params)
  if (params.firstName) {
    return `${params.firstName} ${params.lastName || ''}`;
  } else if (params.FirstName) {
    return `${params.FirstName} ${params.LastName || ''}`;
  } else {
    return ''; // Handle the case when neither property is available
  }
};

const handlePress = () => {

//navigation.navigate(SCREENS.LoginScreen)
};
  return (
     <GradientBackground>
      <HeaderWithBackButton onPress={handlePress} title= 'Cart' />
    {/* <CustomHeader onPress={handlePress} title = "Cart" /> */}


    {/* <View style={styless.subContainer1}>
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}
    >

    <Icons
  name={'keyboard-backspace'}
  Type={Icon.MaterialCommunityIcons}
  size={rf(2.4)}
  color={COLORS.white}
/>
  </TouchableOpacity>

  <Text style={styless.text1}>Cart Total</Text>
  <View style={styless.container1}></View>
</View>
 */}


<ScrollView>
    <View>
    <View style={styles.container}>
    <View style={styles.containerTop}>
    <Text  style={styles.Left500Text}>Cart Detail
</Text>
    </View>


{/* 
    <View style={styles.row}>
            
    <Text  style={styles.Left500Text}>My parcels (0)
</Text>

              <Text  style={styles.Left500Text}>Membership Dues (1)

</Text>
              </View> */}



              {/* <View style={styles.subcontainer}>
               
                <View style={{flexDirection:'row',gap:20}}>


              
<View style={styles.circle}> 
<Icons
      name={'dollar-sign'}
      Type={Icon.Feather}
      size={rf(2.7)}
      color={COLORS.Greyscale}
    />
</View>
<View style={{flex:0.7}}>
<Text style={styles.txt1}>{From} Registration fee
</Text>
<Text style={styles.txt2}>From Nov-2023 To Dec-2023 {Service}

</Text>


</View>
</View>
<Text style={styles.txt3}>-$66.67</Text>

</View>
      */}
<View style={styles.row}>
<Text style={styles.txt3}>Subscribed By:</Text>
<Text style={styles.txt3}>{getFullName(LoginParams)}</Text>


</View>
<FlatList
      data={subscription} // Your data array from MySubscriptionsList
      keyExtractor={(item, index) => index.toString()} // Use a proper unique key here
      renderItem={({ item }) => (
      
        <View style={styles.subcontainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 ,flex:1}}>
        
          <Image source={IMAGES.logoHS} style={{height : 90 ,width : 90}} />
 <View style={{ flex: 1 }}>
 <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
              
 <View style={{ flex: 0.95 }}>
    <Text style={styles.txt1} numberOfLines={4} ellipsizeMode="tail">{item.name ?? ""}</Text>
  </View>
  {item.id === 3 ? (
   <Text style={styles.txt3}>${MySubscriptionsList?.data?.subsrcptionAmount ?? ""}</Text>

) : (
  <Text style={styles.txt3}>${item.amount ?? ""}</Text>
)}



              </View>
            <Text style={styles.txt2} numberOfLines={3} ellipsizeMode="tail">
              {"(" + item.note + ")"}
            </Text>
            

             {item.id === 3 ? (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 1 }}>
      <Text style={styles.txt1}>{MySubscriptionsList?.data?.keydepositename ?? ""}</Text>
    </View>
    <View style={{ flex: 1 }}>
      <Text style={styles.txt3}>${MySubscriptionsList?.data?.keyAmount ?? ""}</Text>
    </View>
  </View>
) : (
  <View /> // Render a blank View when item.id !== 3
)}
       {(item.id === 1 || item.id === 4)&& (

<View
        
        style={[
                styles.checkboxItem,
               
              ]}
            //  onPress={() => setChecked(!isChecked)}
            >
  
    
              <Icons
                name={item.IsInsured == true ? 'checkbox-active' : 'checkbox-passive'}
                style={styles.icon}
                Type={Icon.Fontisto}
                size={rf(2.8)}
              />
                    <Text style={styles.txt2}>{"Select this option if you want insurance on your parcels"}</Text>

            </View>
)}

          </View>
          
        </View>

      </View>
      )}
    />

<View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20 }}>
              <View style={{ flex: 1  }}>
                <Text style={styles.txt1}>{"Total Amount"}</Text>
              </View>
              
              <View style={{ flex: 1 }}>
                <Text style={styles.txt3}>EC$ {MySubscriptionsList?.data?.totalAmount}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20 ,marginVertical:15}}>
              {/* <View style={{ flex: 1  }}>
              </View> */}
              
            
            </View>

            <View style={{ flex: 1,alignItems:'center' }}>
              <CustomBlueButton
          title={"Proceed To Pay (US" + MySubscriptionsList?.data?.totalAmountAsUSDT + ")"}
          onPress={ProceedToPay}
          buttonStyle={{width : wp('88%')}} 
          IconName={"payment"}
          // Custom button style
          textStyle={{fontFamily :FONTFAMILY.SemiBold,
            fontSize: rf(1.6),paddingHorizontal:10,textAlign:"center",}} // Custom text style
        />   
              </View>
           
    </View>

  
    </View>
    </ScrollView>
     </GradientBackground>

  );
}

const styles = StyleSheet.create({
  container: {
   
    width : wp('94'),
    justifyContent:'space-between',
    //alignItems:"center",
    backgroundColor :COLORS.white,
    margin:20,
    borderRadius : 15,
    gap:10,
    // paddingHorizontal:10,
    alignSelf:'center',
    paddingBottom:15
  },
  subcontainer: 
  
    {
      flex:1,
    flexDirection:'row',
    backgroundColor : COLORS.lightBlueSelection,
    paddingVertical:10,
    paddingHorizontal:10,
    margin:10,
    alignItems:'center',
    justifyContent:'space-between',
    borderRadius:10
},
  
  row:
  {paddingHorizontal:10, justifyContent:'space-between',flexDirection:'row'},
  
  buttonContainer: {
   gap :10,
   alignItems: 'center',
  },
  txt: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: rf(3.0),
    color: COLORS.Heading,
    textAlign: 'left',
    marginTop: hp('1.8%'),
  },
  button: {
    marginTop: 20, 
  },
  icon: {
    fontSize: rf(2.5),
    color: COLORS.Subheading,
    marginRight: 10,
  },
  txt1: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: rf(1.8),
    color: COLORS.Content,
    textAlign: 'left',
  },
  txt2: {
    fontFamily: FONTFAMILY.Regular,
    fontSize: rf(1.6),
    color: COLORS.Lableheading,
    textAlign: 'left',
  },
  txt3: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: rf(2.0),
    color: COLORS.Heading,
    textAlign: 'right',
  },
  circle: {
    paddingTop:wp('1.5%'),
    backgroundColor:COLORS.white,
    width:wp('9%'),
    height:wp('9%'),
    alignItems:'center',
    alignContent:'center',
    alignSelf:'center',
borderRadius:wp('4.5%')

  },
  SignUpContainer: {
   
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subContainer2: {
    marginVertical: 10,
  
   flexDirection: 'row',
   justifyContent: 'flex-start',
   alignItems: 'center',
 },
containerTop:
 {backgroundColor : COLORS.lightGreySelection,alignContent:'left',justifyContent:'space-evenly',padding:15,borderTopLeftRadius: 10, // Set the top left border radius
    borderTopRightRadius: 10},
   
   
    Left500Text: {
        fontFamily: FONTFAMILY.Regular,
        fontSize:rf(1.8),
        textAlign: 'left',
      },
       Left500BOLDText: {
        fontFamily: FONTFAMILY.Medium,
        fontSize:rf(1.8),
        textAlign: 'left',
      },
      Left500BOLDTextT: {
        fontFamily: FONTFAMILY.Bold,
        fontSize:rf(1.8),
        textAlign: 'left',
      }, checkboxItem: {
        flexDirection: 'row',
         alignItems: 'center',
        alignSelf:'flex-start',
        paddingRight: 10,
        // margin: 10,
        // gap : 100
      },
});




