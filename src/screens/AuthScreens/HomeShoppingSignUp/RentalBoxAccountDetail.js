import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, ScrollView, FlatList, Modal, ActivityIndicator} from 'react-native';
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
import { EditRentalBoxCustomerDetailsSlice, PrintReportSlice, PrintTransactionReportSlice, getAccountHistorySlice, getCustomerDetailsSlice, getRBCustomerDetailsSlice, getRZAccountHistorySlice, saveRBAccountHistory, saveRBCostumerDetails } from '../../../redux/slice/categories';
import useRedux from '../../../components/useRedux';
import utills from '../../../utills';
import TouchableNativeFeedback from '../../../components/TouchableNativeFeedback';
import CheckboxListSingleSelected from '../../../components/CheckboxListSingleSelected';
import AddButtonAndTextfeild from '../../../components/AddButtonAndTextfeild';
import CustomButtonsBAndS from '../../../components/CustomButtonsBAndS';
import EditTextWithLable1 from '../../../components/EditTextWithLable1';
import InfoEditButtonsWithText from '../../../components/InfoEditButtonsWithText';

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


const [currentPage, setCurrentPage] = useState(1);
const [totalRecords, setTotalRecords] = useState(0);
const [loading, setLoading] = useState(false);
const [ISprimary, setISprimary] = useState(true);
const [IsPrimaryAcHolderSysGen, setIsPrimaryAcHolderSysGen] = useState(true);



useEffect(() => {
  dispatch(saveRBCostumerDetails(null))
  getCustomerdata()
  return () => {
   dispatch(saveRBAccountHistory(null))
  };
}, []);
const [additionalAddress1, setAdditionalAddress1] = useState({
});
const [additionalAddress2, setAdditionalAddress2] = useState({}

);const [additionalAddress3, setAdditionalAddress3] = useState( {}
  );
  const [Address1, setAddress1] = useState('Household Addressees');
  const [Address2, setAddress2] = useState('Household Addressees');
  const [Address3, setAddress3] = useState('Household Addressees');
  const [FirstNameAd, setFirstNameAd] = useState("");
const [lastNameAd, setlastNameAd] = useState("");
const [PhysicalAddressAd, setPhysicalAddressAd] = useState("");
const [EmailAddAd, setEmailAddAd] = useState("");

const [MobilePhoneAd, setMobilePhoneAd] = useState("");
const [modalVisible2, setModalVisible2] = useState(false);
const [info, setinfo] = useState("");

const handlenextClosePress = () => {
  // Add your logic for the "Back" button action here


  if (utills.isEmptyOrSpaces(FirstNameAd)) {
    utills.errorAlert('', 'Please Enter First Name');
     return;
   }
 

   
   if (utills.isEmptyOrSpaces(MobilePhoneAd)) {
    utills.errorAlert('','Please Enter Mobile Number');
     return;
    }
    if (utills.isEmptyOrSpaces(EmailAddAd)) {
     utills.errorAlert('','Please Enter Email Address');
      return;
    }


if (selectedAdd === "1"){
  const newValues = {
    FirstName: FirstNameAd,
    Surname: lastNameAd,
    PhoneNumber: MobilePhoneAd,
    Email: EmailAddAd,
    Address: PhysicalAddressAd,
    Isprimery:false,
    AddressesCustid:"0",
    TempCustomerId:"0",
    IscheckedAddress:false
  };
  setAddress1(newValues.FirstName + " " + newValues.Surname)
  setAdditionalAddress1(newValues);

}else if (selectedAdd === "2"){
  const newValues = {
    FirstName: FirstNameAd,
    Surname: lastNameAd,
    PhoneNumber: MobilePhoneAd,
    Email: EmailAddAd,
    Address: PhysicalAddressAd,
    Isprimery:false,
    AddressesCustid:"0",
    TempCustomerId:"0",
    IscheckedAddress:false
  };
  setAddress2(newValues.FirstName + " " + newValues.Surname)

  setAdditionalAddress2(newValues);

}
else if (selectedAdd === "3"){
  const newValues = {
    FirstName: FirstNameAd,
    Surname: lastNameAd,
    PhoneNumber: MobilePhoneAd,
    Email: EmailAddAd,
    Address: PhysicalAddressAd,
    Isprimery:false,
    AddressesCustid:"0",
    TempCustomerId:"0",
    IscheckedAddress:false
  };
  setAddress3(newValues.FirstName + " " + newValues.Surname)

  setAdditionalAddress3(newValues);
 }
//


 setModalVisible2(false);
  // navigation.goBack()
};
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
     // console.log("res?",res)
       if  (res?.statusCode == 200){
          navigation.navigate(SCREENS.PDFViewer,{item :res?.downloadLink});

        }else{
          utills.errorAlert(res?.message)
        }

    })
    .catch(e => {
      //  setLoading(false);
    });
};


