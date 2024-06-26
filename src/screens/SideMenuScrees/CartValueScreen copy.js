import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, FlatList} from 'react-native';
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
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { SubscriptionValueSlice, saveAllSubscriptions } from '../../redux/slice/categories';
import useRedux from '../../components/useRedux';
import { ProceedToPaySlice } from '../../redux/slice/auth';
import utills from '../../utills';

export default function CartValueScreen({navigation}) {
  const route = useRoute();
  const { From ,Service} = route.params;
  const {dispatch} = useRedux();
  const [plansID, setPlans] = useState([]);

  const MySubscriptionsList  = useSelector(state => state.category.MySubscriptionsList);
  console.log("MyCoinsList", MySubscriptionsList);
  const subscription = MySubscriptionsList?.data?.selectedPlans;
  console.log("subscriptions", subscription);

  useEffect(() => {
     getAllCoinsPurchaselist();
    return () => {
       dispatch(saveAllSubscriptions(null))
    };
  }, []);

  const processResponse = (response) => {
    if (response && response.data && response.data.redirectUrl) {
      // Extract the redirect URL from the response
      const redirectUrl = response.data.redirectUrl;
  
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
    deepLinkEventListener = handleDeepLink;
  
    const focusListener = navigation.addListener('focus', () => {
      Linking.addEventListener('url', deepLinkEventListener);
    });
  
    return () => {
      focusListener();
      Linking.removeEventListener('url', deepLinkEventListener);
    };
  
    
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
        userId: 5645,
        IsInsured:false
      };
      console.log(data); // This will log an array containing the extracted id values

      dispatch(ProceedToPaySlice(data))
        .unwrap()
        .then(res => {
          console.log('Forgot res==', res);
          if (res.status == true){
            utills.successAlert('', res.message);
            processResponse(res)         
           }else{
            utills.errorAlert('', res.message);
            return;
          }
        });
    };
const getAllCoinsPurchaselist = () => {

  let data = {
    id: 5654,

  };

  dispatch(SubscriptionValueSlice(data))
    .unwrap()
    .then(res => {
      //  setLoading(false);
      console.log("AllSubsMembers", res.data);
    })
    .catch(e => {
      //  setLoading(false);
    });
};
const GoToNext = () => {

  processResponse(response);

}

const handlePress = () => {
};
  return (
     <GradientBackground>
    <CustomHeader onPress={handlePress} title = "Cart" />
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

<FlatList
      data={subscription} // Your data array from MySubscriptionsList
      keyExtractor={(item, index) => index.toString()} // Use a proper unique key here
      renderItem={({ item }) => (
        // <View style={styles.subcontainer}>
        //   <View style={{ flexDirection: 'row', gap: 20 }}>
        //     <View style={styles.circle}>
        //       {/* Your Icon component */}
        //       <Icons
        //         name={'dollar-sign'}
        //         Type={Icon.Feather}
        //         size={rf(2.7)}
        //         color={COLORS.Greyscale}
        //       />
        //     </View>
        //     <View >
        //     <View style={{ flex: 1 }}>
        //       <Text style={styles.txt1}>{item.name}</Text>
        //       <Text style={styles.txt2}
        //       numberOfLines={3}
        //       ellipsizeMode="tail"
        //       >
        //        {"(" +item.note+")"}
        //       </Text>
        //     </View>
        //     <View style={{ flex:1 }}>
        //       <Text style={styles.txt1}>{item.name}</Text>
              
        //     </View>
        //   </View>
        //   </View>
        //   <Text style={styles.txt3}>${item.amount}</Text>
        // </View>
        <View style={styles.subcontainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
        
          <Image source={IMAGES.logoHS} style={{height : 90 ,width : 90}} />

          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.txt1}>{item.name}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.txt3}>${item.amount}</Text>
              </View>
            </View>
            <Text style={styles.txt2} numberOfLines={3} ellipsizeMode="tail">
              {"(" + item.note + ")"}
            </Text>
            {item.id === 3 && ( // Conditionally render this view based on MySubscriptionsList?.data?.id value

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.txt1}>{MySubscriptionsList?.data?.keydepositename}</Text>
              </View>
              
              <View style={{ flex: 1 }}>
                <Text style={styles.txt3}>${MySubscriptionsList?.data?.keyAmount}</Text>
              </View>
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
                <Text style={styles.txt3}>${MySubscriptionsList?.data?.totalAmount}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20 ,marginVertical:15}}>
              <View style={{ flex: 1  }}>
              </View>
              
              <View style={{ flex: 1 }}>
              <CustomBlueButton
          title={"Proceed To Pay (US" + MySubscriptionsList?.data?.totalAmountAsUSDT + ")"}
          onPress={ProceedToPay}
          IconName={"payment"}

          buttonStyle={{width : wp('45%')}} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.SemiBold,
            fontSize: rf(1.6)}} // Custom text style
        />   
              </View>
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
      },
});




