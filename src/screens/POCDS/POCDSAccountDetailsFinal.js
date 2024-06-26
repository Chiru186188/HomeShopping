import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, ScrollView, TextInput, ActivityIndicator, Alert} from 'react-native';
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
import CustomRadioButtons from '../../components/CustomRadioButtons';
import CustomButtonsBAndS from '../../components/CustomButtonsBAndS';
import { useRoute } from '@react-navigation/native';
import utills from '../../utills';
import CheckboxList from '../../components/CheckboxList';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import DropDownPicker from 'react-native-dropdown-picker';
import { getAllAddressListSlice, saveIsLoading } from '../../redux/slice/categories';
import { useSelector } from 'react-redux';
import useRedux from '../../components/useRedux';
import { LogedInUserSlice, RegisterSlicePOCDS, saveAccessToken, saveUserData } from '../../redux/slice/auth';
import CheckboxListSingleSelected from '../../components/CheckboxListSingleSelected';
import TouchableNativeFeedback from '../../components/TouchableNativeFeedback';
import Icons, { Icon } from '../../components/Icons';
// import CustomRadioButtons from '../../components/CustomRadioButtons';

export default function POCDSAccountDetailsFinal({navigation}) {
  const route = useRoute();
  const { From,Params1,LoginParam } = route.params;
  const [radioSelectedEZ, setradioSelectedEZ] = useState(false); // State to track radio button selection
  const [textValueEZ, settextValueEZ] = useState(''); // State to hold text field value
  const [selectedReq, setselectedReq] = useState(''); // State to hold text field value
  const [radioSelectedHS, setradioSelectedHS] = useState(false); // State to track radio button selection
  const [textValueHS, settextValueHS] = useState(''); // State to hold text field value
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState([
    // {label: 'Indian', value: 'Indian'},
    // {label: 'USA', value: 'USA'},
    // {label: 'UK', value: 'UK'},
    // {label: 'ENGLAND', value: 'ENGLAND'},
   
  ]);
  const {dispatch} = useRedux();

  const AllAddressList  = useSelector(state => state.category.AllAddressList);
  // console.log("AllAddressList",AllAddressList?.DeliveryAddress)
  const USERDETAIL  = AllAddressList?.data?.data
   console.log("LoginParam",LoginParam)



   const [isChecked, setIsChecked] = useState(false);



   const handleClick = () => {
     Linking.openURL("http://hsstrain.apis.gov.ai/Documents/POCDS%20AGREEMENT%20Form.pdf")

 
   };


useEffect(() => {
  getAllAdressddata()
// 
const currentDate = new Date(); // Create a new Date object representing the current date and time
const dateString = currentDate.toISOString().split('T')[0]; // Convert to ISO format and extract the date part
console.log('formattedItems',dateString);
setAppliDate(dateString)
setApplicantName(Params1.FirstName + " " + Params1.Surname)
setApplicantSign(Params1.FirstName)





  return () => {
   
  };
}, []);
const [selectedREQValue, setselectedREQValue] = useState("");

const handleSelectionChange = (selectedItems) => {
  
  // console.log('Selected Itemssss:', selectedItems);


  // if (selectedItems && selectedItems.length > 0) {
  //   console.log('Selected Items:', selectedItems);
  //   setSelectedRequirementOption(selectedItems);
  //   const combinedString = selectedItems.join(',');
  // setselectedReq(combinedString)
  // console.log(combinedString);
  // } else {
  //   console.log('No selected items');
  //   // Handle the case where no items are selected
  // }

  if (selectedItems && selectedItems.length > 0) {
    console.log('Selected Item:', selectedItems[0]);
    setselectedREQValue(selectedItems[0]);
  } else {
    console.log('No selected items');
    // Handle the case where no items are selected
    setselectedREQValue("");
  }

};
const RequirmentServices = ['Customs Clearance and delivery on ALL packages received',
  'Customs Clearance and delivery on request',
 'Customs Clearance ONLY on ALL packages receive with collection/pick up at the General Post Office ', 
 'Customs Clearance ONLY on request with collection/pick up at the General Post Office',
 ];
const [selectedOption, setSelectedOption] = useState(null);
const [selectedRequirementOption, setSelectedRequirementOption] = useState([]);

 const [ApplicantSign, setApplicantSign] = useState('');
 const [PhysicalAdd, setPhysicalAdd] = useState('');

const [ApplicantName, setApplicantName] = useState(Params1.FirstName + Params1.Surname);
const [AppliDate, setAppliDate] = useState('');


const handleBackPress = () => {
  // Add your logic for the "Back" button action here
  navigation.goBack()
};


const getAllAdressddata = () => {
  console.log('dataaaaaaar',data)

  let data = {
    id: LoginParam.UserId,

  };
  console.log("data",data)
  dispatch(getAllAddressListSlice(data))
    .unwrap()
    .then(res => {
     // console.log("res",res)

      const formattedItems = res.DeliveryAddress?.map((item) => ({
        label: item.Text,
        value: item.Value,
      }));

      console.log("res",res?.data)
      settextValueHS(res?.data?.HSAccount)
    //  console.log("formattedItems",formattedItems)
      setItems(formattedItems);

    })
    .catch(e => {
      //  setLoading(false);
    });
};
const validateString = (str) => {
  return str.startsWith("axa");
};
const handleNextPress = () => {


  
   if(radioSelectedEZ == false && radioSelectedHS == false){

    utills.errorAlert('', 'Please Select at least one Subscribed services Account No');
    return;
   }
   if(radioSelectedEZ == true){

    if (utills.isEmptyOrSpaces(textValueEZ)){
      utills.errorAlert('', 'Please Enter Ezone Account No');
      return;
    }


    if ( textValueEZ !== "0"){
      if (!validateString(textValueEZ.toLowerCase())) {
        utills.errorAlert('', 'Please Enter Valid Ezone Account No.It must start with axa.');
        return;

      }

      if(textValueEZ.length < 8){
        utills.errorAlert('', 'Please Enter Valid Ezone Account No.It must be of 8 digit');
        return;

      }

  }

    
   }
   if(radioSelectedHS == true){

    if (utills.isEmptyOrSpaces(textValueHS)){
      utills.errorAlert('', 'Please Enter Home Shoping Account No');
      return;
    }
   }

   if(textValueHS != "" && radioSelectedHS == false ){
    utills.errorAlert('', 'You have filled HS Account No,so u have to check HS Option');
    return;
   }

   if(textValueEZ != "" && radioSelectedEZ == false ){
    utills.errorAlert('', 'You have filled Ezone Account No,so u have to check Ezone Option');
    return;
   }
   if (utills.isEmptyOrSpaces(ApplicantSign)) {
    utills.errorAlert('', 'Please Enter Applicant Signature');
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
   if (selectedREQValue == "" || selectedREQValue == null){
    utills.errorAlert('', 'Please Select POCDS requirement');
    return;
  }
console.log("value",value)
  if (selectedREQValue == "Customs Clearance and delivery on ALL packages received" || selectedREQValue == "Customs Clearance and delivery on request"){
   if (value == "" || value == null){
    utills.errorAlert('', 'Please Select Address');
    return;
  }}
  // else{
  //   setValue("Zone - 0")
  // }

  console.log("value",value)

  if (isChecked == false){

    utills.errorAlert("Please Agree to the terms")
    return
  }
  
   let data = {
    ApplicantName: ApplicantName,
    ApplicantSign: ApplicantSign,
    RegDate: AppliDate,
    authPerson : ApplicantName,
    DeliveryAddress:value ? value: "Zone - 0",
    UserId:LoginParam.UserId,
    CustomerId:USERDETAIL?.CustomerId,
    DeliveryInstructions:selectedREQValue,
    EzoneAccount: textValueEZ,
    HSAccount: textValueHS

  };
 console.log('value==33', data);
 const mergedParams = { ...Params1, ...data };
  console.log('mergedParams',mergedParams)
  dispatch(RegisterSlicePOCDS(mergedParams))
  .unwrap()
  .then(res => {
  console.log('Register res==', res);
  if (res.status == true){
  // navigation.navigate(SCREENS.CartValueScreen,{From :"PBDS",Service:'Private Bag Delivery Service'})
  
  handleGoToHome()
}else{
  utills.errorAlert('', res.message || res.msg || 'An unknown error occurred.');
  return;
  }
  })
  .catch(e => {
      setLoading(false);
  });
   


};
const [loading, setLoading] = useState(false); // State to manage loading status


const userData = useSelector(state => state.auth.userData);

const handleGoToHome = async () => {
  const userId =  LoginParam?.UserId ?? userData?.userID ?? userData?.userId  ?? "";
  setLoading(true); // Se
  let data = {
  id: userId,

};
console.log('Go to Login');
console.log('data',data);

dispatch(saveIsLoading(true))
dispatch(LogedInUserSlice(data))
  .unwrap()
  .then(res => {
    dispatch(saveIsLoading(false))
    setLoading(false); // Se
    console.log('Login ressss==', res);
    saveAccessToken(res?.token)
    if (res?.success == true){
      console.log('Login res==', res.data);


      if (res?.data?.services == null) {
        Alert.alert(
          'No Active Plan',
          `Please Buy Service Plan First`,
          [
            {
              text: 'OK',
              onPress: () => {
                gotoSubscription(res.data)
              },
            },
          ],
          { cancelable: false }
        );

        return
      }


      dispatch(saveUserData(res.data))
      navigation.replace(SCREENS.DashBoard); 
      
  }
});
};
 const gotoSubscription = (userData) => {
    let Getdata = {
      FirstName: userData?.firstName,
      LastName: userData?.lastName,
      DOB: utills.getDateBeforeT(userData?.dob),
      Gender: userData?.gender,
      Address: userData?.address,
      POBox: userData?.poBox,
      Email: userData?.email,
      IRD: userData?.ird,
      Password: "",
      ConfirmPassword: "",
      PhoneNumber: userData?.phoneNumber,
      UserId: userData?.userID || userData?.userId,  // Handle both userID and userId
    };
    navigation.navigate(SCREENS.SelectServicesSubscription, { Params1: Getdata, from: "Login" })
  };

const handlePress = () => {
};
  return (
     <GradientBackground>
    <HeaderWithBackButton onPress={handlePress} title = "Application Form" />

    <ScrollView style= {styles.containerSc}> 

 
    <View style={styles.container}>
    
    {/* <ScrollView> */}
    <View style={[styles.row,{justifyContent:'center',alignItems:'center',width:wp('85%'),gap:10}]}>
            <Image source={IMAGES.logoHS} style={styles.logo} />
            <Image source={IMAGES.POCDSlogo} style={styles.logo1} />

          </View>

          <View style={[styles.row,{backgroundColor : COLORS.primary,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDTextWhite}>Subscribed Services Account #
                  <Text  style={styles.textDanger}> *
           </Text>
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' ,paddingHorizontal: 15,paddingVertical:5}}>
      {/* Radio Button */}
      <TouchableOpacity onPress={() => setradioSelectedEZ(!radioSelectedEZ)}>
        {/* <View
          style={{
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 3,
            borderColor: radioSelectedEZ ? COLORS.BlueSelectionBorder : 'black',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {radioSelectedEZ && (
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: COLORS.BlueSelectionBorder,
              }}
            />
          )}
        </View> */}


        <Icons
              name={radioSelectedEZ ? 'checkbox-active' : 'checkbox-passive'}
              style={styles.icon}
              Type={Icon.Fontisto}//
              size={rf(2.8)}
            />
      </TouchableOpacity>

      {/* Radio Button Label */}
      <Text style={{ marginLeft: 10 ,color: COLORS.black,
    fontSize: rf(1.7),
    fontFamily: FONTFAMILY.Regular}}>{'Ezone Packages ('}</Text>

      {/* Text Field */}
      <TextInput
        style={{ flex: 1, borderBottomWidth: 1,paddingHorizontal:5,color: COLORS.black,
          fontSize: rf(1.7),
          fontFamily: FONTFAMILY.Bold }}
        placeholder=""
        onChangeText={(text) => settextValueEZ(text)}
        value={textValueEZ}
        editable={radioSelectedEZ} // Enable/disable based on radio selection
      />
            <Text style={{color: COLORS.black,
    fontSize: rf(1.7),
    fontFamily: FONTFAMILY.Regular}}>{')'}</Text>

    </View>

    <View style={{ flexDirection: 'row', alignItems: 'center' ,paddingHorizontal: 15,paddingVertical:5}}>
      {/* Radio Button */}
      <TouchableOpacity onPress={() => setradioSelectedHS(!radioSelectedHS)}>
        {/* <View
          style={{
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 3,
            borderColor: radioSelectedHS ? COLORS.BlueSelectionBorder : 'black',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {radioSelectedHS && (
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: COLORS.BlueSelectionBorder,
              }}
            />
          )}
        </View> */}
          <Icons
              name={radioSelectedHS ? 'checkbox-active' : 'checkbox-passive'}
              style={styles.icon}
              Type={Icon.Fontisto}
              size={rf(2.8)}
            />
      </TouchableOpacity>

      {/* Radio Button Label */}
      <Text style={{ marginLeft: 10,color: COLORS.black,
    fontSize: rf(1.7),
    fontFamily: FONTFAMILY.Regular, }}>
      {'Home Shopping Packages ('}</Text>

      {/* Text Field */}
      <TextInput
        style={{ flex: 1, borderBottomWidth: 1,paddingHorizontal:5,color: COLORS.black,
          fontSize: rf(1.7),
          fontFamily: FONTFAMILY.Bold, }}
        placeholder=""
        onChangeText={(text) => settextValueHS(text)}
        value={textValueHS}
        editable={radioSelectedHS} // Enable/disable based on radio selection
      />
            <Text style={{color: COLORS.black,
    fontSize: rf(1.7),
    fontFamily: FONTFAMILY.Regular,}}>{')'}</Text>

    </View>

              {/* <View style={{paddingHorizontal:20, alignSelf:'flex-start'}}>
              {DEFAULTARRAYS.SubscribedServices.map((item1) => {
            return (
              <CustomRadioButtons
                title={item1.label}
                setSelected={setSelectedOption}
                onChangeSelected={(data, item1) => {
                  console.log(data)
                  setSelectedOption(data);
                 

                }}
                 selected={selectedOption}
                style={{marginBottom : 7 }}
              />
            );
          })}





              </View> */}


              <View style={[styles.row,{backgroundColor : COLORS.primary,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDTextWhite}>POCDS Requirement (Please Click)
                  
                  <Text  style={styles.textDanger}> *
           </Text>
                  </Text>
                </View>
              </View>
              <View style={{paddingRight:30, alignSelf:'flex-start'}}>
              {/* {DEFAULTARRAYS.RequirmentServices.map((item1) => {
            return (
              <CustomRadioButtons
                title={item1.label}
                setSelected={setSelectedRequirementOption}
                onChangeSelected={(data, item1) => {
                  console.log(data)
                  setSelectedRequirementOption(data);
                 

                }}
                 selected={selectedRequirementOption}
                style={{marginBottom : 7 }}
              />
            );
          })} */}

{/* <CheckboxList options={RequirmentServices} onSelectionChange={handleSelectionChange}/> */}
<CheckboxListSingleSelected options={RequirmentServices} onSelectionChange={handleSelectionChange} />

</View>

<View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Physical Address to where packages should be delivered, if desired:
                  <Text  style={styles.textDanger}> *
           </Text>

</Text>
                </View>
                {/* <View style={styles.col4}></View> */}
              </View>


              {/* <EditTextWithLable
        label="Physical Address"
        placeholder="Enter Physical Address"
        value={PhysicalAdd}
        onChangeText={setPhysicalAdd}
        keyboardType="default"
      />
             */}


            <View style={{
           alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal:10,
      marginTop:10,
      marginBottom:15,
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
      placeholder='Select Address'
      placeholderStyle ={{color:COLORS.Greyscale}}
      style={{ 
        borderColor: COLORS.Greyscale,borderRadius:10, borderWidth:2,height: hp('8%'),
        width : wp('89%')
    }}
      textStyle={{  
        color:  COLORS.Content,
        fontFamily: FONTFAMILY.Bold,
        alignSelf: 'center',
        fontSize: rf(1.8), //marginLeft:wp('2.5%'),
      }}
    />

    </View>


              <View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Acknowledgement

</Text>
                </View>
                <View style={styles.col4}></View>
              </View>

              {/* <View style={{paddingHorizontal:20, alignSelf:'flex-start'}}>
              <Text  style={styles.Left500Text}>Please <Text style={styles.textblue} >click</Text> here to read the Home Shopping service agreement terms and conditions</Text>
              </View>
 */}
        <TouchableNativeFeedback style={{paddingHorizontal:20,marginVertical:20, alignSelf:'flex-start'}}   onPress={handleClick}>

<Text style={{
    color: COLORS.black,
    fontSize:rf(1.8),
    fontFamily: FONTFAMILY.Medium,
    //textAlign:'justify'
  }}>Please 
    <Text style={[styles.textDanger,]}> click
    </Text>

  <Text style={styles.textNormal}> here to read the Post Office Clearance and Delivery Service agreement terms and condition</Text>

</Text>
</TouchableNativeFeedback> 

              <View style={{paddingHorizontal:20, alignSelf:'flex-start'}}>
              <Text  style={styles.textDanger}>By ticking the box / signing below the customer acknowledges having read all the terms and conditions and agrees to abide by these operational regulations and is in full agreement with their enforcement for the efficient clearance of packages through the General Post Office’s Clearance and Delivery Service (POCDS).</Text>
              </View>
            

              <View style={{
   marginTop: 10,
  
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
        placeholder="Name of Authorized Person"
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
    {loading && (
                    <View style={styles.loaderContainer}>
                        {/* Your loader component */}
                        <ActivityIndicator size="large" color={COLORS.primary} />
                    </View>
                )}
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
  loaderContainer: {
    ...StyleSheet.absoluteFillObject, // Position the loader absolute to cover the entire screen
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background to dim the screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSub: {
    flex: 1,
    width : wp('88'),
    alignContent:'flex-start',
    backgroundColor :COLORS.lightBlueSelection,
    margin:20,
    borderRadius : 15,
    paddingVertical:20
  },

  container: {
    flex: 1,
    // width : wp('94'),
    alignContent:'center',
    backgroundColor :COLORS.white,
    // margin:20,
    // borderRadius : 15,
    // padding:15,
    borderRadius : 15,

    justifyContent:'flex-start',
    alignItems:'center',
    paddingVertical:15
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
    width: wp("25%"),
    height: wp("25%"),
    resizeMode:'contain',
  },
  logo1: {
    height: wp("30%"),
    resizeMode:'contain',
    width : wp("55%")
    
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
    fontSize:rf(1.8),
    fontFamily: FONTFAMILY.Medium,
  },
  textblue: {
    color: COLORS.brightBLUE,
    fontSize:rf(1.8),
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




