import { configureStore } from '@reduxjs/toolkit';
//import devtoolsEnhancer from 'redux-devtools-expo-dev-plugin';
import { RootState } from './basics';
import { rootReducer } from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});
const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
export type AppStore = ReturnType<typeof setupStore>;
export { setupStore, store };
