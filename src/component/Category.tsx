import {Alert, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import SvgIcon from './SvgIcon';
import {HelperText} from '../utils/Typography';
import Colors from '../theme/Colors';
import LinearGradient from 'react-native-linear-gradient';
import NavigationService from '../navigation/NavigationService';
import {ROUTE} from '../utils/RouteName';

interface CategoryProps {
  iconName: SVGElement;
  title: String;
  colors: string[];
}

const Category: React.FC<CategoryProps> = ({
  iconName,
  title,
  colors,
}): React.JSX.Element => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, {borderColor: colors[1]}]}
      onPress={() => NavigationService.navigate(ROUTE.PET_SCREEN)}>
      <LinearGradient
        style={styles.container}
        colors={colors}
        start={{x: 0, y: 0}}>
        <SvgIcon name={iconName} />
        <HelperText style={{marginLeft: 10}} color={Colors.textColor}>
          {title}
        </HelperText>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    overflow: 'hidden',
    borderRadius: 20,
  },
  mainContainer: {
    marginBottom: 12,
    marginHorizontal: 4,
    borderWidth: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
});
