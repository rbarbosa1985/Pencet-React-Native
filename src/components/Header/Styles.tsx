import { StyleSheet } from 'react-native';
import { ScreenStackHeaderRightView } from 'react-native-screens';

const styles = StyleSheet.create ({
  container: {
    flexDirection: 'row',
    backgroundColor: '#12132F',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    height: 90
  },
  text: {
    fontSize: 16,
    color: '#6AC0C9',
    alignSelf: 'center',
    padding: 20,
    fontWeight: 'bold',
    
  },
  logo: {
    width: 30,
    height: 50,
    alignSelf: 'flex-end',
    resizeMode: 'stretch',
    alignItems: 'flex-end'
  }
});

export {styles};