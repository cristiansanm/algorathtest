import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import MainStack from '@router/stacks/MainStack';
import { useState } from 'react';
export const navigationRef = createNavigationContainerRef();

const RoutesProvider: React.FC = () => {
  const [isNavigatorReady, setIsNavigatorReady] = useState<boolean>(false);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        setIsNavigatorReady(true);
      }}>
      {isNavigatorReady && <MainStack />}
    </NavigationContainer>
  );
};

export default RoutesProvider;
