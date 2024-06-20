import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, ScrollView, FlatList, Modal} from 'react-native';
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
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
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

export default function CreditCardOrdereningServiceList({navigation}) {
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
    <HeaderWithBackButton onPress={handlePress} title = "Credit Card Ordering Service" />
 <View style={{
           alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal:15,
      marginTop:25,

    }}>
  
    </View>
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

    const handleBackClosePress = () => {
        // Add your logic for the "Back" button action here
        setModalVisible2(false);
      };
      const closeModal = () => {
    
        setModalVisible2(false);
    
      };
      const [modalVisible2, setModalVisible2] = useState(false);

const receiptNotes =item?.Description;

const updatedReceiptNotes = receiptNotes.replace(/<br\s*[/]?>/gi, '\n');
const navigation = useNavigation()

    return (
    <View >
      <View style={{width:wp('90%'),alignSelf:'center'}}>

       
       <View style={styles.rowList2}>
        <Text style={styles.Left500TextMedum}>{}</Text>

        <TouchableNativeFeedback
       //
       onPress={() => {
        navigation.navigate(SCREENS.COSDetails);

      }}
        style={{backgroundColor:COLORS.primary,borderRadius:7,alignItems:'center',width:30,height:30,alignContent:'center',justifyContent:"center"}} >
{/* <Image source={IMAGES.PrintReport} style={{
    width: 18,
    height: 18,
  }} /> */}


<Icons
      name={"eye"}
      Type={Icon.AntDesign}
      size={rf(2.3)}
      color={COLORS.white}
    />


</TouchableNativeFeedback>      
     
        </View>



      <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Order Number</Text>
          <Text style={styles.Left500TextMedum} >{item?.CreatedOn}</Text>
          </View>
          <View style={styles.hr}></View>

      <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Name</Text>
          <Text style={styles.Left500TextMedum} >{item?.CreatedOn}</Text>
          </View>
          <View style={styles.hr}></View>

          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Address</Text>
          <View style={{ flex: 1 }}>
  <Text style={styles.Left500TextMedum} numberOfLines={2} ellipsizeMode="tail">
    {item?.TransactionTypeName + " - " + item?.TransactionFor}
  </Text>
</View>

          </View>
          <View style={styles.hr}></View>

          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >E-Mail</Text>
          {/* <Text style={styles.Left500TextMedum} >{item?.CustomerInfo}</Text> */}
          <View style={{ flex: 1 }}>
  <Text style={styles.Left500TextMedum} numberOfLines={2} ellipsizeMode="tail">
    {item?.CustomerInfo}
  </Text>
</View>

          </View>
          <View style={styles.hr}></View>

          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Phone Number</Text>
          <Text style={styles.Left500TextMedum} >{item?.PaymentStatus}</Text>
          </View>
          <View style={styles.hr}></View>

          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Customer Account No</Text>

          <View style={{ flex: 1 }}>
  <Text style={styles.Left500TextMedum} numberOfLines={2} ellipsizeMode="tail">
    {item?.Message}
  </Text>
</View>
         
          </View>
          <View style={styles.hr}></View>

          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Order Date</Text>
          <Text style={styles.Left500TextMedum} >{item?.PaymentId}</Text>
          </View>
          <View style={styles.hr}></View>

          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Order Status</Text>
          <Text style={styles.Left500TextMedum} >{item?.PaymentAmount}</Text>
          </View>
          <View style={styles.hr}></View>


          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Payment Mode</Text>
          <Text style={styles.Left500TextMedum} >{item?.payMode ?? "OnlinePay"}</Text>
          </View>
          <View style={styles.hr}></View>


          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Invoice</Text>
          <Text style={styles.Left500TextMedum} >{item?.FromAccountAmount}</Text>
          </View>
          <View style={styles.hr}></View>

          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Paid</Text>
          <TouchableNativeFeedback
          
          onPress={() => {
            setModalVisible2(true)
          }}
          
          >
          <Text style={[styles.Left500BOLDTextRight,{color:"green"}]} >View</Text>
          </TouchableNativeFeedback>
          </View>
          <View style={styles.hr}></View>

          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Balance</Text>
          <View style={{ flex: 1 }}>

<Text style={styles.Left500TextMedum} 
 numberOfLines={100} ellipsizeMode="tail"
>{updatedReceiptNotes}</Text>
</View>
          </View>
          <View style={styles.hr}></View>
          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Pay Amount</Text>
          <Text style={styles.Left500TextMedum} >{item?.FromAccountAmount}</Text>
          </View>
          <View style={styles.hr}></View>
          

          {/* <View style={styles.hr}></View>
          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Pay Amount</Text>
          <Text style={styles.Left500TextMedum} >{item?.FromAccountAmount}</Text>
          </View> */}
          <View style={styles.hr}></View>

          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Ordered</Text>
          <Text style={styles.Left500TextMedum} >{item?.FromAccountAmount}</Text>
          </View>
          <View style={styles.hr}></View>

          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >HAWBs</Text>
          <Text style={styles.Left500TextMedum} >{item?.FromAccountAmount}</Text>
          </View>
          <View style={styles.hr}></View>
          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Preffered Shipment</Text>
          <Text style={styles.Left500TextMedum} >{item?.FromAccountAmount}</Text>
          </View>
          <View style={styles.hr}></View>
          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Preffered Shipping Service</Text>
          <Text style={styles.Left500TextMedum} >{item?.FromAccountAmount}</Text>
          </View>
          <View style={styles.hr}></View>
          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Pay Method</Text>
          <Text style={styles.Left500TextMedum} >{item?.FromAccountAmount}</Text>
          </View>
          <View style={styles.hr}></View>

          <View style={styles.rowList2}>
          <Text style={styles.Left500BOLDText} >Validated</Text>
          <Text style={styles.Left500TextMedum} >{item?.FromAccountAmount}</Text>
          </View>
          <View style={styles.hr}></View>
        
      </View>
      <View style={styles.hr2}></View>
   <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <View style={[styles.row,{backgroundColor : COLORS.primary,paddingVertical:10,paddingHorizontal:20,alignContent:'left',width : wp('96'),borderTopLeftRadius: 10,borderTopRightRadius: 10}]}>
                <View style={styles.col8}>
                  <Text  style={[styles.Left500BOLDTextCenter,{color:COLORS.white}]}>Payment
</Text>

<TouchableOpacity onPress={handleBackClosePress} style={styles.addButton}>
  <Icons
      name={'closecircleo'}
      Type={Icon.AntDesign}
      size={rf(2.4)}
      color={COLORS.white}
    /></TouchableOpacity>


                </View>
              </View>

              {/* <Text  style={[styles.Left500BOLDTextCenter,{color:COLORS.white}]}>
              </Text> */}



<ScrollView>
              <View style={[styles.row,{backgroundColor : COLORS.primary,paddingVertical:10,paddingHorizontal:10,alignContent:'left',width : wp('90')}]}>
                <View style={styles.col8}>
                  <Text  style={[styles.Left500BOLDTextCenter,{color:COLORS.white}]}>Account No
</Text>


<Text  style={[styles.Left500BOLDTextCenter,{color:COLORS.white}]}>Contact
</Text>


                </View>
              </View>

              <View style={[styles.row,{backgroundColor : COLORS.white,paddingVertical:10,paddingHorizontal:10,alignContent:'left',width : wp('90')}]}>
                <View style={styles.col8}>
                  <Text  style={[styles.Left500BOLDTextCenter,{color:COLORS.black}]}>Account No
</Text>


<Text  style={[styles.Left500BOLDTextCenter,{color:COLORS.black}]}>Contact
</Text>


                </View>
              </View>




              <View style={[styles.row,{backgroundColor : COLORS.primary,paddingVertical:10,paddingHorizontal:10,alignContent:'left',width : wp('90')}]}>
                <View style={styles.col8}>
                <View style={{ flex: 1 }}>
                  <Text  style={[styles.Left500BOLDText,{color:COLORS.white}]}>Home Shopper Order No.
</Text>
</View>
<View style={{ flex: 1 }}>

<Text  style={[styles.Left500BOLDTextCenter,{color:COLORS.white}]}>Invoce Date
</Text>
</View>

<View style={{ flex: 1 }}>

<Text  style={[styles.Left500BOLDTextRight,{color:COLORS.white}]}>Invoce Amount
</Text>
</View>

                </View>
              </View>

              <View style={[styles.row,{backgroundColor : COLORS.white,paddingVertical:10,paddingHorizontal:10,alignContent:'left',width : wp('90')}]}>
                <View style={styles.col8}>
                <View style={{ flex: 1 }}>
                  <Text  style={[styles.Left500BOLDText,{color:COLORS.black}]}
                  numberOfLines={3} ellipsizeMode="tail"
                  >Home Shopper Order No.

</Text>

</View>
<View style={{ flex: 1 }}>
<Text  style={[styles.Left500BOLDTextCenter,{color:COLORS.black}]}
 numberOfLines={2} ellipsizeMode="tail"
>Invoce Date
</Text></View>
<View style={{ flex: 1 }}>

<Text  style={[styles.Left500BOLDTextRight,{color:COLORS.black}]}


numberOfLines={2} ellipsizeMode="tail"
>Invoce Amount
</Text>
</View>



                </View>
              </View>









              <View style={[styles.row,{backgroundColor : COLORS.primary,paddingVertical:10,paddingHorizontal:10,alignContent:'left',width : wp('90')}]}>
                <View style={styles.col8}>
                <View style={{ flex: 1 }}>
                  <Text  style={[styles.Left500BOLDText,{color:COLORS.white}]}>Total Due
</Text>
</View>
<View style={{ flex: 1 }}>

<Text  style={[styles.Left500BOLDTextCenter,{color:COLORS.white}]}>Total Paid
</Text>
</View>

<View style={{ flex: 1 }}>

<Text  style={[styles.Left500BOLDTextRight,{color:COLORS.white}]}>Total Remaining
</Text>
</View>

                </View>
              </View>

              <View style={[styles.row,{backgroundColor : COLORS.white,paddingVertical:10,paddingHorizontal:10,alignContent:'left',width : wp('90')}]}>
                <View style={styles.col8}>
                <View style={{ flex: 1 }}>
                  <Text  style={[styles.Left500BOLDText,{color:COLORS.black}]}
                  numberOfLines={3} ellipsizeMode="tail"
                  >Total Due

</Text>

</View>
<View style={{ flex: 1 }}>
<Text  style={[styles.Left500BOLDTextCenter,{color:COLORS.black}]}
 numberOfLines={2} ellipsizeMode="tail"
>Total Paid
</Text></View>
<View style={{ flex: 1 }}>

<Text  style={[styles.Left500BOLDTextRight,{color:COLORS.black}]}


numberOfLines={2} ellipsizeMode="tail"
>Total Remaining
</Text>
</View>



                </View>
              </View>

              <EditText_WithBackgroundColor
        label="Select Payment Type"
        placeholder="Select Payment Type"
        value="Select Payment Type"
        // onChangeText={setFirstName}
        keyboardType="default"
        disable={true}
      />

<EditText_WithBackgroundColor
        label="Select Payment Method"
        placeholder="Select Payment Method"
        value="Select Payment Method"
        // onChangeText={setFirstName}
        keyboardType="default"
        disable={true}
      />

<EditText_WithBackgroundColor
        label="Card Amount"
        placeholder="Card Amount"
        value="Card Amount"
        // onChangeText={setFirstName}
        keyboardType="default"
        disable={true}
      />



<EditText_WithBackgroundColor
        label="Card No."
        placeholder="Card No."
        value="Card No."
        // onChangeText={setFirstName}
        keyboardType="default"
        disable={true}
      />



<EditText_WithBackgroundColor
        label="Name"
        placeholder="Name"
        value="Name"
        // onChangeText={setFirstName}
        keyboardType="default"
        disable={true}
      />



<EditText_WithBackgroundColor
        label="Notes"
        placeholder="Notes"
        value="Notes"
        // onChangeText={setFirstName}
        keyboardType="default"
        disable={true}
      />



<EditText_WithBackgroundColor
        label="Select Payment Type"
        placeholder="Select Payment Type"
        value="Select Payment Type"
        // onChangeText={setFirstName}
        keyboardType="default"
        disable={true}
      />


              <Text  style={[styles.Left500BOLDTextCenter,{color:COLORS.white}]}>
              </Text>
              </ScrollView>
                   </View>

                   
        </View>
      </Modal>
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
    flexDirection:"row",
    justifyContent:'space-between',
    flexWrap:'wrap'
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
//    marginVertical:50
  },
  modalContent: {
    backgroundColor: 'white',
    // padding: 10,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    width:wp("96%"),
    gap : 10,
    height:hp("80%"),
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
  Left500BOLDTextCenter: {
    fontFamily: FONTFAMILY.Bold,
    fontSize:rf(1.8),
    textAlign: 'center',
  },
  Left500BOLDTextRight: {
    fontFamily: FONTFAMILY.Bold,
    fontSize:rf(1.8),
    textAlign: 'right',
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




