import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, CONSTANTS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES} from '../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';

import { useEffect,useState } from 'react';
import CustomBlueButton from '../../components/CustomBlueButton';
import GradientBackground from '../../components/GradientBackground';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import EditTextWithLable from '../../components/EditTextWithLable';
import Icons, { Icon } from '../../components/Icons';
import CustomHeader from '../../components/CustomHeader';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButtons from '../../components/CustomButtons';
import CustomButtonsBAndP from '../../components/CustomButtonsBAndP';

export default function POCDSPayments({navigation}) {
  const [transcType, settranscType] = useState('');
  const [acount, setacount] = useState('');
  const [HSacount, setHSacount] = useState('');

  const [amount, setamount] = useState('');
  const [RefNo, setRefNo] = useState('');
  const [RefCusName, setRefCusName] = useState('');
  const [PoBoxno, setPoBoxno] = useState('');
  const [invoice, setinvoice] = useState('');

  const [isChecked, setIsChecked] = useState(false);

useEffect(() => {
console.log("HIIII")
  return () => {
   
  };
}, []);

const handlePress = () => {
};

const handleBackPress = () => {
  // Add your logic for the "Back" button action here
  navigation.goBack()
};

const handleNextPress = () => {
  // Add your logic for the "Next" button action here
  navigation.navigate(SCREENS.PaymentGatwayScreen)
};
  return (
     <GradientBackground>
    <CustomHeader onPress={handlePress} title = "POCDS Service" />
<ScrollView>
    <View>
    <View style={styles.container}>
    <View style={styles.containerTop}>
    <Text  style={styles.Left500Text}>POCDS Service
</Text>
    </View>
<View style={{alignSelf:'center'}}>
<EditTextWithLable
        label="Transaction Type *"
        placeholder="Transaction Type"
        value={transcType}
        onChangeText={settranscType}
        keyboardType="default"
      />
     <EditTextWithLable
        label="Account *"
        placeholder="Enter Account"
        value={acount}
        onChangeText={setacount}
        keyboardType="default"
      />
        <EditTextWithLable
        label="Home Shopping/Ezone Account *"
        placeholder="Enter Home Shopping/Ezone Account"
        value={HSacount}
        onChangeText={setHSacount}
        keyboardType="default"
      />

<EditTextWithLable
        label="Customer Name *"
        placeholder="Enter Customer Name"
        value={RefCusName}
        onChangeText={setRefCusName}
        keyboardType="default"
      />
      <EditTextWithLable
        label="Invoice *"
        placeholder="Enter Invoice"
        value={invoice}
        onChangeText={setinvoice}
        keyboardType="default"
      />
    
       <EditTextWithLable
        label="Amount *"
        placeholder="Enter Amount"
        value={amount}
        onChangeText={setamount}
        keyboardType="default"
      />
       
       <EditTextWithLable
        label="Note Description"
        placeholder="Enter Note Description"
        value={RefNo}
        onChangeText={setRefNo}
        keyboardType="default"
      />



<CustomButtonsBAndP
        onBackPress={handleBackPress}
        onNextPress={handleNextPress}
      />
     </View>
    </View>

  
    </View>
    </ScrollView>
     </GradientBackground>

  );
}

const styles = StyleSheet.create({
  container: {
   
    width : wp('94'),
    justifyContent:'space-between',
    //alignItems:"center",
    backgroundColor :COLORS.white,
    margin:20,
    borderRadius : 15,
    gap:10,
    // paddingHorizontal:10,
    alignSelf:'center',
    paddingBottom:15
  },
  subcontainer: 
  
    {
    flexDirection:'row',
    backgroundColor : COLORS.lightGreySelection,
    paddingVertical:10,
    paddingHorizontal:10,
    margin:10,
    alignItems:'center',
    justifyContent:'space-between',
    borderRadius:10
},
  
  row:
  {paddingHorizontal:10, justifyContent:'space-between',flexDirection:'row'},
  
  buttonContainer: {
   gap :10,
   alignItems: 'center',
  },
  txt: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: rf(3.0),
    color: COLORS.Heading,
    textAlign: 'left',
    marginTop: hp('1.8%'),
  },
  button: {
    marginTop: 20, 
  },
  icon: {
    fontSize: rf(2.5),
    color: COLORS.Subheading,
    marginRight: 10,
  },
  txt1: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: rf(1.8),
    color: COLORS.Content,
    textAlign: 'left',
  },
  txt2: {
    fontFamily: FONTFAMILY.Regular,
    fontSize: rf(1.6),
    color: COLORS.Lableheading,
    textAlign: 'left',
  },
  txt3: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: rf(2.0),
    color: COLORS.Heading,
    textAlign: 'left',
  },
  circle: {
    paddingTop:wp('1.5%'),
    backgroundColor:COLORS.white,
    width:wp('9%'),
    height:wp('9%'),
    alignItems:'center',
    alignContent:'center',
    alignSelf:'center',
borderRadius:wp('4.5%')

  },
  SignUpContainer: {
   
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subContainer2: {
    marginVertical: 10,
  
   flexDirection: 'row',
   justifyContent: 'flex-start',
   alignItems: 'center',
 },
containerTop:
 {backgroundColor : COLORS.lightGreySelection,alignContent:'left',justifyContent:'space-evenly',padding:15,borderTopLeftRadius: 10, // Set the top left border radius
    borderTopRightRadius: 10},
   
   
    Left500Text: {
        fontFamily: FONTFAMILY.Regular,
        fontSize:rf(1.8),
        textAlign: 'left',
      },
       Left500BOLDText: {
        fontFamily: FONTFAMILY.Medium,
        fontSize:rf(1.8),
        textAlign: 'left',
      },
      Left500BOLDTextT: {
        fontFamily: FONTFAMILY.Bold,
        fontSize:rf(1.8),
        textAlign: 'left',
      },
});




