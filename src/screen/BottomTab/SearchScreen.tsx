import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../theme/Colors';
import {Title} from '../../utils/Typography';
import Strings from '../../utils/Strings';
import FONTS from '../../utils/Fonts';

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Title fontFamily={FONTS.LATO_BOLD} color={Colors.gray}>
        {Strings.commingSoon}
      </Title>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
