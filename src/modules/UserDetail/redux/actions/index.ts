import { PayloadAction } from '@reduxjs/toolkit';
import { User, UserDetailState } from '../types';

export const UserDetailsActions = {
  setUserDetails: (state: UserDetailState, action: PayloadAction<User>) => {
    state.user = action.payload;
  },
  clearUserDetails: (state: UserDetailState) => {
    state.user = null;
  },
};
