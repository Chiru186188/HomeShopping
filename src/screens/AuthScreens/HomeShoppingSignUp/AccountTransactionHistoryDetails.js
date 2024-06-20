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
import { useFocusEffect, useRoute } from '@react-navigation/native';
import Icons, { Icon } from '../../../components/Icons';
import { ColorSpace } from 'react-native-reanimated';
// import CustomRadioButtons from '../../../components/CustomRadioButtons';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomHeader from '../../../components/CustomHeader';

import { useSelector } from 'react-redux';
import {  getTransactionHistorySlice } from '../../../redux/slice/categories';
import useRedux from '../../../components/useRedux';
import utills from '../../../utills';
import TouchableNativeFeedback from '../../../components/TouchableNativeFeedback';

export default function AccountTransactionHistoryDetails({navigation}) {
  const route = useRoute();
  const {dispatch} = useRedux();
  const userData = useSelector(state => state.auth.userData);

useEffect(() => {
  getAccountHistory()

  return () => {
  };
}, []);


const AccountHistory  = useSelector(state => state.category.TransactionHistory);
const AccountHistoryList  = AccountHistory?.aaData;
console.log("AccountHistory",AccountHistory)

// console.log("AccountHistoryList",AccountHistoryList)

const getAccountHistory = () => {

  let data = {
    Id    : userData?.userID,
    
  };
  // console.log('dataaaaaaar',data)

  dispatch(getTransactionHistorySlice(data))
    .unwrap()
    .then(res => {
      // console.log("resaaData",res)

    })
    .catch(e => {
      //  setLoading(false);
    });
};




useFocusEffect(
  React.useCallback(() => {
    
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      console.log("beforeRemove",e)
      const originalString = e.target;
      const arrayOfSubstrings = originalString.split('-');
      
      if (e.data.action.type === 'GO_BACK' && arrayOfSubstrings[0]=== 'HSAccountDetail') {

        if (!handleBackGesture()) {
          e.preventDefault();
        }
    }
   
    });

    
    const handleBackGesture = () => {
      console.log('ooooooo')
      navigation.navigate(SCREENS.DashBoard)

      //return false;
    };
       
  }, [navigation])
);


  const handleBackPress = () => {
  // Add your logic for the "Back" button action here
  navigation.goBack()
};

  const handleNextPress = () => {
  // Add your logic for the "Next" button action here
  };

  const handlePress = () => {
  };

  return (
     <GradientBackground>
    {/* <CustomHeader onPress={handlePress} title = "Account Detail" /> */}
    <HeaderWithBackButton onPress={handlePress} title = "Transaction History" />
 {/* <View style={{
           alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal:15,
      marginTop:25,

    }}>
  
    </View> */}
    <View style= {styles.containerSc}> 
 
    {/* <ScrollView> */}
 
<FlatList
          data={AccountHistoryList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CustomListItem item={item} />}
        /> 
 
    </View>
   
     </GradientBackground>

  );
}
const CustomListItem = ({ item }) => {


const receiptNotes =item?.Description;

const updatedReceiptNotes = receiptNotes.replace(/<br\s*[/]?>/gi, '\n');

    return (
    <View >
            <View style={{width:wp('100%'),alignSelf:'center' ,backgroundColor:COLORS.lightgrey,marginBottom:15,borderTopLeftRadius:45,borderTopRightRadius:45}}>
            <View style={styles.rowList22}>
              <View style ={{flex:1}}>
          <Text style={styles.Left500BOLDText} 
          numberOfLines={3}
          ellipsizeMode='tail'
          >{item?.CustomerInfo}</Text>
          </View>
          <View style ={{flex:1,flexDirection:'row',gap :5}}>
          <Icons
            name={'calendar-clock'}
            style={styles.icon}
            Type={Icon.MaterialCommunityIcons}
            size={rf(2.8)}
          />
           <View style ={{flex:1}}>
          <Text style={[styles.Left500BOLDText,{textAlign:'center'}]} >{item?.CreatedOn}</Text>
          </View>
          </View>
          </View>
      <View style={{width:wp('100%'),alignSelf:'center' ,backgroundColor:'white',borderTopLeftRadius:45,borderTopRightRadius:45,paddingHorizontal:10,paddingVertical:10}}>
     

        {/* <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Transaction Date</Text>
          <Text style={styles.Left500TextMedum} >{item?.CreatedOn}</Text>
          </View> */}
          {/* <View style={styles.hr}></View> */}

          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Transaction Type</Text>
          <View style={{ flex: 1 }}>
  <Text style={styles.Left500TextMedum} numberOfLines={2} ellipsizeMode="tail">
    {item?.TransactionTypeName + " - " + item?.TransactionFor}
  </Text>
</View>

          </View>
          <View style={styles.hr}></View>

          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Customer Name</Text>
          {/* <Text style={styles.Left500TextMedum} >{item?.CustomerInfo}</Text> */}
          <View style={{ flex: 1 }}>
  <Text style={styles.Left500TextMedum} numberOfLines={2} ellipsizeMode="tail">
    {item?.CustomerInfo}
  </Text>
</View>

          </View>
          <View style={styles.hr}></View>

          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Payment Status</Text>
          <Text style={styles.Left500TextMedum} >{item?.PaymentStatus}</Text>
          </View>
          <View style={styles.hr}></View>

          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Status Detail</Text>

          <View style={{ flex: 1 }}>
  <Text style={styles.Left500TextMedum} numberOfLines={2} ellipsizeMode="tail">
    {item?.Message}
  </Text>
</View>
         
          </View>
          <View style={styles.hr}></View>

          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Payment Id</Text>
          <Text style={styles.Left500TextMedum} >{item?.PaymentId}</Text>
          </View>
          <View style={styles.hr}></View>

          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Payment Amount</Text>
          <Text style={styles.Left500TextMedum} >{item?.PaymentAmount}</Text>
          </View>
          <View style={styles.hr}></View>


          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Payment Mode</Text>
          <Text style={styles.Left500TextMedum} >{item?.payMode}</Text>
          </View>
          <View style={styles.hr}></View>


          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >From Account Amount</Text>
          <Text style={styles.Left500TextMedum} >{item?.FromAccountAmount}</Text>
          </View>
          <View style={styles.hr}></View>

          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Other Info / Parcels</Text>
          <Text style={styles.Left500TextMedum} >{item?.ParcelInfo}</Text>
          </View>
          <View style={styles.hr}></View>

          {/* <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Description</Text> */}
          <View style={{ flex: 1, paddingTop:10,paddingBottom:10,paddingHorizontal:10 }}>

<Text style={styles.Left500TextMedum2} 
 numberOfLines={100} ellipsizeMode="tail"
>{updatedReceiptNotes}</Text>
</View>
          {/* </View> */}
         

          
        {/* <View style={styles.rowAA}>
        < History_Icon3 />

    
     <Text style={styles.Left500TextMedum}
         >{item.customerName}
         
    </Text>
  
        </View>   */}
        {/* <View style={styles.rowAA}>
        < History_Icon4 />



    
            
    <Text style={styles.Left500TextMedum}>{}</Text>
  
        </View> */}

       

        {/* <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        < History_Icon5 />



     <Text style={styles.Left500TextMedum}>{item.transactionId}</Text>
  
        </View>  
        <View style={styles.rowAA}>
        < History_Icon6 />

    <Text style={styles.Left500TextMedum}>{item.totalAmount}</Text>
  
        </View>

        </View> */}



        {/* <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        < History_Icon7 />

    
     <Text style={styles.Left500TextMedum}>{item.CashierName}</Text>
  
        </View>  
        <View style={styles.rowAA}>
        < History_Icon8 />

    <Text style={styles.Left500TextMedum}>{item.ReceivedByName}</Text>
  
        </View>

        </View> */}
        {/* <Text style={[styles.Left500TextMedum,{paddingHorizontal:10,marginBottom:25}]}>{updatedReceiptNotes}</Text> */}

      </View>
      </View>
      {/* <View style={styles.hr2}></View> */}

      </View>
      
    );
  };
const styles = StyleSheet.create({
  containerSc: {
    flex: 1,
    width : wp('100'),
    alignContent:'center',
   // backgroundColor :COLORS.white,
    //margin:20,
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
    flex:1,
    minHeight: 'auto' ,
    //  flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    marginVertical:10,
    alignItems:'center',
    gap:20

  },
  rowList22: {
    flex:1,
    minHeight: 'auto' ,
    //  flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal:25,
    marginVertical:15,
    alignItems:'center',
    gap : 20

  },
  rowList3: {
    flexDirection: 'row',
    justifyContent:'flex-start',
    paddingHorizontal:10,
    alignItems:'center',
    marginBottom:20

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
   
    fontSize:rf(1.8),
    marginTop:20,
    textAlign: 'left',
    marginRight:30
  },
  Left500Text: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize:rf(1.8),
    textAlign: 'center',
  },
  Left500TextMd: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize:rf(1.8),
    textAlign: 'left',
    paddingHorizontal:10
  },
  Left500TextMedum: {
    fontFamily: FONTFAMILY.Medium,
    fontSize:rf(1.8),
    textAlign: 'right',
    
    
  },
  Left500TextMedum2: {
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
    backgroundColor: COLORS.cle,
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




