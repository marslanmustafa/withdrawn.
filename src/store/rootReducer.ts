import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth';
import property from './property';

const rootReducer = combineReducers({
  authData: auth,
  propertyData: property,
  // other reducers...
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;