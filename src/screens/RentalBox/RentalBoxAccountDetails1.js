import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, ScrollView, Modal} from 'react-native';
import React from 'react';
 import {COLORS, CONSTANTS, DEFAULTARRAYS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES} from '../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';
import axios from 'axios';

import { useEffect,useState } from 'react';
import GradientBackground from '../../components/GradientBackground';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import EditTextWithLable from '../../components/EditTextWithLable';
import CustomButtons from '../../components/CustomButtons';
import CustomCheckButtons from '../../components/CustomCheckButtons';
import EditTextBottomBorder from '../../components/EditTextBottomBorder';
import CustomButtonsBAndS from '../../components/CustomButtonsBAndS';
import CheckboxList from '../../components/CheckboxList';
import CheckboxListSingleSelected from '../../components/CheckboxListSingleSelected';
import utills from '../../utills';
import { RegisterSlicePOBOX } from '../../redux/slice/auth';
import useRedux from '../../components/useRedux';
import TouchableNativeFeedback from '../../components/TouchableNativeFeedback';
// import CustomRadioButtons from '../../components/CustomRadioButtons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useRoute } from '@react-navigation/native';
import { getAllAddressListSlice, getPBDSSlice, getRentalBoxSlice, saveIsLoading } from '../../redux/slice/categories';
import { useSelector } from 'react-redux';
import ImageUploadModal from '../../components/ImageUploadModal';
import AddButtonAndTextfeild from '../../components/AddButtonAndTextfeild';
import EditTextWithLable1 from '../../components/EditTextWithLable1';
import Icons, { Icon } from '../../components/Icons';

