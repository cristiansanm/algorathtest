import { RootState } from '@services/redux/basics'; // Adjust the import according to your store setup
import { createSelector } from 'reselect';

const selectUserListState = (state: RootState) => state.USER_LIST_REDUCER;

const selectUsers = createSelector(
  [selectUserListState],
  userListState => userListState.users,
);

const selectIsLoading = createSelector(
  [selectUserListState],
  userListState => userListState.isLoading,
);

const selectError = createSelector(
  [selectUserListState],
  userListState => userListState.error,
);

const selectHasError = createSelector(
  [selectUserListState],
  userListState => userListState.hasError,
);

export { selectError, selectHasError, selectIsLoading, selectUsers };