const handleAddButtonPress1 = () => {
  setinfo("No")
  setselectedAdd("1")
setFirstNameAd(additionalAddress1?.FirstName)
setlastNameAd(additionalAddress1?.Surname)
setEmailAddAd(additionalAddress1?.Email)
setMobilePhoneAd(additionalAddress1?.PhoneNumber)
setPhysicalAddressAd(additionalAddress1?.Address)
setModalVisible2(true);

  }
  
  
  const handleAddButtonPress2 = () => {
    setselectedAdd("2")
    setinfo("No")

    setFirstNameAd(additionalAddress2?.FirstName)
    setlastNameAd(additionalAddress2?.Surname)
    setEmailAddAd(additionalAddress2?.Email)
    setMobilePhoneAd(additionalAddress2?.PhoneNumber)
    setPhysicalAddressAd(additionalAddress2?.Address)
    setModalVisible2(true);

      }
      const handleAddButtonPress3 = () => {
        setselectedAdd("3")
        setinfo("No")

        setFirstNameAd(additionalAddress3?.FirstName)
        setlastNameAd(additionalAddress3?.Surname)
        setEmailAddAd(additionalAddress3?.Email)
        setMobilePhoneAd(additionalAddress3?.PhoneNumber)
        setPhysicalAddressAd(additionalAddress3?.Address)
        setModalVisible2(true);

          }



          const handleInfoButtonPress1 = () => {
            setselectedAdd("1")
            setinfo("Yes")

          setFirstNameAd(additionalAddress1?.FirstName)
          setlastNameAd(additionalAddress1?.Surname)
          setEmailAddAd(additionalAddress1?.Email)
          setMobilePhoneAd(additionalAddress1?.PhoneNumber)
          setPhysicalAddressAd(additionalAddress1?.Address)
          setModalVisible2(true);
          
            }
            
            
            const handleInfoButtonPress2 = () => {
              setselectedAdd("2")
              setinfo("Yes")

              setFirstNameAd(additionalAddress2?.FirstName)
              setlastNameAd(additionalAddress2?.Surname)
              setEmailAddAd(additionalAddress2?.Email)
              setMobilePhoneAd(additionalAddress2?.PhoneNumber)
              setPhysicalAddressAd(additionalAddress2?.Address)
              setModalVisible2(true);
          
                }
                const handleInfoButtonPress3 = () => {
                  setselectedAdd("3")
                  setinfo("Yes")

                  setFirstNameAd(additionalAddress3?.FirstName)
                  setlastNameAd(additionalAddress3?.Surname)
                  setEmailAddAd(additionalAddress3?.Email)
                  setMobilePhoneAd(additionalAddress3?.PhoneNumber)
                  setPhysicalAddressAd(additionalAddress3?.Address)
                  setModalVisible2(true);
          
                    }




  // const handleGoToLogin = () => {
    const closeModal = () => {
    
      setModalVisible2(false);
  
    };


const LetterBox = ['Private',
  'Commercial',
 ];
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

  const arrayOfSubstrings = (res?.CusId[0]?.Text).split(' - ');
let LetterBoxCode =  arrayOfSubstrings[1] ?? ""
console.log("arrayOfSubstrings",arrayOfSubstrings)
//
 setAllotedPoboxnuPoboxnu(LetterBoxCode)
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

    const formattedItems3 = res?.DesiredLocation?.map((item) => ({
      label: item.Text,
      value: item.Value,
    }));

    setItemsLocation(formattedItems3);

    
    setValuePOBox(res?.aaData?.RequestedLB)
   // console.log("formattedItems",itemsLocation)

    setaccountno(res?.aaData?.AccountNo);
   // 
   console.log("res?.aaData",res?.aaData)
   const arrayOfSubstrings = (res?.aaData?.LetterBoxCode).split('-');
