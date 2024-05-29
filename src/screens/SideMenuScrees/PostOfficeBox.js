import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, TextInput, FlatList} from 'react-native';
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
import { SaveAddToCArtSlice, SavePOCDSPaymentSlice, getPOCDSPaymentSlice, getPostBoxPaymentSlice } from '../../redux/slice/categories';
import utills from '../../utills';
import TouchableNativeFeedback from '../../components/TouchableNativeFeedback';
import EditText_WithBackgroundColor from '../../components/EditText_WithBackgroundColor';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function PostOfficeBox({navigation}) {
  const [transcType, settranscType] = useState('');
  const [acount, setacount] = useState('');
  const [HSacount, setHSacount] = useState('');

  const [amount, setamount] = useState('');
  const [RefNo, setRefNo] = useState('');
  const [RefCusName, setRefCusName] = useState('');
  
  const [amountOthers, setamountOthers] = useState('');
  const [latefeesOthers, setlatefeesOthers] = useState('');
  const [PreviousBalOthers, setPreviousBalOthers] = useState('');

  const [RefCusNameOthers, setRefCusNameOthers] = useState('');
  const [amountUsOthers, setamountUsOthers] = useState('');
  const [letterBoxTypeOthers, setletterBoxTypeOthers] = useState('');

  const [PoBoxnoOthers, setPoBoxnoOthers] = useState('');
  const [custID, setcustID] = useState('');

  
  const [invoice, setinvoice] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const userData = useSelector(state => state.auth.userData);
  const [amountUs, setamountUs] = useState('');
  const [dataaa, SetData] = useState(null);

  const exchangeRate = 2.6882;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [cartitems, setItemscartitems] = useState([
   
  ]);
  const [items, setItems] = useState([
   
  ]);
  const [SuggestionsList, setSuggestions] = useState([]);

  const [Amountitems, setAmmountItems] = useState([
   
  ]);
  const [openRY, setOpenRY] = useState(false);
  const [valueRY, setValueRY] = useState(null);
  const [itemsRY, setItemsRY] = useState([
   
  ]);

  const [openLB, setOpenLB] = useState(false);
  const [valueLB, setValueLB] = useState(null);
  const [itemsLB, setItemsLB] = useState([
   
  ]);

  const [openEST, setOpenEST] = useState(false);
  const [valueEST, setValueEST] = useState(null);
  const [itemsEST, setItemsEST] = useState([
   
  ]);

  const [openMRM, setOpenMRM] = useState(false);
  const [valueMRM, setValueMRM] = useState(null);
  const [itemsMRM, setItemsMRM] = useState([
   
  ]);
  const MyCartList  = useSelector(state => state.category.MyCartList);
  const MyCartListArray  = MyCartList?.Data;
  const [selectedValue, setSelectedValue] = useState("My P.O.Box");

  const handleValueChange = (value1) => {
    setSelectedValue(value1);
    if (value1 === "Other P.O.Box"){
      console.log("value",value1)
      setValue(items[0]?.value)
    }
  };
  const [searchList, setsearchList] = useState(false); // New state variable for search loading



  const updateArrayData = (newArrayData) => {
    console.log("CALLLLL")
    setItemscartitems(newArrayData);
  };

//  console.log('MyCartListArray',MyCartListArray)
const RadioButton = ({ label, value, onValueChange, selectedValue }) => {
  return (
    <TouchableOpacity
      style={styles1.radioButton}
      onPress={() => onValueChange(value)}
    >
      <View style={[styles1.radioButtonCircle, { backgroundColor: selectedValue === value ? '#2196F3' : '#fffffff' }]}>
        {selectedValue === value && <View style={styles1.radioButtonInnerCircle} />}
      </View>
      <Text style={styles1.radioButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};
  const {dispatch} = useRedux();

  useEffect(() => {
    getPocdspaymentdata()
    return () => {
     
    };
  }, []);
  const getPocdspaymentdata = () => {
    // console.log('FromID',FromID)
  
     let data = {
       Id: userData?.userID,
   
     };
   //  console.log('dataaaaaaar',data)
   
     dispatch(getPostBoxPaymentSlice(data))
       .unwrap()
       .then(res => {
         console.log("resDATAAAAA?",res)
         const formattedItems = res?.transactionTypeId?.map((item) => ({
          label: item.text,
          value: item.value,
        }));
    
        //console.log("formattedItems",formattedItems)
        setItems(formattedItems);
    
        if (res?.transactionTypeId?.length > 0){
      setValue(res?.transactionTypeId[0]?.value)
        }

        const formattedItemsRY = res?.renewalYear?.map((item) => ({
          label: item.text,
          value: item.value,
        }));
    
        //console.log("formattedItems",formattedItemsRY)
        setItemsRY(formattedItemsRY);
    
       // console.log("dropdownrates?",res?.dropdownrates)

        setAmmountItems(res?.dropdownrates)



        if (res?.renewalYear?.length > 0){
      setValueRY(res?.renewalYear[0]?.value)
        }

        const formattedItemsLB = res?.letterBoxType?.map((item) => ({
          label: item.text,
          value: item.value,
        }));
    
        //console.log("formattedItems",formattedItemsLB)
        setItemsLB(formattedItemsLB);
    
        if (res?.letterBoxType?.length > 0){
      setValueLB(res?.letterBoxType[0]?.value)
        }

        const formattedItemsEST = res?.ezoneSubscriptionType?.map((item) => ({
          label: item.text,
          value: item.value,
        }));
    
        //console.log("formattedItems",formattedItemsEST)
        setItemsEST(formattedItemsEST);
    
        if (res?.ezoneSubscriptionType?.length > 0){
      setValueEST(res?.ezoneSubscriptionType[0]?.value)
        }
       
        const formattedItemsMRM = res?.mailRedirectionMonths?.map((item) => ({
          label: item.text,
          value: item.value,
        }));
    
        //console.log("formattedItems",formattedItemsMRM)
        setItemsMRM(formattedItemsMRM);
    
        if (res?.mailRedirectionMonths?.length > 0){
      setValueMRM(res?.mailRedirectionMonths[0]?.value)
        }
       


        console.log("res?.refCustomerName",res?.refCustomerName)//refCustomerName

        setRefCusName(res?.refCustomerName)
        SetData(res?.data)
        setinvoice(res?.data?.letterBoxNo ?? "")
        setTransactionFor((res?.data?.transactionFor ?? "").toString())

       })
  
       .catch(e => {
         //  setLoading(false);
       });
   };


   async function handleSearchChange(text) {
    if (text.trim() === "") {
      setPoBoxnoOthers("")

      // Clear suggestions when text input is empty
      setSuggestions([]);
      setsearchList(false);
      return;
    }
setPoBoxnoOthers(text)
    // setCurrentPage(pageNo == undefined ? 1 : pageNo);
    console.log("Call");
    const limit = 10;
    try {
      // setSearchLoading(true); // Set search loading to true when search starts
//
      let url = `http://hsstrain.apis.gov.ai/api/AccountApi/SearchByPoBoxNo?term=${text}`
      const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

      console.log("url===", url);
      const result = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json", // Set your content type if needed
        },
      })
        .then((res) => res.json())
        .then((res) => res);
      // 
      console.log("DATA===", result?.data);

      if (result?.data?.length > 0) {
        //  renderSuggestions(result?.data)
        console.log("DATA===", result?.data);

        const formattedUsers = result.data.map((user) => ({
          CustomerId: user.CustomerId,
          code: user.code,
          label: user.label,
          letterboxsize: user.letterboxsize,
          subscriptionamount: user.subscriptionamount,
        }));

        console.log("formattedUsers", formattedUsers);
        setsearchList(true);

        setSuggestions(formattedUsers);
        // setListEnd(true);
        // setIsLoading(false);
      } 
      
    } catch (err) {
      // setIsLoading(false);
      // setsearchList(false);

      console.log("Opps there seems to be an error");
    } finally {
      // setSearchLoading(false); // Set search loading to false when search completes
    }
  }


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

  // if(valueRY == null){
  //   utills.errorAlert("Error","Please Select Renewal Year")
  //   return
  // }
  // if(valueLB == null){
  //   utills.errorAlert("Error","Please Select Post Office Box type")
  //   return
  // }
  if(selectedValue === "My P.O.Box"){
  if(amount === ""){
    utills.errorAlert("Error","Please Enter Amount")
    return
  }

  if(RefCusName === ""){
    utills.errorAlert("Error","Please Enter Ref. Customer Name")
    return
  }
  if(invoice === ""){
    utills.errorAlert("Error","Please Enter Invoice Number")
    return
  }
}
else {
  if(amountOthers === ""){
    utills.errorAlert("Error","Please Enter Amount")
    return
  }

  if(RefCusNameOthers === ""){
    utills.errorAlert("Error","Please Enter Ref. Customer Name")
    return
  }
  if(PoBoxnoOthers === ""){
    utills.errorAlert("Error","Please Enter P O box Number Number")
    return
  }
}


  SubmitPOCDSpaymentdata()
};
const [TransactionFor, setTransactionFor] = useState('');


