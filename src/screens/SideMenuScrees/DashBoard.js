import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, FlatList} from 'react-native';
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

import {
  Dimensio_Icon2Svg,
  Calender_Icon6Svg,
  Ship_Icon1Svg,
  Weight_Icon3Svg,
  Location_Icon4Svg,
  Processing_Icon5Svg,
  Wallet_Icon7Svg,
  
} from '../../components/Svg';


export default function DashBoard({navigation}) {
  const [email, setemail] = useState('');
  const [pwd, setupwd] = useState('');
  const [isChecked, setIsChecked] = useState(false);

useEffect(() => {
console.log("HIIII")
  return () => {
   
  };
}, []);
const handlePress = () => {
};
  return (
     <GradientBackground>
    <CustomHeader onPress={handlePress} title = "DashBoard" />
    <ScrollView>
    <View style={styles.container}>
<View>
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
</View>

<View style={{marginTop:35}}>
<Text style={[styles.titleText,{paddingHorizontal:10,textAlign:'left'}]}>Pending Packages - need To Upload Invoice</Text>

<FlatList
      data={lowerList}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={renderItem2}
      contentContainerStyle={styles.list}
    />

    </View>
    </View>
    </ScrollView>
     </GradientBackground>

  );
}
const data = [

  { id: '1', text: 'Needs To Upload Invoices',Title: '40',color:COLORS.chatGreencolor,icon:IMAGES.Doc_icon5 },
  { id: '2', text: 'Upload Doc',Title: '56' ,color:'pink',icon:IMAGES.user_icon3},
  { id: '3', text: 'Needs To Upload Images',Title: '25',color:COLORS.blueButton,icon:IMAGES.Wallet_icon6 },
  { id: '4', text: 'Invoices Pending' ,Title:'64',color:'orange',icon:IMAGES.MiscServiceIcon},
  { id: '5', text: 'Intransit Packets',Title: '20',color:'pink',icon:IMAGES.profit_icon8 },
  { id: '6', text: 'Parcel',Title: '90' ,color:COLORS.blueButton,icon:IMAGES.Parcel_icon4},

];
const lowerList = [

  { id: '1', text: 'Needs To Upload Invoices',Title: '40',color:COLORS.chatGreencolor,icon:IMAGES.Doc_icon5 },
  { id: '2', text: 'Upload Doc',Title: '56' ,color:'pink',icon:IMAGES.user_icon3},
  
];
const renderItem = ({ item }) => (
  <View style={[styles.item,{    borderLeftColor: item.color,
}]}>
    <View style={{flexDirection:'row',gap:10}} >
      <View style={{width: 40,
    height: 40,backgroundColor:item.color,alignItems:'center',justifyContent:'center',borderRadius:10}}>
      <Image source={item.icon} style={{
    width: 24,
    height: 24,
  }} />
      </View>
      <View style={{ marginLeft: 10, flex: 1 }}>
      <Text style={styles.titleText}>{item.Title}</Text>
    <Text style={styles.itemText}>{item.text}</Text>
    </View>
    </View>
  </View>
);
const renderItem2 = ({ item }) => (
  
    <View >
      <View style={styles.item1}>
    

        <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        <Ship_Icon1Svg style={{width:30,height:30}}/>
     <Text style={styles.Left500TextMedum}>{'Ship'}</Text>
  
        </View>  
        <View style={styles.rowAA}>
        <Dimensio_Icon2Svg style={{width:30,height:30}}/>
 
    <Text style={styles.Left500TextMedum}>{'5.2x4 MM'}</Text>
  
        </View>

        </View>


        <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        <Weight_Icon3Svg style={{width:30,height:30}}/>
    
    
     <Text style={styles.Left500TextMedum}>{'4.8 KG'}</Text>
  
        </View>  
        <View style={styles.rowAA}>
        <Processing_Icon5Svg style={{width:30,height:30}}/>



    
            
    <Text style={styles.Left500TextMedum}>{'45565'}</Text>
  
        </View>

        </View>

        <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        <Location_Icon4Svg style={{width:30,height:30}}/>

     <Text style={styles.Left500TextMedum}>{'Processing'}</Text>
  
        </View>  
        <View style={styles.rowAA}>
        <Calender_Icon6Svg style={{width:30,height:30}}/>
       
    <Text style={styles.Left500TextMedum}>{'07-07-2023'}</Text>
  
        </View>

        </View>



        <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        <Wallet_Icon7Svg style={{width:30,height:30}}/>
    
    
     <Text style={styles.Left500TextMedum}>{'$10'}</Text>
  
        </View>  
        {/* <View style={styles.rowAA}>
        <Wallet_Icon7Svg style={{width:30,height:30}}/>

    <Text style={styles.Left500TextMedum}>{'Rudy Webster'}</Text>
  
        </View> */}

        </View>
        <Text style={[styles.Left500TextMedum,{paddingHorizontal:10,marginBottom:25}]}>{'Lorem lpsum is simply dummy text of the printing and type typesetting industry.'}</Text>

      </View>
      <View style={styles.hr2}></View>

      </View>
      
   
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width : wp('96'),
    justifyContent:'flex-start',
    margin:20,
    borderRadius : 15,
    padding:10,
    alignSelf:'center'
  },

  

 
  item: {
    width: 200, // Adjust as needed
    height: 150, // Adjust as needed
    backgroundColor: '#ffffff',
    marginRight: 8, // Adjust as needed
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius : 15,
    paddingVertical:15,
paddingHorizontal:10,
borderLeftWidth: 7, // Width of the left border
  },
  item1: {
    // Adjust as needed
    backgroundColor: '#ffffff',
    marginTop: 8, // Adjust as needed
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius : 15,
    paddingVertical:15,
paddingHorizontal:10,
  },
  itemText: {
    fontSize: rf(1.8), // You can adjust the size as needed
    fontFamily: FONTFAMILY.Regular,
  },
  titleText: {
    fontSize: rf(1.8), // You can adjust the size as needed
    fontFamily: FONTFAMILY.SemiBold,
  },
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
    fontFamily: FONTFAMILY.Regular,
    fontSize: rf(1.7),
    color: COLORS.Subheading,
    textAlign: 'left',
  },
  rememberme: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: rf(1.7),
    color: COLORS.Lableheading,
    textAlign: 'left',
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
 Left500Text: {
  fontFamily: FONTFAMILY.SemiBold,
  fontSize:rf(1.8),
  textAlign: 'center',
},
Left500BOLDText: {
  fontFamily: FONTFAMILY.Bold,
  fontSize:rf(1.8),
  textAlign: 'left',
}, 
Left500RegularText: {
  fontFamily: FONTFAMILY.Regular,
  fontSize:rf(1.8),
  textAlign: 'left',
  color:COLORS.Lableheading
},
row: {
  flexDirection: 'row',
},
rowAA: {
  flexDirection: 'row',
  gap:5,
  width:wp('45%'),
  alignItems:'center'
},
Left500TextMedum: {
  fontFamily: FONTFAMILY.Medium,
  fontSize:rf(1.6),
  textAlign: 'left',
},
rowList: {
  flex:1,
  flexDirection: 'row',
  justifyContent:'space-between',
  paddingHorizontal:10,
  marginVertical:15,
  gap:30

},
rowList2: {
  flexDirection: 'row',
  justifyContent:'space-between',
  paddingHorizontal:10,
  marginVertical:10,
  alignContent:'center'

},
rowAc: {
  flexDirection: 'row',
justifyContent:'space-around',
marginVertical:30,
paddingHorizontal:20,
width:wp('90%')
},
});




