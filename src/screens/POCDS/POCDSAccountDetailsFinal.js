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
import CustomRadioButtons from '../../components/CustomRadioButtons';
import CustomButtonsBAndS from '../../components/CustomButtonsBAndS';
// import CustomRadioButtons from '../../components/CustomRadioButtons';

export default function POCDSAccountDetailsFinal({navigation}) {
 
useEffect(() => {
console.log("HIIII")
  return () => {
   
  };
}, []);
const [selectedOption, setSelectedOption] = useState(null);
const [selectedRequirementOption, setSelectedRequirementOption] = useState(null);

 const [ApplicantSign, setApplicantSign] = useState('');
 const [PhysicalAdd, setPhysicalAdd] = useState('');

const [ApplicantName, setApplicantName] = useState('');
const [AppliDate, setAppliDate] = useState('');


const handleBackPress = () => {
  // Add your logic for the "Back" button action here
  navigation.goBack()
};

const handleNextPress = () => {
  // Add your logic for the "Next" button action here
  navigation.navigate(SCREENS.CartValueScreen,{From :"POCDS",Service:'POST OFFICE CLEARANCE AND DELIVERY SERVICE'})

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
                  <Text  style={styles.Left500BOLDTextWhite}>Subscribed Services Account #</Text>
                </View>
              </View>
              <View style={{paddingHorizontal:20, alignSelf:'flex-start'}}>
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

              </View>


              <View style={[styles.row,{backgroundColor : COLORS.primary,paddingVertical:10,paddingHorizontal:20,marginVertical:10,alignContent:'left',width : wp('94')}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDTextWhite}>POCDS Requirement (Please Click)</Text>
                </View>
              </View>
              <View style={{paddingHorizontal:20, alignSelf:'flex-start'}}>
              {DEFAULTARRAYS.RequirmentServices.map((item1) => {
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
          })}

          

      <EditTextWithLable
        label="Physical Address to where packages should be delivered, if desired:"
        placeholder="Enter Physical Address"
        value={PhysicalAdd}
        onChangeText={setPhysicalAdd}
        keyboardType="default"
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


              <View style={{paddingHorizontal:20, alignSelf:'flex-start'}}>
              <Text  style={styles.textDanger}>By signing below the customer acknowledges having read all the terms and conditions and agrees to abide by these operational regulations and is in full agreement to their enforcement for the efficient processing of their Home Shopping packages.</Text>
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