export default function RentalBoxAccountDetails1({navigation}) {
  const [selectedLocationValue, setselectedLocationValue] = useState("");
  const [selectedSizeValue, setselectedSizeValue] = useState("");
  const [selectedLBValue, setselectedLBValue] = useState("");

  const [selectedSizeValue1, setselectedSizeValue1] = useState('');
  const route = useRoute();
  const [selectedFileName, setselectedFileName] = useState('Example.jpg');
  const [selectedAdd, setselectedAdd] = useState("");

  const [additionalAddressArray, setadditionalAddressArray] = useState([]);

  const [additionalAddress1, setAdditionalAddress1] = useState({
    // firstname: '',
    // surname: '',
    // phonenumber: '',
    // email: '',
    // address: '',
    // isprimery:false,
    // tempcustomerid:"0",
    // addressescustid:'0'

  });
  const [additionalAddress2, setAdditionalAddress2] = useState({
    // firstname: '',
    // surname: '',
    // phonenumber: '',
    // email: '',
    // address: '',
    // isprimery:false,
    // tempcustomerid:"0",
    // addressescustid:'0'

  }
  
  );
  const [additionalAddress3, setAdditionalAddress3] = useState(
  //   {
  //   firstname: '',
  //   surname: '',
  //   phonenumber: '',
  //   email: '',
  //   address: '',
  //   isprimery:false,
  //   tempcustomerid:"0",
  //   addressescustid:'0'
  // }
  {}
  );


  const {Params1 } = route.params;
useEffect(() => {

getAllAdressddata()
const currentDate = new Date(); // Create a new Date object representing the current date and time
const dateString = currentDate.toISOString().split('T')[0]; // Convert to ISO format and extract the date part
console.log("Params1",Params1)
if (Params1?.DOB != ''){
  setdob(Params1?.DOB)
} 
console.log(dateString);
setAppliDate(dateString)
  return () => {
   
  };
}, []);

const RentalBoxDetails  = useSelector(state => state.category.RentalBoxDetails);
 const USERDETAIL  = RentalBoxDetails?.data?.data
//  console.log("USERDETAIL",USERDETAIL)
const getAllAdressddata = () => {
  console.log('dataaaaaaar',data)

  let data = {
    id: Params1.UserId,

  };
  dispatch(getRentalBoxSlice(data))
    .unwrap()
    .then(res => {
      console.log("res",res)


    })
    .catch(e => {
      //  setLoading(false);
    });
};
const LocationList2 = ['PO - General Post Office',
'BP - The valley',
'PW - Public Works',
'Ep - Eastern Polyclinic',
'Wp - Western Polyclinic', 
'WE - West End Clinic',
'RI - Rainbow Isles (Best Buy Supermarket – East)'
 ];
 const SizeBox = ['Medium',
  'Large (12 inches x 6 inches)',
 ];
 const LetterBox = ['Private',
  'Commercial',
 ];
const [selectedSize, setselectedSize] = useState(null);
const [selectedLocation, setsselectedLocation] = useState(null);
const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
const [modalVisible, setModalVisible] = useState(false);
const [modalVisible2, setModalVisible2] = useState(false);

const [title, settitle] = useState('');

const [FirstName, setFirstName] = useState(Params1?.FirstName);
const [lastName, setlastName] = useState(Params1?.LastName);

const [PhysicalAddress, setPhysicalAddress] = useState(Params1?.Address);
const [EmailAdd, setEmailAdd] = useState(Params1?.Email);

const [MobilePhone, setMobilePhone] = useState(Params1?.PhoneNumber);


const [ApplicantSign, setApplicantSign] = useState(Params1?.FirstName + " " + Params1?.LastName);

const [ApplicantName, setApplicantName] = useState(Params1?.FirstName);
const [AppliDate, setAppliDate] = useState('');
const [Address1, setAddress1] = useState('Household Addressees');
const [Address2, setAddress2] = useState('Household Addressees');
const [Address3, setAddress3] = useState('Household Addressees');

const [dob, setdob] = useState('Date of Birth');

const [FirstNameAd, setFirstNameAd] = useState("");
const [lastNameAd, setlastNameAd] = useState("");
const [PhysicalAddressAd, setPhysicalAddressAd] = useState("");
const [EmailAddAd, setEmailAddAd] = useState("");

const [MobilePhoneAd, setMobilePhoneAd] = useState("");




const showDatePicker = () => {
  setDatePickerVisibility(true);
};

const hideDatePicker = () => {
  setDatePickerVisibility(false);
};
// 

const handleAddButtonPress1 = () => {
  setselectedAdd("1")
  console.log("HIIIIIII",additionalAddress1)
setFirstNameAd(additionalAddress1?.firstname ?? "")
setlastNameAd(additionalAddress1?.surname ?? "")
setEmailAddAd(additionalAddress1?.email ?? "")
setMobilePhoneAd(additionalAddress1?.phonenumber ?? "")
setPhysicalAddressAd(additionalAddress1?.address ?? "")
setModalVisible2(true);
console.log("FirstNameAd",FirstNameAd)



// setselectedAdd("1");

// if (additionalAddress1) {
//   console.log("HIIIIIII", additionalAddress1);

//   setFirstNameAd(additionalAddress1.firstname);
//   setlastNameAd(additionalAddress1.surname);
//   setEmailAddAd(additionalAddress1.email);
//   setMobilePhoneAd(additionalAddress1.phonenumber);
//   setPhysicalAddressAd(additionalAddress1.address);

// }
//   setModalVisible2(true);

  }
  
  
  const handleAddButtonPress2 = () => {
    setselectedAdd("2")

    setFirstNameAd(additionalAddress2?.firstname ?? "")
    setlastNameAd(additionalAddress2?.surname ?? "")
    setEmailAddAd(additionalAddress2?.email ?? "")
    setMobilePhoneAd(additionalAddress2?.phonenumber ?? "")
    setPhysicalAddressAd(additionalAddress2?.address ?? "")
    setModalVisible2(true);

      }
      const handleAddButtonPress3 = () => {
        setselectedAdd("3")

        setFirstNameAd(additionalAddress3?.firstname ?? "")
        setlastNameAd(additionalAddress3?.surname ?? "")
        setEmailAddAd(additionalAddress3?.email ?? "")
        setMobilePhoneAd(additionalAddress3?.phonenumber ?? "")
        setPhysicalAddressAd(additionalAddress3?.address ?? "")
        setModalVisible2(true);

          }
  // const handleGoToLogin = () => {
    const closeModal = () => {
    
      setModalVisible2(false);
  
    };
    const handleBackPress = () => {
      // Add your logic for the "Back" button action here
      setModalVisible2(false);
    };
const handleConfirm = (date) => {
  // console.warn("A date has been picked: ", date.toString());
  const dateObject = new Date(date.toString());
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Adding 1 because getMonth() returns zero-based months
  const day = String(dateObject.getDate()).padStart(2, '0');
  
  const formattedDate = `${year}-${month}-${day}`;
  console.log(formattedDate); // Output: 2023-12-13

  setdob(formattedDate)
  hideDatePicker();

};

const uploadImage = async (imageUri) => {

  dispatch(saveIsLoading(true))
const formData = new FormData();
    
    if (imageUri) {
    formData.append("image", {
      name: imageUri?.assets[0].uri.split("/").slice(-1).toString(),
      type: "image/jpg",
      uri: imageUri?.assets[0].uri,
    });
  }
    let config = {
      headers: {
        // Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data;",
      },
    };
    console.log(JSON.stringify(formData));
    const onSuccess = ({ data }) => {
      console.log('onSuccess============');
      console.log(data);

      //AsyncStorage.setItem(CONSTANTS.UserData, JSON.stringify(data.data));
     
     // dispatch(saveUserData(userdata))
      dispatch(saveIsLoading(false))
      setselectedFileName(data?.FilePath)
      utills.successAlert('', data?.msg);
    
    };
  
    const onFailure = (error) => {
      dispatch(saveIsLoading(false))

      console.log('=================e===================');
      console.log(error);
      console.log('====================================');
      throw error;
    };
   axios        
   //.post('https://api.caribbargains.com/user/uploadimage', formData, config)
//post

      .post('http://hsstrain.apis.gov.ai/api/AccountApi/uploadPostOffice', formData, config)
      .then(onSuccess)
      .catch(onFailure);
    };

const currentDate = new Date();
  // Set the maximum selectable date to the current date
  const maximumDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());


