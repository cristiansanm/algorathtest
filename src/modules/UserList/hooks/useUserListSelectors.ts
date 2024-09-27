import { useAppSelector } from '@services/redux/basics';
import {
  selectError,
  selectHasError,
  selectIsLoading,
  selectUsers,
} from '../redux/selectors';

export const useUserListSelectors = () => {
  const users = useAppSelector(selectUsers);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const hasError = useAppSelector(selectHasError);

  return {
    users,
    isLoading,
    error,
    hasError,
  };
};
