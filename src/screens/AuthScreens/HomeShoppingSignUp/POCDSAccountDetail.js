import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React from 'react';
 import {COLORS, CONSTANTS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES} from '../../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../../common/responsiveFunction';

import { useEffect,useState } from 'react';
import GradientBackground from '../../../components/GradientBackground';
import HeaderWithBackButton from '../../../components/HeaderWithBackButton';
import EditText_WithBackgroundColor from '../../../components/EditText_WithBackgroundColor';
import CustomButtons from '../../../components/CustomButtons';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import Icons, { Icon } from '../../../components/Icons';
import { ColorSpace } from 'react-native-reanimated';
// import CustomRadioButtons from '../../../components/CustomRadioButtons';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomHeader from '../../../components/CustomHeader';



import {
 
  History_Icon1,
  History_Icon2,
  History_Icon3,
  History_Icon4,
  History_Icon5,
  History_Icon6,
  History_Icon7,
  History_Icon8
  
} from '../../../components/Svg';
import { useSelector } from 'react-redux';
import { EditPOCDSCustomerDetailsSlice, PrintPOCDSReportSlice, PrintReportSlice, getAccountHistorySlice, getCustomerDetailsSlice, getPOCDSAccountHistorySlice, getPOCDSCustomerDetailsSlice, getRBCustomerDetailsSlice, getRZAccountHistorySlice, savePOCDSCostumerDetails } from '../../../redux/slice/categories';
import useRedux from '../../../components/useRedux';
import utills from '../../../utills';
import TouchableNativeFeedback from '../../../components/TouchableNativeFeedback';

