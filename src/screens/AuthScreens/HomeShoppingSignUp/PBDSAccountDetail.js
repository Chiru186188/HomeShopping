import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, ScrollView, FlatList, ActivityIndicator} from 'react-native';
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
import { EditPBDSCustomerDetailsSlice, PrintReportSlice, PrintTransactionReportSlice, getAccountHistorySlice, getCustomerDetailsSlice, getPBDSAccountHistorySlice, getPBDSCustomerDetailsSlice, getRBCustomerDetailsSlice, getRZAccountHistorySlice, savePBDSAccountHistory, savePBDSCostumerDetails } from '../../../redux/slice/categories';
import useRedux from '../../../components/useRedux';
import utills from '../../../utills';
import TouchableNativeFeedback from '../../../components/TouchableNativeFeedback';

export default function PBDSAccountDetail({navigation}) {
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
  
]);
const [isChargable, setisChargable] = useState(false);
const [isChequePS, setChequePS] = useState(false);

const [openStatusMenu, setopenStatusMenu] = useState(false);
const [valueStatusMenu, setvalueStatusMenu] = useState(null);
const [itemsStatusMenu, setitemsStatusMenu] = useState([
]);



const [openLocation, setOpenLocation] = useState(false);
const [valueLocation, setValueLocation] = useState(null);
const [itemsLocation, setItemsLocation] = useState([
]);

const [currentPage, setCurrentPage] = useState(1);
const [totalRecords, setTotalRecords] = useState(0);
const [loading, setLoading] = useState(false);




useEffect(() => {
  dispatch(savePBDSCostumerDetails(null))

  getCustomerdata()
  return () => {
    dispatch(savePBDSAccountHistory(null))
  };
}, []);

const handlPrintHistory = () => {
  let data = {
    CustomerId: CustId,//userData?.userID,
    AccountId:AccountId,
    type:"Pbds"
  };
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
    });
};

const getCustomerdata = () => {

  let data = {
    Id: userData?.userID,

  };
  dispatch(getPBDSCustomerDetailsSlice(data))
    .unwrap()
    .then(res => {
      console.log("res?",res)

     const formattedItems = res?.CusId?.map((item) => ({
      label: item.Text,
      value: item.Value,
    }));

  setItems(formattedItems);

    if (res?.CusId?.length > 0){
  setValue(res?.CusId[0]?.Value)
    }

    const formattedItems2 = res?.AccountStatus?.map((item) => ({
      label: item.Text,
      value: item.Value,
    }));
    setitemsStatusMenu(formattedItems2);
  //  console.log("res?.aaData?.AccountStatus",res?.aaData?.AccountStatus)
    if (res?.AccountStatus?.length > 0){
  setvalueStatusMenu(res?.aaData?.AccountStatus?.toString())
    }
    setaccountno(res?.aaData?.AccountNo);
    setaccountOPDate(utills.getDateBeforeT(res?.aaData?.AccountOpeningDate));
    setaccountOPAmnt(res?.aaData?.OpeningAmount?.toString());
    setsubscriptionDate(utills.getDateBeforeT(res?.aaData?.SubscriptionDueDate));
    setaccountStatts(res?.aaData?.AccountStatus);
    setFirstName(res?.aaData?.FirstName);
    setlastName(res?.aaData?.Surname);
    setPhysicalAddress(res?.aaData?.Address);
    setPoboxnu(res?.aaData?.POBox);
    setEmailAdd(res?.aaData?.Email);
    setMobilePhone(res?.aaData?.PhoneNumber);
    setAccountId(res?.aaData?.AccountId);
    setCustId(res?.aaData?.Id);
    setisChargable(res?.aaData?.IsChargeable)
    setChequePS(res?.aaData?.IsChequePaymentStop)
getAccountHistory(res?.aaData?.AccountId)

    
}).catch(e => {
    });
};
// const getAccountHistory = (accountID) => {

//   let data = {
//     Id    : accountID,
//     iDisplayStart: 0,
//     iDisplayLength : 20
//   };
//   console.log('dataaaaaaar',data)

//   dispatch(getPBDSAccountHistorySlice(data))
//     .unwrap()
//     .then(res => {
//       console.log("res",res)

//     })
//     .catch(e => {
//     });
// };




// const getAccountHistory = (accountID, page = 1) => {
//   let data = {
//     Id: accountID,
//     iDisplayStart: (page - 1),  // Assuming 20 records per page, adjust as needed
//     iDisplayLength: 2
//   };

//   dispatch(getPBDSAccountHistorySlice(data))
//     .unwrap()
//     .then(res => {
//       console.log("res", res);

