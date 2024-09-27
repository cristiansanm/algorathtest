import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  dataContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    width: 50,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  userIcon: {
    borderColor: 'black',
    borderWidth: 0.5,
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  userData: { flex: 0.7 },
  userCardContainer: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    padding: 10,
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
});