export default function POCDSAccountDetail({navigation}) {
  const route = useRoute();
  const {dispatch} = useRedux();
  const userData = useSelector(state => state.auth.userData);
  const [AccountId, setAccountId] = useState('');
  const [CustId, setCustId] = useState('');
  const [enableText, setenableText] = useState(true);

   //const { From ,FromID} = route.params;
const [open, setOpen] = useState(false);
const [value, setValue] = useState(null);
const [items, setItems] = useState([
  // {label: 'User1', value: 'User1'},
  // {label: 'User2', value: 'User2'},
  // {label: 'User3', value: 'User3'},

  // {label: 'User4', value: 'User4'},
 
]);

const [openPOBox, setOpenPOBox] = useState(false);
const [valuePOBox, setValuePOBox] = useState(null);
const [itemsPOBox, setItemsPOBox] = useState([
]);



const [openLocation, setOpenLocation] = useState(false);
const [valueLocation, setValueLocation] = useState("");
const [itemsLocation, setItemsLocation] = useState([
]);
useEffect(() => {
  dispatch(savePOCDSCostumerDetails(null))

  getCustomerdata()
  return () => {
   
  };
}, []);

const handlPrintHistory = () => {
//?CustomerId=4236&AccountId=3671&type=Hs

  let data = {
    ID: CustId,//userData?.userID,
    
  };
  // console.log('dataaaaaaar',data)

  dispatch(PrintPOCDSReportSlice(data))
    .unwrap()
    .then(res => {
      console.log("res?",res)
       if  (res?.statusCode == 200){
          navigation.navigate(SCREENS.PDFViewer,{item :res?.downloadLink });

        }else{
          utills.errorAlert(res?.message)
        }

    })
    .catch(e => {
      //  setLoading(false);
    });
};
const handleHistoryReport = () => {
  //?CustomerId=4236&AccountId=3671&type=Hs
  
   
        navigation.navigate(SCREENS.AccountTransactionHistoryDetails);
  
    
  };

const getCustomerdata = () => {
 // console.log('FromID',FromID)
 console.log('userData',userData)

  let data = {
    Id: userData?.userID.toString(),
  };
  console.log('dataaaaaaar',data)

  dispatch(getPOCDSCustomerDetailsSlice(data))
    .unwrap()
    .then(res => {
     // 

    //   console.log("res?.aaData?.OpeningAmount",res?.aaData?.OpeningAmount)

   
     const formattedItems = res?.ddlCustomer?.map((item) => ({
      label: item.Text,
      value: item.Value,
    }));

 //   console.log("formattedItems",formattedItems)
    setItems(formattedItems);

    if (res?.ddlCustomer?.length > 0){
  setValue(res?.ddlCustomer[0]?.Value)
    }

  //   const formattedItems2 = res?.SelectLetterBoxId?.map((item) => ({
  //     label: item.Text,
  //     value: item.Value,
  //   }));

  //   console.log("formattedItems",formattedItems2)
  //   setItemsPOBox(formattedItems2);

  //   if (res?.SelectLetterBoxId?.length > 0){
  // setValuePOBox(res?.SelectLetterBoxId[0]?.Value)
  //   }

    const formattedItems3 = res?.DeliveryAddress?.map((item) => ({
      label: item.Text,
      value: item.Value,
    }));

   // console.log("formattedItems",formattedItems3)
    setItemsLocation(formattedItems3);

  //   if (res?.DeliveryAddress?.length > 0){
  // setValueLocation(res?.DeliveryAddress[0]?.Value)
  //   }
    setValueLocation(res?.aaData?.DeliveryAddress)
    console.log("res?",res?.aaData)

    setHSaccountno(res?.aaData?.HSAccount);

    setEZaccountno(res?.aaData?.EzoneAccount);
    setEZaccountno1(res?.aaData?.EzoneAccount);

    setaccountOPDate(utills.getDateBeforeT(res?.aaData?.AccountOpeningDate));
    setaccountOPAmnt(res?.aaData?.OpeningAmount?.toString());
    setsubscriptionDate(utills.getDateBeforeT(res?.aaData?.SubscriptionDueDate));
    setaccountStatts(res?.aaData?.AccountStatus === 1 ? 'ACTIVE' : 'INACTIVE');
    setFirstName(res?.aaData?.FirstName);
    setlastName(res?.aaData?.LastName);
    setPhysicalAddress(res?.aaData?.DeliveryInstructions);
    setPoboxnu(res?.aaData?.POBox);
    setEmailAdd(res?.aaData?.Email);
    setMobilePhone(res?.aaData?.Phone);
    setAccountId(res?.aaData?.AccountId);
    setCustId(res?.aaData?.CusId);
// setAllotedPoboxnuPoboxnu(res?.aaData?.LetterBoxCode)
// setAdd1(res?.aaData?.AdditionalHouseholdAddress1);
// setAdd2(res?.aaData?.AdditionalHouseholdAddress2);
// setAdd3(res?.aaData?.AdditionalHouseholdAddress3);
//AccountId : 4370
   getAccountHistory(res?.aaData?.CusId)
 })

.catch(e => {
      //  setLoading(false);
    });
};
const getAccountHistory = (accountID) => {

  let data = {
    Id    : accountID,
    // CusId : custId,
    // sEcho:"1",
    // iColumns:11,
    // sSearch:null,
    // iDisplayLength:25,
    // iDisplayStart:0,
    // iSortingCols:1,
    // sColumns:"TransactionDate%2CTransactionType%2CRefCustomerName%2CParcelNo.%2CRecieptNo%2CParcelDetails%2Ctaxableamount%2CGoodsDescription%2CCashier%2CReceivedBy%2CAction"

  };
  console.log('dataaaaaaar',data)

  dispatch(getPOCDSAccountHistorySlice(data))
    .unwrap()
    .then(res => {
      console.log("res",res)

    })
    .catch(e => {
      //  setLoading(false);
    });
};


const CostumerDetails  = useSelector(state => state.category.POCDSCostumerDetails);
const AccountHistory  = useSelector(state => state.category.POCDSAccountHistory);
const AccountHistoryList  = AccountHistory?.aaData;

// console.log("AccountHistory",AccountHistory)


const [isEditing, setIsEditing] = useState(false);
const handleEditPress = () => {
  setenableText(false)
  setIsEditing(true);
};

const handleSavePress = () => {
  // Add logic to save the changes made



  let data = {
    UserID:userData?.userID,
    CusId: CustId,//userData?.userID,
    FirstName:FirstName,
    Surname:lastName,
    Email:EmailAdd,
    AdditionalEmail:"",
    PhoneNumber:MobilePhone,
    Address:"",
  DeliveryAddress:valueLocation,
  HSAccount:HSaccountno,
  DeliveryInstructions:PhysicalAddress,
  EzoneAccount:EZaccountno,
  Id:0,
  FullName:FirstName+lastName,
  AccountOpeningDate:accountOPDate,
  OpeningAmount:accountOPAmnt


  };
  // 
  console.log('dataaaaaaar',data)

  dispatch(EditPOCDSCustomerDetailsSlice(data))
    .unwrap()
    .then(res => {
      console.log("res?",res)
//       setenableText(true)

//       setIsEditing(false);
// //
//  utills.confirmMessageAlert('Updated','Customer Details Updated Successfully.')

if (res?.status == true){
  setenableText(true)

  setIsEditing(false);
//
utills.confirmMessageAlert('Updated','Customer Details Updated Successfully.')
return
}else{
  utills.confirmMessageAlert('Error',res?.msg)
  return

}




    })
    .catch(e => {
      //  setLoading(false);
    });





};
//EditHSCustomerDetailsSlice

const handleCancelPress = () => {
  // Add logic to cancel the editing and revert changes
  setenableText(true)

  setIsEditing(false);
};


useFocusEffect(
  React.useCallback(() => {
    setIsEditing(false);

    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      console.log("beforeRemove",e)
      const originalString = e.target;
      const arrayOfSubstrings = originalString.split('-');
      
      if (e.data.action.type === 'GO_BACK' && arrayOfSubstrings[0]=== 'HSAccountDetail') {

        if (!handleBackGesture()) {
          e.preventDefault();
        }
    }
   
    });

    
    const handleBackGesture = () => {
      console.log('ooooooo')
      navigation.navigate(SCREENS.DashBoard)

      //return false;
    };
       
  }, [navigation])
);
const [selectedOption, setSelectedOption] = useState(null);