//       // Update the total records when the first page is fetched
//       if (page === 1) {
//         console.log("res?.iTotalRecords", res?.iTotalRecords);

//         setTotalRecords(res?.iTotalRecords || 0);
//       }
//     })
//     .catch(e => {
//       // Handle errors
//     });
// };
// const handleLoadMore = () => {
//   console.log("HIII")
//   console.log("AccountHistoryList.length",AccountHistoryList.length)
//   console.log("totalRecords",totalRecords)

//   if (AccountHistoryList.length < totalRecords) {
//     const nextPage = currentPage + 1;
//     getAccountHistory(AccountId, nextPage);
//     setCurrentPage(nextPage);
//   }
// };



const getAccountHistory = (accountID, page = 1) => {
  let data = {
    Id: accountID,
    iDisplayStart: (page - 1) * 20,  // Assuming 2 records per page, adjust as needed
    iDisplayLength: 20
  };

  setLoading(true);

  dispatch(getPBDSAccountHistorySlice(data))
    .unwrap()
    .then(res => {
      console.log("res", res);

      // Update the total records when the first page is fetched
      if (page === 1) {
        console.log("res?.iTotalRecords", res?.iTotalRecords);
        setTotalRecords(res?.iTotalRecords || 0);
        setAccountHistoryList(res?.aaData)
      }else{
        setAccountHistoryList(prevList => [...prevList, ...res?.aaData]);
      }

      // Assuming `AccountHistoryList` is an array, you might want to append new data
      // instead of replacing it entirely
    //  setAccountHistoryList(prevList => [...prevList, ...res?.aaData]);
    })
    .catch(e => {
      // Handle errors
    })
    .finally(() => {
      setLoading(false);
    });
};

const handleLoadMore = () => {
  if (AccountHistoryList.length < totalRecords && !loading) {
    const nextPage = currentPage + 1;
    getAccountHistory(AccountId, nextPage);
    setCurrentPage(nextPage);
  }
};


const CostumerDetails  = useSelector(state => state.category.PBDSCostumerDetails);
const AccountHistory  = useSelector(state => state.category.PBDSAccountHistory);
const AccountHistoryListDetail  = AccountHistory?.aaData;
const [AccountHistoryList, setAccountHistoryList] = useState([]);

const [isEditing, setIsEditing] = useState(false);
const handleEditPress = () => {
  setenableText(false)
  setIsEditing(true);
};

const handleSavePress = () => {
  console.log('CostumerDetails',CostumerDetails)

  // if (utills.isEmptyOrSpaces(FirstName)) {
  //   utills.errorAlert('', 'Please Enter First Name');
  //   return;
  // }

  if (utills.isEmptyOrSpaces(MobilePhone)) {
    utills.errorAlert('', 'Please Enter Phone Number');
    return;
  }
  if (utills.isEmptyOrSpaces(EmailAdd)) {
    utills.errorAlert('', 'Please Enter Email Id');
    return;
  }

  if (!utills.validateEmail(EmailAdd)) {
    utills.errorAlert('', 'Invalid Email');
    return;
  }
  
  // if (utills.isEmptyOrSpaces(PhysicalAddress)) {
  //   utills.errorAlert('', 'Please Enter Address');
  //   return;
  // }
  let data = {
    CusId: CustId,//userData?.userID,
    FirstName:FirstName,
    Surname:lastName,
    Email:EmailAdd,
    PhoneNumber:MobilePhone,
    Address:PhysicalAddress,
  IsInsured: false,
   IRDNumber: "",
  IsChequePaymentStop: isChargable,
  AccountStatus:valueStatusMenu,
  IsChequePaymentStop: isChequePS,
  SubscriptionDueDate:subscriptionDate,
  OldSubDueDate:"",
  OpeningAmount:accountOPAmnt,
Notes:"",
Id:0
  };
  console.log('dataaaaaaar',data)

  dispatch(EditPBDSCustomerDetailsSlice(data))
    .unwrap()
    .then(res => {
      console.log("res?",res)
      


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
    });

};

const handleCancelPress = () => {
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
  navigation.goBack()
};
  const handleNextPress = () => {
  };
  const handleHistoryReport = () => {
        navigation.navigate(SCREENS.AccountTransactionHistoryDetails);  
      
    };
  const handlePress = () => {
  };

