import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, FlatList, Alert} from 'react-native';
import React from 'react';
import {COLORS, CONSTANTS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES} from '../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';
import axios from 'axios';

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
  History_Icon2,
  
} from '../../components/Svg';
import SelectedServiceshorizontaly from '../../components/SelectedServiceshorizontaly';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DeleteMyInvoiceSlice, getAllDashboardDataSlice, getDashboardDataSlice, saveAllDashBordData, saveIsLoading } from '../../redux/slice/categories';
import useRedux from '../../components/useRedux';
import { useSelector } from 'react-redux';
import TouchableNativeFeedback from '../../components/TouchableNativeFeedback';
import utills from '../../utills';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import UploadInvoicePopup from '../../components/UploadInvoicePopup';


export default function DashBoard({navigation}) {
  const [SelectedService, setSelectedService] = useState('');
  const [pwd, setupwd] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [SelectedList, setSelectedList] = useState([]);
  const [Selectedtitle, setSelectedtitle] = useState("Pending Packages - Needs To Upload Invoices");

  const {dispatch} = useRedux();
  const AllDashBoardList  = useSelector(state => state.category.AllDashBoardList);
  const containermanifest = AllDashBoardList?.containermanifest;
  // console.log("containermanifest",containermanifest)
  const containerDetailData = AllDashBoardList?.containerDetailData; 
  // console.log("containerDetailData",containerDetailData)

useEffect(() => {

  {userData?.services?.hsUserId !== null && (

  
   getAllDashboarddata()
   )}
  return () => {

  };
}, []);
const getSavedvalue = async () => {
 // console.log('Selected Service:', SelectedService);
  const SelectedService = await AsyncStorage.getItem('SelectedService');
  setSelectedService(SelectedService)
}
const userData = useSelector(state => state.auth.userData);

const getAllDashboarddata = () => {

  let data = {
    id: userData?.userID,

  };
  console.log("data????",data)
  dispatch(getAllDashboardDataSlice(data))
    .unwrap()
    .then(res => {

// 
console.log("res????",res)
setSelectedList(res?.containerDetailData[1]?.containerDetailsListModel)

    })
    .catch(e => {

    });
};

useFocusEffect(
  React.useCallback(() => {
    
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      console.log("beforeRemove",e)
      const originalString = e.target;
      const arrayOfSubstrings = originalString.split('-');
      
      if (e.data.action.type === 'GO_BACK' && arrayOfSubstrings[0]=== 'DashBoard') {

        if (!handleBackGesture()) {
          e.preventDefault();
        }
    }
   
    });

    
    const handleBackGesture = () => {
     // console.log('ooooooo')
      return false;
    };
       
  }, [navigation])
);
const data = [

  { id: '1', text: 'Needs To Upload Invoices',Title: containermanifest?.missingInvoice,color:"#F07C8A",icon:IMAGES.Doc_icon5 },
  { id: '2', text: 'Intransit Packets',Title:containermanifest?.inTransit,color:"#8FC5EE",icon:IMAGES.profit_icon8 },
  { id: '3', text: 'Processing',Title: containermanifest?.processing,color:"#FEB08E",icon:IMAGES.Wallet_icon6 },
  { id: '4', text: 'Ready For Pickup' ,Title: containermanifest?.readyForPickup,color:"#FADA7A",icon:IMAGES.MiscServiceIcon},
  { id: '5', text: 'Delivered packet',Title: containermanifest?.delivered ,color:"#5AC573",icon:IMAGES.user_icon3},
  { id: '6', text: 'All Packages',Title: containermanifest?.total ,color:"#A7A9AB",icon:IMAGES.Parcel_icon4},

];
const handlePress = () => {
  
};
// const UpdateList = (item) => {
//   {
//     setSelectedList([])
//     if (item.id === '1') {
//       setSelectedtitle("Pending Packages - Needs To Upload Invoices");
//       setSelectedList(containerDetailData[1]?.containerDetailsListModel)
//     }
//    else if (item.id === '2') {
//       setSelectedtitle("Pending Packages - Needs To Upload Invoices");
//       setSelectedList(containerDetailData[1]?.containerDetailsListModel)
//     }
//     else if (item.id === '3') {
//       setSelectedtitle("Processing Packages");
//       setSelectedList(containerDetailData[2]?.containerDetailsListModel)
//     }
//     else if (item.id === '4') {
//       setSelectedtitle("Packages Status - Ready For Pickup");
//       setSelectedList(containerDetailData[0]?.containerDetailsListModel)
//     }
//     else if (item.id === '5'||item.id === '6') {
//       setSelectedtitle("Packages Status - History");
//       setSelectedList(containerDetailData[3]?.containerDetailsListModel)
//     }
//     console.log("containerDetailData", SelectedList);

