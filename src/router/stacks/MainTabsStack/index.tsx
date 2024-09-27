import { AntDesign } from '@expo/vector-icons';
import MainPage from '@modules/MainPage/container';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RoutesNames } from '@router/routes/names';
import { FC } from 'react';
import UsersScreens from './stacks/Users';

const TabCreator = createBottomTabNavigator();

const CustomTabBarIcon: FC<{ name: any; color: string }> = ({
  name,
  color,
}) => {
  return <AntDesign name={name} size={24} color={color} />;
};

const MainTabsStack = () => {
  return (
    <TabCreator.Navigator>
      <TabCreator.Screen
        name={RoutesNames.Home}
        component={MainPage}
        options={{
          tabBarIcon: ({ color }) => CustomTabBarIcon({ name: 'home', color }),
        }}
      />
      <TabCreator.Screen
        name={RoutesNames.UsersTab}
        component={UsersScreens}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => CustomTabBarIcon({ name: 'user', color }),
        }}
      />
    </TabCreator.Navigator>
  );
};

export default MainTabsStack;
