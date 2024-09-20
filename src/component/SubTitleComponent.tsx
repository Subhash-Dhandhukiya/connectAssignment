import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {HelperText} from '../utils/Typography';
import FONTS from '../utils/Fonts';
import SvgIcon from './SvgIcon';
import SvgIcons from '../res/svgs';

interface SubTitleComponentProps {
  title: string;
}

/**
 * A component that displays a subtitle with an SVG icon.
 *
 * It displays a bold header text and an SVG icon that displays a '...' icon.
 * The SVG icon is a TouchableOpacity and when pressed, it will
 * display an alert saying 'Comming soon...'.
 *
 * @param {SubTitleComponentProps} props - The props for the component.
 * @returns {React.JSX.Element} A JSX element representing the component.
 */
const SubTitleComponent: React.FC<SubTitleComponentProps> = ({
  title,
}): React.JSX.Element => {
  return (
    <View style={styles.categoryContainer}>
      <HelperText fontFamily={FONTS.LATO_BOLD}>{title}</HelperText>
      <TouchableOpacity onPress={() => Alert.alert('Comming soon...')}>
        <SvgIcon name={SvgIcons.dotsIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default SubTitleComponent;

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginTop: 16,
  },
});
