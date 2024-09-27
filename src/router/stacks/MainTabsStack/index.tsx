import MainPage from '@modules/MainPage/container';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RoutesNames } from '@router/routes/names';
import UsersScreens from './stacks/Users';

const TabCreator = createBottomTabNavigator();

const MainTabsStack = () => {
  return (
    <TabCreator.Navigator>
      <TabCreator.Screen name={RoutesNames.Home} component={MainPage} />
      <TabCreator.Screen
        name={RoutesNames.UsersTab}
        component={UsersScreens}
        options={{ headerShown: false }}
      />
    </TabCreator.Navigator>
  );
};

export default MainTabsStack;
