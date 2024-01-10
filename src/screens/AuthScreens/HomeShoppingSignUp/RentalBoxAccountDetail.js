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
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
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
import { EditRentalBoxCustomerDetailsSlice, PrintReportSlice, PrintTransactionReportSlice, getAccountHistorySlice, getCustomerDetailsSlice, getRBCustomerDetailsSlice, getRZAccountHistorySlice } from '../../../redux/slice/categories';
import useRedux from '../../../components/useRedux';
import utills from '../../../utills';
import TouchableNativeFeedback from '../../../components/TouchableNativeFeedback';

export default function RentalBoxAccountDetail({navigation}) {
  const route = useRoute();
  const {dispatch} = useRedux();
  const userData = useSelector(state => state.auth.userData);
  const [AccountId, setAccountId] = useState('');
  const [CustId, setCustId] = useState('');
  const [enableText, setenableText] = useState(true);
  const [LetterBoxId, setLetterBoxId] = useState('');
  const [LetterBoxType, setLetterBoxType] = useState('');

   //const { From ,FromID} = route.params;
const [open, setOpen] = useState(false);
const [value, setValue] = useState(null);
const [items, setItems] = useState([
  
]);

const [openPOBox, setOpenPOBox] = useState(false);
const [valuePOBox, setValuePOBox] = useState(null);
const [itemsPOBox, setItemsPOBox] = useState([
  { label: 'Medium', value: 'M' },
  { label: 'Large (12 inches x 6 inches)', value: 'L' },
 
]);

const [openStatusMenu, setopenStatusMenu] = useState(false);
const [valueStatusMenu, setvalueStatusMenu] = useState(null);
const [itemsStatusMenu, setitemsStatusMenu] = useState([
  
]);

const [openLocation, setOpenLocation] = useState(false);
const [valueLocation, setValueLocation] = useState(null);
const [itemsLocation, setItemsLocation] = useState([
]);
useEffect(() => {
  getCustomerdata()
  return () => {
   
  };
}, []);

const handlPrintHistory = () => {
//?CustomerId=4236&AccountId=3671&type=Hs

  let data = {
    CustomerId: CustId,//userData?.userID,
    AccountId:AccountId,
    type:"Rental"
  };
  console.log('dataaaaaaar',data)

  dispatch(PrintReportSlice(data))
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

const getCustomerdata = () => {
 // console.log('FromID',FromID)

  let data = {
    Id: userData?.userID,

  };
  console.log('dataaaaaaar',data)

  dispatch(getRBCustomerDetailsSlice(data))
    .unwrap()
    .then(res => {
      console.log("res?",res)

    //   console.log("res?.aaData?.OpeningAmount",res?.aaData?.OpeningAmount)

   
     const formattedItems = res?.CusId?.map((item) => ({
      label: item.Text,
      value: item.Value,
    }));

    console.log("formattedItems",formattedItems)
    setItems(formattedItems);

    if (res?.CusId?.length > 0){
  setValue(res?.CusId[0]?.Value)
    }

    const formattedItems2 = res?.AccountStatus?.map((item) => ({
      label: item.Text,
      value: item.Value,
    }));

    setitemsStatusMenu(formattedItems2);
    console.log("res?.aaData?.AccountStatus",res?.aaData?.AccountStatus)
    if (res?.AccountStatus?.length > 0){
  setvalueStatusMenu(res?.aaData?.AccountStatus?.toString())
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

    const formattedItems3 = res?.DesiredLocation?.map((item) => ({
      label: item.Text,
      value: item.Value,
    }));

    console.log("formattedItems",formattedItems3)
    setItemsLocation(formattedItems3);

    if (res?.DesiredLocation?.length > 0){
  setValueLocation(res?.aaData?.DesiredLocation)
    }
    setValuePOBox(res?.aaData?.RequestedLB)

    setaccountno(res?.aaData?.AccountNo);
    
    setaccountOPDate(utills.getDateBeforeT(res?.aaData?.AccountOpeningDate));
    setaccountOPAmnt(res?.aaData?.OpeningAmount?.toString());
    setsubscriptionDate(utills.getDateBeforeT(res?.aaData?.SubscriptionDueDate));
    setaccountStatts(res?.aaData?.AccountStatusName);
    setFirstName(res?.aaData?.FirstName);
    setlastName(res?.aaData?.Surname);
    setPhysicalAddress(res?.aaData?.Address);
    setPoboxnu(res?.aaData?.POBox);
    setEmailAdd(res?.aaData?.Email);
    setMobilePhone(res?.aaData?.PhoneNumber);
    setAccountId(res?.aaData?.AccountId);
    setCustId(res?.aaData?.Id);
    setLetterBoxType(res?.aaData?.LetterBoxType);
    setLetterBoxId(res?.aaData?.LetterBoxId);

setAllotedPoboxnuPoboxnu(res?.aaData?.LetterBoxCode)
setAdd1(res?.aaData?.AdditionalHouseholdAddress1);
setAdd2(res?.aaData?.AdditionalHouseholdAddress2);
setAdd3(res?.aaData?.AdditionalHouseholdAddress3);
//AccountId : 4370
    getAccountHistory(res?.aaData?.AccountId)




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

  dispatch(getRZAccountHistorySlice(data))
    .unwrap()
    .then(res => {
      console.log("res",res)

    })
    .catch(e => {
      //  setLoading(false);
    });
};


const CostumerDetails  = useSelector(state => state.category.RBCostumerDetails);
const AccountHistory  = useSelector(state => state.category.RBAccountHistory);
const AccountHistoryList  = AccountHistory?.aaData;
const [isEditing, setIsEditing] = useState(false);

const handleEditPress = () => {
  setenableText(false)
  setIsEditing(true);
};

const handleSavePress = () => {
  // Add logic to save the changes made



  let data = {
    CusId: CustId,//userData?.userID,
    FirstName:FirstName,
    Surname:lastName,
    Email:EmailAdd,
    AdditionalEmail:"",
    PhoneNumber:MobilePhone,
    Address:PhysicalAddress,
  IsInsured: false,
  POBox:Poboxnu,
  LetterBoxId:LetterBoxId,
   IRDNumber: "",
   AdditionalHouseholdAddress1:Add1,
   AdditionalHouseholdAddress2:Add2,
   AdditionalHouseholdAddress3:Add3,
   RequestedLB:valuePOBox,
   DesiredLocation:valueLocation,
  AccountStatus:valueStatusMenu,
  LetterBoxType:LetterBoxType,
  SubscriptionDueDate:subscriptionDate,
  OldSubDueDate:"",
  OpeningAmount:accountOPAmnt,
Notes:"",
Id:0
  };
  console.log('dataaaaaaar',data)

  dispatch(EditRentalBoxCustomerDetailsSlice(data))
    .unwrap()
    .then(res => {
      console.log("res?",res)
      setenableText(true)

      setIsEditing(false);
//
 utills.confirmMessageAlert('Updated','Customer Details Updated Successfully.')

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


console.log("AccountHistory",AccountHistory)

useFocusEffect(
  React.useCallback(() => {
    
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
const [accountno, setaccountno] = useState();
const [accountOPDate, setaccountOPDate] = useState();
// const [accountOPAmount, setaccountOPAmount] = useState(CostumerDetails?.aaData?.OpeningAmount);
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
  const handleHistoryReport = () => {
  
    navigation.navigate(SCREENS.AccountTransactionHistoryDetails);    
      
    };

  return (
     <GradientBackground>
    <CustomHeader onPress={handlePress} title = "Account Detail" />
 <View style={{
           alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal:15,
      marginTop:25,

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
    //     // console.log('Selected index:Value', CostumerDetails?.aaData[selectedIndex]);


    // setaccountno(CostumerDetails?.aaData[selectedIndex]?.AccountNo);
    // setaccountOPDate(utills.getDateBeforeT(CostumerDetails?.aaData[selectedIndex]?.AccountOpeningDate));
    // setaccountOPAmnt(CostumerDetails?.aaData[selectedIndex]?.OpeningAmount?.toString());
    // setsubscriptionDate(utills.getDateBeforeT(CostumerDetails?.aaData[selectedIndex]?.SubscriptionDueDate));
    // setaccountStatts(CostumerDetails?.aaData[selectedIndex]?.AccountStatusName);
    // setFirstName(CostumerDetails?.aaData[selectedIndex]?.FirstName);
    // setlastName(CostumerDetails?.aaData[selectedIndex]?.Surname);
    // setPhysicalAddress(CostumerDetails?.aaData[selectedIndex]?.Address);
    // setPoboxnu(CostumerDetails?.aaData[selectedIndex]?.POBox);
    // setEmailAdd(CostumerDetails?.aaData[selectedIndex]?.Email);
    // setMobilePhone(CostumerDetails?.aaData[selectedIndex]?.PhoneNumber);
    // setAccountId(CostumerDetails?.aaData[selectedIndex]?.AccountId);
    // setCustId(CostumerDetails?.aaData[selectedIndex]?.Id);
    // getAccountHistory(CostumerDetails?.aaData[selectedIndex]?.AccountId,CostumerDetails?.aaData[selectedIndex]?.Id)

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
        disable={enableText}
      />
         <EditText_WithBackgroundColor
        label="Last Name"
        placeholder="Last Name"
        value={lastName}
        onChangeText={setlastName}
        keyboardType="default"
        disable={enableText}

      />
      <EditText_WithBackgroundColor
        label="Email Address"
        placeholder="Email Address"
        value={EmailAdd}
        onChangeText={setEmailAdd}
        keyboardType="default"
        disable={true}

      />
      <EditText_WithBackgroundColor
        label="Mobile"
        placeholder="Mobile Number"
        value={MobilePhone}
        onChangeText={setMobilePhone}
        keyboardType='numeric'
          disable={enableText}

      />
      
    
       <EditText_WithBackgroundColor
        label="Address"
        placeholder="Address"
        value={PhysicalAddress}
        onChangeText={setPhysicalAddress}
        keyboardType="default"
        disable={enableText}

      />
       <EditText_WithBackgroundColor
        label="P.O. Box Number"
        placeholder="P.O. Box Number"
        value={Poboxnu}
        onChangeText={setPoboxnu}
        keyboardType="default"
        disable={true}

      />
      <DropDownPicker
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

      />




<DropDownPicker
      open={openLocation}
      value={valueLocation}
      items={itemsLocation}
      setOpen={setOpenLocation}
      setValue={setValueLocation}
      setItems={setItemsLocation}
      listMode='SCROLLVIEW'
      placeholder='Select location'
      style={{backgroundColor:COLORS.lightGreySelection, borderWidth:0,borderRadius:10,height: hp('8%'),width:wp('86%'),marginHorizontal:15,marginTop:10      
    }}
      textStyle={{fontFamily:FONTFAMILY.Bold,fontSize:rf(1.8)}}
    //   onChangeValue={(selectedItem) => {
    //     // Retrieve the index of the selected item
    //     const selectedIndex = items.findIndex(item => item.value === selectedItem);
        
    //     // selectedIndex will contain the index of the selected item
    //     console.log('Selected item:', selectedItem);
    //     console.log('Selected index:', selectedIndex);
    //     // console.log('Selected index:Value', CostumerDetails?.aaData[selectedIndex]);


    // setaccountno(CostumerDetails?.aaData[selectedIndex]?.AccountNo);
    // setaccountOPDate(utills.getDateBeforeT(CostumerDetails?.aaData[selectedIndex]?.AccountOpeningDate));
    // setaccountOPAmnt(CostumerDetails?.aaData[selectedIndex]?.OpeningAmount?.toString());
    // setsubscriptionDate(utills.getDateBeforeT(CostumerDetails?.aaData[selectedIndex]?.SubscriptionDueDate));
    // setaccountStatts(CostumerDetails?.aaData[selectedIndex]?.AccountStatusName);
    // setFirstName(CostumerDetails?.aaData[selectedIndex]?.FirstName);
    // setlastName(CostumerDetails?.aaData[selectedIndex]?.Surname);
    // setPhysicalAddress(CostumerDetails?.aaData[selectedIndex]?.Address);
    // setPoboxnu(CostumerDetails?.aaData[selectedIndex]?.POBox);
    // setEmailAdd(CostumerDetails?.aaData[selectedIndex]?.Email);
    // setMobilePhone(CostumerDetails?.aaData[selectedIndex]?.PhoneNumber);
    // setAccountId(CostumerDetails?.aaData[selectedIndex]?.AccountId);
    // setCustId(CostumerDetails?.aaData[selectedIndex]?.Id);
    // getAccountHistory(CostumerDetails?.aaData[selectedIndex]?.AccountId,CostumerDetails?.aaData[selectedIndex]?.Id)

    //   }}
    />


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
        
        placeholder="Account no."
        value={accountno}
        onChangeText={setaccountno}
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
       <EditText_WithBackgroundColor
        placeholder="Subscription Due Date"
        value={subscriptionDate}
        onChangeText={setsubscriptionDate}
        keyboardType="numeric"
        disable={true}

      
      />
{/* <EditText_WithBackgroundColor
        placeholder="Account Status"
        value={accountStatts}
        onChangeText={setaccountStatts}
        keyboardType='default'
        disable={true}

      /> */}

<DropDownPicker
      open={openStatusMenu}
      value={valueStatusMenu}
      items={itemsStatusMenu}
      setOpen={setopenStatusMenu}
      setValue={setvalueStatusMenu}
      setItems={setitemsStatusMenu}
      listMode='SCROLLVIEW'
      placeholder='Select Account Status'
      style={{backgroundColor:COLORS.lightGreySelection, borderWidth:0,borderRadius:10,height: hp('8%'),width:wp('86%'),marginHorizontal:15,marginTop:10      
    }}
      textStyle={{fontFamily:FONTFAMILY.Bold,fontSize:rf(1.8)}}
    //  
    />




      <Text style={styles.Heading}>
              
Additional Household Addressees           </Text>
      <EditText_WithBackgroundColor
        placeholder="Address 1"
        value={Add1}
        onChangeText={setAdd1}
        keyboardType='default'
        disable={enableText}

      />

<EditText_WithBackgroundColor
        placeholder="Address 2"
        value={Add2}
        onChangeText={setAdd2}
        keyboardType='default'
        disable={enableText}

      />
       <EditText_WithBackgroundColor
        placeholder="Address 3"
        value={Add3}
        onChangeText={setAdd3}
        keyboardType='default'
        disable={enableText}

      />
       
        
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
<Text style={styles.Left500Text}>History</Text>

</TouchableOpacity>
<TouchableOpacity
onPress={handleHistoryReport} 

style = {{alignItems:'center'}}>
<View style={{backgroundColor:COLORS.primary,borderRadius:10,alignItems:'center',width:60,height:60,alignContent:'center',justifyContent:"center"}} >
<Image source={IMAGES.HistoryReport} style={styles.logo} />

</View>
<Text style={styles.Left500Text}>Transactions</Text>

<Text style={styles.Left500Text}
numberOfLines={2}
ellipsizeMode='tail'
>History Report</Text>
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
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.OpeningBalance != null ? CostumerDetails?.OpeningBalance : '$0.00'}</Text>
  
        </View>
        <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'RegCharges:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.RegCharges != null ? CostumerDetails?.RegCharges : '$0.00'}</Text>
  
        </View>
        {/* <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Un-cleared Parcels:'}</Text>
        <Text style={styles.Left500BOLDText}>{'$20.00 ( frieght, Customs Duty )'}</Text>
  
        </View> */}

<View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Running Balance:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.RunningBalance != null ? CostumerDetails?.RunningBalance : '$0.00'}</Text>
  
        </View>

        <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Sub Charges:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.SubsCharges != null ? CostumerDetails?.SubsCharges : '$0.00'}</Text>
  
        </View>
        <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Customs Duty:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.CustomsCost != null ? CostumerDetails?.CustomsCost : '$0.00'}</Text>
  
        </View>


        <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Frieght:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.FreightCost != null ? CostumerDetails?.FreightCost : '$0.00'}</Text>
  
        </View>
        <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Closing Balance:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.ClosingBalance != null ? CostumerDetails?.ClosingBalance : '$0.00'}</Text>
  
        </View>
     
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
  const {dispatch} = useRedux();
const navigation = useNavigation()
  const dateTime = item?.transactionDate.split('T');
const date = dateTime[0];
const time = dateTime[1];
const receiptNotes =item?.receiptNo;

// Replace <br/> with newline character \n
const updatedReceiptNotes = receiptNotes.replace(/<br\s*[/]?>/gi, '\n');
const handlPrintHistoryRow = () => {
  //?CustomerId=4236&AccountId=3671&type=Hs
  console.log('HIIII')

    let data = {
      Tid: item.transactionId,//userData?.userID,
      type:"PostOfficeBox"
    };
    console.log('dataaaaaaar',data)
  
    dispatch(PrintTransactionReportSlice(data))
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
    return (
    <View >
      <View style={{width:wp('90%'),alignSelf:'center'}}>
     
        <View style={styles.hr}></View>
        {(item.transactionTypeId != 10 &&  item.transactionTypeId != 9 &&  item.transactionTypeId != 4 &&  item.transactionTypeId != 3 &&  item.transactionTypeId != 34 &&  item.transactionTypeId != 11 &&  item.transactionTypeId != 17  &&  item.transactionTypeId != 20 &&  item.transactionTypeId != 18 &&  item.transactionTypeId != 24 &&  item.transactionTypeId != 26 &&  item.transactionTypeId != 1) && (
        // {(item.TransactionTypeId != "10" && item.TransactionTypeId != "9" && item.TransactionTypeId != "4" && item.TransactionTypeId != "3" && item.TransactionTypeId != "1" && item.TransactionTypeId != "11" && item.TransactionTypeId != "17" && item.TransactionTypeId != "20" && item.TransactionTypeId != "18" && item.TransactionTypeId != "24" && item.TransactionTypeId != "26" )&& (
          // rental  if (d != "10" && d != "9" && d != "4" && d != "3" && d != "34" && d != "11" && d != "17" && d != "20" && d != "18" && d != "24" && d != "26" && d != "1") {
<View style={styles.rowList2}>
<Text style={styles.Left500TextMedum}>{}</Text>

<TouchableNativeFeedback
onPress={handlPrintHistoryRow} 

style={{backgroundColor:COLORS.primary,borderRadius:7,alignItems:'center',width:30,height:30,alignContent:'center',justifyContent:"center"}} >
<Image source={IMAGES.PrintReport} style={{
width: 18,
height: 18,
}} />

</TouchableNativeFeedback>      

</View>

)}
        <View style={styles.rowList2}>
        <View style={styles.rowAA}>
       < History_Icon1></History_Icon1>
{/* <Image source={IMAGES.Cal_icon1} style={{width:24,height:24,resizeMode:'contain'}} /> */}
{/* <Text style={styles.Left500TextMedum} numberOfLines={2} ellipsizeMode="tail">
  {item.TransactionDate} */}
{/* </Text> */}
<View>
  <Text style={styles.Left500TextMedum}>{date}</Text>
  <Text style={styles.Left500TextMedum}>{time}</Text>
</View>
        </View>  
        <View style={styles.rowAA}>
        {/* <Image source={IMAGES.cod_icon2} style={{width:24,height:24,resizeMode:'contain'}} /> */}
        < History_Icon2 />

    <Text style={styles.Left500TextMedum}
    
    >{item.transactionType}
    
    </Text>
  
        </View>

        </View>


        <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        {/* <Image source={IMAGES.user_icon3} style={{width:24,height:24,resizeMode:'contain'}} /> */}
        < History_Icon3 />

    
     <Text style={styles.Left500TextMedum}
         >{item.customerName}
         
    </Text>
  
        </View>  
        <View style={styles.rowAA}>
        {/* <Image source={IMAGES.Parcel_icon4} style={{width:24,height:24,resizeMode:'contain'}} /> */}
        < History_Icon4 />



    
            
    <Text style={styles.Left500TextMedum}>{updatedReceiptNotes}</Text>
  
        </View>

        </View>

        <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        < History_Icon5 />



     <Text style={styles.Left500TextMedum}>{item.transactionId}</Text>
  
        </View>  
        <View style={styles.rowAA}>
        {/* <Image source={IMAGES.Wallet_icon6} style={{width:24,height:24,resizeMode:'contain'}} /> */}
        < History_Icon6 />

    <Text style={styles.Left500TextMedum}>{item.totalAmount}</Text>
  
        </View>

        </View>



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
    alignItems:'center'

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
  MarginFromLeft:{paddingHorizontal:10,gap:10},
  MarginFromLeft1:{paddingLeft:15,gap:10},
  MarginFromLeft2:{paddingHorizontal:10,flexDirection:'row'},


});