const [Natinality, setNatinality] = useState('');
const [fbId, setfbId] = useState('');
const [IRID, setIRID] = useState('');
const [homePhone, sethomePhone] = useState('');
const [workphone, setworkphone] = useState('');
const [HSaccountno, setHSaccountno] = useState();
const [EZaccountno, setEZaccountno] = useState();
const [EZaccountno1, setEZaccountno1] = useState();

const [accountOPDate, setaccountOPDate] = useState();
// const [accountOPAmount, setaccountOPAmount] = useState(CostumerDetails?.aaData?.aaData?.OpeningAmount);
const [accountOPAmnt, setaccountOPAmnt] = useState();

const [subscriptionDate, setsubscriptionDate] = useState();
const [accountStatts, setaccountStatts] = useState();
const [FirstName, setFirstName] = useState();
const [lastName, setlastName] = useState();
const [PhysicalAddress, setPhysicalAddress] = useState();
const [Poboxnu, setPoboxnu] = useState();
const [AllotedPoboxnu, setAllotedPoboxnuPoboxnu] = useState();
const [Add1, setAdd1] = useState();
const [Add2, setAdd2] = useState();
const [Add3, setAdd3] = useState();

const [EmailAdd, setEmailAdd] = useState();
const [MobilePhone, setMobilePhone] = useState();
const [expanded, setExpanded] = useState(false); // Initially not expanded
const [expanded1, setExpanded1] = useState(false); // Initially not expanded
const [expanded2, setExpanded2] = useState(false); // Initially not expanded

const handleexpandedPress = () => {
    setExpanded(!expanded); // Toggle the state
  };
  const handleexpanded1Press = () => {
    setExpanded1(!expanded1); // Toggle the state
  };
  const handleexpanded2Press = () => {
    setExpanded2(!expanded2); // Toggle the state
  };

  const handleBackPress = () => {
  // Add your logic for the "Back" button action here
  navigation.goBack()
};

  const handleNextPress = () => {
  // Add your logic for the "Next" button action here
  };

  const handlePress = () => {
  };

