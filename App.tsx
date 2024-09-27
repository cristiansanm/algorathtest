import RoutesProvider from '@router/provider';
import { store } from '@services/redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RoutesProvider />
      </SafeAreaProvider>
    </Provider>
  );
}
