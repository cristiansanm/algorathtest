import userDetailsSlice from '@modules/UserDetail/redux/slice';
import userListSlice from '@modules/UserList/redux/slice';
import { combineReducers } from '@reduxjs/toolkit';
import { ReducerNames } from './reducerNames';

export const rootReducer = combineReducers({
  [ReducerNames.USER_LIST_REDUCER]: userListSlice.reducer,
  [ReducerNames.USER_DETAILS_REDUCER]: userDetailsSlice.reducer,
});
