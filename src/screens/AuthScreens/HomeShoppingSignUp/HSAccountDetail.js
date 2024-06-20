import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, ScrollView, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
 import {COLORS, CONSTANTS, DEFAULTARRAYS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES} from '../../../constants/them';
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
import { EditHSCustomerDetailsSlice, PrintReportSlice, PrintTransactionReportSlice, getAccountHistorySlice, getCustomerDetailsSlice, saveAccountHistory, saveCostumerDetails, saveIsLoading } from '../../../redux/slice/categories';
import useRedux from '../../../components/useRedux';
import utills from '../../../utills';
import TouchableNativeFeedback from '../../../components/TouchableNativeFeedback';
import CustomRadioButtons from '../../../components/CustomRadioButtons';

export default function HSAccountDetail({navigation}) {
  const route = useRoute();
  const {dispatch} = useRedux();
  const userData = useSelector(state => state.auth.userData);
  const [AccountId, setAccountId] = useState('');
  const [CustId, setCustId] = useState('');
  const [enableText, setenableText] = useState(true);
const [open, setOpen] = useState(false);
const [value, setValue] = useState(null);
const [items, setItems] = useState([
]);
const [isChecked, setChecked] = useState(false);

// const [loading, setLoading] = useState(false);
useEffect(() => {
  dispatch(saveAccountHistory(null))
  dispatch(saveCostumerDetails(null))
  
  return () => {
  
  };
}, [navigation]);


const handlPrintHistory = () => {
//?CustomerId=4236&AccountId=3671&type=Hs

  let data = {
    CustomerId: CustId,//userData?.userID,
    AccountId:AccountId,
    type:"Hs"
  };
  // console.log('dataaaaaaar',data)

  dispatch(PrintReportSlice(data))
    .unwrap()
    .then(res => {
      // console.log("res?",res)
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
const [currentPage, setCurrentPage] = useState(1);
const [totalRecords, setTotalRecords] = useState(697);
const recordsPerPage = 20;

const getCustomerdata = () => {
 // console.log('FromID',FromID)
dispatch(saveCostumerDetails(null))
  let data = {
    Id: userData?.userID,

  };
  // 
  // console.log('dataaaaaaar',data)

  dispatch(getCustomerDetailsSlice(data))
    .unwrap()
    .then(res => {
      // 
      console.log("res?",res)
     const formattedItems = res?.AccountUser?.map((item) => ({
      label: item.Text,
      value: item.Value,
    }));

    setItems(formattedItems);

    if (res?.AccountUser?.length > 0){
  setValue(res?.AccountUser[0]?.Value)
    }

    setaccountno(res?.aaData[0]?.AccountNo);
    
    setaccountOPDate(utills.getDateBeforeT(res?.aaData[0]?.AccountOpeningDate));
    setaccountOPAmnt(res?.aaData[0]?.OpeningAmount?.toString());
    setsubscriptionDate(utills.getDateBeforeT(res?.aaData[0]?.SubscriptionDueDate));
    setaccountStatts(res?.aaData[0]?.AccountStatus === 1 ? 'ACTIVE' : 'INACTIVE');
    setFirstName(res?.aaData[0]?.FirstName);
    setlastName(res?.aaData[0]?.Surname);
    setPhysicalAddress(res?.aaData[0]?.Address);
    setPoboxnu(res?.aaData[0]?.POBox);
    setIRD(res?.aaData[0]?.IRDNumber);

    setEmailAdd(res?.aaData[0]?.Email);
    setMobilePhone(res?.aaData[0]?.PhoneNumber);
    setAccountId(res?.aaData[0]?.AccountId);
    setCustId(res?.aaData[0]?.Id);
    setAuthPerson(res?.aaData[0]?.ApplicantName);
    setSelectedOption(res?.aaData[0]?.oceanfreight);
    setChecked(res?.aaData[0]?.IsInsured)

    getAccountHistory(res?.aaData[0]?.AccountId,res?.aaData[0]?.Id,1)

})
.catch(e => {
      //  setLoading(false);
    });
};


const handleFirstPage = () => {
  setAccountHistoryList([])
  setCurrentPage(1);
  getAccountHistory(AccountId,CustId,1)
};

const handleLastPage = () => {
  setAccountHistoryList([])
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  setCurrentPage(totalPages);
  getAccountHistory(AccountId,CustId,totalPages)
};

const handleNextPage = () => {

  if (currentPage * recordsPerPage < totalRecords) {
    setAccountHistoryList([])

    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    getAccountHistory(AccountId,CustId,nextPage)
  }
};

const handlePreviousPage = () => {
  if (currentPage > 1) {
    setAccountHistoryList([])

    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);
    getAccountHistory(AccountId,CustId,prevPage)
  }
};

const fetchAccountHistory = (page) => {
  // Your API call logic here
  // Update totalRecords based on API response
};




const getAccountHistory = (accountID,custId, page) => {
  dispatch(saveAccountHistory(null))

  let data = {
    Id    : accountID,
    CusId : custId,
    userID: userData?.userID,
    iDisplayStart: (page - 1) * recordsPerPage,  // Assuming 2 records per page, adjust as needed
    iDisplayLength: recordsPerPage
   
  };
  dispatch(getAccountHistorySlice(data))
    .unwrap()
    .then(res => {
      setTotalRecords(res?.iTotalRecords || 0);
      setAccountHistoryList(res?.aaData)
      // if (page === 1) {
      //   // console.log("res?.iTotalRecords", res?.iTotalRecords);
      
      //   setAccountHistoryList(res?.aaData)
      // }else{
      //   setAccountHistoryList(prevList => [...prevList, ...res?.aaData]);
      // }

    })
    .catch(e => {
     // dispatch(saveIsLoading(false))

    });
};
// const handleLoadMore = () => {
//   console.log("CALLLLLLLlength",AccountHistoryList.length)
//   console.log("CALLLLLLLtotalRecords",totalRecords)

//   if (AccountHistoryList.length < totalRecords && !loading) {
//     console.log("CALLLLLLL")
//     const nextPage = currentPage + 1;
//     getAccountHistory(AccountId, CustId,nextPage);
//     setCurrentPage(nextPage);
//   }
// };
const [page, setPage] = useState(1);

const handleLoadMore = async () => {
  console.log("CALLLLL")
  if (isFetchingMore) return; // Prevent multiple calls
  setIsFetchingMore(true);
  const newPage = page + 1;
  setPage(newPage);

  getAccountHistory(AccountId, CustId,newPage);
  setIsFetchingMore(false);
};
const renderFooter = () => {
  return isFetchingMore ? (
    <View style={{ padding: 10 }}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  ) : null;
};

const onDropdownValueChange = (selectedItem) => {
  setAccountHistoryList([]);
  setCurrentPage(1)
  const selectedIndex = items.findIndex(item => item.value === selectedItem);
  setaccountno(CostumerDetails?.aaData[selectedIndex]?.AccountNo);
  setaccountOPDate(utills.getDateBeforeT(CostumerDetails?.aaData[selectedIndex]?.AccountOpeningDate));
  setaccountOPAmnt(CostumerDetails?.aaData[selectedIndex]?.OpeningAmount?.toString());
  setsubscriptionDate(utills.getDateBeforeT(CostumerDetails?.aaData[selectedIndex]?.SubscriptionDueDate));
  setaccountStatts(CostumerDetails?.aaData[selectedIndex]?.AccountStatus === 1 ? 'ACTIVE' : 'INACTIVE');
  setFirstName(CostumerDetails?.aaData[selectedIndex]?.FirstName);
  setlastName(CostumerDetails?.aaData[selectedIndex]?.Surname);
  setPhysicalAddress(CostumerDetails?.aaData[selectedIndex]?.Address);
  setPoboxnu(CostumerDetails?.aaData[selectedIndex]?.POBox);
  setIRD(CostumerDetails?.aaData[selectedIndex]?.IRDNumber);
  setEmailAdd(CostumerDetails?.aaData[selectedIndex]?.Email);
  setMobilePhone(CostumerDetails?.aaData[selectedIndex]?.PhoneNumber);
  setAccountId(CostumerDetails?.aaData[selectedIndex]?.AccountId);
  setCustId(CostumerDetails?.aaData[selectedIndex]?.Id);
  setAuthPerson(CostumerDetails?.aaData[selectedIndex]?.ApplicantName);
  setSelectedOption(CostumerDetails?.aaData[selectedIndex]?.oceanfreight);
  setChecked(CostumerDetails?.aaData[selectedIndex]?.IsInsured);

  getAccountHistory(CostumerDetails?.aaData[selectedIndex]?.AccountId, CostumerDetails?.aaData[selectedIndex]?.Id, 1);
  setPage(1);
};
const CostumerDetails  = useSelector(state => state.category.CostumerDetails);
const AccountHistory  = useSelector(state => state.category.AccountHistory);
const AccountHistoryListDetail  = AccountHistory?.aaData;
// console.log("AccountHistory",AccountHistoryListDetail)

const [AccountHistoryList, setAccountHistoryList] = useState([]);

const [isEditing, setIsEditing] = useState(false);

const handleEditPress = () => {
  setenableText(false)
  setIsEditing(true);
};

const handleSavePress = () => {
  // Add logic to save the changes made
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
  
  if (utills.isEmptyOrSpaces(PhysicalAddress)) {
    utills.errorAlert('', 'Please Enter Address');
    return;
  }


  let data = {
    CusId: CustId,
  
    Email:EmailAdd,
    PhoneNumber:MobilePhone,
    Address:PhysicalAddress,
   
  IsCommercialCustomer: false


  };

  dispatch(EditHSCustomerDetailsSlice(data))
    .unwrap()
    .then(res => {
   
if (res?.status == true){
  setenableText(true)

  setIsEditing(false);
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
    getCustomerdata()
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      // console.log("beforeRemove",e)
      const originalString = e.target;
      const arrayOfSubstrings = originalString.split('-');
      
      if (e.data.action.type === 'GO_BACK' && arrayOfSubstrings[0]=== 'HSAccountDetail') {

        if (!handleBackGesture()) {
          e.preventDefault();
        }
    }
   
    });

    
    const handleBackGesture = () => {
      // console.log('ooooooo')
      navigation.navigate(SCREENS.DashBoard)

      //return false;
    };
       
  }, [navigation])
);
const [selectedOption, setSelectedOption] = useState("");

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
const [AuthPerson, setAuthPerson] = useState("");
const [IRD, setIRD] = useState();

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
const [isFetchingMore, setIsFetchingMore] = useState(false);

const [openStatusMenu, setopenStatusMenu] = useState(false);
const [valueStatusMenu, setvalueStatusMenu] = useState(null);
const [itemsStatusMenu, setitemsStatusMenu] = useState([
]);
  const handleNextPress = () => {
  // Add your logic for the "Next" button action here
  };

  const handlePress = () => {
  };
  const handleHistoryReport = () => {
        
    navigation.navigate(SCREENS.AccountTransactionHistoryDetails);  
      
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
    //     setAccountHistoryList([])
    //     const selectedIndex = items.findIndex(item => item.value === selectedItem);
    // setaccountno(CostumerDetails?.aaData[selectedIndex]?.AccountNo);
    // setaccountOPDate(utills.getDateBeforeT(CostumerDetails?.aaData[selectedIndex]?.AccountOpeningDate));
    // setaccountOPAmnt(CostumerDetails?.aaData[selectedIndex]?.OpeningAmount?.toString());
    // setsubscriptionDate(utills.getDateBeforeT(CostumerDetails?.aaData[selectedIndex]?.SubscriptionDueDate));
    // setaccountStatts(CostumerDetails?.aaData[selectedIndex]?.AccountStatus === 1 ? 'ACTIVE' : 'INACTIVE');
    // setFirstName(CostumerDetails?.aaData[selectedIndex]?.FirstName);
    // setlastName(CostumerDetails?.aaData[selectedIndex]?.Surname);
    // setPhysicalAddress(CostumerDetails?.aaData[selectedIndex]?.Address);
    // setPoboxnu(CostumerDetails?.aaData[selectedIndex]?.POBox);
    // setIRD(CostumerDetails?.aaData[selectedIndex]?.IRDNumber);

    // setEmailAdd(CostumerDetails?.aaData[selectedIndex]?.Email);
    // setMobilePhone(CostumerDetails?.aaData[selectedIndex]?.PhoneNumber);
    // setAccountId(CostumerDetails?.aaData[selectedIndex]?.AccountId);
    // setCustId(CostumerDetails?.aaData[selectedIndex]?.Id);
    // setAuthPerson(CostumerDetails?.aaData[selectedIndex]?.ApplicantName);
    // setSelectedOption(CostumerDetails?.aaData[selectedIndex]?.oceanfreight);
    // setChecked(CostumerDetails?.aaData[selectedIndex]?.IsInsured)

    // getAccountHistory(CostumerDetails?.aaData[selectedIndex]?.AccountId,CostumerDetails?.aaData[selectedIndex]?.Id,1)
    //   }}
    onChangeValue={onDropdownValueChange}

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
        disable={enableText}
        isRequired={true}
      />
       <EditText_WithBackgroundColor
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
        value={IRD}
        onChangeText={setIRD}
        keyboardType="default"
        disable={true}

      />
      
      <EditText_WithBackgroundColor
        label="Name of authorized person :"
        placeholder="Name of authorized person"
        value={AuthPerson}
        onChangeText={setAuthPerson}
        keyboardType="default"
        disable={true}

      />
 <View
        
    style={[
            styles.checkboxItem,
           
          ]}
         // onPress={() => setChecked(!isChecked)}
        >

<Text style={styles.Left500BOLDText}>{"Is Insured"}</Text>

          <Icons
            name={isChecked == true ? 'checkbox-active' : 'checkbox-passive'}
            style={styles.icon}
            Type={Icon.Fontisto}
            size={rf(2.8)}
          />
        </View>

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
       <EditText_WithBackgroundColor
        placeholder="Subscription Due Date"
        value={subscriptionDate}
        onChangeText={setsubscriptionDate}
        keyboardType="numeric"
        disable={true}
        isRequired={true}
      />
      <EditText_WithBackgroundColor
        placeholder="Account Status"
        value={accountStatts}
        onChangeText={setaccountStatts}
        keyboardType='default'
        disable={true}
        isRequired={true}

      />

<View style={styles.containerSub}>
<View style={{backgroundColor :COLORS.primary,padding:10,borderTopRightRadius:10,borderTopLeftRadius:10
}}>

              <Text  style={styles.Left500Textwhite}>Kindly indicate where you learnt of our Home Shopping (ocean freight) service
</Text>
</View>
<View style={{
  paddingHorizontal: 20,
  alignSelf: 'flex-start',
  paddingTop: 10,
}}
  pointerEvents={'none'} // Disable the entire View if enableText is true
>
  {DEFAULTARRAYS.ApplyList.map((item1) => {
    return (
      <TouchableOpacity
        key={item1.label}
        onPress={() => {
          if (!enableText) {
            console.log(`Tapped on ${item1.label}`);
            // Perform other actions as needed
          }
        }}
        disabled={enableText}
      >
        <CustomRadioButtons
          title={item1.label}
          setSelected={setSelectedOption}
          onChangeSelected={(data, item1) => {
          //  console.log(data);
            setSelectedOption(data);
          }}
          selected={selectedOption}
          style={{ marginBottom: 7 }}
        />
      </TouchableOpacity>
    );
  })}
</View>
            
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
        {/* <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'RegCharges:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.RegCharges != null ? CostumerDetails?.RegCharges : '$0.00'}</Text>
  
        </View> */}
        <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500BOLDText}>{'Un-cleared Parcels:'}</Text>
        {/* <Text style={styles.Left500BOLDText}>{'$20.00 ( frieght, Customs Duty )'}</Text> */}
  
        </View>

{/* <View style={styles.hr}></View> */}
        {/* <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Running Balance:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.RunningBalance != null ? CostumerDetails?.RunningBalance : '$0.00'}</Text>
        </View> */}
        <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Frieght:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.FreightCost != null ? CostumerDetails?.FreightCost : '$0.00'}</Text>
  
        </View>
        {/* <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Sub Charges:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.SubsCharges != null ? CostumerDetails?.SubsCharges : '$0.00'}</Text>
  
        </View> */}
        <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Customs Duty:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.CustomsCost != null ? CostumerDetails?.CustomsCost : '$0.00'}</Text>
  
        </View>


      
        <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Closing Balance:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.ClosingBalance != null ? CostumerDetails?.ClosingBalance : '$0.00'}</Text>
  
        </View>
     
        </View>
                {/* {AccountHistoryList?.map((record, index) => (
                  <CustomListItem
                  item={record}
                  />
                ))} */}

                
{/* <FlatList
      data={AccountHistoryList}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CustomListItem item={item} />}
      // onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
      /> */}
