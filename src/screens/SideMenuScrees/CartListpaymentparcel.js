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
import { useSelector } from 'react-redux';
import useRedux from '../../components/useRedux';
import TouchableNativeFeedback from '../../components/TouchableNativeFeedback';
import { useRoute } from '@react-navigation/native';
import { SaveCartPaymentSlice, SaveParcelPaymentSlice } from '../../redux/slice/categories';
import utills from '../../utills';

export default function CartListpaymentparcel({navigation}) {
  const [email, setemail] = useState('');
  const route = useRoute();
  const { Cartlist,AllData } = route.params;
  const [pwd, setupwd] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  // const MyCartList  = useSelector(state => state.category.MyCartList);
  // const MyCartListArray  = MyCartList?.Data;

  // console.log('MyCartListArray',MyCartListArray)
  const totalAmount = Cartlist.reduce((sum, currentItem) => sum + currentItem.Amount, 0);
  const totalAmountinUSq = (totalAmount / 2.6882).toFixed(2);
  const totalAmountinUS = "(US$" +  AllData?.TotalAmountAsUSDT + ")"

  console.log(totalAmount);
  const {dispatch} = useRedux();
useEffect(() => {

  return () => {
   
  };
}, []);
const GoToNext = () => {
  // navigation.navigate(SCREENS.PaymentGatwayScreen)
  SubmitHSParcelpaymentdata()
}
const SubmitHSParcelpaymentdata = () => {
  // console.log('FromID',FromID)

   let data = {
    IsFromAccountInclude:false,
    userID:46

   };
   console.log('dataaaaaaar',data)
 
   dispatch(SaveParcelPaymentSlice(data))
     .unwrap()
     .then(res => {
       console.log("res???",res?.Status)

 if (res?.Status == true){
  console.log("res???",res.Status)

//   processResponse(res)  
const redirectUrl = res.Data?.URL;
console.log("redirectUrl",redirectUrl)

navigation.navigate(SCREENS.LinkOpenScreenNEW,{item:redirectUrl})
utills.successAlert('', res.Message);

 }else{
  utills.errorAlert('', res.Message);
  return;
}
     })
 
     .catch(e => {
       //  setLoading(false);
     });
 };
const handlePress = () => {
};

return (
  <GradientBackground>
  <HeaderWithBackButton onPress={handlePress} title="Cart Total" />
  <ScrollView>

  <View style={styles.container}>
    <View style={styles.containerTop}>
        <Text style={styles.Left500Text}>
          Cart
          {/* //Account No: | Contact: | CompanyName: */}
        </Text>
      </View>
      {Cartlist?.map((item, index) => (
        <View style={{paddingVertical:10}}>
        <CartItem key={index} item={item} />

<View style={{backgroundColor:COLORS.lightGreySelection,height:2}}>
         
         </View>   
        </View>
        
      ))}

<View style={styles.container}>






<View style={styles.row}>
        
        <Text  style={styles.Left500Text}>Freight Charges (Subtotal)
        </Text>
        <Text  style={styles.Left500BOLDText}>${Cartlist.reduce((sum, currentItem) => sum + currentItem.UnitCost, 0).toFixed(2)}
        </Text>
    
        </View>

        <View style={styles.row}>
        
        <Text  style={styles.Left500Text}>AASAP Fee
        </Text>
        <Text style={styles.Left500BOLDText}>${Math.abs(Cartlist.reduce((sum, currentItem) => sum + currentItem.AASPAFee, 0)).toFixed(2)}</Text>

      
    
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
        <Text  style={styles.Left500BOLDText}>${Cartlist.reduce((sum, currentItem) => sum + currentItem.InsuredAmt, 0).toFixed(2)}

        </Text>
    
        </View> 

           <View style={styles.row}>
        
        <Text  style={styles.Left500Text}>Service Charge
        </Text>
        <Text  style={styles.Left500BOLDText}>${Cartlist.reduce((sum, currentItem) => sum + currentItem.ServiceCharge, 0).toFixed(2)}

        </Text>
    
        </View> 

           <View style={styles.row}>
        
        <Text  style={styles.Left500Text}>OverWt. Charge
        </Text>
        <Text  style={styles.Left500BOLDText}>${Cartlist.reduce((sum, currentItem) => sum + currentItem.OverWeight, 0).toFixed(2)}

        </Text>
    
        </View>     

         <View style={styles.row}>
        
        <Text  style={styles.Left500Text}>Customs Charges
        </Text>
        <Text  style={styles.Left500BOLDText}>${Cartlist.reduce((sum, currentItem) => sum + currentItem.CustomsDuty, 0).toFixed(2)}

        </Text>
    
        </View>      

         <View style={styles.row}>
        
        <Text  style={styles.Left500BOLDTextT}>Total Amount
        </Text>
        <Text style={styles.Left500BOLDTextT}>
  EC{(parseFloat(AllData?.TotalAmountAsUSDT.replace('$', '')) * 2.70).toFixed(2)}
</Text>
        <Text  style={styles.Left500BOLDTextT}>US{AllData?.TotalAmountAsUSDT}
        </Text>
    
        </View>   
        <View style={{backgroundColor:COLORS.lightGreySelection,height:5}}>
         
                </View>   

</View>  
<View style={{alignSelf:'center'}}>
        <CustomBlueButton
          title={"Proceed To Pay " + totalAmountinUS  }
          onPress={GoToNext}
          IconName={"payment"}

          buttonStyle={styles.signUpButton} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(1.8)}} // Custom text style
        />       
                    </View>      
    </View>

   
  </ScrollView>

