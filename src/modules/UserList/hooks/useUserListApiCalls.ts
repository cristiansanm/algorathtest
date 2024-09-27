import { useAppDispatch } from '@services/redux/basics';
import { getAllUsers } from '../redux/controller';

export const useUserListApiCalls = () => {
  const dispatch = useAppDispatch();
  const getApiUsers = () => {
    dispatch(getAllUsers());
  };

  return { getApiUsers };
};