const listData = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
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
    
    />

    </View>
    <ScrollView style= {styles.containerSc}> 

   
    <View style={styles.container}>
   
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
        disable={true}
        isRequired={true}
      />
         <EditText_WithBackgroundColor
        label="Last Name"
        placeholder="Last Name"
        value={lastName}
        onChangeText={setlastName}
        keyboardType="default"
        disable={true}
        isRequired={true}
      />
      <EditText_WithBackgroundColor
        label="Email Address"
        placeholder="Email Address"
        value={EmailAdd}
        onChangeText={setEmailAdd}
        keyboardType="default"
        disable={enableText}
        isRequired={true}
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
        label="Address"
        placeholder="Address"
        value={PhysicalAddress}
        onChangeText={setPhysicalAddress}
        keyboardType="default"
        disable={true}

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
        isRequired={true}
      />
         <EditText_WithBackgroundColor
        placeholder="Account opening Date"
        value={accountOPDate}
        onChangeText={setaccountOPDate}
        keyboardType="default"
        disable={true}
        isRequired={true}
      />
      <EditText_WithBackgroundColor
        placeholder="Account Opening Amount"
        value={accountOPAmnt}
        onChangeText={setaccountOPAmnt}
        keyboardType="numeric"
        disable={true}
        isRequired={true}
      />
       {/* <EditText_WithBackgroundColor
        placeholder="Subscription Due Date"
        value={subscriptionDate}
        onChangeText={setsubscriptionDate}
        keyboardType="numeric"
        disable={true}
        isRequired={true}
      
      /> */}

<View style={{alignSelf:'flex-start',paddingHorizontal:15}}>
          <Text  style={{
    marginTop: hp('2%'),
    fontSize: rf(1.8),
    color: COLORS.Lableheading,
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('1%'),
    textAlign:'left'

  }}>Account Status
            {/* <Text  style={[styles.Left500BOLDText,{color :'red'}]}> *</Text> */}

            </Text>
            </View>

<View style={{
 
}}
pointerEvents={ 'none'} // Disable the entire View if enableText is true

  //pointerEvents={enableText ? 'none' : 'auto'} // Disable the entire View if enableText is true
>
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

</View>
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
<Text style={styles.Left500Text}>Online System</Text>

<Text style={styles.Left500Text}
numberOfLines={2}
ellipsizeMode='tail'
>Payments Report</Text>
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
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.customerBalance?.OpeningBalance != null ? CostumerDetails?.customerBalance?.OpeningBalance : '$0.00'}</Text>
  
        </View>
       
        <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Membership Dues:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.customerBalance?.RegCharges != null ? CostumerDetails?.customerBalance?.RegCharges : '$0.00'}</Text>
  
        </View>
        <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Closing Balance:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.customerBalance?.ClosingBalance != null ? CostumerDetails?.customerBalance?.ClosingBalance : '$0.00'}</Text>
  
        </View>
     
        </View>
{/* <FlatList
          data={AccountHistoryList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CustomListItem item={item} />}
        />  */}

<FlatList
      data={AccountHistoryList}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CustomListItem item={item} />}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={() => loading && <ActivityIndicator animating size="large" />}
    />
</React.Fragment>
)}
  
    </View>
   
    </ScrollView>
     </GradientBackground>

  );
}
const CustomListItem = ({ item }) => {

  const dateTime = item?.TransactionDate.split(' ');
const date = dateTime[0];
const time = dateTime[1];
const receiptNotes =item?.ReceiptNotes;

console.log("receiptNotesdate",receiptNotes)
const {dispatch} = useRedux();
const navigation = useNavigation()
const handlPrintHistoryRow = () => {
  console.log('HIIII')

    let data = {
      Tid: item.TransactionId,//userData?.userID,
      type:"PBDS"
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
      });
  };