const handleClosePress = () => {
  // Add your logic for the "Back" button action here
  navigation.goBack()
};
const handlenextClosePress = () => {
  // Add your logic for the "Back" button action here

console.log("FirstNameAd",FirstNameAd)
  if (utills.isEmptyOrSpaces(FirstNameAd)) {
    // utills.errorAlert('', 'Please Enter First Name');
    utills.confirmMessageAlert("Please Enter First Name")
     return;
   }
 

   
   if (utills.isEmptyOrSpaces(MobilePhoneAd)) {
    utills.confirmMessageAlert('','Please Enter Mobile Number');
     return;
    }

    if (utills.isEmptyOrSpaces(EmailAddAd)) {
      // utills.errorAlert('', 'Please Enter First Name');
      utills.confirmMessageAlert("Please Enter Email-Id")
       return;
     }
     if (!utills.validateEmail(EmailAddAd)) {
      // utills.errorAlert('', 'Please Enter First Name');
      utills.confirmMessageAlert("Invalid Email-Id")
       return;
     }
    // if (utills.isEmptyOrSpaces(PhysicalAddressAd)) {
    //  utills.confirmMessageAlert('','Please Enter Physical Address');
    //   return;
    // }


if (selectedAdd === "1"){
  const newValues = {
    firstname: FirstNameAd,
    surname: lastNameAd,
    phonenumber: MobilePhoneAd,
    email: EmailAddAd,
    address: PhysicalAddressAd,
    isprimery:false,
    addressescustid:"0",
    TempCustomerId:"0"

  };
  setAddress1(newValues.firstname + " " + newValues.surname)
  setAdditionalAddress1(newValues);

}else if (selectedAdd === "2"){
  const newValues = {
    firstname: FirstNameAd,
    surname: lastNameAd,
    phonenumber: MobilePhoneAd,
    email: EmailAddAd,
    address: PhysicalAddressAd,
    isprimery:false,
    addressescustid:"0",
    TempCustomerId:"0"
  };
  setAddress2(newValues.firstname + " " + newValues.surname)

  setAdditionalAddress2(newValues);

}
else if (selectedAdd === "3"){
  const newValues = {
    firstname: FirstNameAd,
    surname: lastNameAd,
    phonenumber: MobilePhoneAd,
    email: EmailAddAd,
    address: PhysicalAddressAd,
    isprimery:false,
    addressescustid:"0",
    TempCustomerId:"0"
  };
  setAddress3(newValues.firstname + " " + newValues.surname)

  setAdditionalAddress3(newValues);
 }
//


 setModalVisible2(false);
  // navigation.goBack()
};
const handleEditPress = () => {
    
  setModalVisible(true);
};
// const saveAdd = () => {

