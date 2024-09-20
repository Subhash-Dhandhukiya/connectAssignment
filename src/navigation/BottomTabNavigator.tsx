import React, {useEffect, useRef} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ROUTE} from '../utils/RouteName';
import Strings from '../utils/Strings';
import {
  ExploreScreen,
  HomeScreen,
  ProfileScreen,
  SearchScreen,
} from '../screen';
import Colors from '../theme/Colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';
import {SvgIcon} from '../component';
import SvgIcons from '../res/svgs';
import {SmallText} from '../utils/Typography';

const TabArr = [
  {
    route: ROUTE.HOME_SCREEN,
    label: Strings.home,
    blurIcon: SvgIcons.homeBlur,
    focuedIcon: SvgIcons.homeFilled,
    component: HomeScreen,
    color: Colors.lightPerple,
    alphaClr: Colors.perple,
  },
  {
    route: ROUTE.SEARCH_SCREEN,
    label: Strings.search,
    blurIcon: SvgIcons.searchBlur,
    focuedIcon: SvgIcons.searchFilled,
    component: SearchScreen,
    color: Colors.lightPerple,
    alphaClr: Colors.perple,
  },
  {
    route: ROUTE.EXPLORE_SCREEN,
    label: Strings.explore,
    blurIcon: SvgIcons.exploreBlur,
    focuedIcon: SvgIcons.exploreFilled,
    component: ExploreScreen,
    color: Colors.lightPerple,
    alphaClr: Colors.perple,
  },
  {
    route: ROUTE.PROFILE_SCREEN,
    label: Strings.profile,
    blurIcon: SvgIcons.profileBlur,
    focuedIcon: SvgIcons.profileFilled,
    component: ProfileScreen,
    color: Colors.lightPerple,
    alphaClr: Colors.perple,
  },
];

const Tab = createBottomTabNavigator();

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef?.current?.animate({0: {scale: 0}, 1: {scale: 1}});
      textViewRef?.current?.animate({0: {scale: 0}, 1: {scale: 1}});
    } else {
      viewRef?.current?.animate({0: {scale: 1}, 1: {scale: 0}});
      textViewRef?.current?.animate({0: {scale: 1}, 1: {scale: 0}});
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, {flex: focused ? 1 : 0.65}]}>
      <View>
        <Animatable.View
          ref={viewRef}
          style={[
            StyleSheet.absoluteFillObject,
            {backgroundColor: item.color, borderRadius: 16},
          ]}
        />
        <View style={styles.btn}>
          <SvgIcon name={focused ? item.focuedIcon : item.blurIcon} />
          <Animatable.View ref={textViewRef}>
            {focused && (
              <SmallText style={{paddingHorizontal: 8, fontWeight: '700'}}>
                {item?.label}
              </SmallText>
            )}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function BottomTab() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabStyle,
          tabBarHideOnKeyboard: true,
        }}>
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                tabBarShowLabel: false,
                tabBarButton: props => <TabButton {...props} item={item} />,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
  },
  tabStyle: {
    height: 80,
    position: 'absolute',
    borderRadius: 16,
  },
});
