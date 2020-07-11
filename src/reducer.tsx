import { combineReducers } from 'redux';

import { createReducer } from '@reduxjs/toolkit';

import { ErrorMessage } from './interface/model/Common';
import { LocalStorage } from './interface/model/LocalStorage';

const errorMessageReducer = createReducer<{}>(
  {},
  {
    catchErrorMessage(state, action: { payload: ErrorMessage }) {
      return action.payload;
    },
  },
);

const localStorageReducer = createReducer<{}>(
  {},
  {
    storeLocalStorageInput(state, action) {
      return { ...state, [action.payload.item]: action.payload.value };
    },
    clearLocalStorageInput() {
      return new LocalStorage();
    },
  },
);

export const reducer = combineReducers({
  errorMessage: errorMessageReducer,
  localStorage: localStorageReducer,
});
