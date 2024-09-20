import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTab from './BottomTabNavigator';
import {ROUTE} from '../utils/RouteName';

const Drawer = createDrawerNavigator();

/**
 * Generate the DrawerNavigator component.
 *
 * @return {React.ReactNode} The rendered DrawerNavigator component.
 */
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
      }}>
      <Drawer.Screen name={ROUTE.BOTTOM_TAB_NAVIGATOR} component={BottomTab} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
