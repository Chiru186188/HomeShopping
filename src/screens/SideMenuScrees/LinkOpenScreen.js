import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import { PymentResponseSlice } from '../../redux/slice/auth';
import useRedux from '../../components/useRedux';
import utills from '../../utills';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../constants/them';



  
const LinkOpenScreen = ({ route }) => {

const extractQueryParams = (url) => {
  const queryIndex = url.indexOf('?');
  if (queryIndex !== -1) {
    const queryParams = url.substr(queryIndex + 1).split('&');
    const params = {};
    queryParams.forEach((param) => {
      const [key, value] = param.split('=');
      params[decodeURIComponent(key)] = decodeURIComponent(value || '');
    });
    return params;
  }
  return {};
};

const handleRedirect = (navState) => {
  const redirectedUrl = navState.url;
  const urlParams = extractQueryParams(redirectedUrl);
  console.log('PaymentURL!',urlParams);

  // Check for success or failure parameters in the extracted params

  if (urlParams.payload && urlParams.paymentId) {
    // Both payload and paymentId parameters exist in the URL
    console.log('Received payload and paymentId:', urlParams.payload, urlParams.paymentId);
    CallApiForPayment(urlParams)
    // Perform an API call here using the extracted parameters
    // Replace the placeholder API call with your actual API call
    // yourAPICallFunction(urlParams.payload, urlParams.paymentId)
    //   .then((response) => {
    //     // Handle the API call response here
    //     console.log('API Call Response:', response);
    //     // Perform actions based on the API call response
    //   })
    //   .catch((error) => {
    //     // Handle any API call errors here
    //     console.error('API Call Error:', error);
    //     // Perform actions for error handling
    //   });

  


  }


  // if (urlParams.success) {
  //   // Payment was successful
  //   console.log('Payment was successful!');
  //   // Perform actions for a successful payment
  // } else if (urlParams.failure) {
  //   // Payment failed
  //   console.log('Payment failed.');
  //   // Perform actions for a failed payment
  // } else {
  //   // Unable to determine the result
  //   console.log('Unable to determine payment result.');
  //   // Handle this scenario accordingly
  // }
};

const {dispatch} = useRedux();
const navigation = useNavigation()
const CallApiForPayment = (resp) => {
  let data = {
    paymentID: resp.paymentId,
    payload: resp.payload,
   
  };
  
  dispatch(PymentResponseSlice(data))
  .unwrap()
  .then(res => {
    console.log('PymentResponseSlice res==', res);
    if (res.data?.success == true){
      utills.successAlert('', res.data?.data?.message);
      
        navigation.navigate(SCREENS.ReportLinkOpenScreen,{item :res.data?.pdfDownload });
    }else{  
      utills.errorAlert('', res.message);
      return;
    }
  });
};


  const handlePress = () => {
  };
  const { item } = route.params;

    return (
      <View style={styles.container}>
        <HeaderWithBackButton onPress={handlePress} title={'Payment'} />

        <WebView
          source={{ uri: item }} // Replace with your desired URL
          style={styles.webview}
          onNavigationStateChange={handleRedirect}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
     flex: 1,
      backgroundColor: 'white',
      
    },
    webview: {
      flex: 1,
    },
  });
  
  export default LinkOpenScreen;
  