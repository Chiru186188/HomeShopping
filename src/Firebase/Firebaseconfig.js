import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
// Your web app's Firebase configuration
const firebaseConfig = {
  
    apiKey: "AIzaSyCguaeeNLhzYRxsLU0hsFaYKN01VpruTIs",
    authDomain: "homeshopping-ab263.firebaseapp.com",
    projectId: "homeshopping-ab263",
    storageBucket: "homeshopping-ab263.appspot.com",
    messagingSenderId: "659819777868",
    appId: "1:659819777868:web:06d026dadd688efee9c9e9",
    measurementId: "G-C290P02RFK"
  };

const Firebase= () => {
  if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
  } else {
  firebase.app();
  }
};

export async function requestUserPermission() {
  // console.log('requestUserPermission ======= >>>>>>>>>>> ');
  Firebase();

  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
  const token=await  getFcmToken();
  console.log('token========',token);
  return token
  }
}

const getFcmToken = async (userId) => {
  try {
    messaging()
      .getToken()
      .then(token => {
        console.log("tokentoken",token)
       return token
      });

    messaging().onTokenRefresh(token => {
      console.log("tokentoken",token)

        return token
    });
  } catch (error) {}
};