//   }
// };
const UpdateList = (item) => {
  // Clear the list before updating
  console.log("Callllll")
  setSelectedList([]);
  if (item.id === '1') {
    setSelectedList([]);

    setSelectedtitle("Pending Packages - Needs To Upload Invoices");
    setSelectedList(containerDetailData[1]?.containerDetailsListModel || []);
  } else if (item.id === '2') {
    setSelectedList([]);

    setSelectedtitle("Pending Packages - Needs To Upload Invoices");
    setSelectedList(containerDetailData[0]?.containerDetailsListModel?.length > 0 ? containerDetailData[0]?.containerDetailsListModel : containerDetailData[1]?.containerDetailsListModel || []);
  } else if (item.id === '3') {
    setSelectedList([]);

    setSelectedtitle("Processing Packages");
    setSelectedList(containerDetailData[2]?.containerDetailsListModel || []);
  } else if (item.id === '4') {
    setSelectedList([]);

    setSelectedtitle("Packages Status - Ready For Pickup");
    setSelectedList(containerDetailData[0]?.containerDetailsListModel || []);
  } else if (item.id === '5' || item.id === '6') {
    setSelectedList([]);

    setSelectedtitle("Packages Status - History");
    setSelectedList(containerDetailData[3]?.containerDetailsListModel || []);
  }

  // console.log("SelectedList", SelectedList);
};




  return (
     <GradientBackground>
    <CustomHeader onPress={handlePress} title = "DashBoard" />
    <SelectedServiceshorizontaly
        selectedService={SelectedService}
        setSelectedService={setSelectedService}
      />
        {userData?.services?.hsUserId !== null && (

    <ScrollView>
    <View style={styles.container}>
<View>
    <FlatList
      data={data}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      // renderItem={renderItem}

      renderItem={({ item }) => ( // Define renderItem directly
      <TouchableNativeFeedback 
      onPress={() => UpdateList(item)}

      // onPress={() => }
  
  style={[styles.item,{    borderLeftColor: item.color,
}]}>
    <View style={{flexDirection:'row',gap:10,alignItems:'center'}} >
      <View style={{width: 30,
    height: 30,backgroundColor:item.color,alignItems:'center',justifyContent:'center',borderRadius:5}}>
      <Image source={item.icon} style={{
    width: 18,
    height: 18,
  }} />
      </View>
      <View style={[STYLES.row,{flex :1}]}>
      <Text style={styles.itemText}>{item.text}</Text>
      <Text style={styles.titleText}>{item.Title}</Text>

      </View>
      {/* <View style={{ marginLeft: 10, flex: 1 }}>
     
    </View> */}
    </View>
  </TouchableNativeFeedback>
    )}
      contentContainerStyle={styles.list}
    />
</View>

<View style={{marginTop:35}}>
<Text style={[styles.titleText,{paddingHorizontal:10,textAlign:'left'}]}>{Selectedtitle}</Text>
<FlatList
  data={SelectedList}
  showsVerticalScrollIndicator={false}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <RenderItem2 item={item} Selectedtitle={Selectedtitle} UpdateList={UpdateList} />}
  contentContainerStyle={styles.list}
/>

{/* <FlatList
  data={SelectedList}
  showsVerticalScrollIndicator={false}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <renderItem2 item={item} Selectedtitle={Selectedtitle} />}
  contentContainerStyle={styles.list}
/> */}


    </View>
    </View>
    </ScrollView>
     )}
     </GradientBackground>

  );
}


