import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React from 'react';
 import {COLORS, CONSTANTS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES} from '../../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../../common/responsiveFunction';

import { useEffect,useState } from 'react';
import GradientBackground from '../../../components/GradientBackground';
import HeaderWithBackButton from '../../../components/HeaderWithBackButton';
import EditText_WithBackgroundColor from '../../../components/EditText_WithBackgroundColor';
import CustomButtons from '../../../components/CustomButtons';
import { useRoute } from '@react-navigation/native';
import Icons, { Icon } from '../../../components/Icons';
import { ColorSpace } from 'react-native-reanimated';
// import CustomRadioButtons from '../../../components/CustomRadioButtons';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomHeader from '../../../components/CustomHeader';



import {
 
  History_Icon1,
  History_Icon2,
  History_Icon3,
  History_Icon4,
  History_Icon5,
  History_Icon6,
  History_Icon7,
  History_Icon8
  
} from '../../../components/Svg';

export default function HSAccountDetail({navigation}) {
  const route = useRoute();
//   const { From } = route.params;
const [open, setOpen] = useState(false);
const [value, setValue] = useState(null);
const [items, setItems] = useState([
  {label: 'User1', value: 'User1'},
  {label: 'User2', value: 'User2'},
  {label: 'User3', value: 'User3'},

  {label: 'User4', value: 'User4'},
 
]);
useEffect(() => {
  return () => {
   
  };
}, []);
const [selectedOption, setSelectedOption] = useState(null);
const [accountno, setaccountno] = useState('');
const [accountOPDate, setaccountOPDate] = useState('');
const [accountOPAmount, setaccountOPAmount] = useState('');
const [subscriptionDate, setsubscriptionDate] = useState('');
const [accountStatts, setaccountStatts] = useState('');

const [Natinality, setNatinality] = useState('');
const [fbId, setfbId] = useState('');
const [IRID, setIRID] = useState('');
const [homePhone, sethomePhone] = useState('');
const [workphone, setworkphone] = useState('');

const [FirstName, setFirstName] = useState('');
const [lastName, setlastName] = useState('');
const [PhysicalAddress, setPhysicalAddress] = useState('');
const [Poboxnu, setPoboxnu] = useState('');
const [EmailAdd, setEmailAdd] = useState('');

const [MobilePhone, setMobilePhone] = useState('');

const [expanded, setExpanded] = useState(false); // Initially not expanded
const [expanded1, setExpanded1] = useState(false); // Initially not expanded
const [expanded2, setExpanded2] = useState(false); // Initially not expanded

const handleexpandedPress = () => {
    setExpanded(!expanded); // Toggle the state
  };
  const handleexpanded1Press = () => {
    setExpanded1(!expanded1); // Toggle the state
  };
  const handleexpanded2Press = () => {
    setExpanded2(!expanded2); // Toggle the state
  };
const handleBackPress = () => {
  // Add your logic for the "Back" button action here
  navigation.goBack()
};
const handleNextPress = () => {
  // Add your logic for the "Next" button action here
};
const handlePress = () => {
};
const listData = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    // Add more items as needed
  ];
  return (
     <GradientBackground>
    <CustomHeader onPress={handlePress} title = "Account Detail" />
 <View style={{
           alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal:15,
      marginTop:25,

    }}>
      <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder='Select Account User'
      style={{borderColor:'lightgrey', borderWidth:2,borderRadius:15,height: hp('8%'),
    }}
      textStyle={{fontFamily:FONTFAMILY.Medium,fontSize:rf(1.8)}}
    />
    </View>
    <ScrollView style= {styles.containerSc}> 

   
    <View style={styles.container}>
    {/* <ScrollView> */}
 


{/* // onPress={handlePress} */}
          <TouchableOpacity 
          onPress={handleexpandedPress} 
          style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,alignContent:'left',borderTopLeftRadius: 10,borderTopRightRadius: 10}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Customer Details</Text>
                </View>
                 <Icons
      name={expanded ?  'keyboard-arrow-up' : 'keyboard-arrow-down'}
      Type={Icon.MaterialIcons}
      size={rf(3.4)}
      color={COLORS.black}
    />
              </TouchableOpacity>
              {expanded && (

<React.Fragment>

       <EditText_WithBackgroundColor
        label=""
        placeholder="First Name"
        value={FirstName}
        onChangeText={setFirstName}
        keyboardType="default"
      />
         <EditText_WithBackgroundColor
        label="Last Name"
        placeholder="Last Name"
        value={lastName}
        onChangeText={setlastName}
        keyboardType="default"
      />
      <EditText_WithBackgroundColor
        label="Email Address"
        placeholder="Email Address"
        value={EmailAdd}
        onChangeText={setEmailAdd}
        keyboardType="default"
      />
      <EditText_WithBackgroundColor
        label="Mobile"
        placeholder="Mobile Number"
        value={MobilePhone}
        onChangeText={setMobilePhone}
        keyboardType='numeric'
      />
      
    
       <EditText_WithBackgroundColor
        label="Address"
        placeholder="Address"
        value={PhysicalAddress}
        onChangeText={setPhysicalAddress}
        keyboardType="default"
      />
       <EditText_WithBackgroundColor
        label="P.O. Box Number"
        placeholder="P.O. Box Number"
        value={Poboxnu}
        onChangeText={setPoboxnu}
        keyboardType="default"
      />
       <EditText_WithBackgroundColor
        label="IRD"
        placeholder="IRD"
        value={Poboxnu}
        onChangeText={setPoboxnu}
        keyboardType="default"
      />
      

</React.Fragment>
)}

