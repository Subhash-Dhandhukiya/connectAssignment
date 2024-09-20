import {StyleProp, StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import React from 'react';
import SvgIcons from '../res/svgs';
import SvgIcon from './SvgIcon';
import Colors from '../theme/Colors';
import Strings from '../utils/Strings';

interface SearchComponentProps {
  value: string;
  onChangeText: (value: string) => void;
  customStyle: StyleProp<ViewStyle>;
  rightIcon?: boolean;
  placeholderColor: string;
}

/**
 * A SearchComponent is a text input with a search icon and a potential
 * right icon. It's used on the home screen.
 *
 * @param {string} value - The current value of the text input.
 * @param {function} onChangeText - A callback that is called when the text
 * changes.
 * @param {style} customStyle - An optional custom style to apply to the
 * component.
 * @param {boolean} rightIcon - Whether or not to show the right icon.
 * @param {string} placeholderColor - The color of the placeholder text.
 *
 * @returns {React.JSX.Element} - The SearchComponent.
 */
const SearchComponent: React.FC<SearchComponentProps> = ({
  value,
  onChangeText,
  customStyle,
  rightIcon,
  placeholderColor,
}): React.JSX.Element => {
  return (
    <View style={[styles.container, customStyle]}>
      <SvgIcon name={SvgIcons.search2Icon} height={20} width={20} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.textInputStyle}
        placeholder={Strings.whatAreYouLookingFor}
        placeholderTextColor={placeholderColor}
      />

      {rightIcon && (
        <SvgIcon name={SvgIcons.settingIcon} height={20} width={20} />
      )}
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  textInputStyle: {
    marginLeft: 16,
    flex: 1,
  },
});