const renderItem = ({ item }) => (

  <TouchableNativeFeedback 
  // onPress={() =>
  //   console.log("Hii",item)
  //   //setSelectedtitle(item.text)
    
  //   }
  
  style={[styles.item,{    borderLeftColor: item.color,
}]}>
    <View style={{flexDirection:'row',gap:10,alignItems:'center'}} >
      <View style={{width: 30,
    height: 30,backgroundColor:item.color,alignItems:'center',justifyContent:'center',borderRadius:5}}>
      <Image source={item.icon} style={{
    width: 18,
    height: 18,
  }} />
      </View>
      <View style={[STYLES.row,{flex :1}]}>
      <Text style={styles.itemText}>{item.text}</Text>
      <Text style={styles.titleText}>{item.Title}</Text>

      </View>
      {/* <View style={{ marginLeft: 10, flex: 1 }}>
     
    </View> */}
    </View>
  </TouchableNativeFeedback>
);
const RenderItem2 = ({ item, Selectedtitle, UpdateList }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [invoiceAmount, setInvoiceAmount] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    // You can access invoiceAmount and isChecked states to process the data
    // Then close the modal
    setPopupVisible(false);
  };

  const handleOpenPopup = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };


  const [yesSelected, setYesSelected] = useState(false);
  const [noSelected, setNoSelected] = useState(false);

  const handleYesPress = () => {
    if (!yesSelected) {
      setYesSelected(true);
      setNoSelected(false);
    }
  };

  const handleNoPress = () => {
    if (!noSelected) {
      setYesSelected(false);
      setNoSelected(true);
    }
  };


  const {dispatch} = useRedux();
  const userData = useSelector(state => state.auth.userData);

  const handleUploadInvoice = (amount, file) => {
    // Handle the amount and file data here
    // console.log('Invoice Amount:', amount);
    // console.log('Selected File:', file);

    // console.log("WRNumber",item)
      dispatch(saveIsLoading(true))
    const formData = new FormData();
    formData.append("UserID",   userData?.userID);
        formData.append("WRNumber",  item?.wrNumber);
        formData.append("IsDutyFree","false");
        formData.append("InvoiceAmount",amount  );
        formData.append("ContainerDetailID",item?.containerId);
        // console.log("file",file)

        if (file) {
        formData.append("SupportDoc", {
          name: file[0]?.name,
          type: file[0]?.type,
          uri: file[0]?.uri,
        });
      }
        let config = {
          headers: {
            // Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/form-data;",
          },
        };
        console.log(JSON.stringify(formData));
        const onSuccess = ({ data }) => {
          console.log('onSuccess============');
          console.log(data);
          dispatch(saveAllDashBordData(null))
          
          dispatch(saveIsLoading(false))

          let data1 = {
            id: userData?.userID,
        
          };
        
          dispatch(getAllDashboardDataSlice(data1))
            .unwrap()
            .then(res => {
              UpdateList(item);

        // console.log("res????",res)
        
            })
            .catch(e => {
            });
          utills.successAlert('', "Invoice Uploaded Successfully");
        
        };
      
        const onFailure = (error) => {
          dispatch(saveIsLoading(false))
    
          console.log('=================e===================');
          console.log(error);
          console.log('====================================');
          throw error;
        };
       axios        
       //.post('https://api.caribbargains.com/user/uploadimage', formData, config)
    //post
    
          .post('http://hsstrain.apis.gov.ai/api/DashboardApi/UploadSupportDocApiAsync7', formData, config)
          .then(onSuccess)
          .catch(onFailure);



  };

  const DeleteInvoice = () => {
    let data = {
      WrNumber: item?.wrNumber,
      UserId: userData?.userID,  // Assuming 2 records per page, adjust as needed
      delReason: ""
    };
  
  
    dispatch(DeleteMyInvoiceSlice(data))
      .unwrap()
      .then(res => {
        console.log("res", res);
        dispatch(saveAllDashBordData(null))
          
        dispatch(saveIsLoading(false))

        let data1 = {
          id: userData?.userID,
      
        };
      
        dispatch(getAllDashboardDataSlice(data1))
          .unwrap()
          .then(res => {
            UpdateList(item);
      // console.log("res????",res)
      
          })
          .catch(e => {
          });
       utills.successAlert("Succes",res?.message)
      })
      .catch(e => {
        // Handle errors
      })
      .finally(() => {
      });
  };



  