const SubmitPOCDSpaymentdata = () => {
  // console.log('FromID',FromID)

   let data = {
    CustomerID: selectedValue === "My P.O.Box" ?  "0" : custID ,
    TransactionTypeId:value,
    userID: userData?.userID,
    Amount: selectedValue === "My P.O.Box" ?  amount : amountOthers,
    Notes:RefNo,
    TransactionTypeId :value,
    RefCustomerName : selectedValue === "My P.O.Box" ?  RefCusName :RefCusNameOthers,
   EzoneAccountNo: dataaa?.ezoneAccountNo ,
    InvoiceNo: selectedValue === "My P.O.Box" ?  invoice : PoBoxnoOthers,
    RenewalYear:valueRY,
    TransactionFor:TransactionFor,
    LetterBoxNo:dataaa?.letterBoxNo,
    TempId:dataaa?.TempId,
    LetterBoxType: selectedValue === "My P.O.Box" ?  valueLB :letterBoxTypeOthers,
    Freight: dataaa?.freight,
    Fuel: dataaa?.fuel,
    Insurance: dataaa?.insurance,
    EzoneInvoiceParcelNo: dataaa?.ezoneInvoiceParcelNo,
    SuppliersName: dataaa?.suppliersName,
    GetEndPointJsonData: dataaa?.getEndPointJsonData,
    ListTrans: cartitems,

   };
   console.log('dataaaaaaar',data)
 
   dispatch(SaveAddToCArtSlice(data))
     .unwrap()
     .then(res => {
       console.log("res???",res)

 if (res.Message === "Added to cart."){
 // console.log("res???",res.Message)
//   processResponse(res)  
// const redirectUrl = res.Data;
// 
// const newArray = [res?.Data];


setItemscartitems(res?.Data)

// navigation.navigate(SCREENS.LinkOpenScreenNEW,{item:redirectUrl})
//
utills.successAlert('', res?.Message);
// setItemscartitems[res?.Data]


 }else{
  utills.errorAlert('', res.Message);
  return;
}


     })
 
 
 
 
 
     .catch(e => {
       //  setLoading(false);
     });
 };

 const handleTransactionTypeChange = value => {
  console.log("HIIIII")
  console.log("Amountitems",Amountitems)
  console.log("value",value)

  const selectedRate = Amountitems?.find(rate => rate.id === parseInt(value));
  console.log("selectedRate",selectedRate)

  if (selectedRate) {
    // const amountNumber = parseFloat(text.replace('EC$', ''));

    setamount(selectedRate.amount.toString());
    const convertedAmountUsd = (selectedRate.amount / exchangeRate).toFixed(2);
    setamountUs(`(US$ ${convertedAmountUsd})`);
  } else {
    setamount("100");
    const convertedAmountUsd = (100 / exchangeRate).toFixed(2);
    setamountUs(`(US$ ${convertedAmountUsd})`);// Reset the US$ amount if the input is not a valid number

  }
};