const listData = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    // Add more items as needed
  ];
  return (
     <GradientBackground>
    <CustomHeader onPress={handlePress} title = "Account Detail" />
 <View style={{
           alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal:15,
      marginTop:25,
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
      style={{borderColor:'lightgrey', borderWidth:2,borderRadius:15,height: hp('8%'),


      
    }}
      textStyle={{fontFamily:FONTFAMILY.Bold,fontSize:rf(1.8)}}
    //   onChangeValue={(selectedItem) => {
    //     // Retrieve the index of the selected item
    //     const selectedIndex = items.findIndex(item => item.value === selectedItem);
        
    //     // selectedIndex will contain the index of the selected item
    //     console.log('Selected item:', selectedItem);
    //     console.log('Selected index:', selectedIndex);
    //     // console.log('Selected index:Value', CostumerDetails?.aaData?.aaData[selectedIndex]);


    // setaccountno(CostumerDetails?.aaData?.aaData[selectedIndex]?.AccountNo);
    // setaccountOPDate(utills.getDateBeforeT(CostumerDetails?.aaData?.aaData[selectedIndex]?.AccountOpeningDate));
    // setaccountOPAmnt(CostumerDetails?.aaData?.aaData[selectedIndex]?.OpeningAmount?.toString());
    // setsubscriptionDate(utills.getDateBeforeT(CostumerDetails?.aaData?.aaData[selectedIndex]?.SubscriptionDueDate));
    // setaccountStatts(CostumerDetails?.aaData?.aaData[selectedIndex]?.AccountStatusName);
    // setFirstName(CostumerDetails?.aaData?.aaData[selectedIndex]?.FirstName);
    // setlastName(CostumerDetails?.aaData?.aaData[selectedIndex]?.Surname);
    // setPhysicalAddress(CostumerDetails?.aaData?.aaData[selectedIndex]?.Address);
    // setPoboxnu(CostumerDetails?.aaData?.aaData[selectedIndex]?.POBox);
    // setEmailAdd(CostumerDetails?.aaData?.aaData[selectedIndex]?.Email);
    // setMobilePhone(CostumerDetails?.aaData?.aaData[selectedIndex]?.PhoneNumber);
    // setAccountId(CostumerDetails?.aaData?.aaData[selectedIndex]?.AccountId);
    // setCustId(CostumerDetails?.aaData?.aaData[selectedIndex]?.Id);
    // getAccountHistory(CostumerDetails?.aaData?.aaData[selectedIndex]?.AccountId,CostumerDetails?.aaData?.aaData[selectedIndex]?.Id)

    //   }}
    />

    
    </View>
    <ScrollView style= {styles.containerSc}> 

   
    <View style={styles.container}>
    {/* <ScrollView> */}
 


{/* // onPress={handlePress} */}
          <TouchableOpacity 
          onPress={handleexpandedPress} 
          style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,alignContent:'left',borderTopLeftRadius: 10,borderTopRightRadius: 10}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Customer Details</Text>
                </View>
                 <Icons
      name={expanded ?  'keyboard-arrow-up' : 'keyboard-arrow-down'}
      Type={Icon.MaterialIcons}
      size={rf(3.4)}
      color={COLORS.black}
    />
              </TouchableOpacity>
              {expanded && (

<React.Fragment>

       <EditText_WithBackgroundColor
        label=""
        placeholder="First Name"
        value={FirstName}
        onChangeText={setFirstName}
        keyboardType="default"
        isRequired={true}
        disable={true}
      />
         <EditText_WithBackgroundColor
        label="Last Name"
        placeholder="Last Name"
        value={lastName}
        onChangeText={setlastName}
        keyboardType="default"
        isRequired={true}

        disable={true}

      />
      <EditText_WithBackgroundColor
        label="Email Address"
        placeholder="Email Address"
        value={EmailAdd}
        onChangeText={setEmailAdd}
        keyboardType="default"
        isRequired={true}

        disable={enableText}

      />
      <EditText_WithBackgroundColor
        label="Mobile"
        placeholder="Mobile Number"
        value={MobilePhone}
        onChangeText={setMobilePhone}
        keyboardType='numeric'
          disable={enableText}
          maxLength={10}
          isRequired={true}

      />
      
    
       <EditText_WithBackgroundColor
        label="Delivery Instructions"
        placeholder="Delivery Instructions"
        value={PhysicalAddress}
        onChangeText={setPhysicalAddress}
        keyboardType="default"
        disable={true}
        isRequired={true}
        description ={true}

      />

<EditText_WithBackgroundColor
         label="Delivery Village *"
        placeholder="Delivery Village"
        value={valueLocation}
        onChangeText={setValueLocation}
        keyboardType="default"
        // disable={enableText && (EZaccountno1 == "0" || EZaccountno1 == "")}
        // disable={enableText && (EZaccountno1 == "0" || EZaccountno1 == "")}
        disable={true}
        isRequired={true}
        description ={true}
      />
       {/* <EditText_WithBackgroundColor
        label="P.O. Box Number"
        placeholder="P.O. Box Number"
        value={Poboxnu}
        onChangeText={setPoboxnu}
        keyboardType="default"
        disable={true}

      />
       <EditText_WithBackgroundColor
        label="IRD"
        placeholder="IRD"
        value={Poboxnu}
        onChangeText={setPoboxnu}
        keyboardType="default"
        disable={true}

      />
       <EditText_WithBackgroundColor
        label="Alloted P.O. Box Number"
        placeholder="Alloted P.O. Box Number"
        value={AllotedPoboxnu}
        onChangeText={setAllotedPoboxnuPoboxnu}
        keyboardType="default"
        disable={true}

      /> */}



{/* <DropDownPicker
      open={openPOBox}
      value={valuePOBox}
      items={itemsPOBox}
      setOpen={setOpenPOBox}
      setValue={setValuePOBox}
      setItems={setItemsPOBox}
      listMode='SCROLLVIEW'
      placeholder='Select P.O. Box Size'
      style={{backgroundColor:COLORS.lightGreySelection, borderWidth:0,borderRadius:10,height: hp('8%'),width:wp('86%'),marginHorizontal:15,marginTop:10      
    }}
      textStyle={{fontFamily:FONTFAMILY.Bold,fontSize:rf(1.8)}}
    //   onChangeValue={(selectedItem) => {
    //     // Retrieve the index of the selected item
    //     const selectedIndex = items.findIndex(item => item.value === selectedItem);
        
    //     // selectedIndex will contain the index of the selected item
    //     console.log('Selected item:', selectedItem);
    //     console.log('Selected index:', selectedIndex);
    //     // console.log('Selected index:Value', CostumerDetails?.aaData?.aaData[selectedIndex]);


    // setaccountno(CostumerDetails?.aaData?.aaData[selectedIndex]?.AccountNo);
    // setaccountOPDate(utills.getDateBeforeT(CostumerDetails?.aaData?.aaData[selectedIndex]?.AccountOpeningDate));
    // setaccountOPAmnt(CostumerDetails?.aaData?.aaData[selectedIndex]?.OpeningAmount?.toString());
    // setsubscriptionDate(utills.getDateBeforeT(CostumerDetails?.aaData?.aaData[selectedIndex]?.SubscriptionDueDate));
    // setaccountStatts(CostumerDetails?.aaData?.aaData[selectedIndex]?.AccountStatusName);
    // setFirstName(CostumerDetails?.aaData?.aaData[selectedIndex]?.FirstName);
    // setlastName(CostumerDetails?.aaData?.aaData[selectedIndex]?.Surname);
    // setPhysicalAddress(CostumerDetails?.aaData?.aaData[selectedIndex]?.Address);
    // setPoboxnu(CostumerDetails?.aaData?.aaData[selectedIndex]?.POBox);
    // setEmailAdd(CostumerDetails?.aaData?.aaData[selectedIndex]?.Email);
    // setMobilePhone(CostumerDetails?.aaData?.aaData[selectedIndex]?.PhoneNumber);
    // setAccountId(CostumerDetails?.aaData?.aaData[selectedIndex]?.AccountId);
    // setCustId(CostumerDetails?.aaData?.aaData[selectedIndex]?.Id);
    // getAccountHistory(CostumerDetails?.aaData?.aaData[selectedIndex]?.AccountId,CostumerDetails?.aaData?.aaData[selectedIndex]?.Id)

    //   }}
    /> */}

{/* <View style={{alignSelf:'flex-start',paddingHorizontal:15}}>
          <Text  style={{
    marginTop: hp('2%'),
    fontSize: rf(1.8),
    color: COLORS.Lableheading,
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('1%'),
    textAlign:'left'

  }}>Delivery Village
            <Text  style={[styles.Left500BOLDText,{color :'red'}]}> *</Text>

            </Text>
            </View>
            <View  pointerEvents={'none'} // Disable the entire View if enableText is true
>
<DropDownPicker
      open={openLocation}
      value={valueLocation}
      items={itemsLocation}
      setOpen={setOpenLocation}
      setValue={setValueLocation}
      setItems={setItemsLocation}
      listMode='SCROLLVIEW'
      placeholder='Select Delivery Village'
      style={{backgroundColor:COLORS.lightGreySelection, borderWidth:0,borderRadius:10,height: hp('8%'),width:wp('86%'),marginHorizontal:15,marginTop:10      
    }}
      textStyle={{fontFamily:FONTFAMILY.Bold,fontSize:rf(1.8)}}
    />

</View> */}
</React.Fragment>
)}

<TouchableOpacity 
          onPress={handleexpanded1Press} 
          style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,alignContent:'left',marginTop: 10}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Account Details</Text>
                </View>
                 <Icons
      name={expanded1 ?  'keyboard-arrow-up' : 'keyboard-arrow-down'}
      Type={Icon.MaterialIcons}
      size={rf(3.4)}
      color={COLORS.black}
    />
              </TouchableOpacity>
              {expanded1 && (

<React.Fragment>

       <EditText_WithBackgroundColor
        
        placeholder="Ezone Account"
        value={EZaccountno}
        onChangeText={setEZaccountno}
        keyboardType="default"
        // disable={enableText && (EZaccountno1 == "0" || EZaccountno1 == "")}
        // disable={enableText && (EZaccountno1 == "0" || EZaccountno1 == "")}
        disable={true}

      />
       <EditText_WithBackgroundColor

        placeholder="HS Account"
        value={HSaccountno}
        onChangeText={setHSaccountno}
        keyboardType="default"
        disable={true}

      />
         <EditText_WithBackgroundColor
        placeholder="Account opening Date"
        value={accountOPDate}
        onChangeText={setaccountOPDate}
        keyboardType="default"
        disable={true}

      />
      <EditText_WithBackgroundColor
        placeholder="Account Opening Amount"
        value={accountOPAmnt}
        onChangeText={setaccountOPAmnt}
        keyboardType="numeric"
        disable={true}

      />
       {/* <EditText_WithBackgroundColor
        placeholder="Subscription Due Date"
        value={subscriptionDate}
        onChangeText={setsubscriptionDate}
        keyboardType="numeric"
        disable={true}

      
      /> */}
{/* <EditText_WithBackgroundColor
        placeholder="Account Status"
        value={accountStatts}
        onChangeText={setaccountStatts}
        keyboardType='default'
        disable={true}

      /> */}
      {/* <Text style={styles.Heading}>
              
Additional Household Addressees           </Text>
      <EditText_WithBackgroundColor
        placeholder="Address 1"
        value={Add1}
        onChangeText={setAdd1}
        keyboardType='default'
        disable={true}

      />

<EditText_WithBackgroundColor
        placeholder="Address 2"
        value={Add2}
        onChangeText={setAdd2}
        keyboardType='default'
        disable={true}

      />
       <EditText_WithBackgroundColor
        placeholder="Address 3"
        value={Add3}
        onChangeText={setAdd3}
        keyboardType='default'
        disable={true}

      /> */}
       
        
</React.Fragment>
)}


<View style = {styles.rowAc} >
<TouchableOpacity style = {{alignItems:'center'}}

onPress={handlPrintHistory} 
>
<View style={{backgroundColor:COLORS.primary,borderRadius:10,alignItems:'center',width:60,height:60,alignContent:'center',justifyContent:"center"}} >
<Image source={IMAGES.PrintReport} style={styles.logo} />

</View>

<Text style={styles.Left500Text}>Print</Text>
<Text style={styles.Left500Text}>Invoice</Text>


</TouchableOpacity>
<TouchableOpacity
onPress={handleHistoryReport} 

style = {{alignItems:'center'}}>
<View style={{backgroundColor:COLORS.primary,borderRadius:10,alignItems:'center',width:60,height:60,alignContent:'center',justifyContent:"center"}} >
<Image source={IMAGES.HistoryReport} style={styles.logo} />

</View>
<Text style={styles.Left500Text}>Online System</Text>

<Text style={styles.Left500Text}
numberOfLines={2}
ellipsizeMode='tail'
>Payments Report</Text>
{/* <Text style={styles.Left500Text}>Report</Text> */}

</TouchableOpacity>

{!isEditing ? (



<TouchableNativeFeedback style = {{alignItems:'center'}}
onPress={handleEditPress}
>
<View style={{backgroundColor:COLORS.primary,borderRadius:10,alignItems:'center',width:60,height:60,alignContent:'center',justifyContent:"center"}} >
<Image source={IMAGES.EditReport} style={styles.logo} />

</View>
<Text style={styles.Left500Text}>Edit</Text>

</TouchableNativeFeedback>

) : (
  <>
<TouchableNativeFeedback style = {{alignItems:'center'}}
onPress={handleSavePress}

>
<View style={{backgroundColor:COLORS.primary,borderRadius:10,alignItems:'center',width:60,height:60,alignContent:'center',justifyContent:"center"}} >
<Image source={IMAGES.saveIcon} style={styles.logo} />

</View>
<Text style={styles.Left500Text}>Save</Text>

</TouchableNativeFeedback>
<TouchableNativeFeedback style = {{alignItems:'center'}}
onPress={handleCancelPress}

>
<View style={{backgroundColor:COLORS.red,borderRadius:10,alignItems:'center',width:60,height:60,alignContent:'center',justifyContent:"center"}} >
<Image source={IMAGES.closeIcon} style={styles.logo} />

</View>
<Text style={styles.Left500Text}>Cancel</Text>

</TouchableNativeFeedback>
</>
  )}
  
  </View>
<TouchableOpacity 
          onPress={handleexpanded2Press} 
          style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,alignContent:'left',borderTopLeftRadius: 10,borderTopRightRadius: 10}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Account History</Text>
                </View>
                 <Icons
      name={expanded2 ?  'keyboard-arrow-up' : 'keyboard-arrow-down'}
      Type={Icon.MaterialIcons}
      size={rf(3.4)}
      color={COLORS.black}
    />
              </TouchableOpacity>
              {expanded2 && (

<React.Fragment>
<View style={{width:wp('90%'),alignSelf:'center',flex:1}}>
<View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Opening Balance:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.aaData?.OpeningBalance != null ? CostumerDetails?.aaData?.OpeningBalance : '$0.00'}</Text>
  
        </View>
        <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'AccCharges:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.aaData?.AccCharges != null ? CostumerDetails?.aaData?.AccCharges : '$0.00'}</Text>
  
        </View>
        {/* <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Un-cleared Parcels:'}</Text>
        <Text style={styles.Left500BOLDText}>{'$20.00 ( frieght, Customs Duty )'}</Text>
  
        </View> */}

<View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Current Balance:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.aaData?.CurrentBalance != null ? CostumerDetails?.aaData?.CurrentBalance : '$0.00'}</Text>
  
        </View>

        <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Un_cleared Balance:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.aaData?.Un_clearedBalance != null ? CostumerDetails?.aaData?.Un_clearedBalance : '$0.00'}</Text>
  
        </View>
        {/* <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Customs Duty:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.aaData?.CustomsCost != null ? CostumerDetails?.aaData?.CustomsCost : '$0.00'}</Text>
  
        </View> */}


        {/* <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Frieght:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.aaData?.FreightCost != null ? CostumerDetails?.aaData?.FreightCost : '$0.00'}</Text>
  
        </View> */}
        {/* <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Closing Balance:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.aaData?.ClosingBalance != null ? CostumerDetails?.aaData?.ClosingBalance : '$0.00'}</Text>
  
        </View> */}
     
        </View>
