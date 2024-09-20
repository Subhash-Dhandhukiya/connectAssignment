import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HelperText, SmallText} from '../utils/Typography';
import FONTS from '../utils/Fonts';
import Colors from '../theme/Colors';
import SvgIcon from './SvgIcon';
import SvgIcons from '../res/svgs';

const ReviewComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentStyle}>
        <HelperText fontFamily={FONTS.LATO_BOLD} style={{fontWeight: '700'}}>
          Pooja Jain
        </HelperText>
        <SvgIcon name={SvgIcons.ratingIcon} height={40} width={150} />
        <SmallText>
          Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.
        </SmallText>
      </View>

      <Image
        source={{uri: 'https://picsum.photos/200/300'}}
        style={styles.imageStyle}
      />
    </View>
  );
};

export default ReviewComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#FFCCD2',
    paddingLeft: 13,
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  contentStyle: {
    flex: 1,
    paddingVertical: 12,
  },
});
