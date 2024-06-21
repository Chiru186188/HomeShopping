import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, TextInput} from 'react-native';
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
import CustomButtons from '../../components/CustomButtons';
import CustomButtonsBAndP from '../../components/CustomButtonsBAndP';
import { useSelector } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import useRedux from '../../components/useRedux';
import { SavePBDSPaymentSlice, SavePOCDSPaymentSlice, getPBDSPaymentSlice, getPOCDSPaymentSlice } from '../../redux/slice/categories';
import utills from '../../utills';

export default function PBDSPayments({navigation}) {
  const [transcType, settranscType] = useState('');
  const [acount, setacount] = useState('');
  const [HSacount, setHSacount] = useState('');

  const [amount, setamount] = useState('');
  const [RefNo, setRefNo] = useState('');
  const [RefCusName, setRefCusName] = useState('');
  const [PoBoxno, setPoBoxno] = useState('');
  const [invoice, setinvoice] = useState('');

  const [isChecked, setIsChecked] = useState(false);

  const userData = useSelector(state => state.auth.userData);
  const [amountUs, setamountUs] = useState('');
  const exchangeRate = 2.6882;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([ 
   
  ]);

  const [openYear, setOpenYear] = useState(false);
  const [valueYear, setValueYear] = useState(null);
  const [itemsYear, setItemsYear] = useState([
   
   
  ]);
  const {dispatch} = useRedux();

  useEffect(() => {
   // handleAmountChange("100")
    getPbdspaymentdata()
    return () => {
     
    };
  }, []);
  const getPbdspaymentdata = () => {
    // console.log('FromID',FromID)
  
     let data = {
       Id: userData?.userID,
   
     };
     console.log('dataaaaaaar',data)
   
     dispatch(getPBDSPaymentSlice(data))
       .unwrap()
       .then(res => {
         console.log("res?",res)
         const formattedItems = res?.TransactionTypeId?.map((item) => ({
          label: item.Text,
          value: item.Value,
        }));
    
        console.log("formattedItems",formattedItems)
        setItems(formattedItems);
        console.log("res?????",res?.Amount)
        setamount(res?.Amount.toString())
        if (res?.TransactionTypeId?.length > 0){
      setValue(res?.TransactionTypeId[0]?.Value)
        }



        const formattedItems1 = res?.RenewalYear?.map((item) => ({
          label: item.Text,
          value: item.Value,
        }));
    
      //  console.log("formattedItems",formattedItems1)
        setItemsYear(formattedItems1);
    
        if (res?.RenewalYear?.length > 0){
      setValueYear(res?.RenewalYear[0]?.Value)
        }


        setTransactionFor((res?.data?.TransactionFor).toString())
        
       })
  
       .catch(e => {
         //  setLoading(false);
       });
   };
const handlePress = () => {
};

const handleBackPress = () => {
  // Add your logic for the "Back" button action here
  navigation.goBack()
};

const handleNextPress = () => {
  // Add your logic for the "Next" button action here

  if(value == null){
    utills.errorAlert("Error","Please Select Transaction Type")
    return
  }

  if(amount === ""){
    utills.errorAlert("Error","Please Enter Amount")
    return
  }


  
  SubmitPBDSpaymentdata()
};
const [TransactionFor, setTransactionFor] = useState('');


const SubmitPBDSpaymentdata = () => {
  // console.log('FromID',FromID)

   let data = {
    // HSEZoneAccNo:HSacount,
    userID: userData?.userID,
    Amount:amount,
    Notes:RefNo,
    TransactionTypeId :value,
    RefCustomerName : "",
    ReasonForPayment : "",
    PostOfficeInvoiceNo:invoice,
    RenewalYear:valueYear,
    TransactionFor:TransactionFor
   };
   console.log('dataaaaaaar',data)
 
   dispatch(SavePBDSPaymentSlice(data))
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

  return (
     <GradientBackground>
    <CustomHeader onPress={handlePress} title = "PBDS Service" />
<ScrollView>
    <View>
    <View style={styles.container}>
    <View style={styles.containerTop}>
    <Text  style={styles.Left500Text}>PBDS Service
</Text>
    </View>
<View style={{alignSelf:'center'}}>
{/* <EditTextWithLable
        label="Transaction Type *"
        placeholder="Transaction Type"
        value={transcType}
        onChangeText={settranscType}
        keyboardType="default"
      /> */}

<View style={{ flexDirection: 'row', width: wp("90%"), gap: 0,

  backgroundColor: COLORS.white,
  // paddingHorizontal: wp('1.5%'),
  // marginTop: hp('1%'),
  

}}>
          <Text style={{marginVertical: hp('1%'),
    fontSize: rf(1.8),
    color: COLORS.Lableheading,
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('1%')}}>Transaction Type</Text>
<Text style={{marginTop: hp('1%'),
    fontSize: rf(1.8),
    color: 'red',
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('1%')}}> *</Text>
     
      </View>
    <View style={{
           alignItems: 'center',
     justifyContent: 'center',
      // paddingHorizontal:15,
      marginBottom: hp('1.5%'),
      alignSelf:'center',alignContent:'center'
      ,width:wp("89%"),
      //zIndex: 1, // Add zIndex to ensure the dropdown appears above other elements
      position: 'relative'
    }}>
      <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      listMode='SCROLLVIEW'
      placeholder='Select Account User'
      style={{borderColor:COLORS.Greyscale, borderWidth:2,borderRadius:15,height: hp('8%')
    }}
      textStyle={{fontFamily:FONTFAMILY.Bold,fontSize:rf(1.8)}}
   
   
   />
    </View>



    <View style={{ flexDirection: 'row', width: wp("90%"), gap: 0,

backgroundColor: COLORS.white,
// paddingHorizontal: wp('1.5%'),
// marginTop: hp('1%'),


}}>
  
  <Text style={{marginVertical: hp('1%'),
  fontSize: rf(1.8),
  color: COLORS.Lableheading,
  fontFamily: FONTFAMILY.Medium,
  marginLeft:wp('1%')}}>Renewal Year</Text>
  <Text style={{marginTop: hp('1%'),
  fontSize: rf(1.8),
  color: 'red',
  fontFamily: FONTFAMILY.Medium,
  marginLeft:wp('1%')}}> *</Text>
   
    </View>
  <View style={{
         alignItems: 'center',
   justifyContent: 'center',
    // paddingHorizontal:15,
    marginBottom: hp('1.5%'),
    alignSelf:'center',alignContent:'center'
    ,width:wp("89%"),
    //zIndex: 1, // Add zIndex to ensure the dropdown appears above other elements
    position: 'relative'
  }}>
    <DropDownPicker
    open={openYear}
    value={valueYear}
    items={itemsYear}
    setOpen={setOpenYear}
    setValue={setValueYear}
    setItems={setItemsYear}
    listMode='SCROLLVIEW'
    placeholder='Select Account User'
    style={{borderColor:COLORS.Greyscale, borderWidth:2,borderRadius:15,height: hp('8%')
  }}
    textStyle={{fontFamily:FONTFAMILY.Bold,fontSize:rf(1.8)}}
 
 
 />
  </View>


     {/* <EditTextWithLable
        label="Account *"
        placeholder="Enter Account"
        value={acount}
        onChangeText={setacount}
        keyboardType="default"
      /> */}
        {/* {value === '15' && (

        <EditTextWithLable
        label="Home Shopping/Ezone Account *"
        placeholder="Enter Home Shopping/Ezone Account"
        value={HSacount}
        onChangeText={setHSacount}
        keyboardType="default"
      />

        )}
  {value === '15' && (
<EditTextWithLable
        label="Customer Name *"
        placeholder="Enter Customer Name"
        value={RefCusName}
        onChangeText={setRefCusName}
        keyboardType="default"
      />
      
  )}
  {value === '15' && (

<EditTextWithLable
        label="Invoice *"
        placeholder="Enter Invoice"
        value={invoice}
        onChangeText={setinvoice}
        keyboardType="default"
      />
      )} */}
       {/* <EditTextWithLable
        label="Amount *"
        placeholder="Enter Amount"
        value={amount}
        onChangeText={setamount}
        keyboardType="default"
      /> */}
       

      
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
//
 marginBottom: hp('2%'),
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
       // onChangeText={handleAmountChange}
        keyboardType='decimal-pad'
        style={ {
          flex:1,color: COLORS.Content,
          fontFamily: FONTFAMILY.Bold,
          alignSelf: 'center',
          fontSize: rf(1.8),
        paddingHorizontal:10
        }}
        editable={false}
        maxLength={8}

      />
    </View>


{/* 
       <EditTextWithLable
        label="Note Description"
        placeholder="Enter Note Description"
        value={RefNo}
        onChangeText={setRefNo}
        keyboardType="default"
      /> */}



<CustomButtonsBAndP
        onBackPress={handleBackPress}
        onNextPress={handleNextPress}
        Buttontext={"Proceed To Pay " + amount  }
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
});




