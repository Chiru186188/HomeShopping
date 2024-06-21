import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API, requestGet, requestPost, requestPostUrlEncoded} from '../../api';
import { API_URL, CONSTANTS } from '../../constants/them';
import utillsJs from '../../utills';
import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState = {
  MyCartList: [],
  AllDashBoardList: [],
  AllCategriesproduct: [],
  AllAddressList :[],
  PBDSDetails :[],
  RentalBoxDetails :[],
  CostumerDetails :[],
  EZCostumerDetails :[],
  RBCostumerDetails :[],
  POCDSCostumerDetails :[],
  PBDSCostumerDetails :[],
  ServiceDetails :[],
  AccountHistory :[],
  EZAccountHistory :[],
  RBAccountHistory :[],
  POCDSAccountHistory :[],
  PBDSAccountHistory :[],
  TransactionHistory :[],
  UserSumDetails :[],
  SummaryAccountHistory:[],
  DynamicPostCategries: [],
  SavegetrecommendationsList: [],
  Allproducts: [],
  ReleatedAds: [],
  sitenavList: [],
  MyFavAddsList: [],
  MyAddsList: [],
  AllChatsMembers: [],
  AllBuyChatsMembers: [],
  AllSellChatsMembers: [],
  MyStatementList: [],
  MyStateList: [],
  AllCountries: [],
  MyPostSummary: [],
  MyCoinsList: [],
  MySubscriptionsList: [],
  MyPreChat: [],
  MyAdminChat: [],
  MyLastChat: [],
 EzoneInvoices: [],

  SaveSubscriptionPyments: [],
  isLoading: false,
  
};

export const getAllDashboardDataSlice = createAsyncThunk(
    API_URL.DASHBoardAPI,
  async (data, thunk) => {
    try {
      thunk.dispatch(saveIsLoading(true));
      const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

      const extraHeaders = {
        Authorization: `Bearer ${accessToken}`,
      };
      const response = await requestGet(`${API_URL.DASHBoardAPI}${data.id}`,extraHeaders);
      thunk.dispatch(saveAllDashBordData(response?.data))
       thunk.dispatch(saveIsLoading(false));
      // console.log('response',response)

      return response?.data
    } catch (error) {
       thunk.dispatch(saveIsLoading(false));

      console.log('getAllDashboardDataSlice error', error.response);
      throw error;
    }
  },
);
export const getAllAddressListSlice = createAsyncThunk(
  API_URL.AddressListAPI,
async (data, thunk) => {
  try {
   //
   console.log('API',`${API_URL.AddressListAPI}${data.id}`)

    // thunk.dispatch(saveIsLoading(true));
    const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

    const extraHeaders = {
      Authorization: `Bearer ${accessToken}`,
    };
    const response = await requestGet(`${API_URL.AddressListAPI}${data.id}`,extraHeaders);
    thunk.dispatch(saveAllAddressData(response))
    //  thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response?.data
  } catch (error) {
    // thunk.dispatch(saveIsLoading(false));

    console.log('getAllDashboardDataSlice error', error.response);
    throw error;
  }
},
);

export const getPBDSSlice = createAsyncThunk(
  API_URL.PBDSFormLoadAPI,
async (data, thunk) => {
  try {
   //
   console.log('API',`${API_URL.PBDSFormLoadAPI}${data.id}`)

     thunk.dispatch(saveIsLoading(true));

     const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

     const extraHeaders = {
       Authorization: `Bearer ${accessToken}`,
     };
    const response = await requestGet(`${API_URL.PBDSFormLoadAPI}${data.id}`,extraHeaders);
    thunk.dispatch(savePBDSDetails(response))
      thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response?.data
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('getAllDashboardDataSlice error', error.response);
    throw error;
  }
},
);


export const getSubscripedServiicesSlices = createAsyncThunk(
  API_URL.SubscriptionServices,
async (data, thunk) => {
  try {
   //
   console.log('API',`${API_URL.SubscriptionServices}${data.id}`)


   
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
   const extraHeaders = {
     Authorization: `Bearer ${accessToken}`,
   };
     thunk.dispatch(saveIsLoading(true));

    const response = await requestGet(`${API_URL.SubscriptionServices}${data.id}`,extraHeaders);
    thunk.dispatch(saveServiceDetails(response.data))
      thunk.dispatch(saveIsLoading(false));
   // console.log('response',response)

    return response?.data
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('getAllDashboardDataSlice error', error.response);
    throw error;
  }
},
);
export const getRentalBoxSlice = createAsyncThunk(
  API_URL.RentalBoxFormLoadAPI,
async (data, thunk) => {
  try {
   //
   console.log('API',`${API_URL.RentalBoxFormLoadAPI}${data.id}`)


   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   const extraHeaders = {
     Authorization: `Bearer ${accessToken}`,
   };

     thunk.dispatch(saveIsLoading(true));

    const response = await requestGet(`${API_URL.RentalBoxFormLoadAPI}${data.id}`,extraHeaders);
    thunk.dispatch(saveRentalBoxDetails(response))
      thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response?.data
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('getAllDashboardDataSlice error', error.response);
    throw error;
  }
},
);

export const getAccountSummarySlice = createAsyncThunk(
  API_URL.GetAccountSummaryDetail,
async (data, thunk) => {
  try {
   //
   console.log('API',`${API_URL.GetAccountSummaryDetail}${data.Id}`)
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
     thunk.dispatch(saveIsLoading(true));

    const response = await requestGet(`${API_URL.GetAccountSummaryDetail}${data.Id}`,extraHeaders);
    thunk.dispatch(saveUserDetails(response.data))
      thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response?.data
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('getAllDashboardDataSlice error', error.response);
    throw error;
  }
},
);


export const getCustomerDetailsSlice = createAsyncThunk(
  API_URL.GetCustomerDetailsAPI,
async (data, thunk) => {
  try {
   //

   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
   const extraHeaders = {
     Authorization: `Bearer ${accessToken}`,
   };
   console.log("extraHeaders",extraHeaders)
   console.log('API',`${API_URL.GetCustomerDetailsAPI}${data.Id}`,extraHeaders)

     thunk.dispatch(saveIsLoading(true));

    const response = await requestGet(`${API_URL.GetCustomerDetailsAPI}${data.Id}`,extraHeaders);
    
    ////console.log('saveCostumerDetails',response)
    thunk.dispatch(saveCostumerDetails(response.data))
      thunk.dispatch(saveIsLoading(false));
   // console.log('response',response)

    return response?.data
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('getAllDashboardDataSlice error', error.response);
    throw error;
  }
},
);