<FlatList
          data={AccountHistoryList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CustomListItem item={item} />}
        /> 

</React.Fragment>
)}

      
        {/* <View style = {{width:wp('90%')}}>
      
<CustomButtons
        onBackPress={handleBackPress}
        onNextPress={handleNextPress}
      />
        </View> */}




          {/* </ScrollView> */}
        
    </View>
   
    </ScrollView>
     </GradientBackground>

  );
}
const CustomListItem = ({ item }) => {

//   const dateTime = item?.transactionDate.split('T');
// const date = dateTime[0];
// const time = dateTime[1];
// 
const receiptNotes =item?.DeliveryInstructions;

// Replace <br/> with newline character \n
const updatedReceiptNotes = receiptNotes.replace(/<br\s*[/]?>/gi, '\n');

    return (
    <View >
      <View style={{width:wp('90%'),alignSelf:'center'}}>
     
        <View style={styles.hr}></View>

        {/* <View style={styles.rowList2}>
        <View style={styles.rowAA}>
       < History_Icon1></History_Icon1>

<View>
  <Text style={styles.Left500TextMedum}>{date}</Text>
  <Text style={styles.Left500TextMedum}>{time}</Text>
</View>
        </View>  
        <View style={styles.rowAA}>
        < History_Icon2 />

    <Text style={styles.Left500TextMedum}
    
    >{item.transactionType}
    
    </Text>
  
        </View>

        </View> */}


        <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Name</Text>
          <Text style={styles.Left500TextMedum} >{item?.FullName}</Text>
          </View>
          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Ezone Account</Text>
          <Text style={styles.Left500TextMedum} >{item?.EzoneAccount}</Text>
          </View>
          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >HS Account</Text>
          <Text style={styles.Left500TextMedum} >{item?.HSAccount}</Text>
          </View>
          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Phone</Text>
          <Text style={styles.Left500TextMedum} >{item?.Phone}</Text>
          </View>
          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Village</Text>
          <Text style={styles.Left500TextMedum} >{item?.DeliveryAddress}</Text>
          </View>
          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Closing Balance</Text>
          <Text style={styles.Left500TextMedum} >{item?.ClosingBalance}</Text>
          </View>
          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Delivery Instructions</Text>

          </View>
          <View style={styles.rowList3}>

<Text style={styles.Left500TextMedum} >{updatedReceiptNotes}</Text>
</View>
          
        {/* <View style={styles.rowAA}>
        < History_Icon3 />

    
     <Text style={styles.Left500TextMedum}
         >{item.customerName}
         
    </Text>
  
        </View>   */}
        {/* <View style={styles.rowAA}>
        < History_Icon4 />



    
            
    <Text style={styles.Left500TextMedum}>{}</Text>
  
        </View> */}

       

        {/* <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        < History_Icon5 />



     <Text style={styles.Left500TextMedum}>{item.transactionId}</Text>
  
        </View>  
        <View style={styles.rowAA}>
        < History_Icon6 />

    <Text style={styles.Left500TextMedum}>{item.totalAmount}</Text>
  
        </View>

        </View> */}



        {/* <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        < History_Icon7 />

    
     <Text style={styles.Left500TextMedum}>{item.CashierName}</Text>
  
        </View>  
        <View style={styles.rowAA}>
        < History_Icon8 />

    <Text style={styles.Left500TextMedum}>{item.ReceivedByName}</Text>
  
        </View>

        </View> */}
        {/* <Text style={[styles.Left500TextMedum,{paddingHorizontal:10,marginBottom:25}]}>{updatedReceiptNotes}</Text> */}

      </View>
      <View style={styles.hr2}></View>

      </View>
      
    );
  };
