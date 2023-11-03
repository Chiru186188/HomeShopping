import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, CONSTANTS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES} from '../../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../../common/responsiveFunction';

import { useEffect,useState } from 'react';
import CustomBlueButton from '../../../components/CustomBlueButton';
import GradientBackground from '../../../components/GradientBackground';
import HeaderWithBackButton from '../../../components/HeaderWithBackButton';
import EditTextWithLable from '../../../components/EditTextWithLable';
import Icons, { Icon } from '../../../components/Icons';
import CustomHeader from '../../../components/CustomHeader';
import { ScrollView } from 'react-native-gesture-handler';

export default function Userprofile({navigation}) {
  const [email, setemail] = useState('');
  const [pwd, setupwd] = useState('');
  const [isChecked, setIsChecked] = useState(false);

useEffect(() => {
console.log("HIIII")
  return () => {
   
  };
}, []);
const GoToNext = () => {
}
const handlePress = () => {
};
  return (
     <GradientBackground>
    <CustomHeader onPress={handlePress} title = "Profile" />
<ScrollView>
    <View>
   

    <View style={styles.container}>
    <View style={{alignItems:'center',margin:30}} >
        <Image source={IMAGES.ProfileImage} style={{
    width: 150,
    height: 150,
  }} />
  <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
  <Text style={styles.txt}>Martha Banks</Text>


  <Icons
      name={'page-edit'}
      Type={Icon.Foundation}
      size={rf(3.4)}
      color={COLORS.primary}
      style={{alignSelf:'center',alignContent:'center',alignItems:'center',marginTop:10}}
    />
</View>
</View>
    <View style={styles.containerTop}>
    <Text  style={styles.Left500TextRight}>Informations</Text>
    </View>



    <View style={styles.row}>
            
    <Text  style={styles.Left500BOLDText}>Username
    </Text>
 
    <Text  style={styles.Left500Text}>Martha Banks 
    </Text>



    </View>

    <View style={styles.row}>
            
            <Text  style={styles.Left500BOLDText}>Phone number
            </Text>
         
            <Text  style={styles.Left500Text}>584-490-9153 
            </Text>
        
            </View>

            <View style={styles.row}>
            
            <Text  style={styles.Left500BOLDText}>Email
            </Text>
         
            <Text  style={styles.Left500Text}>freeslab88@gmail.com 
            </Text>
        
            </View>  

               <View style={styles.row}>
            
            <Text  style={styles.Left500BOLDText}>Gender
            </Text>
         
            <Text  style={styles.Left500Text}>Male
            </Text>
        
            </View> 

               <View style={styles.row}>
            
            <Text  style={styles.Left500BOLDText}>Birthday
            </Text>
         
            <Text  style={styles.Left500Text}>April 16 1988 
            </Text>
        
            </View> 

               <View style={styles.row}>
            
            <Text  style={styles.Left500BOLDText}>Address
            </Text>
         
            <Text  style={styles.Left500Text}>2212 A, 2nd Floor, Noida 62 
            </Text>
        
            </View> 

               <View style={styles.row}>
            
            <Text  style={styles.Left500BOLDText}>PO BOX
            </Text>
         
            <Text  style={styles.Left500Text}>235645
            </Text>
        
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
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: rf(2.4),
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
 {backgroundColor : COLORS.lightGreySelection,
    alignContent:'left',
    justifyContent:'space-evenly',padding:10},
   
    Left500TextRight: {
        fontFamily: FONTFAMILY.Regular,
        fontSize:rf(2.0),
        textAlign: 'left',
        color:COLORS.Lableheading
      },
    Left500Text: {
        fontFamily: FONTFAMILY.Regular,
        fontSize:rf(1.8),
        textAlign: 'right',
        color:COLORS.Lableheading
      },
       Left500BOLDText: {
        fontFamily: FONTFAMILY.Bold,
        fontSize:rf(1.8),
        textAlign: 'left',
        color:COLORS.Content

      },
      Left500BOLDTextT: {
        fontFamily: FONTFAMILY.Bold,
        fontSize:rf(1.8),
        textAlign: 'left',
      },
});