let LetterBoxCode =  arrayOfSubstrings[0] ?? ""

    setaccountOPDate(utills.getDateBeforeT(res?.aaData?.AccountOpeningDate));
    setaccountOPAmnt(res?.aaData?.OpeningAmount?.toString());
    setsubscriptionDate(utills.getDateBeforeT(res?.aaData?.SubscriptionDueDate));
    setaccountStatts(res?.aaData?.AccountStatus === 1 ? 'ACTIVE' : 'INACTIVE');
    setFirstName(res?.aaData?.FirstName);
    setlastName(res?.aaData?.Surname);
    setPhysicalAddress(res?.aaData?.Address);
    setPoboxnu(res?.aaData?.POBox);
    setirdnu(res?.aaData?.IRDNumber);

    setEmailAdd(res?.aaData?.Email);
    setMobilePhone(res?.aaData?.PhoneNumber);
    setAccountId(res?.aaData?.AccountId);
    setCustId(res?.aaData?.Id);
    setLetterBoxType(res?.aaData?.LetterBoxType);
    setLetterBoxId(res?.aaData?.LetterBoxId);
    setISprimary(res?.aaData?.IsPrimary)
    setIsPrimaryAcHolderSysGen(res?.aaData?.IsPrimaryAcHolderSysGen)

    const selectedValue = res?.aaData?.LetterBoxType;
const upperCaseSelectedValue = selectedValue ? selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1) : '';

    setselectedLBValue(upperCaseSelectedValue)
    // setAllotedPoboxnuPoboxnu(LetterBoxCode)
    setAdd1(res?.aaData?.AdditionalHouseholdAddress1);
    setAdd2(res?.aaData?.AdditionalHouseholdAddress2);
    setAdd3(res?.aaData?.AdditionalHouseholdAddress3);
    getAccountHistory(res?.aaData?.AccountId)

var AdditionalCustomerList = res?.aaData?.AdditionalCustomerList
if (AdditionalCustomerList.length >= 1){
  setAdditionalAddress1(AdditionalCustomerList[0])
  setAddress1(AdditionalCustomerList[0].FirstName + " " + AdditionalCustomerList[0].Surname)

}

