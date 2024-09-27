import { useAppDispatch } from '@services/redux/basics';
import { clearUserDetails, setUserDetails } from '../redux/slice';
import { User } from '../redux/types';

export const useUserDetailActions = () => {
  const dispatch = useAppDispatch();

  const setUserDetailsAction = (user: User) => {
    dispatch(setUserDetails(user));
  };

  const clearUserDetailsAction = () => {
    dispatch(clearUserDetails());
  };

  return { setUserDetailsAction, clearUserDetailsAction };
};