const handleTransactionTypeChange2 = value2 => {
  console.log("HIIIII")
  console.log("Amountitems",itemsMRM)
  console.log("value",value2)

  const selectedRate = itemsMRM?.find(rate => rate.value === value2);
  console.log("selectedRate",selectedRate)

  if (selectedRate) {
    // const amountNumber = parseFloat(text.replace('EC$', ''));
    const parts = (selectedRate.label).split('$');
    console.log(parts);
    setamount(parts[1]);
    const convertedAmountUsd = (parts[1] / exchangeRate).toFixed(2);
    setamountUs(`(US$ ${convertedAmountUsd})`);
  }
};
const renderSuggestionItem = ({ item }) => (
  <TouchableOpacity
    style={styles2.suggestionItem}
    onPress={() => handleSuggestionPress(item)}
  >
    <Text>{item.label}</Text>
  </TouchableOpacity>
);

const handleSuggestionPress = (item) => {
  // Do something when a suggestion is pressed, such as filling the text field with the selected value
  console.log("itemid========", item.CustomerId);
  setcustID(item.CustomerId)
  setPoBoxnoOthers(item.label);
  setRefCusNameOthers(item.code)
  setamountOthers(item?.subscriptionamount.toString() ?? "0.0");
  setlatefeesOthers(item?.latefee?.toString() ?? "0.0");
  setPreviousBalOthers(item?.CfAmount?.toString() ?? "0.0");

  setletterBoxTypeOthers(item.letterboxsize)
  console.log("item.subscriptionamount========",item.subscriptionamount);

    const convertedAmountUsd = (item.subscriptionamount / exchangeRate).toFixed(2);
    setamountUsOthers(`(US$ ${convertedAmountUsd})`);
    console.log("item.convertedAmountUsd========",convertedAmountUsd);

  // setId(item.id);
  setsearchList(false);
  // You can also perform other actions here based on the selected suggestion
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
    <CustomHeader onPress={handlePress} title = "Post Office box Service" />
<ScrollView>
    <View>
    <View style={styles.container}>
    <View style={styles.containerTop}>
    <Text  style={styles.Left500Text}>Post Office box Service
</Text>


<TouchableNativeFeedback 
onPress={() => 
navigation.navigate(SCREENS.CartListpayment,{Cartlist:cartitems,updateArrayData})

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
        <Text style={styles.badgeText}>{cartitems?.length}</Text>
      </View>
    </TouchableNativeFeedback>


    </View>
<View style={{alignSelf:'center'}}>
{/* <EditTextWithLable
        label="Transaction Type *"
        placeholder="Transaction Type"
        value={transcType}
        onChangeText={settranscType}
        keyboardType="default"
      /> */}
{/* {selectedValue === 'Other P.O.Box' && ( */}
  <Text style={{marginVertical: hp('1%'),
    fontSize: rf(1.8),
    color: COLORS.red,
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('1%')}}>A late fee of EC $20.00 will automatically be applied to Post Office boxes if payment is received after 31st January of each year.
</Text>
{/* )} */}
<Text style={{marginVertical: hp('1%'),
    fontSize: rf(1.8),
    color: COLORS.Lableheading,
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('1%')}}>I want to Pay Subscription fee
</Text>
<View style={styles1.container}>
      <RadioButton
        label="My P.O.Box"
        value="My P.O.Box"
        selectedValue={selectedValue}
        onValueChange={handleValueChange}
      />
      <RadioButton
        label="Other P.O.Box"
        value="Other P.O.Box"
        selectedValue={selectedValue}
        onValueChange={handleValueChange}
      />
    </View>


    {selectedValue === 'My P.O.Box' && (

<>

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
      alignSelf:'center',alignContent:'center',
width:wp("89%"),
zIndex:7, // Add zIndex to ensure the dropdown appears above other elements
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
      placeholder='Select Transaction Type'
      //  style={[styles.dropdown, { zIndex: 2 }]}
onChangeValue=
{() => 
  handleTransactionTypeChange(value)  
  }
      style={{borderColor:COLORS.Greyscale, borderWidth:2,borderRadius:15,height: hp('8%')
    ,zIndex:1}}
      textStyle={{fontFamily:FONTFAMILY.Bold,fontSize:rf(1.8)}}
      maxHeight={300}
      // onChangeItem={item => handleTransactionTypeChange(item.value)}

   />
    </View>

  {value === '44' && (
<>
<View style={{ flexDirection: 'row', width: wp("90%"), gap: 0,

backgroundColor: COLORS.white,
// paddingHorizontal: wp('1.5%'),
// marginTop: hp('1%'),
width:wp("89%")


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
    alignSelf:'center',alignContent:'center',
    width:wp("89%") ,
    zIndex: 6, // Add zIndex to ensure the dropdown appears above other elements
    position: 'relative'
  }}>
    <DropDownPicker
    open={openRY}
    value={valueRY}
    items={itemsRY}
    setOpen={setOpenRY}
    setValue={setValueRY}
    setItems={setItemsRY}
    listMode='SCROLLVIEW'
    placeholder='Select Renewal Year'
    style={{borderColor:COLORS.Greyscale, borderWidth:2,borderRadius:15,height: hp('8%'),width:wp("89%")
    ,zIndex:2}}
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
  marginLeft:wp('1%')}}>Post Office Box Type</Text>
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
    zIndex: 3, // Add zIndex to ensure the dropdown appears above other elements
    position: 'relative'

  }}>
    <DropDownPicker
    open={openLB}
    value={valueLB}
    items={itemsLB}
    setOpen={setOpenLB}
    setValue={setValueLB}
    setItems={setItemsLB}
    listMode='SCROLLVIEW'
    placeholder='Select Post Office Box Type'
    style={{borderColor:COLORS.Greyscale, borderWidth:2,borderRadius:15,height: hp('8%'),zIndex:3
  }}
    textStyle={{fontFamily:FONTFAMILY.Bold,fontSize:rf(1.8)}}
 
 
 />
  </View>
 
  </>
  )}
 {value === '25' && (
<>
<View style={{ flexDirection: 'row', width: wp("90%"), gap: 0,

backgroundColor: COLORS.white,
// paddingHorizontal: wp('1.5%'),
// marginTop: hp('1%'),


}}>
        <Text style={{marginVertical: hp('1%'),
  fontSize: rf(1.8),
  color: COLORS.Lableheading,
  fontFamily: FONTFAMILY.Medium,
  marginLeft:wp('1%')}}>Mail Redirection Months</Text>
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
    open={openMRM}
    value={valueMRM}
    items={itemsMRM}
    setOpen={setOpenMRM}
    setValue={setValueMRM}
    setItems={setItemsMRM}
    listMode='SCROLLVIEW'
    placeholder='Mail Redirection Months'
    style={{borderColor:COLORS.Greyscale, borderWidth:2,borderRadius:15,height: hp('8%')
    ,zIndex:4}}
    textStyle={{fontFamily:FONTFAMILY.Bold,fontSize:rf(1.8)}}
    onChangeValue=
    {() => 
      handleTransactionTypeChange2(valueMRM)  
      }
 
 />
  </View>
</> 
 )}  