</GradientBackground>

);
};
const CartItem = ({ item }) => {
  return (
    // <View style={styles.container}>
   
    <View style={styles.row}>
        
      <View>

      <Text 
        
        style={styles.txt1}
        
        
        >{"(" +item.ParcelNO + ") "}
        </Text>
        <Text 
        
        style={styles.txt1}
       
        
        >{item.GoodsDescription}
        </Text>


      </View>
       
        <View style={styles.row}>

        <Text style={styles.Left500Text}>${Math.abs(item.Amount)}</Text>

                </View> 

        </View> 
      // <View style={styles.subcontainer}>
      //   <View style={{flexDirection: 'row'}}>
      //     <View>
      //       <View style={styles.item}>
      //       {/* <View style={{flex:1}}> */}
      //         <Text
      //           numberOfLines={2}
      //           ellipsizeMode='tail'
      //           style={styles.txt1}>
      //           {"(" +item.ParcelNO + ") " + item.GoodsDescription}
      //         </Text>
      //         {/* </View>
      //         <View style={{flex:1}}>  */}
      //           <Text style={styles.txt3}>-${item.Amount}</Text>
               
      //         {/* </View> */}
      //       </View>
      //     </View>
      //   </View>
      //   <View style={{backgroundColor:COLORS.lightGreySelection,height:1}}>
         
      //    </View> 
      // </View>
      
    // </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: wp('94%'),
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    margin: 20,
    borderRadius: 15,
   // gap: 10,
    alignSelf: 'center',
    paddingBottom: 15,
  },
  Left500BOLDTextT: {
    fontFamily: FONTFAMILY.Bold,
    fontSize:rf(1.8),
    textAlign: 'left',
  },
  subcontainer: {
    flex:1,
    flexDirection: 'row',   
    margin: 10,
    alignItems: 'center',
  },
  row:
  {paddingHorizontal:10, justifyContent:'space-between',flexDirection:'row',
alignItems:'center'
},
  
  item: {
    // flex:1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    // gap:5,
    // width: wp('74%'),
  },
  itemDetails: {
    // flex:1,
    flexDirection: 'row',
   // gap: 10,
    alignItems: 'baseline',
  },
  txt1: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: rf(1.8),
    color: COLORS.Content,
    textAlign: 'left',
  },
  txt3: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: rf(1.8),
    color: COLORS.Heading,
    textAlign: 'left',
  },
  circle: {
    paddingTop: wp('1.5%'),
    backgroundColor: COLORS.white,
    width: wp('9%'),
    height: wp('9%'),
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: wp('4.5%'),
  },
  containerTop: {
    backgroundColor: COLORS.lightGreySelection,
    alignContent: 'left',
    justifyContent: 'space-evenly',
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  Left500Text: {
    fontFamily: FONTFAMILY.Regular,
    fontSize: rf(1.8),
    textAlign: 'left',
  },
  Left500BOLDText: {
    fontFamily: FONTFAMILY.Medium,
    fontSize:rf(1.8),
    textAlign: 'left',
  },
});




