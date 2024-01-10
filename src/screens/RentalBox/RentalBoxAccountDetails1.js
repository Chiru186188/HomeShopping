import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
 import {COLORS, CONSTANTS, DEFAULTARRAYS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES} from '../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';

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
import { getAllAddressListSlice, getPBDSSlice, getRentalBoxSlice } from '../../redux/slice/categories';
import { useSelector } from 'react-redux';

export default function RentalBoxAccountDetails1({navigation}) {
  const [selectedLocationValue, setselectedLocationValue] = useState(null);
  const [selectedSizeValue, setselectedSizeValue] = useState("");
  const [selectedSizeValue1, setselectedSizeValue1] = useState('');
  const route = useRoute();
 
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
 console.log("USERDETAIL",USERDETAIL)
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
const LocationList2 = ['General Post Office',
  'Welches Polyclinic',
 'Western Polyclinic', 
 'West End Clinic',
 'Rainbow Isles (Best Buy Supermarket – East)'
 ];
 const SizeBox = ['Medium',
  'Large (12 inches x 6 inches)',
 ];
const [selectedSize, setselectedSize] = useState(null);
const [selectedLocation, setsselectedLocation] = useState(null);
const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

const [title, settitle] = useState('');

const [FirstName, setFirstName] = useState(Params1?.FirstName);
const [lastName, setlastName] = useState(Params1?.LastName);

const [PhysicalAddress, setPhysicalAddress] = useState(Params1?.Address);
const [EmailAdd, setEmailAdd] = useState(Params1?.Email);

const [MobilePhone, setMobilePhone] = useState(Params1?.PhoneNumber);


const [ApplicantSign, setApplicantSign] = useState('');

const [ApplicantName, setApplicantName] = useState('');
const [AppliDate, setAppliDate] = useState('');
const [Address1, setAddress1] = useState('');
const [Address2, setAddress2] = useState('');
const [Address3, setAddress3] = useState('');

const [dob, setdob] = useState('Date of Birth');
const showDatePicker = () => {
  setDatePickerVisibility(true);
};

const hideDatePicker = () => {
  setDatePickerVisibility(false);
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
const currentDate = new Date();
  // Set the maximum selectable date to the current date
  const maximumDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());


const handleBackPress = () => {
  // Add your logic for the "Back" button action here
  navigation.goBack()
};

const {dispatch} = useRedux();

const handleNextPress = () => {
  // Add your logic for the "Next" button action here

  if (utills.isEmptyOrSpaces(FirstName)) {
    utills.errorAlert('', 'Please Enter Name of Primary Renta');
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
   if (utills.isEmptyOrSpaces(AppliDate)) {
     utills.errorAlert('', 'Please Enter Apply Date');
     return;
   }

   if (utills.isEmptyOrSpaces(ApplicantName)) {
     utills.errorAlert('', 'Please Enter Applicant Name');
     return;
   }
   let data = {
    applicantName: ApplicantName,
    applicantSign: ApplicantSign,
    regDate: AppliDate,
    cusId : USERDETAIL.cusId,
    firstName : FirstName,
    surname : lastName,
    email: EmailAdd,
    phoneNumber: MobilePhone,
    dateOfBirth: dob,
    address: PhysicalAddress,
    additionalHouseholdAddress1: Address1,
    additionalHouseholdAddress2: Address2,
    additionalHouseholdAddress3: Address3,
    desiredLocation: selectedLocationValue,
    requestedLB: selectedSizeValue1,
    accountNo:USERDETAIL.accountNo,
    subscriptionDueDate:USERDETAIL.subscriptionDueDate,
    openingAmount:USERDETAIL.openingAmount,
    userId:Params1.UserId

  };
 console.log('value==33', data);
  // navigation.navigate(SCREENS.CartValueScreen,{From :"Post Office Box",Service:'Private Post Office Box Rental SERVICE'})

dispatch(RegisterSlicePOBOX(data))
.unwrap()
.then(res => {
console.log('Register res==', res);
if (res.status == true){
  navigation.navigate(SCREENS.CartValueScreen,{From :"Post Office Box",Service:'Private Post Office Box Rental SERVICE',userID:Params1.UserId})
}else{
  utills.errorAlert('', res.msg);
  return;
}
});
 

};

const handleSelectionChange = (selectedItems) => {
  console.log('Selected Items:', selectedItems);
  setselectedLocationValue(selectedItems[0]);

};
const handleSelectionChangeItem = (selectedItems) => {
  console.log('Selected Item:', selectedItems[0]);
  setselectedSizeValue(selectedItems[0]);
  if  (selectedItems[0] === "Medium"){
    setselectedSizeValue1("M")
  }else if  (selectedItems[0] === "Large (12 inches x 6 inches)"){
    setselectedSizeValue1("L")
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
            <Text  style={styles.Left500BOLDText}>Up to 3 Additional Household Addresses</Text>
              </View>
                            </View>


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
      />    

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
                  <Text  style={styles.Left500BOLDText}>Please Indicate Desired Box Location
                  <Text  style={[styles.Left500BOLDText,{color :'red'}]}> *</Text>

                  </Text>
                </View>
              </View>
<View style={{alignSelf:'flex-start'}}>
<CheckboxListSingleSelected options={LocationList2} onSelectionChange={handleSelectionChange}/>


</View>



<View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Acknowledgement
</Text>
                </View>
              </View>
       
              <View style={{paddingHorizontal:20, alignSelf:'flex-start'}}>
              <Text  style={styles.textDanger}>By signing below the customer acknowledges having read all the terms and conditions and agrees to abide by these operational regulations and is in full agreement to their enforcement for the efficient processing of their Home Shopping packages.</Text>
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
        onBackPress={handleBackPress}
        onNextPress={handleNextPress}
      />
        </View>




          {/* </ScrollView> */}
        
    </View>
   
    </ScrollView>
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


});




