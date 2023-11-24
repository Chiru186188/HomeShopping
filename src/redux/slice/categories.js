import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API, requestGet, requestPost, requestPostUrlEncoded} from '../../api';
import { API_URL, CONSTANTS } from '../../constants/them';
import utillsJs from '../../utills';
import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState = {
  AllCategries: [],
  AllCategriesproduct: [],
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

  SaveSubscriptionPyments: [],

  isLoading: false,
};

export const getAllCategorySlice = createAsyncThunk(
    API_URL.CATEGORY_ALL,
  async (data, thunk) => {
    try {
      // thunk.dispatch(saveIsLoading(true));
      const response = await requestGet(API_URL.CATEGORY_ALL, data);
      thunk.dispatch(saveAllCategory(response?.data))
      // thunk.dispatch(saveIsLoading(false));

      return response?.data
    } catch (error) {
      // thunk.dispatch(saveIsLoading(false));

      console.log('getAllCategorySlice error', error.response);
      throw error;
    }
  },
);
export const getAllCountrySlice = createAsyncThunk(
  API_URL.COUNTRY_mycountrylist,
async (data, thunk) => {
  try {
    // thunk.dispatch(saveIsLoading(true));
    const response = await requestGet(API_URL.COUNTRY_mycountrylist,data);
    thunk.dispatch(saveAllCountry(response?.data))
    // thunk.dispatch(saveIsLoading(false));

    return response?.data
  } catch (error) {
    // thunk.dispatch(saveIsLoading(false));

    console.log('getAllCountrySlice error', error.response);
    throw error;
  }
},
);

