import { useAppSelector } from '@services/redux/basics';
import { selectError, selectIsLoading, selectUser } from '../redux/selectors';

export const useUserDetailsSelector = () => {
  const user = useAppSelector(selectUser);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const hasError = useAppSelector(selectError);

  return {
    user,
    isLoading,
    error,
    hasError,
  };
};
