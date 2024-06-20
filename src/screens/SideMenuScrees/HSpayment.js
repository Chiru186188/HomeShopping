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
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import CustomButtons from '../../components/CustomButtons';
import CustomButtonsBAndP from '../../components/CustomButtonsBAndP';
import useRedux from '../../components/useRedux';
import { useSelector } from 'react-redux';
import { SaveHSPaymentSlice, getHSPaymentSlice } from '../../redux/slice/categories';
import utills from '../../utills';

export default function HSpayment({navigation}) {
  const [amount, setamount] = useState('');
  const [RefNo, setRefNo] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const {dispatch} = useRedux();
  const userData = useSelector(state => state.auth.userData);
  const [currencySymbol, setCurrencySymbol] = useState('');
  const [amountUs, setamountUs] = useState('');

useEffect(() => {
  //getHSpaymentdata()
  return () => {
   
  };
}, []);

const handlePress = () => {
};

const handleBackPress = () => {
  // Add your logic for the "Back" button action here
  navigation.goBack()
};

const exchangeRate = 2.6882;
//
const getHSpaymentdata = () => {
  // console.log('FromID',FromID)

   let data = {
     Id: userData?.userID,
 
   };
   console.log('dataaaaaaar',data)
 
   dispatch(getHSPaymentSlice(data))
     .unwrap()
     .then(res => {
       console.log("res?",res)
 
     })
  .catch(e => {
       //  setLoading(false);
     });
 };

const handleNextPress = () => {

 if(amount === ""){
  utills.errorAlert("Error","Please Enter Amount")
  return
}

 SubmitHSpaymentdata()
};
 const SubmitHSpaymentdata = () => {
  // console.log('FromID',FromID)

   let data = {
    userID: userData?.userID,
    Amount:amount,
    Notes:RefNo

   };
   console.log('dataaaaaaar',data)
 
   dispatch(SaveHSPaymentSlice(data))
     .unwrap()
     .then(res => {
       console.log("res???",res)

 if (res.Message === "success"){
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
 const handleAmountChange = (text) => {
  // Ensure the input always starts with "EC$"
  

  const amountNumber = parseFloat(text.replace('EC$', ''));

  // Check if the entered text is a valid number
  if (!isNaN(amountNumber)) {
    setamount(text);
    // Convert to US$ and set the state
    const convertedAmountUsd = (amountNumber / exchangeRate).toFixed(2);
    setamountUs(`(US$ ${convertedAmountUsd})`);
  } else {
    // If the entered text is not a valid number, only update the EC$ amount
    setamount(text);
    setamountUs(''); // Reset the US$ amount if the input is not a valid number
  }
};

const handleBlur = () => {
  // If the input is empty, set it to "EC$0"
  if (amount === '' || amount === 'EC$') {
    setamount('EC$0');
  }
};

const GoToNext = () => {
}
  return (
     <GradientBackground>
    <CustomHeader onPress={handlePress} title = "Home Shopping - Deposit" />
<ScrollView>
    <View>
    <View style={styles.container}>
    <View style={styles.containerTop}>
    <Text  style={styles.Left500Text}>Deposit Amount
</Text>
    </View>
    {/* //Please enter your EZone amount # and EZone Password. */}

    {/* <View style={{alignSelf:'flex-start',marginLeft:10}}>
            <Text style={styles.txt1}>
            Please enter your{' '}
              <Text style={styles.textDanger}>Home Shopping</Text> amount # and 
              <Text style={styles.textDanger}> Home Shopping</Text> Password.
            </Text>
          </View> */}
<View style={{alignSelf:'center'}}>
<View style={{ flexDirection: 'row', width: wp("90%"), gap: 0,

  backgroundColor: COLORS.white,
  // paddingHorizontal: wp('1.5%'),
  // marginTop: hp('1%'),
  

}}>
          <Text style={{marginVertical: hp('1%'),
    fontSize: rf(1.8),
    color: COLORS.Lableheading,
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('1%')}}>Amount</Text>
<Text style={{marginTop: hp('1%'),
    fontSize: rf(1.8),
    color: 'red',
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('1%')}}> *</Text>
     
      </View>

<View style={{ flexDirection: 'row', width: wp("90%"), gap: 0,

  backgroundColor: COLORS.white,
  // paddingHorizontal: wp('1.5%'),
  // marginTop: hp('1%'),
  flexDirection: 'row',
  height: hp('8%'),
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  borderColor: COLORS.Greyscale,borderRadius:10,
   width : wp("89%")

}}>
  <View style={{backgroundColor:COLORS.Greyscale,height: hp('8%'),borderBottomLeftRadius:10,borderTopLeftRadius:10,paddingHorizontal:10,paddingVertical:hp("2%")}}
   >
        <Text style={styles.txt3}>EC$</Text>
        </View>
        <TextInput
          placeholder="Enter Amount"
          value={amount}
          onChangeText={handleAmountChange}
          keyboardType='decimal-pad'
          style={ {
            flex:1,color: COLORS.Content,
            fontFamily: FONTFAMILY.Bold,
            alignSelf: 'center',
            fontSize: rf(1.8),
          paddingHorizontal:10
          }}
          maxLength={8}

        />
      </View>
<View style={{ flexDirection: 'row', width: wp("90%"), gap: 5}}>

{/* <EditTextWithLable
  label=""
  placeholder=""
  value={"EC$"}
  onChangeText={handleAmountChange}
  keyboardType="default"
  style={{ flex: 1, marginRight: 0 , width: wp("14%"),backgroundColor:COLORS.lightGreySelection}} // Set flex to 1
/> */}

{/* <EditTextWithLable
  label="Amount # *"
  placeholder="Enter Amount"
  value={amount}
  onChangeText={handleAmountChange}
  keyboardType="default"
  style={{ flex: 1, marginLeft: 0 , width: wp("76%")}} // Set flex to 1
/> */}
</View>

       <EditTextWithLable
        label="Reference No/Note Description"
        placeholder="Enter Reference No/Note Description"
        value={RefNo}
        onChangeText={setRefNo}
        keyboardType="default"
        description={true}
style={{height:150}}
      />

<CustomButtonsBAndP
        onBackPress={handleBackPress}
        onNextPress={handleNextPress}
        Buttontext={"Proceed To Pay " + amountUs  }
      />
     </View>

  
    </View>

    {/* <View style={styles.container}>
    <View style={styles.containerTop}>
    <Text  style={styles.Left500Text}>Cart Total (EC$66.67)</Text>
    </View>


    <View style={styles.row}>
            
            <Text  style={styles.Left500Text}>Customs Charges
            </Text>
         
            <Text  style={styles.Left500BOLDText}>$0.00
            </Text>
        
            </View>  


   



          
        
             

             

             {/* <View style={styles.row}>
            
            <Text  style={styles.Left500BOLDTextT}>Total Amount
            </Text>
         
            <Text  style={styles.Left500BOLDTextT}>$66.67
            </Text>
        
            </View>   
            <View style={{alignSelf:'center'}}>
              <View style={{height:50}}></View>
        <CustomBlueButton
          title="Proceed To Pay (US$66.67)"
          onPress={GoToNext}
          buttonStyle={styles.signUpButton} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(1.8)}} // Custom text style
        />       
                    </View>    */}
   
    {/* </View>    */}
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
  textDanger: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: rf(1.8),
    color: COLORS.CancelRED,
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
   height: hp('8%')
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