export const PrintTransactionReportSlice = createAsyncThunk(
  API_URL.PrintTransactionReportAPI,
async (data, thunk) => {
  try {
     thunk.dispatch(saveIsLoading(true));
     const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

     const extraHeaders = {
      Authorization: `Bearer ${accessToken}`,
    };
    const response = await requestGet(`${API_URL.PrintTransactionReportAPI}${'?Tid='}${data.Tid}${'&tType='}${data.type}`,extraHeaders);
    // thunk.dispatch(saveCostumerDetails(response.data))
      thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response?.data
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('getAllDashboardDataSlice error', error.response);
    throw error;
  }
},
);
export const SubmitContactUSSlice = createAsyncThunk(
  API_URL.ContactUSSubmitAPI,
async (data, thunk) => {
  try {
     thunk.dispatch(saveIsLoading(true));
     const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

     const extraHeaders = {
      Authorization: `Bearer ${accessToken}`,
    };
     const response = await requestPost(`${API_URL.ContactUSSubmitAPI}`, data,true,extraHeaders);
     // thunk.dispatch(saveCostumerDetails(response.data))
      thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('getAllDashboardDataSlice error', error.response);
    throw error;
  }
},
);
//PayOnlineApi/HsPaymentsGet?userID=
export const getHSPaymentSlice = createAsyncThunk(
  API_URL.GetHsPaymentsAPI,
async (data, thunk) => {
  try {
   //
   console.log('API',`${API_URL.GetHsPaymentsAPI}${data.Id}`)
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
     thunk.dispatch(saveIsLoading(true));

    const response = await requestGet(`${API_URL.GetHsPaymentsAPI}${data.Id}`,extraHeaders);
      thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response?.data
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('getHSPaymentSlice error', error.response);
    throw error;
  }
},
);
export const getMiscPaymentSlice = createAsyncThunk(
  API_URL.GetmiscPaymentsAPI,
async (data, thunk) => {
  try {
   //
   console.log('API',`${API_URL.GetmiscPaymentsAPI}${data.Id}`)
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

     thunk.dispatch(saveIsLoading(true));
     const extraHeaders = {
      Authorization: `Bearer ${accessToken}`,
    };
    const response = await requestGet(`${API_URL.GetmiscPaymentsAPI}${data.Id}`,extraHeaders);
      thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response?.data
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('getHSPaymentSlice error', error.response);
    throw error;
  }
},
);
export const getPOCDSPaymentSlice = createAsyncThunk(
  API_URL.GetpocdsPaymentsAPI,
async (data, thunk) => {
  try {
   //
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   console.log('API',`${API_URL.GetpocdsPaymentsAPI}${data.Id}`)
   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
     thunk.dispatch(saveIsLoading(true));

    const response = await requestGet(`${API_URL.GetpocdsPaymentsAPI}${data.Id}`,extraHeaders);
      thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response?.data
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('getPOCDSPaymentSlice error', error.response);
    throw error;
  }
},
);
export const getPostBoxPaymentSlice = createAsyncThunk(
  API_URL.GetrentalPaymentsAPI,
async (data, thunk) => {
  try {
   //
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
   console.log('API',`${API_URL.GetrentalPaymentsAPI}${data.Id}`)

     thunk.dispatch(saveIsLoading(true));

    const response = await requestGet(`${API_URL.GetrentalPaymentsAPI}${data.Id}`,extraHeaders);
      thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response?.data
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('getPOCDSPaymentSlice error', error.response);
    throw error;
  }
},
);////PayOnlineApi/GetHsParcelAndSubscription?userID=

export const getPBDSPaymentSlice = createAsyncThunk(
  API_URL.GetpbdsPaymentsAPI,
async (data, thunk) => {
  try {
   //
   console.log('API',`${API_URL.GetpbdsPaymentsAPI}${data.Id}`)
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

     thunk.dispatch(saveIsLoading(true));
     const extraHeaders = {
      Authorization: `Bearer ${accessToken}`,
    };
    const response = await requestGet(`${API_URL.GetpbdsPaymentsAPI}${data.Id}`,extraHeaders);
      thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response?.data
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('getPOCDSPaymentSlice error', error.response);
    throw error;
  }
},
);


export const getParcelPaymentSlice = createAsyncThunk(
  API_URL.GetHsParcelAndSubscriptionAPI,
async (data, thunk) => {
  try {
   //
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   console.log('API',`${API_URL.GetHsParcelAndSubscriptionAPI}${data.Id}`)
   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
     thunk.dispatch(saveIsLoading(true));

    const response = await requestGet(`${API_URL.GetHsParcelAndSubscriptionAPI}${data.Id}`,extraHeaders);
      thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response?.data
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('getPOCDSPaymentSlice error', error.response);
    throw error;
  }
},
);

export const PrintPOCDSReportSlice = createAsyncThunk(
  API_URL.PrintPOCDSReportAPI,
async (data, thunk) => {
  try {
     thunk.dispatch(saveIsLoading(true));

     const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

     const extraHeaders = {
      Authorization: `Bearer ${accessToken}`,
    };
    const response = await requestGet(`${API_URL.PrintPOCDSReportAPI}${data.ID}`,extraHeaders);
    // thunk.dispatch(saveCostumerDetails(response.data))
      thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response?.data
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('getAllDashboardDataSlice error', error.response);
    throw error;
  }
},
);


export const PrintReportSlice = createAsyncThunk(
  API_URL.PrintReportAPI,
async (data, thunk) => {
  try {
     thunk.dispatch(saveIsLoading(true));

     const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

     const extraHeaders = {
      Authorization: `Bearer ${accessToken}`,
    };
    const response = await requestGet(`${API_URL.PrintReportAPI}${'?CustomerId='}${data.CustomerId}${'&AccountId='}${data.AccountId}${'&type='}${data.type}`,extraHeaders);
    // thunk.dispatch(saveCostumerDetails(response.data))
      thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response?.data
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('getAllDashboardDataSlice error', error.response);
    throw error;
  }
},
);
export const getEZCustomerDetailsSlice = createAsyncThunk(
  API_URL.GetEZCustomerDetailsAPI,
async (data, thunk) => {
  try {
   //
   console.log('API',`${API_URL.GetEZCustomerDetailsAPI}${data.Id}`)
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
     thunk.dispatch(saveIsLoading(true));

    const response = await requestGet(`${API_URL.GetEZCustomerDetailsAPI}${data.Id}`,extraHeaders);
    thunk.dispatch(saveEZCostumerDetails(response.data))
      thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response?.data
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('getAllDashboardDataSlice error', error.response);
    throw error;
  }
},
);

export const getRBCustomerDetailsSlice = createAsyncThunk(
  API_URL.GetRBCustomerDetailsAPI,
async (data, thunk) => {
  try {
   //
   console.log('API',`${API_URL.GetRBCustomerDetailsAPI}${data.Id}`)

     thunk.dispatch(saveIsLoading(true));
     const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

     const extraHeaders = {
      Authorization: `Bearer ${accessToken}`,
    };
    const response = await requestGet(`${API_URL.GetRBCustomerDetailsAPI}${data.Id}`,extraHeaders);
    thunk.dispatch(saveRBCostumerDetails(response.data))
      thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response?.data
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('getAllDashboardDataSlice error', error.response);
    throw error;
  }
},
);