<EditTextWithLable
        label="Post Office Box No *"
        placeholder="Enter Invoice"
        value={invoice}
        onChangeText={setinvoice}
        keyboardType="default"
        disable={true}
      />


    <EditTextWithLable
        label="Ref. Customer Name *"
        placeholder="Enter Customer Name"
        value={RefCusName}
        onChangeText={setRefCusName}
        keyboardType="default"
        disable={true}
      />

         
         <View style={{ flexDirection: 'row', width: wp("90%"), gap: 0,

backgroundColor: COLORS.white,

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

backgroundColor: COLORS.lightGreySelection,
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
        onChangeText={handleAmountChange}
        keyboardType='decimal-pad'
        editable={false}
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
       <EditTextWithLable
        label="Note Description"
        placeholder="Enter Note Description"
        value={RefNo}
        onChangeText={setRefNo}
        keyboardType="default"
      />
</>
      )}





{selectedValue === 'Other P.O.Box' && (

<>

<View style={{ flexDirection: 'row', width: wp("90%"), gap: 0,

  backgroundColor: COLORS.white,
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
      marginBottom: hp('1.5%'),
      alignSelf:'center',alignContent:'center',
width:wp("89%"),
zIndex:7, // Add zIndex to ensure the dropdown appears above other elements
 position: 'relative'
    }}>
      <DropDownPicker
      open={open}
      value={value}
      items={[items[0]]} 
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      listMode='SCROLLVIEW'
      placeholder='Select Transaction Type'
      //  style={[styles.dropdown, { zIndex: 2 }]}
// onChangeValue=
// {() => 
//   handleTransactionTypeChange(value)  
//   }
      style={{borderColor:COLORS.Greyscale, borderWidth:2,borderRadius:15,height: hp('8%')
    ,zIndex:1}}
      textStyle={{fontFamily:FONTFAMILY.Bold,fontSize:rf(1.8)}}
      maxHeight={300}
      // onChangeItem={item => handleTransactionTypeChange(item.value)}

   />
    </View>

<View style={{ flexDirection: 'row', width: wp("90%"), gap: 0,

backgroundColor: COLORS.white,
width:wp("89%")


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
    alignSelf:'center',alignContent:'center',
    width:wp("89%") ,
    zIndex: 6, // Add zIndex to ensure the dropdown appears above other elements
    position: 'relative'
  }}>
    <DropDownPicker
    open={openRY}
    value={valueRY}
    items={itemsRY}
    setOpen={setOpenRY}
    setValue={setValueRY}
    setItems={setItemsRY}
    listMode='SCROLLVIEW'
    placeholder='Select Renewal Year'
    style={{borderColor:COLORS.Greyscale, borderWidth:2,borderRadius:15,height: hp('8%'),width:wp("89%")
    ,zIndex:2}}
    textStyle={{fontFamily:FONTFAMILY.Bold,fontSize:rf(1.8)}}
 
 
 />
  </View>

 


    {/* <View style={{ flexDirection: 'row', width: wp("90%"), gap: 0,

backgroundColor: COLORS.white,
// paddingHorizontal: wp('1.5%'),
// marginTop: hp('1%'),


}}>
        <Text style={{marginVertical: hp('1%'),
  fontSize: rf(1.8),
  color: COLORS.Lableheading,
  fontFamily: FONTFAMILY.Medium,
  marginLeft:wp('1%')}}>Post Office Box Type</Text>
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
    zIndex: 3, // Add zIndex to ensure the dropdown appears above other elements
    position: 'relative'

  }}>
    <DropDownPicker
    open={openLB}
    value={valueLB}
    items={itemsLB}
    setOpen={setOpenLB}
    setValue={setValueLB}
    setItems={setItemsLB}
    listMode='SCROLLVIEW'
    placeholder='Select Post Office Box Type'
    style={{borderColor:COLORS.Greyscale, borderWidth:2,borderRadius:15,height: hp('8%'),zIndex:3
  }}
    textStyle={{fontFamily:FONTFAMILY.Bold,fontSize:rf(1.8)}}
 
 
 />
  </View> */}
 
<EditTextWithLable
        label="Post Office Box No *"
        placeholder="Enter Post Office Box No"
        value={PoBoxnoOthers}
        onChangeText={handleSearchChange}
        keyboardType="default"
       
      />

      
  {searchList && (
                // <FlatList
                // scrollEnabled={false}
                  // style={[
                  //   styles.suggestionList,
                  //   { borderWidth: SuggestionsList.length > 0 ? 1 : 0 },
                  // ]}
                //   // keyboardShouldPersistTaps={"handled"}
                //   data={SuggestionsList}
                //   renderItem={renderSuggestionItem}
                //   keyExtractor={(item) => item.CustomerId.toString()}
                // />

                <ScrollView  style={[
                  styles.suggestionList,
                  { borderWidth: SuggestionsList.length > 0 ? 1 : 0 },
                ]}>
  {SuggestionsList.map((item) => (
    renderSuggestionItem({ item }) // Assuming renderSuggestionItem is a function that renders each item
  ))}
</ScrollView>
              )}
<EditTextWithLable
        label="Post Office Box Type *"
        placeholder="Enter Post Office Box Type"
        value={letterBoxTypeOthers}
        onChangeText={setletterBoxTypeOthers}
        keyboardType="default"
       
      />
    <EditTextWithLable
        label="Ref. Customer Name *"
        placeholder="Customer Name"
        value={RefCusNameOthers}
        onChangeText={setRefCusNameOthers}
        keyboardType="default"
        disable={true}
      />

         
         <View style={{ flexDirection: 'row', width: wp("90%"), gap: 0,

backgroundColor: COLORS.white,

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
backgroundColor:COLORS.lightGreySelection,
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
        placeholder="Amount"
        value={amountOthers}
       // onChangeText={handleAmountChange}
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
    <Text style ={ {
          color: COLORS.Content,
          fontFamily: FONTFAMILY.Medium,
          alignSelf: 'center',
          fontSize: rf(1.8),
       // paddingHorizontal:10
       width:wp("88%")
        }}>
{"(Subscription Amount : "+ amountOthers + ",Late Fees : " +latefeesOthers + ",Previous balance : " +PreviousBalOthers + ")"}
 </Text>
       <EditTextWithLable
        label="Note Description"
        placeholder="Enter Note Description"
        value={RefNo}
        onChangeText={setRefNo}
        keyboardType="default"
      />
</>
      )}



<CustomButtonsBAndP
        onBackPress={handleBackPress}
        onNextPress={handleNextPress}
        Buttontext={"Add To Cart"}
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


  image: {
    width: 200,
    height: 200,
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
 suggestionList: {
  position: 'absolute',
  // left: /* Adjust this value according to your layout */,
  width: wp("90%"),
  maxHeight: 140,
  backgroundColor: "white",
  top: 490,
  borderColor: Colors.black,
  borderRadius: 10,
  zIndex: 999, // Ensure the suggestion list is above other components
},
containerTop:
 {backgroundColor : COLORS.lightGreySelection,alignContent:'center',justifyContent:'space-between',padding:15,borderTopLeftRadius: 10, // Set the top left border radius
    borderTopRightRadius: 10,
  flexDirection:'row',
  alignContent:'center'
  },
   
   
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



const styles1 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
   gap: 30,
   marginBottom:10
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonInnerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#ffffff',
  },
  radioButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
});
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: hp("1.2%"),
    width: wp("90%"),
    alignSelf: "center",
    zIndex: 999,
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: Colors.white,
    height: 50,
    borderRadius: 5,
  },
  input: {
    width: wp("85%"),
    alignSelf: "center",
    paddingHorizontal: 5,
    textAlignVertical: "top",
    paddingVertical: 0,
    color:Colors.black,
  },
  suggestionItem: {
    padding: 10,
    // borderWidth: 1,
    //borderColor: 'lightgray',
    // width:wp("90%")
  },
});