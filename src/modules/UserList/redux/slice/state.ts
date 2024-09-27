import { UserListState } from '../types';

export const USER_LIST_INIT_STATE: UserListState = {
  users: [],
  isLoading: false,
  hasError: false,
  error: null,
};
