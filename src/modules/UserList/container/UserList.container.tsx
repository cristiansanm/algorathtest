/* eslint-disable react-hooks/exhaustive-deps */
import { Loader, ScreenContainer, Spacer } from '@components/index';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { UserListToRender } from '../components';
import { useUserListApiCalls, useUserListSelectors } from '../hooks';

const UserList = () => {
  const { getApiUsers } = useUserListApiCalls();

  const { hasError, isLoading } = useUserListSelectors();

  useEffect(() => {
    getApiUsers();
  }, []);

  if (isLoading) {
    return (
      <ScreenContainer hasHorizontalPadding>
        <Loader isFullScreen size={'large'} />
      </ScreenContainer>
    );
  }

  if (hasError) {
    return (
      <ScreenContainer hasHorizontalPadding>
        <Text testID="error-test">Error on request</Text>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer hasHorizontalPadding>
      <Spacer />
      <UserListToRender />
    </ScreenContainer>
  );
};

export default UserList;
