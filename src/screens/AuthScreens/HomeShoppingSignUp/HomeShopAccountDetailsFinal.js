import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, ScrollView} from 'react-native';
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
import EditTextWithLable from '../../../components/EditTextWithLable';
import CustomButtons from '../../../components/CustomButtons';
import EditTextBottomBorder from '../../../components/EditTextBottomBorder';
import CustomRadioButtons from '../../../components/CustomRadioButtons';
import CustomButtonsBAndS from '../../../components/CustomButtonsBAndS';
import { useRoute } from '@react-navigation/native';
import utills from '../../../utills';
import { RegisterSliceEZone, RegisterSliceHS } from '../../../redux/slice/auth';
import useRedux from '../../../components/useRedux';
import Icons, { Icon } from '../../../components/Icons';
import TouchableNativeFeedback from '../../../components/TouchableNativeFeedback';
// import CustomRadioButtons from '../../../components/CustomRadioButtons';

export default function HomeShopAccountDetailsFinal({navigation}) {
 
useEffect(() => {
console.log("HIIII",Params1)
console.log("LoginParam",LoginParam)

const currentDate = new Date(); // Create a new Date object representing the current date and time
const dateString = currentDate.toISOString().split('T')[0]; // Convert to ISO format and extract the date part

console.log(dateString);
setAppliDate(dateString)
 setApplicantName(Params1.FirstName + " " + Params1.Surname)
setApplicantSign(Params1.FirstName)
  return () => {
   
  };
}, []);
const [selectedOption, setSelectedOption] = useState(null);

const [ApplicantSign, setApplicantSign] = useState();
const route = useRoute();
const { From ,Params1,LoginParam} = route.params;
const [ApplicantName, setApplicantName] =  useState("");
const [AuthName, setAuthName] =  useState("");

const [AppliDate, setAppliDate] = useState('');
const {dispatch} = useRedux();

  const handleBackPress = () => {
    // Add your logic for the "Back" button action here
    navigation.goBack()
  }; 

  const [isChecked, setIsChecked] = useState(false);



  const handleClick = () => {
    // Add your logic for the "Back" button action here
    // navigation.goBack()
    if(From == "HS"){
      Linking.openURL("http://hsstrain.apis.gov.ai/Documents/Home%20Shopping%20Agreement%20Form-%20Final%20March%202022.pdf")

    }
else{
  Linking.openURL("http://hsstrain.apis.gov.ai/Documents/eZone%20Agreement%20Form%20March%202022.pdf")

}

  };

  // const handleNextPress = () => {
  //   // Add your logic for the "Next" button action here
  //   navigation.navigate(SCREENS.CartValueScreen,{From :"HS",Service:'Home Shopping Services'})
  // };
  const [selectedOptionInsuarance, setselectedOptionInsuarance] = useState(null);
  const [selectedOptionInsuarance1, setselectedOptionInsuarance1] = useState(null);

  const options = [
    { label: 'Accept', value: '1' },
    { label: 'Decline', value: '0' },
  ];
  const handleOptionSelect = (option) => {

    setselectedOptionInsuarance(option.value);
  };
  const handleNextPress = async () => {
  
    
    if (utills.isEmptyOrSpaces(ApplicantSign)) {
       utills.errorAlert('', 'Please Enter Applicant Signature');
        return;
      }
    
      if (utills.isEmptyOrSpaces(AppliDate)) {
        utills.errorAlert('', 'Please Enter Apply Date');
        return;
      }
  
      if (utills.isEmptyOrSpaces(ApplicantName)) {
        utills.errorAlert('', 'Please Enter Name Of Authorized Person');
        return;
      }
     
      if (utills.isEmptyOrSpaces(selectedOption)) {
        utills.errorAlert('', 'Please Select Service');
        return;
      } 
      if (selectedOptionInsuarance == null){

        utills.errorAlert("Please choose you want to insured or not")
        return
      }
      if (isChecked == false){

        utills.errorAlert("Please Agree to the terms")
        return
      }
      let data = {
         ApplicantName: AuthName,
        ApplicantSign: ApplicantSign,

        Signature: ApplicantSign,
        RegDate: AppliDate,
        AuthPerson : AuthName,
        oceanfreight:selectedOption,
        UserId:LoginParam.UserId,
        Insurance:selectedOptionInsuarance1
      };
     console.log('value==33', data);
     const mergedParams = { ...Params1, ...data };
      console.log('mergedParams',mergedParams)
      if (From === "HS")
{
  dispatch(RegisterSliceHS(mergedParams))
  .unwrap()
  .then(res => {
    console.log('Register res==', res);
    if (res.status == true || res.statusCode == 200){
      navigation.navigate(SCREENS.CartValueScreen,{From :"HS",Service:'Home Shopping',userID:LoginParam.UserId,LoginParams:LoginParam})
    }else{
      utills.errorAlert('', res.msg);
      return;
    }
  });
}      else{
  dispatch(RegisterSliceEZone(mergedParams))
  .unwrap()
  .then(res => {
    console.log('Register res==', res);
    if (res.status == true || res.statusCode == 200){

      navigation.navigate(SCREENS.CartValueScreen,{From :"EZ",Service:'E-Zone',userID:LoginParam.UserId,LoginParams:LoginParam})
    }else{
      utills.errorAlert('', res.msg);
      return;
    }
  });
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
    <View style={[styles.row,{justifyContent:'center',alignItems:'center',width:wp('85%'),gap:10}]}>
            <Image source={IMAGES.logoHS} style={styles.logo} />
            {From === 'HS' ? (
  <Image source={IMAGES.HomeShopingImage} style={styles.logo1} />
) :             <Image source={IMAGES.Ezone1} style={styles.logo1} />
}
         </View>
          <View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Shipping Address</Text>
                </View>
                <View style={styles.col4}></View>
              </View>
              <View style={{paddingHorizontal:20, alignSelf:'flex-start'}}>
              {/* <Text  style={styles.Left500Text}>3387 SW 13th Avenue, Fort Lauderdale, Florida 33315 USA</Text> */}
             
              {From === 'HS' ? 
  <Text style={styles.Left500Text}>3387 SW 13th Avenue Fort Lauderdale,Florida 33315 USA</Text> :
  <Text style={styles.Left500Text}>4411 NW 74th Avenue Miami,Florida 33195 USA</Text>}    
              </View>
              <View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Insurance
                  <Text  style={[styles.Left500BOLDText,{color:'red'}]}> *
</Text>
</Text>
                </View>
                <View style={styles.col4}></View>
                {options.map((item1) => {
            return (
              <CustomRadioButtons
                title={item1.label}
                setSelected={setselectedOptionInsuarance}
                onChangeSelected={(data, item1) => {
                  console.log(data)
                  console.log(item1)
                  setselectedOptionInsuarance(data)
if(data == "Accept"){
  setselectedOptionInsuarance1("1");

}else{
  setselectedOptionInsuarance1("0");
}}}
selected={selectedOptionInsuarance}
                style={{ marginStart: 10 ,marginBottom : 7 }}
              />
            );
          })}
             

              </View>

              {From === 'HS' ? (
  <>
    {/* <View style={{paddingHorizontal:20, alignSelf:'flex-start'}}> */}
    <TouchableNativeFeedback   onPress={handleClick}>

      <Text style={styles.textNormal}>Please 
          <Text style={[styles.textDanger,]}> click
          </Text>

        <Text style={styles.textNormal}> here to read the Home Shopping service agreement terms and conditions</Text>
      
      </Text>
      </TouchableNativeFeedback> 

    {/* </View> */}
  </>
) : (
  // <>
  <TouchableNativeFeedback   onPress={handleClick}>

  <Text style={styles.textNormal}>Please 
      <Text style={[styles.textDanger]}> click
      </Text>

    <Text style={styles.textNormal}> here to read the eZone service agreement terms and conditions</Text>
  
  </Text>
  </TouchableNativeFeedback> 
  // </>
)}

             

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


              <View style={{paddingHorizontal:20, alignSelf:'flex-start'}}>
              <Text  style={styles.textDanger}>By ticking the box / signing below the customer acknowledges having read all the terms and conditions and agrees to abide by these operational regulations and is in full agreement to their enforcement for the efficient processing of their Home Shopping packages.</Text>
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
     


<View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>AUTHORISED PERSON (if applicable)</Text>
                </View>
              </View>

             <View style={{paddingHorizontal:20, alignSelf:'flex-start'}}>
              <Text  style={styles.Left500Text}>Person authorized to collect packages on behalf of primary account holder and or secondary user.</Text>
              </View>      


              <EditTextBottomBorder
        placeholder="Name of Authorized Person"
        value={AuthName}
        onChangeText={setAuthName}
        keyboardType="default"
      />

<View style={styles.containerSub}>
<View style={{backgroundColor :COLORS.primary,padding:10,borderTopRightRadius:10,borderTopLeftRadius:10
}}>

              <Text  style={styles.Left500Textwhite}>Kindly indicate where you learnt of our Home Shopping (ocean freight) service
</Text>
</View>
<View style={{paddingHorizontal:20, alignSelf:'flex-start',paddingTop:10}}>



{DEFAULTARRAYS.ApplyList.map((item1) => {
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
 </View>              
</View>
{/* <View style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left'}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Subscription Transaction</Text>
                </View>
              </View> */}
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

  containerSub: {
    flex: 1,
    width : wp('88'),
    alignContent:'flex-start',
    backgroundColor :COLORS.lightBlueSelection,
    margin:20,
    borderRadius : 15,
    // paddingVertical:20
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
  },
  logo1: {
    height: wp("30%"),
    resizeMode:'contain',
    width : wp("60%")
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
    //textAlign:'justify'
    // marginTop:16
  },
  textNormal: {
    color: COLORS.black,
    fontSize:rf(1.8),
    fontFamily: FONTFAMILY.Medium,
    //textAlign:'justify'
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
  Left500Textwhite: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize:rf(1.8),
    textAlign: 'left',
    color:'white'
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