<TouchableOpacity 
          onPress={handleexpanded1Press} 
          style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,alignContent:'left',marginTop: 10}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Account Details</Text>
                </View>
                 <Icons
      name={expanded1 ?  'keyboard-arrow-up' : 'keyboard-arrow-down'}
      Type={Icon.MaterialIcons}
      size={rf(3.4)}
      color={COLORS.black}
    />
              </TouchableOpacity>
              {expanded1 && (

<React.Fragment>

       <EditText_WithBackgroundColor
        
        placeholder="Account no."
        value={accountno}
        onChangeText={setaccountno}
        keyboardType="default"
      />
         <EditText_WithBackgroundColor
        placeholder="Account opening Date"
        value={accountOPDate}
        onChangeText={accountOPDate}
        keyboardType="default"
      />
      <EditText_WithBackgroundColor
        placeholder="Account Opening Amount"
        value={accountOPAmount}
        onChangeText={setaccountOPAmount}
        keyboardType="numeric"
      />
       <EditText_WithBackgroundColor
        placeholder="Subscription Due Date"
        value={subscriptionDate}
        onChangeText={setsubscriptionDate}
        keyboardType="numeric"
      />
      <EditText_WithBackgroundColor
        placeholder="Account Status"
        value={accountStatts}
        onChangeText={setaccountStatts}
        keyboardType='default'
      />
        
</React.Fragment>
)}


<View style = {styles.rowAc} >
<View style = {{alignItems:'center'}}>
<View style={{backgroundColor:COLORS.primary,borderRadius:10,alignItems:'center',width:80,height:80,alignContent:'center',justifyContent:"center"}} >
<Image source={IMAGES.PrintReport} style={styles.logo} />

</View>

<Text style={styles.Left500Text}>Print</Text>
<Text style={styles.Left500Text}>History</Text>

</View>
<View style = {{alignItems:'center'}}>
<View style={{backgroundColor:COLORS.primary,borderRadius:10,alignItems:'center',width:80,height:80,alignContent:'center',justifyContent:"center"}} >
<Image source={IMAGES.HistoryReport} style={styles.logo} />

</View>
<Text style={styles.Left500Text}>History</Text>
<Text style={styles.Left500Text}>Report</Text>

</View>
<View style = {{alignItems:'center'}}>
<View style={{backgroundColor:COLORS.primary,borderRadius:10,alignItems:'center',width:80,height:80,alignContent:'center',justifyContent:"center"}} >
<Image source={IMAGES.EditReport} style={styles.logo} />

</View>
<Text style={styles.Left500Text}>Edit</Text>