if (AdditionalCustomerList.length >= 2){
  setAdditionalAddress2(AdditionalCustomerList[1])
  setAddress2(AdditionalCustomerList[1].FirstName + " " + AdditionalCustomerList[1].Surname)

}
if (AdditionalCustomerList.length == 3){
  setAdditionalAddress3(AdditionalCustomerList[2])
  setAddress3(AdditionalCustomerList[2].FirstName + " " + AdditionalCustomerList[2].Surname)

}
setLocation(res?.aaData?.DesiredLocation.toString())

    })




    .catch(e => {
      //  setLoading(false);
    });
};
const [selectedAdd, setselectedAdd] = useState("");
const setLocation = (location) => {

  setValueLocation(location)

}
const getAccountHistory = (accountID, page = 1) => {

  let data = {
    Id    : accountID,
    iDisplayStart: (page - 1) * 20,  // Assuming 2 records per page, adjust as needed
    iDisplayLength: 20
   
   
  };

  dispatch(getRZAccountHistorySlice(data))
    .unwrap()
    .then(res => {
     // console.log("res",res)
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
    getAccountHistory(AccountId, nextPage);
    setCurrentPage(nextPage);
  }
};
const CostumerDetails  = useSelector(state => state.category.RBCostumerDetails);
const AccountHistory  = useSelector(state => state.category.RBAccountHistory);
// const AccountHistoryList  = AccountHistory?.aaData;
const AccountHistoryListDetail  = AccountHistory?.aaData;
// console.log("AccountHistory",AccountHistoryListDetail)
const [AccountHistoryList, setAccountHistoryList] = useState([]);

const [isEditing, setIsEditing] = useState(false);

const handleEditPress = () => {
  setenableText(false)
  setIsEditing(true);
};

const handleSavePress = () => {
 
  if (utills.isEmptyOrSpaces(FirstName)) {
    utills.errorAlert('', 'Please Enter First Name');
    return;
  }

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

  console.log('additionalAddress1==33', additionalAddress1);

  let additionalAddressArrays = [];



  const addressesToAdd = [additionalAddress1, additionalAddress2, additionalAddress3];

  addressesToAdd.forEach(address => {
    console.log('address', address);

    if (address && Object.keys(address).length > 0 && address.firstname?.trim() !== '') {
      additionalAddressArrays.push(address);

    }
  });

  console.log('additionalAddressArrays:', additionalAddressArrays);
   


  let data = {
    userID:userData?.userID,
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
   AdditionalHouseholdAddress1:  additionalAddress1?.FirstName && additionalAddress1?.Surname
   ? additionalAddress1.FirstName + ' ' + additionalAddress1.Surname
   : "",
   
   // additionalAddress1?.FirstName + " " + additionalAddress1?.surname ,
   AdditionalHouseholdAddress2:  additionalAddress2?.FirstName && additionalAddress2?.Surname
   ? additionalAddress2.FirstName + ' ' + additionalAddress2.Surname
   : "",
   AdditionalHouseholdAddress3:  additionalAddress3?.FirstName && additionalAddress3?.Surname
   ? additionalAddress3.FirstName + ' ' + additionalAddress3.Surname
   : "",
   RequestedLB:valuePOBox,
   DesiredLocation:valueLocation,
  AccountStatus:valueStatusMenu,
  LetterBoxType:selectedLBValue,
  SubscriptionDueDate:subscriptionDate,
  OldSubDueDate:"",
  OpeningAmount:accountOPAmnt,
Notes:"",
Id:0,
AdditionalCustomerList:additionalAddressArrays
  };
 // 
 console.log('dataaaaaaar',data)

  dispatch(EditRentalBoxCustomerDetailsSlice(data))
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
      //  setLoading(false);
    });
};
const handleCancelPress = () => {
  // Add logic to cancel the editing and revert changes
  setenableText(true)

  setIsEditing(false);
};
const handleSelectionLBChangeItem = (selectedItems) => {
 
  // if  (selectedItems[0] === "Medium"){
  //   setselectedLBValue("M")
  // }else if  (selectedItems[0] === "Large (12 inches x 6 inches)"){
  //   setselectedLBValue("L")
  // }


  if (selectedItems && selectedItems.length > 0) {
    console.log('Selected Item:', selectedItems[0]);
  setselectedLBValue(selectedItems[0]);
  } else {
    console.log('No selected items');
    // Handle the case where no items are selected
    setselectedLBValue("");
  }

};

const [selectedLBValue, setselectedLBValue] = useState("");

