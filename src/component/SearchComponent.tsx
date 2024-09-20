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