return(
    <View 
    >
      <View style={styles.item1}>
    
{/* {console.log("Selectedtitle",Selectedtitle)} */}
      {Selectedtitle === "Pending Packages - Needs To Upload Invoices" ? (


        <View style={styles.rowList4}>

<Text style={styles.Left500BOLDText}>{item.nameOfAddressee}</Text>


          {item.gpoInvoicePath === "" ? (

          <TouchableNativeFeedback
                            onPress={handleOpenPopup}


            style={{backgroundColor: COLORS.primary, borderRadius: 7, alignItems: 'center', height: 40, alignContent: 'center', flexDirection:"row",padding:10 ,gap:10}}>
                   <Text style={[styles.Left500TextMedum,{color:Colors.white}]}>Upload</Text>

            <Image source={IMAGES.PrintReport} style={{width: 18, height: 18}} />
          </TouchableNativeFeedback>    
           ):(
           <View
           style={{borderRadius: 7, alignItems: 'center', alignContent: 'center', flexDirection:"row" ,gap:10}}>

            <TouchableNativeFeedback
            onPress={() =>
              Linking.openURL(item?.gpoInvoicePath)

              
              }

style={{backgroundColor: COLORS.primary, borderRadius: 7, alignItems: 'center', height: 40, alignContent: 'center', flexDirection:"row",padding:10 ,gap:10}}>
   <Text style={[styles.Left500TextMedum,{color:Colors.white}]}>View</Text>

<Image source={IMAGES.PrintReport} style={{width: 18, height: 18}} />
</TouchableNativeFeedback>  
 <TouchableOpacity

 onPress={() => {
  Alert.alert(
    'Warning',
    'Do You want to delete Invoice?',
    [
      {
        text: 'Yes',
        onPress: () =>{ DeleteInvoice()
      
       
     
       }, style: 'default',
      },
      {
        text: 'No',
        onPress: () => console.log('Cancel pressed'),
        style: 'cancel',
      },
    ],
    { cancelable: false }
  );
 }}>
 <Icons
   name={'delete'}
   Type={Icon.AntDesign}
   size={rf(2.7)}
   color={COLORS.red}
   style={{}}
 />
</TouchableOpacity>
</View>


           )}  
          
        </View>
       
      )
    
    :(
      <Text style={styles.Left500BOLDText}>{item.nameOfAddressee}</Text>

    )}


        <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        <Ship_Icon1Svg style={{width:30,height:30}}/>
     <Text style={styles.Left500TextMedum}>{item.shipper}</Text>
  
        </View>  
        <View style={styles.rowAA}>
        <Dimensio_Icon2Svg style={{width:30,height:30}}/>
 
    <Text style={styles.Left500TextMedum}>{item.length + " * "+item.width + " * "+item.height + " MM" }</Text>
  
        </View>

        </View>

 <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        <Weight_Icon3Svg style={{width:30,height:30}}/>
     <Text style={styles.Left500TextMedum}>{item.wt + ' KG'}</Text>
  
        </View>  
        <View style={styles.rowAA}>
        <Processing_Icon5Svg style={{width:30,height:30}}/>



    <View>
            
    <Text style={styles.Left500TextMedum}>{item.trackingNo}</Text>
    </View>
        </View>

        </View>

        <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        <Location_Icon4Svg style={{width:30,height:30}}/>

        <Text style={styles.Left500TextMedum}>
  {item.deliveredStatus ? 'Delivered' : "Shipped"}
</Text>  
        </View>  
        <View style={styles.rowAA}>
        <Calender_Icon6Svg style={{width:30,height:30}}/>
       
    <Text style={styles.Left500TextMedum}>  {item.deliveredStatus ? utills.getDateBeforeT(item.deliveredDate) : utills.getDateBeforeT(item.shippedDate)}
</Text>
  
        </View>

        </View>



        <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        <Wallet_Icon7Svg style={{width:30,height:30}}/>
     <Text style={styles.Left500TextMedum}>{item.value}</Text>
  
        </View>  
        <View style={styles.rowAA}>
        <History_Icon2 style={{width:30,height:30}}/>

    <Text style={styles.Left500TextMedum}>{item.packageStatus}</Text>
  
        </View>

        </View>
        <Text style={[styles.Left500BOLDText,{paddingHorizontal:10,marginBottom:10}]}>{item?.contents}</Text>
        {/* <UploadInvoicePopup isVisible={isPopupVisible} onClose={handleClosePopup} /> */}
        <UploadInvoicePopup isVisible={isPopupVisible} onClose={handleClosePopup} onSubmit={handleUploadInvoice} />

       
      </View>
     
      <View style={styles.hr2}></View>
      </View>   
);
              }
// const renderItem2 = ({ item, Selectedtitle }) => {
//   const [isPopupVisible, setPopupVisible] = useState(false);
//   const [invoiceAmount, setInvoiceAmount] = useState('');
//   const [isChecked, setIsChecked] = useState(false);

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };

//   const handleSubmit = () => {
//     // Handle submission logic here
//     // You can access invoiceAmount and isChecked states to process the data
//     // Then close the modal
//     setPopupVisible(false);
//   };

//   const handleOpenPopup = () => {
//     setPopupVisible(true);
//   };

//   const handleClosePopup = () => {
//     setPopupVisible(false);
//   };

//   return (
//     <View >
//       <View style={styles.item1}>
    