//console.log("AccountHistory",AccountHistory)

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
const [irdnu, setirdnu] = useState("");

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
const handleBackClosePress = () => {
  // Add your logic for the "Back" button action here
  setModalVisible2(false);
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
       {/* <EditText_WithBackgroundColor
        label="P.O. Box Number"
        placeholder="P.O. Box Number"
        value={Poboxnu}
        onChangeText={setPoboxnu}
        keyboardType="default"
        disable={enableText}

      /> */}
      <View style={{alignSelf:'flex-start',paddingHorizontal:15}}>
          <Text  style={{
    marginTop: hp('2%'),
    fontSize: rf(1.8),
    color: COLORS.Lableheading,
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('1%'),
    textAlign:'left'

  }}>P.O. Box Size
            <Text  style={[styles.Left500BOLDText,{color :'red'}]}> *</Text>

            </Text>
            </View>
      <View
  pointerEvents={'none'} // Disable the entire View if enableText is true

>
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
    </View>
       <EditText_WithBackgroundColor
        label="I.R.D #"
        placeholder="IRD"
        value={irdnu}
        onChangeText={setirdnu}
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
        isRequired={true}
      />


<View style={{alignSelf:'flex-start',paddingHorizontal:15}}>
          <Text  style={{
    marginTop: hp('2%'),
    fontSize: rf(1.8),
    color: COLORS.Lableheading,
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('1%'),
    textAlign:'left'

  }}>Location
            <Text  style={[styles.Left500BOLDText,{color :'red'}]}> *</Text>

            </Text>
            </View>
<View
 // pointerEvents={enableText ? 'none' : 'auto'} // Disable the entire View if enableText is true
 pointerEvents={'none'} // Disable the entire View if enableText is true

>
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
</View>

</React.Fragment>
)}
{ISprimary || IsPrimaryAcHolderSysGen ? (
  <>

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
{/* <EditText_WithBackgroundColor
        placeholder="Account Status"
        value={accountStatts}
        onChangeText={setaccountStatts}
        keyboardType='default'
        disable={true}

      /> */}
<View
 // pointerEvents={enableText ? 'none' : 'auto'} // Disable the entire View if enableText is true
 pointerEvents={'none'} // Disable the entire View if enableText is true

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
           <View style={[styles.row,{paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
        <View style={styles.col8}>
            <Text  style={styles.Left500BOLDText}>Additional Household Addressees
            <Text  style={[styles.Left500BOLDText,{color :'red'}]}> *</Text>

            </Text>
              </View>
                            </View>

               {/* {            Address1 === "" || Address1 === " " ? (
    <AddButtonAndTextfeild onPress={handleAddButtonPress1} text={Address1} text1={"1"} />
  ) : (
    <InfoEditButtonsWithText onEditPress={handleAddButtonPress1} Oninfopress={handleInfoButtonPress1} text={Address1} text1={"1"} />
  )} */}
<InfoEditButtonsWithText onEditPress={handleAddButtonPress1} Oninfopress={handleInfoButtonPress1} text={Address1} text1={"1"} />
<InfoEditButtonsWithText onEditPress={handleAddButtonPress2} Oninfopress={handleInfoButtonPress2} text={Address2} text1={"2"} />
<InfoEditButtonsWithText onEditPress={handleAddButtonPress3} Oninfopress={handleInfoButtonPress3} text={Address3} text1={"3"} />



  {/* {Address2 === "" || Address2 === " " ? (
    <AddButtonAndTextfeild onPress={handleAddButtonPress3} text={Address2} text1={"2"} />
  ) : (
    <InfoEditButtonsWithText onEditPress={handleAddButtonPress2} Oninfopress={handleInfoButtonPress2} text={Address2} text1={"2"} />
  )} */}

  {/* {Address3 === "" || Address3 === " " ? (
    <AddButtonAndTextfeild onPress={handleAddButtonPress3} text={Address3} text1={"3"} />
  ) : (
    <InfoEditButtonsWithText onEditPress={handleAddButtonPress3} Oninfopress={handleInfoButtonPress3} text={Address3} text1={"3"} />
  )} */}

                            {/* <AddButtonAndTextfeild onPress={handleAddButtonPress1} text={Address1} text1={"1"} />
        <AddButtonAndTextfeild onPress={handleAddButtonPress2} text={Address2} text1={"2"}/>
        <AddButtonAndTextfeild onPress={handleAddButtonPress3} text={Address3}text1={"3"} />
<InfoEditButtonsWithText onEditPress={handleAddButtonPress1} Oninfopress={handleAddButtonPress1} text={Address1} text1={"1"}/>
 */}

                            {/* <EditText_WithBackgroundColor
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

      /> */}


       <View style={[styles.row,{paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
        <View style={styles.col8}>
            <Text  style={styles.Left500BOLDText}>Please indicate Letter Box required
            <Text  style={[styles.Left500BOLDText,{color :'red'}]}> *</Text>

            </Text>
              </View>
                            </View>
<View style={{alignSelf:'flex-start'}}
pointerEvents={'none'} 
>
<CheckboxListSingleSelected options={LetterBox} onSelectionChange={handleSelectionLBChangeItem} preselectedItem={selectedLBValue} />


</View>



</React.Fragment>
)}
</>

):null
}
{/* { (ISprimary == true || IsPrimaryAcHolderSysGen == true) ?  */}
{ISprimary || IsPrimaryAcHolderSysGen ? (
  <View style={styles.rowAc}>
    <TouchableOpacity style={{ alignItems: 'center' }} onPress={handlPrintHistory}>
      <View style={{ backgroundColor: COLORS.primary, borderRadius: 10, alignItems: 'center', width: 60, height: 60, alignContent: 'center', justifyContent: "center" }}>
        <Image source={IMAGES.PrintReport} style={styles.logo} />
      </View>
      <Text style={styles.Left500Text}>Print</Text>
      <Text style={styles.Left500Text}>History</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={handleHistoryReport} style={{ alignItems: 'center' }}>
      <View style={{ backgroundColor: COLORS.primary, borderRadius: 10, alignItems: 'center', width: 60, height: 60, alignContent: 'center', justifyContent: "center" }}>
        <Image source={IMAGES.HistoryReport} style={styles.logo} />
      </View>
      <Text style={styles.Left500Text}>Online System</Text>
      <Text style={styles.Left500Text} numberOfLines={2} ellipsizeMode='tail'>Payments Report</Text>
    </TouchableOpacity>
    {!isEditing ? (
      <TouchableNativeFeedback style={{ alignItems: 'center' }} onPress={handleEditPress}>
        <View style={{ backgroundColor: COLORS.primary, borderRadius: 10, alignItems: 'center', width: 60, height: 60, alignContent: 'center', justifyContent: "center" }}>
          <Image source={IMAGES.EditReport} style={styles.logo} />
        </View>
        <Text style={styles.Left500Text}>Edit</Text>
      </TouchableNativeFeedback>
    ) : (
      <>
        <TouchableNativeFeedback style={{ alignItems: 'center' }} onPress={handleSavePress}>
          <View style={{ backgroundColor: COLORS.primary, borderRadius: 10, alignItems: 'center', width: 60, height: 60, alignContent: 'center', justifyContent: "center" }}>
            <Image source={IMAGES.saveIcon} style={styles.logo} />
          </View>
          <Text style={styles.Left500Text}>Save</Text>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback style={{ alignItems: 'center' }} onPress={handleCancelPress}>
          <View style={{ backgroundColor: COLORS.red, borderRadius: 10, alignItems: 'center', width: 60, height: 60, alignContent: 'center', justifyContent: "center" }}>
            <Image source={IMAGES.closeIcon} style={styles.logo} />
          </View>
          <Text style={styles.Left500Text}>Cancel</Text>
        </TouchableNativeFeedback>
      </>
    )}
  </View>
) : null}

{/* <View style = {styles.rowAc} >
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
  
  </View> */}
  {ISprimary || IsPrimaryAcHolderSysGen ? (
<>
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
        <Text style={styles.Left500RegularText}>{'Membership Dues:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.RegCharges != null ? CostumerDetails?.RegCharges : '$0.00'}</Text>
  
        </View>
       

<View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Key Deposit:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.KeyFee != null ? CostumerDetails?.KeyFee : '$0.00'}</Text>
  
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
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={() => loading && <ActivityIndicator animating size="large" />}
    />

</React.Fragment>
)}
</>
    ) : 
    
    
    <View style={{width:wp('90%'),alignSelf:'center',flex:1}}>
<View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Opening Balance:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.OpeningBalance != null ? CostumerDetails?.OpeningBalance : '$0.00'}</Text>
  
        </View>
        <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Membership Dues:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.RegCharges != null ? CostumerDetails?.RegCharges : '$0.00'}</Text>
  
        </View>
       

<View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Key Deposit:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.KeyFee != null ? CostumerDetails?.KeyFee : '$0.00'}</Text>
  
        </View>

       

      
        <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Closing Balance:'}</Text>
        <Text style={styles.Left500BOLDText}>{CostumerDetails?.ClosingBalance != null ? CostumerDetails?.ClosingBalance : '$0.00'}</Text>
  
        </View>
     
        </View>
    
    
    }
  
        {/* <View style = {{width:wp('90%')}}>
      
<CustomButtons
        onBackPress={handleBackPress}
        onNextPress={handleNextPress}
      />
        </View> */}




          {/* </ScrollView> */}
        
    </View>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <View style={[styles.row,{backgroundColor : COLORS.primary,paddingVertical:10,paddingHorizontal:20,alignContent:'left',width : wp('90'),borderTopLeftRadius: 10,borderTopRightRadius: 10}]}>
                <View style={styles.col8}>
                  <Text  style={[styles.Left500BOLDText,{color:COLORS.white}]}>Add Additional Household Addressees