//
///POCDSServiceApiAsync10
export const SaveMISCPaymentSlice = createAsyncThunk(
  API_URL.SubmitmiscPaymentApi,
async (data, thunk) => {
  try {
   //
   console.log('API',`${API_URL.SubmitmiscPaymentApi}`)
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
     thunk.dispatch(saveIsLoading(true));
     const response = await requestPost(`${API_URL.SubmitmiscPaymentApi}`, data,true,extraHeaders);

    thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('EditHSCustomerDetailsSlice error', error.response);
    throw error;
  }
},
);
export const SavePOCDSPaymentSlice = createAsyncThunk(
  API_URL.SubmitpocdsPaymentApi,
async (data, thunk) => {
  try {
   //
   console.log('API',`${API_URL.SubmitpocdsPaymentApi}`)
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
     thunk.dispatch(saveIsLoading(true));
     const response = await requestPost(`${API_URL.SubmitpocdsPaymentApi}`, data,true,extraHeaders);

    thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('EditHSCustomerDetailsSlice error', error.response);
    throw error;
  }
},
);


export const SaveCartPaymentSlice = createAsyncThunk(
  API_URL.RentalPaymentsSubmitFinal,
async (data, thunk) => {
  try {
   //
   console.log('API',`${API_URL.RentalPaymentsSubmitFinal}`)
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
     thunk.dispatch(saveIsLoading(true));
     const response = await requestPost(`${API_URL.RentalPaymentsSubmitFinal}`, data,true,extraHeaders);

    thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('EditHSCustomerDetailsSlice error', error.response);
    throw error;
  }
},
);


export const SaveEZCartPaymentSlice = createAsyncThunk(
  API_URL.EZPaymentsSubmitFinal,
async (data, thunk) => {
  try {
   //
   console.log('API',`${API_URL.EZPaymentsSubmitFinal}`)
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
     thunk.dispatch(saveIsLoading(true));
     const response = await requestPost(`${API_URL.EZPaymentsSubmitFinal}`, data,true,extraHeaders);

    thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('EditHSCustomerDetailsSlice error', error.response);
    throw error;
  }
},
);
export const SaveParcelPaymentSlice = createAsyncThunk(
  API_URL.SubmitHsParcelAndSubscription,
async (data, thunk) => {
  try {
   //
   console.log('API',`${API_URL.SubmitHsParcelAndSubscription}`)
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
     thunk.dispatch(saveIsLoading(true));
    //  const response = await requestPost(`${API_URL.SubmitHsParcelAndSubscription}`, data,true);
     const response = await requestPost(`${API_URL.SubmitHsParcelAndSubscription}${'IsFromAccountInclude='}${data.IsFromAccountInclude}${'&userID='}${data.userID}`, data,true,extraHeaders);
     //const response = await requestGet(`${API_URL.GetPBDSCustomerDetailsAPI}${data.Id}`);

    thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('EditHSCustomerDetailsSlice error', error.response);
    throw error;
  }
},
);

export const SaveAddToCArtSlice = createAsyncThunk(
  API_URL.AddToCartApi,
async (data, thunk) => {
  try {
   //
   console.log('API',`${API_URL.AddToCartApi}`)
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
     thunk.dispatch(saveIsLoading(true));
     const response = await requestPost(`${API_URL.AddToCartApi}`, data,true,extraHeaders);
     thunk.dispatch(saveMyCartList(response))

    thunk.dispatch(saveIsLoading(false));
    //MyCartList

    console.log('response',response)

    return response
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('EditHSCustomerDetailsSlice error', error.response);
    throw error;
  }
},
);
export const SavePBDSPaymentSlice = createAsyncThunk(
  API_URL.SubmitpbddsPaymentApi,
async (data, thunk) => {
  try {
   //
   console.log('API',`${API_URL.SubmitpbddsPaymentApi}`)
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
     thunk.dispatch(saveIsLoading(true));
     const response = await requestPost(`${API_URL.SubmitpbddsPaymentApi}`, data,true,extraHeaders);

    thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('EditHSCustomerDetailsSlice error', error.response);
    throw error;
  }
},
);
export const SaveHSPaymentSlice = createAsyncThunk(
  API_URL.SubmitHSPaymentApi,
async (data, thunk) => {
  try {
   //
   console.log('API',`${API_URL.SubmitHSPaymentApi}`)
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
     thunk.dispatch(saveIsLoading(true));
     const response = await requestPost(`${API_URL.SubmitHSPaymentApi}`, data,true,extraHeaders);

    thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('EditHSCustomerDetailsSlice error', error.response);
    throw error;
  }
},
);



export const EditHSCustomerDetailsSlice = createAsyncThunk(
  API_URL.GetHSAccountDetailsForEdit,
async (data, thunk) => {
  try {
   //
   console.log('API',`${API_URL.GetHSAccountDetailsForEdit}`)
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
     thunk.dispatch(saveIsLoading(true));
     const response = await requestPost(`${API_URL.GetHSAccountDetailsForEdit}`, data,true,extraHeaders);

    thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('EditHSCustomerDetailsSlice error', error.response);
    throw error;
  }
},
);
export const EditPOCDSCustomerDetailsSlice = createAsyncThunk(
  API_URL.SIGNUPPOCDS,
async (data, thunk) => {
  try {
   //
   console.log('API',`${API_URL.SIGNUPPOCDS}`)
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
     thunk.dispatch(saveIsLoading(true));
     const response = await requestPost(`${API_URL.SIGNUPPOCDS}`, data,true,extraHeaders);

    thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('EditHSCustomerDetailsSlice error', error.response);
    throw error;
  }
},
);
export const EditRentalBoxCustomerDetailsSlice = createAsyncThunk(
  API_URL.GetRentalBoxAccountDetailsForEdit,
async (data, thunk) => {
  try {
   //
   console.log('API',`${API_URL.GetRentalBoxAccountDetailsForEdit}`)
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
     thunk.dispatch(saveIsLoading(true));
     const response = await requestPost(`${API_URL.GetRentalBoxAccountDetailsForEdit}`, data,true,extraHeaders);

    thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('EditHSCustomerDetailsSlice error', error.response);
    throw error;
  }
},
);

export const EditEZCustomerDetailsSlice = createAsyncThunk(
  API_URL.GetEZAccountDetailsForEdit,
async (data, thunk) => {
  try {
   //
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   console.log('API',`${API_URL.GetEZAccountDetailsForEdit}`)
   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
     thunk.dispatch(saveIsLoading(true));
     const response = await requestPost(`${API_URL.GetEZAccountDetailsForEdit}`, data,true,extraHeaders);

    thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('EditHSCustomerDetailsSlice error', error.response);
    throw error;
  }
},
);
export const EditPBDSCustomerDetailsSlice = createAsyncThunk(
  API_URL.GetPBDSAccountDetailsForEdit,
async (data, thunk) => {
  try {
   //
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
   console.log('API',`${API_URL.GetPBDSAccountDetailsForEdit}`)

     thunk.dispatch(saveIsLoading(true));
     const response = await requestPost(`${API_URL.GetPBDSAccountDetailsForEdit}`, data,true,extraHeaders);

    thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('EditHSCustomerDetailsSlice error', error.response);
    throw error;
  }
},
);
export const getPBDSCustomerDetailsSlice = createAsyncThunk(
  API_URL.GetPBDSCustomerDetailsAPI,
async (data, thunk) => {
  try {
    const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   //
   console.log('API',`${API_URL.GetPBDSCustomerDetailsAPI}${data.Id}`)
   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
     thunk.dispatch(saveIsLoading(true));

    const response = await requestGet(`${API_URL.GetPBDSCustomerDetailsAPI}${data.Id}`,extraHeaders);
    thunk.dispatch(savePBDSCostumerDetails(response.data))
      thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response?.data
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('getAllDashboardDataSlice error', error.response);
    throw error;
  }
},
);
export const getUSERDetailsSlice = createAsyncThunk(
  API_URL.GetUSERDetailsAPI,
async (data, thunk) => {
  try {
   //
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   console.log('API',`${API_URL.GetUSERDetailsAPI}${data.Id}`)
   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
     thunk.dispatch(saveIsLoading(true));

    const response = await requestGet(`${API_URL.GetUSERDetailsAPI}${data.Id}`,extraHeaders);
    thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response?.data
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('GetUSERDetailsAPI error', error.response);
    throw error;
  }
},
);

