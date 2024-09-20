import {Alert, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../theme/Colors';
import {ExtraSmallText, HelperText, SmallText} from '../utils/Typography';
import Strings from '../utils/Strings';
import FONTS from '../utils/Fonts';
import SvgIcon from './SvgIcon';
import SvgIcons from '../res/svgs';

const BlogComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://picsum.photos/200/300'}}
        style={styles.imageStyle}
      />

      <View style={{flex: 1}}>
        <HelperText fontFamily={FONTS.LATO_BOLD}>
          {Strings.dummyBlog}
        </HelperText>

        <View style={styles.dateContainer}>
          <ExtraSmallText>{Strings.date}</ExtraSmallText>

          <TouchableOpacity
            style={styles.btnStyle}
            onPress={() => Alert.alert('Comming soon...')}>
            <SmallText color={Colors.white} fontFamily={FONTS.LATO_BOLD}>
              {Strings.explore}
            </SmallText>
          </TouchableOpacity>
        </View>
      </View>

      <SvgIcon
        name={SvgIcons.effect1}
        height={60}
        width={60}
        style={styles.effect1Style}
      />
      <SvgIcon
        height={60}
        width={60}
        name={SvgIcons.effect2}
        style={styles.effect1Style}
      />

      <SvgIcon
        height={30}
        width={30}
        name={SvgIcons.effect3}
        style={styles.effect2Style}
      />
      <SvgIcon
        height={30}
        width={30}
        name={SvgIcons.effect4}
        style={styles.effect2Style}
      />
    </View>
  );
};

export default BlogComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 17,
    backgroundColor: Colors.purpleBg,
    borderRadius: 15,
    marginBottom: 12,
    flex: 1,
  },
  imageStyle: {
    height: 88,
    width: 82,
    borderRadius: 10,
    marginRight: 12,
  },
  dateContainer: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnStyle: {
    backgroundColor: Colors.purpleBtnBg,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 100,
  },
  effect1Style: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  effect2Style: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});
