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
import { EditHSCustomerDetailsSlice, PrintReportSlice, PrintTransactionReportSlice, getAccountHistorySlice, getCustomerDetailsSlice, saveAccountHistory, saveCostumerDetails } from '../../../redux/slice/categories';
import useRedux from '../../../components/useRedux';
import utills from '../../../utills';
import TouchableNativeFeedback from '../../../components/TouchableNativeFeedback';
import CustomRadioButtons from '../../../components/CustomRadioButtons';

export default function COSDetails({navigation}) {
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


const [currentPage, setCurrentPage] = useState(1);
const [totalRecords, setTotalRecords] = useState(0);
const [loading, setLoading] = useState(false);


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
      // console.log("res?",res)
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

    //getAccountHistory(res?.aaData[0]?.AccountId,res?.aaData[0]?.Id,1)




    })





    .catch(e => {
      //  setLoading(false);
    });
};
const getAccountHistory = (accountID,custId, page) => {

  let data = {
    Id    : accountID,
    CusId : custId,
    userID: userData?.userID,
    iDisplayStart: (page - 1) * 60,  // Assuming 2 records per page, adjust as needed
    iDisplayLength: 60
   
  };
 //
  console.log('dataaaaaaar',data)

  dispatch(getAccountHistorySlice(data))
    .unwrap()
    .then(res => {
      // console.log("res", res);

      // Update the total records when the first page is fetched
      if (page === 1) {
        // console.log("res?.iTotalRecords", res?.iTotalRecords);
        setTotalRecords(res?.iTotalRecords || 0);
        setAccountHistoryList(res?.aaData)
      }else{
        setAccountHistoryList(prevList => [...prevList, ...res?.aaData]);
      }

    })
    .catch(e => {
      //  setLoading(false);
    });
};
const handleLoadMore = () => {
  if (AccountHistoryList.length < totalRecords && !loading) {
    const nextPage = currentPage + 1;
    getAccountHistory(AccountId, CustId,nextPage);
    setCurrentPage(nextPage);
  }
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
    CusId: CustId,//userData?.userID,
   // FirstName:FirstName,
    //Surname:lastName,
    Email:EmailAdd,
    //AdditionalEmail:"",
    PhoneNumber:MobilePhone,
    Address:PhysicalAddress,
    //POBox : Poboxnu,
  ///IsInsured: false,
  // IRDNumber: IRDNumber,
  IsCommercialCustomer: false


  };
  // console.log('dataaaaaaar',data)

  dispatch(EditHSCustomerDetailsSlice(data))
    .unwrap()
    .then(res => {
      // console.log("res?",res)
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


useFocusEffect(
  React.useCallback(() => {
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
 {/* <View style={{
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
      onChangeValue={(selectedItem) => {
        const selectedIndex = items.findIndex(item => item.value === selectedItem);
   setaccountno(CostumerDetails?.aaData[selectedIndex]?.AccountNo);
    setaccountOPDate(utills.getDateBeforeT(CostumerDetails?.aaData[selectedIndex]?.AccountOpeningDate));
    setaccountOPAmnt(CostumerDetails?.aaData[selectedIndex]?.OpeningAmount?.toString());
    setsubscriptionDate(utills.getDateBeforeT(CostumerDetails?.aaData[selectedIndex]?.SubscriptionDueDate));
    setaccountStatts(CostumerDetails?.aaData[selectedIndex]?.AccountStatusName);
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
    setChecked(CostumerDetails?.aaData[selectedIndex]?.IsInsured)

    getAccountHistory(CostumerDetails?.aaData[selectedIndex]?.AccountId,CostumerDetails?.aaData[selectedIndex]?.Id,1)
      }}
    />

    
    </View> */}
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
         {/* <EditText_WithBackgroundColor
        label="Last Name"
        placeholder="Last Name"
        value={lastName}
        onChangeText={setlastName}
        keyboardType="default"
        disable={true}
        isRequired={true}
      /> */}
      <EditText_WithBackgroundColor
        label="Email Address"
        placeholder="Email Address"
        value={EmailAdd}
        onChangeText={setEmailAdd}
        keyboardType="default"
        disable={true}
        isRequired={true}
      />
      <EditText_WithBackgroundColor
        label="Mobile"
        placeholder="Mobile Number"
        value={MobilePhone}
        onChangeText={setMobilePhone}
        keyboardType='numeric'
          disable={true}
          maxLength={10}
          isRequired={true}
      />
      
    
       <EditText_WithBackgroundColor
        label="Customer Address"
        placeholder="Address"
        value={PhysicalAddress}
        onChangeText={setPhysicalAddress}
        keyboardType="default"
        disable={true}

      />
       <EditText_WithBackgroundColor
        label="Attachment"
        placeholder="Attachment"
        value={Poboxnu}
        onChangeText={setPoboxnu}
        keyboardType="default"
        disable={true}

      />
     
      
      <EditText_WithBackgroundColor
        label="Comments"
        placeholder="Comments"
        value={AuthPerson}
        onChangeText={setAuthPerson}
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
        
        placeholder="Subtotal"
        value={accountno}
        onChangeText={setaccountno}
        keyboardType="default"
        disable={true}
        isRequired={true}
      />
         <EditText_WithBackgroundColor
        placeholder="Sales Tax"
        value={accountOPDate}
        onChangeText={setaccountOPDate}
        keyboardType="default"
        disable={true}
        isRequired={true}
      />
      <EditText_WithBackgroundColor
        placeholder="HsFees"
        value={accountOPAmnt}
        onChangeText={setaccountOPAmnt}
        keyboardType="numeric"
        disable={true}
        isRequired={true}
      />
       <EditText_WithBackgroundColor
        placeholder="GST"
        value={subscriptionDate}
        onChangeText={setsubscriptionDate}
        keyboardType="numeric"
        disable={true}
        isRequired={true}
      />
      <EditText_WithBackgroundColor
        placeholder="Purchase Assistance Fees"
        value={accountStatts}
        onChangeText={setaccountStatts}
        keyboardType='default'
        disable={true}
        isRequired={true}

      />


<EditText_WithBackgroundColor
        placeholder="Purchase Assistance Fees"
        value={accountStatts}
        onChangeText={setaccountStatts}
        keyboardType='default'
        disable={true}
        isRequired={true}

      />
         <EditText_WithBackgroundColor
        placeholder="Shipping"
        value={accountStatts}
        onChangeText={setaccountStatts}
        keyboardType='default'
        disable={true}
        isRequired={true}

      />
         <EditText_WithBackgroundColor
        placeholder="Finance Charge"
        value={accountStatts}
        onChangeText={setaccountStatts}
        keyboardType='default'
        disable={true}
        isRequired={true}

      />
         <EditText_WithBackgroundColor
        placeholder="Discount"
        value={accountStatts}
        onChangeText={setaccountStatts}
        keyboardType='default'
        disable={true}
        isRequired={true}

      />
         <EditText_WithBackgroundColor
        placeholder="Credit Card Fees"
        value={accountStatts}
        onChangeText={setaccountStatts}
        keyboardType='default'
        disable={true}
        isRequired={true}

      />
      <EditText_WithBackgroundColor
        placeholder="Total"
        value={accountStatts}
        onChangeText={setaccountStatts}
        keyboardType='default'
        disable={true}
        isRequired={true}

      />

      {/* <DropDownPicker
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
    />   */}





</React.Fragment>
)}


{/* <TouchableOpacity 
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
        <Text style={styles.Left500BOLDText}>{'Un-cleared Parcels:'}</Text>
  
        </View>


        <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Frieght:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.FreightCost != null ? CostumerDetails?.FreightCost : '$0.00'}</Text>
  
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
        <Text style={styles.Left500RegularText}>{'Closing Balance:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.ClosingBalance != null ? CostumerDetails?.ClosingBalance : '$0.00'}</Text>
  
        </View>
     
        </View>

<FlatList
      data={AccountHistoryList}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CustomListItem item={item} />}
      onEndReachedThreshold={0.1}
      ListFooterComponent={() => loading && <ActivityIndicator animating size="large" />}
    />
</React.Fragment>
)} */}

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



    
            
    <Text style={styles.Left500TextMedum}>{item.ParcelsList}</Text>
  
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
    alignSelf:'center',
  },

  container: {
    flex: 1,
    // width : wp('94'),
    alignContent:'center',
    backgroundColor :COLORS.white,
    borderRadius : 15,
    justifyContent:'flex-start',
    alignItems:'center',
    paddingBottom:30

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
    fontSize:rf(1.6),
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
});