export const getPOCDSCustomerDetailsSlice = createAsyncThunk(
  API_URL.GetPOCDSCustomerDetailsAPI,
async (data, thunk) => {
  try {
   //
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
   console.log('API',`${API_URL.GetPOCDSCustomerDetailsAPI}${data.Id}`,extraHeaders)

     thunk.dispatch(saveIsLoading(true));

    const response = await requestGet(`${API_URL.GetPOCDSCustomerDetailsAPI}${data.Id}`,extraHeaders);
    thunk.dispatch(savePOCDSCostumerDetails(response.data))
      thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response?.data
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('getAllDashboardDataSlice error', error.response);
    throw error;
  }
},
);
export const getAccountHistorySlice = createAsyncThunk(
  API_URL.GetCustomerAllTransaction,
async (data, thunk) => {
  try {
    const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

  const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
    //
     thunk.dispatch(saveIsLoading(true));
    const response = await requestPost(`${API_URL.GetCustomerAllTransaction}`, data,true,extraHeaders);
    thunk.dispatch(saveAccountHistory(response))
     //
      thunk.dispatch(saveIsLoading(false));
    //
   // console.log('responseNEW',response)

    return response
  } catch (error) {
   // 
    thunk.dispatch(saveIsLoading(false));

    console.log('getAccountHistorySlice error', error.response);
    throw error;
  }
},
);
export const getEZAccountHistorySlice = createAsyncThunk(
  API_URL.GetCustomerEZAllTransaction,
async (data, thunk) => {
  try {
    const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
   // 
    thunk.dispatch(saveIsLoading(true));
    //  const response = await requestGet(`${API_URL.GetCustomerEZAllTransaction}${'?UserID='}${data.UserID}${'&AccountId='}${data.AccountId}${'&CusId='}${data.CusId}`);
    const response = await requestPost(`${API_URL.GetCustomerEZAllTransaction}`, data,true,extraHeaders);

    thunk.dispatch(saveEZAccountHistory(response))
   //  
    thunk.dispatch(saveIsLoading(false));
    //
     //
     console.log('response',response)

    return response
  } catch (error) {
     //
     thunk.dispatch(saveIsLoading(false));

    console.log('getAllDashboardDataSlice error', error.response);
    throw error;
  }
},
);
//
export const getAllCountrySlice = createAsyncThunk(
  API_URL.COUNTRY_mycountrylist,
async (data, thunk) => {
  try {
    // thunk.dispatch(saveIsLoading(true));

    const response = await requestPost(API_URL.COUNTRY_mycountrylist,data,true);
    console.log("response",response)
    thunk.dispatch(saveAllCountry(response))
    // thunk.dispatch(saveIsLoading(false));

    return response?.data
  } catch (error) {
    // thunk.dispatch(saveIsLoading(false));

    console.log('getAllCountrySlice error', error.response);
    throw error;
  }
},
);

export const getTransactionHistorySlice = createAsyncThunk(
  API_URL.GetAllOnlineTransaction3,
async (data, thunk) => {
  try {
   //
   const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

  const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
     thunk.dispatch(saveIsLoading(true));
     const response = await requestGet(`${API_URL.GetAllOnlineTransaction3}${data.Id}`,extraHeaders);

   // const response = await requestGet(`${API_URL.GetCustomerAllTransaction}${data.Id}`);
    thunk.dispatch(saveTransactionHistory(response.data))
      thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response?.data
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('getAllDashboardDataSlice error', error.response);
    throw error;
  }
},
);




export const getRZAccountHistorySlice = createAsyncThunk(
  API_URL.GetCustomerRBAllTransaction,
async (data, thunk) => {
  try {
    const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
    //  thunk.dispatch(saveIsLoading(true));
   //  const response = await requestGet(`${API_URL.GetCustomerRBAllTransaction}${'?Id='}${data.Id}`);
     const response = await requestPost(`${API_URL.GetCustomerRBAllTransaction}`, data,true,extraHeaders);

    thunk.dispatch(saveRBAccountHistory(response))
      // thunk.dispatch(saveIsLoading(false));
   // console.log('response',response)

    return response
  } catch (error) {
    //  thunk.dispatch(saveIsLoading(false));

    console.log('getAllDashboardDataSlice error', error.response);
    throw error;
  }
},
);
//
export const getPBDSAccountHistorySlice = createAsyncThunk(
  API_URL.GetCustomerPBDSAllTransaction,
async (data, thunk) => {
  try {
    const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
    // thunk.dispatch(saveIsLoading(true));
    //  const response = await requestGet(`${API_URL.GetCustomerPBDSAllTransaction}${'?Id='}${data.Id}`);
     const response = await requestPost(`${API_URL.GetCustomerPBDSAllTransaction}`, data,true,extraHeaders);

   // const response = await requestGet(`${API_URL.GetCustomerAllTransaction}${data.Id}`);
    thunk.dispatch(savePBDSAccountHistory(response))
    //  thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response
  } catch (error) {
  //   thunk.dispatch(saveIsLoading(false));

    console.log('getAllDashboardDataSlice error', error.response);
    throw error;
  }
},
);


export const getSummaryAccountHistorySlice = createAsyncThunk(
  API_URL.GetSummaryAllTransaction,
async (data, thunk) => {
  try {
    const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
     thunk.dispatch(saveIsLoading(true));
     const response = await requestGet(`${API_URL.GetSummaryAllTransaction}${'?AccountId='}${data.AccountId}${'&CusId='}${data.CusId}`,extraHeaders);

    thunk.dispatch(saveSummaryAccountHistory(response.data))
      thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response?.data
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('getAllDashboardDataSlice error', error.response);
    throw error;
  }
},
);


export const getPOCDSAccountHistorySlice = createAsyncThunk(
  API_URL.GetCustomerPOCDSAllTransaction,
async (data, thunk) => {
  try {
    const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

   const extraHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
     thunk.dispatch(saveIsLoading(true));
     const response = await requestGet(`${API_URL.GetCustomerPOCDSAllTransaction}${'?CustomerId='}${data.Id}`,extraHeaders);

    thunk.dispatch(savePOCDSAccountHistory(response.data))
      thunk.dispatch(saveIsLoading(false));
    console.log('response',response)

    return response?.data
  } catch (error) {
     thunk.dispatch(saveIsLoading(false));

    console.log('getAllDashboardDataSlice error', error.response);
    throw error;
  }
},
);


