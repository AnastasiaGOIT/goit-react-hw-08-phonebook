import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './auth/auth-slice';
import { contactReducer } from './contacts/contactSlice';
import { filterReducer } from './filter/filterSlice';

export const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  auth: authSlice,
});
