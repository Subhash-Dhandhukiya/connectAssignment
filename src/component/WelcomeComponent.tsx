import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Colors from '../theme/Colors';
import {HelperText, Title} from '../utils/Typography';
import Strings from '../utils/Strings';
import SearchComponent from './SearchComponent';
import SvgIcon from './SvgIcon';
import SvgIcons from '../res/svgs';

/**
 * A component that displays a welcome screen with a search bar and a bubble icon.
 * @returns {React.JSX.Element} A JSX element representing the WelcomeComponent.
 */
const WelcomeComponent = (): React.JSX.Element => {
  const [search, setSearch] = useState<string>('');

  return (
    <View style={styles.container}>
      <HelperText>{Strings.welcome}</HelperText>
      <Title>{Strings.findYourDreamSector}</Title>

      <SearchComponent
        customStyle={styles.searchContainer}
        value={search}
        onChangeText={text => setSearch(text)}
        placeholderColor={Colors.gray}
      />

      <SvgIcon
        style={styles.bubbleStyle}
        name={SvgIcons.bubbleIcon}
        height={100}
        width={100}
      />
    </View>
  );
};

export default WelcomeComponent;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 100,
    left: 0,
    backgroundColor: Colors.lightGreen,
    paddingHorizontal: 32,
    paddingVertical: 21,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    width: '70%',
  },
  searchContainer: {
    marginTop: 12,
  },
  bubbleStyle: {
    position: 'absolute',
    top: -15,
    right: 0,
  },
});
