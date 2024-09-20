import React from 'react';
import {
  StackActions,
  CommonActions,
  DrawerActions,
  TabActions,
  NavigationContainerRef,
} from '@react-navigation/native';
import {isEmptyOrNull} from '../utils/Validations';
import {RootStackParamList} from '../utils/RouteName';

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

/**
 * Navigates to a specific route with optional parameters.
 *
 * @param {string} routeName - The name of the route to navigate to.
 * @param {object} params - Optional parameters to pass to the route.
 */
function navigate(routeName: string, params?: any) {
  navigationRef.current &&
    (navigationRef.current as any).navigate(routeName, params);
}

/**
 * Replaces the current screen in the navigation stack with a new screen.
 *
 * @param {string} routeName - The name of the route to replace with.
 * @param {Object} params - The parameters to pass to the route.
 * @return {void} This function does not return anything.
 */
function replace(routeName: string, params?: any) {
  navigationRef.current &&
    (navigationRef.current as any).dispatch(
      StackActions.replace(routeName, params),
    );
}

/**
 * A function that navigates back in the application.
 *
 * @return {void} No return value.
 */
function goBack() {
  navigationRef.current && (navigationRef.current as any).goBack();
}

/**
 * Pop to the top of the navigation stack.
 *
 * @param {number} count - The number of screens to pop. If null or empty, it will pop to the top.
 * @return {void} - This function does not return anything.
 */
function popToTop(count?: number) {
  if (count && !isEmptyOrNull(count)) {
    navigationRef.current &&
      (navigationRef.current as any).dispatch(StackActions.pop(count));
  } else {
    navigationRef.current &&
      (navigationRef.current as any).dispatch(StackActions.popToTop());
  }
}

/**
 * Resets the navigation to a specified route.
 *
 * @param {string} routeName - The name of the route to reset to.
 * @return {void} - This function does not return anything.
 */
function reset(routeNames: string[]) {
  navigationRef.current &&
    (navigationRef.current as any).dispatch(
      CommonActions.reset({
        index: 0,
        routeNames: routeNames,
        routes: routeNames.map(name => ({name: name})),
      }),
    );
}

/**
 * Toggles the drawer.
 *
 * @return {void} - This function does not return anything.
 */
function toggleDrawer() {
  navigationRef.current &&
    (navigationRef.current as any).dispatch(DrawerActions.toggleDrawer());
}

/**
 * Calls the navigationRef to jump to a specified route with optional parameters.
 *
 * @param {string} routeName - The name of the route to jump to.
 * @param {Object} params - Optional parameters to pass to the route.
 * @return {void} - This function does not return anything.
 */
function jumpTo(routeName: string, params?: any) {
  navigationRef.current &&
    (navigationRef.current as any).dispatch(
      TabActions.jumpTo(routeName, params),
    );
}

export default {
  navigate,
  replace,
  goBack,
  reset,
  popToTop,
  toggleDrawer,
  jumpTo,
};