const updatedReceiptNotes = receiptNotes?.replace(/<br\s*[/]?>/gi, '\n');
let displayReceipt = '';

  if (updatedReceiptNotes && updatedReceiptNotes !== '') {
    const regexMatch = updatedReceiptNotes.match(/(PBDS\d+)/);
    displayReceipt = regexMatch ? regexMatch[0] : '';
  }
  console.log("displayReceipt",displayReceipt)

    return (
    <View >
      <View style={{width:wp('90%'),alignSelf:'center'}}>
     
        <View style={styles.hr}></View>
        {/* {(item.TransactionTypeId === "2" || item.TransactionTypeId === "5" || item.TransactionTypeId === "6" || item.TransactionTypeId === "7" || item.TransactionTypeId === "8" || item.TransactionTypeId === "12") && ( */}
        {/* {(item.OnlinePayAmount != "") && ( */}
        {(item.TransactionTypeId != "10" && item.TransactionTypeId != "9" && item.TransactionTypeId != "4" && item.TransactionTypeId != "3" && item.TransactionTypeId != "1" && item.TransactionTypeId != "11" && item.TransactionTypeId != "17" && item.TransactionTypeId != "20" && item.TransactionTypeId != "18" && item.TransactionTypeId != "24" && item.TransactionTypeId != "26" )&& (

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
<View>
  <Text style={styles.Left500TextMedum}>{date}</Text>
  <Text style={styles.Left500TextMedum}>{time}</Text>
</View>
        </View>  
        <View style={styles.rowAA}>
        < History_Icon2 />
  <View style={{flex:1}}>
<Text style={styles.Left500TextMedum}
    >{item.TransactionType}
    </Text>

</View>
        </View>
        </View>
        <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        < History_Icon3 />
        <View style={{flex:1}}>
     <Text style={styles.Left500TextMedum}
         >{item.CustomerName}
         
    </Text>
    </View>
  
        </View>  
        <View style={styles.rowAA}>
        < History_Icon4 />      
    <Text style={styles.Left500TextMedum}>{displayReceipt}</Text>
  
        </View>

        </View>

        <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        < History_Icon5 />
     <Text style={styles.Left500TextMedum}>{item.TransactionId}</Text>
  
        </View>  
        <View style={styles.rowAA}>
        < History_Icon6 />
        <View>
        <View>

    {item.TransactionText !== "" && (
  <View style={{padding:3,flex:1}}>
  <Text style={styles.Left500TextMedum}>{item.TransactionText}: ${item.TotalAmountWithAdjustment.replace('-', '')}</Text>
  </View>
)}

{(item.TransactionTypeId === "2" || item.TransactionTypeId === "5" || item.TransactionTypeId === "6" || item.TransactionTypeId === "7"|| item.TransactionTypeId === "8" || item.TransactionTypeId === "12"|| item.TransactionTypeId === "39" )&& (
<View style={{backgroundColor:COLORS.yellow ,padding:3,flex:1}}>
<Text style={styles.Left500TextMedum}>Paid Amount: ${item.TotalAmountWithAdjustment.replace('-', '')}</Text>
</View>
)
}
{(item.TransactionTypeId === "1" || item.TransactionTypeId === "11"|| item.TransactionTypeId === "40"|| item.TransactionTypeId === "42" )&& (
  <View style={{backgroundColor:COLORS.yellow ,padding:3,flex:1}}>
<Text style={styles.Left500TextMedum}>Dues_Amount: ${item.TotalAmountWithAdjustment.replace('-', '')}</Text>
</View>
)
}
{(item.TransactionTypeId === "4" )&& (
 <View style={{backgroundColor:COLORS.yellow ,padding:3,flex:1}}>
<Text style={styles.Left500TextMedum}>Adjust Amount: ${item.TotalAmountWithAdjustment.replace('-', '')}</Text>
 </View>
)
}
{(item.TransactionTypeId === "10" )&& (
 <View style={{backgroundColor:COLORS.yellow ,padding:3,flex:1}}>
<Text style={styles.Left500TextMedum}>Cancel Payment: ${item.TotalAmountWithAdjustment.replace('-', '')}</Text>
 </View>
)
}


{(item.TransactionTypeId === "9" )&& (
 <View style={{backgroundColor:COLORS.yellow ,padding:3,flex:1}}>
<Text style={styles.Left500TextMedum}>CF Amount: ${item.TotalAmountWithAdjustment.replace('-', '')}</Text>
 </View>
)
}
</View>
</View>
</View>
 </View>
  <Text style={[styles.Left500TextMedum,{paddingHorizontal:10,marginBottom:25}]}>{updatedReceiptNotes}</Text>
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
  typeBoxContainer1: {
    alignItems: 'center',
    justifyContent: 'space-between',
     paddingHorizontal:15,
     paddingVertical: hp('2%'),
    // marginRight: wp('2%'),
    flexDirection: 'row',
    flex:1,
    alignSelf:'flex-start',
    gap : 50

  }, 
  icon: {
    fontSize: rf(2.5),
    color: COLORS.BlueSelectionBorder,
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
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal:5,
    marginVertical:10,
    alignItems:'center',
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
  txt3: {
    fontFamily: FONTFAMILY.Light,
    fontSize: rf(1.4),
    color: COLORS.black,
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
    fontSize:rf(1.6),
    textAlign: 'center',
  },
  Left500TextMedum: {
    fontFamily: FONTFAMILY.Medium,
    fontSize:rf(1.5),
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




