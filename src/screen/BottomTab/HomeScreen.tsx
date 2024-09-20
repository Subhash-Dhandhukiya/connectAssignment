import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../theme/Colors';
import {
  BlogComponent,
  Category,
  Header,
  SubTitleComponent,
  WelcomeComponent,
} from '../../component';
import SvgIcons from '../../res/svgs';
import LinearGradient from 'react-native-linear-gradient';
import Strings from '../../utils/Strings';
import imageConstants from '../../utils/imageConstant';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.transparent} translucent />
      <LinearGradient
        colors={Colors.linearPurple}
        style={styles.linearGradient}>
        <Header isMiddle={false} rightIcon={SvgIcons.logoIcon} />
      </LinearGradient>
      <WelcomeComponent />

      <ScrollView
        style={styles.subContainer}
        showsVerticalScrollIndicator={false}>
        <SubTitleComponent title={Strings.exploreCategories} />

        <View style={styles.categoryStyle}>
          <Category
            colors={Colors.linearBlue}
            iconName={SvgIcons.constructor}
            title={Strings.construction}
          />
          <Category
            colors={Colors.linearYellow}
            iconName={SvgIcons.filmIcon}
            title={Strings.entertainment}
          />
          <Category
            colors={Colors.linearPink}
            iconName={SvgIcons.petIcon}
            title={Strings.petCare}
          />
          <Category
            colors={Colors.linearGreen}
            iconName={SvgIcons.houseCare}
            title={Strings.homeCare}
          />
          <Category
            colors={Colors.linearOrange}
            iconName={SvgIcons.eventIcon}
            title={Strings.events}
          />
          <Category
            colors={Colors.linearPurple2}
            iconName={SvgIcons.healthCare}
            title={Strings.healthcare}
          />
        </View>

        <SubTitleComponent title={Strings.popularSectors} />

        <FlatList
          data={[
            {image: imageConstants.homeService},
            {image: imageConstants.healthCare},
          ]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <Image source={item.image} style={styles.imageStyle} />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
        />

        <SubTitleComponent title={Strings.recommendedForYou} />

        <FlatList
          data={[1, 2]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <BlogComponent />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{marginBottom: 100}}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    height: 186,
    borderBottomRightRadius: 50,
    paddingTop: 40,
  },

  categoryStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  subContainer: {
    paddingHorizontal: 20,
    marginTop: 100,
  },
  imageStyle: {
    marginRight: 16,
    height: 140,
    width: 163,
  },
});