//   // setadditionalAddressArray([
//   //   additionalAddress1,
//   //   additionalAddress2,
//   //   additionalAddress3,
//   //   // You can add more addresses to the array if needed
//   // ]);


//   if (additionalAddress1?.firstname.trim() !== '') {
//     setadditionalAddressArray(prevAddresses => [
//       ...prevAddresses,
//       additionalAddress1,
//       // You can add more addresses to the array if needed
//     ]);
//   }

//   if (additionalAddress2?.firstname.trim() !== '') {
//     setadditionalAddressArray(prevAddresses => [
//       ...prevAddresses,
//       additionalAddress2,
//       // You can add more addresses to the array if needed
//     ]);
//   }
//   if (additionalAddress3?.firstname.trim() !== '') {
//     setadditionalAddressArray(prevAddresses => [
//       ...prevAddresses,
//       additionalAddress3,
//       // You can add more addresses to the array if needed
//     ]);
//   }

// }
const saveAdd = () => {
  console.log('Before clearing:', additionalAddressArray);
  let additionalAddressArrays = [];

  setadditionalAddressArray([]);

  console.log('After clearing:', additionalAddressArray);

  const addressesToAdd = [additionalAddress1, additionalAddress2, additionalAddress3];

  addressesToAdd.forEach(address => {
    console.log('address', address);

    if (address && Object.keys(address).length > 0 && address.firstname?.trim() !== '') {
      setadditionalAddressArray(prevAddresses => [
        ...prevAddresses,
        address,
      ]);
      additionalAddressArrays.push(address);

    }
  });

  console.log('additionalAddressArrays:', additionalAddressArrays);
};


const {dispatch} = useRedux();

