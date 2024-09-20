import {
  Alert,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SvgIcon from './SvgIcon';
import SvgIcons from '../res/svgs';
import Strings from '../utils/Strings';
import Colors from '../theme/Colors';

interface HeaderProps {
  isMiddle: boolean;
  rightIcon: SVGElement;
}

const Header: React.FC<HeaderProps> = ({
  isMiddle,
  rightIcon,
}): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.leftIconStyle}
        onPress={() => Alert.alert(Strings.commingSoon)}>
        <SvgIcon name={SvgIcons.menuIcon} height={24} width={24} />
      </TouchableOpacity>
      {isMiddle ? (
        <SvgIcon
          style={{flex: 1}}
          name={SvgIcons.logoIcon}
          height={24}
          width={24}
        />
      ) : (
        <View style={{flex: 1}} />
      )}
      <TouchableOpacity
        style={styles.rightIconStyle}
        onPress={() => Alert.alert(Strings.commingSoon)}>
        <SvgIcon name={rightIcon} height={24} width={24} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftIconStyle: {
    flex: 1,
    marginLeft: 20,
  },
  rightIconStyle: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20,
  },
});