// {console.log("Selectedtitle",Selectedtitle)}
//       {Selectedtitle === "Pending Packages - Needs To Upload Invoices" && (
//         <View style={styles.rowList4}>
//           <TouchableNativeFeedback
//               onPress={handleOpenPopup}
//               style={{backgroundColor: COLORS.primary, borderRadius: 7, alignItems: 'center', height: 40, alignContent: 'center', flexDirection:"row",padding:10 ,gap:10}}>
//                    <Text style={[styles.Left500TextMedum,{color:Colors.white}]}>Upload</Text>

//             <Image source={IMAGES.PrintReport} style={{width: 18, height: 18}} />
//           </TouchableNativeFeedback>      
//         </View>
//       )}


//         <View style={styles.rowList2}>
//         <View style={styles.rowAA}>
//         <Ship_Icon1Svg style={{width:30,height:30}}/>
//      <Text style={styles.Left500TextMedum}>{item.shipper}</Text>
  
//         </View>  
//         <View style={styles.rowAA}>
//         <Dimensio_Icon2Svg style={{width:30,height:30}}/>
 
//     <Text style={styles.Left500TextMedum}>{item.length + " * "+item.width + " * "+item.height + " MM" }</Text>
  
//         </View>

//         </View>

//  <View style={styles.rowList2}>
//         <View style={styles.rowAA}>
//         <Weight_Icon3Svg style={{width:30,height:30}}/>
//      <Text style={styles.Left500TextMedum}>{item.wt + ' KG'}</Text>
  
//         </View>  
//         <View style={styles.rowAA}>
//         <Processing_Icon5Svg style={{width:30,height:30}}/>



//     <View>
            
//     <Text style={styles.Left500TextMedum}>{item.trackingNo}</Text>
//     </View>
//         </View>

//         </View>

//         <View style={styles.rowList2}>
//         <View style={styles.rowAA}>
//         <Location_Icon4Svg style={{width:30,height:30}}/>

//         <Text style={styles.Left500TextMedum}>
//   {item.deliveredStatus ? 'Delivered' : "Shipped"}
// </Text>  
//         </View>  
//         <View style={styles.rowAA}>
//         <Calender_Icon6Svg style={{width:30,height:30}}/>
       
//     <Text style={styles.Left500TextMedum}>  {item.deliveredStatus ? utills.getDateBeforeT(item.deliveredDate) : utills.getDateBeforeT(item.shippedDate)}
// </Text>
  
//         </View>

//         </View>



//         <View style={styles.rowList2}>
//         <View style={styles.rowAA}>
//         <Wallet_Icon7Svg style={{width:30,height:30}}/>
//      <Text style={styles.Left500TextMedum}>{item.value}</Text>
  
//         </View>  
//         <View style={styles.rowAA}>
//         <History_Icon2 style={{width:30,height:30}}/>

//     <Text style={styles.Left500TextMedum}>{item.via}</Text>
  
//         </View>

//         </View>
//         <Text style={[styles.Left500BOLDText,{paddingHorizontal:10,marginBottom:10}]}>{item?.contents}</Text>
   
       
//       </View>
     
//       <View style={styles.hr2}></View>
//       </View>   
//   );
// };





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
    width: wp('90%'), // Adjust as needed
    height: 50, // Adjust as needed
    backgroundColor: '#ffffff',
    marginRight: 8, // Adjust as needed
   
    justifyContent: 'flex-start',
    borderRadius : 15,
   paddingVertical:10,
paddingHorizontal:10,
borderLeftWidth: 7, // Width of the left border
marginBottom:10
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
Left500Text2: {
  fontFamily: FONTFAMILY.SemiBold,
  fontSize:rf(1.8),
  textAlign: 'center',
  color : COLORS.white
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
Left500TextMedumR: {
  fontFamily: FONTFAMILY.Medium,
  fontSize:rf(1.6),
  textAlign: 'right',
},
rowList: {
  flex:1,
  flexDirection: 'row',
  justifyContent:'space-between',
  paddingHorizontal:10,
  marginVertical:15,
  gap:10

},
rowList2: {
  flex:1,
  
  flexDirection: 'row',
  justifyContent:'space-between',
  paddingHorizontal:10,
  marginVertical:10,
  alignContent:'center'

},
rowList3: {
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
rowList4: {
  flex:1,
  width:wp("88%"),
  flexDirection: 'row',
  justifyContent:'space-between',
  paddingHorizontal:10,
  marginVertical:10,
  alignContent:'center',
  alignItems:'center'

},

rowAc: {
  flexDirection: 'row',
justifyContent:'space-around',
marginVertical:30,
paddingHorizontal:20,
width:wp('90%')
},
});




