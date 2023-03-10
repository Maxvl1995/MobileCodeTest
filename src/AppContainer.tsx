import { navigationRef, routeNameRef } from "@navigation/UNavigation";
import { NavigationContainer, NavigationState } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { RXStore } from "./common/redux";
import { AppRoutes } from "./navigation/app.router";
import { TReduxState } from "@redux/store/configureStore";
import { getActiveRouteName, navigationTheme } from "./stacks/StackConfig";
import { ThemeContext } from "./theme";
import NewsList from "@screens/NewsList";
import Detail from "@screens/Detail";

const Authentication = createStackNavigator();
const BaseStack = createStackNavigator();

const AppContainer = () => {
  const { theme } = useContext(ThemeContext);
  const navTheme = navigationTheme(theme);
  const authState = useSelector((state: TReduxState) => state.AuthReducer);

  const onStateChange = (state?: NavigationState) => {
    if (state) {
      const currentRouteName = getActiveRouteName(state);
      routeNameRef.current = currentRouteName;
    }
  };

  const AuthenticationNavigator = () => {
    return (
      <Authentication.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Authentication.Screen
          name={AppRoutes.NEWS_LIST}
          component={NewsList}
        />
      </Authentication.Navigator>
    );
  };

  const BaseNavigator = () => {
    return (
      <BaseStack.Navigator>
        <BaseStack.Screen name={AppRoutes.NEWS_LIST} component={NewsList} />
        <BaseStack.Screen name={AppRoutes.DETAIL} component={Detail} />
      </BaseStack.Navigator>
    );
  };

  return (
    <NavigationContainer
      theme={navTheme}
      ref={navigationRef}
      onStateChange={onStateChange}
    >
      <>
        <BaseNavigator />
        <RXStore />
      </>
    </NavigationContainer>
  );
};

export default AppContainer;
