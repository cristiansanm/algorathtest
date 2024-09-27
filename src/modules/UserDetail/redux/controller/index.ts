import { BASE_URL } from '@services/api';
import { createAsyncThunk } from '@services/redux/utils/asyncThunk';
import { UserDetailApiTags } from '../types';

export const getUserDetails = createAsyncThunk(
  UserDetailApiTags.GET_USER,
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/users/${userId}`);
      return response.json();
    } catch (error) {
      return rejectWithValue({ error });
    }
  },
);
