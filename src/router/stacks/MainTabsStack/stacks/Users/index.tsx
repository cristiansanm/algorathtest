import UserDetail from '@modules/UserDetail/container';
import UserList from '@modules/UserList/container';
import { createStackNavigator } from '@react-navigation/stack';
import { RoutesNames } from '@router/routes/names';
import React from 'react';
const UserTabCreator = createStackNavigator();
const UsersScreens = () => {
  return (
    <UserTabCreator.Navigator initialRouteName={RoutesNames.Users}>
      <UserTabCreator.Screen
        name={RoutesNames.Users}
        component={UserList}
        options={{
          title: 'Users',
        }}
      />
      <UserTabCreator.Screen
        name={RoutesNames.Details}
        component={UserDetail}
        options={{ title: 'User Detail' }}
      />
    </UserTabCreator.Navigator>
  );
};

export default UsersScreens;
