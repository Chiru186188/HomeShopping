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
import CustomHeader from '../../../components/CustomHeader';
// import CustomRadioButtons from '../../../components/CustomRadioButtons';

export default function ChangePassword({navigation}) {
 
useEffect(() => {
console.log("HIIII")
  return () => {
   
  };
}, []);
const [selectedOption, setSelectedOption] = useState(null);

 const [Cpwd, setCpwd] = useState('');
 const route = useRoute();
//  const { From } = route.params;
const [Npwd, setNpwd] = useState('');
const [NCpwd, setNCpwd] = useState('');


  const handleBackPress = () => {
    // Add your logic for the "Back" button action here
  };

  const handleNextPress = () => {
    // Add your logic for the "Next" button action here
  };
const handlePress = () => {
};
  return (
     <GradientBackground>
    <CustomHeader onPress={handlePress} title = "Change Password" />

    <ScrollView style= {styles.containerSc}> 
    <View style={styles.container}>
    {/* <ScrollView> */}
    


    <Text  style={[styles.Left500Text,{padding:10}]}>Password must contain at least- one special character, one digit, one uppercase & one lower case alphabet and have more than 6 characters...i.e:-Example@123. Allowed Special Characters are ? @ # $ % &
</Text>


      <EditTextWithLable
      label="Current Password *"
        placeholder="Enter Current Password"
        value={Cpwd}
        onChangeText={setCpwd}
        keyboardType="default"
      />

<EditTextWithLable
      label="New Password *"
        placeholder="Enter New Password"
        value={Npwd}
        onChangeText={setNpwd}
        keyboardType="default"
        password
        icon
      />

<EditTextWithLable
      label="Confirm Password *"
        placeholder="Enter Confirm Password"
        value={NCpwd}
        onChangeText={setNCpwd}
        keyboardType="default"
        password
        icon
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
    fontFamily: FONTFAMILY.Medium,
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




