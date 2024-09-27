import { AppText } from '@components/index';
import { useUserDetailActions } from '@modules/UserDetail/hooks/useUserDetailActions';
import { User } from '@modules/UserDetail/redux/types';
import {
  useUserListApiCalls,
  useUserListSelectors,
} from '@modules/UserList/hooks';
import { RoutesActions } from '@router/routes/actions';
import { RoutesNames } from '@router/routes/names';
import { separateNameAndSurname } from '@utils/index';
import React, { FC } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './UserListToRender.styles';

const NoUsers = () => <Text>No users</Text>;
const HeaderComponent = () => {
  return (
    <View style={styles.rowContainer}>
      <View style={[styles.rowSize, styles.borderBottom]}>
        <AppText size="h5" fontWeight="medium">
          First Name
        </AppText>
      </View>
      <View style={[styles.rowSize, styles.borderBottom]}>
        <AppText size="h5" fontWeight="medium">
          Last Name
        </AppText>
      </View>
    </View>
  );
};

const UserItem: FC<{ item: User }> = ({ item }) => {
  const { name, surname } = separateNameAndSurname(item.name);
  const { setUserDetailsAction } = useUserDetailActions();
  return (
    <TouchableOpacity
      testID="user-item"
      onPress={() => {
        setUserDetailsAction(item);
        RoutesActions.route(RoutesNames.Details, { userId: item.id });
      }}>
      <View style={styles.rowContainer}>
        <View style={[styles.rowSize]}>
          <AppText>{name}</AppText>
        </View>
        <View style={[styles.rowSize]}>
          <AppText>{surname}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const UserListToRender = () => {
  const { getApiUsers } = useUserListApiCalls();
  const { users, isLoading } = useUserListSelectors();
  return (
    <FlatList
      testID="user-list"
      keyExtractor={item => `${item.id.toString()}${item.name}`}
      data={users}
      ListEmptyComponent={<NoUsers />}
      ListHeaderComponent={<HeaderComponent />}
      renderItem={({ item }) => <UserItem item={item} />}
      refreshing={isLoading}
      onRefresh={() => getApiUsers()}
    />
  );
};
