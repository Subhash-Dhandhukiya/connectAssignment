import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import AppNavigatorContainer from '../navigation/AppNavigator';

const AppContainer = () => {
  return (
    <View style={styles.container}>
      <AppNavigatorContainer />
    </View>
  );
};

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
