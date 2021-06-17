import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "./sources/controllers/Login";
import RegisterScreen from "./sources/controllers/Register";
import Issue from "./sources/controllers/Issue";
import DrawerContent from "./sources/components/DrawerContent";
import { Provider } from "react-redux";
import store from "./sources/reduxs/store";
import {navigationRef} from './sources/navigators/navigationService'
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator
        initialRouteName="Issue"
        drawerContent={() => <DrawerContent />}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Issue"
          component={Issue}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
