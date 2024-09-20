import {FlatList, Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../theme/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {
  Header,
  ReviewComponent,
  SearchComponent,
  ServiceComponent,
  SubTitleComponent,
  SvgIcon,
} from '../../component';
import SvgIcons from '../../res/svgs';
import {HeaderText, MediumText, SmallText} from '../../utils/Typography';
import Strings from '../../utils/Strings';
import FONTS from '../../utils/Fonts';
import imageConstants from '../../utils/imageConstant';
import {SafeAreaView} from 'react-native-safe-area-context';

const PetScreen = () => {
  const [search, setSearch] = useState<string>('');

  function generateRandomHeight() {
    return Math.floor(Math.random() * (200 - 150 + 1)) + 150;
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={Colors.linearLightOrange}
        style={styles.linearGradient}>
        <Header isMiddle={true} rightIcon={SvgIcons.bellIcon} />

        <View style={styles.headerStyle}>
          <HeaderText color={Colors.black} fontFamily={FONTS.LATO_BOLD}>
            {Strings.hello}
          </HeaderText>
          <MediumText color={Colors.black}>
            {Strings.fancyForWashToday}
          </MediumText>
          <SvgIcon
            style={styles.feetStyle}
            name={SvgIcons.petFeet1}
            height={40}
            width={30}
          />

          <SvgIcon
            style={styles.feet2Style}
            name={SvgIcons.petFeet2}
            height={40}
            width={30}
          />

          <View style={styles.puppyStyle}>
            <SvgIcon name={SvgIcons.puppy1} height={80} width={65} />
            <SvgIcon name={SvgIcons.puppy2} height={80} width={65} />
            <SvgIcon name={SvgIcons.puppy3} height={80} width={65} />
          </View>
        </View>

        <ScrollView
          style={styles.subContainer}
          showsVerticalScrollIndicator={false}>
          <SearchComponent
            value={search}
            onChangeText={text => setSearch(text)}
            customStyle={{
              backgroundColor: Colors.lightPink,
            }}
            rightIcon={true}
            placeholderColor={Colors.placeholderPink}
          />

          <SubTitleComponent title={Strings.popularServices} />

          <FlatList
            data={[
              {image: imageConstants.image1},
              {image: imageConstants.image2},
              {image: imageConstants.image3},
              {image: imageConstants.image4},
              {image: imageConstants.image5},
            ]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <Image source={item.image} style={styles.imageStyle} />
            )}
            style={{flex: 1}}
            numColumns={2}
          />

          <SubTitleComponent title={Strings.serviceProviders} />

          <FlatList
            data={[1, 2, 3]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <ServiceComponent />}
          />

          <SubTitleComponent title={Strings.ratings} />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <SmallText
              fontFamily={FONTS.LATO_BOLD}
              color={Colors.placeholderPink}>
              {Strings.reviews}
            </SmallText>
            <SmallText
              fontFamily={FONTS.LATO_BOLD}
              color={Colors.placeholderPink}>
              {Strings.writeReview}
            </SmallText>
          </View>

          <FlatList
            data={[1, 2, 3]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <ReviewComponent />}
            style={{marginBottom: 30}}
          />

          <SafeAreaView />
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default PetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 5,
    paddingTop: 40,
  },
  headerStyle: {
    paddingHorizontal: 15,
    marginTop: 16,
    paddingBottom: 80,
  },
  subContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
    paddingVertical: 40,
    borderTopLeftRadius: 20,
  },
  feetStyle: {
    position: 'absolute',
    bottom: 20,
    left: 30,
  },
  feet2Style: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  puppyStyle: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: -5,
    right: 20,
    zIndex: 10,
  },
  imageStyle: {
    height: 150,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 15,
  },
});
