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
  headingWrapper: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  headingItem: {
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
  },
  flatListItemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  flatListItemText: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
  },
  buttonItem: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
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
