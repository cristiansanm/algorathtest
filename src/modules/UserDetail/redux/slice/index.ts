import { createSlice } from '@reduxjs/toolkit';
import { ReducerNames } from '@services/redux/reducerNames';
import { getUserDetails } from '../controller';
import { USER_DETAIL_INIT_STATE } from './state';
import { UserDetailsActions } from '../actions';

const userDetailsSlice = createSlice({
  name: ReducerNames.USER_DETAILS_REDUCER,
  initialState: USER_DETAIL_INIT_STATE,
  reducers: UserDetailsActions,
  extraReducers: builder => {
    builder
      .addCase(getUserDetails.pending, state => {
        state.isLoading = true;
        state.hasError = false;
        state.error = null;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
        state.error = action.error;
      });
  },
});
export const { setUserDetails, clearUserDetails } = userDetailsSlice.actions;
export default userDetailsSlice;
