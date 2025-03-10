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
    width: 60, // Ensure width and height are equal
    height: 60, // This ensures a perfect circle
    backgroundColor: '#1E6738',
    borderRadius: 30, // Should be at least half of width/height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 40,
  },
});
