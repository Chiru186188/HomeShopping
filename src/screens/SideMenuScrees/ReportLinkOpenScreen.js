import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Modal, Text, Button, TouchableOpacity, Share, ActivityIndicator, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import { LogedInUserSlice, PymentResponseSlice, saveUserData } from '../../redux/slice/auth';
import useRedux from '../../components/useRedux';
import utills from '../../utills';
import GradientBackground from '../../components/GradientBackground';
import HeaderWithBackButtonAndShareButton from '../../components/HeaderWithBackButtonAndShareButton';
import Pdf from 'react-native-pdf';
import {COLORS, CONSTANTS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES} from '../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';
import CustomBlueButton from '../../components/CustomBlueButton';
import Icons, { Icon } from '../../components/Icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveIsLoading } from '../../redux/slice/categories';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import ReactNativeBlobUtil from 'react-native-blob-util';

//http://122.176.104.29:7648//Content/Pdf/OnlinePayReceipt_6044_202401111341299811.pdf
  
const ReportLinkOpenScreen = ({ route }) => {
const navigation = useNavigation()
// const extractQueryParams = (url) => {
//   const queryIndex = url.indexOf('?');
//   if (queryIndex !== -1) {
//     const queryParams = url.substr(queryIndex + 1).split('&');
//     const params = {};
//     queryParams.forEach((param) => {
//       const [key, value] = param.split('=');
//       params[decodeURIComponent(key)] = decodeURIComponent(value || '');
//     });
//     return params;
//   }
//   return {};
// };

// const handleRedirect = (navState) => {
//   const redirectedUrl = navState.url;
//   const urlParams = extractQueryParams(redirectedUrl);
//   console.log('PaymentURL!',urlParams);

//   // Check for success or failure parameters in the extracted params

//   if (urlParams.payload && urlParams.paymentId) {
//     // Both payload and paymentId parameters exist in the URL
//     console.log('Received payload and paymentId:', urlParams.payload, urlParams.paymentId);
//     CallApiForPayment(urlParams)
//     // Perform an API call here using the extracted parameters
//     // Replace the placeholder API call with your actual API call
//     // yourAPICallFunction(urlParams.payload, urlParams.paymentId)
//     //   .then((response) => {
//     //     // Handle the API call response here
//     //     console.log('API Call Response:', response);
//     //     // Perform actions based on the API call response
//     //   })
//     //   .catch((error) => {
//     //     // Handle any API call errors here
//     //     console.error('API Call Error:', error);
//     //     // Perform actions for error handling
//     //   });

  


//   }


//   // if (urlParams.success) {
//   //   // Payment was successful
//   //   console.log('Payment was successful!');
//   //   // Perform actions for a successful payment
//   // } else if (urlParams.failure) {
//   //   // Payment failed
//   //   console.log('Payment failed.');
//   //   // Perform actions for a failed payment
//   // } else {
//   //   // Unable to determine the result
//   //   console.log('Unable to determine payment result.');
//   //   // Handle this scenario accordingly
//   // }
// };

const {dispatch} = useRedux();
const [loading, setLoading] = useState(false); // State to manage loading status

// const CallApiForPayment = (resp) => {
//   let data = {
//     paymentID: resp.paymentId,
//     payload: resp.payload,
   
//   };
  
//   dispatch(PymentResponseSlice(data))
//   .unwrap()
//   .then(res => {
//     console.log('PymentResponseSlice res==', res);
//     if (res.data?.success == true){
//       utills.successAlert('', res.data?.data?.message);
      
//         navigation.navigate(SCREENS.LoginScreen);
//     }else{  
//       utills.errorAlert('', res.message);
//       return;
//     }
//   });
// };
const [modalVisible, setModalVisible] = useState(false);
const [modalVisible2, setModalVisible2] = useState(false);



const GoToNext = () => {

  setModalVisible2(true);
 // sharePDFLink()
}  

const downloadFile = () => {
  closeModal();

  setLoading(true)
  // const source = "http://hsstrain.apis.gov.ai//Content/Pdf/OnlinePayReceipt_3431_202405310255198885.pdf";
  const currentDateTime = new Date();
  const fileName = `report_${currentDateTime.getTime()}.pdf`;
  let dirs = ReactNativeBlobUtil.fs.dirs;
  ReactNativeBlobUtil.config({
    fileCache: true,
    appendExt: 'pdf',
    path: `${dirs.DocumentDir}/${fileName}`,
    addAndroidDownloads: {
      useDownloadManager: true,
      notification: true,
      title: fileName,
      description: 'File downloaded by download manager.',
      mime: 'application/pdf',
    },
  })
    .fetch('GET', item)
    .then((res) => {
      setLoading(false)

      console.log(res)
      utills.confirmMessageAlert("Message","Report Download Successfully!")
      if (Platform.OS === 'ios') {
        const filePath = res.path();
        let options = {
          type: 'application/pdf',
          url: filePath,
          saveToFiles: true,
        };
        Share.open(options)
          .then((resp) => console.log(resp))
          .catch((err) => console.log('Share error:', err));
      }
    })
    .catch((err) =>
      
      setLoading(false)
      // utills.confirmMessageAlert("Report Download Successfully")
     // console.log('Download error:', err)
    
    );
};
// const downloadFile = async () => {
//   // Request permission to save files to the device
//   const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY_WRITE_ONLY);

//   if (status !== 'granted') {
//     console.log('Permission denied to access media library');
//     return;
//   }

//   // Define the download destination
//   const fileUri = FileSystem.documentDirectory + filename;

//   try {
//     // Download the file
//     const { uri } = await FileSystem.downloadAsync(item, fileUri);

//     console.log('File downloaded to:', uri);
//     alert('File Downloaded Successfully');
//   } catch (error) {
//     console.error('Error downloading file:', error);
//     alert('File Download Failed');
//   }
// };
const currentDateTime = new Date();
   const filename = `report_${currentDateTime.getTime()}.pdf`; // Example: report_1623117351368.pdf

// const downloadFile = async () => {
 
//   setLoading(true)
//   
//   const fileUri = FileSystem.documentDirectory + filename;

//   try {
//     // Download the file
//     const { uri } = await FileSystem.downloadAsync(item, fileUri);
//     setLoading(false)

//     console.log('File downloaded to:', uri);
//     alert('Report Downloaded Successfully');
//   } catch (error) {
//     console.error('Error downloading file:', error);
//     alert('File Download Failed');
//   }
// };
const sharePDFLink = async () => {
  try {
    const pdfLink = item
    const result = await Share.share({
      title: 'Share Report',
      message: 'Check out this Report: ' + pdfLink,
      url: pdfLink,
    });

    if (result.action === Share.sharedAction) {
      console.log('PDF link shared successfully');
    } else if (result.action === Share.dismissedAction) {
      console.log('Sharing PDF link dismissed');
    }
  } catch (error) {
    console.error('Error sharing PDF link:', error.message);
  }
};
  const handlePress = () => {
    setModalVisible(true);

  };



  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalVisible2(false);

  };

  const handleGoToLogin = () => {
    // Implement logic for "Go to Login"
    // For example, navigate to the login screen
    console.log('Go to Login');
    closeModal();
    navigation.navigate(SCREENS.LoginScreen)
  };
  // const handleGoToHome = () => {
  //   // Implement logic for "Go to Login"
  //   // For example, navigate to the login screen
   
  //   navigation.navigate(SCREENS.LoginScreen)
  // };
  const saveAccessToken =  async (token) => {
    await AsyncStorage.setItem(CONSTANTS.AccessToken,token ?? "");
  
  };
  const handleGoToHome = async () => {
    closeModal();
    // dispatch(saveIsLoading(true))
    console.log('LoginParams',LoginParams);
    setLoading(true); // Set loading to true 


    const userIdKeys = ['UserId', 'userID', 'UserID']; // Define possible keys for userId

    let userId = null;
    for (const key of userIdKeys) {
        if (LoginParams && LoginParams.hasOwnProperty(key)) {
            userId = LoginParams[key];
            break; // Exit the loop if a valid key is found
        }
    }

   // const userId = LoginParams?.UserId ?? LoginParams?.UserID;

    let data = {
    id: userId,

  };
  console.log('Go to Login');
  console.log('data',data);

  
  // navigation.navigate(SCREENS.DashBoard);
  // await utills.saveStringToAsyncStorage('LoginbyID', "yes")
  // await utills.saveStringToAsyncStorage('FromLogin', "Yes")

  dispatch(LogedInUserSlice(data))
    .unwrap()
    .then(res => {
      console.log('Login ressss==', res);
      // dispatch(saveIsLoading(false))

      saveAccessToken(res?.token)
      setLoading(false); // Set loading to fals
      if (res?.success == true){
        console.log('Login res==', res.data);

        dispatch(saveUserData(res.data))

         const services = res?.data?.services
        if(res?.data?.ispayment === true){
          console.log('1');

        
        
        
          const countNonNullOrTrueValues = Object.values(services).filter(value => value !== null && value !== false).length;
        
          if (countNonNullOrTrueValues === 1) {
            console.log('2');

            console.log('Exactly one value is not null or true.');
        
            if  (services?.hsUserId !== null){

              navigation.reset({
                index: 0,
                routes: [{ name: SCREENS.HSAccountDetail }], // Replace 'InitialScreen' with the name of your initial screen
              });   
              
              //navigation.replace(SCREENS.HSAccountDetail);
            } else if  (services?.ezUserId !== null){
              navigation.reset({
                index: 0,
                routes: [{ name: SCREENS.EZAccountDetail }], // Replace 'InitialScreen' with the name of your initial screen
              });  
             } else if  (services?.ltbUserId !== null){
              navigation.reset({
                index: 0,
                routes: [{ name: SCREENS.RentalBoxAccountDetail }], // Replace 'InitialScreen' with the name of your initial screen
              });  
            }else if  (services?.pbdsUserId !== null){
              navigation.reset({
                index: 0,
                routes: [{ name: SCREENS.PBDSAccountDetail }], // Replace 'InitialScreen' with the name of your initial screen
              });  
            }else if  (services?.pocdsUserId == true){
              navigation.reset({
                index: 0,
                routes: [{ name: SCREENS.POCDSAccountDetail }], // Replace 'InitialScreen' with the name of your initial screen
              });  
            }
          } else {
            console.log('3');

        navigation.reset({
          index: 0,
          routes: [{ name: SCREENS.DashBoard }], // Replace 'InitialScreen' with the name of your initial screen
        });    
          
          }

      }else{
        navigation.navigate(SCREENS.CartValueScreen,{From :"Login",Service:'',userID:res?.data?.userID,LoginParams:res?.data})


      }








// if (res.data.services == null){


//   Alert.alert(
//     'No Active Plan',
//     `Please Buy Service Plan First`,
//     [
//       {
//         text: 'OK',
//         onPress: () => {
//           gotoSubscription(res.data)
//         },

//         // onPress: (gotoSubscription(res.data)),
//       },
//     ],
//     { cancelable: false }
//   );

// return


// }

// if(res.data.ispayment === true){
//   navigation.navigate(SCREENS.DashBoard);

// }else{
//   navigation.navigate(SCREENS.CartValueScreen,{From :"Login",Service:'',userID:res?.data?.userID,LoginParams:res?.data})
// }

//         }else{
//           utills.errorAlert('', res.message);

//           return;
//         }
    }
  })
  
  .catch(e => {

    // console.log("",e)

    setLoading(false); 
      // setcount(count+1)
  });
  ;
};




  const handleAddNewService = () => {
    // Implement logic for "Add New Service"
    // For example, navigate to the add new service screen
    console.log('Add New Service');
    console.log('LoginParams',LoginParams);

    closeModal();
    //navigation.replace(SCREENS.SelectServicesSubscription,{Params1 : LoginParams,from:"AddMore"})
    // dispatcher(removeUserData(userData));
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: (SCREENS.SelectServicesSubscription,{Params1 : LoginParams,from:"AddMore"}) }], // Replace 'InitialScreen' with the name of your initial screen
    // });  
    
    
    navigation.reset({
      index: 0,
      routes: [
        { 
          name: SCREENS.SelectServicesSubscription, // Ensure this is a string
          params: {
            Params1: LoginParams,
            from: "AddMore"
          }
        }
      ]
    });


  };

  //
  const { item,From ,LoginParams} = route.params;

    // return (
    //   <View style={styles.container}>
    //     <HeaderWithBackButton onPress={handlePress} title={'Report'} />

    //     <WebView
    //       source={{ uri: item }} // Replace with your desired URL
    //       style={styles.webview}
    //      // onNavigationStateChange={handleRedirect}
    //     />
    //   </View>
    // );

  return (
    <GradientBackground>
    {/* <View style={styles.container}> */}
{/* <HeaderWithBackButtonAndShareButton onPress={handlePress} title = "Report" onNextPress={GoToNext} /> */}

<View style={styles.containerWithBorder}>

<View style={styles.subContainer1}>
  <TouchableOpacity
    style={styles.container}
    onPress={handlePress
     } >
    {/* <Svg /> */}

    <Icons
  name={'keyboard-backspace'}
  Type={Icon.MaterialCommunityIcons}
  size={rf(2.4)}
  color={COLORS.white}
/>
  </TouchableOpacity>
  <View style = {{flexDirection:'row',alignItems:'center',gap:10,flexShrink:1}}>
      <Image
            source={IMAGES.logoHS}
            style={{width: 70, height: 70}}
            resizeMode='contain'
          />
  <Text style={styles.text1}>{"Report"}</Text>
      </View>
  <TouchableOpacity
    style={styles.button}
    onPress={GoToNext}
    >
    {/* <Svg /> */}

    <Text style={[styles.buttonText]}>Next</Text>

  </TouchableOpacity>
</View>
</View>
     <Pdf 
   trustAllCerts={false}
   source={{uri:item, cache: true }}
   style={styles.pdf}
   onLoadComplete={(numberOfPages, filePath) => {
      console.log(`number of pages: ${numberOfPages}`);
   }}
/>
    {/* </View> */}
    {loading && (
                    <View style={styles.loaderContainer}>
                        {/* Your loader component */}
                        <ActivityIndicator size="large" color={COLORS.primary} />
                    </View>
                )}

    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >



        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text
            style={{
              fontFamily :FONTFAMILY.Bold,
                fontSize: rf(2.3)
            }}
            >Choose an Action</Text>
              <CustomBlueButton
          title="Go To Home"
          IconName={"home"}

          onPress={() => {
               //navigation.navigate(SCREENS.DashBoard);
               handleGoToHome()
          }}          buttonStyle={{width:wp('80%')}} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(2.0)}}         />
            {/* <CustomBlueButton
          title="Go To Login"
          IconName={"login"}

          onPress={() => {
               //navigation.navigate(SCREENS.DashBoard);
           handleGoToLogin()
          }}          buttonStyle={{width:wp('80%')}} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(2.0)}}         /> */}
             <CustomBlueButton
          title="Add More Services"
          IconName={"miscellaneous-services"}

          onPress={() => {
               //navigation.navigate(SCREENS.DashBoard);
            handleAddNewService()
          }}          buttonStyle={{width:wp('80%')}} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(2.0)}}         />


     <CustomBlueButton
          title="Cancel"
          IconName={"close"}

          onPress={() => {
               //navigation.navigate(SCREENS.DashBoard);
            closeModal()
          }}          buttonStyle={{width:wp('80%'),backgroundColor:'red'}} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(2.0)}}   
            
            />   
            
                   </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text
            style={{
              fontFamily :FONTFAMILY.Bold,
                fontSize: rf(2.3)
            }}
            >Choose an Action</Text>
             <CustomBlueButton
          title="Go To Home"
          IconName={"home"}

          onPress={() => {
               //navigation.navigate(SCREENS.DashBoard);
               handleGoToHome()
          }}          buttonStyle={{width:wp('80%')}} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(2.0)}}         />
            {/* <CustomBlueButton
          title="Go To Login"
          IconName={"login"}

          onPress={() => {
               //navigation.navigate(SCREENS.DashBoard);
           handleGoToLogin()
          }}          buttonStyle={{width:wp('80%')}} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(2.0)}}         /> */}

