import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';
import Header from './src/components/Header/Header';

const App = () => {
  return (
    <>
      <Header/>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
};

export default App;