</Text>

<TouchableOpacity onPress={handleBackClosePress} style={styles.addButton}>
  {/* You can replace 'plusIcon.png' with your image source */}
  <Icons
      name={'closecircleo'}
      Type={Icon.AntDesign}
      size={rf(2.4)}
      color={COLORS.white}
    /></TouchableOpacity>


                </View>
              </View>

              <Text  style={[styles.Left500BOLDText,{color:COLORS.white}]}>
              </Text>

          <EditTextWithLable1
        label="First Name *"
        placeholder="Enter First Name"
        value={FirstNameAd}
        onChangeText={setFirstNameAd}
        keyboardType="default"
        disable={true}

      />
         <EditTextWithLable1
        label="Last Name *"
        placeholder="Enter Last Name"
        value={lastNameAd}
        onChangeText={setlastNameAd}
        keyboardType="default"
        disable={true}

      />


        <EditTextWithLable1
        label="Telephone No *"
        placeholder="Enter Telephone No"
        value={MobilePhoneAd}
        onChangeText={setMobilePhoneAd}
        keyboardType='numeric'
        maxLength={10}
        disable={true}


      />
      <EditTextWithLable1
        label="Email Address *"
        placeholder="Enter Email Address"
        value={EmailAddAd}
        onChangeText={setEmailAddAd}
        keyboardType="default"
        disable={true}

      />


