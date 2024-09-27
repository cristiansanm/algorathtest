import { BASE_URL } from '@services/api';
import { createAsyncThunk } from '@services/redux/utils/asyncThunk';
import { UserListApiTags } from '../types';

export const getAllUsers = createAsyncThunk(
  UserListApiTags.GET_ALL_USERS,
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_URL + '/users');
      return response.json();
    } catch (error) {
      return rejectWithValue({ error });
    }
  },
);