</View>
</View>
<TouchableOpacity 
          onPress={handleexpanded2Press} 
          style={[styles.row,{backgroundColor : COLORS.lightGreySelection,paddingVertical:10,paddingHorizontal:20,alignContent:'left',borderTopLeftRadius: 10,borderTopRightRadius: 10}]}>
                <View style={styles.col8}>
                  <Text  style={styles.Left500BOLDText}>Account History</Text>
                </View>
                 <Icons
      name={expanded2 ?  'keyboard-arrow-up' : 'keyboard-arrow-down'}
      Type={Icon.MaterialIcons}
      size={rf(3.4)}
      color={COLORS.black}
    />
              </TouchableOpacity>
              {expanded2 && (

<React.Fragment>



<FlatList
          data={listData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CustomListItem item={item} />}
        /> 

</React.Fragment>
)}

      
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
const CustomListItem = ({ item }) => {
    return (
    <View >
      <View style={{width:wp('90%'),alignSelf:'center'}}>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Opening Balance:'}</Text>
        <Text style={styles.Left500BOLDText}>{'$10.50'}</Text>
  
        </View>
        <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Membership Dues:'}</Text>
        <Text style={styles.Left500BOLDText}>{'$10.50'}</Text>
  
        </View>
        <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Un-cleared Parcels:'}</Text>
        <Text style={styles.Left500BOLDText}>{'$20.00 ( frieght, Customs Duty )'}</Text>
  
        </View>
        <View style={styles.hr}></View>
        <View style={styles.rowList}>
        <Text style={styles.Left500RegularText}>{'Closing Balance:'}</Text>
        <Text style={styles.Left500BOLDText}>{'$92.79'}</Text>
  
        </View>
     
        <View style={styles.hr}></View>

        <View style={styles.rowList2}>
        <View style={styles.rowAA}>
       < History_Icon1></History_Icon1>
{/* <Image source={IMAGES.Cal_icon1} style={{width:24,height:24,resizeMode:'contain'}} /> */}
     <Text style={styles.Left500TextMedum}>{'17-07-2023'}</Text>
  
        </View>  
        <View style={styles.rowAA}>
        {/* <Image source={IMAGES.cod_icon2} style={{width:24,height:24,resizeMode:'contain'}} /> */}
        < History_Icon2 />

    <Text style={styles.Left500TextMedum}>{'Cash on delivery'}</Text>
  
        </View>

        </View>


        <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        {/* <Image source={IMAGES.user_icon3} style={{width:24,height:24,resizeMode:'contain'}} /> */}
        < History_Icon3 />

    
     <Text style={styles.Left500TextMedum}>{'#45677'}</Text>
  
        </View>  
        <View style={styles.rowAA}>
        {/* <Image source={IMAGES.Parcel_icon4} style={{width:24,height:24,resizeMode:'contain'}} /> */}
        < History_Icon4 />



    
            
    <Text style={styles.Left500TextMedum}>{'P278345'}</Text>
  
        </View>

        </View>

        <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        {/* <Image source={IMAGES.Doc_icon5} style={{width:24,height:24,resizeMode:'contain'}} /> */}
        < History_Icon5 />



     <Text style={styles.Left500TextMedum}>{'R56747'}</Text>
  
        </View>  
        <View style={styles.rowAA}>
        {/* <Image source={IMAGES.Wallet_icon6} style={{width:24,height:24,resizeMode:'contain'}} /> */}
        < History_Icon6 />

    <Text style={styles.Left500TextMedum}>{'$45'}</Text>
  
        </View>

        </View>



        <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        {/* <Image source={IMAGES.receptionist_icon7} style={{width:24,height:24,resizeMode:'contain'}} /> */}
        < History_Icon7 />

    
     <Text style={styles.Left500TextMedum}>{'Eva Hodge'}</Text>
  
        </View>  
        <View style={styles.rowAA}>
        < History_Icon8 />

    <Text style={styles.Left500TextMedum}>{'Rudy Webster'}</Text>
  
        </View>

        </View>
        <Text style={[styles.Left500TextMedum,{paddingHorizontal:10,marginBottom:25}]}>{'Lorem lpsum is simply dummy text of the printing and type typesetting industry.'}</Text>

      </View>
      <View style={styles.hr2}></View>

      </View>
      
    );
  };
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
    borderRadius : 15,
    justifyContent:'flex-start',
    alignItems:'center',
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
  rowAA: {
    flexDirection: 'row',
    gap:5,
    width:wp('45%'),
    alignItems:'center',
    

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
    alignItems:'center'

  },
  rowAc: {
    flexDirection: 'row',
justifyContent:'space-around',
marginVertical:30,
paddingHorizontal:20,
width:wp('90%')
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
    width: 40,
    height: 40,
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
    fontFamily: FONTFAMILY.SemiBold,
    fontSize:rf(1.8),
    textAlign: 'center',
  },
  Left500TextMedum: {
    fontFamily: FONTFAMILY.Medium,
    fontSize:rf(1.8),
    textAlign: 'left',
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
  hr2: {
    borderBottomWidth: 10,
    borderColor: COLORS.charcoalGrey,
    width:wp('94%')

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