<EditTextWithLable1
        label="Address"
        placeholder="Enter Address"
        value={PhysicalAddressAd}
        onChangeText={setPhysicalAddressAd}
        keyboardType="default"
        disable={true}

      />
  {info === "No" ? (
    <CustomButtonsBAndS
        onBackPress={handleBackClosePress}
        onNextPress={handlenextClosePress}
      />  ) : (
null  )}


                   </View>
        </View>
      </Modal>

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
const updatedReceiptNotes = receiptNotes ? receiptNotes.replace(/^<br\s*\/?>/i, '').replace(/<br\s*[/]?>/gi, '\n') : null;
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
<View style={{flex:1}}>
<Text style={styles.Left500TextMedum}
    
    >{item.transactionType}
    
    </Text>

</View>
   
  
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
        
        <View>

    {/* <Text style={styles.Left500TextMedum}>{item.totalAmount.replace('-', '')}</Text> */}
    {item.TransactionText !== "" && (
  <View style={{padding:3,flex:1}}>
  <Text style={styles.Left500TextMedum}>{item.TransactionText}: ${item.totalAmount.replace('-', '')}</Text>
  </View>
)}
{/* <Text style={styles.Left500TextMedum}>Online Pay:{item.totalAmount.replace('-', '')}</Text> */}

{(item.transactionTypeId === 2 || item.transactionTypeId === 5 || item.transactionTypeId === 6 || item.transactionTypeId === 7 || item.transactionTypeId === 8 || item.transactionTypeId === 12 )&& (
<View style={{backgroundColor:COLORS.yellow ,padding:3,flex:1}}>
<Text style={styles.Left500TextMedum}>Paid Amount: ${item.totalAmount.replace('-', '')}</Text>
</View>
)
}
{/* {(item.TransactionTypeId === "1" || item.TransactionTypeId === "11"|| item.TransactionTypeId === "40"|| item.TransactionTypeId === "42" )&& ( */}

{(item.transactionTypeId === 1 || item.transactionTypeId === 11 || item.transactionTypeId === 40 || item.transactionTypeId === 42 || item.transactionTypeId === 34 || item.transactionTypeId === 17 || item.transactionTypeId === 38 || item.transactionTypeId === 20)&& (
  <View style={{backgroundColor:COLORS.yellow ,padding:3,flex:1}}>
<Text style={styles.Left500TextMedum}>Dues_Amount: ${item.totalAmount.replace('-', '')}</Text>
</View>
)
}
{(item.transactionTypeId === 4 )&& (
 <View style={{backgroundColor:COLORS.yellow ,padding:3,flex:1}}>
<Text style={styles.Left500TextMedum}>Adjust Amount: ${item.totalAmount.replace('-', '')}</Text>
 </View>
)
}

{(item.transactionTypeId === 10 )&& (
 <View style={{backgroundColor:COLORS.yellow ,padding:3,flex:1}}>
<Text style={styles.Left500TextMedum}>Cancel Payment: ${item.totalAmount.replace('-', '')}</Text>
 </View>
)
}


{(item.transactionTypeId === 9 )&& (
 <View style={{backgroundColor:COLORS.yellow ,padding:3,flex:1}}>
<Text style={styles.Left500TextMedum}>CF Amount: ${item.totalAmount.replace('-', '')}</Text>
 </View>
)
}
</View>

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
    flexDirection:"row",
    justifyContent:'space-between'
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

  },  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
   
  },
  modalContent: {
    backgroundColor: 'white',
    // padding: 10,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    width:wp("90%")
  },
  rowList2: {
    flexDirection: 'row',
    justifyContent:'space-between',
    // paddingHorizontal:10,
    marginVertical:10,
    alignItems:'center',
    alignContent:'center'

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