const handleNextPress = () => {


   if (utills.isEmptyOrSpaces(FirstName)) {
    utills.errorAlert('', 'Please Enter Name of Primary Rental');
     return;
   }
 
   if (utills.isEmptyOrSpaces(dob)) {
    utills.errorAlert('', 'Please Enter Date of Birth');
     return;
   }
 
   if (utills.isEmptyOrSpaces(PhysicalAddress)) {
    utills.errorAlert('', 'Please Enter Physical Address');
     return;
   }
   if (utills.isEmptyOrSpaces(MobilePhone)) {
    utills.errorAlert('','Please Enter telephone Number');
     return;
    }
    if (utills.isEmptyOrSpaces(EmailAdd)) {
     utills.errorAlert('','Please Enter Email Address');
      return;
    }
    if (!utills.validateEmail(EmailAdd)) {
      utills.errorAlert('', 'Invalid Email');
      return;
    }
   if (utills.isEmptyOrSpaces(AppliDate)) {
     utills.errorAlert('', 'Please Enter Apply Date');
     return;
   }
  console.log("selectedSizeValue1",selectedSizeValue1)

  if (selectedSizeValue === ""){
    utills.errorAlert("Please Select Size of P.O. Box")
    return;
  }
  if (selectedLocationValue === ""){
    utills.errorAlert("Please Select Desired Box location")
    return;
  } 
  
  if (selectedLBValue === ""){
    utills.errorAlert("Please Select Letter box Type")
    return;
  }
   if (utills.isEmptyOrSpaces(ApplicantName)) {
     utills.errorAlert('', 'Please Enter Applicant Name');
     return;
   }
  console.log('additionalAddress1==33', additionalAddress1);

  let additionalAddressArrays = [];

  setadditionalAddressArray([]);

  console.log('After clearing:', additionalAddressArray);

  const addressesToAdd = [additionalAddress1, additionalAddress2, additionalAddress3];
  const emailSet = new Set();
  let hasDuplicateEmail = false;
  
  addressesToAdd.forEach(address => {
    console.log('address', address);



    if (address?.email) {
      if (emailSet.has(address.email.trim())) {
        hasDuplicateEmail = true;
      } else {
        emailSet.add(address.email.trim());
      }
    }
    if (address && Object.keys(address).length > 0 && address.firstname?.trim() !== '') {
      setadditionalAddressArray(prevAddresses => [
        ...prevAddresses,
        address,
      ]);
      additionalAddressArrays.push(address);

    }
  });

  if (isChecked == false){

    utills.errorAlert("Please Agree to the terms")
    return
  }

  console.log('additionalAddressArrays:', additionalAddressArrays);
  if (hasDuplicateEmail) {
    utills.errorAlert('', 'Duplicate email addresses found among additional addresses.');
    return;
  }

  console.log('additionalAddressArray==33', additionalAddressArray);

   let data = {
    applicantName: ApplicantName,
    applicantSign: ApplicantSign,
    regDate: AppliDate,
    cusId : USERDETAIL?.cusId,
    firstName : FirstName,
    surname : lastName,
    email: EmailAdd,
    phoneNumber: MobilePhone,
    dateOfBirth: dob,
    address: PhysicalAddress,
    additionalHouseholdAddress1:  additionalAddress1?.firstname && additionalAddress1?.surname
    ? additionalAddress1.firstname + ' ' + additionalAddress1.surname
    : "",
    
    // additionalAddress1?.firstname + " " + additionalAddress1?.surname ,
    additionalHouseholdAddress2:  additionalAddress2?.firstname && additionalAddress2?.surname
    ? additionalAddress2.firstname + ' ' + additionalAddress2.surname
    : "",
    additionalHouseholdAddress3:  additionalAddress3?.firstname && additionalAddress3?.surname
    ? additionalAddress3.firstname + ' ' + additionalAddress3.surname
    : "",
    desiredLocation: selectedLocationValue,
    requestedLB: selectedSizeValue1,
    LetterBoxType: selectedLBValue,
   accountNo:USERDETAIL?.accountNo,
    subscriptionDueDate:USERDETAIL?.subscriptionDueDate,
   openingAmount:USERDETAIL?.openingAmount,
    UserID:Params1.UserId,
    addaddresseesarray:additionalAddressArrays
   // file:selectedFileName
  };
 console.log('value==33', data);
  // navigation.navigate(SCREENS.CartValueScreen,{From :"Post Office Box",Service:'Private Post Office Box Rental SERVICE'})

dispatch(RegisterSlicePOBOX(data))
.unwrap()
.then(res => {
console.log('Register res==', res);
if (res.status == true){
  navigation.navigate(SCREENS.CartValueScreen,{From :"Post Office Box",Service:'Private Post Office Box Rental SERVICE',userID:Params1.UserId,LoginParams:Params1})
}else{
  utills.errorAlert('', res.msg);
  return;
}
});
 

};
const [isChecked, setIsChecked] = useState(false);



   const handleClick = () => {
     Linking.openURL("http://hsstrain.apis.gov.ai/Documents/Private%20Post%20Office%20Box%20Rental%20Agreement.pdf")

 
   };
