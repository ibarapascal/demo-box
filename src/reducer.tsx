import { combineReducers } from 'redux';

import { createReducer } from '@reduxjs/toolkit';

import { ErrorMessage } from './interface/model/Common';

export const errorMessageReducer = createReducer<{}>(
  {},
  {
    catchErrorMessage(state, action: { payload: ErrorMessage }) {
      return action.payload;
    },
  },
);

export const reducer = combineReducers({
  errorMessage: errorMessageReducer,
});
