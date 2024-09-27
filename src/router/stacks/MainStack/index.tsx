import { createStackNavigator } from '@react-navigation/stack';
import { RoutesNames } from '@router/routes/names';
import React from 'react';
import MainTabsStack from '../MainTabsStack';

const MainStackCreator = createStackNavigator();
const MainStack = () => {
  return (
    <MainStackCreator.Navigator
      initialRouteName={RoutesNames.Drawer}
      screenOptions={{ headerShown: false }}>
      <MainStackCreator.Screen
        name={RoutesNames.Drawer}
        component={MainTabsStack}
      />
    </MainStackCreator.Navigator>
  );
};

export default MainStack;
