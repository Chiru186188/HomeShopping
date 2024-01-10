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
import EditTextBottomBorder from '../../components/EditTextBottomBorder';
import CustomButtonsBAndS from '../../components/CustomButtonsBAndS';
import { RegisterSlicePBDS } from '../../redux/slice/auth';
import useRedux from '../../components/useRedux';
import utills from '../../utills';
import TouchableNativeFeedback from '../../components/TouchableNativeFeedback';
// import CustomRadioButtons from '../../components/CustomRadioButtons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { getPBDSSlice } from '../../redux/slice/categories';

export default function PBDSAccountDetails1({navigation}) {
 
  const route = useRoute();

  const {Params1 } = route.params;

const [title, settitle] = useState('');

const [FirstName, setFirstName] = useState(Params1?.FirstName);
const [lastName, setlastName] = useState(Params1?.LastName);
const [CompName, setCompName] = useState('');
const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

const [PhysicalAddress, setPhysicalAddress] = useState(Params1?.Address);
const [EmailAdd, setEmailAdd] = useState(Params1?.Email);
const [TelePhone, setTelePhone] = useState(Params1?.PhoneNumber);

const [MobilePhone, setMobilePhone] = useState(Params1?.PhoneNumber);


const [ApplicantSign, setApplicantSign] = useState('');

const [ApplicantName, setApplicantName] = useState('');
const [AppliDate, setAppliDate] = useState('');
const [dob, setdob] = useState('Date of Birth');
const showDatePicker = () => {
  setDatePickerVisibility(true);
};
const PBDSDetails  = useSelector(state => state.category.PBDSDetails);
 const USERDETAIL  = PBDSDetails?.data
 console.log("USERDETAIL",USERDETAIL)
const getAllAdressddata = () => {
  console.log('dataaaaaaar',data)

  let data = {
    id: Params1.UserId,

  };
  dispatch(getPBDSSlice(data))
    .unwrap()
    .then(res => {
      console.log("res",res)


    })
    .catch(e => {
      //  setLoading(false);
    });
};
const hideDatePicker = () => {
  setDatePickerVisibility(false);
};

  useEffect(() => {
    console.log("Params1",Params1);

    getAllAdressddata()
    const currentDate = new Date(); // Create a new Date object representing the current date and time
    const dateString = currentDate.toISOString().split('T')[0]; // Convert to ISO format and extract the date part
    
    console.log(dateString);
    setAppliDate(dateString)

    if (Params1?.DOB != ''){
      setdob(Params1?.DOB)
    } 
      return () => {
       
      };
    }, []);

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

// const handleNextPress = () => {
//   // Add your logic for the "Next" button action here
//   navigation.navigate(SCREENS.CartValueScreen,{From :"PBDS",Service:'Private Bag Delivery Service'})

// };
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
   if (utills.isEmptyOrSpaces(CompName)) {
    utills.errorAlert('', 'Please Enter Company Name');
     return;
   }
   if (utills.isEmptyOrSpaces(PhysicalAddress)) {
    utills.errorAlert('', 'Please Enter Physical Address');
     return;
   }
   if (utills.isEmptyOrSpaces(TelePhone)) {
    utills.errorAlert('','Please Enter Phone Number');
     return;
    }
    if (utills.isEmptyOrSpaces(EmailAdd)) {
     utills.errorAlert('','Please Enter Email Address');
      return;
    }
   
   let data = {
    // ApplicantName: ApplicantName,
    // ApplicantSign: ApplicantSign,
    CusId:USERDETAIL?.cusId,
    AccountNo :USERDETAIL?.AccountNo,
    CompanyName : CompName,
    FirstName : FirstName,
    Surname : lastName,
    Email:EmailAdd,
    PhoneNumber:TelePhone,
    DateOfBirth: dob,
    Address:PhysicalAddress,
    RegDate:AppliDate,
    MobileNumber:MobilePhone,
    
   
  };
 console.log('value==33', data);
 //navigation.navigate(SCREENS.CartValueScreen,{From :"PBDS",Service:'Private Bag Delivery Service'})

dispatch(RegisterSlicePBDS(data))
.unwrap()
.then(res => {
console.log('Register res==', res);
if (res.status == true){
  navigation.navigate(SCREENS.CartValueScreen,{From :"PBDS",Service:'Private Bag Delivery Service',userID:Params1.UserId})
}else{
  utills.errorAlert('', res.msg);
  return;
}
});
 

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
            <Text style={styles.Heading}>
            Private Bag Delivery Service Please {' '}
              {/* <Text style={styles.textDanger}>click</Text> here to sign up */}
            </Text>
          </View>

    <Image source={IMAGES.PBDSlogo} style={styles.image} />


    
          <View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Primary Renter</Text>
                </View>
                <View style={styles.col4}></View>
              </View>

          
       <EditTextWithLable
        label="First Name *"
        placeholder="Enter First Name"
        value={FirstName}
        onChangeText={setFirstName}
        keyboardType="default"
      />
        <EditTextWithLable
        label="Last Name *"
        placeholder="Enter Last Name"
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
        label="Comapany Name *"
        placeholder="Enter Comapany Name"
        value={CompName}
        onChangeText={setCompName}
        keyboardType="default"
      />

<View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Address</Text>
                </View>
              </View>
       <EditTextWithLable
        label="Address *"
        placeholder="Enter Address"
        value={PhysicalAddress}
        onChangeText={setPhysicalAddress}
        keyboardType="default"
      />
       <EditTextWithLable
        label="Email Address"
        placeholder="Enter Email Address"
        value={EmailAdd}
        onChangeText={setEmailAdd}
        keyboardType="default"
        // editable={false}
      />
 <EditTextWithLable
        label="Mobile No"
        placeholder="Enter Mobile No"
        value={MobilePhone}
        onChangeText={setMobilePhone}
        keyboardType='numeric'
      />
     
        <EditTextWithLable
        label="Phone No *"
        placeholder="Enter Phone No"
        value={TelePhone}
        onChangeText={setTelePhone}
        keyboardType='numeric'
      />
     
    



{/* <View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Acknowledgement
</Text>
                </View>
              </View> */}
       
              {/* <View style={{paddingHorizontal:20, alignSelf:'flex-start'}}>
              <Text  style={styles.textDanger}>By signing below the customer acknowledges having read all the terms and conditions and agrees to abide by these operational regulations and is in full agreement to their enforcement for the efficient processing of their Home Shopping packages.</Text>
              </View> */}

           {/* <EditTextBottomBorder
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
     
 */}


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
    fontSize:rf(1.8),
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
    height: 300,
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




