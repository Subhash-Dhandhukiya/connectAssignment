import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Colors from '../theme/Colors';
import NavigationService from '../navigation/NavigationService';
import {ROUTE} from '../utils/RouteName';
import {Title} from '../utils/Typography';
import Strings from '../utils/Strings';
import FONTS from '../utils/Fonts';

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      NavigationService.replace(ROUTE.BOTTOM_TAB_NAVIGATOR);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Title fontFamily={FONTS.LATO_BOLD} color={Colors.gray}>
        {Strings.splash}
      </Title>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
