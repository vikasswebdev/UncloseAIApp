import 'react-native-gesture-handler';
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import Router from './src/router';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <Router />
    </NativeBaseProvider>
  );
};

export default App;