<View style={{ width: wp('90%'), alignSelf: 'center', flex: 1 }}>
              <FlatList
                data={AccountHistoryList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CustomListItem item={item} />}
                ListFooterComponent={renderFooter}
              />
              <View style={styles.paginationContainer}>
                <TouchableOpacity onPress={handleFirstPage} disabled={currentPage === 1} style={styles.paginationButton}>
                  <Text style={styles.paginationButtonText}>First</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePreviousPage} disabled={currentPage === 1} style={styles.paginationButton}>
                  {/* <Text style={styles.paginationButtonText}>Previous</Text> */}
                  <Icons
      name={'doubleleft'}
      Type={Icon.AntDesign}
      size={rf(2.4)}
      color={COLORS.white}
    />
                </TouchableOpacity>
                <Text style={styles.pageNumberText}>
                  Page {currentPage} of {Math.ceil(totalRecords / recordsPerPage)}
                </Text>
                <TouchableOpacity onPress={handleNextPage} disabled={currentPage * recordsPerPage >= totalRecords} style={styles.paginationButton}>
                  {/* <Text style={styles.paginationButtonText}>Next</Text> */}
                  <Icons
      name={'doubleright'}
      Type={Icon.AntDesign}
      size={rf(2.4)}
      color={COLORS.white}
    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLastPage} disabled={currentPage * recordsPerPage >= totalRecords} style={styles.paginationButton}>
                  <Text style={styles.paginationButtonText}>Last</Text>
                </TouchableOpacity>
              </View>
            </View>
 
