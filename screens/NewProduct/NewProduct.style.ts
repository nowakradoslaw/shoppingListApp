// src/screens/HomeScreen/HomeScreen.style.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  wrapperInput: {
    flexDirection: 'column',
    alignSelf: 'center',
    padding: 20,
    marginTop: 50,
    width: '90%',
  },
  titleInput: {
    fontSize: 20,
  },
  textInput: {
    borderBottomColor: 'black',
    borderWidth: 1,
    flex: 1,
    margin: 5,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textData: {
    fontSize: 20,
  },
});
