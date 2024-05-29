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
import CustomHeader from '../../components/CustomHeader';
import { ScrollView } from 'react-native-gesture-handler';
import useRedux from '../../components/useRedux';
import { getParcelPaymentSlice } from '../../redux/slice/categories';
import TouchableNativeFeedback from '../../components/TouchableNativeFeedback';

export default function ParcelSubscriptionpayment({navigation}) {
  const [email, setemail] = useState('');
  const [pwd, setupwd] = useState('');
  const [isChecked, setIsChecked] = useState(false);
//PayOnlineApi/GetHsParcelAndSubscription?userID=
const [customerDetails, setcustomerDetails] = useState([]);
const [AllDetails, setAllDetails] = useState();

const {dispatch} = useRedux();

useEffect(() => {
  getParcelpaymentdata()
  return () => {
   
  };


  
}, []);


const getParcelpaymentdata = () => {
  // console.log('FromID',FromID)

   let data = {
     Id: 46//userData?.userID,
 
   };
   console.log('dataaaaaaar',data)
 
   dispatch(getParcelPaymentSlice(data))
     .unwrap()
     .then(res => {
       console.log("res?",res)
       setAllDetails(res)
       
       setcustomerDetails(res?.Data?.CustomersTransactionDetails)
     })

     .catch(e => {
       //  setLoading(false);
     });
 };


const GoToNext = () => {
  navigation.navigate(SCREENS.PaymentGatwayScreen)

}
const handlePress = () => {
};
  return (
     <GradientBackground>
    <CustomHeader onPress={handlePress} title = "Transaction" />
<ScrollView>
    <View>
    <View style={styles.container}>
    <View style={[styles.containerTop,{flexDirection:'row',justifyContent:'space-between'}]}>
    <Text  style={styles.Left500Text}>Parcel/Subscription Transaction
</Text>

<TouchableNativeFeedback 
onPress={() => 
navigation.navigate(SCREENS.CartListpaymentparcel,{Cartlist:customerDetails,AllData:AllDetails})

}style={{
    // position: 'absolute',
  }}>
     <Icons
        name={'shopping-cart'}
        Type={Icon.Entypo}
        size={rf(3.7)}
        color={COLORS.black}
        style={{}}
      />

      {/* Badge Icon */}
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{customerDetails?.length}</Text>
      </View>
    </TouchableNativeFeedback>

    </View>



    <View style={styles.row}>
            
    <Text  style={styles.Left500Text}>My parcels ({customerDetails?.length})
</Text>

              {/* <Text  style={styles.Left500Text}>Membership Dues (1) */}

{/* </Text> */}
              </View>


            


              {customerDetails?.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}


             
     
    </View>

   
    </View>
    </ScrollView>
     </GradientBackground>

  );
  
}
const CartItem = ({ item }) => {
  return (
    // 
    <View>
   

    <View style={styles.subcontainer}>
               
                <View style={{flex :1,flexDirection:'row',gap:20}}>


              
<View style={styles.circle}> 
<Icons
      name={'dollar-sign'}
      Type={Icon.Feather}
      size={rf(2.7)}
      color={COLORS.Greyscale}
    />
</View>
<View style={{flex:1}}>
<Text style={styles.txt1}>{item.ParcelNO + " - " + item.GoodsDescription}
</Text>
<Text style={styles.txt2}>{item.TransactionDate}

</Text>
<Text style={styles.txt2}>{item.DispatchNo}

</Text>

</View>
</View>

<Text  style={styles.txt3}>${item.UnitCost+item.AASPAFee+item.InsuredAmt+item.ServiceCharge+item.OverWeight+item.CustomsDuty+item.ServiceCharge}

</Text>





</View>
 <View style={styles.container}>






 <View style={styles.row}>
         
         <Text  style={styles.Left500Text}>Freight Charges (Subtotal)
         </Text>
      
         <Text  style={styles.Left500BOLDText}>${item.UnitCost}
         </Text>
     
         </View>

         <View style={styles.row}>
         
         <Text  style={styles.Left500Text}>AASAP Fee
         </Text>
         <Text style={styles.Left500BOLDText}>${Math.abs(item.AASPAFee)}</Text>

         {/* <Text  style={styles.Left500BOLDText}>${item.AASPAFee}
         </Text> */}
     
         </View>  

            {/* <View style={styles.row}>
         
         <Text  style={styles.Left500Text}>AASAP Fee
         </Text>
      
         <Text  style={styles.Left500BOLDText}>$0.00
         </Text>
     
         </View>  */}

            <View style={styles.row}>
         
         <Text  style={styles.Left500Text}>Insured Amount
         </Text>
      
         <Text  style={styles.Left500BOLDText}>${item.InsuredAmt.toFixed(2)}
         </Text>
     
         </View> 

            <View style={styles.row}>
         
         <Text  style={styles.Left500Text}>Service Charge
         </Text>
      
         <Text  style={styles.Left500BOLDText}>${item.ServiceCharge.toFixed(2)}
         </Text>
     
         </View> 

            <View style={styles.row}>
         
         <Text  style={styles.Left500Text}>OverWt. Charge
         </Text>
      
         <Text  style={styles.Left500BOLDText}>${item.OverWeight.toFixed(2)}
         </Text>
     
         </View>     

          <View style={styles.row}>
         
         <Text  style={styles.Left500Text}>Customs Charges
         </Text>
      
         <Text  style={styles.Left500BOLDText}>${item.CustomsDuty.toFixed(2)}
         </Text>
     
         </View>      

          <View style={styles.row}>
         
         <Text  style={styles.Left500BOLDTextT}>Total Amount
         </Text>
      
         <Text  style={styles.Left500BOLDText}>${item.UnitCost+item.AASPAFee+item.InsuredAmt+item.ServiceCharge+item.OverWeight+item.CustomsDuty+item.ServiceCharge}
         </Text>
     
         </View>   
         <View style={{backgroundColor:COLORS.lightGreySelection,height:5}}>
          
                 </View>   

 </View>

     </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    width : wp('94'),
    justifyContent:'space-between',
    backgroundColor :COLORS.white,
    //borderRadius : 15,
    gap:10,
    alignSelf:'center',
  },
  subcontainer: 
  
    {
    flexDirection:'row',
    backgroundColor : COLORS.lightGreySelection,
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
    textAlign: 'left',
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
      badgeContainer: {
        position: 'absolute',
        bottom: 15, // Adjust the top position as needed
        left: 15, // Adjust the right position as needed
        backgroundColor: 'red', // Customize badge background color
        alignItems:'center',
       // padding: 3,
        width:20,
        height:20,
        borderRadius:10
      },
      badgeText: {
        color: 'white', // Customize badge text color
        fontWeight: 'bold',
      },
    
});