export const SubscriptionValueSlice = createAsyncThunk(
  API_URL.SubscriptionGetPayment,
  async (data, thunk) => {
    try {
      thunk.dispatch(saveIsLoading(true));
      const response = await requestGet(`${API_URL.SubscriptionGetPayment}${data.id}`);
      thunk.dispatch(saveIsLoading(false));
      console.log('response',response)

      thunk.dispatch(saveAllSubscriptions(response?.data))

      return response;
    } catch (error) {
      thunk.dispatch(saveIsLoading(false));

      console.log('ResetPasswordSlice error', error);
      utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);


export const getAllRelatedSlice = createAsyncThunk(
  API_URL.Viewrelatedadds,
async (data, thunk) => {
  try {
    thunk.dispatch(saveIsLoading(true));
    //console.log("URL",API_URL.Viewrelatedadds)
    const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
    const extraHeaders = {
      Authorization: `Bearer ${accessToken}`,
    };
   // console.log("URL",`${API_URL.Viewrelatedadds}${data}`)
    const response = await requestGet(`${API_URL.Viewrelatedadds}${data}`,extraHeaders);

    thunk.dispatch(saveAllrelatedProducts(response?.data))
    thunk.dispatch(saveIsLoading(false));

    return response?.data
  } catch (error) {
    thunk.dispatch(saveIsLoading(false));

    console.log('getAllRelatedSlice error', error);
    throw error;
  }
},
);
export const getAllFavSlice = createAsyncThunk(
  API_URL.PRODUCT_MYFAVPOST,
async (data, thunk) => {
  try {
    thunk.dispatch(saveIsLoading(true));
    const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
    const extraHeaders = {
      Authorization: `Bearer ${accessToken}`,
    };
    console.log("URL",`${API_URL.PRODUCT_MYFAVPOST}`)
    const response = await requestGet(`${API_URL.PRODUCT_MYFAVPOST}`,extraHeaders);

    thunk.dispatch(saveAllfavProducts(response?.data))
    thunk.dispatch(saveIsLoading(false));

    return response?.data
  } catch (error) {
    thunk.dispatch(saveIsLoading(false));

    console.log('getAllRelatedSlice error', error);
    throw error;
  }
},
);

export const GetBalanceSummarySlice = createAsyncThunk(
  API_URL.PRICE_SUMMARY,
  async (data, thunk) => {
    try {
      const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
      const extraHeaders = {
        Authorization: `Bearer ${accessToken}`,
      };
      const response = await requestPost(`${API_URL.PRICE_SUMMARY}${'categoryId='}${data.categoryId}${'&featured='}${data.featured}`, data,true,extraHeaders);
      thunk.dispatch(saveProductsummary(response?.data))

      console.log('response',response)
      return response;
    } catch (error) { 
     console.log('GetBalanceSummarySlice error', error);
            // 
            console.log('GetBalanceSummarySlice error.response.data.message', error.response.data.message);

     utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);
export const CouponAppliedSlice = createAsyncThunk(
  API_URL.COUPONCHECK,
  async (data, thunk) => {
    try {
      thunk.dispatch(saveIsLoading(true));

      const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
      const extraHeaders = {
        Authorization: `Bearer ${accessToken}`,
      };
      const response = await requestPost(`${API_URL.COUPONCHECK}${'coupon='}${data.coupon}`, data,true,extraHeaders);
      // thunk.dispatch(saveProductsummary(response?.data))
      thunk.dispatch(saveIsLoading(false));

      console.log('response',response)
      return response;
    } catch (error) { 
     console.log('CouponAppliedSlice error', error);
            //  
               thunk.dispatch(saveIsLoading(false));

    console.log('CouponAppliedSlice error.response.data.message', error.response.data.message);

     utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);

export const ReportUserSlice = createAsyncThunk(
  API_URL.PRODUCTREPORT,
  async (data, thunk) => {
    try {
      // thunk.dispatch(saveIsLoading(true));

      const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
      const extraHeaders = {
        Authorization: `Bearer ${accessToken}`,
      };
      const response = await requestPost(`${API_URL.PRODUCTREPORT}${'?productId='}${data.productId}${'&description='}${data.description}`, data,true,extraHeaders);
      // thunk.dispatch(saveProductsummary(response?.data))
      // thunk.dispatch(saveIsLoading(false));

      console.log('response',response)
      return response;
    } catch (error) { 
            //  
              //  thunk.dispatch(saveIsLoading(false));


     utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);
export const ReportUserSlice1 = createAsyncThunk(
  API_URL.USERREPORT,
  async (data, thunk) => {
    try {
      // thunk.dispatch(saveIsLoading(true));

      const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
      const extraHeaders = {
        Authorization: `Bearer ${accessToken}`,
      };
      const response = await requestPost(`${API_URL.USERREPORT}${'?userId='}${data.userId}${'&description='}${data.description}`, data,true,extraHeaders);
      // thunk.dispatch(saveProductsummary(response?.data))
      // thunk.dispatch(saveIsLoading(false));
      console.log('response',response)
      return response;
    } catch (error) { 
            //  
              //  thunk.dispatch(saveIsLoading(false));


     utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);
export const BlockUserSlice = createAsyncThunk(
  API_URL.BLOCKUSER,
  async (data, thunk) => {
    try {
      // thunk.dispatch(saveIsLoading(true));

      const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
      const extraHeaders = {
        Authorization: `Bearer ${accessToken}`,
      };
      const response = await requestPost(`${API_URL.BLOCKUSER}${'?blockId='}${data.blockId}${'&status='}${data.status}`, data,true,extraHeaders);
      // thunk.dispatch(saveProductsummary(response?.data))
      // thunk.dispatch(saveIsLoading(false));

      console.log('response',response)
      return response;
    } catch (error) { 
     console.log('BlockUserSlice error', error);
            //  
              //  thunk.dispatch(saveIsLoading(false));

    console.log('BlockUserSlice error.response.data.message', error.response.data.message);

     utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);
export const getAllstatementSlice = createAsyncThunk(
  API_URL.STATEMENT,
async (data, thunk) => {
  try {
    const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
    const extraHeaders = {
      Authorization: `Bearer ${accessToken}`,
    };
    console.log("URL",`${API_URL.STATEMENT}`)
    const response = await requestGet(`${API_URL.STATEMENT}`,extraHeaders);

    thunk.dispatch(saveAllStatement(response?.data))

    return response?.data
  } catch (error) {

    console.log('getAllstatementSlice error', error);
    throw error;
  }
},
);
export const getAllstateSlice = createAsyncThunk(
  API_URL.STATELIST,
async (data, thunk) => {
  try {
    const countryno = await AsyncStorage.getItem('CountryNo')

    console.log("URL",`${API_URL.STATELIST}${countryno}`)

    const response = await requestGet(`${API_URL.STATELIST}${countryno}`);

    thunk.dispatch(saveAllStates(response?.data))

    return response?.data
  } catch (error) {

    console.log('getAllstateSlice error', error);
    throw error;
  }
},
);

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
export const getCategoryproductsSlice = createAsyncThunk(
  API_URL.CATEGORY_PRODUCT,
async (data, thunk) => {
  try {
    thunk.dispatch(saveIsLoading(true));
    const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
    const extraHeaders = {
      Authorization: `Bearer ${accessToken}`,
    };
    //      const response = await requestPost(`${API_URL.BLOCKUSER}${'?blockId='}${data.blockId}${'&status='}${data.status}`, data,true,extraHeaders);
console.log(data)
    const response = await requestPost(`${API_URL.CATEGORY_PRODUCT}`,data,true,extraHeaders);
    thunk.dispatch(saveAllCategoryProduct(response?.data))
    thunk.dispatch(saveIsLoading(false));

    return response?.data
  } catch (error) {
    thunk.dispatch(saveIsLoading(false));

    console.log('CATEGORY_PRODUCT error', error);
    throw error;
  }
},
);

export const getDashboardDataSlice = createAsyncThunk(
  API_URL.CATEGORY_getrecommendations,
async (data, thunk) => {
  try {
   
    const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
        const extraHeaders = {
          Authorization: `Bearer ${accessToken}`,
        };
        console.log("URL",`${API_URL.CATEGORY_getrecommendations}`)

    const response = await requestGet(`${API_URL.CATEGORY_getrecommendations}${data}`,extraHeaders);//API_URL.CATEGORY_getrecommendations,extraHeaders);
    thunk.dispatch(savegetrecommendations(response?.data))
    // thunk.dispatch(saveIsLoading(false));

    return response?.data
  } catch (error) {
    console.log('getDashboardDataSlice error', error);
    // thunk.dispatch(saveIsLoading(false));

    throw error;
  }
},
);
export const getSideMenuDataSlice = createAsyncThunk(
  API_URL.SITENAV,
async (data, thunk) => {
  try {
    // console.log(`${API_URL.CATEGORY_PRODUCT}${data}`)
    // thunk.dispatch(saveIsLoading(true));
    const response = await requestGet(API_URL.SITENAV);
    thunk.dispatch(savesitenav(response?.data))
    // thunk.dispatch(saveIsLoading(false));

    return response?.data
  } catch (error) {
    console.log('getSideMenuDataSlice error', error);
    // thunk.dispatch(saveIsLoading(false));

    throw error;
  }
},
);
export const getDynamicPostDataSlice = createAsyncThunk(
  API_URL.DYNAMIC_CATEGORYDATA,
async (data, thunk) => {
  try {
    thunk.dispatch(saveIsLoading(true));
    const response = await requestGet(`${API_URL.DYNAMIC_CATEGORYDATA}${data}`);
    //  console.log('response',response)
    thunk.dispatch(saveDynamicPostCategories(response?.data))
    thunk.dispatch(saveIsLoading(false));

    return response?.data
  } catch (error) {
    thunk.dispatch(saveIsLoading(false));

    console.log('DYNAMIC_CATEGORYDATA error', error);
    throw error;
  }
},
);
export const ViewAllProducttSlice = createAsyncThunk(
  API_URL.PRODUCT_viewall,
  async (data, thunk) => {
    try {    
      thunk.dispatch(saveIsLoading(true));
      const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
      const extraHeaders = {
        Authorization: `Bearer ${accessToken}`,
      };
      const response = await requestGet(`${API_URL.PRODUCT_viewall}${"title="}${data.title}${"&country="}${data.country}${"&page="}${data.page}${"&size="}${data.size}`,extraHeaders);
//Allproducts
      thunk.dispatch(saveViewAllProducts(response?.data))
      thunk.dispatch(saveIsLoading(false));

      return response;
    } catch (error) {
      console.log('ViewAllProducttSlice error', error);
      thunk.dispatch(saveIsLoading(false));

    //  utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);
export const ViewAllChatMembersSlice = createAsyncThunk(
  API_URL.CHATLISTMEMBERS,
  async (data, thunk) => {
    try {    
     // thunk.dispatch(saveIsLoading(true));
      const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
      const extraHeaders = {
        Authorization: `Bearer ${accessToken}`,
      };
      const response = await requestGet(`${API_URL.CHATLISTMEMBERS}`,extraHeaders);
//Allproducts
      thunk.dispatch(saveViewAllChatMembers(response?.data))
     // thunk.dispatch(saveIsLoading(false));

      return response;
    } catch (error) {
      console.log('ViewAllChatMembers error', error);
      //thunk.dispatch(saveIsLoading(false));

      utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);
export const ViewAllCoinsSlice = createAsyncThunk(
  API_URL.SAVEsubscription,
  async (data, thunk) => {
    try {    
      ///thunk.dispatch(saveIsLoading(true));
      // const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
      // const extraHeaders = {
      //   Authorization: `Bearer ${accessToken}`,
      // };
      const response = await requestPost(`${API_URL.SAVEsubscription}`, data,true);

     // const response = await requestGet(`${API_URL.SAVEsubscription}`);
//Allproducts
      thunk.dispatch(saveAllCoins(response?.data))
      // thunk.dispatch(saveIsLoading(false));

      return response;
    } catch (error) {
      console.log('ViewAllCoinsSlice error', error);
      // thunk.dispatch(saveIsLoading(false));

      utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);
export const ViewAllSubscriptionSlice = createAsyncThunk(
  API_URL.SUBSCRIPTION,
  async (data, thunk) => {
    try {    
      ///thunk.dispatch(saveIsLoading(true));
      const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
      const extraHeaders = {
        Authorization: `Bearer ${accessToken}`,
      };
      const response = await requestGet(`${API_URL.SUBSCRIPTION}`,extraHeaders);

   
      thunk.dispatch(saveAllSubscriptions(response?.data))
      // thunk.dispatch(saveIsLoading(false));

      return response;
    } catch (error) {
      console.log('ViewAllSubscriptionSlice error', error);
      // thunk.dispatch(saveIsLoading(false));

      utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);
export const ViewBuyChatMembersSlice = createAsyncThunk(
  API_URL.CHATLISTMEMBERSBUY,
  async (data, thunk) => {
    try {    
      // thunk.dispatch(saveIsLoading(true));
      const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
      const extraHeaders = {
        Authorization: `Bearer ${accessToken}`,
      };
      const response = await requestGet(`${API_URL.CHATLISTMEMBERSBUY}`,extraHeaders);
//Allproducts
      thunk.dispatch(saveViewBuyChatMembers(response?.data))
      // thunk.dispatch(saveIsLoading(false));

      return response;
    } catch (error) {
      console.log('ViewAllChatMembers error', error);
      // thunk.dispatch(saveIsLoading(false));

      utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);
export const ViewSellChatMembersSlice = createAsyncThunk(
  API_URL.CHATLISTMEMBERSSELL,
  async (data, thunk) => {
    try {    
      // thunk.dispatch(saveIsLoading(true));
      const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
      const extraHeaders = {
        Authorization: `Bearer ${accessToken}`,
      };
      const response = await requestGet(`${API_URL.CHATLISTMEMBERSSELL}`,extraHeaders);
//Allproducts
      thunk.dispatch(saveViewSellChatMembers(response?.data))
      // thunk.dispatch(saveIsLoading(false));

      return response;
    } catch (error) {
      console.log('ViewAllChatMembers error', error);
      // thunk.dispatch(saveIsLoading(false));

      utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);
export const ViewMyProducttSlice = createAsyncThunk(
  API_URL.PRODUCT_MYPOST,
  async (data, thunk) => {
    try {    
      thunk.dispatch(saveIsLoading(true));

      const response = await requestGet(`${API_URL.PRODUCT_MYPOST}${data}`);

      thunk.dispatch(saveAllProducts(response?.data))
      thunk.dispatch(saveIsLoading(false));

      return response;
    } catch (error) {
      console.log('ViewMyProducttSlice error', error);
      thunk.dispatch(saveIsLoading(false));

     // utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);
//ADMINCHATMESSAGES
export const ViewAdminChatSlice = createAsyncThunk(
  API_URL.ADMINCHATMESSAGES,
  async (data, thunk) => {
    try {    
      // thunk.dispatch(saveIsLoading(true));
      // console.log('data error', data);
      
      const response = await requestGet(`${API_URL.ADMINCHATMESSAGES}${data.recipientId}/${data.senderId}`);

      thunk.dispatch(saveAllAdminPreChat(response?.data))
      // thunk.dispatch(saveIsLoading(false));

      return response;
    } catch (error) {
      console.log('ViewMyChatSlice error', error);
      // thunk.dispatch(saveIsLoading(false));

      utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);
export const ViewAdminDetailsSlice = createAsyncThunk(
  API_URL.ADMINDETAILS,
  async (data, thunk) => {
    try {    
      thunk.dispatch(saveIsLoading(true));
      console.log('data error', data);
      const accessToken = await AsyncStorage.getItem(CONSTANTS.AccessToken)
      const extraHeaders = {
        Authorization: `Bearer ${accessToken}`,
      };
      const response = await requestGet(`${API_URL.ADMINDETAILS}`,extraHeaders);

      thunk.dispatch(saveIsLoading(false));

      return response;
    } catch (error) {
      console.log('ViewAdminChatSlice error', error);
      thunk.dispatch(saveIsLoading(false));

      utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);
export const ViewMyChatSlice = createAsyncThunk(
  API_URL.CHATMESSAGES,
  async (data, thunk) => {
    try {    
      thunk.dispatch(saveIsLoading(true));
      console.log('data error', data);

      const response = await requestGet(`${API_URL.CHATMESSAGES}${data.recipientId}/${data.senderId}/${data.productId}`);

      thunk.dispatch(saveAllPreChat(response?.data))
      thunk.dispatch(saveIsLoading(false));

      return response;
    } catch (error) {
      console.log('ViewMyChatSlice error', error);
      thunk.dispatch(saveIsLoading(false));

      utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);
export const DeleteMyChatSlice = createAsyncThunk(
  API_URL.CHATDELETE,
  async (data, thunk) => {
    try {    
      thunk.dispatch(saveIsLoading(true));
      console.log('data error', data);
      const response = await requestGet(`${API_URL.CHATDELETE}${data.senderId}/${data.recipientId}/${data.productId}`);
      thunk.dispatch(saveIsLoading(false));

      return response;
    } catch (error) {
      console.log('DeleteMyChatSlice error', error);
      thunk.dispatch(saveIsLoading(false));

      utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);
export const ViewlastmessagesSlice = createAsyncThunk(
  API_URL.CHATMESSAGES,
  async (data, thunk) => {
    try {    
      // thunk.dispatch(saveIsLoading(true));
      console.log('data', data);

      const response = await requestGet(`${API_URL.CHATMESSAGES}${data.senderId}/${data.recipientId}/count`);
      // console.log('ViewMyChatSlice response', response);

      thunk.dispatch(saveLastChat(response?.data))
      // thunk.dispatch(saveIsLoading(false));

      return response;
    } catch (error) {
      console.log('ViewMyChatSlice error', error);
      // thunk.dispatch(saveIsLoading(false));

      utillsJs.errorAlert('',error.response.data.message)
      throw error;
    }
  },
);
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    saveIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    saveAllCategory: (state, action) => {
      state.AllCategries = action.payload;
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
  },
});
export const {saveProductsummary,saveAllCoins,saveAllSubscriptions,saveAllStates,saveViewAllProducts,saveAllStatement,saveLastChat,saveViewAllChatMembers,saveViewBuyChatMembers,saveViewSellChatMembers,saveAllfavProducts,saveMyProducts,saveIsLoading,saveAllrelatedProducts,saveAllCategory,saveAllCountry,saveAllCategoryProduct,saveDynamicPostCategories,saveAllProducts,saveAllPreChat,saveAllAdminPreChat,savegetrecommendations,savesitenav,} = categorySlice.actions;
export default categorySlice.reducer;

//MyAddsList//AllCountries

