import { CommonActions, StackActions } from '@react-navigation/native';

import { navigationRef } from '@router/provider';
import { RoutesNames } from './names';

export const RoutesActions = {
  isReady: () => {
    return navigationRef?.current?.isReady();
  },
  currentScene: () => {
    if (navigationRef?.current?.isReady()) {
      return navigationRef?.getCurrentRoute()?.name;
    }
    return '';
  },
  pop: () => {
    if (navigationRef?.current?.isReady()) {
      if (navigationRef?.current?.canGoBack()) {
        navigationRef?.current?.dispatch(StackActions.pop());
      } else {
        navigationRef?.current?.navigate(RoutesNames.Drawer as never);
      }
    }
  },

  popTo: (key: string, params?: any) => {
    if (navigationRef?.current?.isReady()) {
      navigationRef?.current.dispatch(StackActions.replace(key, params));
    }
  },

  route: (name: RoutesNames, params: any) => {
    if (navigationRef?.current?.isReady()) {
      navigationRef?.current.navigate(name, params);
    }
  },

  reset: (name: string) => {
    if (navigationRef?.current?.isReady()) {
      navigationRef.current.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name }],
        }),
      );
    }
  },
};
