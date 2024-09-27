import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screenContainerStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  horizontalPadding: {
    paddingHorizontal: 16,
  },
  safeAreaContainerStyle: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: Platform.OS === 'android' ? 10 : 0,
  },
});
