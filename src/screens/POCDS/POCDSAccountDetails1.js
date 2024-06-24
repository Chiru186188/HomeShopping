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
// import CustomRadioButtons from '../../components/CustomRadioButtons';
import DropDownPicker from 'react-native-dropdown-picker';
import utills from '../../utills';
import TouchableNativeFeedback from '../../components/TouchableNativeFeedback';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useRoute } from '@react-navigation/native';
import CustomRadioButtons from '../../components/CustomRadioButtons';
import { useSelector } from 'react-redux';

export default function POCDSAccountDetails1({navigation}) {
  const route = useRoute();
  const AllCountries = useSelector(state => state.category.AllCountries);
  // console.log("AllCountries",AllCountries)

 // 
 const AllCountriesdata = AllCountries?.aaData
  // console.log("AllCountriesdata",AllCountriesdata)
  const options = [
    { label: 'Yes', value: 'Yes' },
    { label: 'No', value: 'No' },
  ];
  const {Params1 } = route.params;
useEffect(() => {

console.log("Params1",Params1)
const formattedItems = AllCountriesdata?.map((item) => ({
  label: item.Name,
  value: item.Name,
}));
console.log("formattedItems",formattedItems)
setItems(formattedItems);

// const formattedItems = DEFAULTARRAYS.Nationality?.map((item) => ({
//   label: item.Text,
//   value: item.Value,
// }));
console.log("formattedItems",formattedItems)
setItems(formattedItems);

setValue("Anguilla")
const formattedItemsT = DEFAULTARRAYS.TitleList?.map((item) => ({
  label: item.Text,
  value: item.Value,
}));
console.log("formattedItems",formattedItemsT)
setItemsT(formattedItemsT);


if (Params1?.DOB != ''){
  setdob(Params1?.DOB)
} 
  return () => {
   
  };
}, []);

const [open, setOpen] = useState(false);
const [value, setValue] = useState("Anguilla");
const [items, setItems] = useState([
]);

const [openT, setOpenT] = useState(false);
const [valueT, setValueT] = useState(null);
const [itemsT, setItemsT] = useState(
);
const [selectedOption, setSelectedOption] = useState('');
const [title, settitle] = useState('');

const [FirstName, setFirstName] = useState(Params1?.FirstName);
const [lastName, setlastName] = useState(Params1?.LastName);

const [Natinality, setNatinality] = useState('');
const [gstnu, setgstnu] = useState('');
const [TradeAddress, setTradeAddress] = useState('');
const [Tradename, settradename] = useState('');

const [PhysicalAddress, setPhysicalAddress] = useState(Params1?.Address);
const [Poboxnu, setPoboxnu] = useState(Params1?.POBox);
const [EmailAdd, setEmailAdd] = useState(Params1?.Email);
const [fbId, setfbId] = useState('');
const [instaid, setinstaid] = useState('');
const [homePhone, sethomePhone] = useState('');
const [workphone, setworkphone] = useState('');
const [MobilePhone, setMobilePhone] = useState(Params1?.PhoneNumber);
const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
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

const handleNextPress = () => {
  if (utills.isEmptyOrSpaces(valueT)) {

    utills.errorAlert('', 'Please Enter Title');
    return;
  }

  if (utills.isEmptyOrSpaces(FirstName)) {
    utills.errorAlert('', 'Please Enter First Name');
    return;
  }

  if (utills.isEmptyOrSpaces(lastName)) {
    utills.errorAlert('', 'Please Enter Last Name');
    return;
  }
 
  if (utills.isEmptyOrSpaces(dob)) {
    utills.errorAlert('', 'Please Enter Dob');
    return;
  } 
   if (utills.isEmptyOrSpaces(value)) {
    utills.errorAlert('', 'Please Select Natinality');
    return;
  }
  // if (utills.isEmptyOrSpaces(PhysicalAddress)) {
  //   utills.errorAlert('', 'Please Enter  Physical Address');
  //   return;
  // }
  // if (utills.isEmptyOrSpaces(Poboxnu)) {
  //   utills.errorAlert('', 'Please Enter P.O. Box Number');
  //   return;
  // }
  if (utills.isEmptyOrSpaces(EmailAdd)) {
    utills.errorAlert('', 'Please Enter Email Address');
    return;
  }
  if (utills.isEmptyOrSpaces(EmailAdd)) {
    utills.errorAlert('', 'Please Enter Email Id');
    return;
  }
  if (utills.isEmptyOrSpaces(MobilePhone)) {
    utills.errorAlert('', 'Please Enter Mobile Number');
    return;
  }

  let data = {
    Title: valueT,
    FirstName:FirstName,
    Surname:lastName,
    DOB:dob,
    Nationality:value,
    Address:PhysicalAddress,
    POBox:Poboxnu,
    Email:EmailAdd,
    FacebookId:fbId,
    InstaId:instaid,
    HomeMobile:homePhone,
    WorkMobile:workphone,
    PhoneNumber:MobilePhone,
    TradeName:Tradename,
    TradeAddress:TradeAddress,
    GSTINNumber:gstnu



  };
// 
  navigation.navigate(SCREENS.POCDSAccountDetailsFinal,{From:"POCDS",Params1:data,LoginParam:Params1})   
  // navigation.navigate(SCREENS.POCDSAccountDetailsFinal)
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

          <View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Zone, Location, Delivery Customs Fee</Text>
                </View>
              </View>

              {/* <EditTextWithLable
        label="Title *"
        placeholder="Enter Title"
        value={title}
        onChangeText={settitle}
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
  }}>Title  
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
      justifyContent: 'center',
      paddingHorizontal:10,
      marginTop:10,
      marginBottom:15,
      //zIndex: 1, // Add zIndex to ensure the dropdown appears above other elements
      position: 'relative'

    }}>
      <DropDownPicker
      open={openT}
      value={valueT}
      items={itemsT}
      setOpen={setOpenT}
      setValue={setValueT}
      setItems={setItemsT}
      placeholder='Select Title'
      listMode='SCROLLVIEW'
      placeholderStyle ={{color:COLORS.Greyscale}}
      style={{ 
        borderColor: COLORS.Greyscale,borderRadius:10, borderWidth:2,height: hp('8%'),
        width : wp('89%')
    }}
      textStyle={{  
        color:  COLORS.Content,
        fontFamily: FONTFAMILY.Bold,
        alignSelf: 'center',
        fontSize: rf(1.8),
       // marginLeft:wp('1.5%'),

      }}
    />

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
        placeholder="Enter Date of Birth(yyyy-mm-dd)"
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
   
       
      <View style={{alignSelf:'flex-start'}}>
  <Text style={{
    marginTop: hp('1%'),
    fontSize: rf(1.8),
    color: COLORS.Lableheading,
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('3.5%'),
    textAlign:'left'
  }}>Nationality
   <Text style={{
    marginTop: hp('1%'),
    fontSize: rf(1.8),
    color: COLORS.red,
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('3.5%'),
    textAlign:'left'
  }}> *</Text>
  </Text>
</View>
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
      placeholder='Select Nationality'
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
                  <Text  style={styles.Left500BOLDText}>Contact Informations</Text>
                </View>
                <View style={styles.col4}></View>
              </View>
      
       <EditTextWithLable
        label="P.O. Box Number"
        placeholder="Enter P.O. Box Number"
        value={Poboxnu}
        onChangeText={setPoboxnu}
        keyboardType="default"
      />
      <EditTextWithLable
        label="Email Address *"
        placeholder="Enter Email Address"
        value={EmailAdd}
        onChangeText={setEmailAdd}
        keyboardType="default"
      />


<View style={{alignSelf:'flex-start',marginLeft:15}}>

<Text  style={styles.Left500BOLDText}>Do You have GST Number?</Text>

{options.map((item1) => {
            return (
              <CustomRadioButtons
                title={item1.label}
                setSelected={setSelectedOption}
                onChangeSelected={(data, item1) => {
                  console.log(data)
                  setSelectedOption(data);
                }}
                 selected={selectedOption}
                style={{ marginStart: 10 ,marginBottom : 7 }}
              />
            );
          })}
</View>
{selectedOption === 'Yes' && (  // Conditionally render based on the selected option
        <>
          <EditTextWithLable
            label="GSTIN Number *"
            placeholder="Enter GSTIN Number"
            value={gstnu}
            onChangeText={setgstnu}
            keyboardType="default"
          />
          <EditTextWithLable
            label="Trade Name *"
            placeholder="Enter Trade Name"
            value={Tradename}
            onChangeText={settradename}
            keyboardType="default"
          />
          <EditTextWithLable
            label="Trade Address *"
            placeholder="Enter Trade Address"
            value={TradeAddress}
            onChangeText={setTradeAddress}
            keyboardType="default"
          />
        </>
      )}
<View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Social Media Handle

</Text>
                </View>
                <View style={styles.col4}></View>
              </View>

              <EditTextWithLable
        label="Facebook"
        placeholder="Enter Facebook Id"
        value={fbId}
        onChangeText={setfbId}
        keyboardType="default"
      />
       <EditTextWithLable
        label="Instagram"
        placeholder="Enter Instagram Id"
        value={instaid}
        onChangeText={setinstaid}
        keyboardType="default"
      />



<View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Tel#
</Text>
                </View>
                <View style={styles.col4}></View>
              </View>
       <EditTextWithLable
        label="Home"
        placeholder="Enter Home Telephone Number"
        value={homePhone}
        onChangeText={sethomePhone}
        keyboardType="numeric"
      />
       <EditTextWithLable
        label="Work"
        placeholder="Enter Work Telephone Number"
        value={workphone} 
        onChangeText={setworkphone}
        keyboardType="numeric"
      />
       <EditTextWithLable
        label="Mobile *"
        placeholder="Enter Mobile Number"
        value={MobilePhone}
        onChangeText={setMobilePhone}
        keyboardType='numeric'
        maxLength={10}

      />
      
        <View style = {{width:wp('90%')}}>
      
<CustomButtons
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




