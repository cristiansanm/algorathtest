import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@services/redux/basics';

const selectUserDetailState = (state: RootState) => state.USER_DETAILS_REDUCER;

const selectUser = createSelector(
  [selectUserDetailState],
  userDetailState => userDetailState.user,
);

const selectIsLoading = createSelector(
  [selectUserDetailState],
  userDetailState => userDetailState.isLoading,
);

const selectError = createSelector(
  [selectUserDetailState],
  userDetailState => userDetailState.error,
);

const selectHasError = createSelector(
  [selectUserDetailState],
  userDetailState => userDetailState.hasError,
);

export { selectError, selectHasError, selectIsLoading, selectUser };