export const SubscriptionValueSlice = createAsyncThunk(
  API_URL.SubscriptionGetPayment,
  async (data, thunk) => {
    try {
     // thunk.dispatch(saveIsLoading(true));
     const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)

     const extraHeaders = {
      Authorization: `Bearer ${accessToken}`,
    };
      const response = await requestGet(`${API_URL.SubscriptionGetPayment}${data.id}`,extraHeaders);
     // thunk.dispatch(saveIsLoading(false));
      console.log('response',response)

      thunk.dispatch(saveAllSubscriptions(response?.data))

      return response;
    } catch (error) {
    //  thunk.dispatch(saveIsLoading(false));

      console.log('ResetPasswordSlice error', error);
      utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);
export const DeleteMyInvoiceSlice = createAsyncThunk(
  API_URL.INVOICEDELETE,
  async (data, thunk) => {
    try {    
      thunk.dispatch(saveIsLoading(true));
      console.log('data error', data);
      // const response = await requestGet(`${API_URL.GetCustomerPOCDSAllTransaction}${'?CustomerId='}${data.Id}`,extraHeaders);

      const response = await requestPost(`${API_URL.INVOICEDELETE}${'WrNumber='}${data.WrNumber}${'&UserId='}${data.UserId}${'&delReason='}${data.delReason}`, data,true);
      // const response = await requestGet(`${API_URL.INVOICEDELETE}${data.senderId}/${data.recipientId}/${data.productId}`);
      thunk.dispatch(saveIsLoading(false));

      return response;
    } catch (error) {
      console.log('DeleteMyInvoiceSlice error', error);
      thunk.dispatch(saveIsLoading(false));

      utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);

export const RegisterEZONESLICE = createAsyncThunk(
  API_URL.LOGINEZONEACC,
  async (data, thunk) => {
    try {
      thunk.dispatch(saveIsLoading(true));
      const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
      const extraHeaders = {
        Authorization: `Bearer ${accessToken}`,
      };
      const response = await requestPost(API_URL.LOGINEZONEACC, data,true,extraHeaders);
         
      let jsonObject;
      try {
        jsonObject = JSON.parse(response.data);
      } catch (e) {
        console.error("Parsing error:", e);
      }
      console.log('jsonObject res==', jsonObject);
      


      thunk.dispatch(saveEzoneInvoices(jsonObject))
      console.log('response.data',jsonObject)

      thunk.dispatch(saveIsLoading(false));
      return response.data;
    } catch (error) {
      thunk.dispatch(saveIsLoading(false));
   
     console.log('RegisterEZONESLICE error', error);
         
            console.log('RegisterEZONESLICE error.response.data.message', error.response.data.message);

     utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);

// export const getAllRelatedSlice = createAsyncThunk(
//   API_URL.Viewrelatedadds,
// async (data, thunk) => {
//   try {
//     thunk.dispatch(saveIsLoading(true));
//     ////console.log("URL",API_URL.Viewrelatedadds)
//     const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
//     const extraHeaders = {
//       Authorization: `Bearer ${accessToken}`,
//     };
//    // console.log("URL",`${API_URL.Viewrelatedadds}${data}`)
//     const response = await requestGet(`${API_URL.Viewrelatedadds}${data}`,extraHeaders);

//     thunk.dispatch(saveAllrelatedProducts(response?.data))
//     thunk.dispatch(saveIsLoading(false));

//     return response?.data
//   } catch (error) {
//     thunk.dispatch(saveIsLoading(false));

//     console.log('getAllRelatedSlice error', error);
//     throw error;
//   }
// },
// );
// export const getAllFavSlice = createAsyncThunk(
//   API_URL.PRODUCT_MYFAVPOST,
// async (data, thunk) => {
//   try {
//     thunk.dispatch(saveIsLoading(true));
//     const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
//     const extraHeaders = {
//       Authorization: `Bearer ${accessToken}`,
//     };
//     console.log("URL",`${API_URL.PRODUCT_MYFAVPOST}`)
//     const response = await requestGet(`${API_URL.PRODUCT_MYFAVPOST}`,extraHeaders);

//     thunk.dispatch(saveAllfavProducts(response?.data))
//     thunk.dispatch(saveIsLoading(false));

//     return response?.data
//   } catch (error) {
//     thunk.dispatch(saveIsLoading(false));

//     console.log('getAllRelatedSlice error', error);
//     throw error;
//   }
// },
// );

// export const GetBalanceSummarySlice = createAsyncThunk(
//   API_URL.PRICE_SUMMARY,
//   async (data, thunk) => {
//     try {
//       const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
//       const extraHeaders = {
//         Authorization: `Bearer ${accessToken}`,
//       };
//       const response = await requestPost(`${API_URL.PRICE_SUMMARY}${'categoryId='}${data.categoryId}${'&featured='}${data.featured}`, data,true,extraHeaders);
//       thunk.dispatch(saveProductsummary(response?.data))

//       console.log('response',response)
//       return response;
//     } catch (error) { 
//      console.log('GetBalanceSummarySlice error', error);
//             // 
//             console.log('GetBalanceSummarySlice error.response.data.message', error.response.data.message);

//      utillsJs.errorAlert('',error.response.data.message)
//       throw error;
//     }
//   },
// );
// export const CouponAppliedSlice = createAsyncThunk(
//   API_URL.COUPONCHECK,
//   async (data, thunk) => {
//     try {
//       thunk.dispatch(saveIsLoading(true));

//       const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
//       const extraHeaders = {
//         Authorization: `Bearer ${accessToken}`,
//       };
//       const response = await requestPost(`${API_URL.COUPONCHECK}${'coupon='}${data.coupon}`, data,true,extraHeaders);
//       // thunk.dispatch(saveProductsummary(response?.data))
//       thunk.dispatch(saveIsLoading(false));

//       console.log('response',response)
//       return response;
//     } catch (error) { 
//      console.log('CouponAppliedSlice error', error);
//             //  
//                thunk.dispatch(saveIsLoading(false));

//     console.log('CouponAppliedSlice error.response.data.message', error.response.data.message);

//      utillsJs.errorAlert('',error.response.data.message)
//       throw error;
//     }
//   },
// );

// export const ReportUserSlice = createAsyncThunk(
//   API_URL.PRODUCTREPORT,
//   async (data, thunk) => {
//     try {
//       thunk.dispatch(saveIsLoading(true));

//       const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
//       const extraHeaders = {
//         Authorization: `Bearer ${accessToken}`,
//       };
//       const response = await requestPost(`${API_URL.PRODUCTREPORT}${'?productId='}${data.productId}${'&description='}${data.description}`, data,true,extraHeaders);
//       // thunk.dispatch(saveProductsummary(response?.data))
//       thunk.dispatch(saveIsLoading(false));

//       console.log('response',response)
//       return response;
//     } catch (error) { 
//             //  
//               //  thunk.dispatch(saveIsLoading(false));


//      utillsJs.errorAlert('',error.response.data.message)
//       throw error;
//     }
//   },
// );
// export const ReportUserSlice1 = createAsyncThunk(
//   API_URL.USERREPORT,
//   async (data, thunk) => {
//     try {
//       thunk.dispatch(saveIsLoading(true));

//       const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
//       const extraHeaders = {
//         Authorization: `Bearer ${accessToken}`,
//       };
//       const response = await requestPost(`${API_URL.USERREPORT}${'?userId='}${data.userId}${'&description='}${data.description}`, data,true,extraHeaders);
//       // thunk.dispatch(saveProductsummary(response?.data))
//       thunk.dispatch(saveIsLoading(false));
//       console.log('response',response)
//       return response;
//     } catch (error) { 
//             //  
//               //  thunk.dispatch(saveIsLoading(false));


//      utillsJs.errorAlert('',error.response.data.message)
//       throw error;
//     }
//   },
// );
// export const BlockUserSlice = createAsyncThunk(
//   API_URL.BLOCKUSER,
//   async (data, thunk) => {
//     try {
//       thunk.dispatch(saveIsLoading(true));

//       const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
//       const extraHeaders = {
//         Authorization: `Bearer ${accessToken}`,
//       };
//       const response = await requestPost(`${API_URL.BLOCKUSER}${'?blockId='}${data.blockId}${'&status='}${data.status}`, data,true,extraHeaders);
//       // thunk.dispatch(saveProductsummary(response?.data))
//       thunk.dispatch(saveIsLoading(false));

//       console.log('response',response)
//       return response;
//     } catch (error) { 
//      console.log('BlockUserSlice error', error);
//             //  
//               //  thunk.dispatch(saveIsLoading(false));

//     console.log('BlockUserSlice error.response.data.message', error.response.data.message);

//      utillsJs.errorAlert('',error.response.data.message)
//       throw error;
//     }
//   },
// );
// export const getAllstatementSlice = createAsyncThunk(
//   API_URL.STATEMENT,
// async (data, thunk) => {
//   try {
//     const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
//     const extraHeaders = {
//       Authorization: `Bearer ${accessToken}`,
//     };
//     console.log("URL",`${API_URL.STATEMENT}`)
//     const response = await requestGet(`${API_URL.STATEMENT}`,extraHeaders);

//     thunk.dispatch(saveAllStatement(response?.data))

//     return response?.data
//   } catch (error) {

//     console.log('getAllstatementSlice error', error);
//     throw error;
//   }
// },
// );
// export const getAllstateSlice = createAsyncThunk(
//   API_URL.STATELIST,
// async (data, thunk) => {
//   try {
//     const countryno = await AsyncStorage.getItem('CountryNo')

//     console.log("URL",`${API_URL.STATELIST}${countryno}`)

//     const response = await requestGet(`${API_URL.STATELIST}${countryno}`);

//     thunk.dispatch(saveAllStates(response?.data))

//     return response?.data
//   } catch (error) {

//     console.log('getAllstateSlice error', error);
//     throw error;
//   }
// },
// );

// export const getCategoryproductsSlice = createAsyncThunk(
//   API_URL.CATEGORY_PRODUCT,
// async (data, thunk) => {
//   try {
//     thunk.dispatch(saveIsLoading(true));
//     const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
//     const extraHeaders = {
//       Authorization: `Bearer ${accessToken}`,
//     };
//     console.log(`${API_URL.CATEGORY_PRODUCT}${'name='}${data.name}${'&categoryid='}${data.categoryid}${'&location='}${data.location}${'&minprice='}${data.minprice}${'&maxprice='}${data.maxprice}${'&subcategoryid='}${data.subcategoryid}${'&page='}${data.page}${'&size='}${data.size}${'&country='}${data.country}`)
//     const response = await requestGet(`${API_URL.CATEGORY_PRODUCT}${'name='}${data.name}${'&categoryid='}${data.categoryid}${'&location='}${data.location}${'&minprice='}${data.minprice}${'&maxprice='}${data.maxprice}${'&subcategoryid='}${data.subcategoryid}${'&page='}${data.page}${'&size='}${data.size}${'&country='}${data.country}`,extraHeaders);
//     thunk.dispatch(saveAllDashBordDataProduct(response?.data))
//     thunk.dispatch(saveIsLoading(false));

//     return response?.data
//   } catch (error) {
//     thunk.dispatch(saveIsLoading(false));

//     console.log('CATEGORY_PRODUCT error', error);
//     throw error;
//   }
// },
// );
// export const getCategoryproductsSlice = createAsyncThunk(
//   API_URL.CATEGORY_PRODUCT,
// async (data, thunk) => {
//   try {
//     thunk.dispatch(saveIsLoading(true));
//     const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
//     const extraHeaders = {
//       Authorization: `Bearer ${accessToken}`,
//     };
//     //      const response = await requestPost(`${API_URL.BLOCKUSER}${'?blockId='}${data.blockId}${'&status='}${data.status}`, data,true,extraHeaders);
// console.log(data)
//     const response = await requestPost(`${API_URL.CATEGORY_PRODUCT}`,data,true,extraHeaders);
//     thunk.dispatch(saveAllCategoryProduct(response?.data))
//     thunk.dispatch(saveIsLoading(false));

//     return response?.data
//   } catch (error) {
//     thunk.dispatch(saveIsLoading(false));

//     console.log('CATEGORY_PRODUCT error', error);
//     throw error;
//   }
// },
// );

// export const getDashboardDataSlice = createAsyncThunk(
//   API_URL.CATEGORY_getrecommendations,
// async (data, thunk) => {
//   try {
   
//     const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
//         const extraHeaders = {
//           Authorization: `Bearer ${accessToken}`,
//         };
//         console.log("URL",`${API_URL.CATEGORY_getrecommendations}`)

//     const response = await requestGet(`${API_URL.CATEGORY_getrecommendations}${data}`,extraHeaders);//API_URL.CATEGORY_getrecommendations,extraHeaders);
//     thunk.dispatch(savegetrecommendations(response?.data))
//     thunk.dispatch(saveIsLoading(false));

//     return response?.data
//   } catch (error) {
//     console.log('getDashboardDataSlice error', error);
//     thunk.dispatch(saveIsLoading(false));

//     throw error;
//   }
// },
// );
// export const getSideMenuDataSlice = createAsyncThunk(
//   API_URL.SITENAV,
// async (data, thunk) => {
//   try {
//     // console.log(`${API_URL.CATEGORY_PRODUCT}${data}`)
//     thunk.dispatch(saveIsLoading(true));
//     const response = await requestGet(API_URL.SITENAV);
//     thunk.dispatch(savesitenav(response?.data))
//     thunk.dispatch(saveIsLoading(false));

//     return response?.data
//   } catch (error) {
//     console.log('getSideMenuDataSlice error', error);
//     thunk.dispatch(saveIsLoading(false));

//     throw error;
//   }
// },
// );
// export const getDynamicPostDataSlice = createAsyncThunk(
//   API_URL.DYNAMIC_CATEGORYDATA,
// async (data, thunk) => {
//   try {
//     thunk.dispatch(saveIsLoading(true));
//     const response = await requestGet(`${API_URL.DYNAMIC_CATEGORYDATA}${data}`);
//     //  console.log('response',response)
//     thunk.dispatch(saveDynamicPostCategories(response?.data))
//     thunk.dispatch(saveIsLoading(false));

//     return response?.data
//   } catch (error) {
//     thunk.dispatch(saveIsLoading(false));

//     console.log('DYNAMIC_CATEGORYDATA error', error);
//     throw error;
//   }
// },
// );
// export const ViewAllProducttSlice = createAsyncThunk(
//   API_URL.PRODUCT_viewall,
//   async (data, thunk) => {
//     try {    
//       thunk.dispatch(saveIsLoading(true));
//       const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
//       const extraHeaders = {
//         Authorization: `Bearer ${accessToken}`,
//       };
//       const response = await requestGet(`${API_URL.PRODUCT_viewall}${"title="}${data.title}${"&country="}${data.country}${"&page="}${data.page}${"&size="}${data.size}`,extraHeaders);
// //Allproducts
//       thunk.dispatch(saveViewAllProducts(response?.data))
//       thunk.dispatch(saveIsLoading(false));

//       return response;
//     } catch (error) {
//       console.log('ViewAllProducttSlice error', error);
//       thunk.dispatch(saveIsLoading(false));

//     //  utillsJs.errorAlert('',error.response.data.message)
//       throw error;
//     }
//   },
// );
// export const ViewAllChatMembersSlice = createAsyncThunk(
//   API_URL.CHATLISTMEMBERS,
//   async (data, thunk) => {
//     try {    
//      thunk.dispatch(saveIsLoading(true));
//       const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
//       const extraHeaders = {
//         Authorization: `Bearer ${accessToken}`,
//       };
//       const response = await requestGet(`${API_URL.CHATLISTMEMBERS}`,extraHeaders);
// //Allproducts
//       thunk.dispatch(saveViewAllChatMembers(response?.data))
//      thunk.dispatch(saveIsLoading(false));

//       return response;
//     } catch (error) {
//       console.log('ViewAllChatMembers error', error);
//       //thunk.dispatch(saveIsLoading(false));

//       utillsJs.errorAlert('',error.response.data.message)
//       throw error;
//     }
//   },
// );
// export const ViewAllCoinsSlice = createAsyncThunk(
//   API_URL.SAVEsubscription,
//   async (data, thunk) => {
//     try {    
//       ///thunk.dispatch(saveIsLoading(true));
//       // const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
//       // const extraHeaders = {
//       //   Authorization: `Bearer ${accessToken}`,
//       // };
//       const response = await requestPost(`${API_URL.SAVEsubscription}`, data,true);

//      // const response = await requestGet(`${API_URL.SAVEsubscription}`);
// //Allproducts
//       thunk.dispatch(saveAllCoins(response?.data))
//       thunk.dispatch(saveIsLoading(false));

//       return response;
//     } catch (error) {
//       console.log('ViewAllCoinsSlice error', error);
//       thunk.dispatch(saveIsLoading(false));

//       utillsJs.errorAlert('',error.response.data.message)
//       throw error;
//     }
//   },
// );
// export const ViewAllSubscriptionSlice = createAsyncThunk(
//   API_URL.SUBSCRIPTION,
//   async (data, thunk) => {
//     try {    
//       ///thunk.dispatch(saveIsLoading(true));
//       const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
//       const extraHeaders = {
//         Authorization: `Bearer ${accessToken}`,
//       };
//       const response = await requestGet(`${API_URL.SUBSCRIPTION}`,extraHeaders);

   
//       thunk.dispatch(saveAllSubscriptions(response?.data))
//       thunk.dispatch(saveIsLoading(false));

//       return response;
//     } catch (error) {
//       console.log('ViewAllSubscriptionSlice error', error);
//       thunk.dispatch(saveIsLoading(false));

//       utillsJs.errorAlert('',error.response.data.message)
//       throw error;
//     }
//   },
// );
// export const ViewBuyChatMembersSlice = createAsyncThunk(
//   API_URL.CHATLISTMEMBERSBUY,
//   async (data, thunk) => {
//     try {    
//       thunk.dispatch(saveIsLoading(true));
//       const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
//       const extraHeaders = {
//         Authorization: `Bearer ${accessToken}`,
//       };
//       const response = await requestGet(`${API_URL.CHATLISTMEMBERSBUY}`,extraHeaders);
// //Allproducts
//       thunk.dispatch(saveViewBuyChatMembers(response?.data))
//       thunk.dispatch(saveIsLoading(false));

//       return response;
//     } catch (error) {
//       console.log('ViewAllChatMembers error', error);
//       thunk.dispatch(saveIsLoading(false));

//       utillsJs.errorAlert('',error.response.data.message)
//       throw error;
//     }
//   },
// );
// export const ViewSellChatMembersSlice = createAsyncThunk(
//   API_URL.CHATLISTMEMBERSSELL,
//   async (data, thunk) => {
//     try {    
//       thunk.dispatch(saveIsLoading(true));
//       const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
//       const extraHeaders = {
//         Authorization: `Bearer ${accessToken}`,
//       };
//       const response = await requestGet(`${API_URL.CHATLISTMEMBERSSELL}`,extraHeaders);
// //Allproducts
//       thunk.dispatch(saveViewSellChatMembers(response?.data))
//       thunk.dispatch(saveIsLoading(false));

//       return response;
//     } catch (error) {
//       console.log('ViewAllChatMembers error', error);
//       thunk.dispatch(saveIsLoading(false));

//       utillsJs.errorAlert('',error.response.data.message)
//       throw error;
//     }
//   },
// );
// export const ViewMyProducttSlice = createAsyncThunk(
//   API_URL.PRODUCT_MYPOST,
//   async (data, thunk) => {
//     try {    
//       thunk.dispatch(saveIsLoading(true));

//       const response = await requestGet(`${API_URL.PRODUCT_MYPOST}${data}`);

//       thunk.dispatch(saveAllProducts(response?.data))
//       thunk.dispatch(saveIsLoading(false));

//       return response;
//     } catch (error) {
//       console.log('ViewMyProducttSlice error', error);
//       thunk.dispatch(saveIsLoading(false));

//      // utillsJs.errorAlert('',error.response.data.message)
//       throw error;
//     }
//   },
// );
// //ADMINCHATMESSAGES
// export const ViewAdminChatSlice = createAsyncThunk(
//   API_URL.ADMINCHATMESSAGES,
//   async (data, thunk) => {
//     try {    
//       thunk.dispatch(saveIsLoading(true));
//       // console.log('data error', data);
      
//       const response = await requestGet(`${API_URL.ADMINCHATMESSAGES}${data.recipientId}/${data.senderId}`);

//       thunk.dispatch(saveAllAdminPreChat(response?.data))
//       thunk.dispatch(saveIsLoading(false));

//       return response;
//     } catch (error) {
//       console.log('ViewMyChatSlice error', error);
//       thunk.dispatch(saveIsLoading(false));

//       utillsJs.errorAlert('',error.response.data.message)
//       throw error;
//     }
//   },
// );
// export const ViewAdminDetailsSlice = createAsyncThunk(
//   API_URL.ADMINDETAILS,
//   async (data, thunk) => {
//     try {    
//       thunk.dispatch(saveIsLoading(true));
//       console.log('data error', data);
//       const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
//       const extraHeaders = {
//         Authorization: `Bearer ${accessToken}`,
//       };
//       const response = await requestGet(`${API_URL.ADMINDETAILS}`,extraHeaders);

//       thunk.dispatch(saveIsLoading(false));

//       return response;
//     } catch (error) {
//       console.log('ViewAdminChatSlice error', error);
//       thunk.dispatch(saveIsLoading(false));

//       utillsJs.errorAlert('',error.response.data.message)
//       throw error;
//     }
//   },
// );
// export const ViewMyChatSlice = createAsyncThunk(
//   API_URL.CHATMESSAGES,
//   async (data, thunk) => {
//     try {    
//       thunk.dispatch(saveIsLoading(true));
//       console.log('data error', data);

//       const response = await requestGet(`${API_URL.CHATMESSAGES}${data.recipientId}/${data.senderId}/${data.productId}`);

//       thunk.dispatch(saveAllPreChat(response?.data))
//       thunk.dispatch(saveIsLoading(false));

//       return response;
//     } catch (error) {
//       console.log('ViewMyChatSlice error', error);
//       thunk.dispatch(saveIsLoading(false));

//       utillsJs.errorAlert('',error.response.data.message)
//       throw error;
//     }
//   },
// );


// export const ViewlastmessagesSlice = createAsyncThunk(
//   API_URL.CHATMESSAGES,
//   async (data, thunk) => {
//     try {    
//       thunk.dispatch(saveIsLoading(true));
//       console.log('data', data);

//       const response = await requestGet(`${API_URL.CHATMESSAGES}${data.senderId}/${data.recipientId}/count`);
//       // console.log('ViewMyChatSlice response', response);

//       thunk.dispatch(saveLastChat(response?.data))
//       thunk.dispatch(saveIsLoading(false));

//       return response;
//     } catch (error) {
//       console.log('ViewMyChatSlice error', error);
//       thunk.dispatch(saveIsLoading(false));

//       utillsJs.errorAlert('',error.response.data.message)
//       throw error;
//     }
//   },
// );
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    saveIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    saveAllDashBordData: (state, action) => {
      state.AllDashBoardList = action.payload;
    },
    saveAllAddressData: (state, action) => {
      state.AllAddressList = action.payload;
    },
    saveAllCountry: (state, action) => {
      state.AllCountries = action.payload;
    },
    saveAllCategoryProduct: (state, action) => {
      state.AllCategriesproduct = action.payload;
    },
    saveDynamicPostCategories: (state, action) => {
      state.DynamicPostCategries = action.payload;
    },
    savegetrecommendations: (state, action) => {
      state.SavegetrecommendationsList = action.payload;
    },
    saveAllProducts: (state, action) => {
      state.MyAddsList = action.payload;
    },
    saveAllPreChat: (state, action) => {
      state.MyPreChat = action.payload;
    },
    saveAllAdminPreChat: (state, action) => {
      state.MyAdminChat = action.payload;
    },
    saveLastChat: (state, action) => {
      state.MyLastChat = action.payload;
    },
    saveViewAllProducts: (state, action) => {
      state.Allproducts = action.payload;
    },
    saveViewAllChatMembers: (state, action) => {
      state.AllChatsMembers = action.payload;
    },
    saveViewBuyChatMembers: (state, action) => {
      state.AllBuyChatsMembers = action.payload;
    },
    saveViewSellChatMembers: (state, action) => {
      state.AllSellChatsMembers = action.payload;
    },
    saveAllrelatedProducts: (state, action) => {
      state.ReleatedAds = action.payload;
    },
    saveMyProducts: (state, action) => {
      state.ReleatedAds = action.payload;
    },
    saveAllfavProducts: (state, action) => {
      state.MyFavAddsList = action.payload;
    },
    saveAllStatement: (state, action) => {
      state.MyStatementList = action.payload;
    },
    saveAllStates: (state, action) => {
      state.MyStateList = action.payload;
    },
    savesitenav: (state, action) => {
      state.sitenavList = action.payload;
    },
    saveProductsummary: (state, action) => {
      state.MyPostSummary = action.payload;
    },
    saveAllCoins: (state, action) => {
      state.MyCoinsList = action.payload;
    },
    saveAllSubscriptions: (state, action) => {
      state.MySubscriptionsList = action.payload;
    },
    savePBDSDetails: (state, action) => {
      state.PBDSDetails = action.payload;
    },
    saveRentalBoxDetails: (state, action) => {
      state.RentalBoxDetails = action.payload;
    },
    saveCostumerDetails: (state, action) => {
      state.CostumerDetails = action.payload;
    },
    saveUserDetails: (state, action) => {
      state.UserSumDetails = action.payload;
    },
    saveEZCostumerDetails: (state, action) => {
      state.EZCostumerDetails = action.payload;
    },
    savePOCDSCostumerDetails: (state, action) => {
      state.POCDSCostumerDetails = action.payload;
    },
    savePBDSCostumerDetails: (state, action) => {
      state.PBDSCostumerDetails = action.payload;
    },
    saveServiceDetails: (state, action) => {
      state.ServiceDetails = action.payload;
    },
    saveAccountHistory: (state, action) => {
      state.AccountHistory = action.payload;
    },
    saveTransactionHistory: (state, action) => {
      state.TransactionHistory = action.payload;
    },
    saveEZAccountHistory: (state, action) => {
      state.EZAccountHistory = action.payload;
    },
     saveRBCostumerDetails: (state, action) => {
      state.RBCostumerDetails = action.payload;
    },
    saveMyCartList: (state, action) => {
      state.MyCartList = action.payload;
    },
    saveRBAccountHistory: (state, action) => {
      state.RBAccountHistory = action.payload;
    },
    savePOCDSAccountHistory: (state, action) => {
      state.POCDSAccountHistory = action.payload;
    },
    savePBDSAccountHistory: (state, action) => {
      state.PBDSAccountHistory = action.payload;
    },
    saveSummaryAccountHistory: (state, action) => {
      state.SummaryAccountHistory = action.payload;
    },
    saveEzoneInvoices: (state, action) => {
      state.EzoneInvoices = action.payload;
    },
  },
});
export const {saveSummaryAccountHistory,savePBDSCostumerDetails,saveEZAccountHistory,saveRBAccountHistory,savePBDSAccountHistory,savePOCDSAccountHistory,savePOCDSCostumerDetails,saveMyCartList,saveRBCostumerDetails,saveProductsummary,saveEZCostumerDetails,saveServiceDetails,saveCostumerDetails,saveUserDetails,saveAccountHistory,saveTransactionHistory,saveRentalBoxDetails,saveAllCoins,savePBDSDetails,saveAllSubscriptions,saveAllStates,saveViewAllProducts,saveAllStatement,saveLastChat,saveViewAllChatMembers,saveViewBuyChatMembers,saveViewSellChatMembers,saveAllfavProducts,saveMyProducts,saveIsLoading,saveAllrelatedProducts,saveAllAddressData,saveAllDashBordData,saveAllCountry,saveAllCategoryProduct,saveDynamicPostCategories,saveAllProducts,saveAllPreChat,saveAllAdminPreChat,savegetrecommendations,savesitenav,saveEzoneInvoices} = categorySlice.actions;
export default categorySlice.reducer;

//MyAddsList//AllCountries