<CustomBlueButton
          title="Share Report"
          IconName={"share"}

          onPress={() => {
               //navigation.navigate(SCREENS.DashBoard);
               sharePDFLink()
          }}          buttonStyle={{width:wp('80%')}} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(2.0)}}         />




<CustomBlueButton
          title="Download Report"
          IconName={"cloud-download"}

          // onPress={() => {
          //      //navigation.navigate(SCREENS.DashBoard);
          //      sharePDFLink()
          // }}       
          onPress={() => downloadFile()}
          
          buttonStyle={{width:wp('80%')}} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(2.0)}}         />



             <CustomBlueButton
          title="Add More Services"
          IconName={"miscellaneous-services"}

          onPress={() => {
               //navigation.navigate(SCREENS.DashBoard);
            handleAddNewService()
          }}          buttonStyle={{width:wp('80%')}} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(2.0)}}         />


     <CustomBlueButton
          title="Cancel"
          onPress={() => {
               //navigation.navigate(SCREENS.DashBoard);
            closeModal()
          }}          buttonStyle={{width:wp('80%'),backgroundColor:'red'}} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(2.0)}}   
            
            />   
            
                   </View>
        </View>
      </Modal>
    </GradientBackground>
  );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    loaderContainer: {
      ...StyleSheet.absoluteFillObject, // Position the loader absolute to cover the entire screen
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background to dim the screen
      justifyContent: 'center',
      alignItems: 'center',
    },
    pdf: {
      flex: 1,
      width: '100%',
      backgroundColor:COLORS.white
  
  
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
     
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      elevation: 5,
      alignItems: 'center',
      gap:20,
      width:wp("90%")
    },
    button: {
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.blueButton, 
      paddingVertical:7,
      paddingHorizontal:20,
      width:wp("80%")
    },

    container: {
      backgroundColor: COLORS.blueButton,
      alignItems: 'center',
      justifyContent: 'center',
      width: Platform.OS ==='web' ? wp('4%') : wp('7%'),
      height: Platform.OS ==='web' ? wp('4%') : wp('7%'),
      borderRadius: Platform.OS ==='web' ? wp('1%') : wp('2%'),
    },
    button: {
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.blueButton, 
      paddingVertical:7,
      paddingHorizontal:20
    },
    buttonText: {
      color: 'white',
  fontFamily:FONTFAMILY.SemiBold,
  fontSize:rf(1.8)
    },
    subContainer1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
      padding:20
    },
    text1: {
      fontFamily: FONTFAMILY.Bold,
      fontSize: rf(2.0),
      color: COLORS.black,
      textAlign: 'center',
    },
    container1: {
      marginRight: 15,
      width: 38,
      height: 38,
      borderRadius: 19,
    },
    containerWithBorder: {
      borderBottomWidth: 0.5, // Adjust the width as needed
      borderColor: COLORS.Greyscale, // Change the color as needed
    },


  });
  
  export default ReportLinkOpenScreen;
  