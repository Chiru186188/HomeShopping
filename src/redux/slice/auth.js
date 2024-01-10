import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API, requestGet, requestPost, requestPostImage, requestPostUrlEncoded} from '../../api';
import {API_URL, CONSTANTS} from '../../constants/them';
import utillsJs from '../../utills';
// import jwtDecode from 'jwt-decode';
import { saveIsLoading } from './categories';

const initialState = {
  AccessToken: null,
  userData:null,
};


const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    saveAccessToken: (state, action) => {
      let Data = action.payload;
      if (Data !== null) {
        state.AccessToken = Data;
        saveAccessTokenToStorage(Data);
      }
    },
    removeAccessToken: (state, action) => {
      state.AccessToken = null;
      removeAccessTokenFromStorage();
    },
    saveUserData: (state, action) => {
      let Data = action.payload;
      if (Data !== null) {
        state.userData = Data;
        saveUserDataToStorage(Data);
      }
    },
    removeUserData: (state, action) => {
      state.userData = null;
      removeUserDataFromStorage();
    },
 
  },
});

export const RegisterSlice = createAsyncThunk(
  API_URL.SIGNUPAPI,
  async (data, thunk) => {
    try {
      thunk.dispatch(saveIsLoading(true));
      console.log('API_URL.SIGNUPAPI',API_URL.SIGNUPAPI)

      const response = await requestPost(API_URL.SIGNUPAPI, data,true);
      console.log('response',response)
      thunk.dispatch(saveIsLoading(false));
      return response;
    } catch (error) {
      thunk.dispatch(saveIsLoading(false));
   
     console.log('RegisterSlice error', error);
         
            console.log('RegisterSliceHS error.response.data.message', error.response.data.message);

     utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);
export const RegisterSliceHS = createAsyncThunk(
    API_URL.SIGNUPHS,
    async (data, thunk) => {
      try {
        thunk.dispatch(saveIsLoading(true));
        
        const response = await requestPost(API_URL.SIGNUPHS, data,true);
        console.log('response',response)
        thunk.dispatch(saveIsLoading(false));
        return response;
      } catch (error) {
        thunk.dispatch(saveIsLoading(false));
     
       console.log('RegisterSliceHS error', error);
           
              console.log('RegisterSliceHS error.response.data.message', error.response.data.message);

       utillsJs.errorAlert('',error.response.data.message)
        throw error;
      }
    },
  );
  //SIGNUPPOBOX
  export const RegisterSliceEZone = createAsyncThunk(
    API_URL.SIGNUPEZ,
    async (data, thunk) => {
      try {
        thunk.dispatch(saveIsLoading(true));
        
        const response = await requestPost(API_URL.SIGNUPEZ, data,true);
        console.log('response',response)
        thunk.dispatch(saveIsLoading(false));
        return response;
      } catch (error) {
        thunk.dispatch(saveIsLoading(false));
     
       console.log('RegisterSliceHS error', error);
           
              console.log('RegisterSliceHS error.response.data.message', error.response.data.message);

       utillsJs.errorAlert('',error.response.data.message)
        throw error;
      }
    },
  );
  export const RegisterSlicePOBOX = createAsyncThunk(
    API_URL.SIGNUPPOBOX,
    async (data, thunk) => {
      try {
        thunk.dispatch(saveIsLoading(true));
        
        const response = await requestPost(API_URL.SIGNUPPOBOX, data,true);
        console.log('response',response)
        thunk.dispatch(saveIsLoading(false));
        return response;
      } catch (error) {
        thunk.dispatch(saveIsLoading(false));
     
       console.log('RegisterSliceSIGNUPPOBOX error', error);
           
              console.log('RegisterSliceSIGNUPPOBOX error.response.data.message', error.response.data.message);

       utillsJs.errorAlert('',error.response.data.message)
        throw error;
      }
    },
  );

  export const RegisterSlicePBDS = createAsyncThunk(
    API_URL.SIGNUPPBDS,
    async (data, thunk) => {
      try {
        thunk.dispatch(saveIsLoading(true));
        
        const response = await requestPost(API_URL.SIGNUPPBDS, data,true);
        console.log('response',response)
        thunk.dispatch(saveIsLoading(false));
        return response;
      } catch (error) {
        thunk.dispatch(saveIsLoading(false));
     
       console.log('RegisterSliceSIGNUPPBDS error', error);
           
              console.log('RegisterSliceSIGNUPPBDS error.response.data.message', error.response.data.message);

       utillsJs.errorAlert('',error.response.data.message)
        throw error;
      }
    },
  );
  export const RegisterSlicePOCDS = createAsyncThunk(
    API_URL.SIGNUPPOCDS,
    async (data, thunk) => {
      try {
        thunk.dispatch(saveIsLoading(true));
        
        const response = await requestPost(API_URL.SIGNUPPOCDS, data,true);
        console.log('response',response)
        thunk.dispatch(saveIsLoading(false));
        return response;
      } catch (error) {
        thunk.dispatch(saveIsLoading(false));
     
       console.log('RegisterSlicePOCDS error', error);
           
              console.log('RegisterSlicePOCDS error.response.data.message', error.response.data.message);

       utillsJs.errorAlert('',error.response.data.message)
        throw error;
      }
    },
  );
  export const OrderSaveSlice = createAsyncThunk(
    API_URL.SAVEORDER,
    async (data, thunk) => {
      try {
         thunk.dispatch(saveIsLoading(true));
        const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
        const extraHeaders = {
          Authorization: `Bearer ${accessToken}`,
        };
        const response = await requestPost(API_URL.SAVEORDER, data,true,extraHeaders);
        console.log('response',response)
        thunk.dispatch(saveIsLoading(false));
        return response;
      } catch (error) {
       thunk.dispatch(saveIsLoading(false));
        console.log('OrderSaveSlice error', error);
        console.log('OrderSaveSlice error.response.data.message', error.response.data.message);
        utillsJs.errorAlert('',error.response.data.message)
        throw error;
      }
    },
  );



  export const LoginSlice = createAsyncThunk(
    API_URL.LOGIN,
    async (data, thunk) => {
      try {
        thunk.dispatch(saveIsLoading(true));
        const response = await requestPost(API_URL.LOGIN, data,true);
        console.log('response',response)
                // await AsyncStorage.setItem(CONSTANTS.AccessToken,response.data.accessToken);
       
       // 
        console.log('data  nnnn',response.data)
        // await AsyncStorage.setItem('isUserLoggedIn', value.toString());

        // await AsyncStorage.setItem('coinsLeft',decodedToken.coinsLeft.toString());
        // await AsyncStorage.setItem('ComeFromLogin',"Yes");

        thunk.dispatch(saveUserData(response.data))
        thunk.dispatch(saveIsLoading(false));

        return response;
      } catch (error) {
        thunk.dispatch(saveIsLoading(false));
        console.log('LoginSlice error', error);
        utillsJs.errorAlert('',error.response.data.message)
        throw error;
      }
    },
  );

  export const ProfileSlice = createAsyncThunk(
    API_URL.USERDETAIL,
    async (data, thunk) => {
      try {
        
        const response = requestGet(`${API_URL.USERDETAIL}${data.id}`);
        console.log('response',response)
       /// console.log('response',response.data)

        // const decodedToken = response.data
        // console.log('decodedToken',decodedToken)
        // //await AsyncStorage.setItem('isUserLoggedIn', value.toString());
        // await AsyncStorage.setItem(CONSTANTS.ShowMobile,decodedToken.hideMobile.toString());
        // await AsyncStorage.setItem(CONSTANTS.ShowNotification,decodedToken.getNotification.toString());
        // await AsyncStorage.setItem(CONSTANTS.ShowRecommNotification,decodedToken.getNotification.toString());
        // await AsyncStorage.setItem(CONSTANTS.ShowOffersNotification,decodedToken.getOffers.toString());
        // //await AsyncStorage.setItem('coinsLeft',decodedToken.coinsLeft.toString());
        // thunk.dispatch(saveUserData(decodedToken))

        return response;
      } catch (error) {
        console.log('ProfileSlice error', error);
        utillsJs.errorAlert('',error.response.data.message)
        throw error;
      }
    },
  );
  export const ForgotPwdSlice = createAsyncThunk(
    API_URL.FORGOTPWD,
    async (data, thunk) => {
      try {
        thunk.dispatch(saveIsLoading(true));
        const response = await requestPost(API_URL.FORGOTPWD, data,true);
        
        thunk.dispatch(saveIsLoading(false));

        return response;
      } catch (error) {
        console.log('ForgotPwdSlice error', error);
        thunk.dispatch(saveIsLoading(false));

        utillsJs.errorAlert('',error.response.data.message)
                thunk.dispatch(saveIsLoading(false));

        throw error;
      }
    },
  );


  export const PymentResponseSlice = createAsyncThunk(
    API_URL.GetRedirectPaymentResponse,
    async (data, thunk) => {
      try {
        thunk.dispatch(saveIsLoading(true));
        // const response = await requestPost`${API_URL.GetRedirectPaymentResponse}${'paymentID='}${data.paymentID}${'&payload='}${data.payload}`, data,true);
        const response = await requestGet(`${API_URL.GetRedirectPaymentResponse}${'paymentID='}${data.paymentID}${'&payload='}${data.payload}`);

        thunk.dispatch(saveIsLoading(false));

        return response;
      } catch (error) {
        console.log('ForgotPwdSlice error', error);
        thunk.dispatch(saveIsLoading(false));

        utillsJs.errorAlert('',error.response.data.message)
                thunk.dispatch(saveIsLoading(false));

        throw error;
      }
    },
  );

  export const ShowMobileSlice = createAsyncThunk(
    API_URL.Usershowmobile,
    async (data, thunk) => {
      try {
        thunk.dispatch(saveIsLoading(true));
       
        const response = await requestPost(API_URL.Usershowmobile, data,true);
        console.log('response',response)
        await AsyncStorage.setItem(CONSTANTS.ShowMobile,data.hideMobile.toString());

        thunk.dispatch(saveIsLoading(false));
        return response;
      } catch (error) {
        console.log('ShowMobileSlice error', error);
        thunk.dispatch(saveIsLoading(false));
        utillsJs.errorAlert('',error.response.data.message)
        thunk.dispatch(saveIsLoading(false));

        throw error;
      }
    },
  );
  export const LikePostSlice = createAsyncThunk(
    API_URL.PRODUCT_Like,
    async (data, thunk) => {
      try {
        thunk.dispatch(saveIsLoading(true));
        const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
        const extraHeaders = {
          Authorization: `Bearer ${accessToken}`,
        };
        console.log(`${API_URL.PRODUCT_Like}${'productId='}${data.productId}${'&status='}${data.status}`)
        const response = await requestGet(`${API_URL.PRODUCT_Like}${'productId='}${data.productId}${'&status='}${data.status}`,extraHeaders,);
//http://localhost:8080/product/like?productId=82&status=true
        // const response = await requestPost(API_URL.PRODUCT_Like,data,true,extraHeaders);
        console.log('response',response)
        // await AsyncStorage.setItem(CONSTANTS.ShowMobile,data.hideMobile.toString());

        thunk.dispatch(saveIsLoading(false));
        return response;
      } catch (error) {
        console.log('LikePostSlice error', error);
        thunk.dispatch(saveIsLoading(false));
        utillsJs.errorAlert('',error.response.data.message)
        thunk.dispatch(saveIsLoading(false));
        throw error;
      }
    },
  );

  export const InactivePostSlice = createAsyncThunk(
    API_URL.PRODUCT_STATUS,
    async (data, thunk) => {
      try {
        thunk.dispatch(saveIsLoading(true));
        const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
        const extraHeaders = {
          Authorization: `Bearer ${accessToken}`,
        };
                const response = await requestGet(`${API_URL.PRODUCT_STATUS}${'publish='}${data.publish}${'&productId='}${data.productId}`,extraHeaders);

        console.log('response',response)

        thunk.dispatch(saveIsLoading(false));
        return response;
      } catch (error) {
        console.log('InactivePostSlice error', error);
        thunk.dispatch(saveIsLoading(false));
        utillsJs.errorAlert('',error.response.data.message)
        thunk.dispatch(saveIsLoading(false));
        throw error;
      }
    },
  );
  
  export const SoldOutPostSlice = createAsyncThunk(
    API_URL.PRODUCT_STATUS,
    async (data, thunk) => {
      try {
        thunk.dispatch(saveIsLoading(true));
        const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
        const extraHeaders = {
          Authorization: `Bearer ${accessToken}`,
        };
        // console.log(`${API_URL.PRODUCT_Like}${'productId='}${data.productId}${'&status='}${data.status}`)
        //const response = requestPost(API_URL.PRODUCT_STATUS,data,true,extraHeaders);
        // const response = await requestGet(`${API_URL.PRODUCT_STATUS}${'productId='}${data.productId}${'&sold='}${data.status}`,extraHeaders,);
        const response = await requestGet(`${API_URL.PRODUCT_STATUS}${'sold='}${data.sold}${'&productId='}${data.productId}`,extraHeaders);

        console.log('response',response)
        // await AsyncStorage.setItem(CONSTANTS.ShowMobile,data.hideMobile.toString());

        thunk.dispatch(saveIsLoading(false));
        return response;
      } catch (error) {
        console.log('LikePostSlice error', error);
        thunk.dispatch(saveIsLoading(false));
        utillsJs.errorAlert('',error.response.data.message)
        thunk.dispatch(saveIsLoading(false));
        throw error;
      }
    },
  );
  export const DeletePostSlice = createAsyncThunk(
    API_URL.PRODUCT_STATUS,
    async (data, thunk) => {
      try {
        thunk.dispatch(saveIsLoading(true));
        const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
        const extraHeaders = {
          Authorization: `Bearer ${accessToken}`,
        };
        // console.log(`${API_URL.PRODUCT_Like}${'productId='}${data.productId}${'&status='}${data.status}`)
        //const response = requestPost(API_URL.PRODUCT_STATUS,data,true,extraHeaders);
        const response = await requestGet(`${API_URL.PRODUCT_STATUS}${'delete='}${data.publish}${'&productId='}${data.productId}`,extraHeaders);

        console.log('response',response)
        // await AsyncStorage.setItem(CONSTANTS.ShowMobile,data.hideMobile.toString());

        thunk.dispatch(saveIsLoading(false));
        return response;
      } catch (error) {
        console.log('LikePostSlice error', error);
        thunk.dispatch(saveIsLoading(false));
        utillsJs.errorAlert('',error.response.data.message)
        thunk.dispatch(saveIsLoading(false));
        throw error;
      }
    },
  );


  
  export const VerifyOtpSlice = createAsyncThunk(
    API_URL.VERIFYOTP,
    async (data, thunk) => {
      try {     
           thunk.dispatch(saveIsLoading(true));
        const response = await requestPost(API_URL.VERIFYOTP, data,true);
         console.log('response',response)
        // thunk.dispatch(saveUserData(response))
        thunk.dispatch(saveIsLoading(false));

        return response;
      } catch (error) {
        console.log('VerifyOtpSlice error', error);
        thunk.dispatch(saveIsLoading(false));

        utillsJs.errorAlert('',error.response.data.message)
        throw error;
      }
    },
  );
  export const ResetPasswordSlice = createAsyncThunk(
    API_URL.RESETPASSWORD,
    async (data, thunk) => {
      try {
        thunk.dispatch(saveIsLoading(true));
        const response = await requestPost(API_URL.RESETPASSWORD, data,true);//requestGet(`${API_URL.RESETPASSWORD}${'?email='}${data.email}${'&password='}${data.password}`);
        thunk.dispatch(saveIsLoading(false));
        return response;
      } catch (error) {
        thunk.dispatch(saveIsLoading(false));

        console.log('ResetPasswordSlice error', error);
        utillsJs.errorAlert('',error.response.data.message)
        throw error;
      }
    },
  );

  export const ProceedToPaySlice = createAsyncThunk(
    API_URL.SubscriptionSavePlanPayment,
    async (data, thunk) => {
      try {
        thunk.dispatch(saveIsLoading(true));
        const response = await requestPost(API_URL.SubscriptionSavePlanPayment, data,true);//requestGet(`${API_URL.RESETPASSWORD}${'?email='}${data.email}${'&password='}${data.password}`);
        thunk.dispatch(saveIsLoading(false));
        return response;
      } catch (error) {
        thunk.dispatch(saveIsLoading(false));

        console.log('ResetPasswordSlice error', error);
        utillsJs.errorAlert('',error.response.data.message)
        throw error;
      }
    },
  );

 


  export const ChangePasswordSlice = createAsyncThunk(
    API_URL.CHANGEPASSWORD,
    async (data, thunk) => {
      try {
        thunk.dispatch(saveIsLoading(true));
        const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
        const extraHeaders = {
          Authorization: `Bearer ${accessToken}`,
        };
        const response = await requestPost(API_URL.CHANGEPASSWORD,data,true,extraHeaders);//(`${API_URL.CHANGEPASSWORD}${'?email='}${data.email}${'&oldPassword='}${data.oldPassword}${'&newPassword='}${data.newPassword}`,extraHeaders,);
        thunk.dispatch(saveIsLoading(false));
        return response;
      } catch (error) {
        thunk.dispatch(saveIsLoading(false));

        console.log('ChangePasswordSlice error', error);
        utillsJs.errorAlert('',error.response.data.message)
        throw error;
      }
    },
  );
  export const LogoutSlice = createAsyncThunk(
    API_URL.LOGOUT,
    async (data, thunk) => {
      try {
        thunk.dispatch(saveIsLoading(true));
        const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
        const extraHeaders = {
          Authorization: `Bearer ${accessToken}`,
        };
        const response = await requestPost(`${API_URL.LOGOUT}`,data,true,extraHeaders);
        thunk.dispatch(saveIsLoading(false));
        return response;
      } catch (error) {
        thunk.dispatch(saveIsLoading(false));

        console.log('LogoutSlice error', error);
        utillsJs.errorAlert('',error.response.data.message)
        throw error;
      }
    },
  );
  export const DeleteAccountSlice = createAsyncThunk(
    API_URL.DELETEUSER,
    async (data, thunk) => {
      try {
        thunk.dispatch(saveIsLoading(true));
        const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
        const extraHeaders = {
          Authorization: `Bearer ${accessToken}`,
        };
        console.log('extraHeaders error', extraHeaders);

        const response = await requestPost(`${API_URL.DELETEUSER}`,data,true,extraHeaders);
        thunk.dispatch(saveIsLoading(false));
        return response;
      } catch (error) {
        thunk.dispatch(saveIsLoading(false));

        console.log('DeleteAccountSlice error', error);
        utillsJs.errorAlert('',error.response.data.message)
        throw error;
      }
    },
  );
  export const UpdateProfileSlice = createAsyncThunk(

    API_URL.Userupdate,
    async (data, thunk) => {
      try {
        thunk.dispatch(saveIsLoading(true));
        const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
      
        const headers = {
          Authorization: `Bearer ${accessToken}`, // Include the token in the Authorization header
        };
        console.log('API',`${API_URL.Userupdate}${72}`)
               console.log('data  nnnn',data)
               console.log('headers',headers)

        const response = await requestPost(API_URL.Userupdate, data,true,headers);
        console.log('response',response)
        // const decodedToken = jwtDecode(response.data.accessToken);
        // await AsyncStorage.setItem(CONSTANTS.AccessToken,response.data.accessToken);
        // console.log('decodedToken',decodedToken)
     thunk.dispatch(saveUserData(response.data))       
      thunk.dispatch(saveIsLoading(false));
        return response;
      } catch (error) {
        console.log('UpdateProfileSlice error', error);
        thunk.dispatch(saveIsLoading(false));

        utillsJs.errorAlert('',error.response.data.message)
        throw error;
      }
    },
  );
//
  // export const UpdateProfilepictureSlice = createAsyncThunk(
    
  //   API_URL.UserPicupdate,
  //   async (data, thunk) => {
  //     try {
  //       const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken);
  //       const formData = new FormData();
  
  //       // Append image file to the formData
  //       formData.append('image', data.image);
  
  //       // Append ID value to the formData
  //       formData.append('id', data.id);
  
  //       const response = await requestPost(API_URL.UserPicupdate, formData, false, {
  //         Authorization: `Bearer ${accessToken}`,
  //       });
  
  //       console.log('response', response);
  //       thunk.dispatch(saveUserData(response));
  //       return response;
  //     } catch (error) {
  //       console.log('UpdateProfileSlice error', error);
  //       utillsJs.errorAlert('', error.response.data.message);
  //       throw error;
  //     }
  //   },
  // );


  export const UpdateProfilepictureSlice = createAsyncThunk(
    API_URL.UserPicupdate,
    async (data, thunk) => {
      try {

        thunk.dispatch(saveIsLoading(true));

        const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken);
        const headers = {
          Authorization: `Bearer ${accessToken}`,
        };
  
        // Create a new FormData instance
        // const formData = new FormData();
  
        // // Append the image and ID to the formData
        // formData.append('image', data.image);
        // formData.append('id', data.id);
  

        const formData = new FormData();
        formData.append("id", data.id);
        formData.append("image", {
          name: (data.image)?.assets[0].uri.split("/").slice(-1).toString(),
          type: "image/jpg",
          uri: (data.image)?.assets[0].uri,
        });
        console.log('formData', formData);


        const response = await requestPostImage(API_URL.UserPicupdate, formData, false, headers);
        console.log('response', response);
        thunk.dispatch(saveIsLoading(false));
        return response;
      } catch (error) {
        thunk.dispatch(saveIsLoading(false));
        console.log('UpdateProfilepictureSlice error', error);
        utillsJs.errorAlert('', error.response.data.message);
        throw error;
      }
    },
  );
  

const saveAccessTokenToStorage = userData => {
  AsyncStorage.setItem(CONSTANTS.AccessToken, JSON.stringify(userData));
};

const removeAccessTokenFromStorage =async () => {
  try
  {
    console.log("Clearing store for [" + CONSTANTS.AccessToken + "]");
    let numberOfParts = await AsyncStorage.getItem(CONSTANTS.AccessToken);
    if(typeof(numberOfParts) !== 'undefined' && numberOfParts !== null)
    {
      numberOfParts = parseInt(numberOfParts);
      for (let i = 0; i < numberOfParts; i++) { AsyncStorage.removeItem(CONSTANTS.AccessToken + i); }
      AsyncStorage.removeItem(CONSTANTS.AccessToken);
    }
  }
  catch (error)
  {
    console.log("Could not clear store : ");
    console.log(error.message);
  }
};

const saveUserDataToStorage = userData => {
  const filteredData = {};
  for (const key in userData) {
    if (Array.isArray(userData[key])) {
      continue; // Skip array values
    }
    if (userData[key] !== null) {
      filteredData[key] = userData[key];
    }
  }
  console.log('filteredData ', filteredData);
  AsyncStorage.setItem(CONSTANTS.UserData, JSON.stringify(filteredData));
};
const removeUserDataFromStorage =async () => {
  try
  {
    console.log("Clearing store for [" + CONSTANTS.UserData + "]");
    let numberOfParts = await AsyncStorage.getItem(CONSTANTS.UserData);
    if(typeof(numberOfParts) !== 'undefined' && numberOfParts !== null)
    {
      numberOfParts = parseInt(numberOfParts);
      for (let i = 0; i < numberOfParts; i++) { AsyncStorage.removeItem(CONSTANTS.UserData + i); }
      AsyncStorage.removeItem(CONSTANTS.UserData);
    }
  }
  catch (error)
  {
    console.log("Could not clear store : ");
    console.log(error.message);
  }
  // AsyncStorage.removeItem(CONSTANTS.UserData);
};


export const VerifyPhoneOtpSlice = createAsyncThunk(
  API_URL.VERIFYMOBILEOTP,
  async (data, thunk) => {
    try {//http://62.171.153.83:8080/carib-bargains-api/user/verify/mobile/otp?mobileNumber=332&otp=3223

      thunk.dispatch(saveIsLoading(true));
      const response = await requestGet(`${API_URL.VERIFYMOBILEOTP}${'mobileNumber='}${data.mobileNumber}${'&otp='}${data.otp}`);
      thunk.dispatch(saveIsLoading(false));
      return response;
    } catch (error) {
      thunk.dispatch(saveIsLoading(false));

      console.log('ResetPasswordSlice error', error);
      utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);
export const SendOtpSlice = createAsyncThunk(

  API_URL.SENDOTP,
  async (data, thunk) => {
    try {
       thunk.dispatch(saveIsLoading(true));
/// mobileNumber: Phone,
//deviceToken : value !== null ? value : 'cCi2nVXxQTOxnnKU-sqwYb:APA91bHS4sz3YZm7nCrLWWF2t-mKwXTUwcCitpWnzMl5SFsH2d-2ubXrHwmBboE3ePpyM4FexZneIMU1zyTFJIwpafDmJ8gxYeTkcbv6Z_DEfZ1Y3tdT5BCgIUgGORK63iFl-a1-ei2c'
console.log(data)
      const response = requestGet(`${API_URL.SENDOTP}${data.mobileNumber}${'&deviceToken='}${data.deviceToken}`);
     thunk.dispatch(saveIsLoading(false));
      return response;
    } catch (error) {
      thunk.dispatch(saveIsLoading(false));

      console.log('SendOtpSlice error', error.response);
      utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);



export const VerifyPhoneOtpSlice1 = createAsyncThunk(
  API_URL.VERIFYMOBILEOTP1,
  async (data, thunk) => {
    try {//http://62.171.153.83:8080/carib-bargains-api/user/verify/mobile/otp?mobileNumber=332&otp=3223

      thunk.dispatch(saveIsLoading(true));
      const response = await requestGet(`${API_URL.VERIFYMOBILEOTP1}${'mobileNumber='}${data.mobileNumber}${'&otp='}${data.otp}`);
      thunk.dispatch(saveIsLoading(false));
      return response;
    } catch (error) {
      thunk.dispatch(saveIsLoading(false));

      console.log('ResetPasswordSlice error', error);
      utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);
export const SendOtpSlice1 = createAsyncThunk(
  API_URL.SENDOTP1,
  async (data, thunk) => {
    try {
       thunk.dispatch(saveIsLoading(true));
      const response = requestGet(`${API_URL.SENDOTP1}${data.mobileNumber}${'&deviceToken='}${data.deviceToken}`);
       thunk.dispatch(saveIsLoading(false));
      return response;
    } catch (error) {
      console.log('SendOtpSlice1 error', error);
      thunk.dispatch(saveIsLoading(false));

      utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);


export const {saveAccessToken, removeAccessToken,saveUserData,removeUserData} = authSlice.actions;
export default authSlice.reducer;
