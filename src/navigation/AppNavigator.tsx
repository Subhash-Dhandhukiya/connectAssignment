import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTE} from '../utils/RouteName';
import {navigationRef} from './NavigationService';
import {PetScreen, SplashScreen} from '../screen';
import BottomTab from './BottomTabNavigator';
import DrawerNavigator from './DrawerNavigation';

const Stack = createStackNavigator();

const AppNavigatorContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false, gestureEnabled: false}}
          name={ROUTE.SPLASH_SCREEN}
          component={SplashScreen}
        />

        <Stack.Screen
          options={{headerShown: false, gestureEnabled: false}}
          name={ROUTE.BOTTOM_TAB_NAVIGATOR}
          component={BottomTab}
        />

        <Stack.Screen
          options={{headerShown: false, gestureEnabled: false}}
          name={ROUTE.PET_SCREEN}
          component={PetScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigatorContainer;