const handleSelectionChange = (selectedItems) => {
  if (selectedItems && selectedItems.length > 0) {
    console.log('Selected Items:', selectedItems);
    setselectedLocationValue(selectedItems[0]);
  } else {
    console.log('No selected items');
    // Handle the case where no items are selected
    setselectedLocationValue("");

  }

};
// const handleSelectionChangeItem = (selectedItems) => {
//   console.log('Selected Item:', selectedItems[0]);
//   setselectedSizeValue(selectedItems[0]);
//   if  (selectedItems[0] === "Medium"){
//     setselectedSizeValue1("M")
//   }else if  (selectedItems[0] === "Large (12 inches x 6 inches)"){
//     setselectedSizeValue1("L")
//   }
// };
const handleSelectionChangeItem = (selectedItems) => {
  if (selectedItems && selectedItems.length > 0) {
    console.log('Selected Item:', selectedItems[0]);
    setselectedSizeValue(selectedItems[0]);
    if (selectedItems[0] === "Medium") {
      setselectedSizeValue1("M");
    } else if (selectedItems[0] === "Large (12 inches x 6 inches)") {
      setselectedSizeValue1("L");
    }
  } else {
    setselectedSizeValue("");
    setselectedSizeValue1("");

    console.log('No selected item');
    // Handle the case where no item is selected
  }
};

const handleSelectionLBChangeItem = (selectedItems) => {
  if (selectedItems && selectedItems.length > 0) {
    console.log('Selected Items:', selectedItems);
    setselectedLBValue(selectedItems[0]);
  } else {
    console.log('No selected items');
    // Handle the case where no items are selected
    setselectedLBValue("")
  }
};