const styles = StyleSheet.create({
  containerSc: {
    flex: 1,
    width : wp('94'),
    alignContent:'center',
    backgroundColor :COLORS.white,
    margin:20,
    borderRadius : 15,
    alignSelf:'center'

  },

  container: {
    flex: 1,
    // width : wp('94'),
    alignContent:'center',
    backgroundColor :COLORS.white,
    borderRadius : 15,
    justifyContent:'flex-start',
    alignItems:'center',
  },
 
 
  col4: {
    flex: 1,
  },
  col8: {
    flex: 2,
  },
  dashboardText: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  bellIcon: {
    alignItems: 'flex-end',
    marginTop: 3,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  container2: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
  rowAA: {
    flexDirection: 'row',
    gap:5,
    width:wp('45%'),
    alignItems:'center',
    

  },
  rowList: {
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    marginVertical:15,
    gap:30

  },
  rowList2: {
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    marginVertical:10,
    alignItems:'center',
    gap:30

  },
  rowAc: {
    flexDirection: 'row',
justifyContent:'space-around',
marginVertical:30,
paddingHorizontal:20,
width:wp('90%')
},
  col12: {
    // flex: 1,
    marginVertical: 10,
    paddingHorizontal:10
    
  },col14: {
    // flex: 1,
    marginVertical: 10,
    paddingHorizontal:10
    
  },
  col11: {
     flex: 1,
    marginVertical: 10,
    
  },
  col13: {
    // flex: 1,
    marginVertical: 10,
    paddingHorizontal:20
    
  },
  logo: {
    width: 40,
    height: 40,
  },
  logo1: {
    height: 120,
    resizeMode:'contain',
  },
  fw500Text: {
    fontWeight: '500',
    textAlign: 'center',
  },
  Heading: {
    fontFamily: FONTFAMILY.Bold,
   
    fontSize:rf(1.8),
    marginTop:20,
    textAlign: 'left',
    marginRight:30
  },
  Left500Text: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize:rf(1.8),
    textAlign: 'center',
  },
  Left500TextMd: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize:rf(1.6),
    textAlign: 'left',
    paddingHorizontal:10
  },
  Left500TextMedum: {
    fontFamily: FONTFAMILY.Medium,
    fontSize:rf(1.8),
    textAlign: 'left',
  },
   Left500BOLDText: {
    fontFamily: FONTFAMILY.Bold,
    fontSize:rf(1.8),
    textAlign: 'left',
  },
  Left500RegularText: {
    fontFamily: FONTFAMILY.Regular,
    fontSize:rf(1.8),
    textAlign: 'left',
    color:COLORS.Lableheading
  },
  textDanger: {
    color: COLORS.CancelRED,
    fontSize:rf(2.0),
    fontFamily: FONTFAMILY.Bold,
  },
  image: {
    width: wp('80%'),
    height: 100,
    resizeMode:'contain',
marginBottom:25
  },
  factsList: {
    marginVertical: 10,
  },
  factsItem: {
    // marginVertical: 5,
  },
  fw800Text: {
    fontFamily: FONTFAMILY.Bold,
    textAlign: 'left',
    fontSize:rf(2.0)
  },
  myTextGrey: {
    fontFamily: FONTFAMILY.Regular,
    fontSize:rf(1.8),
    color: COLORS.Lableheading,
  },
  myTextGreyT: {
    fontFamily: FONTFAMILY.Medium,
    fontSize:rf(1.8),
    color: COLORS.Content,
  },
  hr: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  hr2: {
    borderBottomWidth: 10,
    borderColor: COLORS.charcoalGrey,
    width:wp('94%')

  },
  signUpBtn: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  rowList3: {
    flexDirection: 'row',
    justifyContent:'flex-start',
    paddingHorizontal:10,
    alignItems:'center',
    marginBottom:20

  },
  MarginFromLeft:{paddingHorizontal:10,gap:10},
  MarginFromLeft1:{paddingLeft:15,gap:10},
  MarginFromLeft2:{paddingHorizontal:10,flexDirection:'row'},


});