</React.Fragment>
)}

 </View>
    </ScrollView>
     </GradientBackground>
  );
}
const CustomListItem = ({ item }) => {
  const {dispatch} = useRedux();
const navigation = useNavigation()
  const dateTime = item?.TransactionDate.split(' ');
const date = dateTime[0];
const time = dateTime[1] + ' ' + dateTime[2];
const receiptNotes = item?.ReceiptNotes;

const updatedReceiptNotes = receiptNotes.replace(/<br\s*[/]?>/gi, '\n');

const handlPrintHistoryRow = () => {
  // console.log('HIIII')

    let data = {
      Tid: item.TransactionId,//userData?.userID,
      type:"HS"
    };
    // console.log('dataaaaaaar',data)
  
    dispatch(PrintTransactionReportSlice(data))
      .unwrap()
      .then(res => {
       // console.log("res?",res)
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
        {/* {(item.TransactionTypeId === "2" || item.TransactionTypeId === "5" || item.TransactionTypeId === "6" || item.TransactionTypeId === "7" || item.TransactionTypeId === "8" || item.TransactionTypeId === "12") && ( */}
        {/* {(item.OnlinePayAmount != "") && ( */}
        {/* {(item.TransactionTypeId === "2" || item.TransactionTypeId === "5" || item.TransactionTypeId === "6" || item.TransactionTypeId === "7" || item.TransactionTypeId === "8" || item.TransactionTypeId === "12") && ( */}
       
       {(item.TransactionTypeId != "10" && item.TransactionTypeId != "9" && item.TransactionTypeId != "4" && item.TransactionTypeId != "3" && item.TransactionTypeId != "1" && item.TransactionTypeId != "11" )&& (
       
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
        {/* <Image source={IMAGES.cod_icon2} style={{width:24,height:24,resizeMode:'contain'}} /> */}
        < History_Icon2 />
        <View style={{flex:1}}>
    <Text style={styles.Left500TextMedum}
    
    >{item.TransactionType + "-" +item.EntryType}
    
    </Text>
    </View>
        </View>

        </View>


        <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        {/* <Image source={IMAGES.user_icon3} style={{width:24,height:24,resizeMode:'contain'}} /> */}
        < History_Icon3 />

    
     <Text style={styles.Left500TextMedum}
         >{item.RefCustomerName}
         
    </Text>
  
        </View>  
        <View style={styles.rowAA}>
        {/* <Image source={IMAGES.Parcel_icon4} style={{width:24,height:24,resizeMode:'contain'}} /> */}
        < History_Icon4 />



    
       <View style ={{flex:1,paddingRight:10}}>  
    <Text style={styles.Left500TextMedum}
    numberOfLines={10}
    ellipsizeMode='tail'
    >{item.ParcelsList}</Text>
      {(item.TransactionTypeId === "3"  )&& (
<>
       <Text style={styles.Left500TextMedum}
    >{item.DispatchNo}</Text>
       <Text style={styles.Left500TextMedum}
    >{item.AXA_NO}</Text>
    </>
      )}
    </View>   
        </View>

        </View>



        <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        < History_Icon5 />



     <Text style={styles.Left500TextMedum}>{item.TransactionId}</Text>
  
        </View>  
        <View style={styles.rowAA}>
        {/* <Image source={IMAGES.Wallet_icon6} style={{width:24,height:24,resizeMode:'contain'}} /> */}
        < History_Icon6 />
<View>
{item.TransactionText !== "" && (
  <View style={{padding:3,flex:1}}>
  <Text style={styles.Left500TextMedum}>{item.TransactionText}: ${item.TotalAmount.replace('-', '')}</Text>
  </View>
)}
{/* <Text style={styles.Left500TextMedum}>Online Pay:{item.TotalAmount.replace('-', '')}</Text> */}

{(item.TransactionTypeId === "2" || item.TransactionTypeId === "5" || item.TransactionTypeId === "6" || item.TransactionTypeId === "7"|| item.TransactionTypeId === "8" || item.TransactionTypeId === "12" )&& (
<View style={{backgroundColor:COLORS.yellow ,padding:3,flex:1}}>
<Text style={styles.Left500TextMedum}>Paid Amount: ${item.TotalAmount.replace('-', '')}</Text>
</View>
)
}


{(item.TransactionTypeId === "3"  )&& (
<View style={{padding:3,flex:1}}>
<Text style={styles.Left500TextMedum}>Amount: ${item.Amount.replace('-', '')}</Text>
<Text style={styles.Left500TextMedum}>ServiceCharge: ${item.ServiceCharge.replace('-', '')}</Text>
<Text style={styles.Left500TextMedum}>OvrWt Charge: ${item.OverWeightCharge.replace('-', '')}</Text>
<Text style={styles.Left500TextMedum}>AASAPFee: ${item.AASPAFee.replace('-', '')}</Text>
<Text style={styles.Left500TextMedum}>InsAmt.: ${item.InsuredAmt.replace('-', '')}</Text>
<Text style={styles.Left500TextMedum}>CustomsCharges: ${item.TotalDuty.replace('-', '')}</Text>
<Text style={styles.Left500TextMedum}>TaxableAmt.: ${item.TotalAmount.replace('-', '')}</Text>


</View>
)
}
{(item.TransactionTypeId === "1" || item.TransactionTypeId === "11" )&& (
  <View style={{backgroundColor:COLORS.yellow ,padding:3,flex:1}}>
<Text style={styles.Left500TextMedum}>Dues_Amount: ${item.TotalAmount.replace('-', '')}</Text>
</View>
)
}
{(item.TransactionTypeId === "4" )&& (
 <View style={{backgroundColor:COLORS.yellow ,padding:3,flex:1}}>
<Text style={styles.Left500TextMedum}>Adjust Amount: ${item.TotalAmount.replace('-', '')}</Text>
 </View>
)
}

{(item.TransactionTypeId === 10 )&& (
 <View style={{backgroundColor:COLORS.yellow ,padding:3,flex:1}}>
<Text style={styles.Left500TextMedum}>Cancel Payment: ${item.TotalAmount.replace('-', '')}</Text>
 </View>
)
}


{(item.TransactionTypeId === 9 )&& (
 <View style={{backgroundColor:COLORS.yellow ,padding:3,flex:1}}>
<Text style={styles.Left500TextMedum}>CF Amount: ${item.TotalAmount.replace('-', '')}</Text>
 </View>
)
}
</View>
  
        </View>

        </View>



        <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        {/* <Image source={IMAGES.receptionist_icon7} style={{width:24,height:24,resizeMode:'contain'}} /> */}
        < History_Icon7 />

    
     <Text style={styles.Left500TextMedum}>{item.CashierName}</Text>
  
        </View>  
        <View style={styles.rowAA}>
        < History_Icon8 />

    <Text style={styles.Left500TextMedum}>{item.ReceivedByName}</Text>
  
        </View>

        </View>
        {(item.TransactionTypeId === "3") ? (
  <>
    <Text style={[styles.Left500TextMedum, { paddingHorizontal: 10, marginTop: 10 }]}>{item.GoodsDescription}</Text>
    <Text style={[styles.Left500BOLDText, { paddingHorizontal: 10 }]}>Parcel Description :</Text>
    <Text style={[styles.Left500TextMedum, { paddingHorizontal: 10, marginBottom: 25 }]}>
      <Text style={styles.Left500TextBOLD}>WayBill#: </Text>{item.WayBillNo}
      <Text style={styles.Left500TextMedum}>, <Text style={styles.Left500TextBOLD}>UnitCost#: </Text>{item.UnitCost}</Text>
      <Text style={styles.Left500TextMedum}>, <Text style={styles.Left500TextBOLD}>InvoiceVal: </Text>{item.InvoiceAmt}</Text>
      <Text style={styles.Left500TextMedum}>, <Text style={styles.Left500TextBOLD}>No./WtofItem: </Text>{item.ItemsAndPackageWeight}</Text>
      <Text style={styles.Left500TextMedum}>, <Text style={styles.Left500TextBOLD}>POCFT#: </Text>{item.POCFT}</Text>
      <Text style={styles.Left500TextMedum}>, <Text style={styles.Left500TextBOLD}>C# -: </Text>{item.WayBillNo}</Text>
    </Text>
  </>
) : (
  <Text style={[styles.Left500TextMedum, { paddingHorizontal: 10, marginBottom: 25 }]}>{updatedReceiptNotes}</Text>
)}
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
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf:'flex-start',
    paddingHorizontal: 10,
    margin: 10,
    gap : 100
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
  
  pageNumberText: {
    marginHorizontal: 10,
    fontSize: rf(2),
    fontFamily: FONTFAMILY.Bold,
    color: COLORS.black,
    marginTop:10
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
    gap : 0

  },
  rowAc: {
    flexDirection: 'row',
justifyContent:'space-around',
marginVertical:30,
// paddingHorizontal:20,
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
    width: 32,
    height: 32,
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
    textAlign: 'center',
    fontSize:rf(2.0)
  },
  Left500Text: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize:rf(1.6),
    textAlign: 'center',
  },
  Left500Textwhite: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize:rf(1.8),
    textAlign: 'left',
    color:'white'
  },
  Left500TextMedum: {
    fontFamily: FONTFAMILY.Medium,
    fontSize:rf(1.4),
    textAlign: 'left',
  },
  Left500TextBOLD: {
    fontFamily: FONTFAMILY.Bold,
    fontSize:rf(1.4),
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

  containerSub: {
    flex: 1,
    width : wp('88'),
    alignContent:'flex-start',
    backgroundColor :COLORS.lightBlueSelection,
    margin:20,
    borderRadius : 15,
    // paddingVertical:20
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    alignSelf:'center'
  },
  paginationButton: {
    marginHorizontal: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  paginationButtonText: {
    color: COLORS.white,
    fontSize: rf(1.8),
    fontFamily: FONTFAMILY.Bold,
  },
});




