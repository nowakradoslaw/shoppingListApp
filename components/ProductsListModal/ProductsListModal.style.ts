import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerModal: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.8)',
  },
  container: {
    width: '70%',
    height: '50%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 2,
    marginTop: 50,
  },
  inputTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },
  inputName: {
    fontSize: 20,
  },
  inputText: {
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: 'black',
    flex: 1,
  },
  addProductButton: {
    width: '90%',
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closebutton: {
    width: '50%',
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});
