import { useEffect,useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
 Animated,
 Easing,
 Platform
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../common/responsiveFunction';
import {COLORS, FONTFAMILY} from '../constants/them';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';
import { PERMISSIONS, request } from 'react-native-permissions';

export default function ImageUploadModal({modalVisible, setModalVisible,onImageData}) {

  // const profilePicture = () => {
  //   // launchCamera.openCamera({
  //   //   width: 300,
  //   //   height: 400,
  //   //   cropping: true,
  //   // }).then(res => {
  //   //   setUpdatedPicture(res.path);
  //   // });
  //   launchCamera({mediaType: 'photo'}, response => {
  //     if (!response.didCancel && !response.error) {
  //       //setImageUri(response.uri);
  //       onImageData(response);

  //     }
  //     setModalVisible(false);
  //   });
  // };

  const profilePicture = async () => {

    if (Platform.OS === 'ios') {
      openCameraIOS()
        } else if (Platform.OS === 'android') {
          openCameraAndroid()
  
    }
  }
  const openCameraAndroid = async ()=> {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        launchCamera({ mediaType: 'photo' }, (response) => {
          if (!response.didCancel && !response.error) {
            // setImageUri(response.uri);
             onImageData(response);
           }
           setModalVisible(false);        });
      } else {
        //console.log('Camera permission denied');
      }
    } catch (error) {
     // console.log('Camera permission error: ', error);
    }
  };


  const openCameraIOS = async () => {

  //  console.log('Camera permission');
    const result = await request(PERMISSIONS.IOS.CAMERA);
    if (result === 'granted') {
      // Location permission granted
      console.log('Camera permission granted');
    } else {
      // Location permission denied
      console.log('Camera permission denied');
    }



    launchCamera({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel && !response.error) {
        // setImageUri(response.uri);
         onImageData(response);
       }
       setModalVisible(false);       
       });
  };

  
  // const requestCameraPermission = async () => {
  //   const result = await requestCameraPermissions();
  //   if (result === 'granted') {
  //     openCameraIOS()
  //       } else {
  //     // Camera permission denied, handle accordingly
  //   }
  // };

  const profilePictureView = () => {
    // launchImageLibrary.openPicker({
    //   width: 300,
    //   height: 400,
    //   cropping: true,
    // }).then(res => {
    //   setUpdatedPicture(res.path);
    // });


    launchImageLibrary({mediaType: 'photo'}, response => {
      if (!response.didCancel && !response.error) {
       // setImageUri(response.uri);
        onImageData(response);
      }
      setModalVisible(false);
    });
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={[styles.centeredView,]}>
        <Animated.View style={[styles.modalView,{}]}>
          <View style={styles.closeIconContainer}>
            <Text style={styles.txt}>Choose your action</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setModalVisible(false);
               
              }}>
              <MaterialIcons name="close" size={rf(3)} color={COLORS.black} />
            </TouchableOpacity>
          </View>

          <View style={styles.iconContainer}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => profilePicture()}>
              <View style={{alignItems: 'center'}}>
                <Entypo name="camera" size={rf(5)} color={COLORS.primary} />
                <Text style={styles.txt2}>Camera</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => profilePictureView()}>
              <View style={{alignItems: 'center'}}>
                <MaterialIcons
                  name="photo"
                  size={rf(5)}
                  color={COLORS.primary}
                />
                <Text style={styles.txt2}>Gallery</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: wp('3%'),
    borderTopRightRadius: wp('3%'),
    padding: wp(3),
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 15,
  },
  txt: {
    fontSize: rf(2),
    color: COLORS.black,
    fontFamily: FONTFAMILY.Bold,
  },
  txt2: {
    fontSize: rf(1.5),
    color: COLORS.black,
    fontFamily: FONTFAMILY.Bold,
  },
  iconContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: wp('5%'),
    marginVertical: hp('2%'),
  },
  closeIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
