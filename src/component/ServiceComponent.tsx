import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ExtraSmallText, HelperText, SmallText} from '../utils/Typography';
import Colors from '../theme/Colors';
import FONTS from '../utils/Fonts';
import SvgIcon from './SvgIcon';
import SvgIcons from '../res/svgs';

const ServiceComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://picsum.photos/200/300'}}
        style={styles.profileStyle}
      />

      <View style={{flex: 1, marginLeft: 12}}>
        <HelperText fontFamily={FONTS.LATO_BOLD}>Rohit Singhania</HelperText>
        <SmallText>
          Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.
        </SmallText>

        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => Alert.alert('comming soon...')}>
          <ExtraSmallText fontFamily={FONTS.LATO_BOLD} color={Colors.white}>
            Know More
          </ExtraSmallText>
        </TouchableOpacity>
      </View>

      <SvgIcon
        name={SvgIcons.sideEffect1}
        height={40}
        width={40}
        style={styles.effect2}
      />
      <SvgIcon
        height={50}
        width={50}
        name={SvgIcons.sideEffect2}
        style={styles.effect1}
      />
    </View>
  );
};

export default ServiceComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE7EA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginBottom: 12,
  },
  profileStyle: {
    height: 66,
    width: 66,
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
  },
  btnStyle: {
    backgroundColor: '#CF76DD',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  effect1: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  effect2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});
