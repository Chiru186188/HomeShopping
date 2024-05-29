import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, CheckBox, StyleSheet } from 'react-native';
import {COLORS, CONSTANTS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES} from '../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../common/responsiveFunction';
import DocumentPicker from 'react-native-document-picker';
import utills from '../utills';

const UploadInvoicePopup = ({ isVisible, onClose, onSubmit }) => {
  const [invoiceAmount, setInvoiceAmount] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selectedFileName, setselectedFileName] = useState('No File Choosen');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleChooseDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.doc,DocumentPicker.types.docx,DocumentPicker.types.pdf,DocumentPicker.types.images],
      });
      setselectedFileName(res[0]?.name)
      console.log('res : ' + res[0]?.name.toString());
      setSelectedFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
        console.log('User cancelled the picker');
      } else {
        console.log('Error : ' + JSON.stringify(err));
      }
    }
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    // Pass the invoice amount and selected file to the onSubmit function



    if (invoiceAmount === ""){
utills.errorAlert("Please Enter Amount!")
return
    }
    if (selectedFileName  === "" || selectedFileName  === "No File Choosen"){
      utills.errorAlert("Please Select File!")
      return
          }
    onSubmit(amountUs, selectedFile);
    onClose();
  };
  const exchangeRate = 2.6882;
//2.6882



  const [amountUs, setamountUs] = useState('');

  const handleAmountChange = (text) => {
    // Ensure the input always starts with "EC$"
    
  
    const amountNumber = parseFloat(text.replace('EC$', ''));
  
    // Check if the entered text is a valid number
    if (!isNaN(amountNumber)) {
      setInvoiceAmount(text);
      // Convert to US$ and set the state
      const convertedAmountUsd = (amountNumber / exchangeRate).toFixed(2);
      setamountUs(`${convertedAmountUsd}`);
    } else {
      // If the entered text is not a valid number, only update the EC$ amount
      setInvoiceAmount(text);
      setamountUs(''); // Reset the US$ amount if the input is not a valid number
    }
  };

  const handleEditPress = () => {
    
    setModalVisible(true);
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


  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
          <Text style={{ fontFamily:FONTFAMILY.Medium, color:COLORS.BlueSelectionBorder }}>Supported file formats are pdf,images(.jpg or .jpeg)</Text>
          <Text style={{ fontFamily:FONTFAMILY.Medium, color:COLORS.BlueSelectionBorder,marginBottom:10 }}>Maximum upload filesize:3.5 MB</Text>

         
          <Text style={{  fontFamily:FONTFAMILY.Bold,marginBottom: 10 }}>Invoice File
          <Text style={{  fontFamily:FONTFAMILY.Bold,marginBottom: 10,color:'red' }}> *</Text>

          </Text>
          {/* Upload Button */}
          <View style={{borderWidth:1,alignItems:'center',flexDirection:'row',alignContent:'center',padding:10,paddingHorizontal:10,gap:10,marginBottom:10}}>
          <TouchableOpacity 
            onPress={handleChooseDocument}
          style={{ backgroundColor: COLORS.Greyscale, padding: 10, borderRadius: 5, alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>Choose File</Text>
          </TouchableOpacity>
          <Text style={{ color: 'black',flex:1 }}>{selectedFileName}</Text>

          </View>
          <Text style={{  fontFamily:FONTFAMILY.Bold,marginBottom: 10 }}>Invoice Amount
          <Text style={{  fontFamily:FONTFAMILY.Bold,marginBottom: 10,color:'red' }}> *</Text>

          </Text>
          {/* Text Field for Invoice Amount */}
          {/* <TextInput
            style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 5, marginBottom: 10 }}
            value={invoiceAmount}
            onChangeText={setInvoiceAmount}
            keyboardType="numeric"
          /> */}

{/* <View style={{ flexDirection: 'row', gap: 0,

  backgroundColor: COLORS.white,
  // paddingHorizontal: wp('1.5%'),
  // marginTop: hp('1%'),
  

}}>
          <Text style={{marginVertical: hp('1%'),
    fontSize: rf(1.8),
    color: COLORS.Lableheading,
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('1%')}}>Amount</Text>
<Text style={{marginTop: hp('1%'),
    fontSize: rf(1.8),
    color: 'red',
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('1%')}}> *</Text>
     
      </View> */}

<View style={{ flexDirection: 'row', gap: 0,

  backgroundColor: COLORS.white,
  // paddingHorizontal: wp('1.5%'),
  //
   marginBottom: hp('2%'),
  flexDirection: 'row',
  height: hp('8%'),
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  borderColor: COLORS.Greyscale,borderRadius:10,
  //  width : wp("89%")

}}>
  <View style={{backgroundColor:COLORS.Greyscale,height: hp('8%'),borderBottomLeftRadius:10,borderTopLeftRadius:10,paddingHorizontal:10,paddingVertical:hp("2%")}}
   >
        <Text style={styles.txt3}>EC$</Text>
        </View>
        <TextInput
          placeholder="Enter Amount"
          value={invoiceAmount}
           onChangeText={handleAmountChange}
          keyboardType='decimal-pad'
          style={ {
            flex:1,color: COLORS.Content,
            fontFamily: FONTFAMILY.Bold,
            alignSelf: 'center',
            fontSize: rf(1.8),
          paddingHorizontal:10
          }}
          maxLength={8}

        />
      </View>


          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            {/* Question with Checkboxes */}
            {/* <CheckBox
              value={isChecked}
              onValueChange={handleCheckboxChange}
            /> */}
            <Text>Have you/will you be requesting Duty Free Concession on this package?</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom:10 }}>
      <TouchableOpacity onPress={handleYesPress}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: yesSelected ? 'green' : 'gray',
              backgroundColor: yesSelected ? 'green' : 'transparent',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {yesSelected && <Text style={{ color: 'white' }}>✓</Text>}
          </View>
          <Text style={{ marginLeft: 8 }}>Yes</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleNoPress}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 16 }}>
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: noSelected ? 'red' : 'gray',
              backgroundColor: noSelected ? 'red' : 'transparent',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {noSelected && <Text style={{ color: 'white' }}>✓</Text>}
          </View>
          <Text style={{ marginLeft: 8 }}>No</Text>
        </View>
      </TouchableOpacity>
    </View>



          <Text style = {{fontFamily :FONTFAMILY.Regular,fontSize:10 , color:'red'}}>(By ticking the YES box the General Post Office will release the package thus enabling you to acquire the services of a local customs Broker to prepare a DUTY FREE Customs Declaration)</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            {/* Submit Button */}
            <TouchableOpacity style={{ backgroundColor: 'green', padding: 10, borderRadius: 5, alignItems: 'center', flex: 1, marginRight: 10 }} onPress={handleSubmit}>
              <Text style={{ color: 'white' }}>Submit</Text>
            </TouchableOpacity>
            {/* Cancel Button */}
            <TouchableOpacity style={{ backgroundColor: 'red', padding: 10, borderRadius: 5, alignItems: 'center', flex: 1 }} onPress={onClose}>
              <Text style={{ color: 'white' }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default UploadInvoicePopup;
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
   height: hp('8%')
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
});