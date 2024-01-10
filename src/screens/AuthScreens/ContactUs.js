import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { COLORS, FONTFAMILY } from '../../constants/them';
import {
    heightPercentageToDP as hp,
    responsiveFontSize as rf,
    widthPercentageToDP as wp,
  } from '../../common/responsiveFunction';
import GradientBackground from '../../components/GradientBackground';
import CustomButtonsBAndS from '../../components/CustomButtonsBAndS';
import CustomButtonsBAndSend from '../../components/CustomButtonsBAndSend';
import EditText_WithBackgroundColor from '../../components/EditText_WithBackgroundColor';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import EditTextWithLable from '../../components/EditTextWithLable';
import { SubmitContactUSSlice } from '../../redux/slice/categories';
import utills from '../../utills';
import useRedux from '../../components/useRedux';
  
const ContactUs = () => {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const userData = useSelector(state => state.auth.userData);

  const handleContactFormSubmit = () => {
    // Implement logic to handle form submission
    // This function will be called when the form is submitted
    // You can access the form field values: customerName, customerEmail, phoneNumber, subject, message
    console.log('Form submitted:', {
      customerName,
      customerEmail,
      phoneNumber,
      subject,
      message,
    });
    // Add your logic to send the form data to the backend or perform other actions here
  };
  const handleBackPress = () => {
    // Add your logic for the "Back" button action here
  };
  const {dispatch} = useRedux();

  // const handleNextPress = () => {
  //   // Add your logic for the "Next" button action here
  //   navigation.navigate(SCREENS.CartValueScreen,{From :"HS",Service:'Home Shopping Services'})
  // };
  const handlePress = () => {};

  const handleNextPress = async () => {



    
    console.log('HIIII')
  
    let data = {
      UserID:userData?.userID,//userData?.userID,
      Subject:subject,
      MailMessage:message
    };
    console.log('dataaaaaaar',data)
  
    dispatch(SubmitContactUSSlice(data))
      .unwrap()
      .then(res => {
        console.log("res?",res)
         if  (res?.statusCode == 200){
utills.confirmMessageAlert("Your Query Send Successfully!")
        }else{
          utills.errorAlert(res?.message)
        }

       
  
      })
      .catch(e => {
        //  setLoading(false);
      });
  }
 
  return (

<GradientBackground>
<HeaderWithBackButton onPress={handlePress} title = "Contact Us" />

    <ScrollView  style={styles.container}>

         <View style={styles.rowList2}>
      <Text style={styles.Left500BOLDText}>Customer Name:</Text>
      <Text style={styles.Left500TextMedumR}>{userData?.firstName + " " + userData?.lastName}</Text>
      </View>

      <View style={styles.rowList2}>

      <Text style={styles.Left500BOLDText}>Customer Email:</Text>
      <Text style={styles.Left500TextMedumR}>{userData?.email}</Text>
      </View>

      <View style={styles.rowList2}>

      <Text style={styles.Left500BOLDText}>Phone Number:</Text>
      <Text style={styles.Left500TextMedumR}>{userData?.phoneNumber}</Text>
      </View>



      
         <EditTextWithLable
        label="Subject *"
        placeholder="Subject"
        value={subject}
        onChangeText={setSubject}
        keyboardType="default"

      />
<EditTextWithLable
        label="Message *"
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        keyboardType="default"
        description={true}
        style ={{height:200}}
      />


<CustomButtonsBAndSend
        onBackPress={handleBackPress}
        onNextPress={handleNextPress}
      />
    </ScrollView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width : wp('94'),
    alignContent:'center',
    backgroundColor :COLORS.white,
    margin:20,
    borderRadius : 15,
    alignSelf:'center',
    paddingHorizontal:10,
    paddingTop:30
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    marginTop: 20,
  },
  Left500TextMedumR: {
    fontFamily: FONTFAMILY.Medium,
    fontSize:rf(1.8),
    textAlign: 'right',
  },
   Left500BOLDText: {
    fontFamily: FONTFAMILY.Bold,
    fontSize:rf(1.8),
    textAlign: 'left',
  },
  rowList2: {
  
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    marginVertical:10,
    alignItems:'center',
    gap:0

  },
});

export default ContactUs;