const handlePress = () => {
};
  return (
     <GradientBackground>
    <HeaderWithBackButton onPress={handlePress} title = "Application Form" />

    <ScrollView style= {styles.containerSc}> 
    <View style={styles.container}>
    {/* <ScrollView> */}
    <Image source={IMAGES.logoHS} style={styles.logo} />
<View style={styles.col12}>
    <Text  style={styles.Heading}>Private Post Office Box Rental</Text>
    </View>

          <View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Postmaster General</Text>
                </View>
                <View style={styles.col4}></View>
              </View>

          
       <EditTextWithLable
        label="First Name of Primary Rental *"
        placeholder="Enter First Name of Primary Rental"
        value={FirstName}
        onChangeText={setFirstName}
        keyboardType="default"
      />
         <EditTextWithLable
        label="Last Name of Primary Rental *"
        placeholder="Enter Last Name of Primary Rental"
        value={lastName}
        onChangeText={setlastName}
        keyboardType="default"
      />
    
       {/* <EditTextWithLable
        label="Date of Birth *"
        placeholder="Enter Date of Birth (yyyy-dd-mm)"
        value={dob}
        onChangeText={setdob}
        keyboardType="default"
      /> */}

<View style={{alignSelf:'flex-start'}}>
  <Text style={{
    marginTop: hp('1%'),
    fontSize: rf(1.8),
    color: COLORS.Lableheading,
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('3.5%'),
    textAlign:'left'
  }}>Date Of Birth  
   <Text style={{
    marginTop: hp('1%'),
    fontSize: rf(1.8),
    color: COLORS.red,
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('3.5%'),
    textAlign:'left'
  }}> *  
  </Text>
  </Text>
</View>
<View style={{
      alignItems: 'center',
      marginTop:10,
      marginBottom:15,
      borderColor: COLORS.Greyscale,borderRadius:10, borderWidth:2,height: hp('8%'),
      width : wp('89%'),
      justifyContent :'space-between',
      alignContent:'center',
      flexDirection:'row',
      paddingHorizontal:10
    }}>

<Text style={{
    marginTop: hp('1%'),
    fontSize: rf(1.8),
    color:  dob === "Date of Birth" ?  COLORS.Greyscale : COLORS.Content,
      textAlign:'left',
     paddingVertical:5,
  
     fontFamily: FONTFAMILY.Bold,
    fontSize: rf(1.8),
  }}>{dob} 
  </Text>
  <TouchableNativeFeedback
      onPress={showDatePicker}>
<Image source={IMAGES.Cal_icon1} style={{width:32,height:32,resizeMode:'contain'}}
 />
 </TouchableNativeFeedback>
  <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        maximumDate={maximumDate}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

    </View>
   
      
       <EditTextWithLable
        label="Physical Address *"
        placeholder="Enter Physical Address"
        value={PhysicalAddress}
        onChangeText={setPhysicalAddress}
        keyboardType="default"
      />
        <EditTextWithLable
        label="Telephone No *"
        placeholder="Enter Telephone No"
        value={MobilePhone}
        onChangeText={setMobilePhone}
        keyboardType='numeric'
        maxLength={10}

      />
      <EditTextWithLable
        label="Email Address *"
        placeholder="Enter Email Address"
        value={EmailAdd}
        onChangeText={setEmailAdd}
        keyboardType="default"
      />

<View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
        <View style={styles.col8}>
            <Text  style={styles.Left500BOLDText}>Up to 3 Additional Household Addressees</Text>
              </View>
                            </View>

{/* 
                            <EditTextBottomBorder
        placeholder="1. household Address"
        value={Address1}
        onChangeText={setAddress1}
        keyboardType="default"
      />    
      <EditTextBottomBorder
        placeholder="2. household Address"
        value={Address2}
        onChangeText={setAddress2}
        keyboardType="default"
      />    
      <EditTextBottomBorder
        placeholder="3. household Address"
        value={Address3}
        onChangeText={setAddress3}
        keyboardType="default"
      />     */}
          <AddButtonAndTextfeild onPress={handleAddButtonPress1} text={Address1} text1={"1"} />
        <AddButtonAndTextfeild onPress={handleAddButtonPress2} text={Address2} text1={"2"}/>
        <AddButtonAndTextfeild onPress={handleAddButtonPress3} text={Address3}text1={"3"} /> 

<View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
        <View style={styles.col8}>
            <Text  style={styles.Left500BOLDText}>Please Indicate size of P.O. Box Required
            <Text  style={[styles.Left500BOLDText,{color :'red'}]}> *</Text>

            </Text>
              </View>
                            </View>
<View style={{alignSelf:'flex-start'}}>
<CheckboxListSingleSelected options={SizeBox} onSelectionChange={handleSelectionChangeItem} />


</View>




<View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
        <View style={styles.col8}>
            <Text  style={styles.Left500BOLDText}>Please indicate Letter Box Type required
            <Text  style={[styles.Left500BOLDText,{color :'red'}]}> *</Text>

            </Text>
              </View>
                            </View>
<View style={{alignSelf:'flex-start'}}>
<CheckboxListSingleSelected options={LetterBox} onSelectionChange={handleSelectionLBChangeItem} />


</View>



<View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Please Indicate Desired Box Location
                  <Text  style={[styles.Left500BOLDText,{color :'red'}]}> *</Text>

                  </Text>
                </View>
              </View>
<View style={{alignSelf:'flex-start'}}>
<CheckboxListSingleSelected options={LocationList2} onSelectionChange={handleSelectionChange}/>


</View>

{/* <View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Upload File
</Text>
                </View>
              </View>

<View style={[styles.row,{alignItems:'center',justifyContent:'space-between',flex:1,paddingHorizontal:10}]}> 
              <TouchableOpacity
        style={styles.button}
        onPress={handleEditPress}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Upload Image</Text>
      </TouchableOpacity>
      <View style={{flex:1}}>
      <Text style={styles.fw500Text}>{selectedFileName}</Text>
      </View>
      </View> */}

<View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Acknowledgement
</Text>
                </View>
              </View>
       

              <TouchableNativeFeedback style={{paddingHorizontal:20,marginVertical:20, alignSelf:'flex-start'}}   onPress={handleClick}>

<Text style={{
    color: COLORS.black,
    fontSize:rf(1.8),
    fontFamily: FONTFAMILY.Medium,
    //textAlign:'justify'
  }}>Please 
    <Text style={[styles.textDanger,]}> click
    </Text>

  <Text style={styles.textNormal}> here to read the Post Office Private Post Office Box Service agreement terms and condition</Text>

</Text>
</TouchableNativeFeedback> 


              <View style={{paddingHorizontal:20, alignSelf:'flex-start'}}>
              <Text  style={styles.textDanger}>By ticking the box / signing below, I acknowledge that I have read all terms and conditions of the Rental Agreement and Schedule of Fees and agree to abide by them.</Text>
              </View>
              <View style={{
   marginTop: 20,
  
   flexDirection: 'row',
   justifyContent: 'flex-start',
   alignSelf:'flex-start',
   marginHorizontal:20
 //  alignItems: 'center',
 }}>
          <TouchableOpacity
            // activeOpacity={0.8}
            onPress={() => {
              setIsChecked(!isChecked);
            }}>
            <Icons
              name={isChecked ? 'checkbox-active' : 'checkbox-passive'}
              style={{
                fontSize: rf(2.5),
                color: "darkgreen",
                marginRight: 10,
              }}
              Type={Icon.Fontisto}//
              size={rf(2.0)}
            />
          </TouchableOpacity>
          <Text style={{
    fontFamily: FONTFAMILY.Medium,
    fontSize: rf(1.7),
    color: COLORS.Lableheading,
    textAlign: 'left',
  }}>
            {' '}I Agree{' '}
          
          </Text>
          
        </View>
           <EditTextBottomBorder
        placeholder="Applicant's Name"
        value={ApplicantName}
        onChangeText={setApplicantName}
        keyboardType="default"
      />     

      <EditTextBottomBorder
        placeholder="Applicant's signature"
        value={ApplicantSign}
        onChangeText={setApplicantSign}
        keyboardType="default"
      />

<EditTextBottomBorder
        placeholder="Date"
        value={AppliDate}
        onChangeText={setAppliDate}
        keyboardType="default"
      />
     



        <View style = {{width:wp('90%')}}>
      
<CustomButtonsBAndS
        onBackPress={handleClosePress}
        onNextPress={handleNextPress}
      />
        </View>




          {/* </ScrollView> */}
        
    </View>
   
    </ScrollView>
    <ImageUploadModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          onImageData = {(data)=>{

            // setImageUri(data)
            if (data) {
              uploadImage(data);
            }else{
            }
          }
          }
        />


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
      />
         <EditTextWithLable1
        label="Last Name *"
        placeholder="Enter Last Name"
        value={lastNameAd}
        onChangeText={setlastNameAd}
        keyboardType="default"
      />


        <EditTextWithLable1
        label="Telephone No *"
        placeholder="Enter Telephone No"
        value={MobilePhoneAd}
        onChangeText={setMobilePhoneAd}
        keyboardType='numeric'
        maxLength={10}

      />
      <EditTextWithLable1
        label="Email Address *"
        placeholder="Enter Email Address"
        value={EmailAddAd}
        onChangeText={setEmailAddAd}
        keyboardType="default"
      />


<EditTextWithLable1
        label="Address"
        placeholder="Enter Address"
        value={PhysicalAddressAd}
        onChangeText={setPhysicalAddressAd}
        keyboardType="default"
      />


<CustomButtonsBAndS
        onBackPress={handleBackPress}
        onNextPress={handlenextClosePress}
      />
                   </View>
        </View>
      </Modal>



     </GradientBackground>

  );
}

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
    // margin:20,
    // borderRadius : 15,
    // padding:15,

    justifyContent:'flex-start',
    alignItems:'center',
    paddingVertical:15,
    borderRadius : 15,

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
  modalContainer: {
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
  logo: {
    width: 120,
    height: 120,
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
    fontFamily: FONTFAMILY.Regular,
    fontSize:rf(1.8),
    textAlign: 'left',
  },
   Left500BOLDText: {
    fontFamily: FONTFAMILY.Bold,
    fontSize:rf(1.7),
    textAlign: 'left',
  },
  Left500BOLDTextWhite: {
    fontFamily: FONTFAMILY.Bold,
    fontSize:rf(1.8),
    textAlign: 'left',
    color:COLORS.white
  },
  textDanger: {
    color: COLORS.CancelRED,
    fontSize:rf(2.0),
    fontFamily: FONTFAMILY.Medium,
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
  button: {
    backgroundColor: '#3498db', // Set your desired background color
    padding: 10,
    borderRadius: 5,
    margin:10
  },
  buttonText: {
    color: '#ffffff', // Set your desired text color
    fontSize: 16,
  },

});




