import {SafeAreaView, Text, TextInput} from 'react-native';
import React, {useEffect} from 'react';
import AppContainer from './src/container/AppContainer';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppContainer />
    </SafeAreaView>
  );
};

export default App;
