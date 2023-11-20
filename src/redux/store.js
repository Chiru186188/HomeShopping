import {
  configureStore,
  createSerializableStateInvariantMiddleware,
} from '@reduxjs/toolkit';
import categoryReducer from './slice/categories';
import authReducer from './slice/auth';

const reducer = {
  auth: authReducer,
  category: categoryReducer,
};

export default configureStore({
  reducer: reducer,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
