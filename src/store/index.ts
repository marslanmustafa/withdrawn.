import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import property from './property'
const store = configureStore({
  reducer: { authData: auth, propertyData: property, },
});
export default store;


