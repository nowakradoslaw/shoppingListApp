import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'column',
    flexGrow: 1,
  },
  title: {
    fontSize: 34,
    textAlign: 'center',
    marginTop: 20,
  },
  flatListWrapper: {},
  flatListItemWrapper: {
    flexDirection: 'row',
  },
  flatListItemText: {
    fontSize: 20,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 80,
    height: 80,
    backgroundColor: 'blue',
    borderRadius: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 60,
  },
});
