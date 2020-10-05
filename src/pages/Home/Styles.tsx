import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
  container: {
    backgroundColor: '#12132F',
    flex:1,
  },
  title: {
    fontSize: 26,
    color: '#5FD393',
    alignSelf: 'center',
    padding: 20,
  },
  flat: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#5FD393',
    color: '#fff',
  },
  button: {
    backgroundColor: '#5FD393',
    borderRadius: 50,
    width: 300,
    marginVertical: 20,
    alignSelf: 'center'
  },
  buttonText: {
    padding: 15,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#12132F',
    alignSelf: 'center',
  },
});

export {styles};