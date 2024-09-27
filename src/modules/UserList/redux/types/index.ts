import { User } from '@modules/UserDetail/redux/types';

export interface UserListState {
  users: User[];
  isLoading: boolean;
  hasError: boolean;
  error: unknown;
}

export enum UserListApiTags {
  GET_ALL_USERS = 'GET_ALL_USERS',
}
