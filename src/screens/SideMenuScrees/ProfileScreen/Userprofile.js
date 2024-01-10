import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, CONSTANTS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES} from '../../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../../common/responsiveFunction';

import { useEffect,useState } from 'react';
import CustomBlueButton from '../../../components/CustomBlueButton';
import GradientBackground from '../../../components/GradientBackground';
import HeaderWithBackButton from '../../../components/HeaderWithBackButton';
import EditTextWithLable from '../../../components/EditTextWithLable';
import Icons, { Icon } from '../../../components/Icons';
import CustomHeader from '../../../components/CustomHeader';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import utills from '../../../utills';
import EditTextWithLableAndIcon from '../../../components/EditTextWithLableAndIcon';
import DropDownPicker from 'react-native-dropdown-picker';
import useRedux from '../../../components/useRedux';
import TouchableNativeFeedback from '../../../components/TouchableNativeFeedback';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { getUSERDetailsSlice, saveIsLoading } from '../../../redux/slice/categories';
import ImageUploadModal from '../../../components/ImageUploadModal';
import axios from 'axios';

export default function Userprofile({navigation}) {
  const [email, setemail] = useState('');
  const [pwd, setupwd] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const userData = useSelector(state => state.auth.userData);

  const currentDate = new Date();
  // Set the maximum selectable date to the current date
  const maximumDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date()); // Set initial date here if available
  
  const [openG, setOpenG] = useState(false);
  const [valueG, setValueG] = useState("M");
  const [itemsG, setItemsG] = useState([
    {label: 'Male', value: 'M'},
    {label: 'Female', value: 'F'},
    {label: 'Others', value: 'O'}, 
  ]);
  const [FirstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [EmailAdd, setEmailAdd] = useState('');

  const [imgURl, setimgURl] = useState('');





  
useEffect(() => {
  getUSERdata()
  return () => {
   
  };
}, []);

const getUSERdata = () => {
 
   let data = {
     Id: userData?.userID,
 
   };
   //console.log('dataaaaaaar',data)
 
   dispatch(getUSERDetailsSlice(data))
     .unwrap()
     .then(res => {
       console.log("res?",res)
 
     //   console.log("res?.aaData?.OpeningAmount",res?.aaData?.OpeningAmount)
 
    setFirstName(res?.data?.firstName)
    setlastName(res?.data?.lastName)
    setValueG(res?.data?.gender)
    setEmailAdd(res?.data?.email)
    setdob(utills.getDateBeforeT(res?.data?.dob))
    setimgURl((res?.data?.profilePath))

    const dateObject = new Date(utills.getDateBeforeT(res?.data?.dob));
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Adding 1 because getMonth() returns zero-based months
    const day = String(dateObject.getDate()).padStart(2, '0');
    
    const formattedDate = `${year}-${month}-${day}`;
    console.log("DAte",formattedDate); // Output: 2023-12-13
    setSelectedDate(dateObject);
     
 })
     .catch(e => {
     });
 };


const GoToNext = () => {
}
const handlePress = () => {
};
const [dob, setdob] = useState('Date of Birth');
const showDatePicker = () => {
  setDatePickerVisibility(true);
};

const hideDatePicker = () => {
  setDatePickerVisibility(false);
};
const {dispatch} = useRedux();

const handleConfirm = (date) => {
  // console.warn("A date has been picked: ", date.toString());
  const dateObject = new Date(date.toString());
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Adding 1 because getMonth() returns zero-based months
  const day = String(dateObject.getDate()).padStart(2, '0');
  
  const formattedDate = `${year}-${month}-${day}`;
  console.log(formattedDate); // Output: 2023-12-13
  setSelectedDate(date);

  setdob(formattedDate)
  hideDatePicker();

};
const [modalVisible, setModalVisible] = useState(false);
const [imageUri, setImageUri] = useState();

const handleEditPress = () => {
    
  setModalVisible(true);
};
const [imageData, setImageData] = useState(null); // Store image data for update

const uploadImage = async () => {

  dispatch(saveIsLoading(true))
const formData = new FormData();
    formData.append("id",  userData?.userID);
    formData.append("FirstName",FirstName  );
    formData.append("LastName",lastName  );
    formData.append("DOB",dob  );
    formData.append("Gender",valueG  );
    if (imageUri) {
    formData.append("image", {
      name: imageUri?.assets[0].uri.split("/").slice(-1).toString(),
      type: "image/jpg",
      uri: imageUri?.assets[0].uri,
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

      //AsyncStorage.setItem(CONSTANTS.UserData, JSON.stringify(data.data));
      let userdata = data.data
     // dispatch(saveUserData(userdata))
      dispatch(saveIsLoading(false))
      utills.successAlert('', "User profile Updated Successfully");
    
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

      .post('http://122.176.104.29:7648/api/UserApi/UserProfileApiAsync13', formData, config)
      .then(onSuccess)
      .catch(onFailure);
    };


  return (
     <GradientBackground>
    <CustomHeader onPress={handlePress} title = "Profile" />
<ScrollView>
    <View>
   

    <View style={styles.container}>
    <TouchableNativeFeedback 
     onPress={handleEditPress}
    
    style={{alignItems:'center',margin:30}} >
        {/* <Image source={IMAGES.ProfileImage} style={{
    width: 150,
    height: 150,
  }} /> */}


{ imgURl ? (
        <Image source={{ uri: imgURl }} style={styles.image} />
        ) : imageUri && imageUri.assets && imageUri.assets.length > 0 ? (
        <Image source={{ uri: imageUri.assets[0].uri }} style={styles.image} />
      ) : (
      <Image source={IMAGES.ProfileImage} style={styles.image} />
   
   )}  


  <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
  <Text style={styles.txt}>{FirstName + ' ' + lastName}</Text>


  <Icons
      name={'page-edit'}
      Type={Icon.Foundation}
      size={rf(3.4)}
      color={COLORS.primary}
      style={{alignSelf:'center',alignContent:'center',alignItems:'center',marginTop:10}}
    />
</View>
</TouchableNativeFeedback>


<View style={{
           alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal:10,
      marginTop:10,
      marginBottom:15

    }}>
<EditTextWithLableAndIcon
        label="First Name *"
        placeholder="Enter First Name"
        value={FirstName}
        onChangeText={setFirstName}
        keyboardType="default"
      />
         <EditTextWithLableAndIcon
        label="Last Name *"
        placeholder="Enter Last Name"
        value={lastName}
        onChangeText={setlastName}
        keyboardType="default"
      />
<View style={{alignSelf:'flex-start'}}>
  <Text style={{
    marginTop: hp('1%'),
    fontSize: rf(1.8),
    color: COLORS.Lableheading,
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('3.5%'),
    textAlign:'left'
  }}>Gender  
   <Text style={{
    marginTop: hp('1%'),
    fontSize: rf(1.8),
    color: COLORS.red,
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('3.5%'),
    textAlign:'left'
  }}> *  
  </Text>
  </Text>
</View>


      <DropDownPicker
      open={openG}
      value={valueG}
      items={itemsG}
      setOpen={setOpenG}
      setValue={setValueG}
      setItems={setItemsG}
      listMode='SCROLLVIEW'
      placeholder='Select Gender'
      placeholderStyle ={{color:COLORS.Greyscale}}
      style={{ 
        borderColor: COLORS.Greyscale,borderRadius:10, borderWidth:2,height: hp('8%'),
        width : wp('89%')
    }}
      textStyle={{  
        color:  COLORS.Content,
        fontFamily: FONTFAMILY.Bold,
        alignSelf: 'center',
        fontSize: rf(1.8),
      }}
    />
    <View style={{alignSelf:'flex-start'}}>
  <Text style={{
    marginTop: hp('1%'),
    fontSize: rf(1.8),
    color: COLORS.Lableheading,
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('3.5%'),
    textAlign:'left'
  }}>Date Of Birth  
   <Text style={{
    marginTop: hp('1%'),
    fontSize: rf(1.8),
    color: COLORS.red,
    fontFamily: FONTFAMILY.Medium,
    marginLeft:wp('3.5%'),
    textAlign:'left'
  }}> *  
  </Text>
  </Text>
</View>
<View style={{
      alignItems: 'center',
      marginTop:10,
      marginBottom:15,
      borderColor: COLORS.Greyscale,borderRadius:10, borderWidth:2,height: hp('8%'),
      width : wp('89%'),
      justifyContent :'space-between',
      alignContent:'center',
      flexDirection:'row',
      paddingHorizontal:10
    }}>

<Text style={{
    marginTop: hp('1%'),
    fontSize: rf(1.8),
    color:  dob === "Date of Birth" ?  COLORS.Greyscale : COLORS.Content,
      textAlign:'left',
     paddingVertical:5,
  
     fontFamily: FONTFAMILY.Bold,
    fontSize: rf(1.8),
  }}>{dob} 
  </Text>
  <TouchableNativeFeedback
      onPress={showDatePicker}>
<Image source={IMAGES.Cal_icon1} style={{width:32,height:32,resizeMode:'contain'}}
 />
 </TouchableNativeFeedback>
  <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={selectedDate}
        maximumDate={maximumDate}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

    </View>
   
    <EditTextWithLableAndIcon
        label="Email Address *"
        placeholder="Enter Email Address"
        value={EmailAdd}
        onChangeText={setEmailAdd}
        keyboardType="default"
        disable={true}

      />

<CustomBlueButton
          title="Update profile"
          onPress={() => {
               //navigation.navigate(SCREENS.DashBoard);
            uploadImage()
          }}          buttonStyle={styles.loginButton} // Custom button style
          textStyle={{fontFamily :FONTFAMILY.Bold,
            fontSize: rf(2.0)}}         />

    </View>
    {/* <View style={styles.containerTop}>
    <Text  style={styles.Left500TextRight}>Informations</Text>
    </View> */}



    {/* <View style={styles.row}>
            
    <Text  style={styles.Left500BOLDText}>Name
    </Text>
 
    <Text  style={styles.Left500Text}>{userData?.firstName + ' ' + userData?.lastName} 
    </Text>



    </View>

    <View style={styles.row}>
            
            <Text  style={styles.Left500BOLDText}>Phone number
            </Text>
         
            <Text  style={styles.Left500Text}>{userData?.phoneNumber} 
            </Text>
        
            </View>

            <View style={styles.row}>
            
            <Text  style={styles.Left500BOLDText}>Email
            </Text>
         
            <Text  style={styles.Left500Text}>{userData?.email}
            </Text>
        
            </View>  

               <View style={styles.row}>
            
            <Text  style={styles.Left500BOLDText}>Gender
            </Text>
         
            <Text  style={styles.Left500Text}>{userData?.gender}
            </Text>
        
            </View> 

               <View style={styles.row}>
            
            <Text  style={styles.Left500BOLDText}>Birthday
            </Text>
         
            <Text  style={styles.Left500Text}>{utills.getDateBeforeT(userData?.dob)}
            </Text>
        
            </View> 

               <View style={styles.row}>
            
            <Text  style={styles.Left500BOLDText}>Address
            </Text>
         
            <Text  style={styles.Left500Text}>{userData?.address}
            </Text>
        
            </View> 

               <View style={styles.row}>
            
            <Text  style={styles.Left500BOLDText}>PO BOX
            </Text>
         
            <Text  style={styles.Left500Text}>{userData?.poBox}
            </Text>
        
            </View>      
            <View style={styles.row}>
            
            <Text  style={styles.Left500BOLDText}>IRD
            </Text>
         
            <Text  style={styles.Left500Text}>{userData?.ird}
            </Text>
        
            </View>       */}
   
    </View>
    </View>
    </ScrollView>
    <ImageUploadModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          onImageData = {(data)=>{

            setImageUri(data)
            if (data) {
            //  uploadImage(data);
            }else{
            }
          }
          }
        />
     </GradientBackground>

  );
}

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
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: rf(2.4),
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
 {backgroundColor : COLORS.lightGreySelection,
    alignContent:'left',
    justifyContent:'space-evenly',padding:10},
   
    Left500TextRight: {
        fontFamily: FONTFAMILY.Regular,
        fontSize:rf(2.0),
        textAlign: 'left',
        color:COLORS.Lableheading
      },
    Left500Text: {
        fontFamily: FONTFAMILY.Regular,
        fontSize:rf(1.8),
        textAlign: 'right',
        color:COLORS.Lableheading
      },
       Left500BOLDText: {
        fontFamily: FONTFAMILY.Bold,
        fontSize:rf(1.8),
        textAlign: 'left',
        color:COLORS.Content

      },
      Left500BOLDTextT: {
        fontFamily: FONTFAMILY.Bold,
        fontSize:rf(1.8),
        textAlign: 'left',
      },
      image: {
        width: 150,
        height: 150,
        borderRadius: 75,
      },
});




