import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Modal, Text, Button, TouchableOpacity, Share } from 'react-native';
import { WebView } from 'react-native-webview';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import { PymentResponseSlice } from '../../redux/slice/auth';
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


  
const ReportLinkOpenScreenNew = ({ route }) => {
const navigation = useNavigation()



const {dispatch} = useRedux();


const [modalVisible, setModalVisible] = useState(false);
const [modalVisible2, setModalVisible2] = useState(false);



const GoToNext = () => {

  // setModalVisible2(true);
 //
  sharePDFLink()
}  
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
   navigation.navigate(SCREENS.DashBoard)

  };



  // const openModal = () => {
  //   setModalVisible(true);
  // };

  // const closeModal = () => {
  //   setModalVisible(false);
  //   setModalVisible2(false);

  // };

  // const handleGoToLogin = () => {
  //   // Implement logic for "Go to Login"
  //   // For example, navigate to the login screen
  //   console.log('Go to Login');
  //   closeModal();
  //   navigation.navigate(SCREENS.LoginScreen)
  // };

  // const handleAddNewService = () => {
  //   // Implement logic for "Add New Service"
  //   // For example, navigate to the add new service screen
  //   console.log('Add New Service');
  //   closeModal();
  //   navigation.navigate(SCREENS.SelectServicesSubscription,{Params1 : LoginParams})

  // };

  //
  const { item} = route.params;

  

  return (
    <GradientBackground>
    
<View style={styles.containerWithBorder}>

<View style={styles.subContainer1}>
  <TouchableOpacity
    style={styles.container}
    onPress={handlePress
     } >

    <Icons
  name={'keyboard-backspace'}
  Type={Icon.MaterialCommunityIcons}
  size={rf(2.4)}
  color={COLORS.white}
/>
  </TouchableOpacity>

  <Text style={styles.text1}>{"Report"}</Text>
  <TouchableOpacity
    style={styles.button}
    onPress={GoToNext}
    >

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

{/* 
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
          title="Go To Login"
          onPress={() => {
               //navigation.navigate(SCREENS.DashBoard);
           handleGoToLogin()
          }}          buttonStyle={{width:wp('80%')}} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(2.0)}}         />
             <CustomBlueButton
          title="Add More Services"
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
          title="Go To Login"
          onPress={() => {
               //navigation.navigate(SCREENS.DashBoard);
           handleGoToLogin()
          }}          buttonStyle={{width:wp('80%')}} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(2.0)}}         />

<CustomBlueButton
          title="Share Report"
          onPress={() => {
               //navigation.navigate(SCREENS.DashBoard);
               sharePDFLink()
          }}          buttonStyle={{width:wp('80%')}} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(2.0)}}         />

             <CustomBlueButton
          title="Add More Services"
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
      </Modal> */}
    </GradientBackground>
  );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
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
  
  export default ReportLinkOpenScreenNew;
  