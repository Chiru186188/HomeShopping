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
import { RegisterSliceHS } from '../../../redux/slice/auth';
import useRedux from '../../../components/useRedux';
// import CustomRadioButtons from '../../../components/CustomRadioButtons';

export default function HomeShopAccountDetailsFinal({navigation}) {
 
useEffect(() => {
console.log("HIIII",Params1)
  return () => {
   
  };
}, []);
const [selectedOption, setSelectedOption] = useState(null);

 const [ApplicantSign, setApplicantSign] = useState('');
 const route = useRoute();
 const { From ,Params1} = route.params;
const [ApplicantName, setApplicantName] = useState('');
const [AppliDate, setAppliDate] = useState('');

const {dispatch} = useRedux();

  const handleBackPress = () => {
    // Add your logic for the "Back" button action here
  };

  // const handleNextPress = () => {
  //   // Add your logic for the "Next" button action here
  //   navigation.navigate(SCREENS.CartValueScreen,{From :"HS",Service:'Home Shopping Services'})
  // };

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
        utills.errorAlert('', 'Please Enter Applicant Name');
        return;
      }
     
      if (utills.isEmptyOrSpaces(selectedOption)) {
        utills.errorAlert('', 'Please Select Service');
        return;
      } 

      let data = {
        applicantName: ApplicantName,
        applicantSign: ApplicantSign,
        date: "20/11/23",
        authPerson : ApplicantName,
        oceanfreight:selectedOption
      };
     console.log('value==33', data);
     

      const mergedParams = { ...Params1, ...data };
      console.log('mergedParams',mergedParams)
    // navigation.navigate(SCREENS.DashBoard);
      
      dispatch(RegisterSliceHS(mergedParams))
        .unwrap()
        .then(res => {
          console.log('Register res==', res);
          if (res.status == true){
            navigation.navigate(SCREENS.DashBoard);
  
          }else{
            utills.errorAlert('', res.error);
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
              <Text  style={styles.Left500Text}>3387 SW 13th Avenue, Fort Lauderdale, Florida 33315 USA</Text>
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


              <View style={{paddingHorizontal:20, alignSelf:'flex-start'}}>
              <Text  style={styles.textDanger}>By signing below the customer acknowledges having read all the terms and conditions and agrees to abide by these operational regulations and is in full agreement to their enforcement for the efficient processing of their Home Shopping packages.</Text>
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
              <Text  style={styles.Left500Text}>Person authorized to collect packages on behaif of primary account holder and or secondary user.</Text>
              </View>      


              <EditTextBottomBorder
        placeholder="Name of Authorized Person"
        value={ApplicantName}
        onChangeText={setApplicantName}
        keyboardType="default"
      />

<View style={styles.containerSub}>
<View style={{paddingHorizontal:20, alignSelf:'flex-start'}}>
              <Text  style={styles.Left500Text}>Kindly indicate where you learnt of our Home Shopping (ocean freight) service

</Text>


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
    width: 90,
    height: 90,
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




