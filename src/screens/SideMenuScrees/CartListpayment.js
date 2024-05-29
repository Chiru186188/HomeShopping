import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, Alert} from 'react-native';
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
import { SaveCartPaymentSlice } from '../../redux/slice/categories';
import utills from '../../utills';
import HeaderWithBackButton2 from '../../components/HeaderWithBackButton2';

export default function CartListpayment({navigation,}) {
  const [email, setemail] = useState('');
  const route = useRoute();
  const { Cartlist ,updateArrayData} = route.params;
  const [pwd, setupwd] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  // const MyCartList  = useSelector(state => state.category.MyCartList);
  // const MyCartListArray  = MyCartList?.Data;
  const [cartList, setcartList] = useState(Cartlist);

  // console.log('MyCartListArray',MyCartListArray)
  const totalAmount = cartList.reduce((sum, currentItem) => sum + currentItem.Amount + currentItem.LateFees, 0);
  const totalAmountinUSq = (totalAmount /  2.6882).toFixed(2);

  const totalAmountinUS = "(US$" + (totalAmount / 2.6882).toFixed(2) + ")";

  console.log(totalAmount);
  const {dispatch} = useRedux();
useEffect(() => {

  return () => {
   
  };
}, []);
const GoToNext = () => {
  // navigation.navigate(SCREENS.PaymentGatwayScreen)
  if (cartList.length == 0){
    utills.confirmMessageAlert("Alert","No items in Cart.")
    return
  }
  SubmitPOCDSpaymentdata()
}

const removeItemFromCart = (itemToRemove) => {
  // Filter out the item to remove from the cart list
  const updatedCartList = cartList.filter((item) => item !== itemToRemove);
  // 
  setcartList(updatedCartList);
  // Cartlist = updatedCartList
};
const SubmitPOCDSpaymentdata = () => {
  // console.log('FromID',FromID)

   let data = {
    ListTrans:cartList,

   };
   console.log('dataaaaaaar',data)
 
   dispatch(SaveCartPaymentSlice(data))
     .unwrap()
     .then(res => {
       console.log("res???",res?.Status)

 if (res?.Status == true){
  console.log("res???",res.Status)

//   processResponse(res)  
const redirectUrl = res.Data;
console.log("redirectUrl",redirectUrl)

navigation.navigate(SCREENS.LinkOpenScreenNEW,{item:redirectUrl})
//utills.successAlert('', res.Message);

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
  console.log("CALL")
  updateArrayData(cartList);
  navigation.goBack()
  // Cartlist(cartList)

};

return (
  <GradientBackground>
  <HeaderWithBackButton2 onPress={handlePress} title="Cart Total" />
  <ScrollView>

  <View style={styles.container}>
    <View style={styles.containerTop}>
        <Text style={styles.Left500Text}>
          Cart
          {/* //Account No: | Contact: | CompanyName: */}
        </Text>
      </View>
      {cartList?.map((item, index) => (
        <CartItem key={index} item={item} onDelete={removeItemFromCart} />
        ))}

      
    </View>

   
  </ScrollView>
  <View style={styles.container}>
    <View style={styles.containerTop}>
    <Text  style={styles.txt3}>Parcels Total (EC$ {totalAmount})</Text>
    </View>



    <View style={{ flexDirection: 'row', justifyContent:"space-between" ,paddingHorizontal:20 ,paddingVertical:5}}>
            
    <Text  style={styles.txt3}>EC$
    </Text>
 
    <Text  style={styles.txt3}>{totalAmount}
    </Text>

    </View>
    <View style={{ flexDirection: 'row', justifyContent:"space-between" ,paddingHorizontal:20 ,paddingVertical:5}}>
            
            <Text  style={styles.txt3}>US$
            </Text>
         
            <Text  style={styles.txt3}>{totalAmountinUSq}
            </Text>
        
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
</GradientBackground>

);
};
const CartItem = ({ item, onDelete }) => {
  return (
    // <View style={styles.container}>
   

      <View style={styles.subcontainer}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View>
            <View style={styles.item}>
            <View>
              <View style ={{flex:1}}>
              <Text
                numberOfLines={10}
                ellipsizeMode="tail"
                style={styles.txt1}>
                {item.TransactionTypeName}
                <Text
                numberOfLines={10}
                ellipsizeMode="tail"
                style={styles.txt1}>
                {' - PostOfficeBox'}
              </Text>
              </Text>
             
              </View>
            
            
              </View>
              <View style={styles.itemDetails}>
                <Text style={styles.txt3}>-${item.Amount + item.LateFees}</Text>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert(
                      'Warning',
                      'Are you sure you want to delete this item from cart?',
                      [
                        {
                          text: 'Yes',
                          onPress: () =>{ 

                            
                            onDelete(item)                        
                          
                       
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
                  }}>
                  <Icons
                    name={'delete'}
                    Type={Icon.AntDesign}
                    size={rf(2.7)}
                    color={COLORS.red}
                    style={{}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.txt3}>Post Office Box No: 
            
            <Text style={styles.txt1}> {item.LetterBoxNo}</Text>

            
            </Text>


            <Text style={styles.txt3}>Customer Name: 
            
            <Text style={styles.txt1}> {item.RefCustomerName}</Text>

            
            </Text>
            <Text style={styles.txt3}>Subscription Fees: 
            
            <Text style={styles.txt1}> {item?.Amount}</Text>

            
            </Text>
            <Text style={styles.txt3}>Late Fees: 
            
            <Text style={styles.txt1}> {item?.LateFees}</Text>

            
            </Text>
          </View>
        </View>
      </View>
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
  subcontainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.lightGreySelection,
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    // width: wp("90%")
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    // gap:5,
     width: wp('85%'),
  },
  itemDetails: {
    // justifyContent:"flex-end",
    // flex:1,
    flexDirection: 'column',
    // gap: 10,
    alignItems: 'center',
  },
  txt1: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: rf(1.8),
    width:wp("73%"),
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
});




