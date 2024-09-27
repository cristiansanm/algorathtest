import { createSlice } from '@reduxjs/toolkit';
import { ReducerNames } from '@services/redux/reducerNames';
import { getAllUsers } from '../controller';
import { USER_LIST_INIT_STATE } from './state';

const userListSlice = createSlice({
  name: ReducerNames.USER_LIST_REDUCER,
  initialState: USER_LIST_INIT_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllUsers.pending, state => {
        state.isLoading = true;
        state.hasError = false;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
        state.error = action.error;
      });
  },
});

export default userListSlice;
