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
import CustomButtons from '../../components/CustomButtons';
import CustomButtonsBAndP from '../../components/CustomButtonsBAndP';
import { useSelector } from 'react-redux';
import utills from '../../utills';
import useRedux from '../../components/useRedux';
import { RegisterEZONESLICE, SaveEZCartPaymentSlice, saveEzoneInvoices } from '../../redux/slice/categories';

export default function EZonepayment({navigation}) {
  const [account, setaccount] = useState('');
  const [Passsword, setPasssword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const {dispatch} = useRedux();
  const [CartItems, setCartItems] = useState([]);
  const InvoicesList  = useSelector(state => state.category.EzoneInvoices);
console.log("InvoicesList",InvoicesList?.invoices)
const totalBalance = InvoicesList?.invoices?.reduce((total, invoice) => total + invoice.Balance, 0);
const exchangeRate = 2.6882;
const convertedAmountUsd = (totalBalance / exchangeRate).toFixed(2);


  useEffect(() => {

  return () => {
    dispatch(saveEzoneInvoices(null))

  };
}, []);

const handlePress = () => {
};

const handleBackPress = () => {
  // Add your logic for the "Back" button action here
  navigation.goBack()
};

const userData = useSelector(state => state.auth.userData);

const handleNextPress = () => {
  // Add your logic for the "Next" button action here

  if (utills.isEmptyOrSpaces(account)) {
    utills.errorAlert('', 'Please Enter Account Number');
     return;
   }
 
   if (utills.isEmptyOrSpaces(Passsword)) {
    utills.errorAlert('', 'Please Enter Passsword');
     return;
   }
  
   let data = {
    // ApplicantName: ApplicantName,
    // ApplicantSign: ApplicantSign,
    UserID :userData?.userID,
    UserName: account,
    Password :Passsword,
    
    
   
  };
 console.log('value==33', data);
 //navigation.navigate(SCREENS.CartValueScreen,{From :"PBDS",Service:'Private Bag Delivery Service'})

dispatch(RegisterEZONESLICE(data))
.unwrap()
.then(res => {
console.log('RegisterEZONESLICE res==', res);

let jsonObject;
try {
  jsonObject = JSON.parse(res);
} catch (e) {
  console.error("Parsing error:", e);
}
console.log('jsonObject res==', jsonObject);

// 
console.log('RegisterEZONESLICE res==', jsonObject?.invoices);
setCartItems[jsonObject?.invoices]
});
 

};


// const SubmitPOCDSpaymentdata = () => {
//   // console.log('FromID',FromID)

//    let data = {
//     ListTrans:InvoicesList?.invoices,

//    };
//    console.log('dataaaaaaar',data)
 
//    dispatch(SaveEZCartPaymentSlice(data))
//      .unwrap()
//      .then(res => {
//        console.log("res???",res?.Status)

//  if (res?.Status == true){
//   console.log("res???",res.Status)

// //   processResponse(res)  
// const redirectUrl = res.Data;
// console.log("redirectUrl",redirectUrl)

// navigation.navigate(SCREENS.LinkOpenScreenNEW,{item:redirectUrl})
// //utills.successAlert('', res.Message);

//  }else{
//   utills.errorAlert('', res.Message);
//   return;
// }

//      })
 
//      .catch(e => {
//        //  setLoading(false);
//      });
//  };

// const SubmitPOCDSpaymentdata = () => {
//   // Assuming userData and InvoicesList are defined and accessible in this context

//   // Ensure InvoicesList and userData are available
//   // Create the array of objects as required
//   const data = InvoicesList?.invoices?.map(invoice => ({
//     UserId: userData?.userID,
//     EzoneAccountNo: invoice.customer?.AccountNumber,
//     Amount: invoice.Balance,
//     EzoneInvoiceParcelNo: invoice.Number,
//     DescriptionOfContents: invoice.Contents,
//     SuppliersName: invoice.ShipperName,
//     RefCustomerName: invoice.Contact,
//     RenewalYear: invoice.InvoiceDate,
//     Notes: null,
//     PostOfficeInvoiceNo: null,
//     Freight: invoice.charges.find(charge => charge.Name === 'FREIGHT')?.Amount || 0,
//     Fuel: 0, // Assuming there is no Fuel charge as it is not provided
//     Insurance: 0, // Assuming there is no Insurance charge as it is not provided
//     InvoiceDate: invoice.InvoiceDate,
//     GetEndPointJsonData: invoice
//   }));

//   console.log('Formatted data:', data);

//   // Dispatch the action with the formatted data
//   dispatch(SaveEZCartPaymentSlice({ ListTrans: data }))
//     .unwrap()
//     .then(res => {
//       console.log("res???", res?.Status);
//       if (res?.Status === true) {
//         console.log("res???", res.Status);
//         const redirectUrl = res.Data;
//         console.log("redirectUrl", redirectUrl);
//         navigation.navigate(SCREENS.LinkOpenScreenNEW, { item: redirectUrl });
//       } else {
//         utills.errorAlert('', res.Message);
//       }
//     })
//     .catch(e => {
//       console.error("Error:", e);
//     });
// };



const SubmitPOCDSpaymentdata = () => {
  // Assuming userData and InvoicesList are defined and accessible in this context

  // Ensure InvoicesList and userData are available
  if (!InvoicesList || !InvoicesList.invoices || !userData) {
    console.error("Missing data: InvoicesList or userData is not available");
    return;
  }

  // Create the array of objects as required
  const data = InvoicesList.invoices.map(invoice => ({
    UserId: userData.userID,
    EzoneAccountNo: invoice.customer?.AccountNumber,
    Amount: invoice.Balance,
    EzoneInvoiceParcelNo: invoice.Number,
    DescriptionOfContents: invoice.Contents,
    SuppliersName: invoice.ShipperName,
    RefCustomerName: invoice.Contact,
    RenewalYear: invoice.InvoiceDate,
    Notes: null,
    PostOfficeInvoiceNo: null,
    Freight: invoice.charges.find(charge => charge.Name === 'FREIGHT')?.Amount || 0,
    Fuel: 0, // Assuming there is no Fuel charge as it is not provided
    Insurance: 0, // Assuming there is no Insurance charge as it is not provided
    InvoiceDate: invoice.InvoiceDate,
    GetEndPointJsonData: JSON.stringify(invoice)
  }));

  console.log('Formatted data:', data);
  const dat1a  = {
     ListTrans: data 
  }
  // Dispatch the action with the formatted data
  dispatch(SaveEZCartPaymentSlice(dat1a))
    .unwrap()
    .then(res => {
      console.log("res???", res?.Status);
      if (res?.Status === true) {
        console.log("res???", res.Status);
        const redirectUrl = res.Data;
        console.log("redirectUrl", redirectUrl);
        navigation.navigate(SCREENS.LinkOpenScreenNEW, { item: redirectUrl });
      } else {
        utills.errorAlert('', res.Message);
      }
    })
    .catch(e => {
      console.error("Error:", e);
    });
};



const GoToNext = () => {
  SubmitPOCDSpaymentdata()
}
  return (
     <GradientBackground>
    <CustomHeader onPress={handlePress} title = "EZone Payments" />
<ScrollView>
    <View>
    <View style={styles.container}>
    <View style={styles.containerTop}>
    <Text  style={styles.Left500Text}>EZone Payments
</Text>
    </View>
    {/* //Please enter your EZone Account # and EZone Password. */}

    <View style={{alignSelf:'flex-start',marginLeft:10}}>
            <Text style={styles.txt1}>
            Please enter your{' '}
              <Text style={styles.textDanger}>EZone</Text> Account # and 
              <Text style={styles.textDanger}> EZone</Text> Password.
            </Text>
          </View>
<View style={{alignSelf:'center'}}>
    <EditTextWithLable
        label="Account # *"
        placeholder="Enter Account No."
        value={account}
        onChangeText={setaccount}
        keyboardType="default"
      />
       <EditTextWithLable
        label="Password *"
        placeholder="Enter Password"
        value={Passsword}
        onChangeText={setPasssword}
        keyboardType="default"
      />

<CustomButtonsBAndP
        onBackPress={handleBackPress}
        onNextPress={handleNextPress}
        Buttontext={"Submit"}
      />
     </View>

  
    </View>

    {InvoicesList?.invoices?.length > 0 ? (

    <View style={styles.container}>
        <View  style={styles.containerTop2} >
    <View style={styles.row}>
            
            <Text  style={styles.Left500BOLDTextT}>Account No:
            </Text>
         
            <Text  style={styles.Left500Text}>{InvoicesList?.customer?.AccountNumber}
            </Text>
        
            </View>  

            <View style={styles.row}>
            
            <Text  style={styles.Left500BOLDTextT}>Contact:
            </Text>
         
            <Text  style={styles.Left500Text}>{InvoicesList?.customer?.Contact}
            </Text>
        
            </View> 
            <View style={styles.row}>
            
            <Text  style={styles.Left500BOLDTextT}>CompanyName:
            </Text>
         
            <Text  style={styles.Left500Text}>{InvoicesList?.customer?.CompanyName}
            </Text>
        
            </View> 
            </View> 
    <View style={styles.containerTop}>
    <Text  style={styles.Left500Text}>{"Cart Total " +"(EC$" + totalBalance + ")"}</Text>
    </View>
  


    <FlatList
      data={InvoicesList?.invoices}
      // renderItem={renderItem}
      renderItem={({ item }) =>  <View style={
        {padding:15,flexDirection:'row',gap:3,flexWrap:'wrap',borderRadius: 10,
       shadowColor: 'grey',
    shadowOffset: {
      width: 1,
      height: 0,
    }
    ,
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 1,
      marginHorizontal:5}}>
            <Text style={styles.Left500BOLDTextT}>Ezone Account No:</Text>
            <Text style={styles.value}>{InvoicesList?.customer?.AccountNumber}</Text>
            <Text style={styles.Left500BOLDTextT}>Customer Name:</Text>
            <Text style={styles.value}>{InvoicesList?.customer?.Contact}</Text>
            <Text style={styles.Left500BOLDTextT}>Reference No.: Invoice/Parcel #: </Text>
            <Text style={styles.value}>{item.Number}</Text>
            <Text style={styles.Left500BOLDTextT}>Description of Contents:</Text>
            <Text style={styles.value}>{item.Contents}</Text>
            <Text style={styles.Left500BOLDTextT}>Supplier's Name:</Text>
            <Text style={styles.value}>{item.ShipperName}</Text>
            <Text style={styles.Left500BOLDTextT}>Customer's Name:</Text>
            <Text style={styles.value}>{item.Contact}</Text>
          </View>} // Render the CustomServiceListItem for each item

      keyExtractor={(item, index) => index.toString()}
    />


    {/* <View style={styles.row}>
            
            <Text  style={styles.Left500Text}>Customs Charges
            </Text>
         
            <Text  style={styles.Left500BOLDText}>$0.00
            </Text>
        
            </View>   */}


   



          
        
             

             

             <View style={styles.row}>
            
            <Text  style={styles.Left500BOLDTextT}>Total Amount
            </Text>
         
            <Text  style={styles.Left500BOLDTextT}>{"EC$" + totalBalance }
            </Text>
        
            </View>   
            <View style={{alignSelf:'center'}}>
              <View style={{height:50}}></View>
        <CustomBlueButton
          title={"Proceed To Pay (US$" + convertedAmountUsd + ")"}
          onPress={GoToNext}
          IconName={"payment"}

          buttonStyle={styles.signUpButton} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(1.8)}} // Custom text style
        />       
                    </View>   
   
    </View>  
) : (
  <View style={styles.noDataContainer}>
    <Image source={IMAGES.NoRecord} style={styles.noDataImage} />
    {/* <Text style={styles.noDataText}>No records found</Text> */}
  </View>
)}
    </View>
    </ScrollView>
     </GradientBackground>

  );
}
const renderItem = ({ item }) => (
  // <View style={styles.item}>
        <View style={
  {paddingHorizontal:10,flexDirection:'row',gap:10,flexWrap:'wrap'}}>
      <Text style={styles.Left500BOLDTextT}>Ezone Account No:</Text>
      <Text style={styles.value}>{"accountNo"}</Text>
      <Text style={styles.Left500BOLDTextT}>Customer Name:</Text>
      <Text style={styles.value}>{"customerName"}</Text>
      <Text style={styles.Left500BOLDTextT}>Reference No.:</Text>
      <Text style={styles.value}>{"referenceNo"}</Text>
      <Text style={styles.Left500BOLDTextT}>Description of Contents:</Text>
      <Text style={styles.value}>{"descriptionOfContents"}</Text>
      <Text style={styles.Left500BOLDTextT}>Supplier's Name:</Text>
      <Text style={styles.value}>{"supplierName"}</Text>
      <Text style={styles.Left500BOLDTextT}>Customer's Name:</Text>
      <Text style={styles.value}>{"customerName"}</Text>
    </View>
  // </View>
);
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
  textDanger: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: rf(1.8),
    color: COLORS.CancelRED,
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
    containerTop2:
    {backgroundColor : COLORS.white,alignContent:'left',justifyContent:'space-evenly',padding:15,borderTopLeftRadius: 10, // Set the top left border radius
       borderRadius: 10,
       shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height: 0,
    }
    ,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
      margin:10
      },
   
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
      noDataContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
      },
      noDataImage: {
        width: 200,
        height: 150,
        resizeMode: 'contain',
      },
      noDataText: {
        fontFamily: FONTFAMILY.Bold,
        fontSize: rf(2),
        color: COLORS.gray,
        marginTop: 10,
      },
});




